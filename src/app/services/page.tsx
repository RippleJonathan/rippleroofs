import { FC } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { SERVICES, SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Roofing Services Round Rock TX | Repair, Replacement & Emergency | Free Inspections',
  description: `Expert roof repair, replacement, storm damage & emergency services in Round Rock & Central Texas. CertainTeed certified. Free inspections. Call ${SITE_CONFIG.phone} today.`,
  keywords: 'roofing services, Round Rock roofer, Austin roofing, Central Texas roofing, roof repair, roof replacement, emergency roofing',
  openGraph: {
    title: 'Expert Roofing Services in Round Rock & Central Texas',
    description: 'Comprehensive roofing solutions for residential and commercial properties in Central Texas.',
  },
  alternates: {
    canonical: 'https://rippleroofs.com/services'
  }
}

const ServicesPage: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Comprehensive Roofing Services in Central Texas
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              From routine inspections to complete roof replacements, we provide expert roofing solutions 
              for residential and commercial properties throughout Round Rock, Austin, and surrounding areas.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              📞 Get FREE Inspection ($200 Value)
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
              Our Roofing Services
            </h2>
            <p className="text-xl text-primary-600">
              Professional roofing solutions backed by CertainTeed Shingle Master certification and years of experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-4xl mb-2">{service.icon}</div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-primary-600 mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-accent-600 font-bold group-hover:text-accent-700">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
              Why Choose Ripple Roofing?
            </h2>
            <p className="text-xl text-primary-600">
              We're committed to delivering exceptional roofing services with unmatched quality and customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-2">
                CertainTeed Certified
              </h3>
              <p className="text-primary-600">
                Shingle Master certification ensures top-quality installations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-2">
                24/7 Emergency Service
              </h3>
              <p className="text-primary-600">
                Available day or night for urgent roofing needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-2">
                Free Inspections
              </h3>
              <p className="text-primary-600">
                Complimentary roof inspections and detailed quotes
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-2">
                Fully Insured
              </h3>
              <p className="text-primary-600">
                Certified and insured for your protection and peace of mind
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Proudly Serving Central Texas
            </h2>
            <p className="text-xl text-primary-100">
              We provide professional roofing services throughout the Central Texas region
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['Round Rock', 'Austin', 'Georgetown', 'San Antonio', 'Killeen', 'Copperas Cove', 'Cedar Park', 'Pflugerville', 'Leander', 'Taylor', 'Hutto', 'Manor'].map((city) => (
              <div key={city} className="flex items-center gap-2 text-white">
                <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{city}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free inspection and quote. Our expert team is ready to help with all your roofing needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                Schedule Free Inspection
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="tel:5127635277"
                className="border-white text-white hover:bg-white hover:text-accent-600"
              >
                Call (512) 763-5277
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default ServicesPage
