# Mobile Performance - Quick Action Guide

**Current Score:** 75 → **Target Score:** 90+

---

## ✅ Completed Optimizations (Just Deployed)

1. **Preload LCP Image** - Hero background loads immediately
2. **Defer Google Analytics** - Non-critical script loads after page interactive
3. **Lazy Load Components** - ExitIntentPopup, FooterReviews, Testimonials, Gallery, Resources
4. **Optimize Hero Image** - Added fetchPriority="high", better sizing

**Expected Impact:** +7-10 points (75 → 82-85)

---

## 🎯 High-Impact Actions You Can Do Now

### 1. Compress Hero Image (Biggest Impact)

**Problem:** Your hero background image (`/public/images/hero/hero-bg.jpg`) is likely 200-400KB.

**Solution:**

#### Option A: Use TinyPNG (Easiest)
1. Go to https://tinypng.com/
2. Upload `public/images/hero/hero-bg.jpg`
3. Download compressed version
4. Replace original file
5. **Expected reduction:** 300KB → 120-150KB
6. **Impact:** +3-5 points

#### Option B: Use ImageOptim (Mac) or FileOptimizer (Windows)
1. Download tool:
   - Mac: https://imageoptim.com/
   - Windows: https://sourceforge.net/projects/nikkhokkho/files/FileOptimizer/
2. Drag `hero-bg.jpg` into tool
3. Replace original with optimized version
4. **Expected reduction:** 40-60% smaller

---

### 2. Create Mobile-Specific Hero Image (High Impact)

**Problem:** Desktop hero image (1920px wide) is overkill for mobile (375-768px).

**Solution:**

1. **Create mobile variant:**
   ```bash
   # Resize hero-bg.jpg to 750px wide
   # Save as: public/images/hero/hero-bg-mobile.jpg
   ```

2. **Update Hero component:**
   ```tsx
   // src/components/home/Hero.tsx
   <Image
     src={{
       mobile: "/images/hero/hero-bg-mobile.jpg",
       desktop: "/images/hero/hero-bg.jpg"
     }}
     // OR use picture element with srcset
   />
   ```

3. **Alternative (simpler):**
   Just replace `hero-bg.jpg` with a smaller version (1200px instead of 1920px)
   - Mobile will auto-scale down
   - Still saves bandwidth

**Impact:** +2-4 points

---

### 3. Check Current Image Size

**Quick test to see if this is needed:**

```bash
# Check hero image size
cd public/images/hero
dir hero-bg.jpg  # Windows
# or
ls -lh hero-bg.jpg  # Mac/Linux
```

**If file is:**
- Under 100KB → Good, no action needed
- 100-200KB → Compress it (Action #1)
- Over 200KB → Compress AND create mobile variant (Actions #1 + #2)

---

## 📊 Expected Results After These 3 Actions

| Action | Current | After | Points |
|--------|---------|-------|--------|
| Optimizations deployed | 75 | 82-85 | +7-10 |
| Compress hero image | 82-85 | 86-89 | +3-5 |
| Mobile hero variant | 86-89 | 90-92 | +2-4 |

**Final Score:** **90-92** ✅ **TARGET ACHIEVED**

---

## 🔧 How to Implement Mobile Hero Variant (Detailed)

### Step 1: Create Mobile Image

Using any image editor (Photoshop, GIMP, online tool):

1. Open `public/images/hero/hero-bg.jpg`
2. Resize to **750px width** (height auto)
3. Export as:
   - Quality: 80-85%
   - Format: JPG
   - Progressive: Yes
4. Save as `public/images/hero/hero-bg-mobile.jpg`

**Free online tools:**
- https://squoosh.app/ (recommended)
- https://www.iloveimg.com/resize-image
- https://imageresizer.com/

### Step 2: Update Hero Component

Replace this:
```tsx
<Image
  src="/images/hero/hero-bg.jpg"
  alt="Modern roofing excellence"
  fill
  priority
  fetchPriority="high"
  className="object-cover"
  quality={85}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
/>
```

With this (Option A - Simpler):
```tsx
<Image
  src="/images/hero/hero-bg.jpg"
  alt="Modern roofing excellence"
  fill
  priority
  fetchPriority="high"
  className="object-cover"
  quality={85}
  sizes="(max-width: 768px) 750px, (max-width: 1200px) 1200px, 1920px"
/>
```

Or this (Option B - More Control):
```tsx
<picture>
  <source 
    media="(max-width: 768px)" 
    srcSet="/images/hero/hero-bg-mobile.jpg" 
  />
  <Image
    src="/images/hero/hero-bg.jpg"
    alt="Modern roofing excellence"
    fill
    priority
    fetchPriority="high"
    className="object-cover"
    quality={85}
  />
</picture>
```

### Step 3: Test & Deploy

```bash
npm run build
git add public/images/hero/hero-bg-mobile.jpg
git add src/components/home/Hero.tsx
git commit -m "Add mobile-optimized hero image"
git push
```

---

## 🚀 Other Quick Wins (Optional)

### 4. Remove Unused Fonts (If Any)

Check if you're loading fonts you don't use:

```tsx
// src/app/layout.tsx
// Only load fonts actually used in the app
const inter = Inter({ 
  subsets: ['latin'],  // ✅ Good
  display: 'swap',     // ✅ Good
})
```

### 5. Optimize Google Fonts Loading (Advanced)

If you want even better performance, self-host fonts:

1. Download fonts from Google Fonts
2. Place in `public/fonts/`
3. Update `layout.tsx` to use local fonts
4. **Impact:** +1-2 points

**Skip this unless you're aiming for 95+**

---

## 📈 How to Verify Improvements

### After deploying optimizations:

1. **Clear cache and test:**
   ```
   https://pagespeed.web.dev/analysis/https-rippleroofs-com
   ```
   
2. **Check these metrics improved:**
   - LCP (Largest Contentful Paint): Should drop from 5.0s → 2.5s or less
   - FCP (First Contentful Paint): Should drop from 2.6s → 1.5s or less
   - Performance Score: Should increase from 75 → 90+

3. **Mobile vs Desktop:**
   - Test BOTH mobile and desktop
   - Mobile improvements matter most for SEO

---

## 🎯 Priority Order

**Do in this order for maximum impact:**

1. ✅ **Deploy current optimizations** (already done)
2. 🟡 **Compress hero image** (5 minutes, +3-5 points)
3. 🟡 **Test score again** (verify improvement)
4. 🟢 **Create mobile hero** if still below 90 (15 minutes, +2-4 points)
5. ✅ **Done!** You should be at 90+

---

## 💡 Pro Tips

### Tip 1: Batch Image Optimization
While optimizing hero image, also check/optimize:
- `/public/images/certainteed-shingle-master.webp` (already WebP ✅)
- Any other images in `/public/images/`
- Run TinyPNG on entire `public` folder

### Tip 2: Monitor in Search Console
- Core Web Vitals in Search Console update every 28 days
- Field data (real users) more important than lab data
- Mobile CWV impacts mobile rankings

### Tip 3: Don't Over-Optimize
- Score 90-92 is excellent
- Score 95+ has diminishing returns
- Focus on real user experience vs perfect score

---

## 🆘 Troubleshooting

### "I compressed the image but score didn't improve"

**Possible causes:**
1. Browser cached old image - test in Incognito
2. CDN cached old image - wait 5-10 minutes
3. Image wasn't actually compressed - check file size
4. Other images are the problem - check PageSpeed "Opportunities"

### "Mobile score still below 90"

**Check:**
1. Did Vercel deploy complete? Check https://vercel.com/dashboard
2. Test correct URL: https://rippleroofs.com (not www. subdomain)
3. Run PageSpeed 2-3 times (scores vary slightly)
4. Check "Opportunities" section for other issues

### "Desktop is 99 but mobile is still 85"

**This is normal!** Mobile scoring is much stricter:
- Simulated slow 4G network
- Lower CPU power
- Smaller viewport

Mobile 85+ is actually very good. 90+ is excellent.

---

## 📞 Need Help?

If you hit issues:
1. Check file sizes: `dir public/images/hero` (Windows)
2. Check build logs: `npm run build`
3. Check Vercel deployment logs
4. Re-run PageSpeed after 5-10 min (CDN cache)

---

**Last Updated:** November 24, 2025  
**Status:** Optimizations deployed, hero image compression recommended

**Next Check:** After compressing hero image, re-run PageSpeed to verify 90+ score
