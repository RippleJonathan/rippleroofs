import { FC } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { LOCATIONS } from '@/lib/locations'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Service Areas - Central Texas Roofing | Ripple Roofing',
  description: `Ripple Roofing serves Round Rock, Austin, Georgetown, San Antonio, Killeen, and surrounding Central Texas areas with premium roofing services. Find your city!`,
  keywords: 'Central Texas roofing, Round Rock roofer, Austin roofing, Georgetown roofing, service areas',
  openGraph: {
    title: 'Our Service Areas - Central Texas Roofing',
    description: 'Professional roofing services throughout Central Texas',
  },
  alternates: {
    canonical: 'https://rippleroofs.com/locations'
  }
}

const LocationsPage: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Serving Central Texas
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Professional roofing services throughout the Austin-Round Rock metro area and beyond. 
              We're proud to be your local roofing experts.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              🎯 Schedule FREE Inspection Today
            </Button>
          </div>
        </Container>
      </section>

      {/* Primary Service Areas */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
              Primary Service Areas
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              We provide comprehensive roofing services throughout these Central Texas communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-accent-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                    <svg className="w-6 h-6 text-accent-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-primary-900 mb-1 group-hover:text-accent-600 transition-colors">
                      {location.city}
                    </h3>
                    <p className="text-sm text-primary-500">
                      {location.county}
                    </p>
                  </div>
                </div>
                
                <p className="text-primary-600 mb-4">
                  {location.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-bold text-primary-900 mb-2">
                    Neighborhoods:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {location.neighborhoods.slice(0, 3).map((neighborhood) => (
                      <span
                        key={neighborhood}
                        className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded"
                      >
                        {neighborhood}
                      </span>
                    ))}
                    {location.neighborhoods.length > 3 && (
                      <span className="text-xs bg-accent-50 text-accent-700 px-2 py-1 rounded font-medium">
                        +{location.neighborhoods.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center text-accent-600 font-bold group-hover:text-accent-700">
                  View {location.city} Services
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
                Complete Central Texas Coverage
              </h2>
              <p className="text-xl text-primary-600">
                We also serve many surrounding communities throughout the region
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  'Cedar Park', 'Pflugerville', 'Leander', 'Hutto',
                  'Taylor', 'Manor', 'Copperas Cove', 'Temple',
                  'Belton', 'Harker Heights', 'Nolanville', 'Jarrell',
                  'Liberty Hill', 'Lago Vista', 'Bee Cave', 'Dripping Springs'
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-primary-700">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-primary-600 text-sm mt-6 text-center">
                Don't see your city? <a href="/contact" className="text-accent-600 font-bold hover:text-accent-700">Contact us</a> - we likely serve your area!
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Local Matters */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">
                Why Choosing a Local Roofer Matters
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Climate Expertise</h3>
                    <p className="text-primary-600">
                      We understand Central Texas weather—from intense heat and UV exposure to severe storms 
                      and hail. Our solutions are specifically designed for our local climate.
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
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Faster Response</h3>
                    <p className="text-primary-600">
                      Being local means we can respond quickly to emergencies. No waiting days for an out-of-town 
                      contractor—we're here when you need us.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Community Investment</h3>
                    <p className="text-primary-600">
                      We live and work in these communities. Our reputation matters, and we're committed to 
                      delivering exceptional service to our neighbors.
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
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Long-term Accountability</h3>
                    <p className="text-primary-600">
                      We're not going anywhere. When you need warranty service or follow-up support, you can 
                      count on us to be here—because this is our home too.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold mb-2">24/7</div>
                <div className="text-xl">Emergency Service</div>
              </div>
              <p className="text-white/90 mb-6 text-center">
                Roofing emergencies don't wait for business hours. Our team is available around the clock 
                to respond to urgent roofing issues throughout Central Texas.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="w-full bg-white text-accent-600 text-center py-4 px-6 rounded-lg font-bold hover:bg-primary-50 transition-colors"
                >
                  Call {SITE_CONFIG.phone}
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  href="/contact"
                  className="w-full border-white text-white hover:bg-white hover:text-accent-600"
                >
                  Request Free Quote
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact Ripple Roofing & Construction today for a free inspection and quote. 
              We're proud to serve homeowners and businesses throughout Central Texas.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Schedule Free Inspection
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default LocationsPage
