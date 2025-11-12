import { FC } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us - Premier Roofing Contractor in Central Texas | Ripple Roofing',
  description: `Learn about Ripple Roofing & Construction. CertainTeed Shingle Master certified roofing company serving Central Texas with integrity, excellence, and professionalism since day one.`,
  keywords: 'about Ripple Roofing, Round Rock roofer, Central Texas roofing company, CertainTeed certified, roofing contractor',
  openGraph: {
    title: 'About Ripple Roofing & Construction',
    description: 'Premier roofing services in Central Texas built on integrity, excellence, and professionalism.',
  },
  alternates: {
    canonical: 'https://rippleroofs.com/about'
  }
}

const AboutPage: FC = () => {
  const companyValues = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Responsibility',
      description: 'We take ownership of our work, ensuring every project meets the highest standards of quality and safety. Our team is accountable to our clients, our colleagues, and the communities we serve.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Integrity',
      description: 'Honesty and transparency are the foundation of our business. We strive to build trust with clients through clear communication, ethical practices, and delivering on our promises.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Professionalism',
      description: 'We approach every project with expertise, respect, and attention to detail. From the initial consultation to the final clean-up, our conduct reflects the pride we take in our work.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance',
      description: 'We are committed to excellence in every aspect of roofing and construction. By constantly improving our skills and processes, we deliver top-quality results that exceed client expectations.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Loyalty',
      description: 'We foster long-lasting relationships with our clients, partners, and employees. Loyalty means standing by our commitments and offering ongoing support and service, long after the project is completed.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We pursue excellence in craftsmanship, safety, and customer satisfaction. Ripple Roofing and Construction is dedicated to setting the industry standard for roofing and construction quality.',
    },
  ]

  const stats = [
    { number: '1000+', label: 'Projects Completed' },
    { number: '100%', label: 'Certified & Insured' },
    { number: '24/7', label: 'Emergency Service' },
    { number: 'A+', label: 'CertainTeed Certified' },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-primary-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Ripple Roofing & Construction team at work"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/70" />
        </div>

        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Building Trust, One Roof at a Time
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Delivering high-quality roofing and construction services with integrity and reliability 
              throughout Central Texas.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto mb-8"></div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-primary-900 leading-relaxed">
                  At <strong>Ripple Roofing & Construction</strong>, our mission is to deliver high-quality 
                  roofing and construction services with integrity and reliability. We strive to enhance the 
                  value and safety of our clients' properties through skilled craftsmanship and transparent 
                  communication.
                </p>
                <p className="text-lg text-primary-700 mt-6">
                  We envision being Central Texas's most trusted roofing partner—known for our unwavering 
                  commitment to excellence, our dedication to customer satisfaction, and our ability to 
                  transform homes and businesses with superior roofing solutions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-primary-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we undertake
            </p>
            <div className="w-20 h-1 bg-accent-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">
                What Sets Us Apart
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">CertainTeed Shingle Master Certified</h3>
                    <p className="text-primary-600">
                      As one of the elite CertainTeed Shingle Master contractors in Central Texas, we meet the 
                      highest standards of quality and can offer enhanced warranty coverage on your roofing investment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">24/7 Emergency Response</h3>
                    <p className="text-primary-600">
                      Roofing emergencies don't wait for business hours. Our team is available around the clock 
                      to respond to storm damage, leaks, and other urgent roofing issues.
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
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Local Expertise</h3>
                    <p className="text-primary-600">
                      We understand Central Texas weather—from intense summer heat to severe storms and hail. 
                      Our solutions are specifically designed for the unique challenges our climate presents.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Transparent Pricing</h3>
                    <p className="text-primary-600">
                      No hidden fees, no surprises. We provide detailed, itemized quotes so you know exactly 
                      what you're paying for before any work begins.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/hero-bg.jpg"
                  alt="Professional roofing work by Ripple Roofing team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg">Customer Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Certifications & Credentials
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our qualifications and industry recognition demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">CertainTeed Shingle Master</h3>
              <p className="text-primary-100">
                Elite certification for top-tier roofing contractors
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Certified & Insured</h3>
              <p className="text-primary-100">
                Complete coverage for your protection and peace of mind
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Business</h3>
              <p className="text-primary-100">
                Proudly serving Central Texas communities
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">
              Serving Central Texas
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              We're proud to provide premium roofing services throughout the Central Texas region
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              'Round Rock', 'Austin', 'Georgetown', 'San Antonio',
              'Killeen', 'Copperas Cove', 'Cedar Park', 'Pflugerville',
              'Leander', 'Taylor', 'Hutto', 'Manor'
            ].map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 p-4 bg-primary-50 rounded-lg hover:bg-accent-50 transition-colors"
              >
                <svg className="w-5 h-5 text-accent-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-900 font-medium">{city}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Work With Central Texas's Premier Roofing Company?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the Ripple Roofing difference. Contact us today for your FREE $200 inspection.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                🎯 Get FREE Inspection
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="tel:5127635277"
                className="border-white text-white hover:bg-white hover:text-accent-600"
              >
                📞 Call Now: (512) 763-5277
                Call {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default AboutPage
