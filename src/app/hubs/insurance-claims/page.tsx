import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { getAllPosts } from '@/lib/blog'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Roof Insurance Claims Texas: Carrier Guides & Expert Help Hub',
  description: 'Complete resource for Texas roof insurance claims. Carrier-specific guides for State Farm, USAA, Allstate, Farmers, Travelers, Liberty Mutual, and Nationwide. How to document damage, handle adjusters, and get a fair settlement in Central Texas.',
  keywords: 'roof insurance claim texas, hail damage insurance claim, state farm roof claim, usaa roof claim, allstate roof claim, farmers insurance roof claim, travelers roof claim, liberty mutual roof claim, nationwide roof claim, insurance adjuster, roof insurance settlement',
  alternates: {
    canonical: 'https://rippleroofs.com/hubs/insurance-claims'
  },
  openGraph: {
    title: 'Roof Insurance Claims Texas: Complete Resource Hub',
    description: 'Carrier-specific guides and expert help for Texas roof insurance claims.',
    url: 'https://rippleroofs.com/hubs/insurance-claims',
    siteName: 'Ripple Roofing',
    type: 'website',
  }
}

const CARRIER_POSTS = [
  {
    slug: 'state-farm-roof-insurance-claim-texas',
    carrier: 'State Farm',
    description: 'Largest Texas carrier. How State Farm evaluates hail damage, their supplement process, and what adjusters look for.',
    badge: 'Largest TX Carrier',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    slug: 'usaa-roof-insurance-claim-texas',
    carrier: 'USAA',
    description: 'Military families and veterans. USAA\'s claim process, deployment considerations, and how to handle PCS timing.',
    badge: 'Military Families',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    slug: 'allstate-roof-insurance-claim-texas',
    carrier: 'Allstate',
    description: 'How Allstate handles hail claims in Texas, the cosmetic damage exclusion, and the appraisal clause.',
    badge: 'Top 3 TX Carrier',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    slug: 'farmers-roof-insurance-claim-texas',
    carrier: 'Farmers Insurance',
    description: 'Farmers\' claim handling in Central Texas, their contractor network, and how to dispute a low offer.',
    badge: 'Common in Austin Metro',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    slug: 'travelers-roof-insurance-claim-texas',
    carrier: 'Travelers',
    description: 'Travelers\' weather data verification process, functional vs. cosmetic damage, and their depreciation approach.',
    badge: 'Data-Driven Process',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
  {
    slug: 'liberty-mutual-roof-insurance-claim-texas',
    carrier: 'Liberty Mutual',
    description: 'Liberty Mutual\'s roof payment schedule endorsement, aggressive depreciation on initial scopes, and how to supplement effectively in Texas.',
    badge: 'Watch: Payment Schedule',
    badgeColor: 'bg-yellow-100 text-yellow-800',
  },
  {
    slug: 'nationwide-roof-insurance-claim-texas',
    carrier: 'Nationwide',
    description: 'Nationwide\'s roof age payment schedule, independent adjuster variability, and the appraisal clause for disputed claims.',
    badge: 'Watch: Age Schedule',
    badgeColor: 'bg-teal-100 text-teal-700',
  },
]

export default function InsuranceClaimsHub() {
  const allPosts = getAllPosts()

  const insurancePosts = allPosts.filter(post =>
    post.title.toLowerCase().includes('insurance') ||
    post.title.toLowerCase().includes('claim') ||
    post.tags.some(tag => ['Insurance Claims', 'Insurance & Savings', 'Storm Damage'].includes(tag))
  )

  const hailPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes('hail') ||
    post.title.toLowerCase().includes('storm damage') ||
    post.title.toLowerCase().includes('class 4')
  )

  const costDiscountPosts = allPosts.filter(post =>
    post.tags.some(tag => tag === 'Insurance & Savings') ||
    post.title.toLowerCase().includes('discount') ||
    post.title.toLowerCase().includes('class 4')
  )

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white py-20">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent-500 rounded-full mb-4">
              <span className="font-bold text-sm">INSURANCE CLAIM RESOURCES</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Roof Insurance Claims Texas Hub
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Carrier-specific guides for every major Texas homeowners insurer. Understand how State Farm, USAA, Allstate,
              Farmers, and Travelers handle hail and storm damage claims — and how to get a fair settlement.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="primary" size="lg" href="/contact">
                Get Free Damage Inspection
              </Button>
              <Button variant="secondary" size="lg" href="/blog/roof-insurance-claim-guide-texas">
                General Insurance Guide
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent-300">$0</div>
                <div className="text-sm text-primary-200">Cost for Inspection</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent-300">5</div>
                <div className="text-sm text-primary-200">Major Carriers Covered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent-300">2yr</div>
                <div className="text-sm text-primary-200">TX Filing Window</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent-300">24/7</div>
                <div className="text-sm text-primary-200">Emergency Response</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Nav */}
      <section className="py-6 bg-primary-50 border-b border-primary-200">
        <Container>
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <span className="font-semibold text-primary-700 text-sm">Jump to:</span>
            <a href="#carriers" className="px-4 py-2 bg-white rounded-lg text-sm hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">Carrier Guides</a>
            <a href="#process" className="px-4 py-2 bg-white rounded-lg text-sm hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">Claim Process</a>
            <a href="#discounts" className="px-4 py-2 bg-white rounded-lg text-sm hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">Insurance Discounts</a>
            <a href="#storm" className="px-4 py-2 bg-white rounded-lg text-sm hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">Storm Resources</a>
          </div>
        </Container>
      </section>

      {/* Carrier Guides */}
      <section id="carriers" className="py-16 bg-white scroll-mt-24">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                Carrier-Specific Claim Guides
              </h2>
              <p className="text-lg text-primary-600">
                Each major Texas carrier handles claims differently. Find your carrier below for a guide written from our
                direct experience working those claims in Williamson and Travis counties.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CARRIER_POSTS.map((carrier) => (
                <Link
                  key={carrier.slug}
                  href={`/blog/${carrier.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all border border-primary-100 hover:border-accent-400 p-6 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary-900 group-hover:text-accent-600 transition-colors">
                      {carrier.carrier}
                    </h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${carrier.badgeColor} flex-shrink-0 ml-2`}>
                      {carrier.badge}
                    </span>
                  </div>
                  <p className="text-primary-600 text-sm leading-relaxed flex-1">{carrier.description}</p>
                  <div className="mt-4 flex items-center text-accent-600 font-semibold text-sm group-hover:text-accent-700">
                    Read Full Guide
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
              {/* General guide card */}
              <Link
                href="/blog/roof-insurance-claim-guide-texas"
                className="group bg-primary-50 rounded-xl shadow-md hover:shadow-2xl transition-all border-2 border-primary-200 hover:border-accent-400 p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary-900 group-hover:text-accent-600 transition-colors">
                    Complete Texas Guide
                  </h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-accent-100 text-accent-700 flex-shrink-0 ml-2">
                    Start Here
                  </span>
                </div>
                <p className="text-primary-600 text-sm leading-relaxed flex-1">
                  The full Texas roof insurance claim process — documentation, adjusters, supplements, and settlement — regardless of carrier.
                </p>
                <div className="mt-4 flex items-center text-accent-600 font-semibold text-sm group-hover:text-accent-700">
                  Read Full Guide
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Claim Process Overview */}
      <section id="process" className="py-16 bg-primary-50 scroll-mt-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
              How a Texas Roof Insurance Claim Works
            </h2>
            <p className="text-lg text-primary-600 mb-10">
              The process is largely the same across carriers — with key differences in how each company handles supplements and cosmetic damage.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Get a Professional Inspection First',
                  body: 'Before contacting your insurer, have your roof professionally documented. Dated photos, impact measurements, and a written scope of work establish what the damage looked like before the adjuster sees it. This is the single most effective thing you can do to protect your claim.',
                },
                {
                  step: '02',
                  title: 'File Your Claim',
                  body: 'Report the claim to your carrier via their app, website, or agent. Texas law requires carriers to acknowledge within 15 days and assign an adjuster. File promptly — while evidence is fresh and weather data is still on record.',
                },
                {
                  step: '03',
                  title: 'Adjuster Inspection',
                  body: 'Have your contractor present during the adjuster inspection whenever possible. Damage identified on the roof in real time is harder to dispute than a scope correction filed afterward. We meet adjusters on-site as a standard part of our claim process.',
                },
                {
                  step: '04',
                  title: 'Review the Estimate',
                  body: 'The adjuster\'s Xactimate estimate is rarely complete. Missing line items — permits, code upgrades, starter strips, overhead and profit — are standard omissions. We review every estimate against our scope and file supplements for legitimate missing items.',
                },
                {
                  step: '05',
                  title: 'Complete the Work & Submit Documentation',
                  body: 'For RCV (Replacement Cost Value) policies, the depreciation holdback is released when you submit completion documentation — photos of the finished roof and a paid invoice. We handle this paperwork at closeout.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-4xl font-black text-accent-200 flex-shrink-0 leading-none">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-900 mb-2">{item.title}</h3>
                    <p className="text-primary-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Key Things to Know */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-10 text-center">
              What Texas Homeowners Get Wrong About Roof Claims
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '⏰',
                  title: 'Waiting Too Long',
                  body: 'Texas gives you two years from the date of loss to file. But waiting months means weather data gets harder to access, comparable damage in the area becomes less visible, and carriers become more skeptical of the storm-to-damage connection.',
                },
                {
                  icon: '📋',
                  title: 'Accepting the First Estimate',
                  body: 'The initial Xactimate scope is rarely complete. Supplements for missing items are a normal, expected part of the process — not a dispute. Most of our supplement additions are straightforward line items the adjuster simply didn\'t include.',
                },
                {
                  icon: '🔍',
                  title: 'Not Understanding Your Policy',
                  body: 'RCV vs. ACV. Cosmetic damage exclusions. Deductible amounts. These details determine your settlement more than the damage itself. Know your policy type before you file — we can help you read the relevant sections.',
                },
                {
                  icon: '🤝',
                  title: 'Not Having a Contractor at the Inspection',
                  body: 'An adjuster who inspects alone documents what they see. An adjuster and a contractor on the roof together resolve scope disagreements on the spot. We routinely meet adjusters on-site for our clients.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-primary-50 rounded-xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-primary-700 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Insurance Discounts */}
      {costDiscountPosts.length > 0 && (
        <section id="discounts" className="py-16 bg-primary-50 scroll-mt-24">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                  Reduce Your Premium With the Right Roof
                </h2>
                <p className="text-lg text-primary-600">
                  Class 4 impact-resistant roofing — metal or shingles — qualifies for 15–35% premium discounts
                  with most major Texas carriers. If you&apos;re replacing after a storm claim, upgrading materials while the claim is open is the smartest time to do it.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {costDiscountPosts.slice(0, 3).map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-primary-100 hover:border-accent-500">
                    <div className="relative h-48">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="p-5">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3">{post.category}</span>
                      <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-primary-600 line-clamp-2">{post.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Storm Resources */}
      {hailPosts.length > 0 && (
        <section id="storm" className="py-16 bg-white scroll-mt-24">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                  Storm & Hail Damage Resources
                </h2>
                <p className="text-lg text-primary-600">
                  City-specific storm damage guides for Williamson and Travis County homeowners.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hailPosts.slice(0, 6).map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-primary-100 hover:border-accent-500">
                    <div className="relative h-48">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="p-5">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3">{post.category}</span>
                      <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-primary-600 line-clamp-2">{post.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-slate-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Recent Storm Damage? Let&apos;s Document It Right.
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              We inspect for free, meet your adjuster on-site if you want us to, and handle the
              supplement process. Central Texas homeowners since 2024 — CertainTeed ShingleMaster Premier certified.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/contact">Get Free Inspection</Button>
              <Button variant="secondary" size="lg" href="/services/insurance-claim-documentation">
                Our Claim Process
              </Button>
            </div>
            <p className="mt-6 text-primary-200">
              Questions? Call us: <a href="tel:5127635277" className="underline hover:text-accent-300">(512) 763-5277</a>
            </p>
          </div>
        </Container>
      </section>
    </main>
  )
}
