'use client'

import { FC, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { SITE_CONFIG } from '@/lib/constants'
import { BUSINESS_INFO_TEXAS, BUSINESS_INFO_ARIZONA } from '@/constants/business'

export const FloatingCallButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  
  // Determine which office based on pathname
  const isArizona = pathname?.startsWith('/arizona')
  const businessInfo = isArizona ? BUSINESS_INFO_ARIZONA : BUSINESS_INFO_TEXAS
  const phone = businessInfo.phone
  const phoneRaw = phone.replace(/\D/g, '')

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Call Button - Shows on scroll */}
      <a
        href={`tel:${phoneRaw}`}
        className={`hidden md:flex fixed bottom-8 right-8 z-50 ${
          isArizona ? 'bg-blue-600 hover:bg-blue-700' : 'bg-accent-500 hover:bg-accent-600'
        } text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 items-center gap-3 group ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20 pointer-events-none'
        }`}
        aria-label={`Call ${businessInfo.name}`}
      >
        <div className="relative pl-5 pr-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              
              {/* Pulsing ring animation */}
              <span className={`absolute -inset-1 inline-flex rounded-full opacity-75 animate-ping ${
                isArizona ? 'bg-blue-400' : 'bg-accent-400'
              }`} />
            </div>
            
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium opacity-90">Call Now</span>
              <span className="text-lg font-bold tracking-wide">
                {phone}
              </span>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}
