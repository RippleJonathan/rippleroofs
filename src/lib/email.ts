import { Resend } from 'resend';

// Initialize Resend instance - will be null if API key not configured
// This allows the app to build even if RESEND_API_KEY is not set
export const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Email configuration
export const EMAIL_CONFIG = {
  // Temporary sender - change to noreply@rippleroofs.com after domain verification
  from: 'onboarding@resend.dev',
  
  // Your email where you'll receive notifications
  to: 'jonathan@rippleroofs.com',
  
  // Reply-to address for customer emails
  replyTo: 'jonathan@rippleroofs.com',
};

// Email templates
export const emailTemplates = {
  contactForm: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => ({
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0066cc 0%, #004c99 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0066cc; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 4px; border: 1px solid #ddd; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
            .button { display: inline-block; background: #0066cc; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏠 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p>You've received a new contact form submission from your website:</p>
              
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              
              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <a href="mailto:${data.email}" class="button">Reply to ${data.name}</a>
            </div>
            <div class="footer">
              <p>Ripple Roofing | Central Texas Roofing Experts</p>
              <p>This email was sent from your website contact form</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }),

  quoteRequest: (data: {
    name: string;
    email: string;
    phone: string;
    address: string;
    serviceType?: string;
    message?: string;
    urgency?: string;
  }) => ({
    subject: `🔥 New Quote Request from ${data.name}${data.urgency === 'emergency' ? ' - EMERGENCY' : ''}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0066cc 0%, #004c99 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .emergency { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%) !important; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0066cc; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 4px; border: 1px solid #ddd; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
            .button { display: inline-block; background: #0066cc; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin: 10px 5px; }
            .emergency-badge { background: #dc2626; color: white; padding: 8px 16px; border-radius: 4px; display: inline-block; margin-bottom: 15px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header ${data.urgency === 'emergency' ? 'emergency' : ''}">
              <h1>💼 New Quote Request</h1>
              ${data.urgency === 'emergency' ? '<p style="font-size: 18px; margin: 10px 0 0 0;">⚠️ EMERGENCY REQUEST</p>' : ''}
            </div>
            <div class="content">
              ${data.urgency === 'emergency' ? '<div class="emergency-badge">🚨 Emergency - Respond ASAP</div>' : ''}
              
              <p>You've received a new quote request from your website:</p>
              
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${data.email === 'noemail@callback.requested' ? '<em>Callback Only - No Email Provided</em>' : `<a href="mailto:${data.email}">${data.email}</a>`}</div>
              </div>
              
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              
              <div class="field">
                <span class="label">Service Address:</span>
                <div class="value">${data.address}</div>
              </div>
              
              ${data.serviceType ? `
              <div class="field">
                <span class="label">Service Type:</span>
                <div class="value">${data.serviceType}</div>
              </div>
              ` : ''}
              
              ${data.message ? `
              <div class="field">
                <span class="label">Additional Details:</span>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="tel:${data.phone}" class="button">📞 Call ${data.name}</a>
                ${data.email !== 'noemail@callback.requested' ? `<a href="mailto:${data.email}" class="button">📧 Send Email</a>` : ''}
              </div>
            </div>
            <div class="footer">
              <p>Ripple Roofing | Central Texas Roofing Experts</p>
              <p>This quote request was submitted from your website</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }),

  newsletterNotification: (data: { email: string; source: string }) => ({
    subject: `📧 New Newsletter Subscription`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0066cc 0%, #004c99 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0066cc; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 4px; border: 1px solid #ddd; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Newsletter Subscriber</h1>
            </div>
            <div class="content">
              <p>Someone just subscribed to your newsletter!</p>
              
              <div class="field">
                <span class="label">Email:</span>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              
              <div class="field">
                <span class="label">Source:</span>
                <div class="value">${data.source}</div>
              </div>
              
              <p style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-left: 4px solid #0066cc; border-radius: 4px;">
                💡 <strong>Tip:</strong> Add this email to your newsletter mailing list to keep them updated with your latest content and offers!
              </p>
            </div>
            <div class="footer">
              <p>Ripple Roofing | Central Texas Roofing Experts</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }),

  newsletterWelcome: (data: { email: string }) => ({
    subject: `Welcome to Ripple Roofing Updates! 🏠`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0066cc 0%, #004c99 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0; }
            .logo { font-size: 48px; margin-bottom: 10px; }
            .content { background: #ffffff; padding: 40px; border: 1px solid #ddd; border-top: none; }
            .footer { background: #f9f9f9; padding: 30px; text-align: center; color: #666; font-size: 14px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #0066cc; color: white; padding: 14px 30px; text-decoration: none; border-radius: 4px; margin: 20px 0; font-weight: bold; }
            .benefit { padding: 15px; background: #f0f9ff; border-left: 4px solid #0066cc; margin: 15px 0; border-radius: 4px; }
            ul { padding-left: 20px; }
            li { margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">🏠</div>
              <h1>Welcome to Ripple Roofing!</h1>
              <p style="font-size: 18px; margin: 10px 0 0 0;">Thanks for subscribing to our newsletter</p>
            </div>
            <div class="content">
              <h2 style="color: #0066cc;">You're all set!</h2>
              <p>Thank you for subscribing to the Ripple Roofing newsletter. We're excited to keep you updated with:</p>
              
              <div class="benefit">
                <strong>📰 Latest Blog Posts</strong><br>
                Expert roofing tips, maintenance guides, and industry insights
              </div>
              
              <div class="benefit">
                <strong>💡 Seasonal Tips</strong><br>
                Prepare your roof for Texas weather year-round
              </div>
              
              <div class="benefit">
                <strong>🎉 Exclusive Offers</strong><br>
                Special promotions and discounts for our subscribers
              </div>
              
              <div class="benefit">
                <strong>🔧 Maintenance Reminders</strong><br>
                Never miss important roof care tasks
              </div>
              
              <h3 style="color: #0066cc; margin-top: 30px;">Need roofing services now?</h3>
              <p>Don't wait! We're here to help with all your roofing needs:</p>
              <ul>
                <li>🏗️ Complete Roof Replacements</li>
                <li>🔨 Repairs & Maintenance</li>
                <li>🛡️ Storm Damage Restoration</li>
                <li>🚨 Emergency Tarping Services</li>
                <li>📋 FREE Roof Inspections</li>
              </ul>
              
              <div style="text-align: center;">
                <a href="https://rippleroofs.com/contact" class="button">Get Your Free Quote</a>
              </div>
              
              <p style="margin-top: 30px; padding: 20px; background: #f0f9ff; border-radius: 4px; text-align: center;">
                <strong>Questions?</strong><br>
                Call us at <a href="tel:5127635277" style="color: #0066cc; text-decoration: none; font-weight: bold;">(512) 763-5277</a><br>
                Or reply to this email anytime!
              </p>
            </div>
            <div class="footer">
              <p><strong>Ripple Roofing</strong></p>
              <p>Central Texas's Trusted Roofing Experts</p>
              <p style="margin-top: 15px;">
                <a href="https://rippleroofs.com" style="color: #0066cc; text-decoration: none;">Visit Website</a> |
                <a href="https://rippleroofs.com/blog" style="color: #0066cc; text-decoration: none;">Read Blog</a> |
                <a href="tel:5127635277" style="color: #0066cc; text-decoration: none;">Call Us</a>
              </p>
              <p style="margin-top: 20px; font-size: 12px; color: #999;">
                You're receiving this because you subscribed to our newsletter at rippleroofs.com<br>
                <a href="#" style="color: #999;">Unsubscribe</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
  }),
};
