# Agent Instructions for Ripple Roofs Website Development

## Role & Context
You are acting as an expert full-stack developer and UI/UX designer building a premium, futuristic roofing company website. Your primary objective is to create a high-performance, lead-generating website that exemplifies modern web development practices.

## Project Overview
**Project Name:** Ripple Roofs  
**Type:** Premium Roofing Company Website  
**Primary Goals:**
1. Achieve Lighthouse scores over 95
2. Maximize lead capture through strategic CTAs
3. Deliver flawless mobile-first design
4. Maintain modern, maintainable codebase

---

## Technical Specifications

### Core Technology Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Form Management:** React Hook Form + Zod validation
- **Backend:** Next.js API Routes
- **Deployment:** Vercel
- **Node Version:** 18.x or higher

### Required Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    "tailwindcss": "^3.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

---

## Design System & Aesthetic

### Visual Identity
- **Overall Vibe:** Premium, strong, reliable, cutting-edge (think high-end automotive/tech)
- **Layout Philosophy:** Clean, spacious, geometric lines, bold typography
- **Typography:** Modern sans-serif (e.g., Inter, Space Grotesk, or similar)

### Color Palette
```
Primary: Deep charcoal (#1a1a1a) or navy blue (#0f172a)
Secondary/CTA: Vibrant accent color
  - Option A: Electric Orange (#ff6b35)
  - Option B: Electric Blue (#0ea5e9)
  - Option C: Lime Green (#84cc16)
Base: Pure white (#ffffff) and off-white (#f8fafc)
Gray Scale: Use Tailwind's slate palette
```

### Animation & Micro-interactions
- **Scroll Animations:** Fade-ins with slight upward movement (use intersection observer)
- **Hover Effects:** Smooth transitions on buttons, links, cards (150-300ms)
- **Button States:** Scale, color change, shadow increase
- **SVG Animations:** Subtle, purposeful animations on icons
- **Performance:** Use `transform` and `opacity` only for animations (GPU-accelerated)

### Imagery Guidelines
- **Quality:** High-resolution, professional photography only
- **Subjects:** Modern homes, architectural details, clean roofing projects
- **Avoid:** Generic stock photos
- **Optimization:** All images through `next/image` component, WebP format
- **Alt Text:** Descriptive and SEO-friendly

---

## Lead Capture Strategy

### Primary CTA
- **Text Options:** "Get a Free Inspection" or "Request Your Free Quote"
- **Placement:** Navbar (sticky), hero section (above fold), footer, strategic page sections

### Form Specifications
**Fields Required:**
1. Name (text, required)
2. Phone (tel, required, format validation)
3. Email (email, required, email validation)
4. Address (text, required)
5. Service Needed (dropdown, required):
   - Roof Repair
   - Roof Replacement
   - New Installation
   - Storm Damage
   - Other

**Validation Requirements:**
- Client-side: Zod schema with React Hook Form
- Server-side: Validate in API route before processing
- Error messages: Clear, user-friendly, inline
- Success state: Confirmation message + redirect/thank you page

**Form Variants:**
1. Full form (Contact page)
2. Sidebar mini-form (Service pages)
3. Modal form (triggered from CTA buttons)

### Navigation Strategy
- **Navbar:** Sticky, prominent CTA button at all times
- **Mobile Menu:** Hamburger menu with CTA prominently placed
- **Footer:** Repeat CTA with alternate text

---

## Website Structure & Page Requirements

### A. Homepage (`/`)
**Sections (in order):**

1. **Hero Section**
   - Full-screen or large viewport height
   - High-impact image OR subtle video background
   - Headline: "The Future of Roofing is Here" (or similar bold statement)
   - Subheadline: Brief value proposition
   - Primary CTA button (large, prominent)
   - Performance: Use `priority` on hero image

2. **Trust Bar / Why Us**
   - 3-4 key value propositions
   - Icons + short text (e.g., "Lifetime Warranty", "Certified Installers", "24/7 Emergency Service")
   - Grid or flex layout

3. **Services Overview**
   - Grid or card-based layout (3-4 main services)
   - Each card: Icon/image, title, brief description, "Learn More" link
   - Link to individual service pages

4. **Social Proof / Testimonials**
   - Carousel or grid of 5-star customer testimonials
   - Include customer name, location (if available)
   - Optional: Star rating display

5. **Project Gallery Preview**
   - Showcase 3-4 recent projects
   - High-quality before/after or finished project photos
   - "View All Projects" CTA

6. **Final CTA Section**
   - Large, unmissable section
   - Strong headline
   - Primary CTA button
   - Optional: Secondary contact info (phone number)

### B. Service Pages (`/services/[slug]`)
**Dynamic Template Requirements:**

- **URL Structure:** `/services/roof-repair`, `/services/roof-replacement`, etc.
- **H1:** Service-specific (e.g., "Expert Residential Roof Replacement")
- **Hero Image:** Service-specific, high-quality
- **Content Sections:**
  1. Service description (detailed)
  2. "Our Process" (e.g., 1. Inspection → 2. Quote → 3. Installation → 4. Cleanup)
  3. Benefits/Why choose us for this service
  4. Related projects (if applicable)
  
- **Sidebar:** Sticky "Get a Quote" mini-form
- **SEO:** Dynamic meta tags based on service
- **Services to Create:**
  - Roof Repair
  - Roof Replacement
  - New Installation
  - Storm Damage Repair
  - Commercial Roofing
  - Residential Roofing

### C. Project Gallery (`/projects`)
**Features:**
- Filterable grid layout
- Filter categories: "All", "Commercial", "Residential", "Metal", "Shingle", etc.
- Masonry or grid layout
- Click behavior: Modal with larger image + description OR separate project page
- Lazy loading for images
- Pagination or infinite scroll (for large galleries)

**Individual Project (optional):**
- Project name/title
- Before/After images
- Brief description
- Service category
- CTA to related service

### D. About Us (`/about`)
**Content:**
- Company mission statement
- Company story/history
- Core values
- Team photos (builds trust)
- Certifications/Accreditations
- Years in business, projects completed (stats)
- CTA section

### E. Contact Page (`/contact`)
**Content:**
- Full "Get a Quote" form (primary)
- Business phone number (clickable `tel:` link)
- Email address (clickable `mailto:` link)
- Physical address (if applicable)
- Embedded Google Map
- Business hours
- CTA variations: "Call Now", "Email Us", "Schedule Inspection"

---

## Performance Requirements

### Lighthouse Targets
- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 95+

### Implementation Strategy

#### Static Site Generation (SSG)
Use SSG for:
- Homepage
- About page
- All service pages
- Terms, Privacy Policy (if applicable)

#### Image Optimization
```typescript
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Descriptive alt text"
  width={1920}
  height={1080}
  priority // for hero images
  quality={85}
  placeholder="blur"
/>
```

#### Font Optimization
- Use `next/font` for Google Fonts or local fonts
- Preload critical fonts
- Use font-display: swap

#### Code Splitting
- Dynamic imports for heavy components
- Lazy load below-the-fold content
- Separate client/server components appropriately

---

## SEO & GEO Requirements (CRITICAL FOR VISIBILITY)

### Local SEO Strategy (GEO)
**Target Areas:** Central Texas, Austin Metro, San Antonio, Georgetown, Round Rock, Killeen, Copperas Cove, Portland

#### Location-Specific Optimization
- [ ] Include city/region names in page titles (e.g., "Roofing Services in Round Rock, TX")
- [ ] Create location-specific content throughout pages
- [ ] Add "Service Areas" section on every key page
- [ ] Use local landmarks and neighborhoods in content
- [ ] Include "Near me" variations in metadata
- [ ] Embed Google Maps on contact page
- [ ] Add local business Schema.org markup with service areas

#### NAP Consistency (Name, Address, Phone)
- [ ] Consistent business name across all pages
- [ ] Consistent address format: "1000 Heritage Center Circle, Round Rock, TX 78664"
- [ ] Consistent phone number: "(512) 763-5277"
- [ ] Add to footer on every page
- [ ] Include in structured data

### On-Page SEO Checklist
- [ ] **Unique, descriptive meta title** for each page (50-60 characters)
  - Include target keywords + location (e.g., "Roof Repair Round Rock TX | Ripple Roofing")
- [ ] **Unique meta description** for each page (150-160 characters)
  - Include call-to-action, location, and primary keyword
- [ ] **One H1 per page** (descriptive, keyword-rich, location-specific)
  - Examples: "Expert Roof Replacement in Central Texas", "Round Rock's Premier Roofing Company"
- [ ] **Proper heading hierarchy** (H1 → H2 → H3) with keyword variations
- [ ] **Descriptive alt text** for ALL images (include location when relevant)
  - Example: "Residential roof installation in Round Rock Texas"
- [ ] **Internal linking strategy** with descriptive anchor text
- [ ] **Schema.org markup** (LocalBusiness, Service, Organization, BreadcrumbList)
- [ ] **Canonical URLs** on all pages
- [ ] **Open Graph tags** (social sharing with location)
- [ ] **Twitter Card tags**

### Technical SEO
- [ ] Generate `sitemap.xml` with priority weighting
- [ ] Generate `robots.txt` with sitemap reference
- [ ] **Mobile-friendly** (responsive design - CRITICAL for local search)
- [ ] **Fast page load times** (< 2s - impacts local rankings)
- [ ] HTTPS (handled by Vercel)
- [ ] **Structured data for local business** with serviceArea property
- [ ] **Google Business Profile** integration ready
- [ ] **Local citations** markup (Yelp, Angi, HomeAdvisor ready)

### Structured Data Implementation (REQUIRED)
```typescript
// Include in layout.tsx or page-specific
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://rippleroofs.com",
  "name": "Ripple Roofing & Construction",
  "image": "https://rippleroofs.com/og-image.jpg",
  "telephone": "(512) 763-5277",
  "email": "info@rippleroofs.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1000 Heritage Center Circle",
    "addressLocality": "Round Rock",
    "addressRegion": "TX",
    "postalCode": "78664",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.5088",
    "longitude": "-97.6788"
  },
  "url": "https://rippleroofs.com",
  "areaServed": [
    {
      "@type": "City",
      "name": "Austin"
    },
    {
      "@type": "City",
      "name": "Round Rock"
    },
    {
      "@type": "City",
      "name": "Georgetown"
    },
    {
      "@type": "City",
      "name": "San Antonio"
    }
    // Add all service areas
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-23:59",
  "sameAs": [
    "https://facebook.com/rippleroofs"
  ]
}
```

### Content SEO Best Practices
- [ ] **Keyword density:** 1-2% for primary keywords (natural placement)
- [ ] **Location mentions:** Include service cities naturally in first paragraph
- [ ] **Long-tail keywords:** Target specific services + location combos
  - Examples: "emergency roof repair Round Rock", "CertainTeed shingle installation Austin"
- [ ] **FAQ sections:** Add to service pages for featured snippet opportunities
- [ ] **Service area pages:** Consider creating location-specific landing pages
- [ ] **Blog/Resources:** Create local content (e.g., "Best Roofing Materials for Texas Weather")

### Metadata Implementation Template
```typescript
// app/services/[slug]/page.tsx
export const metadata = {
  title: 'Roof Repair Services in Round Rock, TX | Ripple Roofing',
  description: 'Expert roof repair in Round Rock & Central Texas. 24/7 emergency service, CertainTeed certified. Call (512) 763-5277 for free inspection.',
  keywords: 'roof repair, Round Rock roofing, emergency roof repair, Central Texas roofer',
  openGraph: {
    title: 'Round Rock Roof Repair Services | Ripple Roofing',
    description: 'Trusted roof repair in Round Rock, TX. Fast response, quality work.',
    images: ['/images/og/roof-repair.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Repair Round Rock TX',
    description: 'Expert roofing services in Central Texas',
  },
  alternates: {
    canonical: 'https://rippleroofs.com/services/roof-repair'
  }
}
```

### Google Business Profile Optimization (Post-Launch)
- [ ] Claim and verify Google Business Profile
- [ ] Add all service areas as service regions
- [ ] Upload high-quality photos (minimum 10)
- [ ] Collect and respond to reviews
- [ ] Post updates regularly
- [ ] Add services with descriptions
- [ ] Complete all business information fields

---

## Form Backend Implementation

### API Route Structure (`/api/quote`)
```typescript
// app/api/quote/route.ts
import { NextResponse } from 'next/server'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/),
  email: z.string().email(),
  address: z.string().min(5),
  service: z.enum(['Roof Repair', 'Roof Replacement', 'New Installation', 'Storm Damage', 'Other']),
})

export async function POST(request: Request) {
  // Validation
  // Send email or post to CRM
  // Return success/error response
}
```

### Email/CRM Integration Options
1. **Email:** Use Nodemailer, SendGrid, or Resend
2. **CRM:** Integrate with HubSpot, Salesforce, or custom solution
3. **Notifications:** Slack/Discord webhook for instant alerts

---

## File Structure

```
rippleroofs/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── projects/
│   │   └── team/
│   ├── icons/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── quote/
│   │           └── route.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTASection.tsx
│   │   ├── forms/
│   │   │   ├── QuoteForm.tsx
│   │   │   ├── MiniForm.tsx
│   │   │   └── FormModal.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Select.tsx
│   │   └── shared/
│   │       ├── ServiceCard.tsx
│   │       ├── ProjectCard.tsx
│   │       └── TestimonialCard.tsx
│   ├── lib/
│   │   ├── validations/
│   │   │   └── quote.ts
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       └── index.ts
├── .env.local
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Development Workflow

### Phase 1: Setup & Foundation
1. Initialize Next.js project with TypeScript
2. Configure Tailwind CSS
3. Set up ESLint and Prettier
4. Create base layout components (Navbar, Footer)
5. Establish design system (colors, spacing, typography)

### Phase 2: Homepage Development
1. Hero section with image optimization
2. Trust bar / value propositions
3. Services grid with cards
4. Testimonials section
5. Project gallery preview
6. Final CTA section

### Phase 3: Form Implementation
1. Create Zod validation schemas
2. Build form components with React Hook Form
3. Implement API route for form submission
4. Set up email/CRM integration
5. Add success/error handling

### Phase 4: Additional Pages
1. Service pages (dynamic template)
2. Project gallery with filtering
3. About Us page
4. Contact page

### Phase 5: Optimization & SEO
1. Implement metadata for all pages
2. Add structured data (Schema.org)
3. Generate sitemap.xml
4. Optimize images and fonts
5. Run Lighthouse audits and optimize

### Phase 6: Testing & Deployment
1. Cross-browser testing
2. Mobile responsiveness testing
3. Form submission testing
4. Performance testing
5. Deploy to Vercel
6. Post-deployment testing

---

## Component Development Guidelines

### Component Structure
```typescript
'use client' // Only if client-side interactivity needed

import { FC } from 'react'

interface ComponentProps {
  // Define props
}

export const Component: FC<ComponentProps> = ({ props }) => {
  return (
    <div className="tailwind-classes">
      {/* Component content */}
    </div>
  )
}
```

### Naming Conventions
- **Components:** PascalCase (e.g., `HeroSection.tsx`)
- **Utilities:** camelCase (e.g., `formatPhoneNumber.ts`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS`)
- **CSS Classes:** kebab-case or Tailwind utilities

### Accessibility Requirements
- [ ] Semantic HTML elements
- [ ] ARIA labels where appropriate
- [ ] Keyboard navigation support
- [ ] Focus indicators visible
- [ ] Color contrast ratios meet WCAG AA standards
- [ ] Screen reader friendly
- [ ] Alt text for all images

---

## Testing Checklist

### Functionality Testing
- [ ] All forms submit correctly
- [ ] Form validation works (client & server)
- [ ] Navigation links work correctly
- [ ] CTAs lead to appropriate destinations
- [ ] Mobile menu functions properly
- [ ] Filters work on project gallery

### Performance Testing
- [ ] Lighthouse score > 95 on all key pages
- [ ] Images load quickly and are optimized
- [ ] No layout shift (CLS near 0)
- [ ] Fast First Contentful Paint (FCP < 1.8s)
- [ ] Fast Largest Contentful Paint (LCP < 2.5s)

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Design Testing
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Large screens (1920px+)

---

## Deployment Instructions

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://rippleroofs.com
EMAIL_SERVICE_API_KEY=your_key_here
CRM_API_KEY=your_key_here
GOOGLE_MAPS_API_KEY=your_key_here
```

### Vercel Deployment
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy
5. Set up custom domain (if applicable)

### Post-Deployment
- [ ] Verify all forms work in production
- [ ] Check analytics integration
- [ ] Test contact methods (phone, email)
- [ ] Verify sitemap is accessible
- [ ] Submit sitemap to Google Search Console

---

## Maintenance & Updates

### Regular Tasks
- Update dependencies monthly
- Monitor form submissions and response times
- Check Lighthouse scores quarterly
- Update project gallery with new projects
- Refresh testimonials periodically

### Content Updates
- Service descriptions and pricing
- Team photos and bios
- Project gallery additions
- Blog posts (if implemented)

---

## Key Principles to Remember

1. **Performance First:** Every decision should consider performance impact
2. **Mobile-First:** Design and develop for mobile, then scale up
3. **Conversion-Focused:** Every page should guide toward lead capture
4. **Accessibility:** Build for all users, regardless of ability
5. **Maintainability:** Write clean, documented, modular code
6. **SEO-Optimized:** Every page should be discoverable and rankable
7. **Brand Consistency:** Maintain premium, professional aesthetic throughout

---

## Questions to Ask Before Building

When implementing features, always consider:
1. Does this improve the user experience?
2. Does this impact performance negatively?
3. Does this help capture leads?
4. Is this accessible to all users?
5. Is this mobile-friendly?
6. Does this align with the premium brand aesthetic?
7. Is this maintainable and scalable?

---

## Success Metrics

### Technical Metrics
- Lighthouse Performance Score: > 95
- Page Load Time: < 2 seconds
- Time to Interactive: < 3 seconds
- Core Web Vitals: All "Good" ratings

### Business Metrics
- Form submission rate
- Bounce rate < 40%
- Average session duration > 2 minutes
- Mobile traffic conversion rate
- Pages per session > 3

---

## Additional Notes

- **Priority:** Lead generation is the #1 goal. Performance and design serve this goal.
- **Aesthetic:** "Futuristic" doesn't mean over-designed. Keep it clean, bold, and purposeful.
- **Content:** Placeholder text is acceptable for initial development, but final content should be professional and conversion-focused.
- **Images:** Use placeholder images initially, but plan for high-quality, professional photography in production.

---

## Support Resources

- **Next.js Documentation:** https://nextjs.org/docs
- **Tailwind CSS Documentation:** https://tailwindcss.com/docs
- **React Hook Form:** https://react-hook-form.com/
- **Zod:** https://zod.dev/
- **Vercel Documentation:** https://vercel.com/docs

---

**Remember:** You are building a premium product for a premium service. Every pixel, every animation, every word should reflect quality, reliability, and cutting-edge excellence.
