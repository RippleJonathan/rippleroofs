'use client'

import { FC } from 'react'
import { Shield } from 'lucide-react'

interface EnhancedROCBadgeProps {
  variant?: 'banner' | 'sidebar' | 'inline'
  showVerifyLink?: boolean
}

export const EnhancedROCBadge: FC<EnhancedROCBadgeProps> = ({ 
  variant = 'banner',
  showVerifyLink = true 
}) => {
  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 border-2 border-blue-700 rounded-lg p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-bold text-lg">Arizona ROC Licensed & Insured</span>
            </div>
            <p className="text-blue-100 mb-3">
              <span className="font-semibold text-white">License #362945</span> • Fully bonded and insured to protect your property
            </p>
            {showVerifyLink && (
              <a 
                href="https://roc.az.gov/verify-license"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors group"
              >
                <span className="underline">Verify our license at ROC.AZ.GOV</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'sidebar') {
    return (
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-5 shadow-lg border border-blue-700">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-white/10 p-2 rounded-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-sm">ROC Licensed</div>
            <div className="text-blue-200 text-xs">Arizona #362945</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-blue-100 mb-2">
          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Fully Bonded & Insured</span>
        </div>
        {showVerifyLink && (
          <a 
            href="https://roc.az.gov/verify-license"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-200 hover:text-white underline"
          >
            Verify License →
          </a>
        )}
      </div>
    )
  }

  // inline variant
  return (
    <span className="inline-flex items-center gap-2 bg-blue-900 text-white px-3 py-1.5 rounded-full text-sm font-semibold">
      <Shield className="w-4 h-4" />
      <span>ROC #362945</span>
    </span>
  )
}
