# Lead Magnet Setup Guide

## Overview
The lead magnet system is now complete and ready for testing. Users can download 4 comprehensive PDF guides in exchange for their email address.

## 🎯 Available Lead Magnets

1. **Roof Inspection Checklist** - `/resources/roof-inspection-checklist`
2. **Storm Damage Insurance Guide** - `/resources/storm-damage-insurance-guide`
3. **Material Comparison Chart** - `/resources/material-comparison-chart`
4. **Seasonal Maintenance Calendar** - `/resources/seasonal-maintenance-calendar`

## ⚙️ Environment Configuration

### Required Environment Variable

The lead magnet system requires the Resend API key to send confirmation emails:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Where to Add in Vercel

1. Go to your Vercel dashboard: https://vercel.com/ripplejonathan/rippleroofs
2. Click on **Settings**
3. Click on **Environment Variables**
4. Add new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (get it from https://resend.com/api-keys)
   - **Environment**: Production, Preview, Development (check all)
5. Click **Save**
6. **Redeploy** your site for changes to take effect

### Getting a Resend API Key

1. Sign up at https://resend.com (free tier: 100 emails/day, 3,000/month)
2. Go to **API Keys** in the dashboard
3. Click **Create API Key**
4. Copy the key (starts with `re_`)
5. Add to Vercel environment variables (see above)

### Verify Email Domain (Required for Production)

Resend requires you to verify your sending domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter: `rippleroofing.com`
4. Add the provided DNS records to your domain:
   - TXT record for domain verification
   - CNAME records for DKIM
   - MX records (optional, for receiving)
5. Wait for DNS propagation (can take up to 48 hours)
6. Once verified, emails will be sent from `info@rippleroofing.com`

### Alternative: Use Resend's Test Domain (Development Only)

For testing, Resend provides a test domain. Emails will be sent from `onboarding@resend.dev` instead of `info@rippleroofing.com`. This works immediately but should only be used for development.

## 🔄 How the System Works

### User Flow
1. User visits a lead magnet landing page (e.g., `/resources/roof-inspection-checklist`)
2. User fills out form with:
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Property Address (optional)
3. User submits form
4. API endpoint `/api/download-lead-magnet` processes submission:
   - Validates form data
   - Sends confirmation email to user with download link
   - Sends internal notification to `info@rippleroofing.com`
5. User is redirected to thank you page
6. Thank you page auto-downloads the PDF
7. User receives email with download link (backup)

### Graceful Degradation

If `RESEND_API_KEY` is not configured:
- Form submission still works
- User still gets redirected to thank you page
- PDF still downloads
- No email is sent (logged to console)
- User can still access the resource

This ensures the system works even if email is not configured yet.

## 📧 Email Templates

### User Confirmation Email
- **Subject**: "Your Free Download: [Resource Title]"
- **From**: `Ripple Roofing <info@rippleroofing.com>`
- **Contains**:
  - Personalized greeting
  - Download button
  - What's next (free inspection, consultation, quote)
  - Contact information
  - Unsubscribe link

### Internal Notification Email
- **Subject**: "New Lead Magnet Download: [Resource Title]"
- **To**: `info@rippleroofing.com`
- **Contains**:
  - Resource downloaded
  - Name, Email, Phone, Address
  - Timestamp (Central Time)

## 🧪 Testing Checklist

### Local Testing (Development)
1. ✅ Start dev server: `npm run dev`
2. ✅ Visit http://localhost:3000/resources/roof-inspection-checklist
3. ✅ Fill out form with test data
4. ✅ Submit form
5. ✅ Verify redirect to thank you page
6. ✅ Verify PDF auto-downloads
7. ✅ Check console for errors
8. ✅ If RESEND_API_KEY is set, check email inbox

### Production Testing (Vercel)
1. ⏳ Visit https://rippleroofing.com/resources/roof-inspection-checklist
2. ⏳ Fill out form with real data
3. ⏳ Submit form
4. ⏳ Verify redirect to thank you page
5. ⏳ Verify PDF auto-downloads
6. ⏳ Check email inbox for confirmation (if RESEND_API_KEY is configured)
7. ⏳ Check info@rippleroofing.com for internal notification
8. ⏳ Test on mobile device
9. ⏳ Test all 4 lead magnets

## 🚨 Current Status

**Issue**: Form submission returns 500 error on production
**Likely Cause**: `RESEND_API_KEY` not configured in Vercel environment variables
**Solution**: Add environment variable in Vercel (see steps above)
**Workaround**: System now gracefully degrades - allows download even without email configured

## 📝 Next Steps

### Immediate (Phase 5B)
- [ ] Add `RESEND_API_KEY` to Vercel environment variables
- [ ] Verify domain in Resend (for production emails)
- [ ] Test all 4 lead magnets in production
- [ ] Verify email delivery works
- [ ] Test mobile responsiveness

### Short Term
- [ ] Add lead magnet CTAs to homepage
- [ ] Add lead magnet CTAs to blog posts
- [ ] Add lead magnet CTAs to service pages
- [ ] Create `/resources` overview page
- [ ] Add analytics tracking for downloads

### Long Term (Phase 5C - Email Drip Campaign)
- [ ] Choose email marketing platform (Mailchimp, ConvertKit)
- [ ] Build 7-email welcome sequence
- [ ] Integrate with email platform via API
- [ ] Set up automation triggers
- [ ] Monitor open rates and conversions

## 🔗 Related Files

- Landing Pages: `/src/app/resources/[slug]/page.tsx`
- Form Component: `/src/components/lead-magnets/LeadMagnetForm.tsx`
- API Endpoint: `/src/app/api/download-lead-magnet/route.ts`
- Thank You Pages: `/src/app/resources/[slug]/thank-you/page.tsx`
- PDF Generators: `/src/components/lead-magnets/*.tsx`

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify environment variables are set
4. Test locally first
5. Contact Resend support if email issues persist

---

**Last Updated**: November 12, 2025
**Status**: System built, awaiting environment configuration
