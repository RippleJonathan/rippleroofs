'use client'

import { FC, useState } from 'react'
import { SITE_CONFIG } from '@/lib/constants'

export const EmergencyBanner: FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-accent-600 via-accent-500 to-primary-600 text-white py-2 px-4 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold text-sm md:text-base">
            ⚡ Free Roof Inspections &amp; 24/7 Emergency Service — Storm damage or active leak?
          </p>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="bg-white text-accent-600 px-4 py-1.5 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
            >
              Call Now
            </a>

            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors p-1"
              aria-label="Close banner"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
