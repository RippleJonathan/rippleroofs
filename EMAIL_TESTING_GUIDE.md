# Email Integration Testing Guide

## ✅ What's Been Set Up

All email functionality is now live and connected to Resend! Here's what's working:

### 1. **Contact/Quote Form** (`/contact` page)
- Sends detailed quote requests to `jonathan@rippleroofs.com`
- Includes: name, email, phone, address, service type, message
- Beautiful HTML email template
- Emergency requests marked with red banner

### 2. **Newsletter Subscription** (`/blog` page)
- Sends you a notification when someone subscribes
- Sends subscriber a welcome email automatically
- Includes company info and call-to-action

### 3. **Email API Endpoints**
- `/api/contact` - Contact form submissions
- `/api/quote` - Quote requests (used by contact form)
- `/api/newsletter` - Newsletter subscriptions

---

## 🧪 How to Test

Your dev server is running at: **http://localhost:3001**

### Test Quote Form:
1. Go to http://localhost:3001/contact
2. Fill out the form with test data
3. Submit
4. Check `jonathan@rippleroofs.com` inbox
5. You should receive a formatted email with all the details

### Test Newsletter:
1. Go to http://localhost:3001/blog
2. Scroll to bottom "Stay Updated" section
3. Enter a test email (use yours: `jonathan@rippleroofs.com`)
4. Click Subscribe
5. You should receive TWO emails:
   - **Notification to you**: "New Newsletter Subscription"
   - **Welcome email to subscriber**: "Welcome to Ripple Roofing Updates!"

---

## 📧 Email Templates

All emails are professionally designed with:
- ✅ Ripple Roofing branding
- ✅ Color-coded headers (blue for normal, red for emergencies)
- ✅ Responsive HTML design
- ✅ Click-to-call and email buttons
- ✅ Your contact information
- ✅ Proper formatting

---

## ⚙️ Current Configuration

**Sender Email**: `onboarding@resend.dev` (temporary)
**Recipient Email**: `jonathan@rippleroofs.com`
**Reply-To**: `jonathan@rippleroofs.com`

### When You're Ready to Use Your Domain:

1. **Verify `rippleroofs.com` in Resend**:
   - Log into resend.com
   - Go to Domains
   - Add `rippleroofs.com`
   - Add the DNS records they provide to your domain

2. **Update the sender email**:
   - Open `src/lib/email.ts`
   - Change line 11 from:
     ```typescript
     from: 'onboarding@resend.dev',
     ```
     To:
     ```typescript
     from: 'noreply@rippleroofs.com',
     ```
     Or use any email like `quotes@rippleroofs.com`, `info@rippleroofs.com`, etc.

3. **That's it!** No other code changes needed.

---

## 🚀 When You Deploy to Vercel

Don't forget to add the environment variable:

1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_RBLU4NcR_MibnSkWWw7FyTzMegM7Uxcn2`
4. Deploy!

---

## 📊 Email Tracking

You can monitor all sent emails in your Resend dashboard:
- https://resend.com/emails
- See delivery status
- View opened emails (if enabled)
- Check for errors

---

## 🎨 Email Content Preview

### Quote Request Email:
```
Subject: 🔥 New Quote Request from [Name]

Content:
- Name, email, phone (clickable)
- Service address
- Service type needed
- Additional message
- Call/Email action buttons
```

### Newsletter Notification:
```
Subject: 📧 New Newsletter Subscription

Content:
- Subscriber email
- Source (blog page)
- Add to mailing list reminder
```

### Newsletter Welcome Email:
```
Subject: Welcome to Ripple Roofing Updates! 🏠

Content:
- Welcome message
- What they'll receive (tips, offers, reminders)
- Your services overview
- Contact information
- Call-to-action buttons
```

---

## ✨ Features Included

- ✅ Form validation (Zod schemas)
- ✅ Error handling with user-friendly messages
- ✅ Loading states during submission
- ✅ Success/error notifications
- ✅ Automatic form reset after success
- ✅ Mobile-responsive email templates
- ✅ Click-to-call/email buttons in emails
- ✅ Professional HTML formatting
- ✅ Security headers and rate limiting ready

---

## 🛠️ Troubleshooting

**Emails not arriving?**
1. Check spam folder
2. Check Resend dashboard for delivery status
3. Verify API key in `.env.local`
4. Check browser console for errors

**Form not submitting?**
1. Open browser Developer Tools (F12)
2. Go to Network tab
3. Submit form and check API response
4. Look for error messages

**Email formatting issues?**
1. Test in multiple email clients
2. Check HTML template in `src/lib/email.ts`
3. Preview emails in Resend dashboard

---

## 📝 Next Steps

1. ✅ Test all forms in development
2. ⏳ Verify your domain with Resend (when ready)
3. ⏳ Update sender email address
4. ⏳ Deploy to production
5. ⏳ Add Resend API key to Vercel
6. ⏳ Test in production
7. ⏳ Set up email list management (optional)

---

**Your email integration is complete and ready to capture leads! 🎉**
