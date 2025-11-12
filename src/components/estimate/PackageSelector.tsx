'use client'

import { useState } from 'react'
import { ROOFING_PACKAGES, RoofingPackage } from '@/types/packages'

interface PackageSelectorProps {
  onPackageSelect: (packageId: string) => void
  selectedPackage?: string
}

export function PackageSelector({ onPackageSelect, selectedPackage }: PackageSelectorProps) {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary-900 mb-2">Choose Your Roofing Package</h2>
        <p className="text-primary-600">
          Select your preferred roofing system to see your personalized estimate
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {ROOFING_PACKAGES.map((pkg) => {
          const isSelected = selectedPackage === pkg.id
          const isExpanded = expandedPackage === pkg.id

          return (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all ${
                isSelected ? 'ring-4 ring-accent-500' : 'hover:shadow-xl'
              }`}
            >
              {/* Best Value Badge */}
              {pkg.id === 'climateflex' && (
                <div className="absolute top-4 right-4 bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  RECOMMENDED
                </div>
              )}

              {/* Header */}
              <div className={`p-6 ${pkg.id === 'climateflex' ? 'bg-gradient-to-br from-accent-50 to-accent-100' : pkg.id === 'metal' ? 'bg-gradient-to-br from-gray-50 to-gray-100' : 'bg-gradient-to-br from-primary-50 to-primary-100'}`}>
                <h3 className="text-2xl font-bold text-primary-900 mb-1">{pkg.name}</h3>
                <p className="text-sm text-primary-600 font-medium">{pkg.brand}</p>
                <p className="text-sm text-primary-700 mt-2">{pkg.description}</p>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                {/* Pricing Teaser */}
                <div className="text-center mb-4 p-4 bg-gradient-to-r from-accent-50 to-primary-50 rounded-lg">
                  <div className="text-sm font-semibold text-primary-900 mb-1">
                    💰 Get Your Custom Price
                  </div>
                  <div className="text-xs text-primary-600">
                    Enter your information to see detailed pricing
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2 mb-4">
                  {pkg.features.slice(0, 5).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-primary-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Warranty */}
                <div className="bg-primary-50 rounded-lg p-3 mb-4">
                  <div className="text-xs font-semibold text-primary-900 mb-1">Warranty</div>
                  <div className="text-sm text-primary-700">{pkg.warranty}</div>
                </div>

                {/* Lifespan */}
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <div className="text-xs font-semibold text-green-900 mb-1">Expected Lifespan</div>
                  <div className="text-sm text-green-700">{pkg.lifespan}</div>
                </div>

                {/* Select Button */}
                <button
                  onClick={() => onPackageSelect(pkg.id)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    isSelected
                      ? 'bg-accent-600 text-white'
                      : 'bg-primary-100 text-primary-900 hover:bg-primary-200'
                  }`}
                >
                  {isSelected ? 'Selected ✓' : 'Select Package'}
                </button>

                {/* View Details */}
                <button
                  onClick={() => setExpandedPackage(isExpanded ? null : pkg.id)}
                  className="w-full mt-2 py-2 text-sm text-accent-600 hover:text-accent-700 font-medium"
                >
                  {isExpanded ? 'Hide Details ▲' : 'View Full Details ▼'}
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-primary-200 space-y-4">
                    {/* All Features */}
                    <div>
                      <h4 className="text-sm font-bold text-primary-900 mb-2">All Features</h4>
                      <div className="space-y-1">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xs text-primary-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Best For */}
                    <div>
                      <h4 className="text-sm font-bold text-primary-900 mb-2">Best For</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.bestFor.map((item, idx) => (
                          <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Color Options */}
                    <div>
                      <h4 className="text-sm font-bold text-primary-900 mb-2">Available Colors</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.colorOptions.map((color, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Facts */}
                    <div>
                      <h4 className="text-sm font-bold text-primary-900 mb-2">Key Facts</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {pkg.facts.map((fact, idx) => (
                          <li key={idx} className="text-xs text-primary-700">{fact}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Brochure Link */}
                    {pkg.brochureUrl && (
                      <a
                        href={pkg.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent-600 hover:text-accent-700 font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Product Brochure
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Comparison Note */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="text-sm text-blue-900">
            <p className="font-semibold mb-1">Need help choosing?</p>
            <p>Our team can provide a detailed consultation to help you select the perfect roofing system for your home and budget. Final pricing includes materials, labor, permits, and cleanup.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
