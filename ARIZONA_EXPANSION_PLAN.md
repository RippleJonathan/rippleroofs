# Arizona Expansion Implementation Plan

**Project Start:** January 5, 2026  
**Status:** In Development (Ready to Deploy)  
**Launch Strategy:** Staged Content Rollout

---

## 🎯 Project Overview

Expanding Ripple Roofing from Texas-only operation to multi-state business with new Arizona branch office in Glendale, AZ. Implementation includes:

- **Multi-state infrastructure** with state-specific routing and content
- **Automatic geo-detection** to route Arizona visitors to Arizona content
- **State-aware navigation** showing Arizona services only on Arizona pages
- **10 Arizona city location pages** serving Phoenix metro area
- **Arizona-specific service pages** (tile roof repair, foam coating, monsoon damage, roof replacement)
- **5 foundational blog posts** focused on Arizona roofing market (tile, foam, monsoons, extreme heat)
- **Full Arizona homepage** experience at `/arizona/`
- **Arizona ROC license** display (ROC 362945) prominently in header

---

## 📍 Arizona Branch Office Details

**Office Address:**  
6751 N. Sunset Blvd. #320  
Glendale, Arizona 85305

**Phone Number:**  
(602) 529-3311

**Business Hours:**  
Same as Texas office (maintain consistency)

**Service Area:**  
~80 mile radius from Glendale office

**Arizona ROC License:**  
ROC 362945  
Verification Link: https://azroc.my.site.com/AZRoc/s/contractor-search?licenseId=a0ocs00000HufhpAAB

---

## 🌎 Service Areas (10 Cities - Phoenix Metro)

### Tier 1 - Expanded Content (3 cities):
1. **Scottsdale** - Premium/luxury market, strict HOA requirements
2. **Phoenix** - Largest market, diverse neighborhoods
3. **Tempe** - University area, residential focus

### Tier 2 - Basic Template (7 cities):
4. Mesa
5. Chandler
6. Gilbert
7. Peoria
8. Surprise
9. Avondale
10. Goodyear

*Note: Tier 2 cities can be expanded to full content based on lead volume in future phases*

---

## 🏗️ Technical Architecture

### URL Structure

**Arizona Hub:**
```
rippleroofs.com/arizona/
```

**Arizona City Pages:**
```
rippleroofs.com/arizona/phoenix
rippleroofs.com/arizona/scottsdale
rippleroofs.com/arizona/tempe
rippleroofs.com/arizona/mesa
... (etc for all 10 cities)
```

**Arizona Services:**
```
rippleroofs.com/arizona/services/tile-roof-repair
rippleroofs.com/arizona/services/foam-roof-coating
rippleroofs.com/arizona/services/monsoon-damage-repair
rippleroofs.com/arizona/services/roof-replacement
```

**State Structure:**
- Texas remains at root: `rippleroofs.com/` and `rippleroofs.com/locations/[city]`
- Arizona at subdirectory: `rippleroofs.com/arizona/` and `rippleroofs.com/arizona/[city]`
- **Rationale:** Subdirectory maintains SEO authority on single domain vs. subdomain split

---

## 🎯 Geo-Detection Strategy

### Automatic Routing Behavior

**Option A (Implemented):**
1. Visitor from Arizona IP accesses `rippleroofs.com`
2. Middleware detects `request.geo.region === 'AZ'`
3. Auto-redirect to `rippleroofs.com/arizona/`
4. Set cookie `preferred_state=AZ` (30 day expiration)
5. Subsequent visits honor cookie preference

**User Override:**
- State selector in header allows manual switching (TX ↔ AZ)
- Cookie updated when user manually switches
- Preference persists across sessions

**Edge Cases:**
- VPN/missing geo data → Default to Texas (home state)
- Direct URL access (e.g., Google search to `/arizona/phoenix`) → Keep user on intended page
- Cookie override → Honor user preference over geo-detection

---

## 🧭 Navigation & UX

### State Selector (Header)
- Dropdown or toggle showing "TX | AZ"
- Current state highlighted
- Switches to equivalent page in other state when possible
- Located in top bar with ROC license

### Conditional Service Menu
**When viewing Arizona pages (`/arizona/*`):**
- Show Arizona-specific services:
  - Tile Roof Repair
  - Foam Roof Coating  
  - Monsoon Damage Repair
  - Roof Replacement

**When viewing Texas pages:**
- Show existing Texas services menu

### ROC License Display
**Primary Location:** Top bar (right side)
- Format: `ROC #362945` with small Arizona flag icon
- Clickable link to: https://azroc.my.site.com/AZRoc/s/contractor-search?licenseId=a0ocs00000HufhpAAB
- Opens in new tab
- Tooltip on hover: "Arizona Registrar of Contractors - Verify License"

**Secondary Locations:**
- Footer (Arizona office section)
- Quote/Contact forms (below submit button)
- Service pages (credentials section)
- About page (if applicable)

---

## 📂 File Structure & Changes

### New Files to Create

#### Constants & Data
```
src/constants/locations-arizona.ts          # Arizona cities data (similar to Texas)
src/constants/business-info.ts              # Multi-state business config
```

#### Middleware
```
src/middleware.ts                           # Geo-detection and routing
```

#### Arizona Routes
```
src/app/arizona/layout.tsx                  # Arizona state layout wrapper
src/app/arizona/page.tsx                    # Arizona homepage
src/app/arizona/[slug]/page.tsx             # Dynamic city pages

src/app/arizona/services/tile-roof-repair/page.tsx
src/app/arizona/services/foam-roof-coating/page.tsx
src/app/arizona/services/monsoon-damage-repair/page.tsx
src/app/arizona/services/roof-replacement/page.tsx
```

#### Components
```
src/components/StateSelector.tsx            # TX/AZ switcher
src/components/ROCLicenseBadge.tsx         # Arizona license display
src/components/arizona/ArizonaHero.tsx     # AZ-specific hero
src/components/arizona/ArizonaServiceGrid.tsx
```

#### Blog Content
```
content/blog/phoenix-roofing-guide.mdx
content/blog/tile-roof-underlayment-replacement-phoenix.mdx
content/blog/best-roofing-materials-phoenix-heat.mdx
content/blog/foam-roof-maintenance-phoenix.mdx
content/blog/phoenix-monsoon-roof-damage-guide.mdx
```

### Files to Modify

```
src/constants/index.ts                      # Add state-aware business info
src/app/layout.tsx                          # Update schema for multi-location
src/components/navigation/Header.tsx        # Add state selector
src/components/navigation/MainNav.tsx       # Conditional services menu
src/components/Footer.tsx                   # Show both state offices
src/lib/schema.ts                           # Multi-location schema
next.config.js                              # Potentially for sitemap
package.json                                # Any new dependencies
```

---

## 📊 Arizona Market Differences (vs. Texas)

### Climate & Challenges
| Factor | Arizona | Texas (Central) |
|--------|---------|-----------------|
| **Peak Heat** | 110-120°F (90+ days) | 100-105°F |
| **Roof Surface Temp** | 180-200°F | 150-170°F |
| **Storm Type** | Monsoons (June-Sept) | Hail storms |
| **Humidity** | 10-30% (very dry) | 40-70% (humid) |
| **UV Intensity** | 15-20% higher | Standard |
| **Primary Concern** | Thermal shock, UV damage | Hail damage, wind |

### Material Market Share
| Material | Arizona | Texas |
|----------|---------|-------|
| **Tile (Concrete/Clay)** | 60-65% | <10% |
| **Foam (SPF)** | 15-20% | <5% |
| **Asphalt Shingles** | 10-15% | 75-80% |
| **Metal** | 5-8% | 10-15% |

### Key Arizona-Specific Topics
1. **Tile roof underlayment replacement** (15-20 year cycle vs. 50+ year tiles)
2. **Foam roof maintenance and recoating** (7-10 year recoating schedule)
3. **Monsoon damage** (microbursts, dust storms, flash floods)
4. **Extreme heat protection** (120°F+ temperatures, cooling cost reduction)
5. **HOA requirements** (very strict in Arizona, many tile-only communities)
6. **Thermal shock** (45-50°F day/night temperature swings)

---

## 📝 Blog Content Strategy

### Phase 1: Foundational Content (First 5 Posts)

#### Post 1 - Launch Week
**Title:** "Phoenix Roofing Guide: Everything Arizona Homeowners Need to Know in 2026"  
**Length:** 4,500-6,000 words  
**Target Keywords:** phoenix roofing, phoenix roofing companies, best roofer phoenix  
**Purpose:** Cornerstone content establishing market presence  

**Key Sections:**
- Phoenix climate challenges (extreme heat, monsoons, dust storms)
- Material comparison (tile, foam, metal, shingles)
- Neighborhood guide (Scottsdale, Paradise Valley, Anthem, Sun City, Arcadia)
- HOA navigation
- Cost expectations ($12-18/sq ft for tile vs. $8-12 for shingles)
- Choosing contractors (ROC verification, insurance, warranties)
- Seasonal timing (best installation: Oct-March)

**Unique Arizona Content:** 65% new, 35% adaptable from Texas framework

---

#### Post 2 - Week 2
**Title:** "Tile Roof Underlayment Replacement Phoenix: The 15-Year Problem Nobody Talks About"  
**Length:** 3,500-4,000 words  
**Target Keywords:** tile roof underlayment replacement phoenix, tile roof repair phoenix, underlayment failure  
**Purpose:** Address #1 Arizona-specific problem (unique to tile-dominant market)

**Key Sections:**
- Why Arizona tile roofs fail at 15-20 years (despite 50-year tiles)
- Signs of underlayment failure (leaks, stains, curling shingles underneath)
- Inspection checklist
- Replacement vs. repair decision matrix
- Cost breakdown ($12,000-$25,000 typical project)
- Tile preservation and reuse process
- Timeline expectations (7-10 days)
- HOA considerations and approvals

**Unique Arizona Content:** 100% new (no Texas equivalent - tile rare there)

---

#### Post 3 - Week 3
**Title:** "Best Roofing Materials for Phoenix Heat: Tile vs. Foam vs. Metal vs. Shingles (2026 Guide)"  
**Length:** 5,000-5,500 words  
**Target Keywords:** best roofing materials phoenix, phoenix roofing materials, cool roof phoenix  
**Purpose:** Core educational content addressing #1 homeowner research question

**Key Sections:**
- Phoenix climate analysis (120°F heat, intense UV, thermal shock)
- **Concrete Tile** (60% market share - detailed analysis)
  - Lifespan: 40-70 years
  - Cost: $12-18/sq ft
  - Pros/cons in Arizona heat
  - HOA requirements
- **Clay Tile** (premium segment)
  - Lifespan: 50-100 years
  - Cost: $18-25/sq ft
  - Spanish/Mediterranean style
- **Foam Roofing (SPF)** (15-20% market - extensive coverage)
  - Lifespan: 15-25 years
  - Cost: $8-12/sq ft + recoating $3-5/sq ft every 7-10 years
  - Best for flat roofs
- **Reflective Shingles** (budget option)
  - Lifespan: 15-18 years in AZ heat
  - Cost: $6-9/sq ft
  - Limited HOA acceptance
- **Stone-Coated Metal** (growing segment)
  - Lifespan: 50+ years
  - Cost: $12-20/sq ft
  - Energy efficiency
- Energy efficiency comparison (ROI on cooling costs)
- Total cost of ownership analysis

**Unique Arizona Content:** 60% new (tile/foam sections), 40% adaptable framework

---

#### Post 4 - Week 4
**Title:** "Foam Roof Maintenance Phoenix: Complete Guide to Recoating, Repairs & Lifespan"  
**Length:** 3,000-3,500 words  
**Target Keywords:** foam roofing phoenix, foam roof recoating, SPF roofing arizona, spray foam roof maintenance  
**Purpose:** Serve 15-20% foam roof market (unique to Arizona, rare in Texas)

**Key Sections:**
- What is SPF (spray polyurethane foam) roofing
- Why foam is popular in Arizona (seamless, insulates, handles flat roofs)
- Foam roof lifespan (15-25 years with proper maintenance)
- Recoating schedule and costs ($3-5/sq ft every 7-10 years)
- Signs your foam roof needs attention (blistering, ponding, cracks)
- Common problems and solutions
  - UV coating failure
  - Ponding water
  - Foam shrinkage
  - Improper pitch
- Maintenance requirements (annual inspections, cleaning)
- DIY vs. professional maintenance
- Foam to tile conversion (when and why to switch)
- Contractor selection (foam-specific certifications)

**Unique Arizona Content:** 100% new (foam roofing rare in Texas)

---

#### Post 5 - Month 2 (Week 5-6)
**Title:** "Phoenix Monsoon Roof Damage Guide: How to Inspect & File Claims After Arizona Storms"  
**Length:** 3,500-4,000 words  
**Target Keywords:** monsoon roof damage phoenix, phoenix storm damage, arizona monsoon roof inspection, haboob damage  
**Purpose:** Seasonal content (peak June-October), establishes emergency/insurance expertise

**Key Sections:**
- Understanding Arizona monsoon season (June-September)
- Monsoon hazards vs. Texas storms
  - Microburst winds (70-100 mph sudden gusts)
  - Haboob dust storms (wall of dust, abrasive damage)
  - Flash floods (3+ inches in 30 minutes)
  - Lightning strikes
- Tile roof inspection after monsoons
  - Displaced/broken tiles
  - Valley debris accumulation
  - Flashing damage
- Foam roof inspection
  - Punctures and tears
  - Coating damage
  - Pooling water
- Emergency temporary repairs
- Documentation for insurance claims (photos, videos, timeline)
- Filing claims in Arizona (process, timelines, common denials)
- Choosing emergency contractors (avoiding storm chasers)
- Preventative measures (pre-monsoon inspections)

**Unique Arizona Content:** 50% new monsoon-specific, 50% adaptable from Texas storm framework

---

### Content Rollout Schedule

**Week 1 (Launch):**
- Publish Post 1: Phoenix Roofing Guide
- Deploy all Arizona pages (locations, services, homepage)
- Submit sitemap to Google Search Console

**Week 2:**
- Publish Post 2: Tile Roof Underlayment

**Week 3:**
- Publish Post 3: Best Materials for Phoenix Heat

**Week 4:**
- Publish Post 4: Foam Roof Maintenance

**Month 2 (Week 5-6):**
- Publish Post 5: Monsoon Damage Guide

**Ongoing:**
- Monitor performance metrics
- Expand content based on what ranks/converts
- Add 2-3 posts per month through Q1 2026

---

## 🎨 Arizona Location Pages

### Tier 1 - Expanded Content (3 Cities)

#### Scottsdale - Premium/Luxury Market
**URL:** `rippleroofs.com/arizona/scottsdale`  
**Word Count:** 4,000-4,500 words

**Key Sections:**
- Scottsdale roofing overview
- Climate and challenges (extreme heat + luxury standards)
- Master-planned communities:
  - Silverleaf (ultra-luxury, strict tile requirements)
  - DC Ranch (HOA architectural review)
  - Troon/Troon North (desert contemporary)
  - Desert Mountain (custom estates)
  - Grayhawk (family-oriented luxury)
  - McDowell Mountain Ranch
- HOA requirements (tile-only, color restrictions, approval timelines)
- Tile roof specialists focus
- Premium materials emphasis
- Pricing expectations ($15-20/sq ft higher end)
- Luxury home roofing considerations
- Service areas and response times

**Neighborhoods:** 8-10 specific communities with details

---

#### Phoenix - Broad Coverage
**URL:** `rippleroofs.com/arizona/phoenix`  
**Word Count:** 4,500-5,000 words

**Key Sections:**
- Phoenix roofing overview (largest market)
- Climate challenges (hottest major US city)
- Diverse neighborhoods:
  - Arcadia (mid-century modern, tile roofs)
  - Paradise Valley (luxury estates, custom tile)
  - Ahwatukee (planned community, mixed materials)
  - North Phoenix (newer homes, foam common)
  - Central Phoenix (older homes, various materials)
  - Desert Ridge (growing area)
- Material diversity (tile, foam, shingle mix)
- HOA vs. non-HOA areas
- Pricing tiers by neighborhood
- Historic home considerations (Willo, Roosevelt)
- Commercial roofing (downtown, industrial areas)
- Service coverage (entire Phoenix metro)

**Neighborhoods:** 10-12 diverse areas

---

#### Tempe - University Area
**URL:** `rippleroofs.com/arizona/tempe`  
**Word Count:** 3,500-4,000 words

**Key Sections:**
- Tempe roofing overview
- ASU influence on market (student housing, rentals)
- Residential neighborhoods:
  - Ahwatukee Foothills (master-planned)
  - South Tempe (established families)
  - North Tempe (near ASU)
- Material preferences (mix of tile and shingle)
- HOA requirements (Ahwatukee communities)
- Pricing expectations (mid-range market)
- Rental property roofing
- Commercial roofing (ASU, businesses)
- Climate considerations (same Phoenix metro heat)

**Neighborhoods:** 6-8 areas

---

### Tier 2 - Basic Template (7 Cities)

**Cities:** Mesa, Chandler, Gilbert, Peoria, Surprise, Avondale, Goodyear  
**Word Count:** 1,500-2,000 words each  
**Content:** Standard template with city-specific basics

**Sections:**
- City roofing overview
- Climate summary
- Common roofing materials
- 3-5 major neighborhoods
- Basic pricing info
- Service availability
- CTA to contact

*Can be expanded to Tier 1 status based on lead volume and market response*

---

## 🛠️ Arizona Service Pages

### 1. Tile Roof Repair & Replacement
**URL:** `rippleroofs.com/arizona/services/tile-roof-repair`

**Content Focus:**
- Tile roof overview (60% of Arizona market)
- Common tile problems:
  - Underlayment failure (15-20 year cycle)
  - Cracked/broken tiles from thermal shock
  - Wind-lifted tiles (monsoon damage)
  - Valley damage
- Repair vs. replacement decision
- Tile types (concrete, clay, flat, S-tile)
- Process and timeline
- Cost expectations ($12-18/sq ft replacement, $300-2,000 repairs)
- HOA approval process
- Warranty information
- Free inspection CTA

---

### 2. Foam Roof Coating & Maintenance
**URL:** `rippleroofs.com/arizona/services/foam-roof-coating`

**Content Focus:**
- Foam roofing in Arizona (15-20% market)
- Recoating services ($3-5/sq ft every 7-10 years)
- Foam roof repairs (blisters, cracks, ponding)
- UV coating application
- Maintenance programs
- New foam roof installation
- Cost breakdown
- Warranty options
- Maintenance schedule recommendations
- Free foam roof inspection CTA

---

### 3. Monsoon Damage Repair
**URL:** `rippleroofs.com/arizona/services/monsoon-damage-repair`

**Content Focus:**
- Arizona monsoon season overview (June-Sept)
- Emergency services (24/7 availability)
- Common monsoon damage:
  - Microburst wind damage
  - Haboob dust storm impact
  - Flash flood damage
  - Debris impact (palm fronds, trees)
- Emergency tarping
- Insurance claim assistance
- Tile replacement after storms
- Foam roof emergency repairs
- Timeline expectations
- Direct insurance billing
- 24/7 emergency contact CTA

---

### 4. Roof Replacement
**URL:** `rippleroofs.com/arizona/services/roof-replacement`

**Content Focus:**
- When to replace vs. repair
- Material options for Arizona (tile, foam, metal, shingle)
- Best time for replacement (Oct-March mild weather)
- Process overview (inspection, quote, installation, cleanup)
- Timeline expectations (7-14 days depending on size/material)
- Financing options
- Warranty information (materials + workmanship)
- Energy efficiency upgrades (insulation, ventilation)
- HOA approval assistance
- Cost ranges by material type
- Free estimate CTA

---

## 📱 State-Aware Contact Information

### Business Info Configuration

**Texas (Existing):**
```javascript
BUSINESS_INFO_TEXAS = {
  state: 'TX',
  stateName: 'Texas',
  office: 'Round Rock Headquarters',
  address: {
    street: '1000 Heritage Center Circle, #165',
    city: 'Round Rock',
    state: 'TX',
    zip: '78664',
  },
  phone: '(512) 763-5277',
  phoneRaw: '5127635277',
  hours: 'Mon-Fri: 8am-6pm, Sat: 9am-4pm',
  emergency: '24/7 Emergency Service',
  email: 'sales@rippleroofs.com',
  license: null, // No TX license currently
  coordinates: {
    lat: 30.5088,
    lng: -97.6789,
  },
}
```

**Arizona (New):**
```javascript
BUSINESS_INFO_ARIZONA = {
  state: 'AZ',
  stateName: 'Arizona',
  office: 'Glendale Office',
  address: {
    street: '6751 N. Sunset Blvd. #320',
    city: 'Glendale',
    state: 'AZ',
    zip: '85305',
  },
  phone: '(602) 529-3311',
  phoneRaw: '6025293311',
  hours: 'Mon-Fri: 8am-6pm, Sat: 9am-4pm', // Same as Texas
  emergency: '24/7 Emergency Service',
  email: 'sales@rippleroofs.com', // Same email
  license: {
    number: 'ROC 362945',
    type: 'Arizona Registrar of Contractors',
    verifyUrl: 'https://azroc.my.site.com/AZRoc/s/contractor-search?licenseId=a0ocs00000HufhpAAB',
  },
  coordinates: {
    lat: 33.5387, // Glendale, AZ coordinates
    lng: -112.1860,
  },
}
```

### Helper Function
```javascript
function getBusinessInfo(state: 'TX' | 'AZ' | null): BusinessInfo {
  if (state === 'AZ') return BUSINESS_INFO_ARIZONA
  return BUSINESS_INFO_TEXAS // Default to Texas
}
```

### Usage in Components
- Headers: Show appropriate phone in click-to-call
- Footers: Display both offices with proper state context
- Quote forms: Pre-fill appropriate address/phone based on state
- CTAs: Use state-specific phone numbers
- Schema: Include both locations in LocalBusiness markup

---

## 🔍 SEO & Schema Markup

### Multi-Location Schema

**Organization Schema (Main):**
```json
{
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Ripple Roofing",
  "description": "Professional roofing services in Texas and Arizona",
  "url": "https://rippleroofs.com",
  "logo": "https://rippleroofs.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/rippleroofs",
    "https://www.instagram.com/rippleroofs"
  ],
  "areaServed": [
    {
      "@type": "State",
      "name": "Texas"
    },
    {
      "@type": "State", 
      "name": "Arizona"
    }
  ]
}
```

**Texas Office LocalBusiness:**
```json
{
  "@type": "LocalBusiness",
  "@id": "https://rippleroofs.com/#texas-office",
  "name": "Ripple Roofing - Round Rock",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1000 Heritage Center Circle, #165",
    "addressLocality": "Round Rock",
    "addressRegion": "TX",
    "postalCode": "78664"
  },
  "telephone": "+1-512-763-5277",
  "areaServed": [
    { "@type": "City", "name": "Round Rock" },
    { "@type": "City", "name": "Austin" },
    { "@type": "City", "name": "Georgetown" },
    // ... all 21 Texas cities
  ]
}
```

**Arizona Office LocalBusiness:**
```json
{
  "@type": "LocalBusiness",
  "@id": "https://rippleroofs.com/#arizona-office",
  "name": "Ripple Roofing - Glendale",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6751 N. Sunset Blvd. #320",
    "addressLocality": "Glendale",
    "addressRegion": "AZ",
    "postalCode": "85305"
  },
  "telephone": "+1-602-529-3311",
  "license": "Arizona ROC 362945",
  "areaServed": [
    { "@type": "City", "name": "Phoenix" },
    { "@type": "City", "name": "Scottsdale" },
    { "@type": "City", "name": "Tempe" },
    // ... all 10 Arizona cities
  ]
}
```

### Page-Specific SEO

**Arizona Homepage (`/arizona/`):**
- Title: "Phoenix Roofing Company | Tile, Foam & Monsoon Damage Experts | Ripple Roofing AZ"
- Description: "Professional roofing services in Phoenix metro. Tile roof specialists, foam coating, monsoon damage repair. Arizona ROC 362945. Call (602) 529-3311 for free estimate."
- Keywords: phoenix roofing, arizona roofer, tile roof repair, foam roofing

**Arizona City Pages:**
- Title Format: "[City] Roofing Company | [Primary Service] Specialists | Ripple Roofing"
- Description Format: "Expert roofing services in [City], AZ. [Key services]. ROC 362945. Serving [neighborhoods]. Call (602) 529-3311."

**Arizona Service Pages:**
- Title Format: "[Service] Phoenix | [Benefit] | Ripple Roofing Arizona"
- Description Format: "Professional [service] in Phoenix metro. [Key points]. Arizona licensed ROC 362945. Free estimates: (602) 529-3311."

---

## 📈 Analytics & Tracking

### Events to Track

**State Selection:**
- `state_selector_click` - User manually switches states
- `geo_redirect_arizona` - Auto-redirect from geo-detection
- `state_preference_override` - User overrides geo-detection

**Arizona-Specific:**
- `arizona_page_view` - Any AZ page view
- `arizona_quote_request` - Form submission from AZ pages
- `arizona_phone_click` - Click on (602) 529-3311
- `roc_license_verify_click` - Click on ROC license link

**Content Performance:**
- Track each blog post individually
- Monitor city page performance
- Service page conversion rates

### Implementation
- Google Analytics 4 events
- Tag Manager for click tracking
- Conversion tracking for quote requests
- Phone call tracking (if using call tracking service)

---

## ✅ Implementation Checklist

### Phase 1: Infrastructure (Days 1-2)

**Backend Setup:**
- [ ] Create `src/constants/locations-arizona.ts` with 10 cities data
- [ ] Create `src/constants/business-info.ts` for multi-state config
- [ ] Update `src/constants/index.ts` to export state-aware functions
- [ ] Create `src/middleware.ts` for geo-detection
- [ ] Configure cookie handling for state preference

**Core Routes:**
- [ ] Create `src/app/arizona/layout.tsx`
- [ ] Create `src/app/arizona/page.tsx` (full homepage)
- [ ] Create `src/app/arizona/[slug]/page.tsx` (city pages)
- [ ] Test routing and geo-detection locally

---

### Phase 2: Components (Day 2-3)

**Navigation Components:**
- [ ] Create `src/components/StateSelector.tsx`
- [ ] Create `src/components/ROCLicenseBadge.tsx`
- [ ] Update `src/components/navigation/Header.tsx` with state selector
- [ ] Update `src/components/navigation/MainNav.tsx` for conditional services
- [ ] Update `src/components/Footer.tsx` with both office locations

**Arizona-Specific Components:**
- [ ] Create `src/components/arizona/ArizonaHero.tsx`
- [ ] Create `src/components/arizona/ArizonaServiceGrid.tsx`
- [ ] Create `src/components/arizona/ArizonaLocationList.tsx`

---

### Phase 3: Service Pages (Day 3-4)

**Arizona Services:**
- [ ] `/arizona/services/tile-roof-repair` page
- [ ] `/arizona/services/foam-roof-coating` page
- [ ] `/arizona/services/monsoon-damage-repair` page
- [ ] `/arizona/services/roof-replacement` page
- [ ] Ensure all use Arizona business info and CTAs

---

### Phase 4: Location Pages (Day 4-5)

**Tier 1 - Expanded:**
- [ ] Scottsdale page (4,000+ words)
- [ ] Phoenix page (4,500+ words)
- [ ] Tempe page (3,500+ words)

**Tier 2 - Basic:**
- [ ] Mesa page (1,500-2,000 words)
- [ ] Chandler page
- [ ] Gilbert page
- [ ] Peoria page
- [ ] Surprise page
- [ ] Avondale page
- [ ] Goodyear page

---

### Phase 5: Blog Content (Week 1-Month 2)

**Week 1 (Launch):**
- [ ] Write "Phoenix Roofing Guide 2026" (4,500-6,000 words)
- [ ] Publish at launch
- [ ] Submit to Google Search Console

**Week 2:**
- [ ] Write "Tile Roof Underlayment Replacement Phoenix" (3,500-4,000 words)
- [ ] Publish

**Week 3:**
- [ ] Write "Best Roofing Materials Phoenix Heat" (5,000-5,500 words)
- [ ] Publish

**Week 4:**
- [ ] Write "Foam Roof Maintenance Phoenix" (3,000-3,500 words)
- [ ] Publish

**Month 2:**
- [ ] Write "Phoenix Monsoon Roof Damage Guide" (3,500-4,000 words)
- [ ] Publish

---

### Phase 6: SEO & Technical (Throughout)

**Schema Updates:**
- [ ] Update organization schema for multi-location
- [ ] Add Texas office LocalBusiness schema
- [ ] Add Arizona office LocalBusiness schema
- [ ] Update service pages with areaServed arrays
- [ ] Add breadcrumb schema for Arizona pages

**Sitemap & Indexing:**
- [ ] Update sitemap.xml to include Arizona routes
- [ ] Submit Arizona sitemap to Google Search Console
- [ ] Verify indexing of Arizona pages
- [ ] Monitor coverage reports

**Performance:**
- [ ] Ensure geo-detection doesn't slow initial load
- [ ] Optimize middleware response time
- [ ] Test cookie handling across browsers
- [ ] Verify mobile responsiveness for all AZ pages

---

### Phase 7: Testing & QA (Pre-Launch)

**Functionality:**
- [ ] Test geo-detection from AZ IP (use VPN)
- [ ] Test geo-detection from TX IP
- [ ] Test state selector functionality
- [ ] Verify cookie persistence
- [ ] Test manual override of auto-redirect
- [ ] Confirm ROC license link works

**Navigation:**
- [ ] Verify conditional service menus work
- [ ] Test state switching on all page types
- [ ] Ensure footer shows both offices correctly
- [ ] Check mobile navigation

**Content:**
- [ ] Proofread all 5 blog posts
- [ ] Verify all internal links work
- [ ] Check city page content displays correctly
- [ ] Ensure service pages have correct CTAs

**Forms & CTAs:**
- [ ] Verify Arizona phone number in all AZ CTAs
- [ ] Test quote form submission from AZ pages
- [ ] Ensure contact forms use correct office info
- [ ] Check emergency service CTAs

**SEO:**
- [ ] Verify all meta titles/descriptions
- [ ] Check schema markup validates (Google Rich Results Test)
- [ ] Ensure canonical URLs correct
- [ ] Test breadcrumbs display

**Performance:**
- [ ] Run Lighthouse audits
- [ ] Check Core Web Vitals
- [ ] Test page load speeds
- [ ] Verify mobile performance

---

### Phase 8: Launch (When Ready)

**Pre-Launch:**
- [ ] Final stakeholder review
- [ ] Backup current site
- [ ] Set up monitoring/alerts

**Launch Day:**
- [ ] Deploy to production
- [ ] Verify all pages live
- [ ] Submit sitemap to GSC
- [ ] Monitor error logs

**Post-Launch (First Week):**
- [ ] Monitor analytics for Arizona traffic
- [ ] Check for 404 errors
- [ ] Monitor geo-detection success rate
- [ ] Track quote submissions
- [ ] Review user feedback

---

## 📊 Success Metrics

### Week 1 Goals
- Zero critical bugs
- Arizona pages indexed in Google
- At least 1 quote request from Arizona
- <2 second page load times

### Month 1 Goals
- 10+ Arizona quote requests
- 1,000+ Arizona pageviews
- Blog Post #1 ranking for "phoenix roofing" (page 2-3)
- 5 blog posts published

### Month 3 Goals
- 50+ Arizona quote requests
- 5,000+ Arizona pageviews
- Top 3 blog posts ranking on page 1 for target keywords
- 10% Arizona conversion rate (similar to Texas)

### Month 6 Goals
- 200+ Arizona quote requests
- 20,000+ Arizona pageviews
- Ranking #1 for 3+ long-tail keywords
- Positive ROI on Arizona expansion

---

## 🚀 Future Enhancements (Post-Launch)

### Phase 2 Content (Months 3-6)
- Expand 7 basic city pages to full content
- Add neighborhood-specific guides
- Create HOA requirement database
- Write seasonal content (monsoon prep, summer heat protection)

### Additional Blog Topics
- "Sun City Roofing Guide for Active Adults"
- "Paradise Valley Luxury Home Roofing"
- "Anthem HOA Roofing Requirements"
- "Phoenix Roof Replacement Cost Guide 2026"
- "Tile Roof Repair Phoenix: Common Problems & Costs"
- "Cool Roof Coatings Phoenix: Energy Savings Guide"
- "Phoenix Roof and Solar: Timing Your Replacement"

### Technical Improvements
- Add Spanish language support (large AZ Spanish-speaking market)
- Implement chat widget with state-aware routing
- Add project gallery filtered by state/city
- Create ROI calculators for energy efficiency
- Build HOA approval checklist tool

### Marketing
- Google Business Profile setup for Glendale office
- Local citation building (Yelp, BBB, Angie's List)
- Partner with Arizona solar companies
- Real estate agent partnerships
- Home builder relationships

---

## 📞 Key Contacts & Resources

**Arizona ROC License Verification:**  
https://azroc.my.site.com/AZRoc/s/contractor-search?licenseId=a0ocs00000HufhpAAB

**Arizona Office:**  
6751 N. Sunset Blvd. #320, Glendale, AZ 85305  
(602) 529-3311

**Texas Headquarters:**  
1000 Heritage Center Circle, #165, Round Rock, TX 78664  
(512) 763-5277

---

## 📝 Notes & Decisions

**Decision Log:**
- **1/5/2026:** Chose subdirectory approach over subdomain for SEO unity
- **1/5/2026:** Decided on auto-redirect with cookie for geo-detection (Option A)
- **1/5/2026:** State-aware navigation approved for conditional service menus
- **1/5/2026:** ROC license to display prominently in header (top bar)
- **1/5/2026:** Staged blog rollout: 1 post at launch, then weekly for 4 weeks
- **1/5/2026:** Full Arizona homepage experience (not simple hub page)
- **1/5/2026:** Analytics tracking for state selection and geo-redirects approved

**Open Questions:**
- [ ] Google Business Profile creation timeline for Glendale office
- [ ] Citation building vendor/process (handling separately)
- [ ] Emergency service routing (same team or Arizona-specific?)
- [ ] Spanish language support timeline (future phase?)

---

## 🎉 Project Status

**Current Phase:** Implementation in Progress  
**Target Completion:** 3-4 days  
**Target Launch:** Ready to deploy (content staged for rollout)  
**Last Updated:** January 5, 2026

---

*This document serves as the master plan for Arizona expansion. Update as implementation progresses and new decisions are made.*
