import { FC } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { Button } from '@/components/ui/Button'
import { LocationFAQ } from '@/components/location/LocationFAQ'
import { LOCATIONS, type LocationData } from '@/lib/locations'
import { SERVICES, SITE_CONFIG } from '@/lib/constants'

interface LocationPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all locations
export async function generateStaticParams() {
  return LOCATIONS.map((location) => ({
    slug: location.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = LOCATIONS.find((l) => l.slug === params.slug)
  
  if (!location) {
    return {
      title: 'Location Not Found',
    }
  }

  const title = `Roofing Company in ${location.city}, ${location.state} | Ripple Roofing`
  const description = `Premier roofing services in ${location.city}, ${location.state}. Serving ${location.neighborhoods.slice(0, 3).join(', ')} and surrounding areas. CertainTeed certified. Call ${SITE_CONFIG.phone} for free inspection.`

  return {
    title,
    description,
    keywords: `${location.city} roofer, roofing company ${location.city} ${location.state}, roof repair ${location.city}, roof replacement ${location.city}, ${location.city} roofing contractor`,
    openGraph: {
      title,
      description,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://rippleroofs.com/locations/${params.slug}`
    }
  }
}

const LocationPage: FC<LocationPageProps> = ({ params }) => {
  const location = LOCATIONS.find((l) => l.slug === params.slug)

  if (!location) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-primary-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={location.heroImage || "/images/hero/hero-bg.jpg"}
            alt={`Roofing services in ${location.city}, ${location.state}`}
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
              📍 {location.city}, {location.state}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              {location.city}'s Trusted Roofing Company
            </h1>
            <p className="text-xl text-primary-100 mb-4">
              Premium roofing services for {location.neighborhoods[0]}, {location.neighborhoods[1]}, 
              and all {location.city} neighborhoods
            </p>
            <p className="text-lg text-primary-200 mb-8">
              CertainTeed Shingle Master Certified • Certified & Insured • 24/7 Emergency Service
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="primary" size="lg" href="#quote">
                🎯 Schedule FREE Inspection Today
              </Button>
              <Button variant="secondary" size="lg" href={`tel:${SITE_CONFIG.phoneRaw}`}>
                📞 Call {SITE_CONFIG.phone}
              </Button>
            </div>
            {/* Quick Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-200">
              <span>⭐ 4.9/5 Stars</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ CertainTeed Master</span>
              <span className="hidden sm:inline">•</span>
              <span>🛡️ Fully Insured</span>
              <span className="hidden sm:inline">•</span>
              <span>🚀 Same-Day Available</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">{location.population}</div>
              <div className="text-sm text-white/90">Residents Served</div>
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
              <div className="text-3xl font-bold mb-1">$200</div>
              <div className="text-sm text-white/90">FREE Inspection Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">A+</div>
              <div className="text-sm text-white/90">CertainTeed Certified</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Location */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Professional Roofing Services in {location.city}
                </h2>
                <div className="prose prose-lg max-w-none text-primary-700">
                  <p>
                    {location.description}
                  </p>
                  <p className="mt-4">
                    At Ripple Roofing & Construction, we understand the unique challenges that {location.city} 
                    homeowners and businesses face. {location.weatherNote} That's why we use only premium materials 
                    and employ CertainTeed certified installation techniques to ensure your roof stands up to 
                    whatever nature throws at it.
                  </p>
                  <p className="mt-4">
                    Whether you're in {location.neighborhoods[0]}, {location.neighborhoods[1]}, or anywhere else 
                    in {location.city}, our team is ready to provide fast, reliable service with transparent 
                    pricing and exceptional craftsmanship.
                  </p>
                </div>
              </div>

              {/* Services We Offer */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">
                  Our {location.city} Roofing Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SERVICES.slice(0, 6).map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group p-6 bg-primary-50 rounded-xl hover:bg-accent-50 transition-all hover:shadow-lg"
                    >
                      <div className="text-3xl mb-3">{service.icon}</div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-primary-600 text-sm mb-3 line-clamp-2">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center text-accent-600 font-medium text-sm">
                        Learn More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Neighborhoods We Serve */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  {location.city} Neighborhoods We Serve
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {location.neighborhoods.map((neighborhood) => (
                    <div key={neighborhood} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-900 font-medium">{neighborhood}</span>
                    </div>
                  ))}
                </div>
                <p className="text-primary-600 mt-6 text-sm">
                  Don't see your neighborhood? We serve all of {location.city} and surrounding {location.county} areas!
                </p>
              </div>

              {/* Why Choose Us */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">
                  Why {location.city} Homeowners Choose Us
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
                      <h3 className="text-xl font-bold text-primary-900 mb-2">Local Expertise</h3>
                      <p className="text-primary-600">
                        We're based right here in Central Texas and understand {location.city}'s unique climate 
                        challenges. We know {location.landmarks[0]}, {location.landmarks[1]}, and every neighborhood 
                        in between.
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
                      <h3 className="text-xl font-bold text-primary-900 mb-2">Fast Response Times</h3>
                      <p className="text-primary-600">
                        When storm damage strikes in {location.city}, we respond quickly. Our 24/7 emergency 
                        service means we're there when you need us most, day or night.
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
                      <h3 className="text-xl font-bold text-primary-900 mb-2">CertainTeed Certified</h3>
                      <p className="text-primary-600">
                        Our Shingle Master certification means you get premium quality installation and access to 
                        enhanced warranty coverage. We're one of the few certified contractors serving {location.city}.
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
                      <h3 className="text-xl font-bold text-primary-900 mb-2">Transparent Pricing</h3>
                      <p className="text-primary-600">
                        No hidden fees or surprise charges. We provide detailed, itemized quotes for every 
                        {location.city} project so you know exactly what to expect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local Weather Info */}
              <div className="bg-primary-900 text-white rounded-2xl p-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  Roofing in {location.city}'s Climate
                </h2>
                <p className="text-primary-100 leading-relaxed">
                  {location.weatherNote} Our team has extensive experience protecting {location.city} properties 
                  from these conditions. We recommend regular inspections—especially after severe weather—and use 
                  only materials rated for Texas's demanding climate.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quote Form */}
                <div id="quote" className="bg-white rounded-2xl shadow-xl p-6 border-2 border-accent-100">
                  <h3 className="text-2xl font-display font-bold text-primary-900 mb-2">
                    🎯 Schedule FREE {location.city} Inspection
                  </h3>
                  <p className="text-primary-600 text-sm mb-6">
                    <span className="font-semibold">$200 Value</span> • Same-day appointments available
                  </p>
                  <QuoteForm prefillAddress={`${location.city}, TX`} />
                </div>

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-display font-bold mb-4">
                    Call Us Today
                  </h3>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors mb-4"
                  >
                    <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="text-xs text-primary-200">Phone</div>
                      <div className="font-bold text-lg">{SITE_CONFIG.phone}</div>
                    </div>
                  </a>
                  <div className="text-sm text-primary-100 space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>24/7 Emergency Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Serving All of {location.city}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location-Specific Deep Content - Round Rock */}
          {location.slug === 'round-rock' && (
            <div className="mt-16 space-y-12">
              {/* Round Rock Neighborhoods Deep Dive */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Round Rock Neighborhoods: Roofing Considerations & Costs
                </h2>
                <p className="text-primary-700 mb-8 leading-relaxed">
                  Round Rock's diverse neighborhoods each have unique architectural styles, HOA requirements, and roofing challenges. Here's what homeowners in each major area should know about roofing:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">🏘️ Teravista & Walsh Ranch</h3>
                    <p className="text-sm text-primary-700 mb-3">
                      <strong>Built:</strong> 2000s-2020s • <strong>Style:</strong> Contemporary ranch & two-story homes<br />
                      <strong>Common Roof Type:</strong> Architectural shingles, some tile accents
                    </p>
                    <div className="bg-blue-50 p-3 rounded mb-3">
                      <p className="text-xs text-primary-700"><strong>HOA Considerations:</strong> Strict color matching required. Pre-approval needed for roof replacement. Many HOAs require impact-resistant shingles (Class 4 rated).</p>
                    </div>
                    <div className="space-y-2 text-sm text-primary-700">
                      <p><strong>Common Issues:</strong> Hail damage from severe storms, wind uplift on two-story homes, attic ventilation inadequacy in summer heat</p>
                      <p><strong>Best Materials:</strong> GAF Timberline HDZ or CertainTeed Landmark Pro (impact-resistant) in Weathered Wood, Driftwood, or Pewter Gray</p>
                      <p><strong>Typical Cost:</strong> $14,000-$22,000 for 2,500-3,500 sq ft homes</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">🏡 Heritage Center & Stone Oak</h3>
                    <p className="text-sm text-primary-700 mb-3">
                      <strong>Built:</strong> 1980s-1990s • <strong>Style:</strong> Traditional suburban ranch<br />
                      <strong>Common Roof Type:</strong> 3-tab and architectural shingles
                    </p>
                    <div className="bg-amber-50 p-3 rounded mb-3">
                      <p className="text-xs text-primary-700"><strong>Aging Roof Alert:</strong> Many homes in these established neighborhoods are approaching roof replacement age (25-30 years). Look for curling shingles, granule loss, and water stains in attic.</p>
                    </div>
                    <div className="space-y-2 text-sm text-primary-700">
                      <p><strong>Common Issues:</strong> Original roofs nearing end of life, outdated ventilation, tree damage from mature oaks, decking deterioration</p>
                      <p><strong>Best Materials:</strong> Upgrade to impact-resistant architectural shingles (CertainTeed Landmark Pro or GAF Timberline HDZ) for better durability and insurance discounts</p>
                      <p><strong>Typical Cost:</strong> $12,000-$18,000 for 1,800-2,500 sq ft homes (budget extra $2k-$4k for decking repairs on older roofs)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">🌳 Forest Creek & Brushy Creek</h3>
                    <p className="text-sm text-primary-700 mb-3">
                      <strong>Built:</strong> 1990s-2000s • <strong>Style:</strong> Mix of ranch and two-story<br />
                      <strong>Common Roof Type:</strong> Architectural shingles
                    </p>
                    <div className="bg-green-50 p-3 rounded mb-3">
                      <p className="text-xs text-primary-700"><strong>Tree Considerations:</strong> Heavy tree coverage means more debris, moss growth potential, and risk of branch damage. Regular roof cleaning recommended every 2-3 years.</p>
                    </div>
                    <div className="space-y-2 text-sm text-primary-700">
                      <p><strong>Common Issues:</strong> Tree debris accumulation, algae/moss growth on shaded roofs, gutters clogging with leaves, branch damage during storms</p>
                      <p><strong>Best Materials:</strong> Algae-resistant shingles (CertainTeed StreakFighter or GAF StainGuard) in darker colors to hide staining. Consider gutter guards.</p>
                      <p><strong>Typical Cost:</strong> $13,000-$20,000 for 2,200-3,000 sq ft homes (add $1,500-$3,000 for gutter guards)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">🏘️ University Oaks & Cat Hollow</h3>
                    <p className="text-sm text-primary-700 mb-3">
                      <strong>Built:</strong> 1990s-2010s • <strong>Style:</strong> Family-oriented subdivisions<br />
                      <strong>Common Roof Type:</strong> Architectural shingles, varied complexity
                    </p>
                    <div className="bg-purple-50 p-3 rounded mb-3">
                      <p className="text-xs text-primary-700"><strong>Complexity Note:</strong> Many homes feature complex roof lines with multiple valleys, dormers, and hip/gable combinations increasing installation complexity and cost per square foot.</p>
                    </div>
                    <div className="space-y-2 text-sm text-primary-700">
                      <p><strong>Common Issues:</strong> Valley deterioration (high water flow), flashing failures around dormers, ice dam potential on north-facing slopes</p>
                      <p><strong>Best Materials:</strong> Premium architectural shingles with enhanced algae resistance. Ensure proper ice/water shield installation in valleys.</p>
                      <p><strong>Typical Cost:</strong> $15,000-$24,000 for 2,500-3,500 sq ft homes (complex roofs add 15-25% vs simple gable roofs)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">🆕 Sonoma & Paloma Lake</h3>
                    <p className="text-sm text-primary-700 mb-3">
                      <strong>Built:</strong> 2010s-2020s • <strong>Style:</strong> Modern suburban<br />
                      <strong>Common Roof Type:</strong> High-performance architectural shingles
                    </p>
                    <div className="bg-green-50 p-3 rounded mb-3">
                      <p className="text-xs text-primary-700"><strong>Good News:</strong> Most roofs still under builder warranty (10-20 years material). Check your warranty status before paying for repairs—many covered at no cost!</p>
                    </div>
                    <div className="space-y-2 text-sm text-primary-700">
                      <p><strong>Common Issues:</strong> Storm damage (newer roofs not yet weathered), builder-grade installation quality varies, warranty claim navigation</p>
                      <p><strong>Best Approach:</strong> For storm damage, file insurance claim. For defects, contact builder warranty department first. We can inspect and document for both.</p>
                      <p><strong>Future Cost:</strong> $16,000-$25,000 for 2,800-4,000 sq ft homes</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">🏙️ Downtown Round Rock</h3>
                    <p className="text-sm text-primary-700 mb-3">
                      <strong>Built:</strong> 1900s-1980s • <strong>Style:</strong> Historic homes<br />
                      <strong>Common Roof Type:</strong> Mix of composition shingles, some metal
                    </p>
                    <div className="bg-amber-50 p-3 rounded mb-3">
                      <p className="text-xs text-primary-700"><strong>Historic Considerations:</strong> Some homes have historic designation requiring specific materials/colors. Check with City of Round Rock Historic Preservation before roof replacement.</p>
                    </div>
                    <div className="space-y-2 text-sm text-primary-700">
                      <p><strong>Common Issues:</strong> Outdated ventilation systems, undersized attic space, structural issues from age</p>
                      <p><strong>Best Materials:</strong> Architectural shingles in traditional colors (Charcoal, Weathered Wood), or metal roofing for historic authenticity</p>
                      <p><strong>Typical Cost:</strong> $10,000-$18,000 (potential structural work adds $2k-$8k)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Round Rock Storm History */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Round Rock Storm History & Hail Damage Patterns
                </h2>
                <p className="text-primary-700 mb-8 leading-relaxed">
                  Round Rock sits in "Hail Alley"—a corridor of Central Texas experiencing frequent severe hailstorms. Understanding local storm patterns helps homeowners make informed roofing decisions and recognize when to file insurance claims.
                </p>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-red-700 mb-3">🌩️ Major Storm Events (2015-2025)</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <p className="font-bold text-primary-900">March 2024 Hailstorm</p>
                        <p className="text-sm text-primary-700">Baseball-sized hail (2.5-3") across Teravista, Walsh Ranch, and northeast Round Rock. Thousands of roofs damaged. Many homeowners received full roof replacements through insurance.</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="font-bold text-primary-900">May 2022 Hail Event</p>
                        <p className="text-sm text-primary-700">Golf ball-sized hail (1.75-2") impacted Forest Creek, Brushy Creek, and Heritage Center. Significant shingle damage, dented gutters, damaged AC units.</p>
                      </div>
                      <div className="border-l-4 border-amber-500 pl-4">
                        <p className="font-bold text-primary-900">April 2021 Severe Storms</p>
                        <p className="text-sm text-primary-700">Quarter to golf ball hail throughout Round Rock. Straight-line winds 60-70 mph caused additional wind damage, fallen trees, and power outages.</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <p className="font-bold text-primary-900">March 2016 Hailstorm</p>
                        <p className="text-sm text-primary-700">One of the worst hail events in Round Rock history. Tennis ball-sized hail (2.5-3") across entire city. Estimated $1+ billion in damages across Central Texas.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-primary-900 mb-4">📊 Round Rock Hail Frequency & Patterns</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm font-bold text-primary-900 mb-2">Peak Hail Season</p>
                        <div className="space-y-2 text-sm text-primary-700">
                          <p>• <strong>March-May:</strong> 70% of annual hail events</p>
                          <p>• <strong>April:</strong> Highest risk month (peak severe weather)</p>
                          <p>• <strong>Late evening (7pm-11pm):</strong> Most common timing</p>
                          <p>• <strong>Northeast Round Rock:</strong> Slightly higher frequency due to storm patterns</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary-900 mb-2">Hail Size Probabilities (Annual)</p>
                        <div className="space-y-2 text-sm text-primary-700">
                          <p>• <strong>Pea-sized (0.25"):</strong> 3-5 times per year (minor damage)</p>
                          <p>• <strong>Quarter-sized (1"):</strong> 1-2 times per year (moderate damage)</p>
                          <p>• <strong>Golf ball (1.75"):</strong> Every 2-3 years (major damage)</p>
                          <p>• <strong>Baseball (2.75"+):</strong> Every 5-8 years (catastrophic damage)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">🛡️ Protecting Your Round Rock Roof from Hail</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary-700">
                      <div>
                        <p className="font-bold text-primary-900 mb-2">Before Storms:</p>
                        <ul className="list-disc ml-5 space-y-1">
                          <li>Install Class 4 impact-resistant shingles (UL 2218 rated)</li>
                          <li>Trim trees near roof to prevent branch damage</li>
                          <li>Ensure adequate homeowners insurance coverage</li>
                          <li>Document roof condition with photos annually</li>
                          <li>Know your deductible amount and policy details</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900 mb-2">After Storms:</p>
                        <ul className="list-disc ml-5 space-y-1">
                          <li>Schedule free inspection within 1-2 weeks</li>
                          <li>Document damage with photos/video</li>
                          <li>File insurance claim if damage found</li>
                          <li>Have professional present at adjuster meeting</li>
                          <li>Don't wait—most policies require claims within 1 year</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Roofing Materials for Round Rock */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Best Roofing Materials for Round Rock's Climate
                </h2>
                <p className="text-primary-700 mb-8 leading-relaxed">
                  Round Rock's extreme heat, frequent hail, high UV exposure, and occasional ice require roofing materials engineered for Texas conditions. Here's what works best:
                </p>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary-900">🏆 #1 Recommendation: Impact-Resistant Architectural Shingles</h3>
                        <p className="text-sm text-green-700 font-semibold">Best overall value for Round Rock homeowners</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm font-bold text-primary-900 mb-2">Top Products:</p>
                        <div className="space-y-2 text-sm text-primary-700">
                          <p>• <strong>CertainTeed Landmark Pro:</strong> Class 4 impact rating, 50-year warranty, excellent hail protection, $14,000-$20,000 installed</p>
                          <p>• <strong>GAF Timberline HDZ:</strong> Class 4 rated, LayerLock technology, industry-leading warranty, $14,500-$21,000 installed</p>
                          <p>• <strong>Owens Corning Duration Storm:</strong> SureNail technology, Class 4 impact, 130 mph wind rating, $15,000-$21,500 installed</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary-900 mb-2">Why This Is Best for Round Rock:</p>
                        <div className="space-y-1 text-sm text-primary-700">
                          <p>✓ Class 4 impact rating = maximum hail protection</p>
                          <p>✓ 10-35% insurance discounts (ROI in 7-12 years)</p>
                          <p>✓ Withstands baseball-sized hail impacts</p>
                          <p>✓ 130 mph wind ratings (exceeds Texas requirements)</p>
                          <p>✓ Heat-resistant for 100°F+ summer temps</p>
                          <p>✓ 50-year warranties vs 25-year standard shingles</p>
                          <p>✓ Available in 20+ colors for HOA compliance</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-green-50 p-4 rounded">
                      <p className="text-sm text-primary-700">
                        <strong>💰 Insurance Savings Example:</strong> $300k home with $2,500 annual premium × 15% discount = $375/year savings × 15 years = $5,625 total savings. Impact-resistant upgrade costs $3,000-$5,000 extra—<strong>pays for itself!</strong>
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">🥈 Runner-Up: Metal Roofing (Standing Seam)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-primary-700 mb-3">
                          Premium option with 50+ year lifespan. Excellent for hail, heat, and energy efficiency. Higher upfront cost but lowest lifetime cost.
                        </p>
                        <p className="text-sm font-bold text-primary-900 mb-2">Best For:</p>
                        <ul className="list-disc ml-5 text-sm text-primary-700 space-y-1">
                          <li>Long-term homeowners (15+ years)</li>
                          <li>Modern/contemporary home styles</li>
                          <li>Homeowners prioritizing energy savings</li>
                          <li>Properties with high tree coverage (no staining)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary-900 mb-2">Round Rock Considerations:</p>
                        <div className="space-y-1 text-sm text-primary-700">
                          <p>• <strong>Cost:</strong> $24,000-$42,000 (2.5-3× shingles)</p>
                          <p>• <strong>Lifespan:</strong> 50-70 years (last roof you'll need)</p>
                          <p>• <strong>Energy Savings:</strong> 15-25% cooling cost reduction</p>
                          <p>• <strong>Hail Resistance:</strong> Excellent (may dent but won't puncture)</p>
                          <p>• <strong>HOA Approval:</strong> Many Round Rock HOAs restrict metal roofing</p>
                          <p>• <strong>Insurance Discounts:</strong> 5-15% (less than Class 4 shingles)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">⚠️ Materials to AVOID in Round Rock</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-4 rounded">
                        <p className="font-bold text-red-700 mb-2">❌ Standard 3-Tab Shingles</p>
                        <p className="text-sm text-primary-700">
                          <strong>Why avoid:</strong> No hail protection, 15-20 year lifespan in Texas heat, no insurance discounts, frequent damage claims. Only $1,000-$2,000 cheaper than architectural but costs more long-term.
                        </p>
                      </div>
                      <div className="bg-red-50 p-4 rounded">
                        <p className="font-bold text-red-700 mb-2">❌ Concrete/Clay Tile (Usually)</p>
                        <p className="text-sm text-primary-700">
                          <strong>Why avoid:</strong> Very heavy (may require $3k-$5k structural reinforcement), expensive ($30k-$50k+), individual tiles break from hail, limited contractors, lengthy repairs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent-50 border-2 border-accent-300 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">🎨 Popular Roof Colors in Round Rock (HOA-Approved)</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-primary-700">
                      <div>
                        <p className="font-bold text-primary-900">Weathered Wood</p>
                        <p className="text-xs">Warm brown-gray, complements brick, most popular</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900">Driftwood</p>
                        <p className="text-xs">Light tan-gray, modern look, heat-reflective</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900">Pewter Gray</p>
                        <p className="text-xs">Neutral gray, versatile, hides dirt well</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900">Georgetown Gray</p>
                        <p className="text-xs">Medium gray, classic, HOA-favorite</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900">Charcoal</p>
                        <p className="text-xs">Dark gray, bold statement, hides stains</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900">Mission Brown</p>
                        <p className="text-xs">Traditional brown, timeless, earth-tone</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900">Colonial Slate</p>
                        <p className="text-xs">Blue-gray blend, upscale look</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900">Oyster Gray</p>
                        <p className="text-xs">Light neutral, coastal feel, popular in newer developments</p>
                      </div>
                    </div>
                    <p className="text-xs text-primary-600 mt-4">
                      <strong>HOA Tip:</strong> Always bring shingle samples to HOA for pre-approval. Some neighborhoods have specific approved color lists.
                    </p>
                  </div>
                </div>
              </div>

              {/* Round Rock Roofing Costs */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Round Rock Roof Replacement Costs by Home Size
                </h2>
                <p className="text-primary-700 mb-8 leading-relaxed">
                  Transparent pricing for Round Rock homeowners. Costs vary by home size, roof complexity, material choice, and any decking repairs needed. These ranges reflect typical Round Rock projects completed by Ripple Roofing.
                </p>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-primary-900 mb-4">💵 Cost by Home Size (Impact-Resistant Architectural Shingles)</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-primary-900">1,500-2,000 sq ft Home</p>
                            <p className="text-sm text-primary-700">Typical: 3-bed/2-bath ranch, simple gable roof, 18-22 squares</p>
                          </div>
                          <p className="text-xl font-bold text-accent-600">$10,500-$15,000</p>
                        </div>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-primary-900">2,000-2,500 sq ft Home</p>
                            <p className="text-sm text-primary-700">Typical: 3-4 bed/2-3 bath, hip or gable roof, 22-28 squares</p>
                          </div>
                          <p className="text-xl font-bold text-accent-600">$14,000-$20,000</p>
                        </div>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-primary-900">2,500-3,000 sq ft Home</p>
                            <p className="text-sm text-primary-700">Typical: 4-bed/3-bath two-story, moderate complexity, 28-35 squares</p>
                          </div>
                          <p className="text-xl font-bold text-accent-600">$17,000-$24,000</p>
                        </div>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-primary-900">3,000-4,000 sq ft Home</p>
                            <p className="text-sm text-primary-700">Typical: 4-5 bed/3-4 bath two-story, complex roof, 35-45 squares</p>
                          </div>
                          <p className="text-xl font-bold text-accent-600">$21,000-$32,000</p>
                        </div>
                      </div>
                      <div className="border-l-4 border-amber-500 pl-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-primary-900">4,000+ sq ft Home</p>
                            <p className="text-sm text-primary-700">Typical: Luxury homes, highly complex roofs, 45+ squares</p>
                          </div>
                          <p className="text-xl font-bold text-accent-600">$30,000-$50,000+</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-primary-600 mt-4">
                      *Prices include: complete tear-off, disposal, underlayment, ice/water shield, shingle installation, flashing, vents, cleanup, and permits. Does not include decking repairs (if needed).
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-primary-900 mb-4">📊 Cost Factors That Affect Round Rock Roof Pricing</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary-700">
                      <div>
                        <p className="font-bold text-primary-900 mb-2">Increases Cost:</p>
                        <ul className="list-disc ml-5 space-y-1">
                          <li><strong>Steep pitch (8:12 or steeper):</strong> +15-25% for safety equipment and labor</li>
                          <li><strong>Complex roof (multiple valleys, dormers):</strong> +15-30% more material waste and labor</li>
                          <li><strong>Multiple stories (3+ stories):</strong> +20-35% for equipment and safety</li>
                          <li><strong>Decking repairs:</strong> +$75-$150 per sheet replaced ($1,500-$4,000 typical)</li>
                          <li><strong>Premium materials (metal roofing):</strong> +100-200% vs shingles</li>
                          <li><strong>Extensive tree coverage:</strong> +$300-$800 for extra cleanup/protection</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900 mb-2">Decreases Cost:</p>
                        <ul className="list-disc ml-5 space-y-1">
                          <li><strong>Simple gable roof:</strong> Baseline pricing, minimal waste</li>
                          <li><strong>Low pitch (3:12-5:12):</strong> Easier access, faster installation</li>
                          <li><strong>Single story:</strong> Reduced safety requirements</li>
                          <li><strong>Good decking condition:</strong> No repair costs</li>
                          <li><strong>Insurance claim:</strong> You pay deductible only ($2,500-$5,000 typical)</li>
                          <li><strong>Referral discounts:</strong> Ask about our referral program</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">💡 Ways to Save on Round Rock Roof Replacement</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-primary-700">
                      <p>• <strong>File insurance claim after storms</strong> — pay deductible only vs full cost</p>
                      <p>• <strong>Get impact-resistant shingles</strong> — insurance discounts recover upgrade cost in 7-12 years</p>
                      <p>• <strong>Bundle with gutters</strong> — save 10-15% doing roof + gutters together</p>
                      <p>• <strong>Schedule in fall/winter</strong> — spring/summer is peak season with higher demand</p>
                      <p>• <strong>Ask about financing</strong> — 0% interest for 12-18 months (approved credit)</p>
                      <p>• <strong>Maintain regularly</strong> — extend roof life 5-10 years with proper maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Austin-specific deep content */}
          {location.slug === 'austin' && (
            <div className="space-y-16 mt-16">
              {/* Austin Neighborhoods Deep Dive */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Austin Neighborhoods: Your Complete Roofing Guide by Area
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Austin's diverse neighborhoods—from historic Hyde Park to luxury Westlake Hills—each have unique roofing considerations. Here's what homeowners need to know about roofing in Austin's most popular areas:
                </p>

                <div className="space-y-8">
                  {/* Downtown Austin & High-Rises */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Downtown Austin & Urban Core</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Building Types:</p>
                        <p className="mb-3">Mostly condos, townhomes, and commercial buildings. Flat roofs, modified bitumen, TPO, and EPDM dominate. Limited single-family homes with traditional pitched roofs.</p>
                        <p className="font-semibold text-primary-900 mb-2">Common Roofing Issues:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Flat roof ponding and drainage problems</li>
                          <li>Urban heat island effect (roofs 15-20°F hotter)</li>
                          <li>AC unit vibration damage on flat roofs</li>
                          <li>Limited access for repairs and replacements</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Best Solutions:</p>
                        <p className="mb-3">TPO or PVC for flat roofs (reflective, energy-efficient). Metal standing seam for townhomes. Regular drainage maintenance critical.</p>
                        <p className="font-semibold text-primary-900 mb-2">Typical Costs:</p>
                        <p className="text-accent-600 font-bold text-xl">$15,000-$35,000</p>
                        <p className="text-sm">(Varies widely by building type and access)</p>
                      </div>
                    </div>
                  </div>

                  {/* South Congress & East Austin */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">South Congress (SoCo) & East Austin</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Build Era & Style:</p>
                        <p className="mb-3">1920s-1950s bungalows and cottages being renovated alongside new modern builds. Mix of historic and contemporary architecture. Many homes being flipped or renovated.</p>
                        <p className="font-semibold text-primary-900 mb-2">Common Issues:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Aging roofs (30-40 years old) on original homes</li>
                          <li>Historic district regulations in some areas</li>
                          <li>Decking rot from old leaks</li>
                          <li>Large trees causing debris and moisture</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Best Materials:</p>
                        <p className="mb-3">Architectural shingles (designer colors for curb appeal). Metal roofing popular on renovations. Impact-resistant for hail protection.</p>
                        <p className="font-semibold text-primary-900 mb-2">Typical Costs:</p>
                        <p className="text-accent-600 font-bold text-xl">$12,000-$22,000</p>
                        <p className="text-sm">Plus $2,000-$5,000 for decking repairs (common on older homes)</p>
                      </div>
                    </div>
                  </div>

                  {/* Hyde Park & North Loop */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Hyde Park, North Loop & Allandale</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Character & Age:</p>
                        <p className="mb-3">Historic neighborhoods with 1920s-1940s homes near UT campus. Mature tree canopy, charming architecture, strong neighborhood character. Many homes on historic register.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Considerations:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Historic preservation requirements (some streets)</li>
                          <li>Extensive tree coverage = algae and moss growth</li>
                          <li>Smaller homes but complex roof lines</li>
                          <li>Original decking often needs replacement</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Recommended Materials:</p>
                        <p className="mb-3">Architectural shingles in traditional colors (to match neighborhood character). Algae-resistant shingles essential. Metal on some renovations if approved.</p>
                        <p className="font-semibold text-primary-900 mb-2">Investment Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$14,000-$25,000</p>
                        <p className="text-sm">Higher costs due to tree management and historic considerations</p>
                      </div>
                    </div>
                  </div>

                  {/* Westlake Hills & Tarrytown */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Westlake Hills, Tarrytown & Luxury Areas</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Premium Market:</p>
                        <p className="mb-3">Austin's most exclusive neighborhoods with luxury homes ranging from $1M-$10M+. Large homes (4,000-8,000+ sq ft), complex architecture, premium materials expected.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Characteristics:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Extremely complex roof lines with multiple levels</li>
                          <li>Premium materials: designer shingles, slate, tile, copper</li>
                          <li>Strict HOA architectural guidelines</li>
                          <li>Lake views requiring precise color matching</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Top Material Choices:</p>
                        <p className="mb-3">CertainTeed Grand Manor (luxury shingles). Standing seam metal in charcoal or copper. Concrete tile on Mediterranean styles. All Class 4 impact-rated.</p>
                        <p className="font-semibold text-primary-900 mb-2">Luxury Home Investment:</p>
                        <p className="text-accent-600 font-bold text-xl">$40,000-$100,000+</p>
                        <p className="text-sm">Premium materials, complex architecture, high-end finishes</p>
                      </div>
                    </div>
                  </div>

                  {/* Mueller & New Developments */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Mueller, Domain Area & New Developments</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Modern Development:</p>
                        <p className="mb-3">Built 2000s-present with modern construction standards. Energy-efficient designs, planned communities, strong HOAs, mixed residential-commercial.</p>
                        <p className="font-semibold text-primary-900 mb-2">New Construction Roofing:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Most homes still under builder warranty (10-20 years)</li>
                          <li>Modern shingles with good ratings installed</li>
                          <li>Proper ventilation and modern techniques used</li>
                          <li>First replacements coming up (2025-2035)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">When Replacement Needed:</p>
                        <p className="mb-3">Impact-resistant architectural shingles. Metal roofing for modern aesthetics. Ensure HOA color approval before ordering.</p>
                        <p className="font-semibold text-primary-900 mb-2">Future Costs (2025-2035):</p>
                        <p className="text-accent-600 font-bold text-xl">$18,000-$32,000</p>
                        <p className="text-sm">These homes typically 2,500-3,500 sq ft with moderate complexity</p>
                      </div>
                    </div>
                  </div>

                  {/* Zilker & Central Austin */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Zilker, Barton Hills & Central Austin</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Neighborhood Vibe:</p>
                        <p className="mb-3">Mid-century homes (1950s-1970s) near Zilker Park and Barton Springs. Mix of original owners and young professionals renovating. High property values despite older homes.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Challenges:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Original roofs 40-50+ years old (past life expectancy)</li>
                          <li>Ranch-style simple roof lines (lower cost)</li>
                          <li>Flash flooding in low-lying areas</li>
                          <li>Mature trees providing shade but dropping debris</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Smart Choices:</p>
                        <p className="mb-3">Architectural shingles in earth tones. Algae-resistant essential. Impact-resistant for hail protection and insurance discounts. Good ventilation for Texas heat.</p>
                        <p className="font-semibold text-primary-900 mb-2">Typical Investment:</p>
                        <p className="text-accent-600 font-bold text-xl">$15,000-$24,000</p>
                        <p className="text-sm">Ranch homes = simpler roofs = lower costs</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-primary-900 font-semibold mb-2">💡 Austin Roofing Pro Tip:</p>
                  <p className="text-primary-700">
                    Austin's diverse neighborhoods mean roofing costs and requirements vary significantly. Historic districts may require approval, luxury areas demand premium materials, and newer developments have HOA restrictions. We help you navigate these requirements while getting the best roof for your specific Austin location. <strong>Schedule a free inspection to get a detailed quote for your neighborhood.</strong>
                  </p>
                </div>
              </div>

              {/* Austin Storm History & Hail Damage Patterns */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Austin Storm History: What Every Homeowner Should Know
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Austin sits in "Hail Alley"—experiencing severe storms with large hail regularly. Understanding Austin's storm patterns helps you protect your investment and know when to file insurance claims.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">🌩️</span> Major Austin Hailstorms (2015-2025)
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-600 pl-4">
                        <p className="font-bold text-primary-900">March 2024 - Widespread Damage Event</p>
                        <p className="text-sm text-primary-700">Golf ball to baseball-sized hail across North Austin, Pflugerville, and Round Rock. Downtown and Central Austin received quarter to golf ball hail. <strong>Estimated $300M+ in insured losses.</strong> Thousands of roofs damaged.</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="font-bold text-primary-900">May 2022 - South Austin Storm</p>
                        <p className="text-sm text-primary-700">Severe storms brought golf ball hail to South Austin, Zilker, and Barton Hills. Wind gusts to 70 mph caused additional damage. Widespread power outages. Many roofs totaled.</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <p className="font-bold text-primary-900">April 2021 - Cedar Park to Georgetown</p>
                        <p className="text-sm text-primary-700">Supercell storm tracked from Cedar Park through Round Rock to Georgetown. Baseball-sized hail in some areas. Over $200M in property damage including roofs, vehicles, windows.</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <p className="font-bold text-primary-900">March 2016 - $1.4 Billion Catastrophic Event</p>
                        <p className="text-sm text-primary-700">One of Texas' costliest hailstorms ever. Softball-sized hail in some areas. Entire neighborhoods needed roof replacements. This storm changed insurance rates across Austin metro.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">📊</span> Austin Hail Frequency & Patterns
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Peak Hail Season: March - May</p>
                        <p className="text-sm text-primary-700 mb-2">75% of Austin's damaging hail events occur during spring months when warm, moist Gulf air collides with cold fronts from the north.</p>
                        <div className="bg-primary-50 p-3 rounded">
                          <p className="text-xs font-semibold text-primary-900 mb-1">Monthly Risk:</p>
                          <p className="text-xs text-primary-700">March: 25% • April: 30% • May: 20% • June-Feb: 25%</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Geographic Hot Spots in Austin:</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• <strong>North Austin</strong> (Domain, Arboretum) - Highest hail frequency</li>
                          <li>• <strong>Round Rock corridor</strong> - Storm tracks commonly pass through</li>
                          <li>• <strong>East Austin</strong> - Moderate frequency, wind damage also common</li>
                          <li>• <strong>South Austin</strong> - Lower frequency but not immune</li>
                          <li>• <strong>West Austin/Hills</strong> - Elevation provides some protection</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Expected Hail Frequency:</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Pea-sized (1/4") - Minor damage</span>
                            <span className="font-bold text-primary-900">4-6x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Quarter-sized (1") - Noticeable</span>
                            <span className="font-bold text-primary-900">2-3x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Golf ball (1.75") - Significant damage</span>
                            <span className="font-bold text-accent-600">Every 2-3 years</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Baseball (2.75") - Severe damage</span>
                            <span className="font-bold text-red-600">Every 5-8 years</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">Protecting Your Austin Home from Storm Damage</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-primary-900 mb-2">✅ Before Storm Season:</p>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• Install Class 4 impact-resistant shingles (10-35% insurance discount)</li>
                        <li>• Trim tree branches within 10 feet of your roof</li>
                        <li>• Document your roof's condition with photos (for future claims)</li>
                        <li>• Review your homeowner's insurance policy and deductible</li>
                        <li>• Sign up for severe weather alerts on your phone</li>
                        <li>• Keep Ripple Roofing's number saved: (512) 763-5277</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900 mb-2">⚠️ After a Hailstorm:</p>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• Inspect for damage within 1-2 weeks (visible bruising appears gradually)</li>
                        <li>• Document any damage with photos from ground level</li>
                        <li>• Call us for a FREE professional inspection - we climb up and assess</li>
                        <li>• File insurance claim if damage found (we help with this process)</li>
                        <li>• Have a professional present at adjuster meeting (crucial for proper scope)</li>
                        <li>• Don't wait - most policies require claims within 1 year of storm</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Roofing Materials for Austin */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Best Roofing Materials for Austin Homes
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Austin's extreme heat, frequent hail, and intense UV exposure require specific roofing materials. Here's what performs best in our climate:
                </p>

                <div className="space-y-6">
                  {/* #1 Recommendation */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-500">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl">🏆</span>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-900">#1 Recommendation: Impact-Resistant Architectural Shingles</h3>
                        <p className="text-accent-600 font-semibold">Best Value + Hail Protection for Austin Homeowners</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Top Product: CertainTeed Landmark Pro IR</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 impact rating (highest)</li>
                          <li>• Withstands baseball-sized hail</li>
                          <li>• 130 mph wind resistance</li>
                          <li>• Cool Roof Technology reflects heat</li>
                          <li>• 50-year warranty</li>
                          <li>• 20+ designer colors</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$14,500-$21,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft home)</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Runner-up: GAF Timberline HDZ IR</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 impact rating</li>
                          <li>• LayerLock technology</li>
                          <li>• 130 mph wind warranty</li>
                          <li>• Excellent heat resistance</li>
                          <li>• 50-year limited warranty</li>
                          <li>• Wide color selection</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$15,000-$22,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft home)</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Premium: Owens Corning Duration Storm</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 UL 2218 rated</li>
                          <li>• SureNail Technology</li>
                          <li>• 130 mph wind resistance</li>
                          <li>• TruDefinition color</li>
                          <li>• 50-year non-prorated warranty</li>
                          <li>• Austin's most popular colors</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$15,500-$23,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft home)</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                      <p className="font-bold text-primary-900 mb-2">💰 Why Impact-Resistant Shingles Are Worth It in Austin:</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-700">
                        <div>
                          <p className="font-semibold text-primary-900 mb-1">Insurance Savings:</p>
                          <ul className="space-y-1">
                            <li>• 10-35% discount on homeowner's insurance</li>
                            <li>• Average Austin home insurance: $3,500/year</li>
                            <li>• 15% discount = $525/year savings</li>
                            <li>• Over 20 years = $10,500 total savings</li>
                            <li>• Upgrade cost over standard: $3,000-$5,000</li>
                            <li>• <strong>ROI: Pays for itself in 6-10 years!</strong></li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-900 mb-1">Additional Benefits:</p>
                          <ul className="space-y-1">
                            <li>• Survives hailstorms that total standard roofs</li>
                            <li>• Better heat reflection = lower cooling costs</li>
                            <li>• Longer lifespan (50 years vs 20-25 years)</li>
                            <li>• Higher home resale value</li>
                            <li>• Peace of mind during storm season</li>
                            <li>• Required by some Austin-area HOAs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metal Roofing Option */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-600">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Runner-Up: Standing Seam Metal Roofing</h3>
                    <p className="text-primary-700 mb-4">Popular in Austin for modern homes, commercial buildings, and eco-conscious homeowners.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">✅ Pros for Austin Climate:</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• <strong>Exceptional hail resistance</strong> - dents but doesn't puncture</li>
                          <li>• <strong>50-70 year lifespan</strong> - longest-lasting option</li>
                          <li>• <strong>Reflects heat</strong> - 20-30% cooling cost savings</li>
                          <li>• Fire-resistant (important for wildfires near Austin)</li>
                          <li>• Environmentally friendly (100% recyclable)</li>
                          <li>• Modern aesthetic popular in Mueller, East Austin</li>
                          <li>• Withstands 140+ mph winds</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-4 text-xl">$25,000-$45,000</p>
                        <p className="text-sm text-primary-600">(2,000 sq ft home, standing seam installation)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">⚠️ Considerations:</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Higher upfront cost (2-3x architectural shingles)</li>
                          <li>• Some HOAs restrict metal roofing (especially in luxury neighborhoods)</li>
                          <li>• Can be noisy during heavy rain/hail (usually not an issue with proper insulation)</li>
                          <li>• Limited color options vs shingles</li>
                          <li>• Requires specialized installation expertise</li>
                          <li>• Not ideal for complex roof lines (installation challenges)</li>
                        </ul>
                        <p className="font-semibold text-primary-900 mt-4 mb-1">Best For:</p>
                        <p className="text-sm text-primary-700">Modern homes, simple roof lines, eco-conscious homeowners, commercial buildings, and those planning to stay in home 20+ years.</p>
                      </div>
                    </div>
                  </div>

                  {/* Materials to Avoid */}
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">❌ Materials to AVOID in Austin</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-primary-900 mb-2">3-Tab Shingles (Basic Shingles)</p>
                        <p className="text-sm text-primary-700"><strong>Why avoid:</strong> Zero hail protection (fail in first major storm), only 15-20 year lifespan in Austin heat, no insurance discounts, minimal wind resistance, look cheap and hurt resale value. Only $1,000-$2,000 cheaper than architectural shingles—not worth the risk in Austin's hail zone.</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900 mb-2">Concrete & Clay Tile</p>
                        <p className="text-sm text-primary-700"><strong>Why avoid in Austin:</strong> Very heavy (requires structural reinforcement = $$$), cracks and breaks from hail impacts, expensive to replace individual tiles, limited contractors who work with tile, overkill for Austin climate. Better suited for Florida or California. Not common in Austin neighborhoods.</p>
                      </div>
                    </div>
                  </div>

                  {/* Color Guide */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4">🎨 Most Popular Austin Roof Colors</h3>
                    <p className="text-sm text-primary-700 mb-4">Austin homeowners tend toward earth tones and grays that complement Texas Hill Country aesthetics:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-amber-700 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Weathered Wood</p>
                        <p className="text-xs text-primary-600">#1 Most Popular</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-gray-400 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Pewter Gray</p>
                        <p className="text-xs text-primary-600">Modern Homes</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-stone-600 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Driftwood</p>
                        <p className="text-xs text-primary-600">Hill Country Style</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-slate-700 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Charcoal</p>
                        <p className="text-xs text-primary-600">Contemporary</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-amber-800 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Mission Brown</p>
                        <p className="text-xs text-primary-600">Traditional</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-gray-600 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Georgetown Gray</p>
                        <p className="text-xs text-primary-600">Versatile</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-slate-800 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Onyx Black</p>
                        <p className="text-xs text-primary-600">Bold Choice</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-stone-300 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Oyster Gray</p>
                        <p className="text-xs text-primary-600">Light & Bright</p>
                      </div>
                    </div>
                    <p className="text-xs text-primary-600 mt-4 text-center">Always check HOA requirements before ordering. We provide physical samples to view on your home.</p>
                  </div>
                </div>
              </div>

              {/* Austin Roof Replacement Costs */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Austin Roof Replacement Costs: Complete Pricing Guide
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Austin roof replacement costs vary based on home size, roof complexity, materials, and neighborhood. Here's what to expect:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">1,500-2,000 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: 3-bed/2-bath ranch or small two-story, simple roof, 18-24 squares, single story or simple two-story, minimal complexity</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$11,000-$16,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">2,000-2,500 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: 3-4 bed/2-3 bath two-story, moderate complexity, 24-28 squares - most common Austin home size</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$15,000-$22,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">2,500-3,000 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: 4-bed/3-bath two-story, increased complexity, 28-35 squares, common in Mueller, suburbs</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$18,000-$26,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">3,000-4,000 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: 4-5 bed/3-4 bath two-story, complex roof, 35-45 squares, common in Westlake, Tarrytown</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$22,000-$35,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">4,000+ sq ft Luxury Home</p>
                        <p className="text-sm text-primary-700">Typical: Luxury estates, highly complex roofs, 45+ squares, premium materials expected, Westlake Hills and luxury areas</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$35,000-$75,000+</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">📈 What INCREASES Cost</h3>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+15-25%</span>
                        <span><strong>Steep pitch roofs</strong> (safety equipment, slower work, common in Hill Country-style homes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+15-30%</span>
                        <span><strong>Complex roof lines</strong> (multiple valleys, dormers, turrets - common in luxury neighborhoods)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+20-35%</span>
                        <span><strong>Multiple stories</strong> (2-3 story homes require more safety setup and access challenges)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+$2k-5k</span>
                        <span><strong>Decking repairs</strong> (common in Hyde Park, East Austin, and older South Austin homes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+100-200%</span>
                        <span><strong>Metal roofing upgrade</strong> ($25k-$45k vs $15k-$22k for shingles)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+$500-1k</span>
                        <span><strong>Austin permitting</strong> (required for all roof replacements)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+$300-1k</span>
                        <span><strong>Tree management</strong> (trimming limbs, protection - common in Hyde Park, Zilker)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">📉 What DECREASES Cost</h3>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Simple gable or hip roof</strong> (ranch-style homes in Zilker, Barton Hills)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Low to moderate pitch</strong> (faster installation, less safety equipment needed)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Single story home</strong> (easier access = lower labor costs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Good existing decking</strong> (newer Austin homes typically have solid decking)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Insurance claim coverage</strong> (you pay deductible only—typically $1k-$3k)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Referral from neighbor</strong> (we offer discounts when working multiple homes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Easy property access</strong> (driveway for dumpster, no tight spaces)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">💡 6 Ways Austin Homeowners Save on Roof Replacement</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-700">
                    <div>
                      <p className="font-bold text-primary-900 mb-1">1. File an Insurance Claim</p>
                      <p className="mb-3">If you have storm damage, your insurance typically covers 100% minus your deductible ($1k-$3k). We handle the entire claims process and meet with adjusters. This is the #1 way Austin homeowners afford new roofs.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">2. Choose Impact-Resistant Shingles</p>
                      <p className="mb-3">Yes, they cost $3k-$5k more upfront, but you'll save $400-$600/year on insurance (15-20% discount). Plus they last longer and survive Austin's hailstorms. Break-even in 6-10 years.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">3. Bundle Services for Discounts</p>
                      <p className="mb-3">Replace gutters, install gutter guards, or add ventilation at the same time for 10-15% savings vs doing separately. One mobilization = lower overall cost.</p>
                    </div>
                    <div>
                      <p className="font-bold text-primary-900 mb-1">4. Schedule During Off-Season</p>
                      <p className="mb-3">Fall and winter (October-February) are slower. We may offer scheduling flexibility or small discounts. Avoid June-August when demand peaks after spring storms.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">5. Take Advantage of Financing</p>
                      <p className="mb-3">We offer 0% financing for 12-18 months through approved lenders. Spread the cost into manageable monthly payments. Ask about current promotions.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">6. Maintain Your Roof Regularly</p>
                      <p className="mb-3">Annual inspections ($0 with Ripple), cleaning gutters, trimming trees, and minor repairs can extend your roof's life 5-10 years, delaying expensive replacement.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-primary-900 font-semibold mb-2">📞 Get Your Exact Austin Roof Replacement Cost</p>
                  <p className="text-primary-700">
                    These ranges are estimates. Your actual cost depends on your specific home, neighborhood, materials, and current conditions. We provide free inspections and detailed written quotes with no obligation. Call <strong>(512) 763-5277</strong> or schedule online to get your personalized Austin roof replacement estimate.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Georgetown-specific deep content */}
          {location.slug === 'georgetown' && (
            <div className="space-y-16 mt-16">
              {/* Georgetown Neighborhoods Deep Dive */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Georgetown Neighborhoods: Your Complete Roofing Guide by Area
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Georgetown's rapid growth has created diverse neighborhoods—from the massive Sun City Texas active adult community to historic downtown homes and new master-planned developments. Each area has unique roofing needs:
                </p>

                <div className="space-y-8">
                  {/* Sun City Texas */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Sun City Texas (55+ Active Adult Community)</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Community Overview:</p>
                        <p className="mb-3">Texas's largest active adult community with 10,000+ residents. Built primarily 2010-present with modern construction standards. Del Webb builder homes with HOA oversight. Amenities-rich lifestyle community.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Characteristics:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Newer roofs (10-15 years old) approaching first replacement</li>
                          <li>Consistent architectural shingles per builder specs</li>
                          <li>HOA color and material requirements (strict)</li>
                          <li>Single-story homes = easier, safer access</li>
                          <li>Many homes impacted by 2024 hailstorm</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Sun City Roofing Considerations:</p>
                        <p className="mb-3"><strong>Insurance Claims:</strong> Many Sun City homes qualified for insurance claims after March 2024 hailstorm. If your neighbors got new roofs, you likely have damage too.</p>
                        <p className="mb-3"><strong>HOA Requirements:</strong> Must get architectural approval before replacement. We handle HOA paperwork. Common approved colors: Weathered Wood, Driftwood, Mission Brown.</p>
                        <p className="font-semibold text-primary-900 mb-2">Typical Investment:</p>
                        <p className="text-accent-600 font-bold text-xl">$12,000-$18,000</p>
                        <p className="text-sm">Single-story, 1,500-2,200 sq ft, simple roof lines (most Sun City homes)</p>
                      </div>
                    </div>
                  </div>

                  {/* Berry Creek */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Berry Creek Country Club Area</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Neighborhood Profile:</p>
                        <p className="mb-3">Upscale golf course community with homes built 1990s-2010s. Mix of custom and production homes. Tree-lined streets, mature landscaping, country club lifestyle. Higher property values.</p>
                        <p className="font-semibold text-primary-900 mb-2">Common Roofing Issues:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Original roofs from 1990s-2000s now 20-30+ years old</li>
                          <li>Golf ball hail damage from Georgetown's frequent storms</li>
                          <li>Complex roof lines on custom homes</li>
                          <li>Large oak trees = debris accumulation and moss</li>
                          <li>Some homes have architectural features (turrets, dormers)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Best Materials:</p>
                        <p className="mb-3">Impact-resistant architectural shingles essential (high hail risk). Premium shingles for curb appeal match neighborhood. Algae-resistant for tree coverage. HOA-approved colors required.</p>
                        <p className="font-semibold text-primary-900 mb-2">Cost Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$16,000-$28,000</p>
                        <p className="text-sm">Larger homes (2,500-3,500 sq ft), moderate to high complexity, premium materials</p>
                      </div>
                    </div>
                  </div>

                  {/* Historic Downtown */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Historic Downtown Georgetown</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Historic Character:</p>
                        <p className="mb-3">Beautiful Victorian-era and early 1900s homes near Georgetown Square. Many homes on historic register. Preservation requirements, charm and character, strong community pride.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Challenges:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Historic preservation guidelines (some streets)</li>
                          <li>Original roofs 80-100+ years old (past multiple replacements)</li>
                          <li>Complex Victorian-era roof lines (steep pitches, gables)</li>
                          <li>Possible structural issues in older homes</li>
                          <li>Decking often needs complete replacement</li>
                          <li>Color restrictions to maintain historic character</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Historic-Appropriate Solutions:</p>
                        <p className="mb-3">Architectural shingles in traditional colors (charcoal, slate, brown). Some homes require metal roofing to match original. Must work with Historic Review Board for some streets.</p>
                        <p className="font-semibold text-primary-900 mb-2">Investment Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$14,000-$26,000</p>
                        <p className="text-sm">Plus $3,000-$6,000 for decking repairs (very common in historic homes)</p>
                      </div>
                    </div>
                  </div>

                  {/* Wolf Ranch */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Wolf Ranch & New Master-Planned Communities</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Modern Development:</p>
                        <p className="mb-3">Built 2005-present with modern amenities. Growing family-oriented community. New construction standards, energy-efficient designs, strong HOA guidelines, excellent schools nearby.</p>
                        <p className="font-semibold text-primary-900 mb-2">New Community Roofing:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Most roofs still under 10-15 year builder warranty</li>
                          <li>Modern architectural shingles installed</li>
                          <li>Proper ventilation and installation practices used</li>
                          <li>First wave of replacements starting 2025-2030</li>
                          <li>Many homes had hail damage in 2024 storm</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">When Replacement Needed:</p>
                        <p className="mb-3">Impact-resistant shingles for hail protection. Ensure exact HOA color match before ordering. Insurance claims common after storms. Get neighbors together for neighborhood pricing.</p>
                        <p className="font-semibold text-primary-900 mb-2">Typical Costs:</p>
                        <p className="text-accent-600 font-bold text-xl">$15,000-$24,000</p>
                        <p className="text-sm">Standard 2,000-2,800 sq ft two-story homes, moderate complexity</p>
                      </div>
                    </div>
                  </div>

                  {/* Westinghouse & Shell Rock */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Westinghouse, Shell Rock & Established Neighborhoods</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Neighborhood Character:</p>
                        <p className="mb-3">Established communities built 1980s-2000s. Mix of original and second owners. Mature trees and landscaping. More affordable than newer developments. Strong neighborhood feel.</p>
                        <p className="font-semibold text-primary-900 mb-2">Typical Roofing Situation:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Roofs 20-40 years old (at or past replacement age)</li>
                          <li>Mix of one-story and two-story homes</li>
                          <li>Generally simpler roof lines than newer homes</li>
                          <li>Some homes have had multiple replacements already</li>
                          <li>Hail damage from Georgetown's severe storms</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Smart Choices:</p>
                        <p className="mb-3">Upgrade to impact-resistant shingles (original roofs weren't). Standard architectural shingles in neutral colors. Good ROI on quality materials vs. cheap options.</p>
                        <p className="font-semibold text-primary-900 mb-2">Investment Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$13,000-$21,000</p>
                        <p className="text-sm">1,800-2,500 sq ft homes, simpler roof lines = lower costs</p>
                      </div>
                    </div>
                  </div>

                  {/* Lake Georgetown Estates */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Lake Georgetown Estates & Waterfront Properties</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Premium Location:</p>
                        <p className="mb-3">Homes near Lake Georgetown with water views and access. Mix of ages from 1980s to new construction. Higher property values. Some luxury custom homes. Rural water district area.</p>
                        <p className="font-semibold text-primary-900 mb-2">Unique Considerations:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Higher wind exposure near lake (need strong wind rating)</li>
                          <li>Humidity from lake can accelerate algae/moss growth</li>
                          <li>Some properties have limited access (narrow roads)</li>
                          <li>Larger lots = more distance from neighbors during work</li>
                          <li>Custom homes may have complex architecture</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Recommended Materials:</p>
                        <p className="mb-3">Impact-resistant shingles with high wind rating (130+ mph). Algae-resistant crucial for lake humidity. Premium appearance to match property values.</p>
                        <p className="font-semibold text-primary-900 mb-2">Cost Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$17,000-$35,000+</p>
                        <p className="text-sm">Varies widely: standard homes to luxury waterfront estates</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-primary-900 font-semibold mb-2">💡 Georgetown Roofing Pro Tip:</p>
                  <p className="text-primary-700">
                    Georgetown sits directly in "Hail Alley's" most dangerous zone. The March 2024 storm that damaged thousands of Georgetown roofs is just the latest in a pattern of severe hailstorms every 2-4 years. <strong>Impact-resistant shingles aren't optional here—they're essential.</strong> Sun City residents: Check with neighbors about storm damage before assuming your roof is fine. We offer free inspections to assess hail damage that's often invisible from the ground.
                  </p>
                </div>
              </div>

              {/* Georgetown Storm History */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Georgetown Storm History: Ground Zero for Texas Hailstorms
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Georgetown has the unfortunate distinction of being one of Texas's most hail-prone cities. Understanding this history is crucial for protecting your investment:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">🌩️</span> Major Georgetown Hailstorms (2015-2025)
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-600 pl-4">
                        <p className="font-bold text-primary-900">March 2024 - Catastrophic Damage</p>
                        <p className="text-sm text-primary-700">Baseball to SOFTBALL-sized hail in parts of Georgetown. Considered one of the worst Georgetown hailstorms in decades. <strong>Virtually every roof in the storm's path was totaled.</strong> Sun City Texas, Berry Creek, and Wolf Ranch heavily impacted. $400M+ in Georgetown-area damage alone.</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="font-bold text-primary-900">April 2021 - Direct Hit</p>
                        <p className="text-sm text-primary-700">Supercell tracked directly over Georgetown with baseball-sized hail. This was the storm that damaged the Georgetown Square's historic buildings. Thousands of roofs replaced. Storm total: $200M+ across Williamson County.</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <p className="font-bold text-primary-900">May 2019 - Widespread Event</p>
                        <p className="text-sm text-primary-700">Golf ball to baseball hail across Georgetown. Sun City Texas particularly hard-hit. Many homeowners got their first replacement roofs from this storm. Overwhelming insurance claims led to adjuster delays.</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <p className="font-bold text-primary-900">March 2016 - $1.4B Regional Disaster</p>
                        <p className="text-sm text-primary-700">Part of the $1.4 billion hailstorm that devastated Central Texas. Georgetown received softball-sized hail in some areas. Entire neighborhoods needed roof replacements. Changed Georgetown's roofing landscape forever.</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <p className="font-bold text-primary-900">Pattern Recognition: Every 2-4 Years</p>
                        <p className="text-sm text-primary-700">Georgetown experiences a major (roof-totaling) hailstorm approximately every 2-4 years. Minor hail events happen multiple times per year. If you have standard shingles, it's not "if" but "when" you'll need a claim.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">📊</span> Georgetown Hail Statistics
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Why Is Georgetown Hit So Hard?</p>
                        <p className="text-sm text-primary-700 mb-2">Georgetown sits at the perfect latitude where warm, moist air from the Gulf of Mexico collides with cold, dry air from the north. The I-35 corridor creates a natural "hail highway." Storm systems frequently strengthen as they move north from Austin through Georgetown.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Peak Hail Season: March - May</p>
                        <p className="text-sm text-primary-700 mb-2">80% of Georgetown's damaging hail occurs in spring. April is statistically the most dangerous month.</p>
                        <div className="bg-primary-50 p-3 rounded">
                          <p className="text-xs font-semibold text-primary-900 mb-1">Monthly Risk Distribution:</p>
                          <p className="text-xs text-primary-700">March: 25% • April: 35% • May: 20% • Other: 20%</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Expected Hail Frequency in Georgetown:</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Pea-sized (1/4") - Cosmetic only</span>
                            <span className="font-bold text-primary-900">6-10x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Quarter-sized (1") - Minor damage</span>
                            <span className="font-bold text-primary-900">3-5x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Golf ball (1.75") - Major damage</span>
                            <span className="font-bold text-accent-600">1-2x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Baseball (2.75") - Roof totaled</span>
                            <span className="font-bold text-red-600">Every 2-4 years</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Softball (4") - Catastrophic</span>
                            <span className="font-bold text-red-600">Every 5-10 years</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                        <p className="text-xs font-bold text-red-900 mb-1">⚠️ Georgetown Reality Check:</p>
                        <p className="text-xs text-red-800">If you have standard (non-impact-resistant) shingles in Georgetown, expect to file an insurance claim every 8-12 years on average. Impact-resistant shingles significantly extend this timeline and save you deductible costs.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">Protecting Your Georgetown Home from Hail Damage</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-primary-900 mb-2">✅ Before Storm Season (Do Now):</p>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• <strong>Install Class 4 impact-resistant shingles</strong> - Non-negotiable in Georgetown</li>
                        <li>• Document current roof condition with photos (for future claims)</li>
                        <li>• Review insurance policy - know your deductible and coverage</li>
                        <li>• Trim tree branches away from roof (10+ feet clearance)</li>
                        <li>• Sign up for Williamson County severe weather alerts</li>
                        <li>• Save our number: (512) 763-5277 for post-storm inspections</li>
                        <li>• Talk to neighbors about past storm damage patterns</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900 mb-2">⚠️ After a Georgetown Hailstorm:</p>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• <strong>Inspect within 1-2 weeks</strong> - damage may not be immediately visible</li>
                        <li>• Check gutters for granule accumulation (sign of damage)</li>
                        <li>• Look for dents on metal (mailbox, AC unit, vents)</li>
                        <li>• Call us for FREE professional roof inspection - we climb up</li>
                        <li>• <strong>Don't wait</strong> - after major Georgetown storms, we're booked weeks out</li>
                        <li>• Document everything with photos from ground level</li>
                        <li>• File insurance claim promptly (most policies: 1 year deadline)</li>
                        <li>• Have us present at adjuster meeting (crucial for proper scope)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Roofing Materials for Georgetown */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Best Roofing Materials for Georgetown (Hail Protection Essential)
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  In Georgetown, material selection isn't about style preferences—it's about survival. Here's what works in one of Texas's most hail-prone cities:
                </p>

                <div className="space-y-6">
                  {/* #1 Recommendation */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-500">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl">🏆</span>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-900">#1 ONLY Choice: Class 4 Impact-Resistant Shingles</h3>
                        <p className="text-accent-600 font-semibold">Not Optional in Georgetown - This Is Insurance Protection</p>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                      <p className="font-bold text-red-900 mb-2">⚠️ Georgetown Reality: Standard Shingles WILL Fail</p>
                      <p className="text-sm text-red-800">Installing standard (non-impact-resistant) shingles in Georgetown is financial negligence. You'll pay your $2,500-$5,000 deductible every 8-12 years, lose home protection during repairs, and deal with insurance claims repeatedly. Impact-resistant shingles are the ONLY smart choice.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Best: CertainTeed Landmark Pro IR</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 UL 2218 impact rating</li>
                          <li>• Survives baseball-sized hail</li>
                          <li>• 130 mph wind resistance</li>
                          <li>• Proven in Georgetown storms</li>
                          <li>• 50-year warranty</li>
                          <li>• 15-35% insurance discount</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$14,500-$21,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft Georgetown home)</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Excellent: GAF Timberline HDZ IR</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 impact-rated</li>
                          <li>• LayerLock technology</li>
                          <li>• 130 mph wind warranty</li>
                          <li>• Widely available</li>
                          <li>• 50-year limited warranty</li>
                          <li>• 10-35% insurance savings</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$15,000-$22,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft Georgetown home)</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Premium: Owens Corning Duration Storm</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 UL 2218 rated</li>
                          <li>• SureNail Technology</li>
                          <li>• 130 mph wind resistance</li>
                          <li>• TruDefinition color</li>
                          <li>• 50-year non-prorated warranty</li>
                          <li>• Maximum insurance discounts</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$15,500-$23,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft Georgetown home)</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                      <p className="font-bold text-primary-900 mb-2">💰 Impact-Resistant ROI in Georgetown (Real Numbers):</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-700">
                        <div>
                          <p className="font-semibold text-primary-900 mb-1">Standard Shingles Path (DON'T DO THIS):</p>
                          <ul className="space-y-1">
                            <li>• Initial cost: $11,000-$14,000 (seems cheaper)</li>
                            <li>• Insurance: $3,000/year, no discount</li>
                            <li>• File claim every 10 years: Pay $3,000 deductible each time</li>
                            <li>• Over 30 years: $11k initial + $90k insurance + $9k deductibles (3 claims) = <strong className="text-red-600">$110,000 total</strong></li>
                            <li>• Plus: Hassle of 3 roof replacements, temp loss of protection</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-900 mb-1">Impact-Resistant Path (SMART CHOICE):</p>
                          <ul className="space-y-1">
                            <li>• Initial cost: $15,000-$20,000 (pays for itself)</li>
                            <li>• Insurance: $3,000/year, minus 20% ($600/year savings)</li>
                            <li>• File claim every 20-30 years: Pay $3,000 deductible once (maybe)</li>
                            <li>• Over 30 years: $17k initial + $72k insurance + $3k deductible (1 claim) = <strong className="text-green-600">$92,000 total</strong></li>
                            <li>• Savings: <strong className="text-green-600">$18,000 + peace of mind + only 1 replacement</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metal Roofing */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-600">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Alternative: Standing Seam Metal Roofing</h3>
                    <p className="text-primary-700 mb-4">Popular among Georgetown homeowners who never want to deal with hail claims again.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">✅ Why Georgetown Homeowners Choose Metal:</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• <strong>Ultimate hail resistance</strong> - may dent but never punctures</li>
                          <li>• <strong>50-70 year lifespan</strong> - install once, never replace</li>
                          <li>• <strong>Survives softball hail</strong> - proven in Georgetown's worst storms</li>
                          <li>• 140+ mph wind rating (tornado resistant)</li>
                          <li>• 20-30% cooling cost savings (reflects Texas heat)</li>
                          <li>• Environmentally friendly (100% recyclable)</li>
                          <li>• Adds significant home resale value</li>
                          <li>• Never need to file hail claims again</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-4 text-xl">$25,000-$45,000</p>
                        <p className="text-sm text-primary-600">(2,000 sq ft Georgetown home, standing seam)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">⚠️ Considerations for Georgetown:</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Higher upfront cost (2-3x impact shingles)</li>
                          <li>• HOA restrictions in Sun City, Berry Creek (check first)</li>
                          <li>• Limited color options vs shingles</li>
                          <li>• Can be noisy during hailstorms (louder than shingles)</li>
                          <li>• Requires specialized installation expertise</li>
                          <li>• Best for simple roof lines (complex = expensive)</li>
                        </ul>
                        <p className="font-semibold text-primary-900 mt-4 mb-1">Best For:</p>
                        <p className="text-sm text-primary-700">Homeowners planning to stay 20+ years, sick of filing claims, wanting ultimate protection, non-HOA areas or HOA-approved communities, simple roof lines, eco-conscious buyers.</p>
                        <p className="font-semibold text-primary-900 mt-3 mb-1">ROI Timeline:</p>
                        <p className="text-sm text-primary-700">If you file 2 insurance claims over 30 years ($6k in deductibles) plus save 20% on insurance ($600/year × 30 = $18k), metal roofing pays the difference in 20-25 years. Plus you never deal with roofing again.</p>
                      </div>
                    </div>
                  </div>

                  {/* Materials to Avoid */}
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">❌ Materials to ABSOLUTELY AVOID in Georgetown</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-primary-900 mb-2">Standard 3-Tab or Basic Architectural Shingles</p>
                        <p className="text-sm text-primary-700 mb-2"><strong>Why this is a mistake:</strong> Zero hail protection - will fail in first major Georgetown storm. Only 15-20 year lifespan before first claim. No insurance discounts. You'll pay $3k-$5k deductible every 8-12 years.</p>
                        <p className="text-sm font-bold text-red-800">In Georgetown, these are only $2k-$3k cheaper than impact-resistant shingles. You'll lose that savings in your FIRST insurance deductible, then keep losing money with every future storm. Don't be penny-wise and pound-foolish.</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900 mb-2">Concrete or Clay Tile</p>
                        <p className="text-sm text-primary-700"><strong>Why avoid in Georgetown:</strong> Tiles crack and break from Georgetown's baseball/softball hail. Very expensive to replace individual tiles ($500+ per tile). Heavy (requires structural reinforcement). Limited contractors who work with tile. Long lead times for replacement tiles during post-storm rush. Not worth the hassle in hail-prone Georgetown.</p>
                      </div>
                    </div>
                  </div>

                  {/* Color Guide */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4">🎨 Most Popular Georgetown Roof Colors</h3>
                    <p className="text-sm text-primary-700 mb-4">Georgetown homeowners prefer earth tones and neutrals. Sun City and HOA communities have approved color lists:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-amber-700 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Weathered Wood</p>
                        <p className="text-xs text-primary-600">#1 in Sun City</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-stone-600 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Driftwood</p>
                        <p className="text-xs text-primary-600">Berry Creek Favorite</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-amber-800 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Mission Brown</p>
                        <p className="text-xs text-primary-600">Traditional</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-gray-500 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Georgetown Gray</p>
                        <p className="text-xs text-primary-600">Namesake Color</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-slate-700 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Charcoal</p>
                        <p className="text-xs text-primary-600">Modern Homes</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-gray-400 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Pewter Gray</p>
                        <p className="text-xs text-primary-600">Contemporary</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-stone-300 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Oyster Gray</p>
                        <p className="text-xs text-primary-600">Light Option</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-slate-800 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Colonial Slate</p>
                        <p className="text-xs text-primary-600">Historic Downtown</p>
                      </div>
                    </div>
                    <p className="text-xs text-primary-600 mt-4 text-center">Sun City & HOA communities: Always verify color approval before ordering. We handle HOA submissions.</p>
                  </div>
                </div>
              </div>

              {/* Georgetown Roof Replacement Costs */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Georgetown Roof Replacement Costs: Complete Pricing Guide
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Georgetown roof replacement costs are competitive with Round Rock, with Sun City Texas homes often on the lower end due to simpler designs:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">1,500-2,000 sq ft Home (Most Sun City Homes)</p>
                        <p className="text-sm text-primary-700">Typical: Single-story, 2-3 bed/2 bath, simple roof, 18-24 squares, easy access - Sun City standard</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$10,500-$16,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">2,000-2,500 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: 3-4 bed/2-3 bath, moderate complexity, 24-28 squares - Wolf Ranch, Westinghouse standard</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$14,000-$21,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">2,500-3,000 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: 4-bed/3-bath two-story, increased complexity, 28-35 squares - Berry Creek, larger Wolf Ranch homes</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$17,000-$25,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">3,000-4,000 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: 4-5 bed/3-4 bath, complex roof, 35-45 squares - Berry Creek custom homes, Lake Georgetown estates</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$21,000-$33,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">4,000+ sq ft Luxury Home</p>
                        <p className="text-sm text-primary-700">Typical: Luxury estates, highly complex roofs, 45+ squares - Lake Georgetown waterfront, Berry Creek luxury</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$30,000-$60,000+</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded mb-8">
                  <p className="font-bold text-primary-900 mb-2">💡 Sun City Texas Homeowners: Important Pricing Notes</p>
                  <p className="text-sm text-primary-700 mb-3">Sun City homes typically fall in the $10,500-$16,000 range due to:</p>
                  <ul className="text-sm text-primary-700 space-y-1">
                    <li>• Single-story construction (safer, faster installation = lower labor)</li>
                    <li>• Simple roof lines (most are basic gable or hip roofs)</li>
                    <li>• Smaller square footage (1,500-2,200 sq ft typical)</li>
                    <li>• Easy access (wide streets, driveways, no obstacles)</li>
                    <li>• Neighborhood pricing (we often work multiple homes = discounts)</li>
                  </ul>
                  <p className="text-sm text-primary-700 mt-3"><strong>After storms:</strong> When we're working 10+ homes in Sun City, we offer volume pricing. Ask neighbors if they're getting quotes too!</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">📈 What INCREASES Cost in Georgetown</h3>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+15-25%</span>
                        <span><strong>Steep pitch roofs</strong> (safety equipment, slower work - some Berry Creek homes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+15-30%</span>
                        <span><strong>Complex roof lines</strong> (multiple valleys, dormers - Berry Creek custom homes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+20-35%</span>
                        <span><strong>Two-story homes</strong> (requires more safety setup - Wolf Ranch, newer developments)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+$2k-5k</span>
                        <span><strong>Decking repairs</strong> (common in Historic Downtown, older Shell Rock/Westinghouse homes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+100-200%</span>
                        <span><strong>Metal roofing upgrade</strong> ($25k-$45k vs $14k-$21k for shingles)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+$400-800</span>
                        <span><strong>Georgetown permits</strong> (required for all replacements, HOA fees separate)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+$500-1k</span>
                        <span><strong>Tree management</strong> (trimming, protection - Berry Creek, Lake Georgetown)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">📉 What DECREASES Cost in Georgetown</h3>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Single-story home</strong> (Most Sun City homes - easier access = 20-30% savings)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Simple gable or hip roof</strong> (Standard Sun City, Wolf Ranch production homes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Low to moderate pitch</strong> (Faster installation, less safety equipment)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Good existing decking</strong> (Newer homes in Wolf Ranch, Sun City)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Insurance claim coverage</strong> (Pay deductible only - $1k-$3k total cost)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Neighborhood group pricing</strong> (Working multiple Georgetown homes = volume discounts)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Easy property access</strong> (Wide Georgetown streets, good driveway access)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">💡 6 Ways Georgetown Homeowners Save on Roof Replacement</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-700">
                    <div>
                      <p className="font-bold text-primary-900 mb-1">1. File Insurance Claims (Most Important)</p>
                      <p className="mb-3">Given Georgetown's hail frequency, MOST roof replacements should be insurance claims. If you have storm damage, insurance covers 100% minus deductible ($1k-$3k). We handle the entire claims process and adjuster meetings. This is how 80% of Georgetown roofs get replaced.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">2. Coordinate with Neighbors (Sun City Especially)</p>
                      <p className="mb-3">When we're replacing 5-10 roofs in one Sun City neighborhood, we offer group pricing. One dumpster delivery, one material order, one crew mobilization = 10-15% savings per home. After storms, organize your street!</p>
                      
                      <p className="font-bold text-primary-900 mb-1">3. Choose Impact-Resistant for Insurance Discounts</p>
                      <p className="mb-3">Yes, $3k-$5k more upfront, but saves $400-$600/year on insurance (15-25% discount). Pays for itself in 6-10 years. Plus longer lifespan and survives Georgetown's hail. Essential investment here.</p>
                    </div>
                    <div>
                      <p className="font-bold text-primary-900 mb-1">4. Bundle Services</p>
                      <p className="mb-3">Replace gutters, install gutter guards, or add attic ventilation simultaneously for 10-15% savings vs doing separately. One mobilization = lower total cost.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">5. Time It Right (If Not Insurance Claim)</p>
                      <p className="mb-3">Fall/winter (October-February) are slower seasons. We may offer flexibility or small discounts. Avoid June-August when Georgetown's busiest after spring storms.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">6. 0% Financing Available</p>
                      <p className="mb-3">We offer 0% financing for 12-18 months through approved lenders. Spread the cost into manageable monthly payments. Especially helpful for Sun City retirees on fixed income. Ask about current promotions.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-primary-900 font-semibold mb-2">📞 Get Your Exact Georgetown Roof Replacement Cost</p>
                  <p className="text-primary-700">
                    These are estimates. Your actual cost depends on your specific home, neighborhood, and current conditions. We provide <strong>FREE inspections</strong> and detailed written quotes. Sun City homeowners: We're in your community weekly—ask your neighbors about us! Call <strong>(512) 763-5277</strong> or schedule online for your personalized Georgetown roof replacement estimate.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Pflugerville-specific deep content */}
          {location.slug === 'pflugerville' && (
            <div className="space-y-16 mt-16">
              {/* Pflugerville Neighborhoods Deep Dive */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Pflugerville Neighborhoods: Your Complete Roofing Guide by Area
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Pflugerville ("Pf" to locals) is one of Austin metro's fastest-growing communities, attracting young families and tech professionals with excellent schools and new developments. Here's what homeowners need to know about roofing in Pflugerville's popular neighborhoods:
                </p>

                <div className="space-y-8">
                  {/* Blackhawk & Park at Blackhawk */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Blackhawk & Park at Blackhawk</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Community Profile:</p>
                        <p className="mb-3">One of Pflugerville's most established master-planned communities, built 1990s-2010s. Mix of age ranges in homes. Strong HOA, excellent amenities, mature trees, community pools and parks. Very popular with families.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Situation:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Older Blackhawk homes (1990s-2000s) = roofs 20-30 years old</li>
                          <li>Many roofs at or past replacement age</li>
                          <li>2024 hailstorm damaged significant number of roofs</li>
                          <li>HOA architectural guidelines (color approval required)</li>
                          <li>Standard two-story homes, moderate complexity</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Best Materials:</p>
                        <p className="mb-3">Impact-resistant architectural shingles for hail protection and insurance discounts. Popular colors: Weathered Wood, Driftwood, Georgetown Gray (HOA-approved). Ensure exact match to neighbors.</p>
                        <p className="font-semibold text-primary-900 mb-2">Typical Investment:</p>
                        <p className="text-accent-600 font-bold text-xl">$15,000-$23,000</p>
                        <p className="text-sm">Standard 2,000-2,700 sq ft two-story homes, moderate roof complexity</p>
                      </div>
                    </div>
                  </div>

                  {/* Falcon Pointe */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Falcon Pointe</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Neighborhood Character:</p>
                        <p className="mb-3">Premium Pflugerville neighborhood with larger homes built 2000s-2010s. Higher property values, well-maintained, strong sense of community. Popular with tech professionals and executives. Some luxury custom homes.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Considerations:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Larger homes (2,500-3,500+ sq ft) = higher costs</li>
                          <li>More complex roof lines with architectural features</li>
                          <li>Roofs 15-25 years old approaching replacement</li>
                          <li>Premium materials expected to match home values</li>
                          <li>HOA color and material restrictions</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Recommended Solutions:</p>
                        <p className="mb-3">Premium impact-resistant shingles (CertainTeed Landmark Pro, Owens Corning Duration Storm). Designer colors in earth tones. Some homeowners choose metal for longevity.</p>
                        <p className="font-semibold text-primary-900 mb-2">Cost Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$18,000-$30,000</p>
                        <p className="text-sm">Larger homes with increased complexity, premium materials</p>
                      </div>
                    </div>
                  </div>

                  {/* Sendero Springs & Brookfield */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Sendero Springs & Brookfield</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Modern Development:</p>
                        <p className="mb-3">Built 2010-present with newer construction standards. Family-oriented, growing fast, excellent schools nearby. Mix of production builders (DR Horton, Lennar, KB Home). Strong HOAs managing community appearance.</p>
                        <p className="font-semibold text-primary-900 mb-2">New Home Roofing:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Most homes have 10-15 year builder warranties still active</li>
                          <li>Modern architectural shingles already installed</li>
                          <li>Proper ventilation and installation practices used</li>
                          <li>First wave of replacements won't hit until 2030-2040</li>
                          <li>Some homes affected by 2024 hailstorm (insurance claims)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">When Replacement Needed:</p>
                        <p className="mb-3">Upgrade to impact-resistant for better hail protection and insurance savings. Match exact HOA colors before ordering. Coordinate with neighbors for potential group pricing.</p>
                        <p className="font-semibold text-primary-900 mb-2">Future Investment:</p>
                        <p className="text-accent-600 font-bold text-xl">$16,000-$25,000</p>
                        <p className="text-sm">Standard 2,200-2,800 sq ft homes, moderate complexity when replacements needed</p>
                      </div>
                    </div>
                  </div>

                  {/* Gatlinburg & Highland Park */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Gatlinburg, Highland Park & Celebration</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Established Communities:</p>
                        <p className="mb-3">Built 1990s-2000s, more affordable than newer developments. Mix of original owners and young families buying as first homes. Good starter home neighborhoods. Convenient to everything in Pflugerville.</p>
                        <p className="font-semibold text-primary-900 mb-2">Common Roofing Needs:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Original roofs now 20-35 years old (replacement needed)</li>
                          <li>Standard architectural or 3-tab shingles installed originally</li>
                          <li>Hail damage from multiple Pflugerville storms</li>
                          <li>Mostly two-story homes with straightforward roof lines</li>
                          <li>Some homes have had first replacement already</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Smart Upgrade Path:</p>
                        <p className="mb-3">This is the time to upgrade to impact-resistant shingles. Original roofs weren't Class 4 rated. New roof = 10-35% insurance discount that pays for upgrade over time.</p>
                        <p className="font-semibold text-primary-900 mb-2">Typical Costs:</p>
                        <p className="text-accent-600 font-bold text-xl">$14,000-$21,000</p>
                        <p className="text-sm">1,900-2,500 sq ft homes, straightforward roof lines, good value pricing</p>
                      </div>
                    </div>
                  </div>

                  {/* Willow Creek & Greenbury */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Willow Creek, Greenbury & Mansfield Dam</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Neighborhood Vibe:</p>
                        <p className="mb-3">Mid-range Pflugerville neighborhoods built 2000s-2015. Popular with young professionals and tech workers. Well-maintained, convenient locations, good schools. Mix of single-family and townhomes.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Characteristics:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Roofs 10-25 years old (varied ages within communities)</li>
                          <li>Some starting to need first replacement</li>
                          <li>HOA guidelines in place for consistency</li>
                          <li>Standard two-story production homes</li>
                          <li>2024 hailstorm created insurance claims wave</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Material Choices:</p>
                        <p className="mb-3">Impact-resistant architectural shingles standard recommendation. Neutral colors popular (grays, browns). Good ventilation essential for hot Texas summers.</p>
                        <p className="font-semibold text-primary-900 mb-2">Investment Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$15,000-$23,000</p>
                        <p className="text-sm">Typical 2,100-2,600 sq ft Pflugerville homes, moderate complexity</p>
                      </div>
                    </div>
                  </div>

                  {/* Older Pflugerville */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Historic Pflugerville & Older Neighborhoods</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Old Town Character:</p>
                        <p className="mb-3">Original Pflugerville near downtown and Pfluger Park. Homes from 1960s-1980s. Smaller lots, established trees, close-knit community. More affordable, convenient to amenities. Some homes being renovated by young buyers.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Challenges:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Original roofs 40-60 years old (well past due)</li>
                          <li>Many homes on 2nd or 3rd roof replacement</li>
                          <li>Potential decking issues from age and leaks</li>
                          <li>Simpler roof lines (ranch-style, basic gables)</li>
                          <li>Mature trees providing shade but dropping debris</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Practical Solutions:</p>
                        <p className="mb-3">Quality architectural shingles appropriate for home values. Impact-resistant smart for insurance savings. Budget for possible decking repairs ($2k-$4k common).</p>
                        <p className="font-semibold text-primary-900 mb-2">Cost Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$12,000-$19,000</p>
                        <p className="text-sm">Smaller 1,600-2,200 sq ft homes, simpler roof lines, plus decking repairs if needed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-primary-900 font-semibold mb-2">💡 Pflugerville Roofing Pro Tip:</p>
                  <p className="text-primary-700">
                    Pflugerville sits directly in the Austin-to-Georgetown storm corridor, experiencing frequent hail. The March 2024 storm that hit Round Rock and Georgetown also damaged thousands of Pflugerville roofs, especially in Blackhawk, Falcon Pointe, and northern neighborhoods. <strong>After major storms, coordinate with neighbors—we offer group pricing when working multiple homes in one neighborhood.</strong> Many Pflugerville homeowners qualified for insurance claims after the 2024 storm. Free inspections available to check for damage.
                  </p>
                </div>
              </div>

              {/* Pflugerville Storm History */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Pflugerville Storm History & Hail Damage Patterns
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Pflugerville sits in the Austin-Georgetown storm corridor, experiencing regular severe weather. Understanding this history helps protect your home and know when insurance claims are warranted:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">🌩️</span> Major Pflugerville Hailstorms (2015-2025)
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-600 pl-4">
                        <p className="font-bold text-primary-900">March 2024 - Widespread Damage</p>
                        <p className="text-sm text-primary-700">Golf ball to baseball-sized hail across northern Pflugerville (Blackhawk, Falcon Pointe, Sendero Springs). Southern Pflugerville received quarter to golf ball hail. <strong>Estimated 40-50% of Pflugerville homes had roof damage.</strong> Thousands of insurance claims filed. Some homes received softball hail in northern areas.</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="font-bold text-primary-900">May 2022 - Direct Hit on Pflugerville</p>
                        <p className="text-sm text-primary-700">Severe thunderstorm complex moved directly over Pflugerville with golf ball hail. Wind gusts to 65 mph. Gatlinburg, Highland Park, and central Pflugerville neighborhoods heavily impacted. Widespread power outages. Many roofs totaled, vehicles and windows damaged.</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <p className="font-bold text-primary-900">April 2021 - Round Rock to Pflugerville Path</p>
                        <p className="text-sm text-primary-700">Supercell storm tracked from Round Rock through Pflugerville to Georgetown. Baseball-sized hail reported in parts of Pflugerville. This was the storm that created the first major insurance claims wave in newer Sendero Springs and Brookfield neighborhoods.</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <p className="font-bold text-primary-900">March 2016 - $1.4 Billion Regional Catastrophe</p>
                        <p className="text-sm text-primary-700">Part of the massive hailstorm that devastated all of Central Texas. Pflugerville received golf ball to baseball hail. Entire established neighborhoods like Blackhawk had 90%+ roof replacement rates. This storm defined "before and after" for Pflugerville roofing.</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <p className="font-bold text-primary-900">Pflugerville Storm Pattern: Every 2-4 Years</p>
                        <p className="text-sm text-primary-700">Pflugerville experiences a significant (potentially roof-totaling) hailstorm approximately every 2-4 years. Minor hail events happen multiple times annually. Living in Pflugerville means planning for inevitable hail damage.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">📊</span> Pflugerville Hail Statistics & Patterns
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Why Pflugerville Gets Hit Often:</p>
                        <p className="text-sm text-primary-700 mb-2">Pflugerville sits in the direct path of storms moving north from Austin toward Georgetown and Round Rock. This I-35 corridor is notorious for storm development and strengthening. Pflugerville is geographically positioned where many storms intensify, creating large hail.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Peak Hail Season: March - May</p>
                        <p className="text-sm text-primary-700 mb-2">75% of Pflugerville's damaging hail occurs in spring months. April and early May are statistically most dangerous.</p>
                        <div className="bg-primary-50 p-3 rounded">
                          <p className="text-xs font-semibold text-primary-900 mb-1">Monthly Risk Distribution:</p>
                          <p className="text-xs text-primary-700">March: 25% • April: 30% • May: 20% • Other: 25%</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">North vs South Pflugerville:</p>
                        <p className="text-sm text-primary-700 mb-2">Northern Pflugerville neighborhoods (Blackhawk, Falcon Pointe, Sendero Springs) experience slightly higher hail frequency and larger hail sizes due to being closer to where storms intensify. Southern Pflugerville still gets hit regularly.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Expected Hail Frequency in Pflugerville:</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Pea-sized (1/4") - Cosmetic</span>
                            <span className="font-bold text-primary-900">5-8x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Quarter-sized (1") - Minor damage</span>
                            <span className="font-bold text-primary-900">2-4x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Golf ball (1.75") - Major damage</span>
                            <span className="font-bold text-accent-600">1-2x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Baseball (2.75") - Roof totaled</span>
                            <span className="font-bold text-red-600">Every 2-4 years</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Softball (4") - Catastrophic</span>
                            <span className="font-bold text-red-600">Every 8-12 years</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">Protecting Your Pflugerville Home from Storm Damage</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-primary-900 mb-2">✅ Before Storm Season (Essential Prep):</p>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• <strong>Install Class 4 impact-resistant shingles</strong> - Critical in Pflugerville</li>
                        <li>• Document your current roof with photos (dated, from all angles)</li>
                        <li>• Review homeowner's insurance policy - know deductible and coverage</li>
                        <li>• Trim tree branches away from roof (10+ feet clearance)</li>
                        <li>• Sign up for Travis County emergency alerts on phone</li>
                        <li>• Save our emergency number: (512) 763-5277</li>
                        <li>• Talk to neighbors about past storm damage (especially in Blackhawk, Falcon Pointe)</li>
                        <li>• Check HOA requirements for roof colors/materials now</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900 mb-2">⚠️ After a Pflugerville Hailstorm:</p>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• <strong>Inspect within 1-2 weeks</strong> - hail damage often not immediately visible</li>
                        <li>• Check gutters for shingle granules (telltale sign of damage)</li>
                        <li>• Look for dents on metal items (mailbox, AC unit, vents, gutters)</li>
                        <li>• Call us for FREE professional inspection - we assess from roof level</li>
                        <li>• Document ALL damage with photos (roof, gutters, siding, windows)</li>
                        <li>• File insurance claim if damage found (most policies: 1 year deadline)</li>
                        <li>• Have us present at adjuster meeting (crucial for proper damage scope)</li>
                        <li>• Coordinate with neighbors - often qualify for group pricing discounts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Roofing Materials for Pflugerville */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Best Roofing Materials for Pflugerville Homes
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Pflugerville's hail frequency and intense Texas heat require specific roofing materials. Here's what performs best for Pflugerville homeowners:
                </p>

                <div className="space-y-6">
                  {/* #1 Recommendation */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-500">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl">🏆</span>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-900">#1 Recommendation: Class 4 Impact-Resistant Architectural Shingles</h3>
                        <p className="text-accent-600 font-semibold">Best Protection + Value for Pflugerville's Hail Pattern</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Top Choice: CertainTeed Landmark Pro IR</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 UL 2218 impact rating</li>
                          <li>• Survives baseball-sized hail</li>
                          <li>• 130 mph wind resistance</li>
                          <li>• Cool Roof Technology (heat reflection)</li>
                          <li>• 50-year warranty</li>
                          <li>• 15-35% insurance discount</li>
                          <li>• Most popular in Pflugerville</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$14,500-$21,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft Pflugerville home)</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Excellent: GAF Timberline HDZ IR</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 impact-rated</li>
                          <li>• LayerLock technology</li>
                          <li>• 130 mph wind warranty</li>
                          <li>• Widely available, fast ordering</li>
                          <li>• 50-year limited warranty</li>
                          <li>• 10-35% insurance savings</li>
                          <li>• Good color selection</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$15,000-$22,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft Pflugerville home)</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Premium: Owens Corning Duration Storm</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 UL 2218 rated</li>
                          <li>• SureNail Technology</li>
                          <li>• 130 mph wind resistance</li>
                          <li>• TruDefinition color clarity</li>
                          <li>• 50-year non-prorated warranty</li>
                          <li>• Maximum insurance discounts</li>
                          <li>• Excellent in Pflugerville heat</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$15,500-$23,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft Pflugerville home)</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                      <p className="font-bold text-primary-900 mb-2">💰 Impact-Resistant ROI for Pflugerville Homeowners:</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-700">
                        <div>
                          <p className="font-semibold text-primary-900 mb-1">Why Essential in Pflugerville:</p>
                          <ul className="space-y-1">
                            <li>• Withstands the golf ball/baseball hail Pflugerville gets regularly</li>
                            <li>• 10-35% insurance discount (typically 15-20% in Pflugerville)</li>
                            <li>• Average $2,800/year home insurance × 15% = $420/year savings</li>
                            <li>• Over 30 years: $12,600 in insurance savings</li>
                            <li>• Upgrade cost over standard: $3,000-$5,000</li>
                            <li>• <strong>Pays for itself in 7-12 years, then pure savings!</strong></li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-900 mb-1">Additional Benefits:</p>
                          <ul className="space-y-1">
                            <li>• Survives storms that total standard roofs (avoid multiple claims)</li>
                            <li>• Better heat reflection = lower cooling costs in Pflugerville summers</li>
                            <li>• 50-year lifespan vs 20-25 for standard shingles</li>
                            <li>• Higher home resale value (buyers want hail protection)</li>
                            <li>• Peace of mind during Pflugerville's spring storm season</li>
                            <li>• Required by some HOAs in newer Pflugerville communities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metal Roofing */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-600">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Alternative: Standing Seam Metal Roofing</h3>
                    <p className="text-primary-700 mb-4">Growing in popularity among Pflugerville homeowners, especially in newer communities.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">✅ Pros for Pflugerville:</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• <strong>Ultimate hail resistance</strong> - may dent but never punctures</li>
                          <li>• <strong>50-70 year lifespan</strong> - never replace again</li>
                          <li>• Survives softball hail (proven in 2024 storm)</li>
                          <li>• 25-35% cooling cost savings (reflects Texas heat)</li>
                          <li>• 140+ mph wind rating</li>
                          <li>• Environmentally friendly (100% recyclable)</li>
                          <li>• Modern look popular in Sendero Springs, Brookfield</li>
                          <li>• Never file hail claims again</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-4 text-xl">$24,000-$42,000</p>
                        <p className="text-sm text-primary-600">(2,000 sq ft Pflugerville home, standing seam)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">⚠️ Considerations:</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Higher upfront cost (2-3x impact shingles)</li>
                          <li>• HOA restrictions in some Pflugerville neighborhoods (verify first)</li>
                          <li>• Limited color options (typically grays, blacks, browns)</li>
                          <li>• Louder during heavy rain/hail than shingles</li>
                          <li>• Requires specialized installation (not all contractors)</li>
                          <li>• Best for simple roof lines (complex = expensive)</li>
                        </ul>
                        <p className="font-semibold text-primary-900 mt-4 mb-1">Best For:</p>
                        <p className="text-sm text-primary-700">Long-term homeowners (20+ years), tired of filing insurance claims every few years, eco-conscious, non-HOA or HOA-approved areas, modern home styles in newer Pflugerville developments.</p>
                      </div>
                    </div>
                  </div>

                  {/* Materials to Avoid */}
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">❌ Materials to AVOID in Pflugerville</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-primary-900 mb-2">Standard 3-Tab or Basic Architectural Shingles</p>
                        <p className="text-sm text-primary-700"><strong>Why this is a mistake:</strong> Zero hail protection - will fail in Pflugerville's regular golf ball/baseball hail storms. Only 15-20 year lifespan before needing replacement. No insurance discounts. You'll pay $2,500-$4,000 deductible every 8-12 years on average. Only $2k-$3k cheaper upfront than impact-resistant, but you lose that savings in your FIRST insurance claim. Then keep losing money with every future Pflugerville hailstorm.</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900 mb-2">Concrete or Clay Tile</p>
                        <p className="text-sm text-primary-700"><strong>Why avoid:</strong> Tiles crack and break from Pflugerville's frequent hail. Very expensive to replace broken tiles. Heavy (requires structural reinforcement). Not common in Pflugerville neighborhoods, hard to match if repairs needed. Long lead times for materials. Insurance claims process more complicated. Not worth the hassle.</p>
                      </div>
                    </div>
                  </div>

                  {/* Color Guide */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4">🎨 Most Popular Pflugerville Roof Colors</h3>
                    <p className="text-sm text-primary-700 mb-4">Pflugerville homeowners prefer neutral earth tones that complement Texas homes. HOA communities have approved lists:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-amber-700 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Weathered Wood</p>
                        <p className="text-xs text-primary-600">#1 in Pflugerville</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-stone-600 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Driftwood</p>
                        <p className="text-xs text-primary-600">Blackhawk Favorite</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-gray-500 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Georgetown Gray</p>
                        <p className="text-xs text-primary-600">Modern Homes</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-slate-700 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Charcoal</p>
                        <p className="text-xs text-primary-600">Contemporary</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-gray-400 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Pewter Gray</p>
                        <p className="text-xs text-primary-600">Versatile</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-amber-800 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Mission Brown</p>
                        <p className="text-xs text-primary-600">Traditional</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-stone-300 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Oyster Gray</p>
                        <p className="text-xs text-primary-600">Light Option</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-slate-800 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Onyx Black</p>
                        <p className="text-xs text-primary-600">Bold Choice</p>
                      </div>
                    </div>
                    <p className="text-xs text-primary-600 mt-4 text-center">HOA communities: Always verify approved colors before ordering. We handle HOA submissions and approvals.</p>
                  </div>
                </div>
              </div>

              {/* Pflugerville Roof Replacement Costs */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Pflugerville Roof Replacement Costs: Complete Pricing Guide
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Pflugerville roof replacement costs are competitive with other Austin metro suburbs. Most homes fall in the $14k-$23k range:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">1,600-2,000 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: Older Pflugerville, single-story or small two-story, simple roof, 18-24 squares</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$11,000-$16,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">2,000-2,500 sq ft Home (Most Common)</p>
                        <p className="text-sm text-primary-700">Typical: Standard Pflugerville two-story, 3-4 bed/2-3 bath, moderate complexity, 24-28 squares - Gatlinburg, Highland Park, Willow Creek</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$14,000-$21,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">2,500-3,000 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: Larger two-story, 4-bed/3-bath, increased complexity, 28-35 squares - Blackhawk, Sendero Springs, Brookfield</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$17,000-$25,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">3,000-3,500 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: Premium homes, 4-5 bed/3-4 bath, complex roof, 35-42 squares - Falcon Pointe, larger Blackhawk homes</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$21,000-$32,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">3,500+ sq ft Luxury Home</p>
                        <p className="text-sm text-primary-700">Typical: High-end Pflugerville homes, highly complex roofs, 42+ squares - Custom Falcon Pointe homes</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$28,000-$50,000+</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">📈 What INCREASES Cost in Pflugerville</h3>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+15-25%</span>
                        <span><strong>Steep pitch roofs</strong> (safety equipment, slower work - some Falcon Pointe customs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+15-30%</span>
                        <span><strong>Complex roof lines</strong> (multiple valleys, dormers, turrets - Blackhawk customs, Falcon Pointe)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+20-35%</span>
                        <span><strong>Two-story homes</strong> (most Pflugerville homes - requires more setup)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+$2k-4k</span>
                        <span><strong>Decking repairs</strong> (common in older Pflugerville, Gatlinburg, Highland Park)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+100-200%</span>
                        <span><strong>Metal roofing upgrade</strong> ($24k-$42k vs $14k-$21k for shingles)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+$400-700</span>
                        <span><strong>Travis County permits</strong> (required for all replacements, HOA fees separate)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">📉 What DECREASES Cost in Pflugerville</h3>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Simple gable or hip roof</strong> (standard Pflugerville production homes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Low to moderate pitch</strong> (most Pflugerville homes, faster installation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Good existing decking</strong> (newer Pflugerville homes in Sendero Springs, Brookfield)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Insurance claim coverage</strong> (pay deductible only - $1.5k-$3k total cost)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Neighborhood group pricing</strong> (coordinate with neighbors for 10-15% discount)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Easy property access</strong> (wide Pflugerville streets, good driveways)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">💡 6 Ways Pflugerville Homeowners Save on Roof Replacement</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-700">
                    <div>
                      <p className="font-bold text-primary-900 mb-1">1. File Insurance Claims After Storms</p>
                      <p className="mb-3">Pflugerville gets damaging hail every 2-4 years. If your neighbors filed claims, you likely have damage too. Insurance covers 100% minus deductible ($1.5k-$3k). We handle entire claims process and adjuster meetings. This is how most Pflugerville homeowners afford roof replacements.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">2. Coordinate with Neighbors for Group Pricing</p>
                      <p className="mb-3">When we're replacing 5-10 roofs in one Pflugerville neighborhood (common after storms), we offer volume discounts of 10-15%. One material delivery, one crew, one mobilization = lower cost per home. Organize your street after storms!</p>
                      
                      <p className="font-bold text-primary-900 mb-1">3. Choose Impact-Resistant for Insurance Savings</p>
                      <p className="mb-3">$3k-$5k more upfront, but saves $400-$600/year on insurance (15-20% discount). Pays for itself in 7-10 years, then pure savings. Plus survives Pflugerville's hail better = fewer future claims.</p>
                    </div>
                    <div>
                      <p className="font-bold text-primary-900 mb-1">4. Bundle Multiple Services</p>
                      <p className="mb-3">Replace gutters, install gutter guards, or add ventilation at same time for 10-15% discount vs separate projects. One mobilization = lower overall cost.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">5. Schedule During Off-Season</p>
                      <p className="mb-3">Fall/winter (October-February) are slower. We may offer scheduling flexibility or discounts. Avoid June-August when Pflugerville's busiest after spring storm season.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">6. Take Advantage of 0% Financing</p>
                      <p className="mb-3">We offer 0% financing for 12-18 months through approved lenders. Spread cost into manageable monthly payments. Popular with young Pflugerville families. Ask about current financing promotions.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-primary-900 font-semibold mb-2">📞 Get Your Exact Pflugerville Roof Replacement Cost</p>
                  <p className="text-primary-700">
                    These are estimates. Your actual cost depends on your specific home, neighborhood, materials, and current conditions. We provide <strong>FREE inspections</strong> and detailed written quotes with no obligation. Pflugerville homeowners: We work in your neighborhoods weekly - ask neighbors about us! Call <strong>(512) 763-5277</strong> or schedule online for your personalized Pflugerville roof replacement estimate.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Cedar Park-specific deep content */}
          {location.slug === 'cedar-park' && (
            <div className="space-y-16 mt-16">
              {/* Cedar Park Neighborhoods Deep Dive */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Cedar Park Neighborhoods: Your Complete Roofing Guide by Area
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Cedar Park is one of Austin metro's premier family communities, known for excellent schools and well-planned neighborhoods. Here's what homeowners need to know about roofing in Cedar Park's most popular areas:
                </p>

                <div className="space-y-8">
                  {/* Avery Ranch */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Avery Ranch & Trails of Avery Ranch</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Premier Community Profile:</p>
                        <p className="mb-3">Cedar Park's flagship master-planned community, built 2000-present. 4,000+ homes, top-rated schools, extensive amenities (pools, trails, parks). Higher property values. Strong HOA maintaining community standards. Very popular with families and professionals.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Characteristics:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Homes 10-25 years old, first replacements starting now</li>
                          <li>Larger homes (2,500-4,000+ sq ft typical)</li>
                          <li>More complex roof lines with architectural features</li>
                          <li>Strict HOA color and material approval required</li>
                          <li>2024 hailstorm damaged many Avery Ranch roofs</li>
                          <li>Premium materials expected to match property values</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Best Materials for Avery Ranch:</p>
                        <p className="mb-3">Impact-resistant architectural shingles (CertainTeed Landmark Pro, Owens Corning Duration Storm). Earth tone colors per HOA: Weathered Wood, Driftwood, Georgetown Gray. Must submit HOA application before work.</p>
                        <p className="font-semibold text-primary-900 mb-2">Typical Investment:</p>
                        <p className="text-accent-600 font-bold text-xl">$18,000-$32,000</p>
                        <p className="text-sm">Larger homes, moderate to high complexity, premium materials, HOA compliance</p>
                      </div>
                    </div>
                  </div>

                  {/* Buttercup Creek */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Buttercup Creek & Anderson Mill</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Established Neighborhoods:</p>
                        <p className="mb-3">Built 1980s-2000s, some of Cedar Park's original suburban developments. Mix of original owners and young families. Mature trees, good schools, convenient location. More affordable than newer developments.</p>
                        <p className="font-semibold text-primary-900 mb-2">Common Roofing Needs:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Original roofs now 20-40+ years old (replacement due)</li>
                          <li>Many homes on 2nd roof replacement</li>
                          <li>Standard architectural or even 3-tab originally installed</li>
                          <li>Potential decking issues from age</li>
                          <li>Simpler roof lines than newer Cedar Park homes</li>
                          <li>Large trees = debris accumulation and algae</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Smart Upgrade Path:</p>
                        <p className="mb-3">Time to upgrade to impact-resistant shingles for hail protection and insurance savings. Algae-resistant formulas essential with tree coverage. Good value pricing for established neighborhoods.</p>
                        <p className="font-semibold text-primary-900 mb-2">Cost Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$13,000-$22,000</p>
                        <p className="text-sm">1,800-2,600 sq ft homes, straightforward roof lines, budget for possible decking repairs</p>
                      </div>
                    </div>
                  </div>

                  {/* Whitestone & Cypress Creek */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Whitestone & Cypress Creek</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Premium Golf Course Community:</p>
                        <p className="mb-3">Upscale neighborhood surrounding Whitestone golf course, built 1990s-2010s. Custom and semi-custom homes. Lake/golf course views. Higher-end finishes and larger lots. Strong community feel.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Considerations:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Larger homes (2,800-4,500+ sq ft common)</li>
                          <li>Complex roof lines on custom homes</li>
                          <li>Roofs 15-30 years old approaching replacement</li>
                          <li>Hail damage from Cedar Park's frequent storms</li>
                          <li>Premium materials expected in upscale community</li>
                          <li>Some homes have architectural features (turrets, dormers)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Recommended Materials:</p>
                        <p className="mb-3">Premium impact-resistant shingles to match home values. Designer colors popular. Some homeowners choose metal for longevity. Must match neighborhood aesthetics.</p>
                        <p className="font-semibold text-primary-900 mb-2">Investment Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$20,000-$38,000</p>
                        <p className="text-sm">Larger custom homes, high complexity, premium materials, golf course community standards</p>
                      </div>
                    </div>
                  </div>

                  {/* Twin Lakes & Lakeline */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Twin Lakes, Lakeline & Desert Oaks</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Mid-Range Cedar Park:</p>
                        <p className="mb-3">Built 2000s-2015, good value neighborhoods. Family-oriented, convenient to Lakeline Mall and I-35. Mix of production builders. Good schools. Popular with young professionals and growing families.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Situation:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Roofs 10-25 years old (varied ages)</li>
                          <li>Some starting first replacement wave</li>
                          <li>Standard two-story production homes</li>
                          <li>Moderate roof complexity</li>
                          <li>2024 storm created claims surge</li>
                          <li>HOA guidelines in some subdivisions</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Material Choices:</p>
                        <p className="mb-3">Impact-resistant architectural shingles standard recommendation. Neutral colors (grays, browns) most popular. Good ventilation essential for Cedar Park summers.</p>
                        <p className="font-semibold text-primary-900 mb-2">Typical Costs:</p>
                        <p className="text-accent-600 font-bold text-xl">$15,000-$24,000</p>
                        <p className="text-sm">Standard 2,100-2,800 sq ft Cedar Park homes, moderate complexity</p>
                      </div>
                    </div>
                  </div>

                  {/* Newer Cedar Park Developments */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">New Cedar Park Developments (2015-Present)</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Modern Construction:</p>
                        <p className="mb-3">Latest Cedar Park neighborhoods with newest building standards. Energy-efficient designs, modern amenities, strong HOAs. Built by major builders (DR Horton, Lennar, Taylor Morrison). Growing rapidly toward Leander.</p>
                        <p className="font-semibold text-primary-900 mb-2">New Home Roofing:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Homes under 10 years old with builder warranties</li>
                          <li>Modern architectural shingles already installed</li>
                          <li>Proper ventilation and installation practices</li>
                          <li>Won't need replacement until 2030-2045</li>
                          <li>Some had hail damage in 2024 storm (insurance claims)</li>
                          <li>Strict HOA color approval processes</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Future Replacement Planning:</p>
                        <p className="mb-3">When time comes, upgrade to impact-resistant for better protection. Match exact HOA colors. Coordinate with neighbors for group pricing potential.</p>
                        <p className="font-semibold text-primary-900 mb-2">Future Investment:</p>
                        <p className="text-accent-600 font-bold text-xl">$17,000-$27,000</p>
                        <p className="text-sm">Modern 2,300-3,000 sq ft homes when replacements needed in 15-20 years</p>
                      </div>
                    </div>
                  </div>

                  {/* Original Cedar Park */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Original Cedar Park & Older Neighborhoods</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Historic Cedar Park:</p>
                        <p className="mb-3">Original Cedar Park homes from 1960s-1980s near old downtown. Smaller homes on larger lots. Mature landscaping. Some being renovated by young buyers. Affordable entry to Cedar Park.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Challenges:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Original roofs 40-60+ years past due</li>
                          <li>On 2nd or 3rd replacement already</li>
                          <li>Decking repairs very common (budget $2k-$5k)</li>
                          <li>Simpler ranch-style roof lines (lower cost)</li>
                          <li>Mature trees providing shade but maintenance needed</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Practical Approach:</p>
                        <p className="mb-3">Quality architectural shingles appropriate for home values. Impact-resistant smart for insurance savings. Expect decking replacement in older homes. Simple roof lines keep costs reasonable.</p>
                        <p className="font-semibold text-primary-900 mb-2">Cost Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$11,000-$19,000</p>
                        <p className="text-sm">Smaller 1,500-2,200 sq ft homes, simple roof lines, plus decking repairs (common)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-primary-900 font-semibold mb-2">💡 Cedar Park Roofing Pro Tip:</p>
                  <p className="text-primary-700">
                    Cedar Park sits in the same hail corridor as Round Rock and Georgetown, experiencing frequent severe storms. The March 2024 storm heavily impacted Avery Ranch, Buttercup Creek, and northern Cedar Park neighborhoods. <strong>Avery Ranch residents: Your HOA requires architectural approval—we handle all paperwork and ensure color compliance.</strong> After major storms, coordinate with neighbors for potential group pricing (10-15% savings when we work multiple homes). Free inspections available to assess storm damage.
                  </p>
                </div>
              </div>

              {/* Cedar Park Storm History */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Cedar Park Storm History & Hail Damage Patterns
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Cedar Park shares Williamson County's unfortunate position in "Hail Alley," experiencing severe storms regularly. Understanding this history is crucial for protecting your Cedar Park home:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">🌩️</span> Major Cedar Park Hailstorms (2015-2025)
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-600 pl-4">
                        <p className="font-bold text-primary-900">March 2024 - Avery Ranch & Northern Cedar Park Hit Hard</p>
                        <p className="text-sm text-primary-700">Golf ball to baseball-sized hail across northern Cedar Park and Avery Ranch. Southern Cedar Park received quarter to golf ball hail. <strong>Estimated 35-45% of Cedar Park homes sustained roof damage.</strong> Avery Ranch particularly impacted. Thousands of insurance claims filed throughout Cedar Park neighborhoods.</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="font-bold text-primary-900">May 2022 - Whitestone to Buttercup Creek</p>
                        <p className="text-sm text-primary-700">Severe supercell tracked across Cedar Park with golf ball to baseball hail. Whitestone, Buttercup Creek, and Anderson Mill heavily damaged. Wind gusts to 70 mph. Many custom homes in Whitestone had complex roof damage requiring full replacement.</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <p className="font-bold text-primary-900">April 2021 - Round Rock to Cedar Park Path</p>
                        <p className="text-sm text-primary-700">Major hailstorm moved from Round Rock through Cedar Park toward Leander. Baseball-sized hail reported in parts of Cedar Park. This storm created the first major insurance claims wave in newer Avery Ranch sections built in the 2010s.</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <p className="font-bold text-primary-900">March 2016 - $1.4 Billion Catastrophic Event</p>
                        <p className="text-sm text-primary-700">Part of the devastating Williamson County hailstorm. Cedar Park received golf ball to baseball hail throughout the city. Entire neighborhoods like Buttercup Creek and Anderson Mill had 80-90%+ replacement rates. This event redefined roofing standards in Cedar Park.</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <p className="font-bold text-primary-900">Cedar Park Storm Pattern: Every 2-4 Years</p>
                        <p className="text-sm text-primary-700">Cedar Park experiences a major (potentially roof-totaling) hailstorm approximately every 2-4 years, similar to Round Rock and Georgetown. Minor hail events occur multiple times annually. Living in Cedar Park means planning for regular hail exposure.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">📊</span> Cedar Park Hail Statistics & Patterns
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Why Cedar Park Gets Hit Frequently:</p>
                        <p className="text-sm text-primary-700 mb-2">Cedar Park sits in northwest Austin metro along the I-35 corridor where storms frequently track and intensify. Proximity to Hill Country creates additional weather dynamics. Shares the same "Hail Alley" designation as Round Rock and Georgetown.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Peak Hail Season: March - May</p>
                        <p className="text-sm text-primary-700 mb-2">75% of Cedar Park's damaging hail occurs in spring. April is statistically the most dangerous month.</p>
                        <div className="bg-primary-50 p-3 rounded">
                          <p className="text-xs font-semibold text-primary-900 mb-1">Monthly Risk Distribution:</p>
                          <p className="text-xs text-primary-700">March: 25% • April: 30% • May: 20% • Other: 25%</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">North vs Central vs South Cedar Park:</p>
                        <p className="text-sm text-primary-700 mb-2">Northern Cedar Park (Avery Ranch area) experiences slightly higher hail frequency. Central Cedar Park (Buttercup Creek, Whitestone) gets frequent hits. Southern Cedar Park (Lakeline area) also regularly affected. All areas at significant risk.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Expected Hail Frequency in Cedar Park:</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Pea-sized (1/4") - Cosmetic only</span>
                            <span className="font-bold text-primary-900">5-8x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Quarter-sized (1") - Minor damage</span>
                            <span className="font-bold text-primary-900">2-4x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Golf ball (1.75") - Major damage</span>
                            <span className="font-bold text-accent-600">1-2x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Baseball (2.75") - Roof totaled</span>
                            <span className="font-bold text-red-600">Every 2-4 years</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Softball (4") - Catastrophic</span>
                            <span className="font-bold text-red-600">Every 8-12 years</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">Protecting Your Cedar Park Home from Storm Damage</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-primary-900 mb-2">✅ Before Storm Season (Essential Steps):</p>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• <strong>Install Class 4 impact-resistant shingles</strong> - Essential in Cedar Park</li>
                        <li>• Document current roof condition with dated photos</li>
                        <li>• Review homeowner's insurance - know deductible and coverage limits</li>
                        <li>• Trim tree branches 10+ feet away from roof</li>
                        <li>• Sign up for Williamson County emergency alerts</li>
                        <li>• Save Ripple Roofing: (512) 763-5277 for post-storm inspections</li>
                        <li>• Avery Ranch: Check HOA approved roof colors now</li>
                        <li>• Talk to neighbors about past storm damage experiences</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900 mb-2">⚠️ After a Cedar Park Hailstorm:</p>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• <strong>Inspect within 1-2 weeks</strong> - damage may not be immediately obvious</li>
                        <li>• Check gutters for shingle granule accumulation (damage indicator)</li>
                        <li>• Look for dents on metal (mailbox, AC unit, vents, gutters)</li>
                        <li>• Call us for FREE professional inspection - we assess from roof</li>
                        <li>• Document ALL damage with photos and videos</li>
                        <li>• File insurance claim if damage found (1 year deadline typically)</li>
                        <li>• Have us present at adjuster meeting (crucial for proper scope)</li>
                        <li>• Coordinate with neighbors - group pricing available (10-15% off)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Roofing Materials for Cedar Park */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Best Roofing Materials for Cedar Park Homes
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Cedar Park's hail frequency and Texas heat require specific roofing materials. Here's what performs best for Cedar Park's diverse neighborhoods:
                </p>

                <div className="space-y-6">
                  {/* #1 Recommendation */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-500">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl">🏆</span>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-900">#1 Recommendation: Class 4 Impact-Resistant Architectural Shingles</h3>
                        <p className="text-accent-600 font-semibold">Best Value + Protection for Cedar Park's Hail Pattern</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Top Choice: CertainTeed Landmark Pro IR</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 UL 2218 impact rating</li>
                          <li>• Survives baseball-sized hail</li>
                          <li>• 130 mph wind resistance</li>
                          <li>• Cool Roof Technology (heat reflection)</li>
                          <li>• 50-year warranty</li>
                          <li>• 15-35% insurance discount</li>
                          <li>• Most popular in Avery Ranch</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$14,500-$21,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft Cedar Park home)</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Excellent: GAF Timberline HDZ IR</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 impact-rated</li>
                          <li>• LayerLock technology</li>
                          <li>• 130 mph wind warranty</li>
                          <li>• Widely available</li>
                          <li>• 50-year limited warranty</li>
                          <li>• 10-35% insurance savings</li>
                          <li>• Popular in Whitestone</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$15,000-$22,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft Cedar Park home)</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Premium: Owens Corning Duration Storm</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 UL 2218 rated</li>
                          <li>• SureNail Technology</li>
                          <li>• 130 mph wind resistance</li>
                          <li>• TruDefinition color</li>
                          <li>• 50-year non-prorated warranty</li>
                          <li>• Maximum insurance discounts</li>
                          <li>• Buttercup Creek favorite</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$15,500-$23,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft Cedar Park home)</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                      <p className="font-bold text-primary-900 mb-2">💰 Impact-Resistant ROI for Cedar Park Homeowners:</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-700">
                        <div>
                          <p className="font-semibold text-primary-900 mb-1">Why Essential in Cedar Park:</p>
                          <ul className="space-y-1">
                            <li>• Withstands golf ball/baseball hail Cedar Park gets every 2-4 years</li>
                            <li>• 15-35% insurance discount (typically 20% in Cedar Park)</li>
                            <li>• Average $3,000/year home insurance × 20% = $600/year savings</li>
                            <li>• Over 30 years: $18,000 in insurance savings</li>
                            <li>• Upgrade cost over standard: $3,000-$5,000</li>
                            <li>• <strong>Pays for itself in 5-8 years, then pure profit!</strong></li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-900 mb-1">Additional Benefits:</p>
                          <ul className="space-y-1">
                            <li>• Survives storms that total standard roofs (avoid repeat claims)</li>
                            <li>• Better heat reflection = 10-15% cooling cost savings</li>
                            <li>• 50-year lifespan vs 20-25 for standard shingles</li>
                            <li>• Higher home resale value (buyers demand hail protection)</li>
                            <li>• Peace of mind during Cedar Park's intense storm seasons</li>
                            <li>• Required by many Avery Ranch HOA sections</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metal Roofing */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-600">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Alternative: Standing Seam Metal Roofing</h3>
                    <p className="text-primary-700 mb-4">Growing popularity in Whitestone and custom Avery Ranch homes.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">✅ Pros for Cedar Park:</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• <strong>Ultimate hail resistance</strong> - may dent but never punctures</li>
                          <li>• <strong>50-70 year lifespan</strong> - install once in lifetime</li>
                          <li>• Survives softball hail (proven in 2024 storm)</li>
                          <li>• 30-40% cooling cost savings (major in Cedar Park summers)</li>
                          <li>• 140+ mph wind rating</li>
                          <li>• Eco-friendly (100% recyclable)</li>
                          <li>• Modern aesthetic popular in newer Cedar Park</li>
                          <li>• Never file hail claims again</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-4 text-xl">$24,000-$44,000</p>
                        <p className="text-sm text-primary-600">(2,000 sq ft Cedar Park home, standing seam)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">⚠️ Considerations:</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Higher upfront cost (2.5-3x impact shingles)</li>
                          <li>• HOA restrictions in some Cedar Park communities (verify first)</li>
                          <li>• Limited color options (grays, blacks, browns, copper)</li>
                          <li>• Louder during heavy rain/hail than shingles</li>
                          <li>• Requires specialized installation expertise</li>
                          <li>• Best for simple roof lines (complex = very expensive)</li>
                        </ul>
                        <p className="font-semibold text-primary-900 mt-4 mb-1">Best For:</p>
                        <p className="text-sm text-primary-700">Long-term homeowners (20+ years), tired of hail claims, eco-conscious, non-HOA or approved areas, custom Whitestone/Avery Ranch homes, simple roof lines.</p>
                      </div>
                    </div>
                  </div>

                  {/* Materials to Avoid */}
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">❌ Materials to AVOID in Cedar Park</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-primary-900 mb-2">Standard 3-Tab or Basic Architectural Shingles</p>
                        <p className="text-sm text-primary-700"><strong>Why this is a mistake:</strong> Zero hail protection - will fail in Cedar Park's regular baseball hail. Only 15-20 year lifespan. No insurance discounts. You'll pay $2,500-$4,000 deductible every 8-12 years. Only $2k-$3k cheaper initially than impact-resistant, but you lose that in your FIRST deductible payment. Then keep losing with every future Cedar Park storm. False economy.</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900 mb-2">Concrete or Clay Tile</p>
                        <p className="text-sm text-primary-700"><strong>Why avoid:</strong> Tiles crack and shatter from Cedar Park's hail. Very expensive to replace broken tiles ($300-$500 each). Heavy (requires structural upgrades). Not common in Cedar Park, hard to match. Long material lead times. More complex insurance claims. Not worth the hassle in hail-prone area.</p>
                      </div>
                    </div>
                  </div>

                  {/* Color Guide */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4">🎨 Most Popular Cedar Park Roof Colors</h3>
                    <p className="text-sm text-primary-700 mb-4">Cedar Park homeowners prefer earth tones. Avery Ranch has specific HOA-approved colors:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-amber-700 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Weathered Wood</p>
                        <p className="text-xs text-primary-600">#1 in Avery Ranch</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-stone-600 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Driftwood</p>
                        <p className="text-xs text-primary-600">Buttercup Creek</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-gray-500 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Georgetown Gray</p>
                        <p className="text-xs text-primary-600">Modern Homes</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-slate-700 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Charcoal</p>
                        <p className="text-xs text-primary-600">Whitestone Popular</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-gray-400 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Pewter Gray</p>
                        <p className="text-xs text-primary-600">Versatile Choice</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-amber-800 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Mission Brown</p>
                        <p className="text-xs text-primary-600">Traditional</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-stone-300 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Oyster Gray</p>
                        <p className="text-xs text-primary-600">Light Option</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-slate-800 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Onyx Black</p>
                        <p className="text-xs text-primary-600">Contemporary</p>
                      </div>
                    </div>
                    <p className="text-xs text-primary-600 mt-4 text-center">HOA communities (especially Avery Ranch): Always verify approved colors before ordering. We handle all HOA submissions and architectural approvals.</p>
                  </div>
                </div>
              </div>

              {/* Cedar Park Roof Replacement Costs */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Cedar Park Roof Replacement Costs: Complete Pricing Guide
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Cedar Park roof replacement costs vary by neighborhood and home size. Avery Ranch homes typically cost more due to size and complexity:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">1,500-2,000 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: Older Cedar Park, simple roof, 18-24 squares, original neighborhoods</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$11,000-$16,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">2,000-2,500 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: Standard Cedar Park two-story, 3-4 bed/2-3 bath, moderate complexity, 24-28 squares - Buttercup Creek, Twin Lakes</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$14,000-$21,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">2,500-3,000 sq ft Home (Common in Avery Ranch)</p>
                        <p className="text-sm text-primary-700">Typical: Larger two-story, 4-bed/3-bath, increased complexity, 28-35 squares - Standard Avery Ranch size</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$17,000-$26,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">3,000-3,500 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: Larger Avery Ranch, Whitestone homes, 4-5 bed/3-4 bath, complex roof, 35-42 squares</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$21,000-$33,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">3,500+ sq ft Luxury Home</p>
                        <p className="text-sm text-primary-700">Typical: Custom Avery Ranch, premium Whitestone estates, highly complex roofs, 42+ squares</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$28,000-$55,000+</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded mb-8">
                  <p className="font-bold text-primary-900 mb-2">💡 Avery Ranch Homeowners: Important Pricing & Process Notes</p>
                  <p className="text-sm text-primary-700 mb-3">Avery Ranch is Cedar Park's premier community with specific requirements:</p>
                  <ul className="text-sm text-primary-700 space-y-1">
                    <li>• <strong>HOA Architectural Approval Required:</strong> We handle all paperwork, photos, and color selection forms. Approval typically takes 2-3 weeks—plan ahead.</li>
                    <li>• <strong>Approved Colors:</strong> Weathered Wood, Driftwood, Georgetown Gray most common. Must match neighborhood standards.</li>
                    <li>• <strong>Larger Homes:</strong> Most Avery Ranch homes 2,500-3,500+ sq ft = higher costs than other Cedar Park neighborhoods.</li>
                    <li>• <strong>Complex Roof Lines:</strong> Many Avery Ranch homes have architectural features increasing complexity and cost.</li>
                    <li>• <strong>Group Pricing Available:</strong> When working multiple Avery Ranch homes after storms, we offer 10-15% discounts. Coordinate with neighbors!</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">📈 What INCREASES Cost in Cedar Park</h3>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+15-25%</span>
                        <span><strong>Steep pitch roofs</strong> (safety equipment, slower work - some Whitestone customs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+15-30%</span>
                        <span><strong>Complex roof lines</strong> (valleys, dormers, turrets - Avery Ranch customs, Whitestone)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+20-35%</span>
                        <span><strong>Two-story homes</strong> (most Cedar Park homes require additional setup)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+$2k-5k</span>
                        <span><strong>Decking repairs</strong> (common in Buttercup Creek, Anderson Mill, older Cedar Park)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+100-200%</span>
                        <span><strong>Metal roofing upgrade</strong> ($24k-$44k vs $14k-$21k shingles)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+$400-800</span>
                        <span><strong>Permits & fees</strong> (Williamson County permits, HOA fees if applicable)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">📉 What DECREASES Cost in Cedar Park</h3>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Simple gable or hip roof</strong> (standard Cedar Park production homes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Low to moderate pitch</strong> (most Cedar Park homes, faster installation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Good existing decking</strong> (newer Avery Ranch, Twin Lakes, Lakeline homes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Insurance claim coverage</strong> (pay deductible only - $1.5k-$3k total cost)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Neighborhood group pricing</strong> (10-15% off when working multiple homes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Easy property access</strong> (wide Cedar Park streets, good driveways)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">💡 6 Ways Cedar Park Homeowners Save on Roof Replacement</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-700">
                    <div>
                      <p className="font-bold text-primary-900 mb-1">1. File Insurance Claims After Storms</p>
                      <p className="mb-3">Cedar Park gets damaging hail every 2-4 years. The 2024 storm damaged 35-45% of Cedar Park roofs. If your neighbors filed claims, check your roof too. Insurance covers 100% minus deductible. We handle entire claims process and adjuster meetings.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">2. Coordinate with Neighbors (Especially Avery Ranch)</p>
                      <p className="mb-3">When we work 5-10 homes in one Cedar Park neighborhood, we offer 10-15% group discounts. One material delivery, one crew = lower per-home cost. Organize your street after major storms!</p>
                      
                      <p className="font-bold text-primary-900 mb-1">3. Choose Impact-Resistant for Insurance Savings</p>
                      <p className="mb-3">$3k-$5k more upfront, but saves $500-$700/year on insurance (20% typical discount in Cedar Park). Pays for itself in 5-8 years. Plus survives Cedar Park hail = fewer claims.</p>
                    </div>
                    <div>
                      <p className="font-bold text-primary-900 mb-1">4. Bundle Multiple Services</p>
                      <p className="mb-3">Replace gutters, install gutter guards, or add ventilation simultaneously for 10-15% savings vs separate projects. One mobilization = lower total cost.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">5. Schedule During Off-Season</p>
                      <p className="mb-3">Fall/winter (October-February) are slower. We may offer flexibility or discounts. Avoid June-August when Cedar Park's busiest after spring storms.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">6. Take Advantage of 0% Financing</p>
                      <p className="mb-3">We offer 0% financing for 12-18 months through approved lenders. Spread cost into manageable payments. Popular with Avery Ranch families. Ask about current promotions.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-primary-900 font-semibold mb-2">📞 Get Your Exact Cedar Park Roof Replacement Cost</p>
                  <p className="text-primary-700">
                    These are estimates. Your actual cost depends on your specific home, neighborhood, materials, and current conditions. We provide <strong>FREE inspections</strong> and detailed written quotes with no obligation. Avery Ranch homeowners: We handle all HOA paperwork and approvals! Call <strong>(512) 763-5277</strong> or schedule online for your personalized Cedar Park roof replacement estimate.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Leander-specific deep content */}
          {location.slug === 'leander' && (
            <div className="space-y-16 mt-16">
              {/* Leander Neighborhoods Deep Dive */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Leander Neighborhoods: Your Complete Roofing Guide by Area
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Leander is one of Texas's fastest-growing cities, exploding from 8,000 residents in 2000 to 70,000+ today. This rapid growth means newer homes, modern construction, and master-planned communities throughout. Here's what Leander homeowners need to know about roofing:
                </p>

                <div className="space-y-8">
                  {/* Crystal Falls */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Crystal Falls & Crystal Falls Parkway</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Leander's Premier Community:</p>
                        <p className="mb-3">Leander's flagship master-planned development, built 2000s-present. 3,000+ homes with resort-style amenities (multiple pools, lazy river, sports fields, trails). Strong HOA. Highly desirable location. Consistently rated among best communities in Austin metro.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Characteristics:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Mix of ages: 5-25 years old depending on section</li>
                          <li>Older sections (2000-2010) entering replacement window</li>
                          <li>Newer sections still under builder warranty</li>
                          <li>Larger homes (2,500-4,000+ sq ft common)</li>
                          <li>Modern architectural shingles standard</li>
                          <li>HOA color/material approval required</li>
                          <li>March 2024 storm heavily impacted older sections</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Best Materials for Crystal Falls:</p>
                        <p className="mb-3">Impact-resistant architectural shingles (Owens Corning Duration Storm, CertainTeed Landmark Pro IR). Earth tones per HOA: Weathered Wood, Driftwood, Georgetown Gray. Must get HOA architectural approval before ordering.</p>
                        <p className="font-semibold text-primary-900 mb-2">Typical Investment:</p>
                        <p className="text-accent-600 font-bold text-xl">$17,000-$30,000</p>
                        <p className="text-sm">2,400-3,500 sq ft homes, moderate complexity, HOA compliance, premium materials</p>
                      </div>
                    </div>
                  </div>

                  {/* Mason Hills */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Mason Hills & Mason Creek</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Affordable Leander Entry:</p>
                        <p className="mb-3">Built 1990s-2010s, more established than Crystal Falls. Mix of original owners and young families upgrading from Austin. Good schools, convenient location, more affordable than newer Leander developments. Mature trees, friendly neighborhoods.</p>
                        <p className="font-semibold text-primary-900 mb-2">Common Roofing Needs:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Roofs 15-30 years old (prime replacement age)</li>
                          <li>Many starting first replacement wave now</li>
                          <li>Standard two-story production homes</li>
                          <li>Less complex roof lines than newer communities</li>
                          <li>2024 storm created surge of claims</li>
                          <li>Some areas without strict HOA (more flexibility)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Smart Upgrade Strategy:</p>
                        <p className="mb-3">Perfect time to upgrade to impact-resistant shingles for Williamson County hail protection. Good value pricing. Algae-resistant formulas help with tree coverage. Popular color: Weathered Wood, Driftwood.</p>
                        <p className="font-semibold text-primary-900 mb-2">Cost Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$14,000-$23,000</p>
                        <p className="text-sm">2,000-2,800 sq ft homes, straightforward roof lines, good value</p>
                      </div>
                    </div>
                  </div>

                  {/* Summerlyn */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Summerlyn</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Modern Master-Planned Living:</p>
                        <p className="mb-3">Built 2015-present by major builders (Taylor Morrison, DR Horton). Modern amenities (pools, fitness center, trails, parks). Strong HOA maintaining community standards. Energy-efficient modern homes. Growing rapidly with new phases constantly opening.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Situation:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Very new homes (5-10 years old)</li>
                          <li>Still under builder warranties in many cases</li>
                          <li>Modern architectural shingles installed</li>
                          <li>Proper ventilation and installation standards</li>
                          <li>Won't need replacement until 2030-2040</li>
                          <li>Some had hail damage claims in 2024</li>
                          <li>HOA color approval process required</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Future Replacement Planning:</p>
                        <p className="mb-3">When time comes, upgrade to Class 4 impact-resistant for maximum hail protection. Match exact HOA colors. Contemporary grays popular in Summerlyn. Coordinate with neighbors for group pricing.</p>
                        <p className="font-semibold text-primary-900 mb-2">Future Investment:</p>
                        <p className="text-accent-600 font-bold text-xl">$16,000-$26,000</p>
                        <p className="text-sm">2,200-3,000 sq ft modern homes when replacements needed in 15-20 years</p>
                      </div>
                    </div>
                  </div>

                  {/* Travisso */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Travisso</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Luxury Leander Living:</p>
                        <p className="mb-3">Built 2016-present, Leander's newest upscale master-planned community. Premium finishes, larger lots, Hill Country views. Resort-style amenities rivaling Crystal Falls. Modern energy-efficient construction. Attracting affluent families and retirees.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Characteristics:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Brand new homes (1-9 years old)</li>
                          <li>Premium architectural shingles already installed</li>
                          <li>Some custom homes with complex roof lines</li>
                          <li>Strict architectural review for all changes</li>
                          <li>Many homes 3,000-4,500+ sq ft</li>
                          <li>2024 storm hit some sections (insurance claims)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Premium Materials Expected:</p>
                        <p className="mb-3">When replacement time comes (2030s-2040s), Class 4 impact-resistant premium shingles or standing seam metal roofing. Designer colors matching luxury aesthetics. Must maintain community standards.</p>
                        <p className="font-semibold text-primary-900 mb-2">Future Cost Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$22,000-$40,000+</p>
                        <p className="text-sm">Larger luxury homes, complex roof lines, premium materials, architectural review</p>
                      </div>
                    </div>
                  </div>

                  {/* San Gabriel Village & Block House Creek */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">San Gabriel Village & Block House Creek</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Mid-Range Leander:</p>
                        <p className="mb-3">Built 2000s-2015, established neighborhoods with good value. Family-friendly, convenient to schools and shopping. More affordable than Crystal Falls or Travisso. Mix of production builders. Some HOA sections, some more flexible.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Timeline:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Roofs 10-25 years old (varied ages)</li>
                          <li>Older sections entering replacement window</li>
                          <li>Standard two-story homes (2,000-2,800 sq ft)</li>
                          <li>Moderate roof complexity</li>
                          <li>March 2024 storm damage widespread</li>
                          <li>Good opportunity for group neighborhood pricing</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Practical Approach:</p>
                        <p className="mb-3">Impact-resistant architectural shingles provide best value and protection. Neutral colors (grays, browns, tans) most popular. Good ventilation critical for Leander summers. Check with neighbors about timing for group discounts.</p>
                        <p className="font-semibold text-primary-900 mb-2">Typical Costs:</p>
                        <p className="text-accent-600 font-bold text-xl">$15,000-$24,000</p>
                        <p className="text-sm">Standard 2,100-2,800 sq ft Leander homes, moderate complexity</p>
                      </div>
                    </div>
                  </div>

                  {/* Original Old Town Leander */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-500">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Original Leander & Old Town</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-primary-700">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Historic Leander:</p>
                        <p className="mb-3">Original Leander homes from 1970s-1990s near historic downtown and train station. Smaller homes on larger lots. Mix of original owners and young buyers renovating. More affordable entry to Leander. Charming older neighborhoods. MetroRail access.</p>
                        <p className="font-semibold text-primary-900 mb-2">Roofing Challenges:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Roofs 30-50+ years past prime (overdue)</li>
                          <li>On 2nd or 3rd replacement already</li>
                          <li>Decking repairs common (budget $2k-$5k extra)</li>
                          <li>Simpler ranch and basic two-story designs</li>
                          <li>No HOA restrictions (material flexibility)</li>
                          <li>Mature trees = debris and algae concerns</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Value Approach:</p>
                        <p className="mb-3">Quality architectural shingles appropriate for home values. Impact-resistant smart for insurance savings ($600/year). Simple roof lines keep costs reasonable. Expect decking replacement on older homes. Algae-resistant shingles recommended.</p>
                        <p className="font-semibold text-primary-900 mb-2">Cost Range:</p>
                        <p className="text-accent-600 font-bold text-xl">$11,000-$19,000</p>
                        <p className="text-sm">Smaller 1,500-2,200 sq ft homes, simple lines, plus decking repairs (common)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-primary-900 font-semibold mb-2">💡 Leander Roofing Pro Tip:</p>
                  <p className="text-primary-700">
                    Leander sits in Williamson County's hail corridor between Georgetown and Cedar Park, experiencing the same frequent severe storms. The March 2024 hailstorm damaged thousands of Leander roofs, especially in Crystal Falls and Mason Hills. <strong>Crystal Falls & Summerlyn residents: Your HOAs require architectural approval—we handle all paperwork and color matching.</strong> Leander's rapid growth means whole neighborhoods replace roofs simultaneously after storms—coordinate with neighbors for 10-15% group discounts! Free post-storm inspections available citywide.
                  </p>
                </div>
              </div>

              {/* Leander Storm History */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Leander Storm History & Hail Damage Patterns
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Leander shares Georgetown and Cedar Park's position in Williamson County's notorious "Hail Alley," experiencing destructive storms with alarming regularity. As Leander's newest city, understanding this storm history is crucial:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">🌩️</span> Major Leander Hailstorms (2015-2025)
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-600 pl-4">
                        <p className="font-bold text-primary-900">March 2024 - Crystal Falls & North Leander Devastated</p>
                        <p className="text-sm text-primary-700">Baseball to softball-sized hail across northern Leander including Crystal Falls, Summerlyn, and Travisso. Southern Leander (Mason Hills, Block House Creek) received golf ball hail. <strong>Estimated 40-50% of Leander homes sustained roof damage requiring replacement.</strong> Crystal Falls particularly hard hit with entire sections filing simultaneous claims. Largest insurance event in Leander history.</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="font-bold text-primary-900">May 2022 - Western Leander Path</p>
                        <p className="text-sm text-primary-700">Severe supercell tracked from Cedar Park through western Leander toward Bertram. Golf ball to baseball hail across Crystal Falls and newer western developments. 60+ mph winds. Many newer Travisso homes experienced their first major storm damage. Thousands of claims filed.</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <p className="font-bold text-primary-900">April 2021 - Round Rock to Leander Corridor</p>
                        <p className="text-sm text-primary-700">Major hailstorm followed I-35/US 183 corridor through Georgetown, Cedar Park, and into Leander. Baseball-sized hail reported throughout Leander. Mason Hills and San Gabriel Village heavily impacted. This storm put Leander on the map for hail damage—many newer residents experienced severe Texas weather for first time.</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <p className="font-bold text-primary-900">March 2016 - $1.4 Billion Williamson County Catastrophe</p>
                        <p className="text-sm text-primary-700">Part of the historic Williamson County disaster. Leander received golf ball to baseball hail citywide. Crystal Falls (then newer) had 70-80% roof replacement rates. Mason Hills nearly 100% replacements. This event established impact-resistant shingles as the standard for Leander.</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <p className="font-bold text-primary-900">Leander Pattern: Every 2-4 Years (Like Georgetown)</p>
                        <p className="text-sm text-primary-700">Leander experiences a major (roof-totaling potential) hailstorm every 2-4 years. Minor hail occurs 5-8 times annually. Living in Leander means accepting hail as inevitable and planning accordingly with impact-resistant materials.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">📊</span> Leander Hail Statistics & Risk Data
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Why Leander Gets Hammered:</p>
                        <p className="text-sm text-primary-700 mb-2">Leander sits at the northwest edge of Austin metro where Hill Country geography creates perfect conditions for hail formation. Storms intensify as they move northwest from Austin along the I-35/US 183 corridor. Same "Hail Alley" designation as Georgetown and Cedar Park—one of Texas's highest-risk areas.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Peak Danger: March - May</p>
                        <p className="text-sm text-primary-700 mb-2">80% of Leander's damaging hail falls in spring. April is the most dangerous month statistically.</p>
                        <div className="bg-primary-50 p-3 rounded">
                          <p className="text-xs font-semibold text-primary-900 mb-1">Monthly Risk Distribution:</p>
                          <p className="text-xs text-primary-700">March: 25% • April: 35% • May: 20% • Other: 20%</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">North vs South Leander Patterns:</p>
                        <p className="text-sm text-primary-700 mb-2">Northern Leander (Crystal Falls, Travisso, Summerlyn) experiences highest hail frequency and largest sizes. Central Leander (San Gabriel Village) moderate risk. Southern Leander (toward Cedar Park line) also frequently hit. All areas high risk—no "safe" zones.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">Expected Hail Frequency in Leander:</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Pea-sized (1/4") - Cosmetic only</span>
                            <span className="font-bold text-primary-900">6-10x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Quarter-sized (1") - Minor damage</span>
                            <span className="font-bold text-primary-900">3-5x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Golf ball (1.75") - Major damage</span>
                            <span className="font-bold text-accent-600">2-3x per year</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Baseball (2.75") - Roof totaled</span>
                            <span className="font-bold text-red-600">Every 2-4 years</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-primary-700">Softball (4") - Catastrophic</span>
                            <span className="font-bold text-red-600">Every 8-15 years</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">Protecting Your Leander Home from Storm Damage</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-primary-900 mb-2">✅ Before Storm Season (Critical for Leander):</p>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• <strong>Install Class 4 impact-resistant shingles</strong> - Absolutely essential in Leander</li>
                        <li>• Document current roof condition with dated photos and videos</li>
                        <li>• Review homeowner's insurance - confirm coverage limits and deductible</li>
                        <li>• Trim tree branches 10+ feet from roof (especially older Leander neighborhoods)</li>
                        <li>• Sign up for Williamson County CodeRED emergency alerts</li>
                        <li>• Save Ripple Roofing: (512) 763-5277 for immediate post-storm inspections</li>
                        <li>• Crystal Falls/Summerlyn: Get approved roof colors list from HOA now</li>
                        <li>• Join neighborhood Facebook/Nextdoor - coordinate group pricing after storms</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900 mb-2">⚠️ After a Leander Hailstorm:</p>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• <strong>Inspect within 1-2 weeks</strong> - hail damage may not be immediately visible</li>
                        <li>• Check gutters for shingle granule accumulation (key damage indicator)</li>
                        <li>• Look for dents on metal surfaces (mailbox, AC unit, vents, gutters, cars)</li>
                        <li>• Call us for FREE professional roof inspection - we check from roof level</li>
                        <li>• Document ALL damage thoroughly with photos and videos</li>
                        <li>• File insurance claim promptly if damage confirmed (1 year deadline typical)</li>
                        <li>• Have us present at insurance adjuster meeting (maximizes claim scope)</li>
                        <li>• Talk to neighbors - coordinate for 10-15% group pricing discounts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Roofing Materials for Leander */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Best Roofing Materials for Leander Homes
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Leander's position in Williamson County's "Hail Alley" and explosive growth make material selection critical. Here's what performs best for Leander's climate and community standards:
                </p>

                <div className="space-y-6">
                  {/* #1 Recommendation */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-500">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl">🏆</span>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-900">#1 Recommendation: Class 4 Impact-Resistant Architectural Shingles</h3>
                        <p className="text-accent-600 font-semibold">NON-NEGOTIABLE for Leander's Hail Pattern</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Best: Owens Corning Duration Storm</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 UL 2218 impact rating</li>
                          <li>• SureNail Technology (130 mph winds)</li>
                          <li>• Survives baseball hail repeatedly</li>
                          <li>• TruDefinition color technology</li>
                          <li>• 50-year non-prorated warranty</li>
                          <li>• 15-35% insurance discount</li>
                          <li>• #1 choice in Crystal Falls/Travisso</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$15,000-$22,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft Leander home)</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Excellent: CertainTeed Landmark Pro IR</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 impact-resistant</li>
                          <li>• 130 mph wind resistance</li>
                          <li>• Cool Roof Technology (heat reflection)</li>
                          <li>• StreakFighter algae protection</li>
                          <li>• 50-year limited warranty</li>
                          <li>• 15-35% insurance savings</li>
                          <li>• Popular in Summerlyn</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$14,500-$21,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft Leander home)</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-bold text-primary-900 mb-2">Great: GAF Timberline HDZ IR</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Class 4 UL 2218 rated</li>
                          <li>• LayerLock Technology</li>
                          <li>• 130 mph wind warranty</li>
                          <li>• StainGuard Plus algae protection</li>
                          <li>• 50-year limited warranty</li>
                          <li>• 10-35% insurance discounts</li>
                          <li>• Mason Hills standard</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-3">$14,000-$21,000</p>
                        <p className="text-xs text-primary-600">(2,000 sq ft Leander home)</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                      <p className="font-bold text-primary-900 mb-2">💰 Impact-Resistant ROI for Leander Homeowners:</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-700">
                        <div>
                          <p className="font-semibold text-primary-900 mb-1">Why Absolutely Essential in Leander:</p>
                          <ul className="space-y-1">
                            <li>• Withstands baseball/softball hail Leander gets every 2-4 years</li>
                            <li>• 15-35% insurance discount (typically 20-25% in Leander)</li>
                            <li>• Average $3,000/year Leander home insurance × 20% = $600/year savings</li>
                            <li>• Over 30 years: <strong>$18,000 in insurance savings</strong></li>
                            <li>• Upgrade cost over standard shingles: $3,000-$5,000</li>
                            <li>• <strong>Pays for itself in 5-8 years, then pure savings!</strong></li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-900 mb-1">Additional Benefits:</p>
                          <ul className="space-y-1">
                            <li>• Survives storms that total standard roofs (avoid repeat claims)</li>
                            <li>• Better heat reflection = 10-15% lower cooling costs (Leander summers brutal)</li>
                            <li>• 50-year lifespan vs 20-25 for standard shingles</li>
                            <li>• Higher home resale value (buyers demand hail protection now)</li>
                            <li>• Peace of mind during Leander's intense March-May storm season</li>
                            <li>• Required/expected in Crystal Falls, Travisso, Summerlyn HOAs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metal Roofing */}
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-600">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Alternative: Standing Seam Metal Roofing</h3>
                    <p className="text-primary-700 mb-4">Growing in popularity, especially in newer Travisso custom homes and original Leander renovations.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">✅ Pros for Leander:</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• <strong>Ultimate hail resistance</strong> - dents but never punctures or fails</li>
                          <li>• <strong>50-70 year lifespan</strong> - install once, never worry again</li>
                          <li>• Survived March 2024 softball hail with only cosmetic dents</li>
                          <li>• 30-40% cooling cost savings (massive in Leander summers)</li>
                          <li>• 140+ mph wind rating (severe thunderstorms)</li>
                          <li>• Eco-friendly (100% recyclable aluminum or steel)</li>
                          <li>• Modern aesthetic popular in Travisso and newer developments</li>
                          <li>• Never file another hail claim (lifetime solution)</li>
                        </ul>
                        <p className="text-accent-600 font-bold mt-4 text-xl">$23,000-$43,000</p>
                        <p className="text-sm text-primary-600">(2,000 sq ft Leander home, standing seam aluminum/steel)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-900 mb-2">⚠️ Considerations:</p>
                        <ul className="text-sm text-primary-700 space-y-1">
                          <li>• Higher upfront cost (2.5-3x impact-resistant shingles)</li>
                          <li>• HOA restrictions in some communities (Crystal Falls, Summerlyn - verify first!)</li>
                          <li>• Limited color options (grays, blacks, browns, copper, bronze)</li>
                          <li>• Louder during heavy rain/hail than shingles (noticeable)</li>
                          <li>• Requires specialized installation (fewer qualified contractors)</li>
                          <li>• Best for simpler roof lines (complex = very expensive)</li>
                        </ul>
                        <p className="font-semibold text-primary-900 mt-4 mb-1">Best For:</p>
                        <p className="text-sm text-primary-700">Long-term Leander homeowners (20+ years), tired of hail claims cycle, eco-conscious, custom Travisso homes, original Leander renovations, non-HOA areas, simple roof designs.</p>
                      </div>
                    </div>
                  </div>

                  {/* Materials to Avoid */}
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">❌ Materials to AVOID in Leander</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-primary-900 mb-2">Standard 3-Tab or Basic Architectural Shingles (Non-Impact Rated)</p>
                        <p className="text-sm text-primary-700"><strong>Why this is foolish in Leander:</strong> Zero hail protection - these WILL FAIL when (not if) Leander gets baseball hail. Only 15-20 year lifespan. No insurance discounts. You'll pay $2,000-$3,000 deductible every time Leander gets hit (every 2-4 years = $6k-$9k over 12 years!). Only saves $2k-$3k initially compared to impact-resistant, but costs 3x that in deductibles alone. Then insurance drops you or raises rates. Absolutely foolish decision in Williamson County.</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary-900 mb-2">Concrete or Clay Tile</p>
                        <p className="text-sm text-primary-700"><strong>Why avoid in Leander:</strong> Tiles crack and shatter from Leander's frequent baseball/softball hail. Expensive individual tile replacements ($300-$500 each, dozens damaged per storm). Very heavy (requires structural reinforcement). Not common in Leander, hard to match. Long lead times for materials. Complex insurance claims. Simply not worth the headaches in hail-prone area.</p>
                      </div>
                    </div>
                  </div>

                  {/* Color Guide */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-4">🎨 Most Popular Leander Roof Colors</h3>
                    <p className="text-sm text-primary-700 mb-4">Leander homeowners favor earth tones and contemporary grays. HOA communities have approved color lists:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-amber-700 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Weathered Wood</p>
                        <p className="text-xs text-primary-600">#1 in Crystal Falls</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-stone-600 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Driftwood</p>
                        <p className="text-xs text-primary-600">Mason Hills fave</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-gray-500 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Georgetown Gray</p>
                        <p className="text-xs text-primary-600">Modern Summerlyn</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-slate-700 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Charcoal</p>
                        <p className="text-xs text-primary-600">Travisso popular</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-gray-400 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Pewter Gray</p>
                        <p className="text-xs text-primary-600">Contemporary</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-amber-800 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Mission Brown</p>
                        <p className="text-xs text-primary-600">Traditional</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-stone-300 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Oyster Gray</p>
                        <p className="text-xs text-primary-600">Light Option</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="w-full h-16 bg-slate-800 rounded mb-2"></div>
                        <p className="font-semibold text-xs text-primary-900">Onyx Black</p>
                        <p className="text-xs text-primary-600">Bold Modern</p>
                      </div>
                    </div>
                    <p className="text-xs text-primary-600 mt-4 text-center">HOA communities (Crystal Falls, Summerlyn, Travisso): MUST verify approved colors before ordering. We handle all HOA submissions and approvals.</p>
                  </div>
                </div>
              </div>

              {/* Leander Roof Replacement Costs */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Leander Roof Replacement Costs: Complete Pricing Guide
                </h2>
                <p className="text-lg text-primary-700 mb-8">
                  Leander roof replacement costs reflect the city's newer construction and larger homes. Crystal Falls and Travisso homes typically cost more due to size:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">1,500-2,000 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: Original Leander, small Block House Creek homes, simple roof, 18-24 squares</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$11,000-$17,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">2,000-2,500 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: Standard Leander two-story, Mason Hills, older Crystal Falls sections, 24-28 squares, moderate complexity</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$15,000-$22,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">2,500-3,000 sq ft Home (Common in Crystal Falls)</p>
                        <p className="text-sm text-primary-700">Typical: Larger Crystal Falls, Summerlyn, San Gabriel Village, 4-bed/3-bath, 28-35 squares, increased complexity</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$18,000-$27,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">3,000-3,500 sq ft Home</p>
                        <p className="text-sm text-primary-700">Typical: Premium Crystal Falls, Travisso, 4-5 bed/3-4 bath, 35-42 squares, complex modern roof lines</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$22,000-$34,000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-primary-900">3,500+ sq ft Luxury Home</p>
                        <p className="text-sm text-primary-700">Typical: Custom Travisso estates, large Crystal Falls, highly complex roofs, 42+ squares, premium finishes</p>
                      </div>
                      <p className="text-xl font-bold text-accent-600">$28,000-$55,000+</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded mb-8">
                  <p className="font-bold text-primary-900 mb-2">💡 Crystal Falls, Summerlyn & Travisso Homeowners: Important Notes</p>
                  <p className="text-sm text-primary-700 mb-3">Leander's master-planned communities have specific requirements and considerations:</p>
                  <ul className="text-sm text-primary-700 space-y-1">
                    <li>• <strong>HOA Architectural Approval REQUIRED:</strong> We handle all submissions, photos, color documentation. Crystal Falls typically 2-3 weeks, Summerlyn 1-2 weeks, Travisso 3-4 weeks. Plan accordingly.</li>
                    <li>• <strong>Approved Color Lists:</strong> Each HOA maintains specific approved colors. Weathered Wood, Driftwood, Georgetown Gray most common. Must match exactly - no substitutions.</li>
                    <li>• <strong>Larger Homes = Higher Costs:</strong> Crystal Falls/Travisso homes average 2,500-3,500+ sq ft = naturally higher costs than older Austin neighborhoods.</li>
                    <li>• <strong>Modern Roof Complexity:</strong> Many newer Leander homes have architectural features, multiple roof planes, increased complexity vs simple ranch designs.</li>
                    <li>• <strong>Group Pricing Goldmine:</strong> After major storms, entire Leander streets replace simultaneously. Coordinate with neighbors for 10-15% discounts. Crystal Falls perfect for this!</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">📈 What INCREASES Cost in Leander</h3>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+15-25%</span>
                        <span><strong>Steep pitch roofs</strong> (safety equipment, slower work - some Travisso customs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+15-30%</span>
                        <span><strong>Complex roof lines</strong> (valleys, dormers, turrets - modern Crystal Falls/Travisso designs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+20-35%</span>
                        <span><strong>Two-story homes</strong> (most Leander homes - additional safety equipment)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+$2k-5k</span>
                        <span><strong>Decking repairs</strong> (less common in newer Leander, but original areas need it)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+100-200%</span>
                        <span><strong>Metal roofing upgrade</strong> ($23k-$43k vs $15k-$22k shingles)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">+$400-800</span>
                        <span><strong>Permits & fees</strong> (Williamson County permits, HOA fees where applicable)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">📉 What DECREASES Cost in Leander</h3>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Simple gable or hip roof</strong> (many Summerlyn production homes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Low to moderate pitch</strong> (most Leander homes, faster/safer installation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Good existing decking</strong> (newer Crystal Falls, Summerlyn, Travisso - rarely needs work)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Insurance claim coverage</strong> (pay deductible only - $2k-$3k total cost, rest covered)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Neighborhood group pricing</strong> (10-15% off - HUGE in Leander after storms!)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>Easy property access</strong> (wide Leander streets, good driveways, flat terrain)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">💡 6 Ways Leander Homeowners Save on Roof Replacement</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-700">
                    <div>
                      <p className="font-bold text-primary-900 mb-1">1. File Insurance Claims After Storms (CRITICAL)</p>
                      <p className="mb-3">Leander gets roof-damaging hail every 2-4 years. March 2024 damaged 40-50% of Leander roofs. If your neighbors filed claims, you should too. Insurance covers 100% minus deductible ($2k-$3k). We handle entire claims process, adjuster meetings, scope negotiations. Don't leave free money on table!</p>
                      
                      <p className="font-bold text-primary-900 mb-1">2. Coordinate with Neighbors (MASSIVE Savings)</p>
                      <p className="mb-3">Leander's neighborhood structure perfect for this! When we work 5-10 Crystal Falls/Summerlyn homes, we offer 10-15% group discounts. One material delivery, one crew mobilization = $2k-$4k per home savings. Join neighborhood groups and organize after storms. This is the #1 way Leander homeowners save!</p>
                      
                      <p className="font-bold text-primary-900 mb-1">3. Choose Impact-Resistant for Long-Term Savings</p>
                      <p className="mb-3">$3k-$5k more upfront, but saves $600-$750/year on insurance (20-25% typical Leander discount). Pays for itself in 5-7 years. Plus survives Leander's hail = fewer future claims. Over 30 years: $18,000+ in insurance savings. Essential investment in Williamson County.</p>
                    </div>
                    <div>
                      <p className="font-bold text-primary-900 mb-1">4. Bundle Multiple Services</p>
                      <p className="mb-3">Replace gutters, install gutter guards, add ridge vent upgrades simultaneously for 10-15% savings vs separate projects. One mobilization = lower total cost. Popular in Crystal Falls where homeowners want everything done right.</p>
                      
                      <p className="font-bold text-primary-900 mb-1">5. Schedule During Off-Season (When Possible)</p>
                      <p className="mb-3">Fall/winter (October-February) are slower for roofing. We may offer scheduling flexibility or modest discounts. Avoid June-August post-storm rush when Leander's busiest. But don't delay if insurance claim has deadline!</p>
                      
                      <p className="font-bold text-primary-900 mb-1">6. Take Advantage of 0% Financing</p>
                      <p className="mb-3">We offer 0% financing for 12-18 months through approved lenders. Spread $20k-$30k Crystal Falls roof into $1,200-$1,700/month payments. No interest if paid within promotional period. Popular with young Leander families. Ask about current promotions!</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <p className="text-primary-900 font-semibold mb-2">📞 Get Your Exact Leander Roof Replacement Cost</p>
                  <p className="text-primary-700">
                    These are estimates. Your actual cost depends on your specific home, neighborhood, materials, HOA requirements, and current conditions. We provide <strong>FREE inspections</strong> and detailed written quotes with no obligation. <strong>Crystal Falls, Summerlyn & Travisso homeowners: We handle ALL HOA paperwork and approvals—you don't lift a finger!</strong> Call <strong>(512) 763-5277</strong> or schedule online for your personalized Leander roof replacement estimate.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Section - Full Width */}
          <div className="mt-16">
            <LocationFAQ city={location.city} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Protect Your {location.city} Home?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact Ripple Roofing & Construction today for a free inspection and detailed quote. 
              We're proud to serve {location.city} and all of {location.county}.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                Schedule Free Inspection
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="border-white text-white hover:bg-white hover:text-accent-600"
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            "name": `Ripple Roofing & Construction - ${location.city}`,
            "image": "https://rippleroofs.com/images/logo.png",
            "telephone": SITE_CONFIG.phone,
            "email": SITE_CONFIG.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1000 Heritage Center Circle",
              "addressLocality": "Round Rock",
              "addressRegion": "TX",
              "postalCode": "78664",
              "addressCountry": "US"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": location.city,
                "containedIn": {
                  "@type": "State",
                  "name": "Texas"
                }
              },
              ...location.neighborhoods.slice(0, 5).map(neighborhood => ({
                "@type": "Place",
                "name": neighborhood,
                "containedIn": {
                  "@type": "City",
                  "name": location.city
                }
              }))
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.5088",
              "longitude": "-97.6788"
            },
            "url": `https://rippleroofs.com/locations/${location.slug}`,
            "priceRange": "$$",
            "openingHours": "Mo-Su 00:00-23:59",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Roofing Services",
              "itemListElement": SERVICES.slice(0, 6).map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.shortDescription
                }
              }))
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          })
        }}
      />
      
      {/* Breadcrumb Schema */}
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
                "name": "Locations",
                "item": "https://rippleroofs.com/locations"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": location.city,
                "item": `https://rippleroofs.com/locations/${location.slug}`
              }
            ]
          })
        }}
      />

      {/* Review Schema for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Ripple Roofing & Construction - ${location.city}`,
            "image": "https://rippleroofs.com/images/logo.png",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "worstRating": "1",
              "reviewCount": "127"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Sarah Martinez"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Ripple Roofing did an outstanding job on our roof replacement. Professional, fast, and thorough cleanup. Highly recommend!"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Michael Thompson"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Best roofing company in Central Texas. They worked with our insurance and made the storm damage claim process easy."
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Jennifer Lopez"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "CertainTeed certified contractor with excellent workmanship. Our new roof looks amazing and the warranty is fantastic."
              }
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `How much does a roof replacement cost in ${location.city}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Roof replacement costs in ${location.city} typically range from $8,000 to $25,000+ depending on size, materials, and complexity. Contact Ripple Roofing for a free detailed quote.`
                }
              },
              {
                "@type": "Question",
                "name": `Do you offer emergency roofing services in ${location.city}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Yes! We provide 24/7 emergency roofing services throughout ${location.city}. Call (512) 763-5277 for immediate assistance.`
                }
              },
              {
                "@type": "Question",
                "name": `How long does a roof last in ${location.city}'s climate?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `In ${location.city}'s climate, asphalt shingles last 15-25 years, architectural shingles 25-30 years, metal roofing 40-70 years. Regular maintenance extends lifespan.`
                }
              },
              {
                "@type": "Question",
                "name": `Are you certified and insured in ${location.city}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Yes! We are fully insured and CertainTeed Shingle Master certified to provide roofing services throughout ${location.city} and Central Texas. We carry comprehensive liability and workers' compensation coverage.`
                }
              }
            ]
          })
        }}
      />
    </main>
  )
}

export default LocationPage
