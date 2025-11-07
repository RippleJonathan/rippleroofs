'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Container } from './Container'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 backdrop-glass border-b border-primary-100 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative h-16 w-48">
            <Image
              src="/images/logo.png"
              alt={SITE_CONFIG.name}
              fill
              className="object-contain transition-opacity duration-200 group-hover:opacity-80"
              priority
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
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
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

          {/* Desktop CTA & Phone */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="text-primary-900 hover:text-accent-500 font-semibold transition-colors duration-200"
            >
              {SITE_CONFIG.phone}
            </a>
            <Link href="/contact">
              <Button variant="primary" size="md">
                Get Free Inspection
              </Button>
            </Link>
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
          <div className="lg:hidden py-4 border-t border-primary-100">
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
              
              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="block text-center text-primary-900 hover:text-accent-500 font-semibold text-lg transition-colors duration-200"
                >
                  {SITE_CONFIG.phone}
                </a>
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
    </nav>
  )
}
