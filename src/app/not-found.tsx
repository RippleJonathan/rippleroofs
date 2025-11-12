import { FC } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Ripple Roofing & Construction',
  description: 'The page you\'re looking for doesn\'t exist. Find roofing services, locations we serve, or get a free estimate from Central Texas\'s trusted roofing experts.',
  robots: 'noindex, follow', // Don't index 404 pages, but follow links
}

const NotFound: FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <Container className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-display font-bold text-primary-900 opacity-20 mb-4">
              404
            </h1>
            <div className="text-6xl mb-4">🏠</div>
          </div>

          {/* Main Message */}
          <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
            Oops! This Page Doesn't Exist
          </h2>
          <p className="text-xl text-primary-600 mb-8 leading-relaxed">
            Looks like this page took a wrong turn. But don't worry - we're here to help you find what you need!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button variant="primary" size="lg">
                🏠 Go to Homepage
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                📞 Contact Us
              </Button>
            </Link>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Services */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Our Services</h3>
              <ul className="space-y-2 text-sm text-primary-600">
                <li>
                  <Link href="/services/residential-roofing" className="hover:text-accent-600 transition-colors">
                    Residential Roofing
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-roofing" className="hover:text-accent-600 transition-colors">
                    Commercial Roofing
                  </Link>
                </li>
                <li>
                  <Link href="/services/roof-repairs" className="hover:text-accent-600 transition-colors">
                    Roof Repairs
                  </Link>
                </li>
                <li>
                  <Link href="/services/emergency-services" className="hover:text-accent-600 transition-colors">
                    Emergency Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Locations */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Service Areas</h3>
              <ul className="space-y-2 text-sm text-primary-600">
                <li>
                  <Link href="/locations/austin" className="hover:text-accent-600 transition-colors">
                    Austin
                  </Link>
                </li>
                <li>
                  <Link href="/locations/san-antonio" className="hover:text-accent-600 transition-colors">
                    San Antonio
                  </Link>
                </li>
                <li>
                  <Link href="/locations/round-rock" className="hover:text-accent-600 transition-colors">
                    Round Rock
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="hover:text-accent-600 transition-colors">
                    View All Locations →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Resources</h3>
              <ul className="space-y-2 text-sm text-primary-600">
                <li>
                  <Link href="/blog" className="hover:text-accent-600 transition-colors">
                    Roofing Blog
                  </Link>
                </li>
                <li>
                  <Link href="/estimate" className="hover:text-accent-600 transition-colors">
                    Get Free Estimate
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-accent-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent-600 transition-colors">
                    Contact Information
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Emergency Contact Box */}
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Need Immediate Help?</h3>
            <p className="text-accent-100 mb-4">
              24/7 emergency roofing services available
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 text-2xl font-bold hover:text-accent-100 transition-colors"
            >
              📞 {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default NotFound
