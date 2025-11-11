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
            src="/images/hero/hero-bg.jpg"
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
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#quote">
                Get Free Quote
              </Button>
              <Button variant="secondary" size="lg" href={`tel:${SITE_CONFIG.phoneRaw}`}>
                Call {SITE_CONFIG.phone}
              </Button>
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
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/90">Certified & Insured</div>
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
                    Get Your Free {location.city} Quote
                  </h3>
                  <p className="text-primary-600 text-sm mb-6">
                    Serving {location.city} with pride. Fill out the form below for a free inspection.
                  </p>
                  <QuoteForm />
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
