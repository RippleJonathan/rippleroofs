import { NextRequest, NextResponse } from 'next/server'
import { resend, EMAIL_CONFIG, emailTemplates } from '@/lib/email'
import { quoteFormSchema } from '@/lib/validations/quote'
import type { QuoteFormData } from '@/types'

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Rate limit: 3 submissions per IP per hour
const RATE_LIMIT_MAX = 3
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    // First submission or window expired
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false // Rate limit exceeded
  }

  // Increment count
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
}, 5 * 60 * 1000) // Clean up every 5 minutes

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
          message: 'Too many submission attempts. Please try again later or call us directly at (512) 763-5277.',
          error: 'Rate limit exceeded',
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()

    // Honeypot check - if _website field has value, it's a bot
    if (body._website && body._website.length > 0) {
      console.log('🤖 Bot detected via honeypot:', { ip, data: body })
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid submission detected.',
          error: 'Spam detected',
        },
        { status: 400 }
      )
    }

    // Timing check - reject submissions faster than 3 seconds
    // This compares form mount time to submission time
    if (body._timestamp) {
      const formMountTime = body._timestamp
      const currentTime = Date.now()
      const timeDiff = currentTime - formMountTime
      
      // If form was filled out too quickly (< 3 seconds), it's likely a bot
      // Allow reasonable buffer for legitimate fast users
      if (timeDiff < 2000) { // 2 seconds minimum
        console.log('⏱️ Suspicious timing detected (too fast):', { ip, timeDiff })
        return NextResponse.json(
          {
            success: false,
            message: 'Please take a moment to review your information.',
            error: 'Timing validation failed',
          },
          { status: 400 }
        )
      }
      
      // If timestamp is from the future or way too old (> 1 hour), reject it
      if (timeDiff < 0 || timeDiff > 3600000) {
        console.log('⏱️ Suspicious timing detected (invalid timestamp):', { ip, timeDiff })
        return NextResponse.json(
          {
            success: false,
            message: 'Invalid submission timing.',
            error: 'Timing validation failed',
          },
          { status: 400 }
        )
      }
    }

    // Validate form data
    const validatedData = quoteFormSchema.parse(body)

    // Additional spam detection - check for suspicious patterns
    const suspiciousKeywords = [
      'bitcoin', 'crypto', 'investment', 'casino', 'viagra',
      'loan', 'credit card', 'click here', 'buy now',
    ]
    
    const textToCheck = `${validatedData.name} ${validatedData.message || ''} ${validatedData.address}`.toLowerCase()
    const hasSuspiciousContent = suspiciousKeywords.some(keyword => 
      textToCheck.includes(keyword)
    )

    if (hasSuspiciousContent) {
      console.log('🚫 Suspicious content detected:', { ip, data: validatedData })
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid submission content.',
          error: 'Content validation failed',
        },
        { status: 400 }
      )
    }

    // Prepare data for email template
    const emailData = {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      address: validatedData.address,
      serviceType: validatedData.service,
      message: validatedData.message,
    }

    // Generate email template
    const emailContent = emailTemplates.quoteRequest(emailData)

    // Check if Resend is configured
    if (!resend) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        {
          success: false,
          message: 'Email service not configured. Please call us directly at (512) 763-5277.',
          error: 'Email service unavailable',
        },
        { status: 500 }
      )
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Ripple Roofing <info@rippleroofs.com>',
      to: EMAIL_CONFIG.to,
      replyTo: validatedData.email,
      subject: emailContent.subject,
      html: emailContent.html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send quote request. Please call us directly.',
          error: 'Email service error',
        },
        { status: 500 }
      )
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We\'ll contact you within 24 hours.',
        data: { submittedAt: new Date().toISOString(), emailId: data?.id },
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Quote submission error:', error)

    // Handle validation errors
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Please check your form data.',
          error: 'Validation failed',
        },
        { status: 400 }
      )
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again or call us directly.',
        error: 'Internal server error',
      },
      { status: 500 }
    )
  }
}

// Helper function to generate email HTML (to be implemented)
function generateEmailHTML(data: QuoteFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0f172a; color: white; padding: 20px; text-align: center; }
          .content { background: #f8fafc; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0f172a; }
          .value { color: #475569; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Quote Request</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Address:</div>
              <div class="value">${data.address}</div>
            </div>
            <div class="field">
              <div class="label">Service Needed:</div>
              <div class="value">${data.service}</div>
            </div>
            ${data.message ? `
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${data.message}</div>
              </div>
            ` : ''}
          </div>
        </div>
      </body>
    </html>
  `
}
