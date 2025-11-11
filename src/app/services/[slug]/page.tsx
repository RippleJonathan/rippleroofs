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
