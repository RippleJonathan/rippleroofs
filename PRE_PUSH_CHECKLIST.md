# Pre-Push Review Checklist

Use this checklist before every `git push origin main` to ensure quality and prevent issues.

---

## 🔍 Code Quality Checks

### Files Changed
- [ ] Review `git status` - confirm only intended files are staged
- [ ] Review `git diff` - verify changes are correct
- [ ] No accidental deletions of important code
- [ ] No commented-out code blocks left behind
- [ ] No debug console.logs or test code remaining
- [ ] No hardcoded credentials or sensitive data

### TypeScript/JavaScript
- [ ] No TypeScript errors (`npm run build` succeeds)
- [ ] No ESLint warnings in modified files
- [ ] All imports are used
- [ ] No unused variables
- [ ] Proper type definitions where needed

---

## 📝 Content Quality Checks

### Text Content
- [ ] All content is spell-checked
- [ ] Grammar is correct
- [ ] No "Lorem ipsum" or placeholder text
- [ ] Phone numbers are correct: (512) 763-5277
- [ ] Email addresses are correct
- [ ] Company name spelled correctly: "Ripple Roofing & Construction"
- [ ] Location names spelled correctly
- [ ] No broken sentences or formatting issues

### SEO Metadata
- [ ] Page title is present and compelling (50-60 characters)
- [ ] Meta description is present and compelling (150-160 characters)
- [ ] Keywords are relevant
- [ ] OpenGraph tags are complete
- [ ] Twitter card metadata is present
- [ ] Canonical URL is correct

---

## 🔗 Link Quality Checks

### Internal Links
- [ ] All internal links are tested and working
- [ ] Internal links use correct paths (relative or absolute)
- [ ] No links pointing to localhost or development URLs
- [ ] Links to location pages are correct
- [ ] Links to service pages are correct
- [ ] Links to blog posts are correct
- [ ] Breadcrumb links work correctly

### External Links
- [ ] External links open in new tab (`target="_blank"`)
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Phone links use correct format: `tel:5127635277`
- [ ] Email links use correct format: `mailto:jonathan@rippleroofs.com`
- [ ] Social media links are correct (if applicable)

---

## 🎨 Visual & UI Checks

### Images
- [ ] All images have proper `alt` text
- [ ] Images load correctly
- [ ] Image paths are correct (no broken images)
- [ ] Images are optimized (reasonable file size)
- [ ] Blur placeholders are implemented where needed
- [ ] Images are responsive (look good on mobile)

### Layout & Styling
- [ ] Page layout looks correct on desktop
- [ ] Page layout looks correct on tablet
- [ ] Page layout looks correct on mobile
- [ ] No layout shift issues (CLS)
- [ ] Colors match brand guidelines
- [ ] Fonts load correctly
- [ ] Icons display correctly
- [ ] Spacing/padding looks intentional

### Responsive Design
- [ ] Test at 320px width (small mobile)
- [ ] Test at 768px width (tablet)
- [ ] Test at 1024px width (laptop)
- [ ] Test at 1920px width (desktop)
- [ ] Navigation menu works on mobile
- [ ] Forms are usable on mobile
- [ ] Text is readable on all screen sizes

---

## ⚡ Performance Checks

### Build & Load
- [ ] `npm run build` completes without errors
- [ ] `npm run dev` works locally
- [ ] No console errors in browser
- [ ] No console warnings (or documented why they exist)
- [ ] Page loads in reasonable time (< 3 seconds)
- [ ] No unnecessary re-renders

### Assets
- [ ] Images are not excessively large
- [ ] Fonts are optimized
- [ ] JavaScript bundle is reasonable size
- [ ] CSS is minified in production
- [ ] No unused CSS

---

## 🧪 Functionality Checks

### Forms
- [ ] Quote form submits correctly
- [ ] Contact form submits correctly
- [ ] Email validation works
- [ ] Phone validation works
- [ ] Required fields are enforced
- [ ] Success messages display correctly
- [ ] Error messages display correctly
- [ ] Resend API integration works

### Interactive Elements
- [ ] Buttons work correctly
- [ ] Hover states work
- [ ] Focus states are visible (accessibility)
- [ ] Dropdown menus function
- [ ] Modal/dialog functionality works
- [ ] Accordion sections work (if applicable)

### Navigation
- [ ] Header navigation works
- [ ] Footer navigation works
- [ ] Breadcrumbs work correctly
- [ ] Back button works as expected
- [ ] Mobile hamburger menu works
- [ ] Sub-menus work correctly

---

## 🔒 Schema & SEO Checks

### Schema Markup
- [ ] Schema is present on page
- [ ] Schema validates at schema.org validator
- [ ] LocalBusiness schema is complete (location pages)
- [ ] Service schema is complete (service pages)
- [ ] Article schema is complete (blog posts)
- [ ] BreadcrumbList schema is complete
- [ ] FAQ schema is complete (where applicable)
- [ ] Review schema is complete (location pages)

### SEO Best Practices
- [ ] Heading hierarchy is correct (h1 → h2 → h3)
- [ ] Only one h1 per page
- [ ] URLs are SEO-friendly (lowercase, hyphens, descriptive)
- [ ] No duplicate content issues
- [ ] Canonical tags are correct
- [ ] Robots meta tags are correct (index/noindex)
- [ ] Sitemap includes new pages

---

## ♿ Accessibility Checks

### ARIA & Semantic HTML
- [ ] Semantic HTML elements used (nav, main, article, etc.)
- [ ] ARIA labels where needed
- [ ] Form inputs have labels
- [ ] Buttons have descriptive text
- [ ] Links have descriptive text (not "click here")

### Keyboard Navigation
- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] No keyboard traps
- [ ] Escape key closes modals

### Visual Accessibility
- [ ] Color contrast meets WCAG AA standards
- [ ] Text is readable against backgrounds
- [ ] No information conveyed by color alone
- [ ] Font sizes are readable (minimum 16px body text)

---

## 🧩 Integration Checks

### APIs
- [ ] Google Reviews API working (if applicable)
- [ ] Resend API working for emails
- [ ] No API keys exposed in client code
- [ ] Environment variables are set correctly
- [ ] API error handling works

### Third-Party Services
- [ ] Google Analytics tracking (if implemented)
- [ ] Social media sharing works
- [ ] Map embeds work (if applicable)
- [ ] Video embeds work (if applicable)

---

## 📊 Content-Specific Checks

### Service Pages
- [ ] All service information is accurate
- [ ] Process steps are clear
- [ ] Benefits are listed
- [ ] CTAs are prominent
- [ ] Related services are linked
- [ ] Location-specific examples included
- [ ] Schema markup is complete

### Location Pages
- [ ] Location information is accurate
- [ ] Neighborhoods are spelled correctly
- [ ] Landmarks are correct
- [ ] Service area is clearly defined
- [ ] Local contact information is correct
- [ ] Weather/climate info is accurate
- [ ] Schema markup includes location data

### Blog Posts
- [ ] Publication date is correct
- [ ] Author is correct
- [ ] Categories/tags are appropriate
- [ ] Internal links are contextual
- [ ] Images have captions
- [ ] Social sharing works
- [ ] Related posts are shown

---

## 🐛 Bug Prevention

### Common Issues to Check
- [ ] No 404 errors on any links
- [ ] No infinite loops in code
- [ ] No memory leaks
- [ ] No race conditions
- [ ] Error boundaries in place
- [ ] Fallback content for failed loads
- [ ] Graceful degradation for older browsers

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 📦 Deployment Checks

### Git & Version Control
- [ ] Commit message is descriptive
- [ ] Commits are atomic (one feature/fix per commit)
- [ ] No merge conflicts
- [ ] Branch is up to date with main
- [ ] No unnecessary files in commit

### Environment
- [ ] Environment variables documented
- [ ] .env.local is in .gitignore
- [ ] No secrets committed to repo
- [ ] Vercel environment variables are set
- [ ] Production URL is correct

### Post-Deployment
- [ ] Verify deployment succeeded on Vercel
- [ ] Test production URL works
- [ ] Test production build works
- [ ] No errors in Vercel logs
- [ ] SSL certificate is valid

---

## ✅ Final Verification

### Before Pushing
- [ ] Re-read all modified files
- [ ] Test all new features end-to-end
- [ ] Verify nothing is broken
- [ ] Document any known issues
- [ ] Update PROJECT_PLAN.md with progress

### After Pushing
- [ ] Wait for Vercel deployment
- [ ] Test live site
- [ ] Check for any production errors
- [ ] Verify analytics working
- [ ] Mark task complete in PROJECT_PLAN.md

---

## 🚨 Emergency Rollback

If something goes wrong after pushing:

1. **Immediate**: `git revert HEAD` (creates new commit undoing last commit)
2. **Alternative**: `git reset --hard HEAD~1` then `git push -f` (destructive - use with caution)
3. **Vercel**: Can rollback to previous deployment in Vercel dashboard
4. **Communication**: Document what went wrong and why

---

## 📝 Notes Section

**Date**: [DATE]  
**Changes Made**: [BRIEF DESCRIPTION]  
**Pages Affected**: [LIST OF PAGES]  
**Potential Issues**: [ANY CONCERNS]  
**Tested By**: [YOUR NAME]

---

**Last Updated**: November 11, 2025  
**Version**: 1.0
