'use client'

import { FC } from 'react'

interface TrustBadgeBarProps {
  variant?: 'default' | 'compact' | 'detailed'
  className?: string
  serviceType?: 'roofing' | 'pdr' // Add service type prop
}

export const TrustBadgeBar: FC<TrustBadgeBarProps> = ({ 
  variant = 'default', 
  className = '',
  serviceType = 'roofing'
}) => {
  const isPDR = serviceType === 'pdr'
  
  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-4 text-sm ${className}`}>
        <div className="flex items-center gap-2 text-primary-700">
          <span className="text-accent-500 text-xl">⭐</span>
          <span className="font-bold">5.0/5</span> 
          <span className="hidden sm:inline">from 62+ Reviews</span>
        </div>
        {!isPDR && (
          <div className="flex items-center gap-2 text-primary-700">
            <span className="text-accent-500 text-xl">✓</span>
            <span className="font-semibold">CertainTeed Certified</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-primary-700">
          <span className="text-accent-500 text-xl">🛡️</span>
          <span className="font-semibold">Fully Insured</span>
        </div>
      </div>
    )
  }

  if (variant === 'detailed') {
    return (
      <div className={`bg-gradient-to-r from-accent-50 to-accent-100 border border-accent-200 rounded-xl p-6 ${className}`}>
        <div className={`grid grid-cols-1 ${isPDR ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white text-2xl">
              ⭐
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-900">5.0/5 Stars</div>
              <div className="text-sm text-primary-600">62+ Happy Customers</div>
              <div className="text-xs text-primary-500 mt-1">Google & Facebook Reviews</div>
            </div>
          </div>

          {!isPDR && (
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white text-2xl">
                ✓
              </div>
              <div>
                <div className="text-lg font-bold text-primary-900">CertainTeed Certified</div>
                <div className="text-sm text-primary-600">Shingle Master™ Status</div>
                <div className="text-xs text-primary-500 mt-1">Top 1% of Contractors</div>
              </div>
            </div>
          )}

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white text-2xl">
              🛡️
            </div>
            <div>
              <div className="text-lg font-bold text-primary-900">Certified & Insured</div>
              <div className="text-sm text-primary-600">$2M Liability Coverage</div>
              <div className="text-xs text-primary-500 mt-1">Workers' Comp Included</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className={`bg-white border-2 border-accent-200 rounded-lg p-4 shadow-sm ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
            <span className="text-accent-600 text-xl">⭐</span>
          </div>
          <div>
            <div className="text-lg font-bold text-primary-900">5.0/5 Stars</div>
            <div className="text-xs text-primary-600">62+ Reviews</div>
          </div>
        </div>

        <div className="hidden sm:block w-px h-12 bg-primary-200"></div>

        {!isPDR && (
          <>
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                <span className="text-accent-600 text-xl">✓</span>
              </div>
              <div>
                <div className="text-sm font-bold text-primary-900">CertainTeed</div>
                <div className="text-xs text-primary-600">Shingle Master™</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-primary-200"></div>
          </>
        )}

        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
            <span className="text-accent-600 text-xl">🛡️</span>
          </div>
          <div>
            <div className="text-sm font-bold text-primary-900">Certified</div>
            <div className="text-xs text-primary-600">Fully Insured</div>
          </div>
        </div>

        <div className="hidden sm:block w-px h-12 bg-primary-200"></div>

        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
            <span className="text-accent-600 text-xl">📞</span>
          </div>
          <div>
            <div className="text-sm font-bold text-primary-900">24/7 {isPDR ? 'Mobile' : 'Emergency'}</div>
            <div className="text-xs text-primary-600">{isPDR ? 'Service Available' : 'Always Available'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
