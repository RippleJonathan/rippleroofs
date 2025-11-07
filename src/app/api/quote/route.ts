import { NextRequest, NextResponse } from 'next/server'
import { resend, EMAIL_CONFIG, emailTemplates } from '@/lib/email'
import { quoteFormSchema } from '@/lib/validations/quote'
import type { QuoteFormData } from '@/types'

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate form data
    const validatedData = quoteFormSchema.parse(body)

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

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
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
