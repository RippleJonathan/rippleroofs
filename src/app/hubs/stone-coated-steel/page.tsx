import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { getAllPosts } from '@/lib/blog'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Stone-Coated Steel Roofing Texas: Complete Resource Hub',
  description: 'Everything Texas homeowners need about stone-coated steel roofing. Brand comparisons (Decra vs Metro Tiles), cost guides, HOA approval tips, and city-specific guides for Austin, Round Rock, and all of Central Texas.',
  keywords: 'stone coated steel roofing texas, decra roofing, metro tiles, stone coated steel cost, hoa approved metal roofing, stone coated steel vs asphalt, stone coated steel vs tile, round rock metal roofing, austin metal roofing',
  alternates: {
    canonical: 'https://rippleroofs.com/hubs/stone-coated-steel'
  },
  openGraph: {
    title: 'Stone-Coated Steel Roofing Texas: Complete Resource Hub',
    description: 'Brand guides, cost data, HOA approval tips, and city-specific content for stone-coated steel roofing in Central Texas.',
    url: 'https://rippleroofs.com/hubs/stone-coated-steel',
    siteName: 'Ripple Roofing',
    type: 'website',
  }
}

const BRAND_GUIDES = [
  {
    slug: 'decra-roofing-texas',
    brand: 'Decra Roofing',
    description: 'The original stone-coated steel brand. Decra Villa, Shingle Plus, Shake, and Tile profiles. 50-year warranty, Class 4 impact resistance.',
    badge: 'Original Brand',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    slug: 'decra-vs-metro-tiles-texas',
    brand: 'Decra vs Metro Tiles',
    description: 'The two most-specified brands in Texas head to head. Profile selection, warranty comparison, pricing, and which is right for your home.',
    badge: 'Brand Comparison',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    slug: 'stone-coated-steel-hoa-approval-texas',
    brand: 'HOA Approval Guide',
    description: 'How to get stone-coated steel approved in Texas HOAs. Submittal tips, profile selection for traditional neighborhoods, and what to do if denied.',
    badge: 'HOA Strategy',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    slug: 'stone-coated-steel-roof-cost-texas',
    brand: '2026 Cost Guide',
    description: 'Real installed prices for stone-coated steel in Texas. $14–$22/sq ft range, what drives variation, and how to read a quote.',
    badge: 'Cost Guide',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
]

const COMPARISON_GUIDES = [
  {
    slug: 'stone-coated-steel-vs-asphalt-shingles-texas',
    title: 'Stone-Coated Steel vs. Asphalt Shingles',
    description: 'Side-by-side on cost, lifespan, hail performance, and insurance savings in Texas. When the upgrade math works and when it doesn\'t.',
  },
  {
    slug: 'stone-coated-metal-vs-tile-texas',
    title: 'Stone-Coated Steel vs. Clay & Concrete Tile',
    description: 'Same traditional look, completely different performance. How stone-coated steel beats clay and concrete tile in Texas heat and hail.',
  },
  {
    slug: 'standing-seam-vs-stone-coated-steel-texas',
    title: 'Standing Seam vs. Stone-Coated Steel',
    description: 'Both are metal — but they\'re different products for different situations. Which is right for your home, HOA, and budget.',
  },
]

export default function StoneCoatedSteelHub() {
  const allPosts = getAllPosts()

  const stoneCoatedPosts = allPosts.filter(post =>
    post.tags.some(tag => ['Stone-Coated Steel', 'Decra', 'Metro Tiles', 'Gerard'].includes(tag)) ||
    post.title.toLowerCase().includes('stone-coated') ||
    post.title.toLowerCase().includes('stone coated')
  )

  const cityPosts = stoneCoatedPosts.filter(post =>
    post.tags.some(tag => ['Austin', 'Round Rock', 'Georgetown', 'Cedar Park', 'Leander', 'Pflugerville'].includes(tag)) ||
    post.title.toLowerCase().includes('austin') ||
    post.title.toLowerCase().includes('round rock') ||
    post.title.toLowerCase().includes('georgetown') ||
    post.title.toLowerCase().includes('cedar park') ||
    post.title.toLowerCase().includes('leander')
  )

  const hoaPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes('hoa') ||
    post.tags.includes('HOA Requirements')
  )

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-800 via-primary-800 to-primary-900 text-white py-20">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Stone-Coated Steel Resource Hub
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Stone-Coated Steel Roofing<br className="hidden md:block" /> in Texas
            </h1>
            <p className="text-xl text-white/85 mb-8 max-w-2xl">
              Metal durability. Traditional appearance. HOA-friendly. The material Texas homeowners choose when they want a 50-year roof that looks like shingles or tile — and survives what Central Texas throws at it.
            </p>

            {/* Stat badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { stat: '50+', label: 'Year lifespan' },
                { stat: 'Class 4', label: 'Impact resistance' },
                { stat: '120+ mph', label: 'Wind rating' },
                { stat: '15–35%', label: 'Insurance discount' },
              ].map((item) => (
                <div key={item.stat} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-amber-400">{item.stat}</div>
                  <div className="text-sm text-white/75 mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                <Link href="/contact">Get a Free Estimate</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/services/stone-coated-steel-roofing">Service Overview</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What Is Stone-Coated Steel */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Stone-Coated Steel Different</h2>
            <p className="text-lg text-gray-700 mb-6">
              Stone-coated steel is a steel panel with a crushed stone granule surface — the same type of granules used on asphalt shingles. The result is a roofing material that performs like metal (50+ year lifespan, Class 4 impact resistance, superior wind uplift) but looks like traditional shingles, tile, or shake.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              This solves a real problem for Texas homeowners: HOAs in communities like Sun City Georgetown, Twin Creeks Cedar Park, and Crystal Falls Leander often reject standing seam metal because of its modern industrial appearance. Stone-coated steel in a tile or shingle profile gets approved — and delivers the same metal performance underneath.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Heat Performance', body: 'Reflects 65–70% of solar radiation vs. 5–15% for dark asphalt. Meaningfully reduces attic temperature and AC load in Central Texas summers.' },
                { title: 'Hail Performance', body: 'UL 2218 Class 4 — the highest impact resistance rating. Survives 2" hail (golf ball) without cracking or penetration. Asphalt shingles do not.' },
                { title: 'HOA Compatibility', body: 'Available in tile, shake, and shingle profiles that match the appearance standard of traditional HOA communities while delivering full metal performance.' },
                { title: 'Insurance Savings', body: 'Class 4 impact resistance qualifies for 15–35% premium discounts with most Texas carriers. Savings compound significantly over a 50-year roof lifespan.' },
                { title: 'Weight Advantage', body: '85% lighter than concrete tile. No structural reinforcement required. Direct replacement for asphalt shingles without engineering review.' },
                { title: 'Warranty Stack', body: '50-year material warranty, 30-year color/finish warranty. Stone granules are UV-cured — they don\'t fade or granule-shed like asphalt.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Brand & Resource Guides */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Brand Guides & Resources</h2>
            <p className="text-gray-600">Deep dives on the major brands, cost data, and the HOA approval process in Texas.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {BRAND_GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary-400 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${guide.badgeColor}`}>
                    {guide.badge}
                  </span>
                  <span className="text-primary-600 text-sm font-medium group-hover:underline">Read guide →</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{guide.brand}</h3>
                <p className="text-gray-600 text-sm">{guide.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison Guides */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Comparison Guides</h2>
            <p className="text-gray-600">Side-by-side comparisons to help you choose the right material for your situation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {COMPARISON_GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary-400 hover:shadow-md transition-all"
              >
                <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-primary-700">{guide.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                <span className="text-primary-600 text-sm font-medium">Compare →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* City Guides */}
      {cityPosts.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">City-Specific Guides</h2>
              <p className="text-gray-600">Local cost data, HOA landscapes, and contractor tips for your city.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityPosts.slice(0, 6).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white border border-slate-200 rounded-2xl p-5 hover:border-primary-400 hover:shadow-md transition-all"
                >
                  <div className="text-xs font-medium text-primary-600 uppercase tracking-wide mb-2">{post.category}</div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-700 text-sm">{post.title}</h3>
                  <span className="text-primary-600 text-xs font-medium">Read guide →</span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Why Stone-Coated Steel Over Standing Seam for HOAs */}
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Stone-Coated Steel vs. Standing Seam: The HOA Question
            </h2>
            <p className="text-gray-700 mb-6">
              Standing seam metal has a modern, industrial appearance. Most Texas HOAs in traditional communities — Sun City Georgetown, Travisso Leander, Twin Creeks Cedar Park — will reject it on aesthetic grounds. Stone-coated steel in a tile or shingle profile passes architectural review because it looks exactly like the materials the HOA expects. Same metal performance. No fight with the committee.
            </p>
            <div className="bg-white rounded-2xl p-6 border border-amber-200">
              <h3 className="font-semibold text-gray-900 mb-4">When stone-coated steel is the right call:</h3>
              <ul className="space-y-2">
                {[
                  'HOA community with traditional architectural standards',
                  'Mediterranean, Spanish, or craftsman home style where tile/shake appearance fits',
                  'Homeowner who wants metal performance but prefers traditional appearance',
                  'Budget is $4,000–$8,000 less than standing seam for similar performance',
                  'HOA denied standing seam — stone-coated steel is typically the approved alternative',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-amber-600 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Cost Overview */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Stone-Coated Steel Costs in Central Texas (2026)</h2>
            <p className="text-gray-700 mb-6">
              Installed pricing runs <strong>$14–$22 per square foot</strong> for most Central Texas residential projects. That's above Class 4 asphalt shingles ($10–$16/sq ft) but typically $3,000–$8,000 below standing seam on the same home.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-gray-900 border border-slate-200">Home Size</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border border-slate-200">Low</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border border-slate-200">High</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border border-slate-200">Typical</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['1,500 sq ft', '$21,000', '$33,000', '$26,000'],
                    ['2,000 sq ft', '$28,000', '$44,000', '$34,000'],
                    ['2,500 sq ft', '$35,000', '$55,000', '$43,000'],
                    ['3,000 sq ft', '$42,000', '$66,000', '$51,000'],
                  ].map(([size, low, high, typical]) => (
                    <tr key={size} className="hover:bg-slate-50">
                      <td className="p-3 border border-slate-200 font-medium text-gray-900">{size}</td>
                      <td className="p-3 border border-slate-200 text-gray-700">{low}</td>
                      <td className="p-3 border border-slate-200 text-gray-700">{high}</td>
                      <td className="p-3 border border-slate-200 font-semibold text-primary-700">{typical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500">
              Includes tear-off, deck inspection and repairs, premium underlayment, all panels and trim, labor, permits, and cleanup.
              {' '}<Link href="/blog/stone-coated-steel-roof-cost-texas" className="text-primary-600 hover:underline">Full cost guide →</Link>
            </p>
          </div>
        </Container>
      </section>

      {/* Insurance Savings */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance Savings: The Numbers That Change the Math</h2>
            <p className="text-gray-700 mb-8">
              Stone-coated steel's Class 4 impact resistance qualifies for significant premium discounts with most Texas carriers. At current premium levels in Central Texas, those savings often offset the cost premium over asphalt within 10–15 years.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-gray-900 border border-slate-200">Annual Premium</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border border-slate-200">15% Discount</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border border-slate-200">25% Discount</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border border-slate-200">10-Year Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['$3,000', '$450/yr', '$750/yr', '$4,500–$7,500'],
                    ['$4,000', '$600/yr', '$1,000/yr', '$6,000–$10,000'],
                    ['$5,000', '$750/yr', '$1,250/yr', '$7,500–$12,500'],
                    ['$6,000', '$900/yr', '$1,500/yr', '$9,000–$15,000'],
                  ].map(([premium, low, high, tenYr]) => (
                    <tr key={premium} className="hover:bg-white">
                      <td className="p-3 border border-slate-200 font-medium text-gray-900">{premium}</td>
                      <td className="p-3 border border-slate-200 text-gray-700">{low}</td>
                      <td className="p-3 border border-slate-200 text-gray-700">{high}</td>
                      <td className="p-3 border border-slate-200 font-semibold text-green-700">{tenYr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Actual discounts vary by carrier and policy. Contact your agent after installation to apply the Class 4 discount — provide the manufacturer's UL 2218 Class 4 documentation, which we supply after every job.
            </p>
          </div>
        </Container>
      </section>

      {/* More Posts */}
      {stoneCoatedPosts.length > 4 && (
        <section className="py-16 bg-white">
          <Container>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">All Stone-Coated Steel Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {stoneCoatedPosts.slice(0, 9).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white border border-slate-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-md transition-all"
                >
                  <div className="text-xs font-medium text-primary-600 uppercase tracking-wide mb-2">{post.category}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 text-sm mb-auto">{post.title}</h3>
                  <div className="mt-3 text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get a Quote on Stone-Coated Steel?</h2>
            <p className="text-white/80 mb-8 text-lg">
              We'll measure your roof, walk through brand and profile options that fit your home and HOA, and give you a written proposal you can actually compare. No obligation, no pressure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                <Link href="/contact">Request a Free Estimate</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="tel:5127635277">Call (512) 763-5277</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
