# Google Reviews Setup Guide

## ✅ What's Already Done:
- API key added to .env.local file
- Google Reviews API integration created
- Homepage testimonials component updated to pull live reviews
- Fallback reviews in place if API fails

## 🔧 What You Need To Do:

### Step 1: Find Your Google Place ID
Your Google Place ID is needed to fetch reviews. Here's how to find it:

1. Go to: https://developers.google.com/maps/documentation/places/web-service/place-id
2. Or use this tool: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
3. Search for "Ripple Roofing & Construction, Round Rock, TX"
4. Copy the Place ID (starts with "ChIJ...")

### Step 2: Enable Google Places API
1. Go to: https://console.cloud.google.com/apis/library
2. Search for "Places API"
3. Click "Places API (New)"
4. Click "Enable"

### Step 3: Update .env.local File
1. Open `.env.local` in your project
2. Replace this line:
   ```
   NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJYQZ_cF7KRIYRBm_8VZ8Z8Z8
   ```
   With your actual Place ID:
   ```
   NEXT_PUBLIC_GOOGLE_PLACE_ID=YOUR_ACTUAL_PLACE_ID_HERE
   ```

### Step 4: Restart Dev Server
After updating .env.local:
```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## 📊 Features Included:

### Homepage (Already Integrated)
- Shows top 3 Google reviews
- Displays overall rating and total review count
- Shows reviewer profile photos
- Real-time updates (cached for 1 hour)
- Automatic fallback if API fails

### How It Works:
1. Reviews are fetched from Google Places API
2. Cached for 1 hour to save API costs
3. Displays reviewer name, photo, rating, date, and text
4. Shows Google logo to maintain credibility

## 💰 Cost:
- Google Places API: FREE for first 25,000 requests/month
- Your usage will be minimal (reviews cached for 1 hour)
- Estimated cost: $0/month for typical traffic

## 🚀 Next Steps After Setup:
Once you have your Place ID, send it to me and I'll update the .env.local file, or you can update it yourself!

## Need Help?
If you can't find your Place ID, share your Google Business Profile URL and I can help extract it.
