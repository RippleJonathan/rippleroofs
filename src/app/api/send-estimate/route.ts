import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const formData = await request.formData()
    const pdfBlob = formData.get('pdf') as Blob
    const customerEmail = formData.get('customerEmail') as string
    const customerName = formData.get('customerName') as string
    const packageName = formData.get('packageName') as string
    const totalPrice = formData.get('totalPrice') as string
    const address = formData.get('address') as string

    if (!pdfBlob || !customerEmail || !customerName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Convert blob to buffer
    const arrayBuffer = await pdfBlob.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Send email to customer
    const { data, error } = await resend.emails.send({
      from: 'Ripple Roofing <estimates@rippleroofs.com>',
      to: [customerEmail],
      cc: ['jonathan@rippleroofs.com'],
      subject: `Your Roof Estimate - ${packageName}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
    }
    .header {
      background: linear-gradient(135deg, #1a237e 0%, #d97706 100%);
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    .content {
      padding: 30px 20px;
      background: #f9fafb;
    }
    .price-box {
      background: white;
      border: 3px solid #d97706;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      margin: 20px 0;
    }
    .price {
      font-size: 32px;
      font-weight: bold;
      color: #d97706;
    }
    .details {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
    }
    .cta-button {
      display: inline-block;
      background: #d97706;
      color: white;
      padding: 15px 30px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      margin: 20px 0;
    }
    .footer {
      background: #1a237e;
      color: white;
      padding: 20px;
      text-align: center;
      font-size: 14px;
    }
    .step {
      display: flex;
      align-items: center;
      margin: 15px 0;
    }
    .step-number {
      background: #d97706;
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin-right: 15px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🏠 Your Roof Estimate is Ready!</h1>
    <p>Thank you for choosing Ripple Roofing & Construction</p>
  </div>
  
  <div class="content">
    <p>Hi ${customerName},</p>
    
    <p>Thank you for requesting an estimate! We're excited to help you with your roofing project.</p>
    
    <div class="price-box">
      <h2 style="margin-top: 0;">${packageName}</h2>
      <div class="price">${totalPrice}</div>
      <p style="margin-bottom: 0; color: #666; font-size: 14px;">*Final pricing subject to on-site inspection</p>
    </div>
    
    <div class="details">
      <h3>📍 Property Address</h3>
      <p>${address}</p>
      
      <h3>📄 Your Detailed Estimate</h3>
      <p>Your complete estimate is attached as a PDF. This includes:</p>
      <ul>
        <li>✓ Detailed roof measurements and calculations</li>
        <li>✓ Complete package specifications</li>
        <li>✓ Materials list with brand names</li>
        <li>✓ Full scope of work</li>
        <li>✓ Warranty information</li>
        <li>✓ Project timeline</li>
      </ul>
    </div>
    
    <h3 style="margin-top: 30px;">What Happens Next?</h3>
    
    <div class="step">
      <div class="step-number">1</div>
      <div>
        <strong>Review Your Estimate</strong><br>
        Take your time reviewing the attached PDF with all the details.
      </div>
    </div>
    
    <div class="step">
      <div class="step-number">2</div>
      <div>
        <strong>We'll Contact You</strong><br>
        Our team will reach out within 24 hours to answer any questions.
      </div>
    </div>
    
    <div class="step">
      <div class="step-number">3</div>
      <div>
        <strong>Schedule Inspection</strong><br>
        We'll arrange a free on-site inspection to finalize all details.
      </div>
    </div>
    
    <div style="text-align: center; margin-top: 30px;">
      <p><strong>Have Questions? Call Us Now!</strong></p>
      <a href="tel:+15127635277" class="cta-button">📞 (512) 763-5277</a>
    </div>
    
    <p style="margin-top: 30px; font-size: 14px; color: #666;">
      This estimate is valid for 30 days. Prices subject to change based on material availability and site conditions.
    </p>
  </div>
  
  <div class="footer">
    <p><strong>Ripple Roofing & Construction</strong></p>
    <p>Professional Roofing Solutions</p>
    <p>📧 estimates@rippleroofs.com | 📞 (512) 763-5277</p>
    <p style="font-size: 12px; margin-top: 15px;">
      © ${new Date().getFullYear()} Ripple Roofing & Construction. All rights reserved.
    </p>
  </div>
</body>
</html>
      `,
      attachments: [
        {
          filename: `Ripple-Roofing-Estimate-${customerName.replace(/\s+/g, '-')}.pdf`,
          content: buffer,
        },
      ],
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
