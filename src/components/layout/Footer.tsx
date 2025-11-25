'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'
import { trackPhoneClick } from '@/lib/analytics'

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="section-spacing">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="space-y-4 lg:col-span-1">
              <div className="relative h-12 w-40 mb-4">
                <Image
                  src="/images/logo.png"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
              <p className="text-primary-200 text-sm leading-relaxed">
                At Ripple Roofing & Construction, our mission is to deliver high-quality roofing and construction services with integrity and reliability. We strive to enhance the value and safety of our clients' properties through skilled craftsmanship and transparent communication.
              </p>
              
              <div className="flex space-x-3 pt-2">
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
                {SITE_CONFIG.social.linkedin && (
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.googleBusiness && !SITE_CONFIG.social.googleBusiness.includes('YOUR_GOOGLE_BUSINESS_ID') && (
                  <a
                    href={SITE_CONFIG.social.googleBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    aria-label="Google Business Profile"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.instagram && (
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.youtube && (
                  <a
                    href={SITE_CONFIG.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    aria-label="YouTube"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.tiktok && (
                  <a
                    href={SITE_CONFIG.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    aria-label="TikTok"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.nextdoor && (
                  <a
                    href={SITE_CONFIG.social.nextdoor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    aria-label="Nextdoor"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.98 13.275c0 2.254-.77 4.104-2.305 5.55-1.536 1.445-3.452 2.168-5.747 2.168-1.095 0-2.123-.185-3.082-.556-.96-.37-1.776-.881-2.45-1.531-.673-.651-1.197-1.41-1.572-2.28-.375-.87-.562-1.794-.562-2.775 0-1.086.214-2.095.643-3.028.428-.934 1.014-1.739 1.757-2.416.743-.678 1.614-1.207 2.612-1.588.998-.381 2.065-.572 3.2-.572 1.095 0 2.113.185 3.055.556.943.37 1.75.88 2.423 1.531.673.65 1.197 1.41 1.572 2.28.375.87.562 1.795.562 2.775zm-11.98 0c0 .651.123 1.253.37 1.805.246.553.585 1.031 1.017 1.436.431.405.937.722 1.518.952.58.23 1.197.345 1.85.345.654 0 1.27-.115 1.851-.345.581-.23 1.087-.547 1.518-.952.432-.405.771-.883 1.017-1.436.247-.552.37-1.154.37-1.805s-.123-1.253-.37-1.805c-.246-.552-.585-1.031-1.017-1.435-.431-.405-.937-.722-1.518-.952-.581-.23-1.197-.345-1.85-.345-.654 0-1.27.115-1.851.345-.581.23-1.087.547-1.518.952-.432.404-.771.883-1.017 1.435-.247.552-.37 1.154-.37 1.805zM7.5 1.5L0 9v6h7.5V1.5z"/>
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

            {/* Free Resources */}
            <div>
              <h4 className="text-lg font-display font-bold mb-4">Free Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/resources/roof-inspection-checklist"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200 text-sm flex items-center gap-1"
                  >
                    <span>📋</span>
                    <span>Inspection Checklist</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/storm-damage-insurance-guide"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200 text-sm flex items-center gap-1"
                  >
                    <span>⛈️</span>
                    <span>Insurance Guide</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/material-comparison-chart"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200 text-sm flex items-center gap-1"
                  >
                    <span>📊</span>
                    <span>Material Comparison</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/seasonal-maintenance-calendar"
                    className="text-primary-200 hover:text-accent-500 transition-colors duration-200 text-sm flex items-center gap-1"
                  >
                    <span>📅</span>
                    <span>Maintenance Calendar</span>
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    href="/blog"
                    className="text-accent-400 hover:text-accent-300 transition-colors duration-200 text-sm font-semibold"
                  >
                    📰 Read Our Blog →
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
                    onClick={() => trackPhoneClick('footer')}
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
                    Mon-Fri: 8AM - 6PM
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-accent-300 font-semibold">24/7 Emergency</span>
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

          {/* Service Areas Section - Additional Row */}
          <div className="border-t border-primary-800 mt-8 pt-8">
            <h3 className="text-lg font-display font-bold mb-6 text-white">Service Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Austin Metro */}
              <div>
                <h4 className="font-semibold text-accent-400 mb-3">Austin Metro</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/locations/austin"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Austin
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/round-rock"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Round Rock
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/pflugerville"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Pflugerville
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/cedar-park"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Cedar Park
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/leander"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Leander
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/georgetown"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Georgetown
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/hutto"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Hutto
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/manor"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Manor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/jarrell"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Jarrell
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Central Texas */}
              <div>
                <h4 className="font-semibold text-accent-400 mb-3">Central Texas</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/locations/san-marcos"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      San Marcos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/new-braunfels"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      New Braunfels
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/temple"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Temple
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/killeen"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Killeen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/copperas-cove"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Copperas Cove
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/waco"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      Waco
                    </Link>
                  </li>
                </ul>
              </div>

              {/* San Antonio Area */}
              <div>
                <h4 className="font-semibold text-accent-400 mb-3">San Antonio Expansion</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/locations/san-antonio"
                      className="text-primary-200 hover:text-accent-500 transition-colors duration-200"
                    >
                      San Antonio
                    </Link>
                  </li>
                  <li className="text-primary-300 text-xs pt-2 border-t border-primary-700">
                    Stone Oak • Alamo Heights<br />
                    Medical Center & Surrounding Areas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-primary-300 text-sm">
                © {currentYear} {SITE_CONFIG.name}. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm">
                <Link href="/privacy" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-primary-600">•</span>
                <Link href="/terms" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
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
