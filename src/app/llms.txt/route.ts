import { SERVICES, SITE_CONFIG } from '@/lib/constants'
import { LOCATIONS } from '@/lib/locations'

// Serves /llms.txt (https://llmstxt.org): a curated, Markdown map of the site for
// AI assistants. Services and locations are generated from the same data the site
// renders, so the file can't drift. Keep facts here aligned with CLAUDE.md.
export const dynamic = 'force-static'

export function GET() {
  const base = SITE_CONFIG.url

  const services = SERVICES.map(
    (s) => `- [${s.title}](${base}/services/${s.slug}): ${s.shortDescription}`
  )
  const locations = LOCATIONS.map(
    (l) => `- [${l.city}, ${l.state}](${base}/locations/${l.slug}): Roofing services in ${l.city} and ${l.county}.`
  )

  const body = `# ${SITE_CONFIG.name}

> Owner-operated roofing contractor based in Round Rock, TX, serving Central Texas. CertainTeed ShingleMaster Premier certified and an SBA-certified Veteran-Owned Small Business. Roof replacement, repair, storm damage restoration and insurance claim documentation for homes and commercial buildings.

## Quick facts

- Company: ${SITE_CONFIG.name}, founded in January 2024 in Round Rock, TX by Jonathan, a U.S. Navy veteran
- Phone: ${SITE_CONFIG.phone}
- Email: ${SITE_CONFIG.email}
- Address: ${SITE_CONFIG.address}
- Certifications: CertainTeed ShingleMaster Premier (a tier held by roughly the top 1% of contractors nationally); SBA Veteran-Owned Small Business (VOSB)
- Licensing: Texas does not issue a state roofing license. Homeowners should verify a contractor's insurance (ask for a Certificate of Insurance and confirm it with the carrier) and manufacturer certifications instead.

## Services

${services.join('\n')}

## Service areas

${locations.join('\n')}

## Guides and tools

- [Roofing FAQ](${base}/faq): Answers on costs, insurance claims and choosing a contractor
- [Roof replacement cost calculator](${base}/calculators): Free roof size, cost and energy-savings calculators
- [Free instant roof estimate](${base}/estimate): Request an estimate online
- [Warranty](${base}/warranty): Manufacturer and workmanship warranty coverage
- [Austin roofing hub](${base}/hubs/austin-roofing): Roofing guides for the Austin area
- [Metal roofing hub](${base}/hubs/metal-roofing): Standing seam and metal roofing in Central Texas
- [Stone-coated steel hub](${base}/hubs/stone-coated-steel): Stone-coated steel roofing in Texas
- [Roofing materials and cost hub](${base}/hubs/materials-cost): Material comparisons and pricing guidance
- [Insurance claims hub](${base}/hubs/insurance-claims): Roof insurance claim guides by carrier
- [Free resources](${base}/resources): Inspection checklist, storm damage claims guide and material comparison chart

## Optional

- [About](${base}/about): Company background and credentials
- [Contact](${base}/contact): Phone, email and contact form
- [Project gallery](${base}/projects): Completed roofing projects across Central Texas
- [Blog](${base}/blog): Local roofing guides, storm coverage and insurance claim articles
- [Sitemap](${base}/sitemap.xml): Complete list of pages
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
