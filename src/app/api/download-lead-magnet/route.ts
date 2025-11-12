import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, slug, title } = body;

    // Validate required fields
    if (!name || !email || !slug || !title) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

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

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email with Resend
    // Note: Using onboarding@resend.dev until rippleroofs.com domain is verified in Resend
    // To use info@rippleroofs.com, verify domain at https://resend.com/domains
    const { data, error } = await resend.emails.send({
      from: 'Ripple Roofing <onboarding@resend.dev>',
      to: [email],
      replyTo: 'info@rippleroofs.com',
      subject: `Your Free Download: ${title}`,
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
              <h2 style="color: #1f2937; margin-top: 0;">Hi ${name},</h2>
              
              <p>Thank you for downloading <strong>${title}</strong>!</p>
              
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
              Call us at <a href="tel:+15125665511" style="color: #2563EB;">(512) 566-5511</a><br>
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
                <a href="tel:+15125665511" style="color: #2563EB; text-decoration: none;">(512) 566-5511</a> • 
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
      return NextResponse.json(
        { error: 'Failed to send email. Please contact us at (512) 566-5511 for immediate assistance.' },
        { status: 500 }
      );
    }

    // Also send internal notification email (don't fail if this one fails)
    try {
      await resend.emails.send({
        from: 'Ripple Roofing <onboarding@resend.dev>',
        to: ['info@rippleroofing.com'],
        subject: `New Lead Magnet Download: ${title}`,
        html: `
          <h2>New Lead Magnet Download</h2>
          <p><strong>Resource:</strong> ${title}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
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
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
