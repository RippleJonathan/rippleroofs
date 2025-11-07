import { FC } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { Button } from '@/components/ui/Button'
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
              CertainTeed Shingle Master Certified • Licensed & Insured • 24/7 Emergency Service
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
              <div className="text-sm text-white/90">Licensed & Insured</div>
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
            "name": "Ripple Roofing & Construction",
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
            "areaServed": {
              "@type": "City",
              "name": location.city,
              "containedIn": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.5088",
              "longitude": "-97.6788"
            },
            "url": `https://rippleroofs.com/locations/${location.slug}`,
            "priceRange": "$$",
            "openingHours": "Mo-Su 00:00-23:59"
          })
        }}
      />
    </main>
  )
}

export default LocationPage
