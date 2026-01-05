import { NextRequest, NextResponse } from 'next/server'
import { resend, EMAIL_CONFIG, emailTemplates } from '@/lib/email'
import { quoteFormSchema } from '@/lib/validations/quote'
import type { QuoteFormData } from '@/types'

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Rate limit: 3 submissions per IP per hour
const RATE_LIMIT_MAX = 3
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }

  record.count++
  return true
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip)
    }
  }
}, 5 * 60 * 1000)

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many submission attempts. Please try again later or call us directly at (602) 529-3311.',
          error: 'Rate limit exceeded',
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()

    // Honeypot check
    if (body._website && body._website.length > 0) {
      console.log('🤖 Bot detected via honeypot (AZ):', { ip, data: body })
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid submission detected.',
          error: 'Spam detected',
        },
        { status: 400 }
      )
    }

    // Timing check
    if (body._timestamp) {
      const formMountTime = body._timestamp
      const currentTime = Date.now()
      const timeDiff = currentTime - formMountTime
      
      if (timeDiff < 2000) {
        console.log('⏱️ Suspicious timing detected (AZ - too fast):', { ip, timeDiff })
        return NextResponse.json(
          {
            success: false,
            message: 'Please take a moment to review your information.',
            error: 'Timing validation failed',
          },
          { status: 400 }
        )
      }
      
      if (timeDiff < 0 || timeDiff > 3600000) {
        console.log('⏱️ Suspicious timing detected (AZ - invalid timestamp):', { ip, timeDiff })
        return NextResponse.json(
          {
            success: false,
            message: 'Session expired. Please refresh and try again.',
            error: 'Invalid timestamp',
          },
          { status: 400 }
        )
      }
    }

    // Remove internal fields before validation
    const { _website, _timestamp, ...formData } = body

    // Validate form data
    const validationResult = quoteFormSchema.safeParse(formData)
    
    if (!validationResult.success) {
      console.log('❌ Validation failed (AZ):', validationResult.error.flatten())
      return NextResponse.json(
        {
          success: false,
          message: 'Please check your form for errors and try again.',
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const validatedData = validationResult.data as QuoteFormData

    // Additional spam content checks
    const spamPatterns = [
      /\b(viagra|cialis|casino|poker|lottery|forex|crypto)\b/i,
      /(https?:\/\/[^\s]+)/gi, // URLs in message
      /(.)\1{10,}/i, // Repeated characters
      /[^\x00-\x7F]+/g, // Non-ASCII spam
    ]

    const messageContent = `${validatedData.name} ${validatedData.message || ''}`.toLowerCase()
    
    for (const pattern of spamPatterns) {
      if (pattern.test(messageContent)) {
        console.log('🚫 Spam content detected (AZ):', { ip, pattern: pattern.source })
        return NextResponse.json(
          {
            success: false,
            message: 'Invalid content detected. Please remove any links or special characters.',
            error: 'Spam content detected',
          },
          { status: 400 }
        )
      }
    }

    // Send email to Arizona team using Resend
    if (!resend) {
      console.error('📧 Resend not configured')
      return NextResponse.json(
        {
          success: false,
          message: 'Email service not configured. Please call us at (602) 529-3311.',
          error: 'Email service unavailable',
        },
        { status: 503 }
      )
    }

    try {
      const emailTemplate = emailTemplates.quoteRequest({
        ...validatedData,
        serviceType: validatedData.service,
      })

      console.log('📧 Attempting to send email to:', 'az@rippleroofs.com')
      console.log('📧 From:', EMAIL_CONFIG.from)
      console.log('📧 Resend instance exists:', !!resend)

      const result = await resend.emails.send({
        from: EMAIL_CONFIG.from,
        to: 'az@rippleroofs.com', // Arizona-specific email
        replyTo: validatedData.email,
        subject: `🌵 Arizona Quote Request - ${validatedData.name}`,
        html: emailTemplate.html,
      })

      console.log('✅ Resend API response:', result)
      console.log('✅ Arizona quote request sent successfully:', {
        name: validatedData.name,
        email: validatedData.email,
        service: validatedData.service,
      })

      return NextResponse.json({
        success: true,
        message: 'Quote request submitted successfully! Our Arizona team will contact you within 24 hours.',
      })
    } catch (emailError) {
      console.error('📧 Email sending failed (AZ):', emailError)
      
      return NextResponse.json(
        {
          success: false,
          message: 'We received your request but encountered an issue. Please call us at (602) 529-3311.',
          error: 'Email delivery failed',
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('💥 Unexpected error in Arizona quote handler:', error)
    
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again or call us at (602) 529-3311.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
