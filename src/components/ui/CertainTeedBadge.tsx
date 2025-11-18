'use client'

import { FC } from 'react'
import Image from 'next/image'

interface CertainTeedBadgeProps {
  variant?: 'default' | 'compact'
  className?: string
}

export const CertainTeedBadge: FC<CertainTeedBadgeProps> = ({ 
  variant = 'default',
  className = ''
}) => {
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 px-3 py-1.5 rounded-lg ${className}`}>
        <div className="relative w-6 h-6 flex-shrink-0">
          <svg className="w-6 h-6 text-amber-600" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10L61.8 39.1h31L71.9 56.9l11.8 29.1L50 68.2 28.3 86l11.8-29.1L6.2 39.1h31L50 10z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-amber-900">CertainTeed</span>
          <span className="text-xs text-amber-700">Shingle Master™</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center gap-3 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-300 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {/* Star Badge */}
      <div className="relative w-16 h-16 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-white" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10L61.8 39.1h31L71.9 56.9l11.8 29.1L50 68.2 28.3 86l11.8-29.1L6.2 39.1h31L50 10z" />
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-amber-900">CertainTeed</h3>
        <p className="text-xs font-semibold text-amber-700">Shingle Master™ Certified</p>
        <p className="text-xs text-amber-600 mt-1">Top 1% of Contractors</p>
      </div>

      {/* Certification Mark */}
      <div className="w-full border-t border-amber-200 pt-2">
        <p className="text-xs text-center text-amber-700 font-semibold">
          Premium Quality & Warranty
        </p>
      </div>
    </div>
  )
}
