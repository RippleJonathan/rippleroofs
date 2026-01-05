import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { 
  leadMagnetFormSchema, 
  detectSpamContent, 
  validateFormTiming, 
  checkRateLimit 
} from '@/lib/validations/lead-magnet';

// Lead magnet download API endpoint with comprehensive spam protection
export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit first (3 submissions per hour per IP)
    if (!checkRateLimit(ip)) {
      console.log('🚦 Rate limit exceeded:', { ip });
      return NextResponse.json(
        { error: 'Too many submission attempts. Please try again later or call us at (512) 763-5277.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, address, slug, title, _website, _timestamp } = body;

    console.log('Lead magnet request received:', { name, email, slug, title, ip });

    // SPAM PROTECTION LAYER 1: Honeypot field check
    // If _website field has any value, it's a bot (humans never see this field)
    if (_website && _website.length > 0) {
      console.log('🤖 Bot detected via honeypot:', { ip, name, email });
      return NextResponse.json(
        { error: 'Invalid submission detected.' },
        { status: 400 }
      );
    }

    // SPAM PROTECTION LAYER 2: Timing validation
    // Reject submissions that are too fast (< 2 seconds) or have invalid timestamps
    const timingCheck = validateFormTiming(_timestamp);
    if (!timingCheck.valid) {
      console.log('⏱️ Timing validation failed:', { ip, name, email, reason: timingCheck.reason });
      return NextResponse.json(
        { error: timingCheck.reason || 'Invalid submission timing.' },
        { status: 400 }
      );
    }

    // SPAM PROTECTION LAYER 3: Validate form data with enhanced validation
    // This includes checks for random strings, spam patterns, disposable emails, etc.
    let validatedData;
    try {
      validatedData = leadMagnetFormSchema.parse({
        name,
        email,
        phone: phone || undefined,
        address: address || undefined,
        slug,
        title,
        _website,
        _timestamp,
      });
    } catch (validationError) {
      console.log('❌ Validation failed:', { ip, name, email, error: validationError });
      return NextResponse.json(
        { error: 'Please check your information and try again.' },
        { status: 400 }
      );
    }

    // SPAM PROTECTION LAYER 4: Content spam detection
    // Check for spam keywords in name, address, or any other text fields
    const textToCheck = `${validatedData.name} ${validatedData.address || ''}`;
    if (detectSpamContent(textToCheck)) {
      console.log('🚫 Spam content detected:', { ip, name, email });
      return NextResponse.json(
        { error: 'Invalid submission content.' },
        { status: 400 }
      );
    }

    console.log('✅ All spam checks passed for:', { name, email, ip });

    console.log('✅ All spam checks passed for:', { name, email, ip });

    // Generate download URL (the thank you page will handle the actual PDF generation)
    const downloadUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://rippleroofs.com'}/resources/${slug}/thank-you`;

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured - skipping email, redirecting to thank you page');
      // Still allow download by returning success
      return NextResponse.json({ 
        success: true, 
        message: 'Download ready',
        skipEmail: true 
      });
    }

    console.log('Resend API key found, initializing...');
    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('Sending email to:', email);

    // Send email with Resend
    // Using sales@rippleroofs.com - domain is verified in Resend
    const { data, error } = await resend.emails.send({
      from: 'Ripple Roofing <sales@rippleroofs.com>',
      to: [validatedData.email],
      replyTo: 'sales@rippleroofs.com',
      subject: `Your Free Download: ${validatedData.title}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #2563EB 0%, #1e40af 100%);
                color: white;
                padding: 30px 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #ffffff;
                padding: 30px 20px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .button {
                display: inline-block;
                background: #2563EB;
                color: white;
                padding: 14px 28px;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                margin: 20px 0;
              }
              .footer {
                background: #f9fafb;
                padding: 20px;
                text-align: center;
                font-size: 14px;
                color: #6b7280;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .divider {
                border-top: 1px solid #e5e7eb;
                margin: 30px 0;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">Ripple Roofing</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Your Free Resource is Ready!</p>
            </div>
            
            <div class="content">
              <h2 style="color: #1f2937; margin-top: 0;">Hi ${validatedData.name},</h2>
              
              <p>Thank you for downloading <strong>${validatedData.title}</strong>!</p>
              
              <p>We've put together this comprehensive guide to help you make informed decisions about your roof. Click the button below to access your download:</p>
              
              <center>
                <a href="${downloadUrl}" class="button" style="color: white;">Download Your Free Guide</a>
              </center>
              
              <div class="divider"></div>
              
              <h3 style="color: #1f2937;">What's Next?</h3>
              
              <p>Have questions about your roof? We're here to help:</p>
              
              <ul style="line-height: 1.8;">
                <li><strong>Free Roof Inspection:</strong> Get a professional assessment of your roof's condition</li>
                <li><strong>Expert Consultation:</strong> Discuss your roofing needs with our experienced team</li>
                <li><strong>Custom Quote:</strong> Receive a detailed estimate for your project</li>
              </ul>
              
              <p><strong>Ready to talk?</strong><br>
              Call us at <a href="tel:+15127635277" style="color: #2563EB;">(512) 763-5277</a><br>
              Or reply to this email anytime.</p>
              
              <div class="divider"></div>
              
              <p style="font-size: 14px; color: #6b7280;">
                <strong>Serving Central Texas with Excellence</strong><br>
                Cedar Park • Leander • Austin • Round Rock • Georgetown
              </p>
            </div>
            
            <div class="footer">
              <p style="margin: 0 0 10px 0;"><strong>Ripple Roofing</strong></p>
              <p style="margin: 0 0 10px 0;">
                <a href="tel:+15127635277" style="color: #2563EB; text-decoration: none;">(512) 763-5277</a> • 
                <a href="https://rippleroofs.com" style="color: #2563EB; text-decoration: none;">rippleroofs.com</a>
              </p>
              <p style="margin: 10px 0 0 0; font-size: 12px;">
                You're receiving this because you requested a free resource from Ripple Roofing.<br>
                <a href="#" style="color: #6b7280;">Unsubscribe</a>
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      console.error('Resend error details:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: 'Failed to send email. Please contact us at (512) 763-5277 for immediate assistance.' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    // Also send internal notification email (don't fail if this one fails)
    try {
      await resend.emails.send({
        from: 'Ripple Roofing <sales@rippleroofs.com>',
        to: ['jonathan@rippleroofs.com'],
        subject: `New Lead Magnet Download: ${validatedData.title}`,
        html: `
          <h2>New Lead Magnet Download</h2>
          <p><strong>Resource:</strong> ${validatedData.title}</p>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
          ${validatedData.address ? `<p><strong>Address:</strong> ${validatedData.address}</p>` : ''}
          <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</p>
        `,
      });
    } catch (notificationError) {
      // Log but don't fail the request if internal notification fails
      console.error('Internal notification error (non-critical):', notificationError);
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Lead magnet API error:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    
    // Log the full error object for debugging
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { error: 'Internal server error. Please call us at (512) 763-5277 for immediate assistance.' },
      { status: 500 }
    );
  }
}
