import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Roofing Round Rock TX | Expert Roof Repair & Replacement | Free Inspection',
  description: 'Round Rock\'s #1 roofing contractor. Expert roof repair, replacement & storm damage service. CertainTeed certified. Serving all Round Rock neighborhoods. 24/7 emergency service. Call (512) 763-5277 for free inspection.',
  keywords: 'roofing round rock, round rock roofer, roof repair round rock tx, roof replacement round rock, roofing contractor round rock texas, round rock roofing company',
  openGraph: {
    title: 'Round Rock\'s Trusted Roofing Contractor | Ripple Roofing',
    description: 'Expert roofing services for all Round Rock neighborhoods. Free inspections, 24/7 emergency service.',
  },
  alternates: {
    canonical: 'https://rippleroofs.com/roofing-round-rock'
  }
}

export default function RoofingRoundRockPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Roofing Round Rock TX', url: '/roofing-round-rock' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] bg-primary-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Roofing services in Round Rock, Texas"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/70" />
        </div>

        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent-500 text-white text-sm font-bold rounded-full mb-4">
              📍 Round Rock, Texas
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Round Rock's #1 Roofing Contractor
            </h1>
            <p className="text-2xl text-primary-100 mb-4">
              Expert Roof Repair, Replacement & Storm Damage Service
            </p>
            <p className="text-xl text-primary-200 mb-8">
              Serving Teravista, Walsh Ranch, Forest Creek, Heritage Center & All Round Rock Neighborhoods
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="primary" size="lg" href="#quote">
                🎯 Schedule FREE Inspection
              </Button>
              <Button variant="secondary" size="lg" href={`tel:${SITE_CONFIG.phoneRaw}`}>
                📞 Call (512) 763-5277
              </Button>
            </div>
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-200">
              <span>⭐ 4.9/5 Stars</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ CertainTeed Shingle Master</span>
              <span className="hidden sm:inline">•</span>
              <span>🛡️ A+ BBB Rating</span>
              <span className="hidden sm:inline">•</span>
              <span>🚀 24/7 Emergency Service</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Bar with Stats */}
      <section className="py-8 bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">137,000+</div>
              <div className="text-sm text-white/90">Round Rock Residents Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/90">Emergency Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">267+</div>
              <div className="text-sm text-white/90">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">FREE</div>
              <div className="text-sm text-white/90">Inspections & Estimates</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">10 Years</div>
              <div className="text-sm text-white/90">Workmanship Warranty</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Round Rock's Most Trusted Roofing Company
                </h2>
                <div className="prose prose-lg max-w-none text-primary-700">
                  <p>
                    When you need a roofing contractor in Round Rock, you need a team that understands Central Texas weather. 
                    At Ripple Roofing & Construction, we've been protecting Round Rock homes and businesses from Texas hailstorms, 
                    intense summer heat, and severe weather for years. As a <strong>CertainTeed Shingle Master certified contractor</strong>, 
                    we bring the highest level of expertise to every Round Rock roofing project.
                  </p>
                  <p className="mt-4">
                    Whether you're in Teravista dealing with storm damage, Heritage Center planning a roof replacement, or Walsh Ranch 
                    navigating HOA approval for your new roof, we handle every detail professionally. Our Round Rock roofing services 
                    include residential roof replacement, emergency roof repair, commercial roofing, storm damage restoration, and 
                    insurance claim assistance.
                  </p>
                  <p className="mt-4">
                    <strong>Why Round Rock homeowners choose Ripple Roofing:</strong> We're local, we understand Round Rock's unique 
                    challenges (hail season, HOA requirements, rapid growth), and we deliver exceptional quality at fair prices. 
                    From free inspections to 10-year workmanship warranties, we're committed to protecting Round Rock homes for decades.
                  </p>
                </div>
              </div>

              {/* Round Rock Roofing Services */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">
                  Complete Roofing Services in Round Rock
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service 1 */}
                  <div className="bg-primary-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">🏠</div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Roof Replacement</h3>
                    <p className="text-primary-700 text-sm mb-4">
                      Complete roof replacements for Round Rock homes. We specialize in impact-resistant shingles 
                      (Class 4) that protect against hail and qualify you for insurance discounts. Popular in 
                      Teravista, Walsh Ranch, and Forest Creek neighborhoods.
                    </p>
                    <Link href="/services/roof-replacement" className="text-accent-600 font-semibold text-sm hover:text-accent-700">
                      Learn More →
                    </Link>
                  </div>

                  {/* Service 2 */}
                  <div className="bg-primary-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">🔧</div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Roof Repair</h3>
                    <p className="text-primary-700 text-sm mb-4">
                      Fast, reliable roof repairs for Round Rock properties. From storm damage to wear and tear, 
                      we fix it right the first time. Same-day emergency service available for urgent leaks and 
                      storm damage throughout Round Rock.
                    </p>
                    <Link href="/services/roof-repair" className="text-accent-600 font-semibold text-sm hover:text-accent-700">
                      Learn More →
                    </Link>
                  </div>

                  {/* Service 3 */}
                  <div className="bg-primary-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">🌩️</div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Storm Damage Repair</h3>
                    <p className="text-primary-700 text-sm mb-4">
                      Round Rock sits in "Hail Alley." We help homeowners navigate insurance claims, document damage, 
                      and restore roofs after severe weather. We work directly with your insurance adjuster to ensure 
                      proper coverage.
                    </p>
                    <Link href="/services/storm-damage-repair" className="text-accent-600 font-semibold text-sm hover:text-accent-700">
                      Learn More →
                    </Link>
                  </div>

                  {/* Service 4 */}
                  <div className="bg-primary-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">🏢</div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Commercial Roofing</h3>
                    <p className="text-primary-700 text-sm mb-4">
                      Serving Round Rock businesses with professional commercial roofing. Flat roofs, TPO, EPDM, 
                      metal roofing for Round Rock retail, office buildings, and industrial properties. Minimal 
                      disruption to your operations.
                    </p>
                    <Link href="/services/commercial-roofing" className="text-accent-600 font-semibold text-sm hover:text-accent-700">
                      Learn More →
                    </Link>
                  </div>

                  {/* Service 5 */}
                  <div className="bg-primary-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">🚨</div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">24/7 Emergency Roofing</h3>
                    <p className="text-primary-700 text-sm mb-4">
                      When disaster strikes in Round Rock, we respond fast. 24/7 emergency roof repair for storm 
                      damage, fallen trees, or sudden leaks. Call (512) 763-5277 anytime, day or night.
                    </p>
                    <Link href="/services/emergency-roofing" className="text-accent-600 font-semibold text-sm hover:text-accent-700">
                      Learn More →
                    </Link>
                  </div>

                  {/* Service 6 */}
                  <div className="bg-primary-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">📋</div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Roof Inspections</h3>
                    <p className="text-primary-700 text-sm mb-4">
                      FREE professional roof inspections for Round Rock homeowners. We check for hail damage, 
                      storm damage, wear and tear, and provide detailed reports. Perfect before buying a home or 
                      after severe weather.
                    </p>
                    <Link href="/services/roof-inspection" className="text-accent-600 font-semibold text-sm hover:text-accent-700">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Round Rock Neighborhoods Served */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Round Rock Neighborhoods We Serve
                </h2>
                <p className="text-primary-700 mb-6">
                  From north Round Rock to downtown, we're your local roofing experts in every neighborhood:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Teravista',
                    'Walsh Ranch',
                    'Forest Creek',
                    'Brushy Creek',
                    'Heritage Center',
                    'Stone Oak',
                    'University Oaks',
                    'Cat Hollow',
                    'Sonoma',
                    'Paloma Lake',
                    'Downtown Round Rock',
                    'Round Rock Ranch',
                    'Meadow Lake',
                    'Star Ranch',
                    'Round Rock West',
                    'Sendero Springs',
                    'Mayfield Ranch',
                    'Lake Forest',
                  ].map((neighborhood) => (
                    <div key={neighborhood} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-900 font-medium text-sm">{neighborhood}</span>
                    </div>
                  ))}
                </div>
                <p className="text-primary-600 mt-6 text-sm">
                  Don't see your Round Rock neighborhood? We serve all of Round Rock and surrounding Williamson County! Call us at (512) 763-5277.
                </p>
              </div>

              {/* Why Choose Us for Round Rock Roofing */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">
                  Why Round Rock Homeowners Choose Ripple Roofing
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">Local Round Rock Experts</h3>
                      <p className="text-primary-600">
                        We're based in Central Texas and know Round Rock inside out. We understand your HOA requirements, 
                        hail season challenges, and neighborhood-specific roofing needs. We've worked in every Round Rock 
                        subdivision and know what materials and colors work best in each community.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">CertainTeed Shingle Master Certified</h3>
                      <p className="text-primary-600">
                        We're one of only 1% of roofing contractors nationwide to earn CertainTeed's highest certification. 
                        This means enhanced warranties for you, guaranteed quality installation, and access to premium roofing 
                        materials. For Round Rock homeowners, this certification matters—it's proof of expertise.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">24/7 Emergency Response</h3>
                      <p className="text-primary-600">
                        When Round Rock storms strike, we respond immediately. Our 24/7 emergency roofing service means you're 
                        never alone when disaster hits. From temporary repairs to full insurance claim restoration, we handle 
                        everything. Call (512) 763-5277 anytime—we answer.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">Transparent Round Rock Pricing</h3>
                      <p className="text-primary-600">
                        No hidden fees, no surprise charges. Every Round Rock roofing quote is detailed and itemized so you 
                        know exactly what you're paying for. We explain material choices, labor costs, and warranty options 
                        clearly. Many Round Rock customers tell us we're the most transparent roofer they've worked with.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">Insurance Claim Experts</h3>
                      <p className="text-primary-600">
                        We've helped hundreds of Round Rock homeowners navigate insurance claims after hailstorms. We document 
                        damage thoroughly, meet with your adjuster, and ensure you get the coverage you deserve. In Round Rock's 
                        hail-prone climate, this expertise is invaluable—we maximize your claim while minimizing your hassle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Round Rock Roofing Costs */}
              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  Round Rock Roof Replacement Costs
                </h2>
                <p className="text-primary-700 mb-6">
                  Transparent pricing for Round Rock homeowners. Costs vary by home size, roof complexity, and materials:
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-start border-b border-blue-200 pb-3">
                    <div>
                      <p className="font-bold text-primary-900">1,500-2,000 sq ft Home</p>
                      <p className="text-sm text-primary-600">Simple gable or hip roof, 18-24 squares</p>
                    </div>
                    <p className="text-xl font-bold text-accent-600">$10,500-$15,000</p>
                  </div>
                  <div className="flex justify-between items-start border-b border-blue-200 pb-3">
                    <div>
                      <p className="font-bold text-primary-900">2,000-2,500 sq ft Home</p>
                      <p className="text-sm text-primary-600">Typical Round Rock two-story, 24-28 squares</p>
                    </div>
                    <p className="text-xl font-bold text-accent-600">$14,000-$20,000</p>
                  </div>
                  <div className="flex justify-between items-start border-b border-blue-200 pb-3">
                    <div>
                      <p className="font-bold text-primary-900">2,500-3,000 sq ft Home</p>
                      <p className="text-sm text-primary-600">Common in Teravista/Walsh Ranch, 28-35 squares</p>
                    </div>
                    <p className="text-xl font-bold text-accent-600">$17,000-$24,000</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-primary-900">3,000-4,000 sq ft Home</p>
                      <p className="text-sm text-primary-600">Larger homes, complex roofs, 35-45 squares</p>
                    </div>
                    <p className="text-xl font-bold text-accent-600">$21,000-$32,000</p>
                  </div>
                </div>
                <p className="text-sm text-primary-600 mt-6">
                  All prices include complete tear-off, disposal, premium impact-resistant shingles, underlayment, 
                  ice/water shield, vents, flashing, and cleanup. Free inspection and detailed quote.
                </p>
              </div>

              {/* Round Rock Hail Season Info */}
              <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  Round Rock Hail Season: What You Need to Know
                </h2>
                <p className="text-primary-700 mb-6">
                  Round Rock sits in "Hail Alley"—experiencing severe hailstorms regularly. Here's how to protect your investment:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-primary-900 mb-2">📅 Peak Hail Season: March-May</h3>
                    <p className="text-primary-700 text-sm">
                      75% of Round Rock's damaging hail occurs in spring. After major storms, schedule a FREE inspection 
                      within 1-2 weeks—damage may not be immediately visible but appears gradually as shingles weather.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 mb-2">🛡️ Impact-Resistant Shingles Are Essential</h3>
                    <p className="text-primary-700 text-sm">
                      Class 4 impact-resistant shingles aren't optional in Round Rock—they're necessary. They withstand 
                      baseball-sized hail and qualify you for 10-35% insurance discounts. Over 15 years, the insurance 
                      savings pay for the upgrade cost.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 mb-2">📋 We Handle Insurance Claims</h3>
                    <p className="text-primary-700 text-sm">
                      After Round Rock storms, we help document damage, file claims, and meet with adjusters. Most homeowners 
                      pay only their deductible ($2,500-$5,000) for a complete roof replacement when storm damage is properly 
                      documented. We ensure you get the coverage you deserve.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA to Blog Resources */}
              <div>
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  Round Rock Roofing Resources & Guides
                </h2>
                <p className="text-primary-700 mb-6">
                  Expert advice for Round Rock homeowners:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/blog/stone-coated-steel-hoa-approval-texas" className="p-4 bg-white rounded-lg border border-primary-200 hover:border-accent-500 hover:shadow-md transition-all">
                    <h3 className="font-bold text-primary-900 mb-2">Getting HOA Approval for Roof Replacement</h3>
                    <p className="text-sm text-primary-600">Essential for Teravista, Walsh Ranch, and other Round Rock HOA communities.</p>
                  </Link>
                  <Link href="/blog/class-4-shingles-insurance-discounts-texas" className="p-4 bg-white rounded-lg border border-primary-200 hover:border-accent-500 hover:shadow-md transition-all">
                    <h3 className="font-bold text-primary-900 mb-2">How Impact-Resistant Shingles Save You Money</h3>
                    <p className="text-sm text-primary-600">Maximize insurance discounts and protect against Round Rock hailstorms.</p>
                  </Link>
                  <Link href="/blog/roof-insurance-claim-guide-texas" className="p-4 bg-white rounded-lg border border-primary-200 hover:border-accent-500 hover:shadow-md transition-all">
                    <h3 className="font-bold text-primary-900 mb-2">Filing a Roof Insurance Claim After Storms</h3>
                    <p className="text-sm text-primary-600">Step-by-step guide for Round Rock homeowners dealing with storm damage.</p>
                  </Link>
                  <Link href="/blog/best-roofing-materials-texas-heat" className="p-4 bg-white rounded-lg border border-primary-200 hover:border-accent-500 hover:shadow-md transition-all">
                    <h3 className="font-bold text-primary-900 mb-2">Best Roofing Materials for Texas Heat</h3>
                    <p className="text-sm text-primary-600">What performs best in Round Rock's 100°F+ summer temperatures.</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quote Form */}
                <div id="quote" className="bg-white rounded-2xl shadow-xl p-6 border-2 border-accent-100">
                  <h3 className="text-2xl font-display font-bold text-primary-900 mb-2">
                    🎯 FREE Round Rock Roof Inspection
                  </h3>
                  <p className="text-primary-600 text-sm mb-6">
                    <span className="font-semibold">$200 Value</span> • Same-day appointments available
                  </p>
                  <QuoteForm prefillAddress="Round Rock, TX" />
                </div>

                {/* Emergency Contact */}
                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-display font-bold mb-4">
                    🚨 24/7 Emergency Service
                  </h3>
                  <p className="text-red-100 text-sm mb-4">
                    Storm damage? Urgent leak? We respond immediately to Round Rock roofing emergencies.
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="text-xs text-red-200">Call Now</div>
                      <div className="font-bold text-lg">(512) 763-5277</div>
                    </div>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="bg-primary-900 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">Why Round Rock Trusts Us</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>CertainTeed Shingle Master</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>A+ BBB Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Fully Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>10-Year Workmanship Warranty</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Round Rock Chamber Member</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Local SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://rippleroofs.com/roofing-round-rock',
            serviceType: 'Roofing Contractor',
            provider: {
              '@type': 'RoofingContractor',
              name: 'Ripple Roofing & Construction',
              telephone: '(512) 763-5277',
              url: 'https://rippleroofs.com',
              areaServed: {
                '@type': 'City',
                name: 'Round Rock',
                '@id': 'https://en.wikipedia.org/wiki/Round_Rock,_Texas'
              },
              priceRange: '$$$',
            },
            areaServed: {
              '@type': 'City',
              name: 'Round Rock',
              addressCountry: 'US',
              addressRegion: 'TX'
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Roofing Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Roof Replacement',
                    description: 'Complete roof replacement for Round Rock homes and businesses'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Roof Repair',
                    description: 'Fast, reliable roof repair service in Round Rock'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Storm Damage Repair',
                    description: 'Emergency storm damage repair and insurance claim assistance'
                  }
                }
              ]
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '267'
            }
          })
        }}
      />
    </main>
  )
}
