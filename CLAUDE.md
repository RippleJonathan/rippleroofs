# Ripple Roofing & Construction — Ground Truth

This file exists because a batch of blog content (and some service-page copy) was written with fabricated business facts before this file existed. When writing or editing any customer-facing content — blog posts, service pages, location pages, testimonials, schema/structured data — check claims against this file. If a number or date isn't listed here, don't invent one; ask or leave it out.

## Company facts

- **Name:** Ripple Roofing & Construction
- **Founded:** January 2024, in Round Rock, TX, by Jonathan. Owner-operated.
- **Do not claim tenure.** No "since 2015," "X+ years in business," "X+ years serving Central Texas," or similar. The company is genuinely new (~2.5 years old as of mid-2026) and there's nothing to gain by fabricating history — if a post needs a trust signal, lean on certifications and licensing instead, not years in operation.
- Jonathan is a U.S. Navy veteran, attended Central Texas College and Texas A&M University in Killeen, and has lived in Central Texas 14+ years. He ran operations for a corporate roofing company before founding Ripple. That personal background is real and citable — but it is *his* history, not the company's operating history. Don't convert "Jonathan has lived here 14 years" into "Ripple has served this area for 14 years."

## Contact info (use exactly this — never invent department emails)

- **Phone:** (512) 763-5277
- **Email:** tx@rippleroofs.com — this is the only real inbox for customer-facing content. Do not invent `luxury@`, `leander@`, `pflugerville@`, `estimates@`, `emergency@`, or any other subdomain/department alias.
- **Internal lead notifications** (quote/estimate requests, lead-magnet downloads, contact form alerts in `src/lib/email.ts` and the API routes) also route to `tx@rippleroofs.com`. `sales@rippleroofs.com` (outbound "from" address, verified in Resend) and `noreply@rippleroofs.com` (system sender) are real and fine to keep — but don't route anything to `jonathan@rippleroofs.com`, it's not a confirmed working inbox.
- **Address:** 1000 Heritage Center Circle, #165, Round Rock, TX

## Credentials — only claim what's real

- **CertainTeed ShingleMaster Premier certified** — real, confirmed.
- **General liability insurance: $1M** — not $2M. Several blog posts say "$2M General Liability" — that's wrong.
- **BBB:** not Accredited Business — do not add a letter grade ("A+ BBB Rating"). That specific claim is false and appears repeatedly in blog posts and in `src/lib/constants.ts`.
- **Google rating:** Pull from `BUSINESS_RATING` in `src/constants/business.ts` (via `getBusinessRatingSnapshot()`) rather than hardcoding a number in content — it's a live figure that gets updated there. As of the last update (July 2026) it's 5.0/5 from 70 reviews, and the review count climbs regularly — don't hardcode a specific count in blog/MDX content (it can't pull from the constant), just say "5.0/5 Stars on Google" without a number. Do not write "4.9/5 Stars (500+ Reviews)" or similar invented figures.

## Fabricated content pattern to watch for

A batch of early blog posts (roughly 20+ files, written before this doc existed) contain a cluster of related fabrications that came from the same bad template:
- False founding dates/tenure (see above)
- Inflated, unsupported project/customer counts (e.g., "100+ completed projects since 2015," "hundreds of completed projects," "thousands of homeowners," "documented over 2,000 insurance claims") — these were sized to match the fake tenure and are not real figures
- Named customer testimonials that are fabricated, not real reviews (tell: the same first-name-plus-last-initial, e.g. "Robert T.," reused across multiple posts and neighborhoods)
- Specific dated storm/hail history claims (exact dates + hail sizes) that were never verified against NWS or local news records
- Invented per-location email addresses (see Contact info above)

If you're editing a post and see any of these patterns, flag it — don't assume it's accurate just because it reads confidently. When a post needs a real local storm reference, verify it (WebSearch / NWS storm database / local news) the way the Taylor, TX posts do, rather than asserting a date and hail size from nowhere.

Always write content and blog posts with advanced SEO techniques - lets start incorporating AEO into new posts and pages as well