'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Container } from './Container'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { trackPhoneClick } from '@/lib/analytics'

export const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white">
        <Container>
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center gap-2 md:gap-6">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center gap-2 hover:text-accent-400 transition-colors"
                onClick={() => trackPhoneClick('header')}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">{SITE_CONFIG.phone}</span>
              </a>
              <a
                href="sms:+15127635277"
                className="md:hidden flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                </svg>
                <span className="text-sm font-medium">Text</span>
              </a>
              <div className="hidden md:flex items-center gap-2 text-white/80">
                <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>24/7 Emergency • Mon-Fri 8AM-6PM</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Social Media Links */}
              <div className="hidden lg:flex items-center gap-3">
                {SITE_CONFIG.social.facebook && (
                  <a
                    href={SITE_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent-400 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.instagram && (
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.linkedin && (
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.nextdoor && (
                  <a
                    href={SITE_CONFIG.social.nextdoor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent-400 transition-colors"
                    aria-label="Nextdoor"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.98 13.275c0 2.254-.77 4.104-2.305 5.55-1.536 1.445-3.452 2.168-5.747 2.168-1.095 0-2.123-.185-3.082-.556-.96-.37-1.776-.881-2.45-1.531-.673-.651-1.197-1.41-1.572-2.28-.375-.87-.562-1.794-.562-2.775 0-1.086.214-2.095.643-3.028.428-.934 1.014-1.739 1.757-2.416.743-.678 1.614-1.207 2.612-1.588.998-.381 2.065-.572 3.2-.572 1.095 0 2.113.185 3.055.556.943.37 1.75.88 2.423 1.531.673.65 1.197 1.41 1.572 2.28.375.87.562 1.795.562 2.775zm-11.98 0c0 .651.123 1.253.37 1.805.246.553.585 1.031 1.017 1.436.431.405.937.722 1.518.952.58.23 1.197.345 1.85.345.654 0 1.27-.115 1.851-.345.581-.23 1.087-.547 1.518-.952.432-.405.771-.883 1.017-1.436.247-.552.37-1.154.37-1.805s-.123-1.253-.37-1.805c-.246-.552-.585-1.031-1.017-1.435-.431-.405-.937-.722-1.518-.952-.581-.23-1.197-.345-1.85-.345-.654 0-1.27.115-1.851.345-.581.23-1.087.547-1.518.952-.432.404-.771.883-1.017 1.435-.247.552-.37 1.154-.37 1.805zM7.5 1.5L0 9v6h7.5V1.5z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.googleBusiness && !SITE_CONFIG.social.googleBusiness.includes('YOUR_GOOGLE_BUSINESS_ID') && (
                  <a
                    href={SITE_CONFIG.social.googleBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent-400 transition-colors"
                    aria-label="Google Business Profile"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                    </svg>
                  </a>
                )}
              </div>
              <Link href="/contact" className="hidden md:block">
                <Button variant="secondary" size="sm">
                  Get Free Inspection
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-primary-100">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative h-16 w-48">
              <Image
                src="/images/logo.png"
                alt={SITE_CONFIG.name}
                fill
                className="object-contain transition-opacity duration-200 group-hover:opacity-80"
                loading="eager"
                quality={75}
                sizes="(max-width: 768px) 180px, 192px"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      'text-primary-900 hover:text-accent-500 font-semibold transition-colors duration-200',
                      pathname === link.href && 'text-accent-500'
                    )}
                  >
                    {link.label}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {link.children && (
                    <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-primary-100">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-4 py-2 text-primary-900 hover:bg-primary-50 hover:text-accent-500 transition-colors duration-150',
                            pathname === child.href && 'text-accent-500 bg-primary-50'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-primary-900 hover:text-accent-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-primary-100 max-h-[calc(100vh-12rem)] overflow-y-auto">
              <div className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'block text-primary-900 hover:text-accent-500 font-semibold transition-colors duration-200',
                        pathname === link.href && 'text-accent-500'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-2 space-y-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block text-sm text-primary-700 hover:text-accent-500 transition-colors duration-200',
                              pathname === child.href && 'text-accent-500'
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="primary" size="lg" className="w-full">
                      Get Free Inspection
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </nav>
  )
}

