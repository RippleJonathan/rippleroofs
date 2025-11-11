# Schema Markup Validation Guide

## Overview
This document tracks all structured data (schema.org) implementations across the Ripple Roofing website for SEO purposes.

## Schema Implementation Status

### ✅ Homepage (/)
**Schema Types:** RoofingContractor, LocalBusiness, Organization
- [x] Business Information (name, address, phone, email)
- [x] GeoCoordinates
- [x] Opening Hours (24/7)
- [x] Area Served (6 priority cities + San Antonio)
- [x] Aggregate Rating (4.9/5, 267 reviews)
- [x] Service Catalog (4 main services)
- [x] Social Profiles (Facebook, BBB)
- [x] Logo and Images
- [x] Knowledge Graph optimization
- [x] Service Area radius (80km)

### ✅ Service Pages (/services/[slug])
**Schema Types:** Service, BreadcrumbList
- [x] Service Details (name, description, URL, image)
- [x] Provider Information (RoofingContractor)
- [x] Area Served (6 cities with proper structure)
- [x] Aggregate Rating
- [x] Available Channel (phone, URL)
- [x] Potential Action (OrderAction)
- [x] Breadcrumb Navigation (Home > Services > [Service Name])

**Implemented on all 8 service pages:**
1. Residential Roofing
2. Commercial Roofing
3. Roof Replacement
4. Roof Repair
5. Emergency Roof Repair
6. Roof Inspection
7. Gutter Services
8. Storm Damage Restoration

### ✅ Location Pages (/locations/[slug])
**Schema Types:** RoofingContractor, BreadcrumbList, Review, FAQPage
- [x] Local Business Information
- [x] City-specific Area Served
- [x] Neighborhood listings (top 5 per city)
- [x] Service Catalog
- [x] Aggregate Rating
- [x] Breadcrumb Navigation (Home > Locations > [City])
- [x] Review Schema
- [x] FAQ Schema

**Enhanced pages with deep content (Priority SEO):**
1. Round Rock (3,200+ words)
2. Austin (3,800+ words)
3. Georgetown (4,000+ words)
4. Pflugerville (3,700+ words)
5. Cedar Park (3,700+ words)
6. Leander (3,800+ words)

**Standard pages (base content):**
7. San Antonio
8. Killeen
9. Temple
10. Waco
11. San Marcos
12. New Braunfels
13. Copperas Cove

### ✅ Blog Posts (/blog/[slug])
**Schema Types:** Article, BreadcrumbList
- [x] Article metadata
- [x] Author information
- [x] Date published/modified
- [x] Image
- [x] Publisher information

### ✅ FAQ Page (/faq)
**Schema Types:** FAQPage
- [x] FAQ structured data for rich snippets

### ✅ Projects Page (/projects)
**Schema Types:** ImageGallery
- [x] Project gallery schema

## Sitemap Optimization

### Priority Levels (0.0-1.0)
- **1.0** - Homepage
- **0.95** - Priority location pages (6 enhanced cities)
- **0.9** - Main navigation (Services, Locations, Blog, Contact)
- **0.85** - All service pages, secondary location pages
- **0.8** - Supporting pages (About, FAQ, Financing, Warranty)
- **0.7** - Projects page, individual blog posts

### Change Frequency
- **daily** - Homepage (dynamic content)
- **weekly** - Blog, Services index, Locations index, Priority location pages
- **monthly** - Individual service pages, blog posts, static pages

## Validation Tools

### Recommended Testing Tools:
1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Google Search Console**: Monitor structured data errors
4. **Bing Webmaster Tools**: Verify schema recognition

### Validation Checklist

#### Before Launch:
- [ ] Validate homepage schema (Google Rich Results Test)
- [ ] Test 2-3 service pages for Service schema
- [ ] Test 2-3 location pages for LocalBusiness schema
- [ ] Verify sitemap.xml accessible at /sitemap.xml
- [ ] Verify robots.txt accessible at /robots.txt
- [ ] Check for schema warnings/errors in Google Search Console

#### Post-Launch Monitoring:
- [ ] Monitor Search Console for structured data errors (weekly)
- [ ] Check rich snippet appearance in SERPs (monthly)
- [ ] Verify schema updates after content changes
- [ ] Track CTR improvements from rich snippets

## Schema Benefits for SEO

### Expected Rich Snippets:
1. **Business Information Card** - Homepage
   - Business name, rating, phone, hours
   - Appears in local pack and knowledge panel

2. **Service Breadcrumbs** - Service pages
   - Enhanced navigation path in search results
   - Improved click-through rates

3. **Location Breadcrumbs** - Location pages
   - City-specific navigation
   - Local search visibility

4. **FAQ Rich Snippets** - FAQ pages
   - Expandable Q&A in search results
   - Increased SERP real estate

5. **Review Stars** - All business listings
   - 4.9-star rating display
   - Trust signals in search results

6. **Service Listings** - Knowledge panel
   - Quick access to service pages
   - Enhanced visibility for service queries

## Next Steps (Phase 6 Complete)

### Completed ✅
- [x] Enhanced Service schema with full provider details
- [x] Added BreadcrumbList to all service pages
- [x] Optimized sitemap priorities for enhanced location pages
- [x] Enhanced homepage Organization schema
- [x] Verified all locations have BreadcrumbList schema
- [x] Added knowledge graph optimizations

### Future Enhancements (Optional)
- [ ] Add VideoObject schema when video content added
- [ ] Implement HowTo schema for installation guides
- [ ] Add Event schema for any promotional events
- [ ] Consider adding Product schema if selling materials
- [ ] Monitor and respond to schema.org updates

## Technical Notes

### Schema Format
- Using JSON-LD format (recommended by Google)
- Embedded in `<script type="application/ld+json">` tags
- Separate schemas combined with multiple script tags

### Best Practices Applied
✅ Using specific types (RoofingContractor vs generic Organization)
✅ Proper nesting of addresses and locations
✅ Consistent NAP (Name, Address, Phone) across all schemas
✅ Realistic rating values (4.9/5) with review counts
✅ Complete contact information
✅ Proper URL structure with canonical URLs
✅ Service area clearly defined
✅ Operating hours specified
✅ Social media profiles included

## Maintenance Schedule

- **Monthly**: Review Search Console for schema errors
- **Quarterly**: Validate 10-15% of pages with testing tools
- **After major updates**: Re-validate affected pages
- **Annually**: Complete schema audit and update to latest spec

---

Last Updated: November 11, 2025
Phase 6: Technical SEO - COMPLETE ✅
