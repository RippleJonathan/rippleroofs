'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'

export const StickyMobileBar: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[9997] bg-white border-t-2 border-accent-500 shadow-2xl animate-slide-up">
      <div className="flex">
        {/* Call Button */}
        <a
          href="tel:512-763-5277"
          className="flex-1 flex flex-col items-center justify-center py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold hover:from-accent-600 hover:to-accent-700 transition-all active:scale-95"
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm">Call Now</span>
        </a>

        {/* Quote Button */}
        <Link
          href="/contact"
          className="flex-1 flex flex-col items-center justify-center py-3 bg-primary-900 text-white font-bold hover:bg-primary-800 transition-all active:scale-95"
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-sm">Get Quote</span>
        </Link>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
