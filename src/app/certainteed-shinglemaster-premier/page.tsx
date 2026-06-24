import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'CertainTeed ShingleMaster Premier Contractor | Round Rock & Austin TX',
  description: 'Ripple Roofing is a CertainTeed ShingleMaster Premier certified contractor in Central Texas — the highest tier CertainTeed awards. Unlock Lifetime Workmanship Warranty coverage on your roof.',
  keywords: 'certainteed shinglemaster premier, certainteed premier contractor, lifetime roof warranty texas, certainteed warranty round rock, certainteed certified roofer austin, best certainteed contractor central texas',
  alternates: {
    canonical: 'https://rippleroofs.com/certainteed-shinglemaster-premier'
  },
  openGraph: {
    title: 'CertainTeed ShingleMaster Premier | Ripple Roofing – Round Rock & Austin TX',
    description: 'The highest certification CertainTeed awards. Unlocks Lifetime Workmanship Warranty coverage for homeowners in Central Texas.',
    url: 'https://rippleroofs.com/certainteed-shinglemaster-premier',
    siteName: 'Ripple Roofing',
    type: 'website',
    images: [{ url: '/images/certainteed-shinglemaster-premier-badge.png', width: 800, height: 600 }],
  }
}

export default function CertainTeedPremierPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-slate-800 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-300 to-transparent"></div>
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-2 text-sm text-amber-300 font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  Achieved February 2026
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                  CertainTeed<br />
                  <span className="text-amber-400">ShingleMaster Premier</span>
                </h1>
                <p className="text-xl text-white/85 mb-4">
                  The highest certification CertainTeed awards to roofing contractors. Fewer than 10 contractors in all of Central Texas hold this designation.
                </p>
                <p className="text-white/70 mb-8">
                  It means more than a badge. It means CertainTeed's manufacturer warranty backs our workmanship — not just the materials.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button href="/contact" size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                    Schedule Free Inspection
                  </Button>
                  <Button href="tel:5127635277" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    (512) 763-5277
                  </Button>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <div className="bg-white/10 border border-white/20 rounded-3xl p-8 text-center max-w-xs">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <Image
                      src="/images/certainteed-shinglemaster-premier-badge.png"
                      alt="CertainTeed ShingleMaster Premier Badge"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-white font-bold text-lg">Ripple Roofing & Construction</div>
                  <div className="text-amber-400 text-sm mt-1">Round Rock, TX</div>
                  <div className="mt-4 space-y-1 text-sm text-white/70">
                    <div>✓ Lifetime Workmanship Warranty</div>
                    <div>✓ 30-Year Workmanship Warranty</div>
                    <div>✓ Transferable to New Owner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What It Means */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What ShingleMaster Premier Actually Means</h2>
            <p className="text-gray-700 mb-6 text-lg">
              CertainTeed's ShingleMaster program has three tiers. Most certified roofing contractors are at the base level. <strong>Premier is the top</strong> — awarded only to contractors who have completed advanced CertainTeed training, demonstrated a consistent record of correct installations, and met CertainTeed's most demanding requirements for insurance, business practice, and craftsmanship.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              We achieved Premier status in February 2026. It means CertainTeed has reviewed our business and our work — and agreed to stand behind the quality of our installations with their manufacturer's warranty, not just a contractor's promise.
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">The Certification Difference</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="font-semibold text-gray-600 text-sm uppercase tracking-wide mb-3">Any Roofer</div>
                  <ul className="space-y-2">
                    {[
                      'Material warranty from CertainTeed',
                      'Workmanship warranty from contractor only',
                      'If contractor closes: warranty gone',
                      'No manufacturer oversight of installation',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-amber-600 text-sm uppercase tracking-wide mb-3">Ripple Roofing (Premier)</div>
                  <ul className="space-y-2">
                    {[
                      'Material warranty from CertainTeed',
                      'Workmanship warranty backed by CertainTeed',
                      'If Ripple closes: CertainTeed still honors it',
                      'Installation meets CertainTeed\'s highest standard',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Warranty Tiers */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Three Tiers of CertainTeed-Backed Warranty</h2>
            <p className="text-gray-600 mb-10">
              As a Premier contractor, we can offer CertainTeed workmanship warranties that most roofers cannot. The tier you qualify for depends on the CertainTeed product system you choose.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  tier: 'Lifetime',
                  icon: '🏆',
                  years: 'Life of the roof',
                  headline: 'Lifetime Workmanship Warranty',
                  description: 'The gold standard. CertainTeed backs our installation for the life of the roof. Requires a specific CertainTeed shingle + underlayment system. Transferable to a new homeowner for up to 20 years.',
                  highlight: true,
                },
                {
                  tier: '30-Year',
                  icon: '🥈',
                  years: '30 years',
                  headline: '30-Year Workmanship Warranty',
                  description: 'Thirty years of CertainTeed-backed installation coverage. Available on most CertainTeed shingle products. Transferable to new owners for up to 20 years.',
                  highlight: false,
                },
                {
                  tier: '15-Year',
                  icon: '🥉',
                  years: '15 years',
                  headline: '15-Year Workmanship Warranty',
                  description: '15 years of CertainTeed-backed coverage on standard CertainTeed systems. Still significantly stronger than a contractor-only warranty.',
                  highlight: false,
                },
              ].map((item) => (
                <div
                  key={item.tier}
                  className={`rounded-2xl p-6 border ${
                    item.highlight
                      ? 'bg-primary-900 border-primary-700 text-white'
                      : 'bg-white border-slate-200 text-gray-900'
                  }`}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${item.highlight ? 'text-amber-400' : 'text-primary-600'}`}>
                    {item.years}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{item.headline}</h3>
                  <p className={`text-sm ${item.highlight ? 'text-white/75' : 'text-gray-600'}`}>{item.description}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-6 text-center">
              We walk you through which tier applies to your project at no extra cost during your estimate.
            </p>
          </div>
        </Container>
      </section>

      {/* Why It Matters: Resale */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Resale Value Play</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Most homeowners don't think about resale when they replace their roof. They should.
            </p>
            <p className="text-gray-700 mb-6">
              Our CertainTeed warranty is <strong>transferable to the new homeowner for up to 20 years</strong>. When you list your home, a 10-year-old roof with a 20-year transferable manufacturer-backed workmanship warranty is a different asset than a 10-year-old roof with no documentation.
            </p>
            <p className="text-gray-700 mb-8">
              Buyers in Austin, Round Rock, and Georgetown are sophisticated — they recognize this. It reduces negotiating leverage against you and supports a stronger asking price. And you don't have to manage the transfer — when we finish, we register your warranty with CertainTeed directly. The documentation follows the roof.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                { label: 'Warranty transferable', value: 'Up to 20 years' },
                { label: 'Registration', value: 'We handle it' },
                { label: 'CertainTeed est.', value: '1904' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-50 rounded-xl p-5 text-center border border-slate-200">
                  <div className="text-2xl font-bold text-primary-700 mb-1">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Only Premier Can Do This */}
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why You Can't Get This From Most Roofers
            </h2>
            <p className="text-gray-700 mb-6">
              A roofing contractor with a standard CertainTeed certification — or no certification at all — can install CertainTeed shingles. But they cannot offer you the Lifetime or 30-Year CertainTeed-backed workmanship warranty. That requires Premier status.
            </p>
            <p className="text-gray-700 mb-8">
              When a non-Premier contractor tells you they'll give you a "50-year warranty," what they mean is a 50-year <em>material</em> warranty on the shingles — from CertainTeed, covering manufacturing defects. The <em>installation</em> is covered only by the contractor's own promise, and only as long as that contractor is in business.
            </p>

            <div className="bg-white rounded-2xl p-6 border border-amber-200">
              <h3 className="font-semibold text-gray-900 mb-4">The question to ask every roofer:</h3>
              <p className="text-gray-700 italic text-lg mb-3">
                "Are you a CertainTeed ShingleMaster Premier contractor? Can you offer a CertainTeed-backed workmanship warranty — not just a material warranty?"
              </p>
              <p className="text-sm text-gray-500">
                If the answer is anything other than "yes," the workmanship coverage on your roof is only as good as that contractor's word.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Central Texas Context */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why This Matters More in Central Texas
            </h2>
            <p className="text-gray-700 mb-6">
              Central Texas is one of the most demanding roofing environments in the country. Summer attic temperatures regularly exceed 150°F — baking shingles from below. We average 60+ thunderstorm days per year. Hail is the single largest cause of roof damage in Texas.
            </p>
            <p className="text-gray-700 mb-8">
              In this environment, installation matters as much as materials. A correctly installed roof in this climate outperforms an incorrectly installed one by a decade or more. Premier certification means CertainTeed has reviewed our process and agreed to back the result — because they're confident we install their products correctly.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { stat: '60+', label: 'Thunderstorm days per year in Austin metro' },
                { stat: '150°F+', label: 'Attic temperatures common in Central Texas summers' },
                { stat: '#1', label: 'Cause of roof damage in Texas: hail' },
                { stat: '<10', label: 'Premier-certified contractors in all of Central Texas' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="text-3xl font-bold text-primary-700 flex-shrink-0">{item.stat}</div>
                  <div className="text-sm text-gray-700">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Products section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              CertainTeed Products We Install
            </h2>
            <p className="text-gray-700 mb-8">
              As a Premier contractor, we install the full CertainTeed product line with warranty registration handled for you. Highlights for Central Texas:
            </p>

            <div className="space-y-4">
              {[
                {
                  name: 'Landmark IR (Impact Resistant)',
                  description: 'Class 4 impact-rated architectural shingle. Qualifies for insurance discounts of 15–35% with most Texas carriers. Best value upgrade for hail-prone areas. Lifetime limited material warranty.',
                  badge: 'Class 4 Impact',
                  badgeColor: 'bg-green-100 text-green-700',
                },
                {
                  name: 'Presidential Shake TL',
                  description: 'Premium architectural shingle mimicking natural cedar shake. Among the heaviest and most wind-resistant asphalt shingles available. Strong HOA appeal in traditional communities.',
                  badge: 'Premium Line',
                  badgeColor: 'bg-blue-100 text-blue-700',
                },
                {
                  name: 'Landmark PRO',
                  description: 'Our most popular recommendation for straight replacements. Enhanced algae resistance important for Texas humidity, excellent color retention, lifetime limited warranty.',
                  badge: 'Best Value',
                  badgeColor: 'bg-amber-100 text-amber-700',
                },
                {
                  name: 'Flintlastic SA (Modified Bitumen)',
                  description: 'Self-adhering modified bitumen system for flat and low-slope commercial roofing. High-temp performance critical for Texas summers.',
                  badge: 'Commercial / Flat Roof',
                  badgeColor: 'bg-purple-100 text-purple-700',
                },
              ].map((product) => (
                <div key={product.name} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-bold text-gray-900">{product.name}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-slate-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto relative">
                <Image
                  src="/images/certainteed-shinglemaster-premier-badge.png"
                  alt="CertainTeed ShingleMaster Premier"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Get a Roof Installed Right.<br />
              Backed by CertainTeed.
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Free inspection. Honest estimate. CertainTeed-backed workmanship warranty on every qualifying project. We serve Round Rock, Austin, Georgetown, Cedar Park, Leander, and all of Central Texas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                Schedule Free Inspection
              </Button>
              <Button href="tel:5127635277" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Call (512) 763-5277
              </Button>
            </div>
            <p className="text-white/50 text-sm mt-6">
              Ripple Roofing & Construction is an independent CertainTeed ShingleMaster Premier certified contractor. Warranty terms are subject to CertainTeed's current program requirements.
            </p>
          </div>
        </Container>
      </section>
    </main>
  )
}
