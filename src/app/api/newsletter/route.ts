import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG, emailTemplates } from '@/lib/email';
import { z } from 'zod';

// Validation schema
const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  source: z.string().default('website'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = newsletterSchema.parse(body);
    
    // Send notification to you
    const notificationContent = emailTemplates.newsletterNotification(validatedData);
    
    const notificationResult = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      subject: notificationContent.subject,
      html: notificationContent.html,
    });
    
    if (notificationResult.error) {
      console.error('Notification error:', notificationResult.error);
    }
    
    // Send welcome email to subscriber
    const welcomeContent = emailTemplates.newsletterWelcome(validatedData);
    
    const welcomeResult = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: validatedData.email,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: welcomeContent.subject,
      html: welcomeContent.html,
    });
    
    if (welcomeResult.error) {
      console.error('Welcome email error:', welcomeResult.error);
      // Still return success if notification worked
      if (!notificationResult.error) {
        return NextResponse.json(
          { 
            success: true, 
            message: 'Subscription recorded!',
            warning: 'Welcome email failed to send'
          },
          { status: 200 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to process subscription' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed! Check your email for a welcome message.',
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
