import { FC } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { Button } from '@/components/ui/Button'
import { SERVICES } from '@/lib/constants'

interface ServicePageProps {
  params: {
    slug: string
  }
}

// Generate static params for all services
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  const title = `${service.title} in Central Texas | Ripple Roofing`
  const description = `Expert ${service.title.toLowerCase()} services in Round Rock, Austin, and Central Texas. ${service.shortDescription} Call (512) 763-5277 for free inspection.`

  return {
    title,
    description,
    keywords: `${service.title}, Round Rock roofing, Austin roofing, Central Texas roofer, ${service.title.toLowerCase()} services`,
    openGraph: {
      title,
      description,
      images: [service.image],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://rippleroofs.com/services/${params.slug}`
    }
  }
}

const ServicePage: FC<ServicePageProps> = ({ params }) => {
  const service = SERVICES.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] bg-primary-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={`${service.title} in Central Texas`}
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/70" />
        </div>

        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent-500 text-white text-sm font-bold rounded-full mb-4">
              {service.icon} {service.title}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Expert {service.title} in Central Texas
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Serving Round Rock, Austin, Georgetown, and surrounding areas with premium roofing solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="primary" size="lg" href="#quote">
                📞 Get FREE Inspection ($200 Value)
              </Button>
              <Button variant="secondary" size="lg" href="tel:5127635277">
                Call Now: (512) 763-5277
              </Button>
            </div>
            {/* Quick Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-200">
              <span className="flex items-center gap-1">
                <span className="text-accent-400">⭐</span> 5.0 Star Rating
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <span className="text-accent-400">✓</span> CertainTeed Certified
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <span className="text-accent-400">🛡️</span> Certified & Insured
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-primary-50 border-y border-primary-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-1">24/7</div>
              <div className="text-sm text-primary-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-1">5.0★</div>
              <div className="text-sm text-primary-600">Google Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-1">$200</div>
              <div className="text-sm text-primary-600">FREE Inspection Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-1">Top 1%</div>
              <div className="text-sm text-primary-600">CertainTeed Master™</div>
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
              {/* Service Description */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Professional {service.title} Services
                </h2>
                <div className="prose prose-lg max-w-none text-primary-700">
                  <p>{service.description}</p>
                  <p className="mt-4">
                    At Ripple Roofing & Construction, we understand the unique challenges that Central Texas weather presents to your roof. 
                    From intense summer heat to severe storms, our {service.title.toLowerCase()} services are designed to protect your 
                    property year-round.
                  </p>
                </div>
              </div>

              {/* Our Process */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">
                  Our Process
                </h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-accent-600">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-bold text-primary-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-primary-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">
                  Why Choose Us for {service.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg">
                      <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-900 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Content for Roof Replacement */}
              {service.slug === 'roof-replacement' && (
                <>
                  {/* When Do You Need a Roof Replacement? */}
                  <div>
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      When Do You Need a Roof Replacement?
                    </h2>
                    <div className="prose prose-lg max-w-none text-primary-700">
                      <p className="mb-6">
                        Knowing when to replace your roof is crucial for protecting your home and avoiding costly repairs. 
                        Here are the key signs it's time for a replacement:
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                        <h3 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-red-600">⚠️</span> Age of Roof
                        </h3>
                        <p className="text-primary-700 text-sm">
                          <strong>Asphalt shingles:</strong> 15-20 years in Central Texas<br />
                          <strong>Architectural shingles:</strong> 25-30 years<br />
                          <strong>Metal roofing:</strong> 40-70 years<br />
                          If your roof is approaching these ages, schedule an inspection even if there are no visible issues.
                        </p>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                        <h3 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-red-600">⚠️</span> Widespread Damage
                        </h3>
                        <p className="text-primary-700 text-sm">
                          Multiple areas with missing, cracked, or curling shingles. Extensive hail damage covering 30%+ of roof surface. 
                          When repairs would cost more than 30-40% of replacement, it's time for a new roof.
                        </p>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                        <h3 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-red-600">⚠️</span> Sagging or Structural Issues
                        </h3>
                        <p className="text-primary-700 text-sm">
                          Visible sagging, dips, or uneven roof lines indicate serious structural problems. This requires immediate 
                          professional inspection and likely complete replacement to prevent collapse or water intrusion.
                        </p>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                        <h3 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-red-600">⚠️</span> Granule Loss
                        </h3>
                        <p className="text-primary-700 text-sm">
                          Excessive granules in gutters, bare spots on shingles, or granules washing away during rain. This exposes 
                          the asphalt layer to UV damage and dramatically shortens remaining roof life.
                        </p>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                        <h3 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-red-600">⚠️</span> Daylight Through Roof
                        </h3>
                        <p className="text-primary-700 text-sm">
                          If you can see daylight through your roof boards from the attic, you have serious deterioration. Water 
                          is also getting through, leading to mold, rot, and structural damage.
                        </p>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                        <h3 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-red-600">⚠️</span> Multiple Repairs
                        </h3>
                        <p className="text-primary-700 text-sm">
                          If you're constantly repairing different areas, it's more cost-effective to replace. Frequent repairs 
                          indicate systemic roof failure rather than isolated issues.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Roofing Materials for Central Texas */}
                  <div>
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Roofing Materials for Central Texas Climate
                    </h2>
                    <p className="text-primary-700 mb-8">
                      Central Texas presents unique challenges: intense UV exposure, severe hailstorms, high winds, and temperature extremes. 
                      We recommend materials specifically rated for these conditions:
                    </p>
                    <div className="space-y-8">
                      {/* Impact-Resistant Shingles */}
                      <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8 border-2 border-accent-200">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                            #1
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-primary-900 mb-3">
                              Impact-Resistant Architectural Shingles (Recommended)
                            </h3>
                            <p className="text-primary-700 mb-4">
                              <strong>Our Top Choice:</strong> <Link href="/blog" className="text-accent-600 hover:text-accent-700 font-semibold">CertainTeed Landmark Impact</Link> (we're Shingle Master certified)
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <h4 className="font-bold text-primary-900 mb-2">✅ Pros:</h4>
                                <ul className="text-sm text-primary-700 space-y-1">
                                  <li>• Class 4 hail rating—best protection available</li>
                                  <li>• Insurance discounts: 10-35% annually in Texas</li>
                                  <li>• 130+ mph wind ratings</li>
                                  <li>• 30-50 year warranties</li>
                                  <li>• Wide color selection for any home style</li>
                                  <li>• Excellent value—insurance savings pay for upgrade</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-bold text-primary-900 mb-2">❌ Cons:</h4>
                                <ul className="text-sm text-primary-700 space-y-1">
                                  <li>• Higher upfront cost than standard shingles</li>
                                  <li>• Heavier (may require decking reinforcement)</li>
                                </ul>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <p className="text-sm"><strong>Cost:</strong> $450-$650 per square installed</p>
                              <p className="text-sm"><strong>Average Home (2,500 sq ft):</strong> $14,000-$20,000</p>
                              <p className="text-sm"><strong>ROI:</strong> Insurance savings typically recover upgrade cost in 7-12 years</p>
                              <p className="text-sm mt-2"><strong>Best For:</strong> Most Central Texas homeowners seeking maximum protection and long-term value</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Metal Roofing */}
                      <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-200">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                            #2
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-primary-900 mb-3">
                              Metal Roofing
                            </h3>
                            <p className="text-primary-700 mb-4">
                              <strong>Types:</strong> Standing seam, 5V crimp, stone-coated steel, metal shingles
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <h4 className="font-bold text-primary-900 mb-2">✅ Pros:</h4>
                                <ul className="text-sm text-primary-700 space-y-1">
                                  <li>• 40-70+ year lifespan (may never need another roof)</li>
                                  <li>• Reflects heat—reduces cooling costs 20-30%</li>
                                  <li>• Fire resistant (critical for Texas wildfires)</li>
                                  <li>• Environmentally friendly (recyclable)</li>
                                  <li>• Low maintenance</li>
                                  <li>• Excellent wind resistance</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-bold text-primary-900 mb-2">❌ Cons:</h4>
                                <ul className="text-sm text-primary-700 space-y-1">
                                  <li>• 2-3x higher upfront cost</li>
                                  <li>• Can dent from very large hail</li>
                                  <li>• Expansion/contraction noise in temp changes</li>
                                  <li>• Some HOAs restrict metal roofing</li>
                                </ul>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <p className="text-sm"><strong>Cost:</strong> $800-$1,400 per square installed</p>
                              <p className="text-sm"><strong>Average Home (2,500 sq ft):</strong> $24,000-$42,000</p>
                              <p className="text-sm"><strong>ROI:</strong> Energy savings + longevity make this cost-effective long-term</p>
                              <p className="text-sm mt-2"><strong>Best For:</strong> Long-term homeowners, modern/contemporary homes, eco-conscious buyers, <Link href="/locations/austin" className="text-accent-600 hover:text-accent-700">Austin</Link> and Hill Country properties</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Standard Shingles */}
                      <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 h-16 bg-primary-400 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                            #3
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-primary-900 mb-3">
                              Standard Architectural Shingles
                            </h3>
                            <p className="text-primary-700 mb-4">
                              <strong>Types:</strong> CertainTeed Landmark, GAF Timberline HD, Owens Corning Duration
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <h4 className="font-bold text-primary-900 mb-2">✅ Pros:</h4>
                                <ul className="text-sm text-primary-700 space-y-1">
                                  <li>• Most affordable option</li>
                                  <li>• Wide availability</li>
                                  <li>• Good warranties (25-30 years)</li>
                                  <li>• Many color options</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-bold text-primary-900 mb-2">❌ Cons:</h4>
                                <ul className="text-sm text-primary-700 space-y-1">
                                  <li>• WILL be damaged by hail (no Class 4 rating)</li>
                                  <li>• No insurance discounts</li>
                                  <li>• Shorter lifespan in Texas heat (15-20 years)</li>
                                  <li>• More frequent replacement needed</li>
                                </ul>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <p className="text-sm"><strong>Cost:</strong> $350-$500 per square installed</p>
                              <p className="text-sm"><strong>Average Home (2,500 sq ft):</strong> $10,500-$15,000</p>
                              <p className="text-sm"><strong>ROI:</strong> Lower upfront cost but higher long-term cost (replacements + no insurance savings)</p>
                              <p className="text-sm mt-2"><strong>Best For:</strong> Budget-constrained projects, homes being sold soon, rental properties</p>
                              <p className="text-sm mt-2 text-amber-700"><strong>⚠️ Note:</strong> In hail-prone <Link href="/locations/round-rock" className="text-accent-600 hover:text-accent-700">Round Rock</Link>, <Link href="/locations/georgetown" className="text-accent-600 hover:text-accent-700">Georgetown</Link>, and <Link href="/locations/austin" className="text-accent-600 hover:text-accent-700">Austin</Link>, spending an extra $3,000-$5,000 for impact-resistant often makes financial sense.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cost Factors */}
                  <div>
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Roof Replacement Cost Factors
                    </h2>
                    <p className="text-primary-700 mb-6">
                      Every roof replacement is unique. Here are the key factors that influence the final cost:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white border-2 border-primary-100 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3">🏠 Home Size & Roof Area</h3>
                        <p className="text-primary-700 text-sm mb-3">Roofing is priced "per square" (100 sq ft). A typical 2,500 sq ft home has 25-30 squares of roof area.</p>
                        <div className="bg-primary-50 rounded-lg p-4 text-sm">
                          <p><strong>1,500 sq ft home:</strong> $8,500-$13,500</p>
                          <p><strong>2,000 sq ft home:</strong> $10,500-$18,000</p>
                          <p><strong>2,500 sq ft home:</strong> $12,500-$21,000</p>
                          <p><strong>3,500 sq ft home:</strong> $16,500-$28,000</p>
                        </div>
                      </div>

                      <div className="bg-white border-2 border-primary-100 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3">📐 Roof Complexity (+15-40%)</h3>
                        <p className="text-primary-700 text-sm">
                          Multiple valleys, steep pitch (8/12+), dormers, skylights, turrets, multiple roof levels, and complex architecture all increase labor and material costs significantly.
                        </p>
                      </div>

                      <div className="bg-white border-2 border-primary-100 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3">🪵 Decking Repairs (Common in Texas)</h3>
                        <p className="text-primary-700 text-sm mb-2">Many Central Texas homes need some decking replacement due to age, moisture damage, or previous leaks:</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Minor repairs (10% of deck): +$800-$2,000</li>
                          <li>• Moderate repairs (25%): +$2,000-$5,000</li>
                          <li>• Extensive replacement (50%+): +$5,000-$12,000+</li>
                        </ul>
                      </div>

                      <div className="bg-white border-2 border-primary-100 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3">🏗️ Additional Common Costs</h3>
                        <ul className="text-sm text-primary-700 space-y-2">
                          <li>• <strong>Chimney reflashing:</strong> +$400-$800</li>
                          <li>• <strong>Skylight replacement:</strong> +$500-$1,500 each</li>
                          <li>• <strong>Gutter replacement:</strong> +$8-$15 per linear foot</li>
                          <li>• <strong>Upgraded ventilation:</strong> +$800-$2,000 (often needed)</li>
                          <li>• <strong>Fascia/soffit repair:</strong> +$8-$20 per linear foot</li>
                          <li>• <strong>Premium color selection:</strong> +5-10%</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timeline & What to Expect */}
                  <div>
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Timeline & What to Expect
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border-l-4 border-emerald-500">
                        <h3 className="font-bold text-primary-900 mb-3 text-xl">� Most Roofs Completed in ONE DAY</h3>
                        <p className="text-primary-700 mb-4 leading-relaxed">
                          <strong>Our experienced crews complete most asphalt shingle roofs in a single day.</strong> We arrive early (7-8 AM) and 
                          work efficiently to tear off your old roof, install your new roofing system, and complete cleanup—all before sunset.
                        </p>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="font-semibold text-primary-900 mb-3">Here's what happens in one day:</p>
                          <ul className="space-y-3 text-primary-700">
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-600 font-bold text-lg">✓</span>
                              <span><strong>Morning (7 AM - 12 PM):</strong> Property protection with tarps, dumpster setup, complete tear-off 
                              of old roofing materials, decking inspection and repairs if needed</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-600 font-bold text-lg">✓</span>
                              <span><strong>Afternoon (12 PM - 5 PM):</strong> Install ice & water shield, synthetic underlayment, drip edge, 
                              complete shingle installation, ridge cap, chimney and vent flashing</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-600 font-bold text-lg">✓</span>
                              <span><strong>Evening (5 PM - 6 PM):</strong> Magnetic nail sweep of entire property (typically finds 50-100+ nails), 
                              gutter cleaning, debris removal, final walkthrough with you</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 bg-accent-50 border-2 border-accent-200 rounded-xl p-6">
                      <h3 className="font-bold text-primary-900 mb-3">⏱️ Timeline by Project Type</h3>
                      <ul className="space-y-2 text-sm text-primary-700">
                        <li>• <strong>Standard asphalt shingle roofs (most homes):</strong> 1 day</li>
                        <li>• <strong>Large or complex roofs (extensive valleys, dormers):</strong> 1-2 days</li>
                        <li>• <strong>Extensive decking repairs (rot or storm damage):</strong> 2-3 days</li>
                        <li>• <strong>Metal roofing installation:</strong> 3-7 days (more precise, slower installation)</li>
                      </ul>
                      <p className="text-sm text-primary-700 mt-4">
                        <strong>Weather delays:</strong> If rain or storms occur, we protect your roof completely with tarps before leaving. 
                        You'll never be left exposed overnight. We resume as soon as weather clears.
                      </p>
                    </div>
                  </div>

                  {/* Warranty Information */}
                  <div className="bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl p-8 text-white">
                    <h2 className="text-3xl font-display font-bold mb-6">
                      Comprehensive Warranty Protection
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                        <h3 className="text-xl font-bold mb-3">🏆 Manufacturer Warranty</h3>
                        <ul className="space-y-2 text-sm text-white/90">
                          <li>• <strong>Impact-resistant shingles:</strong> 30-50 years</li>
                          <li>• <strong>Standard shingles:</strong> 25-30 years</li>
                          <li>• <strong>Metal roofing:</strong> 40-70 years</li>
                          <li>• <strong>Covers:</strong> Manufacturing defects, premature failure</li>
                        </ul>
                        <p className="text-sm mt-4 text-white/80">
                          As a CertainTeed Shingle Master, we offer enhanced warranty options not available from standard contractors.
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                        <h3 className="text-xl font-bold mb-3">🛠️ Workmanship Warranty</h3>
                        <ul className="space-y-2 text-sm text-white/90">
                          <li>• <strong>Our guarantee:</strong> 10 years on labor and installation</li>
                          <li>• <strong>Covers:</strong> Installation errors, leaks from workmanship, material application issues</li>
                          <li>• <strong>Transferable:</strong> Adds value if you sell your home</li>
                          <li>• <strong>No hidden terms:</strong> Clear, straightforward coverage</li>
                        </ul>
                        <p className="text-sm mt-4 text-white/80">
                          We stand behind our work. If there's an issue with our installation, we make it right at no cost to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* ROOF REPAIRS SPECIFIC CONTENT */}
              {service.slug === 'roof-repairs' && (
                <>
                  {/* Common Roof Repair Issues */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Common Roof Problems We Fix
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Central Texas weather is tough on roofs. Here are the most common issues homeowners in <Link href="/locations/round-rock" className="text-accent-600 hover:text-accent-700 font-semibold">Round Rock</Link>, <Link href="/locations/austin" className="text-accent-600 hover:text-accent-700 font-semibold">Austin</Link>, and <Link href="/locations/georgetown" className="text-accent-600 hover:text-accent-700 font-semibold">Georgetown</Link> face—and how we fix them fast.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">💧 Roof Leaks</h3>
                        <p className="text-primary-700 mb-4">
                          <strong>Causes:</strong> Damaged flashing, cracked shingles, worn underlayment, penetration around vents/chimneys
                        </p>
                        <p className="text-primary-700 mb-4">
                          <strong>Symptoms:</strong> Water stains on ceilings, mold/mildew odors, dripping water, bubbling paint
                        </p>
                        <p className="text-primary-700">
                          <strong>Our Fix:</strong> We trace leaks to their source (not always where water appears inside), replace damaged materials, seal penetrations, and test thoroughly. <span className="font-semibold">Cost: $300-$1,200</span> depending on severity and location.
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">🌪️ Storm & Hail Damage</h3>
                        <p className="text-primary-700 mb-4">
                          <strong>Causes:</strong> Hail impacts, wind-blown debris, fallen branches, severe thunderstorms
                        </p>
                        <p className="text-primary-700 mb-4">
                          <strong>Symptoms:</strong> Dented/cracked shingles, granule loss, torn shingles, exposed underlayment
                        </p>
                        <p className="text-primary-700">
                          <strong>Our Fix:</strong> Free post-storm inspections, document damage with photos for insurance, replace damaged sections or entire roof if needed. We work directly with insurance adjusters. <span className="font-semibold">Often covered by insurance.</span>
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-amber-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">🍃 Missing or Damaged Shingles</h3>
                        <p className="text-primary-700 mb-4">
                          <strong>Causes:</strong> Wind damage, age/deterioration, improper installation, thermal cycling
                        </p>
                        <p className="text-primary-700 mb-4">
                          <strong>Symptoms:</strong> Bare spots on roof, shingles in yard, curling/lifting edges, loose granules
                        </p>
                        <p className="text-primary-700">
                          <strong>Our Fix:</strong> Replace missing shingles with matching materials, reseal surrounding shingles, inspect for hidden damage. <span className="font-semibold">Cost: $150-$500</span> for small areas.
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-yellow-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">⚡ Flashing Failures</h3>
                        <p className="text-primary-700 mb-4">
                          <strong>Causes:</strong> Rust/corrosion, improper installation, sealant breakdown, thermal expansion
                        </p>
                        <p className="text-primary-700 mb-4">
                          <strong>Symptoms:</strong> Leaks around chimneys/vents, rust stains, visible gaps, water in attic
                        </p>
                        <p className="text-primary-700">
                          <strong>Our Fix:</strong> Remove and replace failed flashing, properly seal transitions, use galvanized or copper materials. <span className="font-semibold">Cost: $400-$1,000</span> per area.
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-lime-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">🌡️ Heat & Sun Damage</h3>
                        <p className="text-primary-700 mb-4">
                          <strong>Causes:</strong> Extreme Texas heat (100°F+ summers), UV exposure, poor ventilation
                        </p>
                        <p className="text-primary-700 mb-4">
                          <strong>Symptoms:</strong> Cracking/blistering shingles, accelerated aging, warped decking
                        </p>
                        <p className="text-primary-700">
                          <strong>Our Fix:</strong> Replace heat-damaged sections, improve attic ventilation to reduce heat buildup, recommend reflective or heat-resistant materials. <span className="font-semibold">Cost: $500-$2,000</span> depending on extent.
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">🌳 Tree Damage & Debris</h3>
                        <p className="text-primary-700 mb-4">
                          <strong>Causes:</strong> Falling branches, scraping limbs, accumulated leaves/debris
                        </p>
                        <p className="text-primary-700 mb-4">
                          <strong>Symptoms:</strong> Punctured/cracked shingles, scratched surfaces, clogged gutters, moss/algae growth
                        </p>
                        <p className="text-primary-700">
                          <strong>Our Fix:</strong> Emergency tarping if needed, remove debris, replace damaged shingles, recommend tree trimming. <span className="font-semibold">Cost: $200-$1,500</span> depending on damage.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Repair vs Replacement Guide */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Should You Repair or Replace Your Roof?
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      We believe in honest recommendations. Here's how we help you decide between repair and replacement:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white rounded-xl p-6 border-2 border-green-500">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-4xl">✅</span>
                          <h3 className="text-2xl font-bold text-primary-900">Repair Makes Sense When...</h3>
                        </div>
                        <ul className="space-y-3 text-primary-700">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold mt-1">•</span>
                            <span><strong>Damage is localized:</strong> Only one area or section affected (less than 20-30% of roof)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold mt-1">•</span>
                            <span><strong>Roof is relatively new:</strong> Less than 10-12 years old for standard shingles, less than 15-20 for premium</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold mt-1">•</span>
                            <span><strong>No structural damage:</strong> Decking is solid, rafters intact, no sagging</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold mt-1">•</span>
                            <span><strong>Materials are available:</strong> We can match existing shingles/color for seamless repair</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold mt-1">•</span>
                            <span><strong>Budget constraints:</strong> You need immediate fix but aren't ready for full replacement</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold mt-1">•</span>
                            <span><strong>Cost-effective:</strong> Repair cost is less than 30-40% of replacement cost</span>
                          </li>
                        </ul>
                        <div className="mt-6 bg-green-50 p-4 rounded-lg">
                          <p className="font-semibold text-primary-900 mb-2">💰 Typical Repair Costs:</p>
                          <ul className="text-sm space-y-1 text-primary-700">
                            <li>• Minor leak repair: $300-$800</li>
                            <li>• Shingle replacement (small section): $400-$1,200</li>
                            <li>• Flashing repair: $400-$1,000</li>
                            <li>• Emergency tarping: $200-$500</li>
                            <li>• Major repair (multiple areas): $1,500-$4,000</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-2 border-red-500">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-4xl">🔄</span>
                          <h3 className="text-2xl font-bold text-primary-900">Replacement Is Better When...</h3>
                        </div>
                        <ul className="space-y-3 text-primary-700">
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold mt-1">•</span>
                            <span><strong>Widespread damage:</strong> More than 30-40% of roof affected by storm, age, or deterioration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold mt-1">•</span>
                            <span><strong>Roof is old:</strong> 15-20+ years for standard shingles, approaching end of expected lifespan</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold mt-1">•</span>
                            <span><strong>Multiple past repairs:</strong> You've repaired several times in recent years (band-aid approach)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold mt-1">•</span>
                            <span><strong>Structural concerns:</strong> Decking damage, sagging, soft spots that indicate deeper problems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold mt-1">•</span>
                            <span><strong>Energy efficiency issues:</strong> High cooling bills, poor insulation, you want to upgrade</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold mt-1">•</span>
                            <span><strong>Material mismatch:</strong> Can't find matching shingles, repair will look patchy/obvious</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold mt-1">•</span>
                            <span><strong>Insurance is covering it:</strong> Storm damage claim approved, your out-of-pocket is just deductible</span>
                          </li>
                        </ul>
                        <div className="mt-6 bg-red-50 p-4 rounded-lg">
                          <p className="font-semibold text-primary-900 mb-2">💡 Our Honest Approach:</p>
                          <p className="text-sm text-primary-700">
                            We'll never upsell you on replacement if repair is appropriate. But we also won't patch a roof that's beyond repair—that just delays the inevitable and costs you more in the long run. We provide honest assessments and let YOU make the informed decision.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Repair Process Timeline */}
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      What to Expect: Roof Repair Timeline
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-xl border-l-4 border-accent-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                          ⚡ Most Repairs: 2-4 Hours
                        </h3>
                        <p className="text-primary-700 leading-relaxed mb-4">
                          <strong>The majority of roof repairs are completed in just a few hours.</strong> We arrive with the right materials, complete the repair efficiently, and clean up thoroughly—often finishing before lunch.
                        </p>
                        <div className="bg-primary-50 p-4 rounded-lg">
                          <p className="font-semibold text-primary-900 mb-2">Typical same-day repairs:</p>
                          <ul className="space-y-2 text-primary-700">
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">✓</span>
                              <span><strong>Minor leak repairs:</strong> 1-2 hours (locate source, replace shingles, test)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">✓</span>
                              <span><strong>Shingle replacement (small area):</strong> 2-3 hours</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">✓</span>
                              <span><strong>Flashing repair/replacement:</strong> 2-4 hours</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">✓</span>
                              <span><strong>Emergency tarping:</strong> 30-60 minutes</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 bg-white p-6 rounded-xl">
                      <h3 className="font-bold text-primary-900 mb-3">Timeline by Repair Type:</h3>
                      <ul className="space-y-2 text-primary-700">
                        <li className="flex items-start gap-2">
                          <span className="text-accent-600 font-bold mt-1">•</span>
                          <span><strong>Simple repairs (leaks, missing shingles):</strong> 2-4 hours, same day</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-600 font-bold mt-1">•</span>
                          <span><strong>Medium repairs (flashing, valley repairs, multiple areas):</strong> 4-8 hours, same day or next day</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-600 font-bold mt-1">•</span>
                          <span><strong>Major repairs (large sections, decking replacement):</strong> 1-2 days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-600 font-bold mt-1">•</span>
                          <span><strong>Emergency service:</strong> Same-day response, often within 2-4 hours of call</span>
                        </li>
                      </ul>
                      <p className="text-sm text-primary-600 mt-4 italic">
                        <strong>Scheduling:</strong> We offer flexible scheduling including evenings and weekends for non-emergency repairs. Emergency repairs get priority response.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* ROOF INSPECTION SPECIFIC CONTENT */}
              {service.slug === 'roof-inspection' && (
                <>
                  {/* What We Inspect - 50-Point Checklist */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Our Comprehensive 50-Point Inspection Checklist
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      We don't just look at your shingles—we examine every component that affects your roof's performance and lifespan. 
                      Here's what our certified inspectors evaluate:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                          <span className="text-2xl">🏠</span> Roofing Materials
                        </h3>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ Shingle condition & age</li>
                          <li>✓ Granule loss assessment</li>
                          <li>✓ Curling, cupping, or buckling</li>
                          <li>✓ Missing or damaged shingles</li>
                          <li>✓ Nail pops or exposed nails</li>
                          <li>✓ Algae, moss, or lichen growth</li>
                          <li>✓ Manufacturer defects (if visible)</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                          <span className="text-2xl">🔧</span> Flashing & Penetrations
                        </h3>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ Chimney flashing condition</li>
                          <li>✓ Vent pipe boots & seals</li>
                          <li>✓ Skylight flashing & seals</li>
                          <li>✓ Valley flashing integrity</li>
                          <li>✓ Wall flashing (dormers, etc.)</li>
                          <li>✓ Drip edge condition</li>
                          <li>✓ Sealant/caulk deterioration</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                          <span className="text-2xl">🏗️</span> Structural Components
                        </h3>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ Decking/sheathing condition</li>
                          <li>✓ Sagging or uneven areas</li>
                          <li>✓ Rafter visibility (if accessible)</li>
                          <li>✓ Ridge line straightness</li>
                          <li>✓ Fascia board condition</li>
                          <li>✓ Soffit condition & ventilation</li>
                          <li>✓ Overall structural integrity</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                          <span className="text-2xl">💨</span> Ventilation System
                        </h3>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ Ridge vent condition</li>
                          <li>✓ Soffit vent functionality</li>
                          <li>✓ Gable vent condition</li>
                          <li>✓ Attic ventilation adequacy</li>
                          <li>✓ Turbine vent operation</li>
                          <li>✓ Proper air flow balance</li>
                          <li>✓ Temperature indicators</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                          <span className="text-2xl">💧</span> Gutters & Drainage
                        </h3>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ Gutter condition & pitch</li>
                          <li>✓ Downspout functionality</li>
                          <li>✓ Clogging or debris buildup</li>
                          <li>✓ Gutter attachment security</li>
                          <li>✓ Water staining on fascia</li>
                          <li>✓ Splash blocks & extensions</li>
                          <li>✓ Drainage away from foundation</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                          <span className="text-2xl">🏚️</span> Interior Indicators
                        </h3>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ Attic inspection (if accessible)</li>
                          <li>✓ Water stains or leaks</li>
                          <li>✓ Mold or mildew presence</li>
                          <li>✓ Daylight penetration</li>
                          <li>✓ Insulation condition</li>
                          <li>✓ Condensation issues</li>
                          <li>✓ Ceiling stains (from below)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* When to Get an Inspection */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      When Should You Get a Roof Inspection?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border-l-4 border-amber-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">🏡 Buying or Selling a Home</h3>
                        <p className="text-primary-700 mb-3">
                          <strong>Pre-Purchase:</strong> Know exactly what you're getting. Our inspection reveals condition, remaining lifespan, 
                          and repair costs—powerful negotiating information. Many buyers discover $5,000-$15,000 in needed repairs.
                        </p>
                        <p className="text-primary-700">
                          <strong>Pre-Listing:</strong> Address issues before listing to avoid buyer objections or price reductions. A clean 
                          inspection report is a great selling point.
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">⛈️ After Major Storms</h3>
                        <p className="text-primary-700 mb-3">
                          <strong>FREE inspection after hail, wind, or severe storms.</strong> Central Texas gets major hail events every 2-3 years. 
                          Damage isn't always visible from ground level—we document everything for insurance claims.
                        </p>
                        <p className="text-primary-700">
                          <strong>Time sensitive:</strong> Most insurance policies require claims within 1 year of damage. Don't wait!
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">📅 Routine Maintenance</h3>
                        <p className="text-primary-700">
                          <strong>Annual or bi-annual inspections catch small problems before they become expensive.</strong> Recommended schedule: 
                          Twice yearly (spring and fall) for roofs 10+ years old. Once yearly for newer roofs. Small repairs cost $300-$800; 
                          ignored problems can lead to $5,000-$15,000 in water damage.
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">🔍 Age Milestones</h3>
                        <p className="text-primary-700">
                          Get inspections at key ages: <strong>10 years</strong> (mid-life check), <strong>15 years</strong> (planning stage), 
                          <strong>20+ years</strong> (annual inspections recommended). Helps you budget for eventual replacement and catch 
                          age-related deterioration early.
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">💧 Visible Problems</h3>
                        <p className="text-primary-700">
                          <strong>Don't wait if you see:</strong> Water stains on ceilings, missing shingles, sagging areas, excessive granules 
                          in gutters, daylight in attic, higher energy bills, or mold/mildew smells. Early detection saves money—minor leak 
                          repairs cost $300-$800; water damage remediation costs $2,000-$10,000+.
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">🛡️ Insurance Requirements</h3>
                        <p className="text-primary-700">
                          Some insurance companies require inspections for older roofs (15-20+ years) or after claims. We provide insurance-acceptable 
                          reports with photos and condition ratings. Can also help with wind mitigation inspections for premium discounts.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* What You Receive - Detailed Report */}
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      What You Receive: Your Detailed Inspection Report
                    </h2>
                    <div className="bg-white rounded-xl p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="text-xl font-bold text-primary-900 mb-4">📸 Comprehensive Photo Documentation</h3>
                          <ul className="space-y-3 text-primary-700">
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>20-40 high-resolution photos of all roof components</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Close-up shots of any damage or concerns</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Drone photography for steep or complex roofs</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Labeled photos showing exact location of issues</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Before photos for future comparison</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary-900 mb-4">📊 Condition Ratings & Analysis</h3>
                          <ul className="space-y-3 text-primary-700">
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Overall condition rating (1-10 scale)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Component-by-component ratings</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Estimated remaining lifespan (years)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Priority levels: Immediate, Near-Term, Monitor</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Warranty coverage check (if applicable)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold text-primary-900 mb-4">🔧 Repair Recommendations</h3>
                          <ul className="space-y-3 text-primary-700">
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Detailed description of each issue</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Why it matters (consequences if ignored)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Estimated repair cost ranges</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Repair vs. replacement guidance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Timeline recommendations (urgent vs. plan for)</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary-900 mb-4">💰 Planning & Budget Information</h3>
                          <ul className="space-y-3 text-primary-700">
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Total estimated repair costs (if needed)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Replacement cost estimate (for planning)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>ROI analysis (repair vs. replace)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Insurance claim potential (if storm damage)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-600 font-bold">•</span>
                              <span>Long-term maintenance recommendations</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-8 bg-accent-50 border-2 border-accent-200 rounded-xl p-6">
                        <p className="text-primary-700">
                          <strong>📧 Delivered within 24 hours via email</strong> in easy-to-read PDF format. Perfect for your records, 
                          sharing with insurance, or showing to potential home buyers. Keep for future reference!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Inspection Pricing */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Roof Inspection Pricing
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white rounded-xl p-6 border-2 border-green-500">
                        <div className="text-center mb-4">
                          <h3 className="text-2xl font-bold text-primary-900">FREE</h3>
                          <p className="text-sm text-primary-600">Post-Storm Inspection</p>
                        </div>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ After hail, wind, or severe weather</li>
                          <li>✓ Full 50-point inspection</li>
                          <li>✓ Photo documentation</li>
                          <li>✓ Insurance claim assistance</li>
                          <li>✓ No obligation</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-2 border-blue-500">
                        <div className="text-center mb-4">
                          <h3 className="text-2xl font-bold text-primary-900">$150-$300</h3>
                          <p className="text-sm text-primary-600">Standard Inspection</p>
                        </div>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ Comprehensive 50-point inspection</li>
                          <li>✓ Detailed photo report</li>
                          <li>✓ Condition ratings</li>
                          <li>✓ Repair recommendations</li>
                          <li>✓ 24-hour turnaround</li>
                          <li className="font-semibold text-accent-600">✓ Credit toward repairs if booked</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-2 border-purple-500">
                        <div className="text-center mb-4">
                          <h3 className="text-2xl font-bold text-primary-900">$200-$400</h3>
                          <p className="text-sm text-primary-600">Pre-Purchase Inspection</p>
                        </div>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ Everything in Standard, plus:</li>
                          <li>✓ Insurance-acceptable report</li>
                          <li>✓ Estimated replacement cost</li>
                          <li>✓ Lifespan analysis</li>
                          <li>✓ Negotiation talking points</li>
                          <li>✓ Available for realtor/buyer</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 bg-white p-6 rounded-xl">
                      <p className="text-primary-700 mb-2">
                        <strong>Factors affecting price:</strong> Home size, roof complexity, accessibility, drone requirements. 
                        Most standard homes: $150-$200.
                      </p>
                      <p className="text-primary-700">
                        <strong>Annual Maintenance Program:</strong> Sign up for annual inspections at discounted rate ($99-$149). 
                        Includes spring and fall inspections with priority scheduling.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* EMERGENCY SERVICES SPECIFIC CONTENT */}
              {service.slug === 'emergency-services' && (
                <>
                  {/* What Qualifies as Emergency */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      When Should You Call for Emergency Roofing?
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Not sure if your situation is an emergency? <strong>When in doubt, call us at (512) 763-5277.</strong> We'll assess your situation and advise whether immediate service is needed or if it can wait until regular hours (which saves you money). Here are situations that definitely require emergency response:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border-l-4 border-red-600">
                        <h3 className="text-xl font-bold text-red-700 mb-3">🚨 CALL IMMEDIATELY</h3>
                        <ul className="space-y-3 text-primary-700">
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold text-xl">•</span>
                            <span><strong>Active water leaks</strong> dripping into your home during or after storms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold text-xl">•</span>
                            <span><strong>Major storm damage</strong> with visible holes, large sections of missing shingles, or exposed decking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold text-xl">•</span>
                            <span><strong>Tree or large branch</strong> has fallen on your roof</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold text-xl">•</span>
                            <span><strong>Severe hail damage</strong> during ongoing storm with more weather coming</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold text-xl">•</span>
                            <span><strong>Structural damage</strong> causing sagging, collapse, or visible instability</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold text-xl">•</span>
                            <span><strong>Fire damage</strong> to roof structure or materials</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-amber-500">
                        <h3 className="text-xl font-bold text-amber-700 mb-3">⚠️ URGENT (Call Same Day)</h3>
                        <ul className="space-y-3 text-primary-700">
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold text-xl">•</span>
                            <span><strong>Torn or lifted shingles</strong> with rain forecast within 24-48 hours</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold text-xl">•</span>
                            <span><strong>Flashing failure</strong> around chimneys or vents with active seepage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold text-xl">•</span>
                            <span><strong>Sudden appearance</strong> of water stains on ceilings after storms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold text-xl">•</span>
                            <span><strong>Loose or detached gutters</strong> causing water to pour over</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold text-xl">•</span>
                            <span><strong>Wind damage</strong> that has lifted edge metal or ridge caps</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 bg-white p-6 rounded-xl">
                      <p className="text-primary-700">
                        <strong>💡 Can it wait until morning?</strong> If damage occurred but no water is currently entering, weather is clear for 2-3 days, and there's no safety hazard, we can schedule next-day service (saves you emergency rates). However, if you're unsure or concerned, call us anytime—we're happy to assess your situation over the phone at no charge.
                      </p>
                    </div>
                  </div>

                  {/* What to Do Before We Arrive */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      What to Do While Waiting for Emergency Service
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      After calling us, here are immediate steps you can take to minimize damage and stay safe:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                          <span className="text-2xl">🛡️</span> Safety First
                        </h3>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ <strong>Stay indoors</strong> and away from damaged areas</li>
                          <li>✓ <strong>Don't go on your roof</strong>—especially in storms or on wet surfaces</li>
                          <li>✓ <strong>Avoid standing water</strong> if there are electrical outlets nearby</li>
                          <li>✓ <strong>Turn off electricity</strong> in affected rooms if safe to do so</li>
                          <li>✓ <strong>Watch for falling debris</strong> from damaged areas</li>
                          <li>✓ <strong>Keep children and pets</strong> away from affected areas</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                          <span className="text-2xl">💧</span> Contain Water Damage
                        </h3>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ <strong>Place buckets/containers</strong> under active leaks</li>
                          <li>✓ <strong>Move furniture and valuables</strong> away from leak areas</li>
                          <li>✓ <strong>Use towels</strong> to soak up standing water on floors</li>
                          <li>✓ <strong>Roll up rugs</strong> to prevent water absorption</li>
                          <li>✓ <strong>Turn on fans</strong> if safe—helps reduce mold risk</li>
                          <li>✓ <strong>Don't use electrical equipment</strong> in wet areas</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                          <span className="text-2xl">📸</span> Document Everything
                        </h3>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ <strong>Take photos</strong> of all visible damage</li>
                          <li>✓ <strong>Video walkthrough</strong> showing extent of damage</li>
                          <li>✓ <strong>Note the date and time</strong> damage occurred</li>
                          <li>✓ <strong>Photograph damaged items</strong> before moving them</li>
                          <li>✓ <strong>Save all receipts</strong> for emergency expenses</li>
                          <li>✓ <strong>Don't throw away</strong> damaged materials yet</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                          <span className="text-2xl">📞</span> Contact Your Insurance
                        </h3>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li>✓ <strong>Call your insurance company</strong> to report the claim</li>
                          <li>✓ <strong>Get your claim number</strong> for reference</li>
                          <li>✓ <strong>Ask about coverage</strong> for emergency services</li>
                          <li>✓ <strong>Request adjuster visit</strong> ASAP</li>
                          <li>✓ <strong>Ask if they require</strong> multiple estimates</li>
                          <li>✓ <strong>We can help</strong> with this process when we arrive</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Pricing */}
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Emergency Service Pricing
                    </h2>
                    <div className="bg-white rounded-xl p-6 mb-6">
                      <p className="text-primary-700 mb-4 leading-relaxed">
                        <strong>We believe in transparent emergency pricing—no surprises when you're already stressed.</strong> Emergency rates apply for after-hours, weekends, and immediate-response situations. Regular business hours (Monday-Friday, 8 AM - 5 PM) are charged at standard rates.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border-2 border-accent-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-4">Emergency Tarping Services</h3>
                        <div className="space-y-3 text-primary-700">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span><strong>Small area</strong> (10x10 to 15x15)</span>
                            <span className="font-bold text-accent-600">$250-$500</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span><strong>Medium area</strong> (20x20 to 30x30)</span>
                            <span className="font-bold text-accent-600">$500-$1,000</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span><strong>Large area</strong> (30x30+)</span>
                            <span className="font-bold text-accent-600">$1,000-$2,500</span>
                          </div>
                          <div className="flex justify-between items-center pb-2">
                            <span><strong>Complex/multi-level</strong></span>
                            <span className="font-bold text-accent-600">$1,500-$3,500</span>
                          </div>
                        </div>
                        <p className="text-sm text-primary-600 mt-4">
                          <strong>Includes:</strong> Heavy-duty tarp, securing materials, labor, 2-4 hour response time
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-2 border-blue-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-4">Emergency Rate Factors</h3>
                        <ul className="space-y-3 text-primary-700">
                          <li className="flex items-start gap-2">
                            <span className="text-accent-600 font-bold">•</span>
                            <span><strong>After hours</strong> (weeknights 5 PM - 8 AM): +25-50%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-600 font-bold">•</span>
                            <span><strong>Weekends</strong> (Saturday-Sunday): +25-35%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-600 font-bold">•</span>
                            <span><strong>Holidays</strong>: +50-75%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-600 font-bold">•</span>
                            <span><strong>Severe weather conditions</strong>: +25-50%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-600 font-bold">•</span>
                            <span><strong>Immediate response</strong> (under 2 hours): +25%</span>
                          </li>
                        </ul>
                        <p className="text-sm text-primary-600 mt-4">
                          <strong>Good news:</strong> Most insurance policies cover emergency tarping!
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 bg-accent-50 border-2 border-accent-200 rounded-xl p-6">
                      <p className="text-primary-700">
                        <strong>💰 Credit Toward Permanent Repairs:</strong> If you hire us for permanent repairs, we credit your emergency tarping cost toward the total. This means tarping is essentially free if we do the final work!
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* GUTTER INSTALLATION SPECIFIC CONTENT */}
              {service.slug === 'gutter-installation' && (
                <>
                  {/* Seamless vs Sectional Gutters */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Seamless vs. Sectional Gutters: Why Seamless Wins
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Not all gutters are created equal. The difference between seamless and sectional gutters can mean thousands in prevented water damage. Here's what you need to know:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border-2 border-green-500">
                        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                          <span className="text-2xl">✅</span> Seamless Gutters (Our Recommendation)
                        </h3>
                        <ul className="space-y-3 text-primary-700">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span><strong>Custom-fabricated on-site</strong> to exact length of your roofline</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span><strong>No seams except at corners</strong>—means virtually no leaks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span><strong>Cleaner appearance</strong>—no visible joints every 10 feet</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span><strong>Less maintenance</strong>—fewer joints = fewer clogs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span><strong>Longer lifespan</strong>—typically 20-25 years vs. 10-15 years</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span><strong>Better resale value</strong>—home buyers prefer seamless</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span><strong>20+ color options</strong> to match any home style</span>
                          </li>
                        </ul>
                        <div className="mt-4 bg-green-50 p-4 rounded-lg">
                          <p className="text-sm text-green-900">
                            <strong>Cost difference:</strong> Only $1-3 more per linear foot than sectional, but saves you thousands in prevented water damage over the gutter's lifetime.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-2 border-red-500">
                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                          <span className="text-2xl">❌</span> Sectional Gutters (Big Box Stores)
                        </h3>
                        <ul className="space-y-3 text-primary-700">
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span><strong>Seams every 10 feet</strong>—prime spots for leaks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span><strong>Visible joints</strong>—less attractive appearance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span><strong>Frequent repairs</strong>—joints separate over time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span><strong>Debris accumulation</strong> at seams causes clogs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span><strong>Shorter lifespan</strong>—10-15 years typical</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span><strong>Limited color options</strong>—usually white or brown</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span><strong>DIY installation risks</strong>—improper pitch, leaks</span>
                          </li>
                        </ul>
                        <div className="mt-4 bg-red-50 p-4 rounded-lg">
                          <p className="text-sm text-red-900">
                            <strong>Hidden costs:</strong> Lower upfront cost but higher lifetime cost due to repairs, resealing joints, and earlier replacement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 5-Inch vs 6-Inch Gutter Sizing */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      5-Inch vs. 6-Inch Gutters: Which Size Do You Need?
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Gutter size matters! Undersized gutters overflow during heavy rainfall, while oversized gutters cost more without added benefit. Here's how to choose:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-4">5-Inch Gutters (Standard)</h3>
                        <p className="text-primary-700 mb-4">
                          <strong>Best for:</strong> Most residential homes with average roof area and moderate rainfall
                        </p>
                        <div className="space-y-3 text-sm text-primary-700">
                          <p><strong>Roof area:</strong> Up to 5,500 square feet</p>
                          <p><strong>Rainfall capacity:</strong> Handles 2-3 inches per hour</p>
                          <p><strong>Typical homes:</strong> 1,200-3,500 sq ft single-story or two-story</p>
                          <p><strong>Cost:</strong> $6-$12 per linear foot installed</p>
                          <p><strong>Appearance:</strong> Proportional on most homes—not too bulky</p>
                        </div>
                        <div className="mt-4 bg-blue-50 p-3 rounded">
                          <p className="text-xs text-blue-900">
                            <strong>✓ Recommended for:</strong> 80% of homes in Central Texas
                          </p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-4">6-Inch Gutters (High-Capacity)</h3>
                        <p className="text-primary-700 mb-4">
                          <strong>Best for:</strong> Large roofs, steep pitches, or areas with very heavy rainfall
                        </p>
                        <div className="space-y-3 text-sm text-primary-700">
                          <p><strong>Roof area:</strong> Over 5,500 square feet</p>
                          <p><strong>Rainfall capacity:</strong> Handles 3-5 inches per hour</p>
                          <p><strong>Typical homes:</strong> 3,500+ sq ft, steep roofs, or multiple stories</p>
                          <p><strong>Cost:</strong> $8-$15 per linear foot installed</p>
                          <p><strong>Appearance:</strong> More visible but better proportion on large homes</p>
                        </div>
                        <div className="mt-4 bg-purple-50 p-3 rounded">
                          <p className="text-xs text-purple-900">
                            <strong>✓ Recommended for:</strong> Large homes, steep roof pitches (8:12+), areas with torrential rain
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6">
                      <h3 className="text-lg font-bold text-primary-900 mb-4">📐 Factors That Determine Gutter Size</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary-700">
                        <div>
                          <p className="font-semibold text-primary-900 mb-2">✓ Roof square footage</p>
                          <p>Larger roof = more water = larger gutters needed</p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-900 mb-2">✓ Roof pitch (steepness)</p>
                          <p>Steeper pitch = faster water flow = need more capacity</p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-900 mb-2">✓ Local rainfall intensity</p>
                          <p>Central Texas gets 2-3" per hour storms—need adequate capacity</p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-900 mb-2">✓ Number of downspouts</p>
                          <p>Proper downspout spacing can allow smaller gutter size</p>
                        </div>
                      </div>
                      <p className="text-primary-700 mt-4">
                        <strong>💡 Not sure which size you need?</strong> We'll measure your roof and recommend the right size during your free assessment—no guessing required!
                      </p>
                    </div>
                  </div>

                  {/* Color Options & Materials */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Gutter Materials & Color Options
                    </h2>
                    <div className="bg-white rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-bold text-primary-900 mb-4">Aluminum Gutters (Our Standard)</h3>
                      <p className="text-primary-700 mb-4">
                        <strong>Why we recommend aluminum:</strong> Best combination of durability, affordability, rust-resistance, and lightweight design. Won't rust like steel, won't crack like vinyl.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="border-l-4 border-accent-500 pl-4">
                          <p className="font-semibold text-primary-900 mb-2">.027 Gauge (Standard)</p>
                          <p className="text-sm text-primary-700">Most common thickness. Suitable for most residential applications. Cost-effective option. 20-year lifespan typical.</p>
                        </div>
                        <div className="border-l-4 border-accent-500 pl-4">
                          <p className="font-semibold text-primary-900 mb-2">.032 Gauge (Heavy-Duty)</p>
                          <p className="text-sm text-primary-700">20% thicker = more durable. Recommended for large homes or areas with heavy debris (trees). 25-year lifespan typical.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6">
                      <h3 className="text-xl font-bold text-primary-900 mb-4">20+ Color Options Available</h3>
                      <p className="text-primary-700 mb-6">
                        Choose a color that complements your home's exterior, trim, or roof. We bring samples to your appointment!
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { name: 'White', desc: 'Classic, matches any trim' },
                          { name: 'Almond/Beige', desc: 'Warm neutral tone' },
                          { name: 'Brown', desc: 'Earthy, traditional' },
                          { name: 'Black', desc: 'Modern, bold contrast' },
                          { name: 'Gray', desc: 'Contemporary neutral' },
                          { name: 'Bronze', desc: 'Elegant metal tone' },
                          { name: 'Copper', desc: 'Premium appearance' },
                          { name: 'Custom Match', desc: 'Match your trim exactly' },
                        ].map((color) => (
                          <div key={color.name} className="bg-primary-50 p-3 rounded-lg text-center">
                            <p className="font-semibold text-primary-900 text-sm">{color.name}</p>
                            <p className="text-xs text-primary-600 mt-1">{color.desc}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-primary-600 mt-6">
                        <strong>Pro tip:</strong> Most homes look best when gutters match trim color (windows, fascia) rather than roof color. This creates a cohesive look that doesn't draw attention to the gutters themselves.
                      </p>
                    </div>
                  </div>

                  {/* Gutter Guards & Maintenance */}
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Should You Add Gutter Guards?
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Gutter guards (also called gutter covers or leaf guards) keep debris out, reducing cleaning frequency. But they're not right for every home. Here's when they make sense:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-green-700 mb-4">✅ Get Gutter Guards If You Have:</h3>
                        <ul className="space-y-2 text-primary-700">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span><strong>Many trees</strong> dropping leaves, needles, or seeds</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span><strong>Two-story home</strong> where gutter cleaning is dangerous</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span><strong>Limited mobility</strong> and can't clean gutters yourself</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span><strong>Frequent clogs</strong>—cleaning 3+ times per year</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span><strong>Rental property</strong> where maintenance is expensive</span>
                          </li>
                        </ul>
                        <div className="mt-4 bg-green-50 p-4 rounded">
                          <p className="text-sm text-green-900">
                            <strong>ROI:</strong> Guards cost $7-$15/linear foot but save $150-$300 per cleaning. Break-even in 2-4 years if you currently clean 2-3x annually.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-amber-700 mb-4">⚠️ Skip Gutter Guards If You Have:</h3>
                        <ul className="space-y-2 text-primary-700">
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600">✓</span>
                            <span><strong>Few or no trees</strong> nearby—guards are overkill</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600">✓</span>
                            <span><strong>Single-story</strong> home where cleaning is easy/safe</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600">✓</span>
                            <span><strong>Tight budget</strong>—clean 1-2x per year yourself</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600">✓</span>
                            <span><strong>Steep roof pitch</strong>—some guards don't work well</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600">✓</span>
                            <span><strong>Desert landscaping</strong> with minimal debris</span>
                          </li>
                        </ul>
                        <div className="mt-4 bg-amber-50 p-4 rounded">
                          <p className="text-sm text-amber-900">
                            <strong>Reality check:</strong> Guards reduce maintenance but don't eliminate it. You'll still need occasional cleaning every 2-3 years.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-white rounded-xl p-6">
                      <h3 className="text-lg font-bold text-primary-900 mb-4">Types of Gutter Guards We Install</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-accent-500 pl-4">
                          <p className="font-semibold text-primary-900">Micro-Mesh Guards ($10-$15/linear foot)</p>
                          <p className="text-sm text-primary-700">Fine stainless steel mesh blocks even small debris. Best overall performance. Our top recommendation.</p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <p className="font-semibold text-primary-900">Foam Inserts ($3-$5/linear foot)</p>
                          <p className="text-sm text-primary-700">Budget-friendly option. Porous foam fits inside gutter. Needs replacement every 2-3 years.</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <p className="font-semibold text-primary-900">Perforated Aluminum ($7-$10/linear foot)</p>
                          <p className="text-sm text-primary-700">Solid cover with holes for water. Durable and effective. Good mid-range option.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Section */}
                  <div className="bg-gradient-to-br from-accent-50 to-primary-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Gutter Installation Pricing
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Transparent pricing so you know what to expect. Final quote depends on linear footage, gutter size, material gauge, and accessibility. Most homes: 120-200 linear feet of gutters.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white rounded-xl p-6 border-2 border-blue-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-4">5-Inch Seamless Gutters</h3>
                        <div className="space-y-3 text-primary-700">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>.027 gauge aluminum</span>
                            <span className="font-bold text-accent-600">$6-$9/ft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>.032 gauge aluminum (heavy-duty)</span>
                            <span className="font-bold text-accent-600">$8-$11/ft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>Typical home (150 linear feet)</span>
                            <span className="font-bold text-accent-600">$900-$1,350</span>
                          </div>
                        </div>
                        <p className="text-xs text-primary-600 mt-4">
                          Includes: removal of old gutters, fascia repair if needed, seamless gutter fabrication, hidden hanger installation every 24", downspouts with extensions, cleanup
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-2 border-purple-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-4">6-Inch Seamless Gutters</h3>
                        <div className="space-y-3 text-primary-700">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>.027 gauge aluminum</span>
                            <span className="font-bold text-accent-600">$8-$12/ft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>.032 gauge aluminum (heavy-duty)</span>
                            <span className="font-bold text-accent-600">$10-$15/ft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>Typical large home (200 linear feet)</span>
                            <span className="font-bold text-accent-600">$1,600-$2,400</span>
                          </div>
                        </div>
                        <p className="text-xs text-primary-600 mt-4">
                          Includes: same as 5-inch plus larger capacity downspouts (3x4 inch) for better water flow
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6">
                      <h3 className="text-lg font-bold text-primary-900 mb-4">Add-On Services & Pricing</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="border-l-4 border-accent-500 pl-4">
                          <p className="font-semibold text-primary-900">Gutter Guards</p>
                          <p className="text-primary-700">Micro-mesh: $10-$15/ft • Perforated: $7-$10/ft • Foam: $3-$5/ft</p>
                        </div>
                        <div className="border-l-4 border-accent-500 pl-4">
                          <p className="font-semibold text-primary-900">Downspout Extensions</p>
                          <p className="text-primary-700">Underground drainage: $15-$25/downspout • Splash blocks: $10-$15 each</p>
                        </div>
                        <div className="border-l-4 border-accent-500 pl-4">
                          <p className="font-semibold text-primary-900">Fascia Repair</p>
                          <p className="text-primary-700">Minor repairs: $150-$300 • Fascia replacement: $8-$15/linear foot</p>
                        </div>
                        <div className="border-l-4 border-accent-500 pl-4">
                          <p className="font-semibold text-primary-900">Old Gutter Removal</p>
                          <p className="text-primary-700">Included in installation cost • Disposal and haul-away included</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-accent-50 border-2 border-accent-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-primary-900 mb-3">📊 What Affects Your Price?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-primary-700">
                        <p>• <strong>Linear footage:</strong> More gutters = higher cost (measure roofline)</p>
                        <p>• <strong>Home height:</strong> Two-story requires scaffolding (+15-25%)</p>
                        <p>• <strong>Gutter size:</strong> 6-inch costs $2-3 more per foot than 5-inch</p>
                        <p>• <strong>Material gauge:</strong> .032 thicker gauge costs $1-2 more per foot</p>
                        <p>• <strong>Fascia condition:</strong> Repairs add $150-$500 typically</p>
                        <p>• <strong>Accessibility:</strong> Steep yards or obstacles increase labor</p>
                      </div>
                      <p className="text-primary-700 mt-4">
                        <strong>💡 Free quote:</strong> We measure and provide exact pricing during your free assessment—no guessing or surprise charges!
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* RESIDENTIAL ROOFING SPECIFIC CONTENT */}
              {service.slug === 'residential-roofing' && (
                <>
                  {/* Roofing Material Options */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Residential Roofing Material Options
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Choosing the right roofing material impacts your home's protection, appearance, energy efficiency, and long-term costs. Here's what we install in Central Texas:
                    </p>
                    <div className="space-y-6">
                      {/* Architectural Shingles */}
                      <div className="bg-white rounded-xl p-6 border-l-4 border-accent-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">🏠</span> Architectural Shingles (Most Popular)
                        </h3>
                        <p className="text-primary-700 mb-4">
                          Premium laminated shingles with dimensional appearance. Best combination of cost, durability, and aesthetics. Available in 20+ colors.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Cost</p>
                            <p className="text-primary-700">$5,500-$12,000 (avg home)</p>
                            <p className="text-xs text-primary-600">$350-$550/square installed</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Lifespan</p>
                            <p className="text-primary-700">25-30 years typical</p>
                            <p className="text-xs text-primary-600">Warranty: 25-30 years material</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Best For</p>
                            <p className="text-primary-700">Most residential homes</p>
                            <p className="text-xs text-primary-600">Budget-conscious homeowners</p>
                          </div>
                        </div>
                        <div className="mt-4 bg-green-50 p-3 rounded">
                          <p className="text-sm text-green-900">
                            <strong>✓ Pros:</strong> Affordable, widely available, many color options, good warranties, suitable for most climates
                          </p>
                        </div>
                        <div className="mt-2 bg-amber-50 p-3 rounded">
                          <p className="text-sm text-amber-900">
                            <strong>⚠ Cons:</strong> Not hail-resistant (unless impact-rated), shorter lifespan than metal/tile, heavier than standard shingles
                          </p>
                        </div>
                      </div>

                      {/* Impact-Resistant Shingles */}
                      <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">🛡️</span> Impact-Resistant Shingles (Recommended for Central Texas)
                        </h3>
                        <p className="text-primary-700 mb-4">
                          Class 4 (IR) shingles designed to withstand hail impact. Earns 10-35% annual insurance discounts. Essential for hail-prone areas like Round Rock, Georgetown, Austin.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Cost</p>
                            <p className="text-primary-700">$8,500-$15,000 (avg home)</p>
                            <p className="text-xs text-primary-600">$500-$700/square installed</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Lifespan</p>
                            <p className="text-primary-700">30-50 years typical</p>
                            <p className="text-xs text-primary-600">Warranty: 30-50 years material</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Best For</p>
                            <p className="text-primary-700">Hail-prone areas</p>
                            <p className="text-xs text-primary-600">Insurance savings seekers</p>
                          </div>
                        </div>
                        <div className="mt-4 bg-green-50 p-3 rounded">
                          <p className="text-sm text-green-900">
                            <strong>✓ Pros:</strong> Hail protection, insurance discounts (10-35%), longer warranties, premium appearance, ROI in 7-12 years from insurance savings
                          </p>
                        </div>
                        <div className="mt-2 bg-purple-50 p-3 rounded border-2 border-purple-200">
                          <p className="text-sm text-purple-900">
                            <strong>💰 Insurance Savings Example:</strong> $3,000-$5,000 upgrade. Save $300-$600/year on insurance. Break-even in 7-10 years. Plus avoid future claims!
                          </p>
                        </div>
                      </div>

                      {/* Metal Roofing */}
                      <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">🔩</span> Metal Roofing (Longest Lasting)
                        </h3>
                        <p className="text-primary-700 mb-4">
                          Standing seam or metal shingle panels. Extremely durable, energy efficient, fire resistant. Best long-term investment but higher upfront cost.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Cost</p>
                            <p className="text-primary-700">$15,000-$30,000 (avg home)</p>
                            <p className="text-xs text-primary-600">$700-$1,200/square installed</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Lifespan</p>
                            <p className="text-primary-700">40-70 years typical</p>
                            <p className="text-xs text-primary-600">Warranty: 30-50 years material</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Best For</p>
                            <p className="text-primary-700">Long-term homeowners</p>
                            <p className="text-xs text-primary-600">Premium home upgrades</p>
                          </div>
                        </div>
                        <div className="mt-4 bg-green-50 p-3 rounded">
                          <p className="text-sm text-green-900">
                            <strong>✓ Pros:</strong> 40-70 year lifespan, excellent hail/wind resistance, energy efficient (reflects heat), fire resistant, low maintenance, increases home value
                          </p>
                        </div>
                        <div className="mt-2 bg-amber-50 p-3 rounded">
                          <p className="text-sm text-amber-900">
                            <strong>⚠ Cons:</strong> Higher upfront cost, can be noisy in rain (unless insulated), limited installers, may not match traditional neighborhoods
                          </p>
                        </div>
                      </div>

                      {/* Tile Roofing */}
                      <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">🏛️</span> Tile Roofing (Premium Aesthetic)
                        </h3>
                        <p className="text-primary-700 mb-4">
                          Clay or concrete tiles for Mediterranean, Spanish, or contemporary homes. Extremely durable, fire resistant, distinctive appearance. Requires structural support.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Cost</p>
                            <p className="text-primary-700">$20,000-$40,000 (avg home)</p>
                            <p className="text-xs text-primary-600">$800-$1,500/square installed</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Lifespan</p>
                            <p className="text-primary-700">50-100 years typical</p>
                            <p className="text-xs text-primary-600">Warranty: 50+ years material</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Best For</p>
                            <p className="text-primary-700">Spanish/Mediterranean style</p>
                            <p className="text-xs text-primary-600">Luxury homes</p>
                          </div>
                        </div>
                        <div className="mt-4 bg-green-50 p-3 rounded">
                          <p className="text-sm text-green-900">
                            <strong>✓ Pros:</strong> 50-100 year lifespan, exceptional durability, fire resistant, energy efficient, distinctive appearance, low maintenance
                          </p>
                        </div>
                        <div className="mt-2 bg-amber-50 p-3 rounded">
                          <p className="text-sm text-amber-900">
                            <strong>⚠ Cons:</strong> Highest upfront cost, very heavy (may require structural reinforcement $2k-$5k), limited contractors, individual tiles can break
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Common Roof Styles */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Common Residential Roof Styles We Install
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Your roof style affects cost, complexity, drainage, and aesthetics. Here are the most common residential roof types in Central Texas:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3">🏠 Gable Roof (Most Common)</h3>
                        <p className="text-sm text-primary-700 mb-3">
                          Triangular roof with two sloping sides meeting at a ridge. Simple, cost-effective, excellent drainage. Used on 60% of Central Texas homes.
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-xs text-primary-700">
                          <p><strong>Cost Factor:</strong> Standard (baseline)</p>
                          <p><strong>Complexity:</strong> Simple</p>
                          <p><strong>Drainage:</strong> Excellent</p>
                          <p><strong>Attic Space:</strong> Good ventilation</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3">🏘️ Hip Roof (Very Common)</h3>
                        <p className="text-sm text-primary-700 mb-3">
                          All four sides slope downward to walls. More stable in high winds, better for Central Texas storms. Slightly more expensive than gable.
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-xs text-primary-700">
                          <p><strong>Cost Factor:</strong> +10-15% vs gable</p>
                          <p><strong>Complexity:</strong> Moderate</p>
                          <p><strong>Drainage:</strong> Excellent</p>
                          <p><strong>Wind Resistance:</strong> Superior</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3">🏡 Combination Roof (Growing Trend)</h3>
                        <p className="text-sm text-primary-700 mb-3">
                          Mix of gable, hip, and other elements for visual interest. Common on larger or custom homes. More complex installation.
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-xs text-primary-700">
                          <p><strong>Cost Factor:</strong> +15-25% vs gable</p>
                          <p><strong>Complexity:</strong> Complex</p>
                          <p><strong>Drainage:</strong> Good (if designed right)</p>
                          <p><strong>Appearance:</strong> Premium look</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3">🏚️ Flat/Low-Slope Roof (Less Common)</h3>
                        <p className="text-sm text-primary-700 mb-3">
                          Nearly flat or very low pitch (less than 3:12). Requires different materials (TPO, EPDM, modified bitumen) and more maintenance.
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-xs text-primary-700">
                          <p><strong>Cost Factor:</strong> Varies by material</p>
                          <p><strong>Complexity:</strong> Moderate</p>
                          <p><strong>Drainage:</strong> Poor (needs drains)</p>
                          <p><strong>Maintenance:</strong> Higher frequency</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Signs You Need a New Roof */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Signs You Need a New Residential Roof
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Not sure if you need roof replacement or just repairs? Here are clear indicators it's time for a new roof:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border-l-4 border-red-600">
                        <h3 className="text-lg font-bold text-red-700 mb-4">🚨 Immediate Replacement Needed</h3>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Age 20+ years</strong> (near or past expected lifespan)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Multiple leaks</strong> in different areas of roof</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Widespread shingle damage</strong> (30%+ of roof affected)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Sagging roof deck</strong> (structural issue)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Extensive granule loss</strong> (shingles look bald)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Daylight through roof boards</strong> visible from attic</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span><strong>Mold or water stains</strong> throughout attic</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-amber-500">
                        <h3 className="text-lg font-bold text-amber-700 mb-4">⚠️ Plan Replacement Soon (1-3 Years)</h3>
                        <ul className="space-y-2 text-sm text-primary-700">
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">•</span>
                            <span><strong>Age 15-20 years</strong> (approaching end of life)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">•</span>
                            <span><strong>Curling or buckling shingles</strong> (losing adhesion)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">•</span>
                            <span><strong>Missing shingles</strong> after every major storm</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">•</span>
                            <span><strong>Cracked or broken shingles</strong> throughout roof</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">•</span>
                            <span><strong>Frequent repairs needed</strong> (3+ repairs in past 2 years)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">•</span>
                            <span><strong>Energy bills increasing</strong> (poor insulation/ventilation)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">•</span>
                            <span><strong>Neighbors replacing</strong> (similar age homes)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 bg-white rounded-xl p-6">
                      <p className="text-primary-700 mb-3">
                        <strong>💡 Not Sure?</strong> Schedule a free inspection. We'll give you an honest assessment with photos, remaining lifespan estimate, and clear recommendation whether to repair or replace. No pressure—just facts.
                      </p>
                      <p className="text-sm text-primary-600">
                        <strong>Cost consideration:</strong> Replacing proactively (before catastrophic failure) typically costs 10-20% less than emergency replacement after major damage. Plus you avoid interior water damage ($5k-$20k in repairs).
                      </p>
                    </div>
                  </div>

                  {/* Pricing Guide */}
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Residential Roofing Cost Guide
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Residential roof costs vary by material, home size, roof complexity, and existing conditions. Here's what to expect in Central Texas:
                    </p>
                    <div className="grid grid-cols-1 gap-6 mb-6">
                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-xl font-bold text-primary-900 mb-4">💰 Average Home Pricing (1,800-2,200 sq ft home, ~20 squares)</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-3 border-b">
                            <span className="text-primary-700"><strong>Architectural Shingles</strong> (standard)</span>
                            <span className="font-bold text-accent-600">$7,000-$11,000</span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b">
                            <span className="text-primary-700"><strong>Impact-Resistant Shingles</strong> (Class 4/IR)</span>
                            <span className="font-bold text-accent-600">$10,000-$14,000</span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b">
                            <span className="text-primary-700"><strong>Premium Architectural</strong> (designer)</span>
                            <span className="font-bold text-accent-600">$12,000-$16,000</span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b">
                            <span className="text-primary-700"><strong>Metal Roofing</strong> (standing seam)</span>
                            <span className="font-bold text-accent-600">$18,000-$28,000</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700"><strong>Tile Roofing</strong> (concrete or clay)</span>
                            <span className="font-bold text-accent-600">$25,000-$40,000</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4">📊 What's Included in Our Pricing</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary-700">
                          <div>
                            <p className="font-semibold text-primary-900 mb-2">✓ Materials</p>
                            <ul className="space-y-1 ml-4">
                              <li>• Roofing material (shingles, metal, etc.)</li>
                              <li>• Underlayment (synthetic or felt)</li>
                              <li>• Ice & water shield (valleys, eaves)</li>
                              <li>• Ridge cap shingles</li>
                              <li>• Starter strips</li>
                              <li>• Nails and fasteners</li>
                              <li>• Flashing materials</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-2">✓ Labor & Services</p>
                            <ul className="space-y-1 ml-4">
                              <li>• Complete tear-off of old roof</li>
                              <li>• Decking repair/replacement as needed</li>
                              <li>• Professional installation</li>
                              <li>• Cleanup and disposal</li>
                              <li>• Magnetic nail sweep</li>
                              <li>• Final inspection</li>
                              <li>• Warranty registration</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-accent-50 border-2 border-accent-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-primary-900 mb-3">📈 Factors That Affect Your Price</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-primary-700">
                        <p>• <strong>Roof size:</strong> Measured in "squares" (100 sq ft each)</p>
                        <p>• <strong>Roof pitch:</strong> Steeper = more labor and safety equipment</p>
                        <p>• <strong>Roof complexity:</strong> Multiple levels, valleys, chimneys add cost</p>
                        <p>• <strong>Decking condition:</strong> Rotten boards need replacement ($3-$5/sq ft)</p>
                        <p>• <strong>Number of layers:</strong> Multiple layers add disposal costs</p>
                        <p>• <strong>Access/terrain:</strong> Difficult access increases labor</p>
                        <p>• <strong>Material choice:</strong> Premium materials cost more upfront</p>
                        <p>• <strong>Permit fees:</strong> Varies by city ($100-$500 typically)</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* COMMERCIAL ROOFING SPECIFIC CONTENT */}
              {service.slug === 'commercial-roofing' && (
                <>
                  {/* Commercial Roofing Systems */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Commercial Roofing Systems We Install
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Commercial roofs face different challenges than residential—larger surface areas, foot traffic, HVAC equipment, and higher stakes if leaks occur. Here are the most common commercial roofing systems in Central Texas:
                    </p>
                    <div className="space-y-6">
                      {/* TPO Roofing */}
                      <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">🏢</span> TPO Roofing (Most Popular)
                        </h3>
                        <p className="text-primary-700 mb-4">
                          Thermoplastic Polyolefin—white reflective membrane ideal for Texas heat. Heat-welded seams create watertight barrier. Best combination of cost, energy efficiency, and durability for most commercial properties.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Cost</p>
                            <p className="text-primary-700">$5.50-$8.50 per sq ft</p>
                            <p className="text-xs text-primary-600">Installed, 5,000 sq ft roof</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Lifespan</p>
                            <p className="text-primary-700">20-30 years</p>
                            <p className="text-xs text-primary-600">Warranty: 15-20 years typical</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Best For</p>
                            <p className="text-primary-700">Most commercial buildings</p>
                            <p className="text-xs text-primary-600">Energy-conscious businesses</p>
                          </div>
                        </div>
                        <div className="bg-green-50 p-3 rounded mb-2">
                          <p className="text-sm text-green-900">
                            <strong>✓ Pros:</strong> Highly reflective (saves cooling costs), heat-welded seams (no leaks), resistant to punctures/tears, UV resistant, recyclable, Energy Star rated
                          </p>
                        </div>
                        <div className="bg-amber-50 p-3 rounded">
                          <p className="text-sm text-amber-900">
                            <strong>⚠ Cons:</strong> Can be punctured by sharp objects, seams require skilled installation, some formulations less flexible in cold (not issue in Texas)
                          </p>
                        </div>
                      </div>

                      {/* EPDM Roofing */}
                      <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">⚫</span> EPDM Roofing (Rubber Membrane)
                        </h3>
                        <p className="text-primary-700 mb-4">
                          Ethylene Propylene Diene Monomer—black rubber membrane, proven technology since 1960s. Extremely durable, easy to repair, cost-effective. Good choice for warehouses and industrial buildings.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Cost</p>
                            <p className="text-primary-700">$4.50-$7.00 per sq ft</p>
                            <p className="text-xs text-primary-600">Installed, 5,000 sq ft roof</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Lifespan</p>
                            <p className="text-primary-700">25-35 years</p>
                            <p className="text-xs text-primary-600">Warranty: 15-25 years typical</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Best For</p>
                            <p className="text-primary-700">Warehouses, industrial</p>
                            <p className="text-xs text-primary-600">Budget-conscious projects</p>
                          </div>
                        </div>
                        <div className="bg-green-50 p-3 rounded mb-2">
                          <p className="text-sm text-green-900">
                            <strong>✓ Pros:</strong> Most affordable option, very durable, easy to repair, resistant to ozone/UV, proven 50+ year track record, low maintenance
                          </p>
                        </div>
                        <div className="bg-amber-50 p-3 rounded">
                          <p className="text-sm text-amber-900">
                            <strong>⚠ Cons:</strong> Black color absorbs heat (higher cooling costs in Texas), seams are glued (can separate over time), less energy efficient than TPO/white membranes
                          </p>
                        </div>
                      </div>

                      {/* Modified Bitumen */}
                      <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">🔥</span> Modified Bitumen (Multi-Ply System)
                        </h3>
                        <p className="text-primary-700 mb-4">
                          Asphalt-based membrane reinforced with fiberglass or polyester. Multiple layers torch-applied or self-adhering. Excellent for high foot-traffic areas like rooftop HVAC access.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Cost</p>
                            <p className="text-primary-700">$5.00-$8.00 per sq ft</p>
                            <p className="text-xs text-primary-600">Installed, 5,000 sq ft roof</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Lifespan</p>
                            <p className="text-primary-700">15-25 years</p>
                            <p className="text-xs text-primary-600">Warranty: 10-20 years typical</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Best For</p>
                            <p className="text-primary-700">High foot-traffic roofs</p>
                            <p className="text-xs text-primary-600">Rooftop equipment access</p>
                          </div>
                        </div>
                        <div className="bg-green-50 p-3 rounded mb-2">
                          <p className="text-sm text-green-900">
                            <strong>✓ Pros:</strong> Very durable/puncture resistant, handles foot traffic well, good for repairs, multi-ply redundancy, granulated surface available (better UV protection)
                          </p>
                        </div>
                        <div className="bg-amber-50 p-3 rounded">
                          <p className="text-sm text-amber-900">
                            <strong>⚠ Cons:</strong> Torch application requires skilled installers, open-flame concerns during install, shorter lifespan than TPO/EPDM, less reflective (higher cooling costs)
                          </p>
                        </div>
                      </div>

                      {/* Metal Roofing */}
                      <div className="bg-white rounded-xl p-6 border-l-4 border-gray-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">🔩</span> Metal Roofing (Premium Longevity)
                        </h3>
                        <p className="text-primary-700 mb-4">
                          Standing seam metal panels or corrugated metal. Longest-lasting commercial option. Excellent for sloped commercial roofs, warehouses, agricultural buildings. Low maintenance, fire resistant.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Cost</p>
                            <p className="text-primary-700">$7.00-$12.00 per sq ft</p>
                            <p className="text-xs text-primary-600">Installed, standing seam</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Lifespan</p>
                            <p className="text-primary-700">40-60 years</p>
                            <p className="text-xs text-primary-600">Warranty: 25-40 years typical</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Best For</p>
                            <p className="text-primary-700">Long-term ownership</p>
                            <p className="text-xs text-primary-600">Sloped commercial roofs</p>
                          </div>
                        </div>
                        <div className="bg-green-50 p-3 rounded mb-2">
                          <p className="text-sm text-green-900">
                            <strong>✓ Pros:</strong> 40-60 year lifespan, minimal maintenance, fire resistant, highly reflective (energy efficient), increases property value, recyclable
                          </p>
                        </div>
                        <div className="bg-amber-50 p-3 rounded">
                          <p className="text-sm text-amber-900">
                            <strong>⚠ Cons:</strong> Higher upfront cost, limited for flat roofs (need minimum slope), can be noisy in hail, requires skilled installation, expansion/contraction considerations
                          </p>
                        </div>
                      </div>

                      {/* Roof Coatings */}
                      <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">🎨</span> Roof Coatings & Restoration
                        </h3>
                        <p className="text-primary-700 mb-4">
                          Liquid-applied coatings over existing roof. Extends life 10-15 years at fraction of replacement cost. Options: silicone, acrylic, urethane. Ideal for aging roofs not yet ready for replacement.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Cost</p>
                            <p className="text-primary-700">$2.50-$5.00 per sq ft</p>
                            <p className="text-xs text-primary-600">Applied over existing roof</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Extended Life</p>
                            <p className="text-primary-700">+10-15 years</p>
                            <p className="text-xs text-primary-600">Warranty: 10-15 years typical</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 mb-1">Best For</p>
                            <p className="text-primary-700">Budget-conscious restoration</p>
                            <p className="text-xs text-primary-600">Aging but sound roofs</p>
                          </div>
                        </div>
                        <div className="bg-green-50 p-3 rounded mb-2">
                          <p className="text-sm text-green-900">
                            <strong>✓ Pros:</strong> 40-60% less than replacement, extends roof life significantly, improves energy efficiency, minimal business disruption, environmentally friendly (no tear-off waste)
                          </p>
                        </div>
                        <div className="bg-amber-50 p-3 rounded">
                          <p className="text-sm text-amber-900">
                            <strong>⚠ Cons:</strong> Only works on structurally sound roofs, doesn't fix underlying issues, requires proper substrate preparation, periodic recoating may be needed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Property Types We Serve */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Commercial Property Types We Serve
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Every commercial property has unique roofing needs. We have experience with all property types and understand the specific challenges each faces:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-xl">🏬</span> Retail & Shopping Centers
                        </h3>
                        <p className="text-sm text-primary-700 mb-3">
                          Large flat roofs with HVAC equipment, signage penetrations, multiple tenants. We minimize disruption during business hours and coordinate with tenant needs.
                        </p>
                        <p className="text-xs text-primary-600">
                          <strong>Common systems:</strong> TPO, EPDM, modified bitumen
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-xl">🏢</span> Office Buildings
                        </h3>
                        <p className="text-sm text-primary-700 mb-3">
                          Professional appearance matters. Energy efficiency reduces operating costs. Multiple roof levels and rooftop equipment require expertise.
                        </p>
                        <p className="text-xs text-primary-600">
                          <strong>Common systems:</strong> TPO (white), metal, roof coatings
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-xl">📦</span> Warehouses & Distribution
                        </h3>
                        <p className="text-sm text-primary-700 mb-3">
                          Large square footage requires cost-effective solutions. Durability and minimal maintenance critical. Often have few roof penetrations (simpler projects).
                        </p>
                        <p className="text-xs text-primary-600">
                          <strong>Common systems:</strong> EPDM, TPO, metal
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-xl">🏭</span> Industrial & Manufacturing
                        </h3>
                        <p className="text-sm text-primary-700 mb-3">
                          Heavy rooftop equipment, chemical exposure, temperature extremes. Need durable systems that handle harsh conditions and maintain operations.
                        </p>
                        <p className="text-xs text-primary-600">
                          <strong>Common systems:</strong> Modified bitumen, TPO, metal
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-xl">🏘️</span> Multi-Family & Apartments
                        </h3>
                        <p className="text-sm text-primary-700 mb-3">
                          Tenant comfort is priority—leaks unacceptable. HOA/property management coordination. Budget constraints require cost-effective solutions.
                        </p>
                        <p className="text-xs text-primary-600">
                          <strong>Common systems:</strong> TPO, EPDM, shingles (pitched roofs)
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-xl">🍔</span> Restaurants & Hospitality
                        </h3>
                        <p className="text-sm text-primary-700 mb-3">
                          Heavy kitchen exhaust systems, grease considerations, 24/7 operations. Work must be done without closing business. Fast turnaround critical.
                        </p>
                        <p className="text-xs text-primary-600">
                          <strong>Common systems:</strong> TPO, modified bitumen, metal
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-xl">🏥</span> Medical & Professional
                        </h3>
                        <p className="text-sm text-primary-700 mb-3">
                          Patient/client comfort paramount—quiet, odorless work. After-hours scheduling often required. Code compliance critical for medical facilities.
                        </p>
                        <p className="text-xs text-primary-600">
                          <strong>Common systems:</strong> TPO, EPDM, roof coatings
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-xl">⛪</span> Churches & Nonprofits
                        </h3>
                        <p className="text-sm text-primary-700 mb-3">
                          Budget-conscious organizations need cost-effective solutions. Often have unique architectural features. Weekend scheduling to avoid services.
                        </p>
                        <p className="text-xs text-primary-600">
                          <strong>Common systems:</strong> Metal, TPO, shingles (pitched)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Preventative Maintenance Plans */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Preventative Maintenance Programs
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      <strong>Most commercial roof failures are preventable.</strong> Regular maintenance catches small issues before they become expensive emergencies, extends roof life by 5-10 years, and keeps warranties valid. Our maintenance programs pay for themselves many times over.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-white rounded-xl p-6 border-2 border-blue-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">Basic Plan</h3>
                        <p className="text-2xl font-bold text-accent-600 mb-1">$450-$800</p>
                        <p className="text-xs text-primary-600 mb-4">per visit, 2x per year</p>
                        <div className="space-y-2 text-sm text-primary-700 mb-4">
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Bi-annual inspections (spring/fall)</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Photo documentation report</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Drain cleaning and clearing</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Minor leak repairs (under $200)</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Preventative recommendations</span>
                          </p>
                        </div>
                        <p className="text-xs text-primary-600">
                          <strong>Best for:</strong> Small buildings (under 5,000 sq ft)
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-2 border-purple-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">Standard Plan</h3>
                        <p className="text-2xl font-bold text-accent-600 mb-1">$1,200-$2,000</p>
                        <p className="text-xs text-primary-600 mb-4">per year (quarterly visits)</p>
                        <div className="space-y-2 text-sm text-primary-700 mb-4">
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Quarterly inspections (4x per year)</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Detailed condition reports</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>All drainage maintenance</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Minor repairs included (up to $500/year)</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Priority emergency response</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>10% discount on major repairs</span>
                          </p>
                        </div>
                        <p className="text-xs text-primary-600">
                          <strong>Best for:</strong> Medium buildings (5,000-15,000 sq ft)
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-2 border-green-500">
                        <h3 className="text-xl font-bold text-primary-900 mb-3">Premium Plan</h3>
                        <p className="text-2xl font-bold text-accent-600 mb-1">$2,500-$5,000</p>
                        <p className="text-xs text-primary-600 mb-4">per year (monthly monitoring)</p>
                        <div className="space-y-2 text-sm text-primary-700 mb-4">
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Monthly monitoring visits</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Comprehensive documentation</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>All maintenance & minor repairs included</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Emergency response guarantee (2-4 hours)</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>15% discount on major repairs</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Extended warranty on all work</span>
                          </p>
                        </div>
                        <p className="text-xs text-primary-600">
                          <strong>Best for:</strong> Large buildings (15,000+ sq ft), critical facilities
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6">
                      <h3 className="text-lg font-bold text-primary-900 mb-4">💰 ROI of Preventative Maintenance</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary-700">
                        <div className="border-l-4 border-green-500 pl-4">
                          <p className="font-semibold text-green-700 mb-2">What You Save</p>
                          <ul className="space-y-1">
                            <li>• Emergency repair costs: $2,000-$10,000 per incident</li>
                            <li>• Interior damage: $5,000-$50,000+ (water, inventory, equipment)</li>
                            <li>• Business interruption: Lost revenue during repairs</li>
                            <li>• Premature replacement: Extend roof life 5-10 years ($30k-$100k+)</li>
                            <li>• Insurance claims: Avoid premium increases</li>
                          </ul>
                        </div>
                        <div className="border-l-4 border-accent-500 pl-4">
                          <p className="font-semibold text-primary-900 mb-2">What You Pay</p>
                          <ul className="space-y-1">
                            <li>• Bi-annual plan: $900-$1,600/year</li>
                            <li>• Quarterly plan: $1,200-$2,000/year</li>
                            <li>• Monthly plan: $2,500-$5,000/year</li>
                          </ul>
                          <p className="mt-3 font-semibold text-green-700">
                            Average ROI: 3:1 to 10:1 (every $1 spent saves $3-$10)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Commercial Roofing Pricing */}
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Commercial Roofing Cost Guide
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Commercial roofing costs vary significantly by system type, building size, existing conditions, and complexity. Here's what to expect in Central Texas:
                    </p>
                    <div className="bg-white rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-bold text-primary-900 mb-4">💰 Typical Commercial Roof Pricing (5,000 sq ft building)</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-primary-700"><strong>TPO Membrane</strong> (most popular)</span>
                          <span className="font-bold text-accent-600">$27,500-$42,500</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-primary-700"><strong>EPDM Rubber</strong> (budget-friendly)</span>
                          <span className="font-bold text-accent-600">$22,500-$35,000</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-primary-700"><strong>Modified Bitumen</strong> (durable)</span>
                          <span className="font-bold text-accent-600">$25,000-$40,000</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-primary-700"><strong>Metal Roofing</strong> (longest lasting)</span>
                          <span className="font-bold text-accent-600">$35,000-$60,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-primary-700"><strong>Roof Coating/Restoration</strong> (existing roof)</span>
                          <span className="font-bold text-accent-600">$12,500-$25,000</span>
                        </div>
                      </div>
                      <p className="text-xs text-primary-600 mt-4">
                        *Prices shown for typical 5,000 sq ft commercial roof in good condition. Actual costs vary by specific conditions.
                      </p>
                    </div>

                    <div className="bg-accent-50 border-2 border-accent-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-primary-900 mb-3">📊 Factors That Affect Commercial Roofing Costs</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-primary-700">
                        <p>• <strong>Square footage:</strong> Larger roofs = lower cost per sq ft (economies of scale)</p>
                        <p>• <strong>Roof height:</strong> Taller buildings increase labor costs (safety equipment, lifts)</p>
                        <p>• <strong>Existing roof removal:</strong> Tear-off and disposal adds $1-$3 per sq ft</p>
                        <p>• <strong>Roof condition:</strong> Decking/substrate repairs increase costs significantly</p>
                        <p>• <strong>Drainage systems:</strong> Drains, scuppers, gutters affect pricing</p>
                        <p>• <strong>Rooftop equipment:</strong> HVAC units, pipes, vents increase complexity</p>
                        <p>• <strong>Access limitations:</strong> Difficult access increases labor time</p>
                        <p>• <strong>Business hours:</strong> After-hours/weekend work adds 15-30% premium</p>
                        <p>• <strong>Permits & inspections:</strong> City requirements vary ($500-$2,000+)</p>
                        <p>• <strong>Warranty level:</strong> Extended warranties increase material costs</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Additional Content for Storm Damage Restoration */}
              {service.slug === 'storm-damage-restoration' && (
                <>
                  {/* Types of Storm Damage We Restore */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Types of Storm Damage We Restore in Central Texas
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Central Texas experiences severe weather including hailstorms, straight-line winds, tornadoes, and fallen trees. Our storm damage experts identify ALL damage—not just what's visible from the ground—to ensure you get maximum insurance coverage and complete restoration.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                        <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">🧊</span> Hail Damage (Most Common)
                        </h3>
                        <p className="text-sm text-primary-700 mb-4">
                          Central Texas experiences major hail events every 2-3 years. Hail sizes range from quarter-sized (cosmetic damage) to baseball-sized (catastrophic damage requiring immediate replacement).
                        </p>
                        <div className="space-y-2 text-xs text-primary-700">
                          <p><strong>What We Look For:</strong></p>
                          <ul className="list-disc ml-5 space-y-1">
                            <li>Circular or oval impact marks on shingles (bruising)</li>
                            <li>Loss of granules exposing black asphalt layer</li>
                            <li>Cracked or punctured shingles (larger hail)</li>
                            <li>Damage to roof vents, flashing, gutters, AC units</li>
                            <li>Dented or damaged metal components</li>
                            <li>Damage patterns consistent with hail trajectory</li>
                          </ul>
                          <p className="mt-3 bg-amber-100 p-2 rounded"><strong>Insurance Tip:</strong> Most insurance covers hail replacement if damage exceeds cosmetic thresholds (varies by policy). We document everything to maximize your claim.</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                        <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">💨</span> Wind Damage (Very Common)
                        </h3>
                        <p className="text-sm text-primary-700 mb-4">
                          Straight-line winds, microbursts, and tornadoes cause significant roofing damage. Wind speeds exceeding 50-60 mph can lift shingles, expose underlayment, and allow water intrusion.
                        </p>
                        <div className="space-y-2 text-xs text-primary-700">
                          <p><strong>What We Look For:</strong></p>
                          <ul className="list-disc ml-5 space-y-1">
                            <li>Missing shingles (blown off completely)</li>
                            <li>Lifted or creased shingles (wind got underneath)</li>
                            <li>Torn or damaged underlayment</li>
                            <li>Lifted or missing flashing around chimneys, vents</li>
                            <li>Damage to soffit, fascia, or siding</li>
                            <li>Directional patterns showing wind path</li>
                          </ul>
                          <p className="mt-3 bg-amber-100 p-2 rounded"><strong>Insurance Tip:</strong> Wind damage is covered by most policies. Document with photos showing wind direction and damage patterns. We provide comprehensive reports.</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                        <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">🌳</span> Fallen Trees & Debris
                        </h3>
                        <p className="text-sm text-primary-700 mb-4">
                          Tree limbs, entire trees, or flying debris can puncture roofs, crack decking, and cause immediate water intrusion requiring emergency response.
                        </p>
                        <div className="space-y-2 text-xs text-primary-700">
                          <p><strong>What We Look For:</strong></p>
                          <ul className="list-disc ml-5 space-y-1">
                            <li>Punctures or holes in roof surface</li>
                            <li>Structural damage to decking, trusses, rafters</li>
                            <li>Broken or displaced shingles around impact</li>
                            <li>Hidden damage beyond visible impact zone</li>
                            <li>Water intrusion and interior damage</li>
                            <li>Compromised roof integrity</li>
                          </ul>
                          <p className="mt-3 bg-amber-100 p-2 rounded"><strong>Insurance Tip:</strong> Tree damage is covered if tree fell due to weather (wind, lightning). Not covered if tree was dead/unhealthy and fell on its own. We document causation.</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
                        <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">⚡</span> Combined Storm Events
                        </h3>
                        <p className="text-sm text-primary-700 mb-4">
                          Many Central Texas storms bring multiple types of damage—hail + wind, falling debris + water intrusion. Comprehensive assessment is critical.
                        </p>
                        <div className="space-y-2 text-xs text-primary-700">
                          <p><strong>What We Look For:</strong></p>
                          <ul className="list-disc ml-5 space-y-1">
                            <li>Multiple damage types compounding issues</li>
                            <li>Hidden damage not visible from ground</li>
                            <li>Secondary damage from water intrusion</li>
                            <li>Compromised thermal/moisture barriers</li>
                            <li>Structural issues beyond surface damage</li>
                            <li>Long-term integrity concerns</li>
                          </ul>
                          <p className="mt-3 bg-amber-100 p-2 rounded"><strong>Insurance Tip:</strong> Multiple damage types = stronger claim. We document everything with drone footage, thermal imaging, and detailed reports to maximize your coverage.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Insurance Claims Process */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Our Insurance Claims Management Process
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Navigating insurance claims can be confusing and frustrating. We've managed over 2,000 storm damage claims and recovered millions in rightful coverage for Central Texas homeowners. We handle everything so you don't have to fight your insurance company alone.
                    </p>
                    <div className="space-y-6">
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-blue-600">1</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-primary-900 mb-2">Free Damage Assessment & Documentation</h3>
                            <p className="text-sm text-primary-700 mb-3">
                              We conduct a comprehensive roof inspection using drones for aerial documentation and thermal imaging to detect hidden moisture. We document every hail impact, missing shingle, wind damage, and structural issue with professional photos and detailed measurements. You receive a complete damage report with our expert opinion on repairability.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-xs text-primary-700">
                              <p><strong>What You Get:</strong> Professional inspection report • High-resolution photos and video • Drone aerial footage • Thermal imaging results • Detailed scope of work • Preliminary cost estimate</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-blue-600">2</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-primary-900 mb-2">File Your Claim & Schedule Adjuster</h3>
                            <p className="text-sm text-primary-700 mb-3">
                              We help you file your claim with your insurance company using proper terminology and documentation to maximize approval chances. We schedule the adjuster meeting and coordinate timing. You don't navigate confusing insurance processes alone—we guide you through every step and explain what to expect.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-xs text-primary-700">
                              <p><strong>Critical Timing:</strong> Most policies require claims within 1 year of storm date. File ASAP after storm events. We track storm dates and help meet deadlines.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-blue-600">3</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-primary-900 mb-2">Meet Adjuster On-Site & Advocate for You</h3>
                            <p className="text-sm text-primary-700 mb-3">
                              This is THE MOST IMPORTANT STEP. We meet the insurance adjuster on your roof and walk through ALL damage with them. Adjusters often miss damage or try to minimize scope to save their company money. We ensure nothing is overlooked. We point out every impact, every damaged area, and advocate for full replacement if warranted. You should ALWAYS have a roofing professional present during adjuster inspections.
                            </p>
                            <div className="bg-amber-50 p-3 rounded text-xs text-primary-700">
                              <p><strong>⚠ Warning:</strong> Never meet adjuster alone! Homeowners miss 60-70% of damage that professionals catch. Insurance companies know this and count on it to underpay claims.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-blue-600">4</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-primary-900 mb-2">Review Settlement & Fight for Fair Coverage</h3>
                            <p className="text-sm text-primary-700 mb-3">
                              Once the adjuster sends their estimate, we review it line-by-line against actual damage. If they underpaid, missed damage, or used incorrect pricing, we file a supplement (additional claim request) with detailed documentation showing what they missed. We negotiate on your behalf until you receive fair settlement. We've successfully supplemented thousands of claims for proper coverage.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-xs text-primary-700">
                              <p><strong>Common Underpayments We Catch:</strong> Missed square footage • Inadequate decking allowance • Missing code upgrades • Underpriced materials • Missing components (vents, flashing, etc.)</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-blue-600">5</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-primary-900 mb-2">Complete Restoration & Final Payment</h3>
                            <p className="text-sm text-primary-700 mb-3">
                              Once your claim is approved and you've received settlement (minus deductible), we schedule your restoration. We complete all work to manufacturer warranty standards, handle final inspections, and collect final insurance payment (recoverable depreciation) after work is verified. You pay only your deductible—insurance covers the rest.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-xs text-primary-700">
                              <p><strong>✓ You're Protected:</strong> 50-year manufacturer shingle warranty • Our 10-year workmanship warranty • Full code compliance • Professional installation • Complete peace of mind</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-accent-50 border-2 border-accent-300 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-primary-900 mb-3">💰 What Does Insurance Typically Cover?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary-700">
                        <div>
                          <p className="font-bold text-green-700 mb-2">✓ Usually Covered:</p>
                          <ul className="list-disc ml-5 space-y-1">
                            <li>Hail damage (bruising, granule loss)</li>
                            <li>Wind damage (missing/lifted shingles)</li>
                            <li>Tree damage from weather events</li>
                            <li>Full roof replacement if warranted</li>
                            <li>Damaged underlayment and decking</li>
                            <li>Damaged gutters, vents, flashing</li>
                            <li>Code compliance upgrades (if required)</li>
                            <li>Permits and disposal fees</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-red-700 mb-2">✗ Usually NOT Covered:</p>
                          <ul className="list-disc ml-5 space-y-1">
                            <li>Wear and tear from aging</li>
                            <li>Poor maintenance or neglect</li>
                            <li>Cosmetic damage (if policy excludes)</li>
                            <li>Pre-existing damage before storm</li>
                            <li>Upgrades beyond like-for-like</li>
                            <li>Secondary water damage (separate claim)</li>
                            <li>Your deductible amount</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-xs text-primary-600 mt-4">
                        <strong>Note:</strong> Coverage varies by policy. We review your specific policy and explain what's covered vs. what's out-of-pocket.
                      </p>
                    </div>
                  </div>

                  {/* Timeline & What to Expect */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Storm Damage Restoration Timeline
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      From emergency tarping to final restoration, here's what to expect during the storm damage restoration process. Timelines vary based on claim complexity and insurance responsiveness.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="bg-red-100 text-red-700 rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                              0-2<br/>hours
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary-900 mb-2">🚨 Emergency Response (If Needed)</h3>
                            <p className="text-sm text-primary-700">
                              If you have active leaks, exposed roof, or immediate dangers, we respond within 2 hours. Emergency tarping prevents interior water damage and secures your home. Available 24/7 for true emergencies. Most tarping completed in 2-4 hours.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                              1-3<br/>days
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary-900 mb-2">🔍 Damage Assessment & Documentation</h3>
                            <p className="text-sm text-primary-700">
                              We schedule your free inspection (usually within 24-48 hours of your call). Comprehensive assessment takes 1-2 hours including drone footage and thermal imaging. You receive detailed report within 24 hours with photos, measurements, and damage documentation.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="bg-purple-100 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                              1<br/>week
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary-900 mb-2">📋 File Claim & Schedule Adjuster</h3>
                            <p className="text-sm text-primary-700">
                              You call your insurance company to file the claim (we guide you on what to say). Insurance schedules adjuster within 3-7 days typically. We coordinate to meet adjuster on-site. Adjuster inspection takes 30-60 minutes with us present pointing out all damage.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-amber-500">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="bg-amber-100 text-amber-700 rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                              2-4<br/>weeks
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary-900 mb-2">⚖️ Settlement Review & Negotiation</h3>
                            <p className="text-sm text-primary-700">
                              Insurance sends initial settlement estimate (usually 7-14 days after inspection). We review for underpayments and file supplements if needed. Negotiation can take 1-3 weeks depending on complexity. Once agreed, you receive settlement check (minus deductible).
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                              1-3<br/>days
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary-900 mb-2">🛠️ Complete Restoration Work</h3>
                            <p className="text-sm text-primary-700">
                              Once claim approved and you've signed contract, we schedule your restoration (usually 1-3 weeks out depending on season). Most roof restorations completed in 1 day for asphalt shingles. Larger or complex roofs take 2-3 days. Metal roofing takes 3-7 days.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-500">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="bg-indigo-100 text-indigo-700 rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                              Final<br/>step
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary-900 mb-2">✅ Inspection & Final Payment</h3>
                            <p className="text-sm text-primary-700">
                              We conduct final quality inspection and cleanup. You verify work completion. We submit completion documentation to insurance for final payment (recoverable depreciation). Insurance sends final check typically within 1-2 weeks. Your roof is now fully restored with full warranty protection!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                      <p className="text-sm text-primary-700">
                        <strong>⏱️ Total Timeline:</strong> Emergency response to complete restoration typically takes 4-8 weeks depending on insurance responsiveness, claim complexity, and scheduling. We prioritize emergency situations and expedite whenever possible.
                      </p>
                    </div>
                  </div>

                  {/* Pricing & Insurance Coverage */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                      Storm Damage Restoration Pricing & What You Pay
                    </h2>
                    <p className="text-primary-700 mb-8 leading-relaxed">
                      Most storm damage restoration projects are covered by homeowners insurance (minus your deductible). Here's what to expect for costs and out-of-pocket expenses:
                    </p>

                    <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                      <h3 className="text-lg font-bold text-primary-900 mb-4">💵 Your Out-of-Pocket Cost (With Insurance)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-primary-700 mb-3">
                            If your claim is approved, you typically pay <strong>ONLY YOUR DEDUCTIBLE</strong>. Insurance covers the rest of restoration costs.
                          </p>
                          <div className="space-y-3">
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="font-bold text-primary-900 mb-1">Typical Deductible Amounts:</p>
                              <p className="text-sm text-primary-700">• <strong>$2,500-$5,000</strong> (most common flat deductibles)</p>
                              <p className="text-sm text-primary-700">• <strong>1% of dwelling coverage</strong> (percentage deductibles)</p>
                              <p className="text-sm text-primary-700">• <strong>2% of dwelling coverage</strong> (high-wind deductibles)</p>
                              <p className="text-xs text-primary-600 mt-2">Example: $300k dwelling with 1% deductible = $3,000 out-of-pocket</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <p className="font-bold text-primary-900 mb-1">✓ What Insurance Covers:</p>
                              <p className="text-sm text-primary-700">• Full roof replacement (if approved)</p>
                              <p className="text-sm text-primary-700">• Materials and labor</p>
                              <p className="text-sm text-primary-700">• Damaged decking/structure</p>
                              <p className="text-sm text-primary-700">• Gutters, vents, flashing</p>
                              <p className="text-sm text-primary-700">• Code compliance upgrades</p>
                              <p className="text-sm text-primary-700">• Permits and disposal</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-primary-700 mb-3">
                            <strong>Upgrade Opportunities:</strong> You can upgrade materials during restoration and pay the difference between insurance-covered "like-for-like" and your desired upgrade.
                          </p>
                          <div className="space-y-3">
                            <div className="bg-purple-50 p-4 rounded-lg">
                              <p className="font-bold text-primary-900 mb-1">Common Upgrade Costs (Your Additional Cost):</p>
                              <p className="text-sm text-primary-700">• <strong>Standard → Impact-Resistant Shingles:</strong> +$3,000-$5,000</p>
                              <p className="text-sm text-primary-700">• <strong>Standard → Architectural Premium:</strong> +$2,000-$4,000</p>
                              <p className="text-sm text-primary-700">• <strong>Shingles → Metal Roofing:</strong> +$10,000-$20,000</p>
                              <p className="text-sm text-primary-700">• <strong>Add Gutter Guards:</strong> +$1,500-$3,000</p>
                              <p className="text-sm text-primary-700">• <strong>Enhanced Ventilation:</strong> +$800-$1,500</p>
                              <p className="text-xs text-primary-600 mt-2">Note: Insurance covers base cost; you pay difference for upgrades</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg">
                              <p className="font-bold text-primary-900 mb-1">⚠ Additional Out-of-Pocket (Rare):</p>
                              <p className="text-sm text-primary-700">• Damage insurance deems pre-existing</p>
                              <p className="text-sm text-primary-700">• Wear/tear repairs not covered</p>
                              <p className="text-sm text-primary-700">• Cosmetic-only damage (if excluded)</p>
                              <p className="text-sm text-primary-700">• Decking beyond insurance allowance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                      <h3 className="text-lg font-bold text-primary-900 mb-4">🏠 Full Restoration Cost (If Paying Cash / No Insurance)</h3>
                      <p className="text-sm text-primary-700 mb-4">
                        If you choose not to file insurance claim or if damage isn't covered, here are typical cash costs for complete storm damage restoration:
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-primary-700"><strong>Standard Shingle Roof</strong> (2,500 sq ft home)</span>
                          <span className="font-bold text-accent-600">$10,500-$15,000</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-primary-700"><strong>Impact-Resistant Shingles</strong> (recommended)</span>
                          <span className="font-bold text-accent-600">$14,000-$20,000</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-primary-700"><strong>Architectural Premium Shingles</strong></span>
                          <span className="font-bold text-accent-600">$13,000-$18,000</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-primary-700"><strong>Metal Roofing</strong> (standing seam)</span>
                          <span className="font-bold text-accent-600">$24,000-$42,000</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-primary-700"><strong>Emergency Tarping</strong> (immediate protection)</span>
                          <span className="font-bold text-accent-600">$500-$1,500</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-primary-700"><strong>Extensive Decking Repairs</strong> (per damaged area)</span>
                          <span className="font-bold text-accent-600">+$1,500-$5,000</span>
                        </div>
                      </div>
                      <p className="text-xs text-primary-600 mt-4">
                        *Prices include complete restoration: tear-off, disposal, materials, labor, permits, cleanup. Actual cost depends on home size, roof complexity, extent of damage, and material choice.
                      </p>
                    </div>

                    <div className="bg-accent-50 border-2 border-accent-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-primary-900 mb-3">💡 Smart Money Tips for Storm Damage</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-primary-700">
                        <p>• <strong>Always file insurance claim first</strong> — even if you're unsure damage is covered</p>
                        <p>• <strong>Don't pay contractors upfront</strong> — you pay deductible only after work approved/completed</p>
                        <p>• <strong>Upgrade to impact-resistant</strong> — earn 10-35% annual insurance discounts</p>
                        <p>• <strong>Document everything</strong> — photos, videos, dates help maximize claim value</p>
                        <p>• <strong>Have professional at adjuster meeting</strong> — catches 60-70% more damage than homeowners alone</p>
                        <p>• <strong>Get multiple opinions</strong> — but choose experienced storm restoration specialists</p>
                        <p>• <strong>Review your policy annually</strong> — ensure adequate coverage and understand deductibles</p>
                        <p>• <strong>Ask about code upgrade coverage</strong> — some policies cover required improvements</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Service Areas */}
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-display font-bold mb-4">
                  Serving Central Texas Communities
                </h2>
                <p className="text-primary-100 mb-6">
                  We proudly provide {service.title.toLowerCase()} services throughout the Central Texas region, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: 'Round Rock', slug: 'round-rock' },
                    { name: 'Austin', slug: 'austin' },
                    { name: 'Georgetown', slug: 'georgetown' },
                    { name: 'San Antonio', slug: 'san-antonio' },
                    { name: 'Killeen', slug: 'killeen' },
                    { name: 'Copperas Cove', slug: 'copperas-cove' },
                    { name: 'Cedar Park', slug: 'cedar-park' },
                    { name: 'Pflugerville', slug: 'pflugerville' },
                    { name: 'Leander', slug: 'leander' },
                  ].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${city.slug}`}
                      className="flex items-center gap-2 hover:text-accent-300 transition-colors"
                    >
                      <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white">{city.name}</span>
                    </Link>
                  ))}
                </div>
                <p className="text-primary-200 text-sm mt-6">
                  Click any city to learn more about our {service.title.toLowerCase()} services in that area, including neighborhood-specific information and local project examples.
                </p>
              </div>

              {/* FAQ Section for SEO */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {service.slug === 'roof-replacement' ? (
                    <>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How much does a roof replacement cost in Central Texas?
                        </h3>
                        <p className="text-primary-600">
                          For an average 2,500 sq ft home in Round Rock, Austin, or Georgetown, expect $12,500-$21,000 for quality materials. 
                          Standard shingles run $10,500-$15,000, impact-resistant shingles $14,000-$20,000, and metal roofing $24,000-$42,000. 
                          Final cost depends on home size, roof complexity, material choice, and any decking repairs needed. We provide detailed, 
                          itemized estimates with no hidden fees.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How long does a roof replacement take?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Most asphalt shingle roofs are completed in just ONE DAY.</strong> Our experienced crews arrive early and work 
                          efficiently to tear off, install, and clean up—typically 7 AM to 6 PM. Larger homes or those with extensive decking repairs 
                          may take 1-2 days. Complex roofs with multiple valleys or steep pitches take 2-3 days. Metal roofing installations require 
                          3-7 days due to more precise installation. We'll provide a specific timeline after inspection. Weather can delay work, but 
                          we always protect your roof completely before leaving—you'll never be exposed overnight.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Should I get impact-resistant shingles in Central Texas?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Absolutely yes.</strong> Central Texas experiences major hail events every 2-3 years. Impact-resistant (Class 4) 
                          shingles provide maximum hail protection and earn you 10-35% annual insurance discounts. The upgrade typically costs 
                          $3,000-$5,000 extra but insurance savings recover this in 7-12 years. Plus you avoid future hail damage claims. In 
                          hail-prone areas like Round Rock, Georgetown, and Northwest Austin, impact-resistant is the smart financial choice.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Will my insurance cover roof replacement?
                        </h3>
                        <p className="text-primary-600">
                          Insurance covers replacement if your roof has documented storm damage (hail, wind) and you file within your policy timeframe 
                          (typically 1 year). You pay your deductible (usually $2,500-$5,000 or 1-2% of dwelling coverage) and insurance covers the rest. 
                          Age matters—some policies depreciate older roofs or have cosmetic damage exclusions. We provide free inspections after storms, 
                          help document damage, attend adjuster meetings, and assist with the claims process. Not all damage qualifies, but we'll give 
                          you honest assessment.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          What warranty do you offer?
                        </h3>
                        <p className="text-primary-600">
                          We provide two warranties: <strong>(1) Manufacturer warranty</strong> on materials (25-70 years depending on material chosen)—
                          this is registered with the manufacturer and covers defects. <strong>(2) Workmanship warranty</strong> on our installation 
                          (10 years)—this covers any leaks or issues from our work. As a CertainTeed Shingle Master, we also offer enhanced warranty 
                          options not available from standard contractors. All warranties are transferable if you sell your home, adding value.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Can I stay in my home during replacement?
                        </h3>
                        <p className="text-primary-600">
                          Yes, absolutely. Most homeowners stay during roof replacement. It's loud (expect hammering and equipment noise 7 AM - 5 PM), 
                          but you can remain inside. We recommend: moving cars from driveway, covering items in attic, keeping pets indoors, informing 
                          neighbors. We use tarps to protect landscaping and entry areas. If you work from home and need quiet, you may want to relocate 
                          for 1-2 days.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Do you offer financing for roof replacement?
                        </h3>
                        <p className="text-primary-600">
                          Yes! We offer flexible financing options including 0% interest for 12-18 months (with approved credit). We work with multiple 
                          lenders to find the best rates and terms for your situation. Applications are quick and approvals often same-day. We also accept 
                          major credit cards, checks, and cash. Payment typically structured as: deposit at signing, progress payment mid-project, 
                          final payment upon completion. <Link href="/financing" className="text-accent-600 hover:text-accent-700 font-semibold">Learn more about financing options →</Link>
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          When is the best time to replace my roof in Texas?
                        </h3>
                        <p className="text-primary-600">
                          Fall (October-November) and spring (March-April) offer ideal weather—mild temperatures and low rain probability. However, 
                          quality contractors work year-round. <strong>Don't wait if</strong>: you have active leaks, severe storm damage, or roof is 
                          past its lifespan. Summer heat is uncomfortable but doesn't affect quality. Winter is fine except rare ice storms. We work 
                          safely in all seasons. If you need replacement, sooner is better than risking water damage.
                        </p>
                      </div>
                    </>
                  ) : service.slug === 'roof-repairs' ? (
                    <>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How much does roof repair cost?
                        </h3>
                        <p className="text-primary-600">
                          Roof repair costs vary by issue type: <strong>Minor leak repairs: $300-$800</strong>, <strong>Shingle replacement (small section): $400-$1,200</strong>, <strong>Flashing repair: $400-$1,000</strong>, <strong>Emergency tarping: $200-$500</strong>, <strong>Major repairs: $1,500-$4,000</strong>. We provide upfront, itemized pricing with no hidden fees. If the repair cost exceeds 30-40% of replacement cost, we'll recommend replacement as the smarter investment.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How quickly can you repair my roof?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Most repairs are completed in 2-4 hours, same day.</strong> Minor leaks take 1-2 hours, shingle replacement 2-3 hours, flashing repairs 2-4 hours. For emergencies, we offer same-day response—often within 2-4 hours of your call. Larger repairs may take 1-2 days. We'll provide an accurate timeline after inspection based on the specific damage.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Will my insurance cover roof repairs?
                        </h3>
                        <p className="text-primary-600">
                          Insurance typically covers repairs if damage resulted from a covered event (storm, hail, wind, falling tree). Damage from wear-and-tear or lack of maintenance usually isn't covered. We provide <strong>free post-storm inspections</strong>, document damage with photos, help you understand your coverage, and work directly with insurance adjusters. Many repairs cost less than typical deductibles ($2,500-$5,000), so cash payment may make more sense.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Can you match my existing roof shingles?
                        </h3>
                        <p className="text-primary-600">
                          In most cases, yes! We work with all major manufacturers (CertainTeed, Owens Corning, GAF, Tamko) and have access to extensive color/style options. For newer roofs (less than 10-12 years), matching is usually straightforward. For older roofs, the manufacturer may have discontinued your exact shingle, but we can typically find a very close match. We bring samples during inspection so you can see the match quality before work begins.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Do you offer warranties on repairs?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Yes! Every repair comes with our 10-year workmanship warranty.</strong> This covers any issues with our installation or repair work. If the repaired area develops leaks or problems from our workmanship, we fix it at no charge. Materials also carry manufacturer warranties (typically 25-50 years depending on product used). This gives you complete peace of mind.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Should I repair or replace my roof?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Repair makes sense when:</strong> Damage is localized (less than 30% of roof), roof is under 10-15 years old, no structural damage, repair cost is less than 30-40% of replacement. <strong>Replacement is better when:</strong> Roof is 15-20+ years old, damage exceeds 30-40%, you've done multiple repairs recently, structural concerns exist, or insurance is covering the replacement. We'll give you an honest assessment and let you decide.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          What if I have an emergency leak?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Call us immediately at (512) 763-5277—we offer 24/7 emergency service.</strong> For active leaks, we provide emergency tarping within 2-4 hours to stop water damage. Tarping typically costs $200-$500 and protects your home until permanent repairs can be made (usually within 1-2 days). We also help you document damage for insurance claims and coordinate with adjusters if needed.
                        </p>
                      </div>
                    </>
                  ) : service.slug === 'roof-inspection' ? (
                    <>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How much does a roof inspection cost?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Post-storm inspections are FREE.</strong> Standard inspections cost <strong>$150-$300</strong> depending on home size and complexity. Pre-purchase inspections cost <strong>$200-$400</strong> and include insurance-acceptable reports with lifespan analysis. Most standard homes: $150-$200. If you book repairs based on our inspection, we credit the inspection fee toward the repair cost. Annual maintenance programs available at discounted rates ($99-$149).
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How long does a roof inspection take?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Most inspections are completed in 45-60 minutes.</strong> Simple roofs may take 30-45 minutes, while complex roofs with multiple levels, steep pitches, or extensive issues may take 60-90 minutes. We use drone photography for steep or hard-to-access areas, which speeds up the process. You receive your detailed photo report within 24 hours via email.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          What's included in your 50-point inspection?
                        </h3>
                        <p className="text-primary-600">
                          We examine <strong>every component</strong>: shingles (condition, age, damage), flashing (chimney, vents, valleys, skylights), structural components (decking, sagging, fascia, soffit), ventilation system (ridge vents, soffits, attic airflow), gutters & drainage, and interior indicators (attic inspection, water stains, mold). You get 20-40 high-res photos, condition ratings (1-10 scale), remaining lifespan estimates, repair priorities (immediate/near-term/monitor), and cost estimates.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Do I need an inspection before buying a home?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Absolutely yes—it's one of the best investments you can make.</strong> Our pre-purchase inspections reveal the roof's true condition, remaining lifespan, and repair costs before you close. Many buyers discover $5,000-$15,000 in needed repairs that weren't disclosed. This gives you powerful negotiating leverage or the option to walk away. Cost: $200-$400. Potential savings: thousands. We provide insurance-acceptable reports that satisfy lender requirements.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          When should I get my roof inspected?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Key times:</strong> (1) After major storms (FREE inspection), (2) When buying/selling a home, (3) Twice yearly for roofs 10+ years old (spring & fall), (4) Once yearly for newer roofs, (5) At age milestones (10, 15, 20 years), (6) If you see visible problems (leaks, missing shingles, sagging), (7) For insurance requirements. <Link href="/locations/round-rock" className="text-accent-600 hover:text-accent-700 font-semibold">Round Rock</Link>, <Link href="/locations/austin" className="text-accent-600 hover:text-accent-700 font-semibold">Austin</Link>, and <Link href="/locations/georgetown" className="text-accent-600 hover:text-accent-700 font-semibold">Georgetown</Link> get hail every 2-3 years—annual inspections recommended.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Can you help with insurance claims?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Yes! We provide complete insurance claim assistance.</strong> After storms, we offer FREE inspections, document all damage with detailed photos, help you understand your coverage, attend adjuster meetings with you, and ensure nothing is missed. Our reports are insurance-acceptable and include everything adjusters need. We've helped hundreds of homeowners successfully file claims. Most policies require claims within 1 year of damage—don't wait!
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Will you try to sell me a new roof I don't need?
                        </h3>
                        <p className="text-primary-600">
                          <strong>No—we believe in honest assessments, not pressure sales.</strong> If your roof is in good condition, we'll tell you that and recommend when to schedule your next inspection. If minor repairs are needed, we'll recommend repair over replacement (it's better for you and builds trust). If replacement is truly needed, we'll explain why with photos and data. Our goal is to be your trusted roofing partner for years, not make a quick sale.
                        </p>
                      </div>
                    </>
                  ) : service.slug === 'emergency-services' ? (
                    <>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Are you really available 24/7/365?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Yes—we answer our phone 24 hours a day, 7 days a week, 365 days a year.</strong> Call <strong>(512) 763-5277</strong> anytime and you'll speak with a real person (not voicemail). We typically arrive on-site within 2-4 hours across Central Texas. During severe storm events, response may take slightly longer, but we'll communicate your ETA clearly and keep you updated.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How much does emergency tarping cost?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Small areas (10x10-15x15): $250-$500.</strong> Medium areas (20x20-30x30): $500-$1,000. Large areas (30x30+): $1,000-$2,500. Complex/multi-level: $1,500-$3,500. After-hours, weekends, and holidays incur emergency rates (+25-75% depending on timing). <strong>Good news:</strong> Most insurance policies cover emergency tarping, and we credit tarping costs toward permanent repairs if you hire us for the final work!
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          What should I do while waiting for emergency service?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Safety first:</strong> Stay indoors, don't go on roof, avoid standing water near outlets. <strong>Contain damage:</strong> Place buckets under leaks, move valuables, use towels for water. <strong>Document:</strong> Take photos/videos of all damage, note date/time. <strong>Insurance:</strong> Call to report claim, get claim number, ask about emergency coverage. We'll help with complete documentation and insurance coordination when we arrive.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Will insurance cover emergency tarping?
                        </h3>
                        <p className="text-primary-600">
                          <strong>In most cases, yes—it's considered emergency mitigation to prevent further damage.</strong> Most policies cover "emergency services to protect property from additional damage." We provide detailed invoices for your insurance claim and can coordinate directly with your adjuster. Call your insurance company when damage occurs to confirm your coverage and get a claim number.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How long will the tarp last?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Our heavy-duty professional tarps last 3-6 months in Texas weather.</strong> We use commercial-grade tarps (not hardware store tarps) secured with proper techniques—not just nails that rip through. The tarp protects your home while we schedule permanent repairs (typically within 1-2 weeks). For insurance claims with delays, tarps can last several months while the claim processes.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Do you handle insurance claims and adjusters?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Yes—we provide complete insurance assistance.</strong> We document all damage with detailed photos, help you file the claim, attend adjuster meetings with you, ensure nothing is missed, and advocate for fair settlements. We've worked with thousands of insurance claims and know what adjusters look for. Having us there protects your interests and maximizes your settlement.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          What qualifies as a roofing emergency?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Call immediately for:</strong> Active water leaks, major storm damage with holes, trees fallen on roof, severe hail during storms, structural damage/sagging, or fire damage. <strong>Call same day for:</strong> Torn shingles with rain coming, flashing failure with seepage, sudden water stains after storms, loose gutters, wind damage to edges. <strong>When in doubt, call us at (512) 763-5277</strong>—we'll assess your situation for free over the phone.
                        </p>
                      </div>
                    </>
                  ) : service.slug === 'residential-roofing' ? (
                    <>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How much does a residential roof replacement cost?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Average home (1,800-2,200 sq ft): $7,000-$14,000 depending on material.</strong> Architectural shingles: $7k-$11k. Impact-resistant: $10k-$14k. Premium/designer: $12k-$16k. Metal: $18k-$28k. Tile: $25k-$40k. Price varies by home size, roof pitch/complexity, decking repairs, material choice, and number of layers. Most homes are 18-24 squares (1 square = 100 sq ft). Free detailed quote after inspection!
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          What's the best roofing material for Central Texas?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Impact-resistant (Class 4/IR) architectural shingles are the best balance</strong> for most Central Texas homeowners. They handle extreme heat, resist hail damage, earn 10-35% insurance discounts, last 30-50 years, and cost only $3k-$5k more than standard shingles. Insurance savings recover the upgrade cost in 7-12 years. Metal roofing lasts longer (40-70 years) but costs 2-3x more upfront. Standard shingles work if budget-constrained, but you'll face more hail claims.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How long does a residential roof last in Texas?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Depends on material and maintenance:</strong> Standard architectural shingles: 20-25 years. Impact-resistant shingles: 30-40 years. Metal roofing: 40-70 years. Tile roofing: 50-100 years. <strong>Texas factors that reduce lifespan:</strong> Intense UV exposure, extreme heat (140°F+ attic temps), frequent hail storms, high winds. Proper ventilation, annual inspections, and prompt repairs extend lifespan significantly. Most homes in <Link href="/locations/round-rock" className="text-accent-600 hover:text-accent-700 font-semibold">Round Rock</Link>, <Link href="/locations/austin" className="text-accent-600 hover:text-accent-700 font-semibold">Austin</Link>, and <Link href="/locations/georgetown" className="text-accent-600 hover:text-accent-700 font-semibold">Georgetown</Link> need replacement every 20-30 years.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Do I need to replace my roof or can it be repaired?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Repair if:</strong> Damage is localized (less than 30%), roof is under 15 years old, no structural issues, repair costs less than 30% of replacement. <strong>Replace if:</strong> Age 20+ years, damage exceeds 30-40%, multiple repairs recently, structural concerns (sagging, water damage), insurance covering replacement, or planning to sell soon (adds value). We provide honest assessment—if repairs work, we'll tell you. If replacement is needed, we explain why with photos.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How long does roof installation take?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Most residential roofs: 1-3 days.</strong> Simple gable roof (1,500-2,000 sq ft): 1 day. Average complexity (2,000-2,500 sq ft): 2 days. Complex/large (2,500-3,500+ sq ft): 2-3 days. <strong>Timeline breakdown:</strong> Day 1: Tear-off, decking repairs, underlayment, start shingles. Day 2: Complete shingles, flashing, ridge caps, cleanup. Weather delays possible. Metal/tile roofs take longer (3-5 days). Two-story homes add time. We work until dark to minimize exposure.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Will insurance cover my roof replacement?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Insurance covers replacement if damage from covered events</strong> (hail, wind, falling trees, fire). You pay deductible ($2,500-$5,000 or 1-2% of dwelling coverage), insurance covers rest. <strong>What's NOT covered:</strong> Age/wear-and-tear, poor maintenance, cosmetic damage only. <strong>Age matters:</strong> Some policies depreciate roofs over 10-15 years. We provide FREE post-storm inspections, document damage with photos, help file claims, attend adjuster meetings. We've helped thousands of homeowners successfully navigate claims.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          What warranty do you offer on residential roofing?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Dual warranty protection:</strong> (1) <strong>10-year workmanship warranty</strong> from Ripple Roofing—covers any installation defects, leaks from our work, or problems caused by our installation. (2) <strong>25-50 year material warranty</strong> from manufacturer (CertainTeed, Owens Corning, GAF)—covers defects in materials, premature failure, manufacturing issues. Impact-resistant shingles often have longer warranties (30-50 years). We register your warranty and provide copies. Proper maintenance required to keep warranties valid.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Can I stay in my home during roof replacement?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Yes, absolutely!</strong> Most homeowners stay during installation. <strong>What to expect:</strong> Noise (hammering, walking on roof) from 8 AM - 5 PM. Vibrations throughout house. Keep garage clear for equipment. Protect valuables from vibration (move photos, fragile items). Keep children and pets indoors. We work efficiently to minimize disruption. Bedrooms are usable but noisy during day. We'll notify you before starting each section. Kitchen, bathrooms fully functional throughout.
                        </p>
                      </div>
                    </>
                  ) : service.slug === 'gutter-installation' ? (
                    <>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How much does gutter installation cost?
                        </h3>
                        <p className="text-primary-600">
                          <strong>5-inch seamless gutters: $6-$11 per linear foot installed.</strong> 6-inch gutters: $8-$15 per foot. Most homes have 120-200 linear feet of gutters. <strong>Typical costs:</strong> Average home (150 ft): $900-$1,650. Large home (200 ft): $1,600-$2,400. Price depends on size (5" vs 6"), gauge (.027 vs .032), home height, fascia repairs, and gutter guards (optional $7-$15/ft extra). Old gutter removal included. Free on-site measurement and quote!
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Should I get seamless or sectional gutters?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Seamless gutters are STRONGLY recommended.</strong> They're custom-fabricated on-site with no seams except at corners—meaning virtually no leaks. Sectional gutters have seams every 10 feet that leak, separate, and clog over time. Seamless cost only $1-3 more per foot but last 20-25 years vs. 10-15 years for sectional. They look better, require less maintenance, and prevent expensive water damage. The small upfront difference pays for itself many times over.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Do I need 5-inch or 6-inch gutters?
                        </h3>
                        <p className="text-primary-600">
                          <strong>5-inch gutters work for 80% of homes</strong>—roof area up to 5,500 sq ft, handles 2-3 inches of rain per hour, proportional appearance. <strong>6-inch gutters needed for:</strong> Large roofs (5,500+ sq ft), steep roof pitches (8:12 or steeper), areas with torrential downpours. 6-inch costs $2-3 more per foot but prevents overflow on large roofs. We measure your roof and recommend the right size during free assessment—no guessing!
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Are gutter guards worth the cost?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Depends on your situation.</strong> Worth it if: You have many trees, two-story home (dangerous to clean), or clean gutters 3+ times per year. Guards cost $7-$15/ft but save $150-$300 per cleaning—break-even in 2-4 years. <strong>Skip guards if:</strong> Few trees nearby, single-story home (easy cleaning), or tight budget. Guards reduce maintenance but don't eliminate it—still need occasional cleaning every 2-3 years. We recommend micro-mesh guards ($10-$15/ft) for best performance.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How long does gutter installation take?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Most homes are completed in 1 day (6-8 hours).</strong> We bring our seamless gutter machine to your home and fabricate gutters on-site to exact measurements. <strong>Timeline:</strong> Small home (100-130 ft): 4-6 hours. Average home (130-180 ft): 6-8 hours. Large home (180-250 ft): 8-10 hours or 2 days. Two-story homes or complex rooflines may take longer. We remove old gutters, repair fascia if needed, install new seamless gutters, test drainage, and clean up—all in one visit!
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          What warranty do you offer on gutters?
                        </h3>
                        <p className="text-primary-600">
                          <strong>20-year material warranty</strong> on aluminum gutters (manufacturer warranty against defects, rust, cracking). <strong>10-year workmanship warranty</strong> on our installation (covers leaks, improper pitch, loose hangers). Hidden hanger system every 24 inches ensures gutters stay secure. We also offer optional annual maintenance programs ($99-$149) including cleaning, inspection, and minor repairs. Proper installation + quality materials = gutters that last 20-25 years.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Can you match my home's exterior color?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Yes! We offer 20+ color options</strong> including white, almond, brown, black, gray, bronze, copper, and custom colors. We bring samples to your appointment so you can see how colors look against your home in real lighting. <strong>Pro tip:</strong> Match your trim color (windows, fascia) rather than roof color for the most cohesive appearance. Most popular: White (classic), almond/beige (warm), and bronze (elegant). Color matching available for specialty homes.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          What happens to my old gutters?
                        </h3>
                        <p className="text-primary-600">
                          <strong>We remove and dispose of old gutters at no additional charge.</strong> Removal, haul-away, and disposal are included in installation price. If your fascia boards are damaged or rotted (common behind old gutters), we can repair or replace them: Minor repairs $150-$300, fascia replacement $8-$15/linear foot. We inspect fascia during free assessment and let you know what's needed before starting work.
                        </p>
                      </div>
                    </>
                  ) : service.slug === 'storm-damage-restoration' ? (
                    <>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How do I know if I have storm damage?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Schedule a free professional inspection—storm damage isn't always visible from the ground.</strong> Obvious signs: missing/lifted shingles, holes/punctures, dented gutters/vents, visible granule loss. <strong>Hidden signs professionals find:</strong> Hail bruising (circular impacts), cracked shingles from wind stress, compromised seals, damaged flashing, hidden moisture intrusion detected by thermal imaging. After any major storm (hail 1"+ diameter, winds 50+ mph, fallen trees), schedule inspection within 1-2 weeks. We provide free drone and thermal imaging assessment. <strong>Don't wait</strong>—most insurance requires claims within 1 year of storm date.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Will insurance cover my storm damage restoration?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Most likely YES if damage is storm-related and you file within policy timeframe (typically 1 year).</strong> Insurance typically covers: hail damage, wind damage (missing/lifted shingles), fallen tree damage from weather events, full roof replacement if damage is extensive, and damaged gutters/vents/flashing. You pay your deductible ($2,500-$5,000 typical or 1-2% of dwelling coverage); insurance covers the rest. <strong>Not covered:</strong> Wear and tear, pre-existing damage, cosmetic-only damage (if policy excludes), neglect/poor maintenance. We provide free assessment, document all damage, meet with adjusters, and fight for maximum coverage. We've recovered millions in rightful claims for <Link href="/locations/round-rock" className="text-accent-600 hover:text-accent-700 font-semibold">Round Rock</Link>, <Link href="/locations/austin" className="text-accent-600 hover:text-accent-700 font-semibold">Austin</Link>, and <Link href="/locations/georgetown" className="text-accent-600 hover:text-accent-700 font-semibold">Georgetown</Link> homeowners.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How long does the storm damage claims process take?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Typical timeline: 4-8 weeks from initial inspection to complete restoration.</strong> Breakdown: (1) <strong>Damage assessment:</strong> 1-3 days to schedule and complete inspection. (2) <strong>File claim:</strong> Same day you call insurance. (3) <strong>Adjuster meeting:</strong> 5-10 days after filing—we attend with you. (4) <strong>Settlement review:</strong> 7-14 days for initial estimate; 1-3 weeks if supplements needed. (5) <strong>Restoration work:</strong> 1-3 weeks to schedule; 1-3 days actual work for most roofs. <strong>Emergency situations get priority</strong>—we can tarp immediately (2-hour response) to prevent interior damage while claim processes. Weather and insurance responsiveness affect timeline. We expedite whenever possible.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How much will storm damage restoration cost me?
                        </h3>
                        <p className="text-primary-600">
                          <strong>With approved insurance claim: ONLY YOUR DEDUCTIBLE (typically $2,500-$5,000).</strong> Insurance covers everything else—materials, labor, permits, disposal, damaged decking, gutters, vents, flashing, and code compliance upgrades. <strong>Example:</strong> $18,000 roof replacement with $3,000 deductible = you pay $3,000; insurance pays $15,000. <strong>Upgrade opportunities:</strong> Want impact-resistant shingles or better materials? Pay the difference between insurance-covered base and your upgrade (+$3k-$5k typical). <strong>Without insurance:</strong> Full restoration $10,500-$42,000 depending on damage extent and materials chosen. Emergency tarping: $500-$1,500 if needed immediately. We provide detailed estimates and work with all insurance companies to maximize your coverage.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Should I meet the insurance adjuster alone or have you there?
                        </h3>
                        <p className="text-primary-600">
                          <strong>ALWAYS HAVE US THERE—this is absolutely critical!</strong> Homeowners miss 60-70% of damage that professional roofers identify. Insurance adjusters work for the insurance company (not you) and have incentive to minimize payouts. <strong>With us present:</strong> We point out ALL damage including hidden issues, document with professional expertise, advocate for full replacement if warranted, ensure proper scope and pricing, catch underpayments before they happen, and protect your interests. <strong>Without us:</strong> Adjusters often overlook damage, minimize scope to "repairs only," use inadequate pricing, or deny claims for "cosmetic damage." Meeting adjuster alone is the #1 mistake homeowners make. We attend at no charge and significantly increase claim approvals and payouts.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          What if my insurance company denies my claim?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Don't give up—many denials can be overturned with proper documentation.</strong> Common denial reasons: "cosmetic damage only," "pre-existing damage," "wear and tear," "not enough impacts," or "damage doesn't match storm date." <strong>Our approach:</strong> (1) Review denial letter and policy language. (2) Provide additional documentation (drone footage, thermal imaging, detailed reports). (3) Request re-inspection with different adjuster. (4) File supplement with comprehensive evidence. (5) Escalate to claims manager if needed. (6) Recommend public adjuster or attorney for complex disputes (we have referrals). We've successfully overturned hundreds of denials with proper documentation and persistence. Don't accept initial denial as final answer.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Can I upgrade my roof materials during storm restoration?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Yes! Storm damage restoration is the perfect opportunity for upgrades.</strong> Insurance covers "like-for-like" replacement (same material type and quality as damaged roof). <strong>Common upgrades and your additional cost:</strong> Standard → Impact-resistant shingles (+$3,000-$5,000)—earns 10-35% annual insurance discounts, pays for itself in 7-12 years. Standard → Architectural premium (+$2,000-$4,000)—better appearance and durability. Shingles → Metal roofing (+$10,000-$20,000)—lasts 50+ years vs 25 years. Add gutter guards (+$1,500-$3,000)—reduces maintenance. Enhanced ventilation (+$800-$1,500)—improves efficiency and shingle lifespan. You pay the price difference; insurance covers base cost. <strong>Smart investment</strong>—upgrading while you're already replacing is more cost-effective than doing separately later.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Do you offer emergency storm damage services?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Yes—24/7 emergency response for storm damage.</strong> Call <strong>(512) 763-5277</strong> anytime after severe weather. <strong>Emergency services:</strong> Emergency tarping (2-hour response typical) to prevent interior water damage ($500-$1,500 depending on size), temporary leak repairs, immediate damage assessment, tree/debris removal coordination, and emergency board-up if needed. <strong>After major storms</strong> affecting Round Rock, Austin, Georgetown, and Central Texas, we prioritize active emergencies (water intrusion, exposed roof) then schedule non-emergency inspections within 1-3 days. Don't wait if you have active damage—water intrusion causes exponential damage every hour. Emergency tarping often covered by insurance as part of restoration claim.
                        </p>
                      </div>
                    </>
                  ) : service.slug === 'commercial-roofing' ? (
                    <>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How much does commercial roofing cost?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Typical 5,000 sq ft commercial roof: $22,500-$60,000 depending on system.</strong> TPO: $27,500-$42,500 (most popular). EPDM: $22,500-$35,000 (budget-friendly). Modified Bitumen: $25,000-$40,000. Metal: $35,000-$60,000 (longest lasting). Roof coating/restoration: $12,500-$25,000 (over existing). Costs vary by square footage, roof height, existing condition, rooftop equipment, and after-hours scheduling needs. Free detailed proposal after inspection.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          What's the best commercial roofing system for Texas?
                        </h3>
                        <p className="text-primary-600">
                          <strong>TPO (white membrane) is best for most Texas commercial buildings.</strong> Highly reflective (saves cooling costs 15-25%), heat-welded seams (no leaks), handles extreme UV/heat, 20-30 year lifespan, Energy Star rated, and cost-effective ($5.50-$8.50/sq ft). EPDM works for warehouses on tight budgets. Metal roofing lasts 40-60 years but costs more upfront. Modified bitumen good for high foot-traffic roofs. Roof coatings excellent for budget-conscious restoration (40-60% less than replacement).
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How long does a commercial roof last?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Depends on system and maintenance:</strong> TPO: 20-30 years. EPDM: 25-35 years. Modified bitumen: 15-25 years. Metal: 40-60 years. <strong>Texas factors that affect lifespan:</strong> Intense UV exposure, extreme heat, ponding water (flat roofs), hail storms, lack of maintenance. <strong>Preventative maintenance extends life 5-10 years.</strong> Most commercial roofs in <Link href="/locations/round-rock" className="text-accent-600 hover:text-accent-700 font-semibold">Round Rock</Link>, <Link href="/locations/austin" className="text-accent-600 hover:text-accent-700 font-semibold">Austin</Link>, and <Link href="/locations/georgetown" className="text-accent-600 hover:text-accent-700 font-semibold">Georgetown</Link> need replacement every 20-30 years with proper care.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Can you work around our business hours?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Yes! We schedule to minimize business disruption.</strong> Options: After-hours installation (evenings/nights), weekend work, phased approach (section by section), or coordination with slow periods. We protect your operations, maintain safety, minimize noise/odors, and keep you updated daily. After-hours work adds 15-30% premium but avoids lost revenue. Most commercial projects: 3-10 days depending on size. Emergency repairs: 24/7 response available.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Do you offer preventative maintenance programs?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Yes—maintenance programs are our most valuable service!</strong> Plans include: Bi-annual inspections ($450-$800 per visit), quarterly monitoring ($1,200-$2,000/year), or monthly programs ($2,500-$5,000/year). Includes: inspections, drain cleaning, minor repairs, photo reports, priority emergency response, and discounts on major repairs. <strong>ROI: 3:1 to 10:1</strong>—every $1 spent saves $3-$10 in prevented damage. Extends roof life 5-10 years and catches issues before expensive emergencies.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Should I replace or restore my commercial roof?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Restore/coat if:</strong> Roof is structurally sound, minimal leaks, age 10-20 years, budget-conscious ($2.50-$5/sq ft vs $5-$12 for replacement), extends life 10-15 years. <strong>Replace if:</strong> Widespread deterioration, multiple leak areas, structural damage, age 25+ years, poor drainage causing ponding, or planning long-term ownership. Restoration costs 40-60% less than replacement but only works on sound roofs. We provide honest assessment—if coating won't work, we'll tell you why.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          What warranty do you offer on commercial roofing?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Dual warranty protection:</strong> (1) <strong>10-year workmanship warranty</strong> from Ripple Roofing—covers installation defects, leaks from our work, and problems caused by our installation. (2) <strong>10-30 year material warranty</strong> from manufacturer (varies by system)—TPO/EPDM typically 15-20 years, metal 25-40 years. We register your warranty and provide documentation. <strong>Important:</strong> Most warranties require regular maintenance (our programs keep warranties valid).
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6 bg-primary-50 p-6 rounded-r-xl">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Do you handle emergency commercial roof repairs?
                        </h3>
                        <p className="text-primary-600">
                          <strong>Yes—24/7 emergency response for commercial clients.</strong> Call <strong>(512) 763-5277</strong> anytime. Typical response: 2-4 hours during storms/emergencies. We provide emergency tarping ($500-$3,000 depending on size), temporary leak repairs, damage documentation for insurance, and permanent repair coordination. We understand commercial roof leaks affect operations, inventory, equipment, and revenue—we respond fast. Maintenance program clients get priority response and discounted emergency rates.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="border-l-4 border-accent-500 pl-6">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          How long does {service.title.toLowerCase()} typically take?
                        </h3>
                        <p className="text-primary-600">
                          The timeline varies depending on the scope of work, but most projects are completed within 1-3 days. 
                          We'll provide a detailed timeline during your free inspection.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Do you offer warranties on your work?
                        </h3>
                        <p className="text-primary-600">
                          Yes! As a CertainTeed Shingle Master certified contractor, we offer comprehensive warranties on both 
                          materials and workmanship. We'll discuss specific warranty options during your consultation.
                        </p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-6">
                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                          Is financing available?
                        </h3>
                        <p className="text-primary-600">
                          We offer flexible financing options to fit your budget. Contact us to discuss payment plans and 
                          financing solutions for your roofing project.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-accent-50 rounded-2xl p-8 border-2 border-accent-200">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-primary-700 mb-6">
                  Contact us today for a free inspection and detailed quote. Our team is ready to answer your questions 
                  and provide expert guidance for your roofing needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" href="tel:5127635277">
                    Call (512) 763-5277
                  </Button>
                  <Button variant="outline" size="lg" href="/contact">
                    Schedule Inspection
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar - Sticky Quote Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-accent-100">
                  <h3 className="text-2xl font-display font-bold text-primary-900 mb-2">
                    🎯 Get My FREE Inspection
                  </h3>
                  <p className="text-primary-600 text-sm mb-6">
                    <span className="font-semibold">$200 Value</span> • Same-day scheduling available
                  </p>
                  <QuoteForm />
                </div>

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-display font-bold mb-4">
                    Need Immediate Help?
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:5127635277"
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="text-xs text-primary-200">Call Now</div>
                        <div className="font-bold">(512) 763-5277</div>
                      </div>
                    </a>
                    <div className="text-sm text-primary-100">
                      <div className="font-bold mb-1">24/7 Emergency Service</div>
                      <div>Available day or night for urgent roofing needs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": service.title,
            "name": service.title,
            "description": service.description,
            "url": `https://rippleroofs.com/services/${service.slug}`,
            "image": `https://rippleroofs.com${service.image}`,
            "provider": {
              "@type": "RoofingContractor",
              "name": "Ripple Roofing & Construction",
              "telephone": "(512) 763-5277",
              "email": "info@rippleroofs.com",
              "url": "https://rippleroofs.com",
              "logo": "https://rippleroofs.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1000 Heritage Center Circle",
                "addressLocality": "Round Rock",
                "addressRegion": "TX",
                "postalCode": "78664",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.5088",
                "longitude": "-97.6789"
              },
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "267"
              }
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Round Rock",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Austin",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Georgetown",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Pflugerville",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Cedar Park",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              {
                "@type": "City",
                "name": "Leander",
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              }
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": `https://rippleroofs.com/services/${service.slug}`,
              "servicePhone": "(512) 763-5277"
            },
            "potentialAction": {
              "@type": "OrderAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://rippleroofs.com/contact",
                "inLanguage": "en-US",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              }
            }
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://rippleroofs.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://rippleroofs.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": service.title,
                "item": `https://rippleroofs.com/services/${service.slug}`
              }
            ]
          })
        }}
      />
    </main>
  )
}

export default ServicePage
