# 🎯 Roof Estimate Tool - Development Plan

## Project Overview

Interactive roof estimation tool that allows customers to:
1. Enter property address
2. View property on interactive map
3. Draw roof polygon to calculate square footage
4. Select roof pitch and waste factor
5. Choose from pre-built roofing packages
6. Generate professional PDF estimate
7. Email estimate to customer (and copy to us)

**Goal:** Differentiate from competitors, streamline estimate process, capture more leads

---

## Phase 1: Frontend MVP (Current Phase) ✅

**Status:** 🚧 IN PROGRESS

**Target:** Fully functional estimate tool with NO backend database required

### Features

- [x] Planning and documentation
- [ ] `/estimate` page route and layout
- [ ] Google Maps integration with address autocomplete
- [ ] Leaflet.js interactive map
- [ ] Polygon drawing tools (draw roof outline)
- [ ] Square footage calculation from polygon
- [ ] Pitch selector (4/12, 5/12, 6/12, 7/12, 8/12, 9/12, 10/12, 12/12)
- [ ] Pitch multiplier calculation
- [ ] Waste factor input (10-15% adjustable)
- [ ] Total squares calculation display
- [ ] Pre-built roofing packages:
  - [ ] CertainTeed Landmark ClimateFlex (Premium Impact-Resistant)
  - [ ] Standing Seam Metal Roofing (Premium Metal)
  - [ ] Economic Package (Budget-Friendly)
- [ ] Package pricing per square
- [ ] Itemized estimate breakdown
- [ ] Timeline estimate
- [ ] Warranty information display
- [ ] PDF generation (jsPDF or react-pdf)
- [ ] Download PDF functionality
- [ ] Email PDF to customer via Resend
- [ ] Auto-CC estimate to office email

### Tech Stack

**Frontend:**
- Next.js 14 (existing framework)
- TypeScript
- Tailwind CSS

**APIs & Libraries:**
- **Maps:** Google Maps API (free tier: $200/month credit)
  - Alternative: Mapbox (free tier: 50k loads/month)
- **Drawing:** Leaflet.js + Leaflet Draw plugin
- **PDF:** jsPDF (client-side PDF generation)
- **Email:** Resend (already configured)
- **Geocoding:** Google Geocoding API (included with Maps)

### File Structure

```
src/
├── app/
│   └── estimate/
│       ├── page.tsx (main estimate page)
│       └── layout.tsx (estimate-specific layout)
├── components/
│   └── estimate/
│       ├── AddressSearch.tsx (address input + autocomplete)
│       ├── EstimateMap.tsx (Leaflet map with drawing)
│       ├── MeasurementPanel.tsx (pitch, waste, calculations)
│       ├── PackageSelector.tsx (3 roofing packages)
│       ├── EstimateSummary.tsx (price breakdown)
│       └── PDFGenerator.tsx (PDF creation logic)
├── lib/
│   └── estimate/
│       ├── calculations.ts (roof math formulas)
│       ├── packages.ts (package definitions & pricing)
│       └── pdf-template.ts (PDF layout/styling)
└── types/
    └── estimate.ts (TypeScript interfaces)
```

### Calculation Formulas

**Square Footage to Squares:**
```typescript
squares = squareFeet / 100
```

**Pitch Multiplier:**
```typescript
const pitchMultipliers = {
  '4/12': 1.06,
  '5/12': 1.08,
  '6/12': 1.12,
  '7/12': 1.16,
  '8/12': 1.20,
  '9/12': 1.25,
  '10/12': 1.30,
  '12/12': 1.41
}
```

**With Waste:**
```typescript
totalSquares = (squareFeet * pitchMultiplier * (1 + wasteFactor)) / 100
```

### Pricing Structure (Placeholder - Adjust as Needed)

**CertainTeed Landmark ClimateFlex:**
- Base: $280/square (material + labor)
- Includes: Class 4 shingles, synthetic underlayment, ventilation check
- Warranty: Lifetime limited manufacturer + 10-year workmanship

**Standing Seam Metal:**
- Base: $450/square (material + labor)
- Includes: 24-gauge steel, concealed fasteners, 40-year finish
- Warranty: 40-year finish + 10-year workmanship

**Economic Package:**
- Base: $200/square (material + labor)
- Includes: Architectural shingles, standard underlayment
- Warranty: 25-year manufacturer + 5-year workmanship

**Additional Line Items:**
- Disposal: $850 flat fee
- Permits: $250 flat fee
- Ventilation upgrade: $600-1,200 (if needed)
- Decking repair: $85/sheet (as needed basis)

### Performance Considerations

**Lazy Loading:**
- Google Maps API only loads on `/estimate` page
- Leaflet.js only loads when map is displayed
- PDF library only loads when generating estimate

**Caching:**
- Google Maps tiles cached by browser
- Address autocomplete results cached (5 min)

**Optimization:**
- Map renders at 720p on mobile, 1080p on desktop
- Polygon simplification for complex roof shapes
- PDF compression for smaller file sizes

**Expected Impact:**
- Page load time: ~2-3 seconds (initial)
- Map render: ~1 second
- PDF generation: ~500ms
- Email send: ~1-2 seconds
- **Total time (address to emailed PDF): ~30-60 seconds**

---

## Phase 2: Database Integration (Future) 🔮

**Status:** 📋 PLANNED

**When:** After Phase 1 is tested and generating 10+ estimates/week

### Features to Add

- [ ] Supabase integration
- [ ] Save estimates to database
- [ ] Retrieve past estimates
- [ ] Admin dashboard (view all estimates)
- [ ] Lead tracking
- [ ] Conversion analytics
- [ ] Customer estimate history

### Database Schema (PostgreSQL via Supabase)

```sql
-- Estimates table
CREATE TABLE estimates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT NOW(),
  address TEXT NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  square_footage DECIMAL(10, 2),
  pitch VARCHAR(10),
  waste_factor DECIMAL(4, 2),
  total_squares DECIMAL(10, 2),
  package_selected VARCHAR(50),
  total_price DECIMAL(10, 2),
  customer_name VARCHAR(255),
  customer_email VARCHAR(255),
  customer_phone VARCHAR(20),
  pdf_url TEXT,
  status VARCHAR(20) DEFAULT 'sent', -- sent, viewed, followed_up, converted, lost
  notes TEXT
);

-- Indexes for performance
CREATE INDEX idx_estimates_email ON estimates(customer_email);
CREATE INDEX idx_estimates_created ON estimates(created_at DESC);
CREATE INDEX idx_estimates_status ON estimates(status);
```

**Cost:** $0/month (Supabase free tier)

---

## Phase 3: Premium Integrations (Future) 💎

**Status:** 💭 CONCEPT

**When:** 6+ months after Phase 2, if tool proves highly valuable

### Potential Integrations

**E-Signature:**
- DocuSign API ($10-40/month)
- HelloSign/Dropbox Sign ($15-30/month)
- Auto-send contracts after estimate approval

**Payment:**
- QuickBooks Online API ($30-200/month)
- Auto-generate invoices
- Send payment links
- Track payment status

**Financing:**
- GreenSky API integration
- EnerBank integration
- Pre-qualification forms
- Direct application links

**Automated Measurements:**
- EagleView API (~$25-50 per report)
- HoverConnect API (~$35-75 per report)
- Skip manual drawing, get professional measurements
- Includes pitch, materials, aerial photos

**Expected Cost:** $200-500/month (all services combined)

---

## Success Metrics

### Phase 1 Goals

- **Adoption:** 5+ estimates generated per week
- **Conversion:** 20%+ of estimates convert to scheduled inspections
- **Time savings:** 15-20 minutes per estimate vs manual process
- **Lead capture:** 100% email capture rate (required to send estimate)
- **Customer satisfaction:** Positive feedback on tool ease-of-use

### Phase 2 Goals (Future)

- **Data insights:** Track which packages are most popular
- **Follow-up efficiency:** 80% follow-up rate on estimates
- **Conversion improvement:** 30%+ estimate-to-job conversion
- **ROI tracking:** Compare estimate leads vs other lead sources

---

## Development Timeline

### Week 1: Core Functionality
- **Day 1-2:** Map integration and address search
- **Day 3-4:** Polygon drawing and calculations
- **Day 5-7:** Package selection and pricing

### Week 2: Polish & Launch
- **Day 1-3:** PDF generation and email
- **Day 4-5:** UI/UX polish, mobile optimization
- **Day 6-7:** Testing, bug fixes, launch

**Total Estimated Time:** 8-12 hours actual development

---

## API Keys Needed

### Google Maps Platform

1. **Maps JavaScript API** (for map display)
2. **Places API** (for address autocomplete)
3. **Geocoding API** (for lat/lng from address)

**Setup:**
- Go to: https://console.cloud.google.com/
- Enable APIs
- Create API key
- Add to `.env.local` as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

**Free Tier:**
- $200/month credit (covers ~28,000 map loads)
- 40,000 free autocomplete requests/month
- Should be MORE than enough for initial usage

### Alternative: Mapbox (If Preferred)

**Free Tier:**
- 50,000 free map loads/month
- 100,000 free geocoding requests/month
- More generous for low-traffic sites

**Both are solid options - Google Maps may have better aerial imagery**

---

## Known Limitations (Phase 1)

1. **Manual Drawing Required**
   - User must manually draw roof polygon
   - Not as fast as automated measurement tools
   - **Mitigation:** Clear instructions, video tutorial

2. **No Estimate History**
   - Customers can't retrieve past estimates (until Phase 2)
   - **Mitigation:** Always email PDF for their records

3. **Static Pricing**
   - Prices hardcoded, not dynamic based on material costs
   - **Mitigation:** Easy to update pricing in code

4. **No Complex Roof Features**
   - Assumes simple roof shape
   - Doesn't account for valleys, hips, dormers in detail
   - **Mitigation:** Add notes about "subject to on-site verification"

5. **No User Accounts**
   - Can't save/share estimates until Phase 2
   - **Mitigation:** Email provides permanent record

---

## Marketing/Promotion Ideas

Once tool is live:

1. **Homepage CTA:** "Get Instant Estimate" button
2. **Service Pages:** Link to estimate tool
3. **Location Pages:** "See what your [city] roof costs"
4. **Blog Posts:** "How much does a roof cost in Texas?" → link to tool
5. **Google Ads:** Land on estimate page directly
6. **Social Media:** Demo video showing how easy it is
7. **Email Signature:** "Try our instant estimate tool"

**Unique Selling Proposition:**
> "Get an instant, accurate roof estimate in 60 seconds - no waiting for callbacks, no pressure. Try our interactive estimate tool now!"

---

## Questions to Answer During Development

- [ ] What should default pitch be? (6/12 is most common in Texas)
- [ ] Default waste factor? (10% standard, 15% for complex roofs)
- [ ] Should we show price ranges or exact prices?
- [ ] Include tax in estimate or add "plus tax" note?
- [ ] Timeline: 1 day? 1-2 days? Weather-dependent?
- [ ] Should estimates expire? (30 days standard)
- [ ] Require phone number or just email?
- [ ] Add disclaimer about "subject to on-site inspection"?

---

## Next Steps

1. ✅ Create this documentation
2. ⏭️ Set up Google Maps API keys
3. ⏭️ Create `/estimate` page route
4. ⏭️ Build AddressSearch component
5. ⏭️ Integrate Leaflet map
6. ⏭️ Add drawing tools
7. ⏭️ Build calculation logic
8. ⏭️ Create package selector
9. ⏭️ Generate PDF
10. ⏭️ Test email delivery
11. ⏭️ Launch! 🚀

---

## Resources

**Leaflet Documentation:**
- https://leafletjs.com/
- https://github.com/Leaflet/Leaflet.draw

**Google Maps API:**
- https://developers.google.com/maps/documentation/javascript

**jsPDF:**
- https://github.com/parallax/jsPDF

**Pitch Multiplier Reference:**
- https://www.roofingcalc.com/roof-pitch-calculator/

**Square Footage Guide:**
- 1 square = 100 sq ft
- Average home: 20-35 squares
- Large home: 40-60 squares

---

**Last Updated:** November 12, 2025
**Current Phase:** Phase 1 - Frontend MVP
**Status:** 🚧 In Progress
