'use client'

import { FC, useState, useEffect } from 'react'
import { SITE_CONFIG } from '@/lib/constants'

export const EmergencyBanner: FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Top Banner - Shows on page load */}
      <div className="bg-gradient-to-r from-accent-600 via-accent-500 to-primary-600 text-white py-3 px-4 relative">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm md:text-base">
                  ⚡ FREE Roof Inspections & Fast Emergency Tarping Service
                </p>
                <p className="text-xs md:text-sm opacity-90">
                  Storm damage? Active leak? We'll protect your home quickly!
                </p>
              </div>
            </div>
            
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="bg-white text-accent-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm md:text-base whitespace-nowrap flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now: {SITE_CONFIG.phone}
            </a>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 md:relative md:top-0 md:right-0 text-white hover:text-gray-200 transition-colors"
              aria-label="Close banner"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Header with Phone - Shows on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-primary-900 text-white shadow-lg transition-all duration-300 ${
          isSticky ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg hidden sm:inline">
                Ripple Roofing
              </span>
              <span className="text-sm text-primary-300 hidden md:inline">
                | CertainTeed Shingle Master
              </span>
            </div>
            
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-full font-bold transition-colors text-sm md:text-base flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="hidden sm:inline">Call: </span>
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
