import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="section-spacing">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="relative h-12 w-40 mb-4">
                <Image
                  src="/images/logo.png"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
              <p className="text-primary-200 text-sm leading-relaxed">
                Premium roofing services in Central Texas. CertainTeed Shingle Master certified with 24/7 emergency service.
              </p>
              
              {/* CertainTeed Badge */}
              <div className="relative h-20 w-32">
                <Image
                  src="/images/certainteed-shingle-master.webp"
                  alt="CertainTeed Shingle Master"
                  fill
                  className="object-contain object-left"
                />
              </div>
              
              <div className="flex space-x-4">
                {SITE_CONFIG.social.facebook && (
                  <a
                    href={SITE_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-display font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.filter(link => !link.children).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-display font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/residential-roofing"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200 text-sm"
                  >
                    Residential Roofing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/commercial-roofing"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200 text-sm"
                  >
                    Commercial Roofing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/roof-repairs"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200 text-sm"
                  >
                    Roof Repairs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/emergency-services"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200 text-sm"
                  >
                    Emergency Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/gutter-installation"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200 text-sm"
                  >
                    Gutter Installation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-display font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200 flex items-start"
                  >
                    <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{SITE_CONFIG.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200 flex items-start"
                  >
                    <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{SITE_CONFIG.email}</span>
                  </a>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-primary-200">
                    {SITE_CONFIG.address}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-primary-200">
                    {SITE_CONFIG.hours}
                  </span>
                </li>
              </ul>

              <div className="mt-6">
                <Link href="/contact">
                  <button className="btn btn-primary btn-sm w-full">
                    Get Free Inspection
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-300 text-sm">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="text-primary-300">
                {SITE_CONFIG.certifications.join(' • ')}
              </span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
