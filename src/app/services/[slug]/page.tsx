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
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#quote">
                Get Free Quote
              </Button>
              <Button variant="secondary" size="lg" href="tel:5127635277">
                Call (512) 763-5277
              </Button>
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
              <div className="text-3xl font-bold text-accent-600 mb-1">100%</div>
              <div className="text-sm text-primary-600">Certified & Insured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-1">Free</div>
              <div className="text-sm text-primary-600">Inspections & Quotes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-1">A+</div>
              <div className="text-sm text-primary-600">CertainTeed Certified</div>
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
                    Get Your Free Quote
                  </h3>
                  <p className="text-primary-600 text-sm mb-6">
                    Fill out the form below and we'll contact you within 24 hours.
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

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": service.title,
            "provider": {
              "@type": "RoofingContractor",
              "name": "Ripple Roofing & Construction",
              "telephone": "(512) 763-5277",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1000 Heritage Center Circle",
                "addressLocality": "Round Rock",
                "addressRegion": "TX",
                "postalCode": "78664",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              "Round Rock, TX",
              "Austin, TX",
              "Georgetown, TX",
              "San Antonio, TX",
              "Central Texas"
            ],
            "description": service.description,
          })
        }}
      />
    </main>
  )
}

export default ServicePage
