import { FC } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
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
              <div className="text-sm text-primary-600">Licensed & Insured</div>
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

              {/* Service Areas */}
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-display font-bold mb-4">
                  Serving Central Texas Communities
                </h2>
                <p className="text-primary-100 mb-6">
                  We proudly provide {service.title.toLowerCase()} services throughout the Central Texas region, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Round Rock', 'Austin', 'Georgetown', 'San Antonio', 'Killeen', 'Copperas Cove', 'Cedar Park', 'Pflugerville', 'Leander'].map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section for SEO */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
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
