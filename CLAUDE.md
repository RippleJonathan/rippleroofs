# Ripple Roofing & Construction — Ground Truth

This file exists because a batch of blog content (and some service-page copy) was written with fabricated business facts before this file existed. When writing or editing any customer-facing content — blog posts, service pages, location pages, testimonials, schema/structured data — check claims against this file. If a number or date isn't listed here, don't invent one; ask or leave it out.

## Company facts

- **Name:** Ripple Roofing & Construction
- **Founded:** January 2024, in Round Rock, TX, by Jonathan. Owner-operated.
- **Do not claim tenure.** No "since 2015," "X+ years in business," "X+ years serving Central Texas," or similar. The company is genuinely new (~2.5 years old as of mid-2026) and there's nothing to gain by fabricating history — if a post needs a trust signal, lean on certifications and licensing instead, not years in operation.
- Jonathan is a U.S. Navy veteran, attended Central Texas College and Texas A&M University in Killeen, and has lived in Central Texas 14+ years. He ran operations for a corporate roofing company before founding Ripple. That personal background is real and citable — but it is *his* history, not the company's operating history. Don't convert "Jonathan has lived here 14 years" into "Ripple has served this area for 14 years."
- **Crew network:** "50+ Crew Members Network" (used on the About page) is confirmed accurate — a real subcontractor/crew roster size. Unlike the inflated project/customer counts below, this one can be reused elsewhere as a trust signal.

## Contact info (use exactly this — never invent department emails)

- **Phone:** (512) 763-5277
- **Email:** tx@rippleroofs.com — this is the only real inbox for customer-facing content. Do not invent `luxury@`, `leander@`, `pflugerville@`, `estimates@`, `emergency@`, or any other subdomain/department alias.
- **Internal lead notifications** (quote/estimate requests, lead-magnet downloads, contact form alerts in `src/lib/email.ts` and the API routes) also route to `tx@rippleroofs.com`. `sales@rippleroofs.com` (outbound "from" address, verified in Resend) and `noreply@rippleroofs.com` (system sender) are real and fine to keep — but don't route anything to `jonathan@rippleroofs.com`, it's not a confirmed working inbox.
- **Address:** 1000 Heritage Center Circle, #165, Round Rock, TX

## Social media (source of truth: `BUSINESS_INFO_TEXAS.social` in `src/constants/business.ts`)

- **Facebook:** facebook.com/rippleroofs
- **Instagram:** instagram.com/ripple_roofing
- **LinkedIn:** linkedin.com/company/ripple-roofing
- **Nextdoor:** nextdoor.com/page/ripple-roofing-construction
- **YouTube:** unconfirmed — the constant lists `@rippleroofing` but this hasn't been cross-checked against a live channel the way Facebook/Instagram were. Verify before treating as fact.
- `business.ts`'s social block used to disagree with `src/lib/constants.ts` and the schema.org components (it had "rippleroofing" instead of "rippleroofs" / "ripple_roofing" for Facebook/Instagram) — reconciled July 2026. If you add a new place that references a social link, pull from `BUSINESS_INFO_TEXAS.social` rather than re-typing a handle, so there's only one place to fix if a handle ever changes.

## Credentials — only claim what's real

- **CertainTeed ShingleMaster Premier certified** — real, confirmed.
- **"Top 1% of contractors" / "fewer than 1%"** — verified July 2026 against CertainTeed's own published materials: ShingleMaster Premier is the top 1% of contractors nationally. Use "1%," not "3%." A "top 3%" variant had crept into 3 files (About page, bee-cave-roofing-guide.mdx, best-roofing-materials-georgetown.mdx) while 9+ other posts correctly said "1%" — all reconciled to "1%."
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

## Structured data needs the same scrutiny as prose

Schema.org/JSON-LD (in `src/components/seo/*.tsx` and any inline `application/ld+json` in page files) can be just as wrong as blog prose, and is easier to miss because it doesn't read like a claim — `foundingDate: '2015'` doesn't get caught by grepping for "since 2015." Two separate `foundingDate` fields (homepage `src/app/page.tsx` and sitewide `LocalBusinessSchema.tsx`) were hardcoded to wrong years (2018 and 2015, respectively) and survived two prior ground-truth sweeps for exactly this reason before being fixed in July 2026. When auditing for fabricated/stale facts, check `src/components/seo/` and any page-level JSON-LD blocks too, not just `content/blog/`.

Always write content and blog posts with advanced SEO techniques - lets start incorporating AEO into new posts and pages as well