import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG, emailTemplates } from '@/lib/email';
import { z } from 'zod';

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = contactFormSchema.parse(body);
    
    // Generate email template
    const emailContent = emailTemplates.contactForm(validatedData);
    
    // Check if Resend is configured
    if (!resend) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please call us directly at (512) 763-5277.' },
        { status: 500 }
      );
    }
    
    // Send email
    const { data, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: validatedData.email,
      subject: emailContent.subject,
      html: emailContent.html,
    });
    
    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!',
        id: data?.id 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
