import { FC } from 'react'
import { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { ServiceAreasMap } from '@/components/contact/ServiceAreasMap'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Quote',
  description: `Contact ${SITE_CONFIG.name} for a free roofing inspection and quote. Call ${SITE_CONFIG.phone} or fill out our form. Serving Central Texas with 24/7 emergency service.`,
  openGraph: {
    title: 'Contact Us - Get a Free Quote',
    description: `Contact ${SITE_CONFIG.name} for a free roofing inspection and quote. Call ${SITE_CONFIG.phone} or fill out our form.`,
  },
}

const ContactPage: FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              🎯 Get My FREE Inspection ($200 Value)
            </h1>
            <p className="text-xl text-primary-100">
              Expert roofing services across Central Texas. Same-day scheduling available. Fill out the form or call us directly.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Request a Free Inspection
                </h2>
                <p className="text-primary-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your roofing project.
                </p>
                <QuoteForm />
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-accent-500">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary-900 mb-1">Call Us</h3>
                    <a
                      href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`}
                      className="text-accent-600 hover:text-accent-700 font-bold text-lg transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <p className="text-sm text-primary-600 mt-1">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary-900 mb-1">Email Us</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-accent-600 hover:text-accent-700 transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary-900 mb-1">Visit Us</h3>
                    <address className="text-primary-600 not-italic">
                      {SITE_CONFIG.address}
                    </address>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="font-display font-bold mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Service Areas
                </h3>
                <p className="text-primary-100 text-sm">
                  We proudly serve {SITE_CONFIG.serviceArea}.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-primary-900 font-medium">Certified & Insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-primary-900 font-medium">CertainTeed Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-primary-900 font-medium">Free Inspections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-primary-900 font-medium">24/7 Emergency Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8 text-center">
              Why Choose Ripple Roofing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-primary-900 mb-2">Fast Response</h3>
                <p className="text-primary-600 text-sm">
                  We respond to all inquiries within 24 hours and offer same-day emergency service.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-primary-900 mb-2">Quality Guaranteed</h3>
                <p className="text-primary-600 text-sm">
                  CertainTeed Shingle Master certified with comprehensive warranties on all work.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-primary-900 mb-2">Transparent Pricing</h3>
                <p className="text-primary-600 text-sm">
                  Free detailed quotes with no hidden fees. You'll know exactly what to expect.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Areas Map Section */}
      <ServiceAreasMap />
    </main>
  )
}

export default ContactPage
