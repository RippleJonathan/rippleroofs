'use client'

import { FC } from 'react'

export const FeaturedIn: FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary-50 to-primary-100/50 border-y border-primary-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-accent-600 tracking-wider uppercase mb-2">
              Press & Media
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900">
              Featured In Local News
            </h2>
            <p className="text-primary-600 mt-3 max-w-2xl mx-auto">
              Recognized by major news outlets for our expertise in roof repair and storm damage restoration across Central Texas
            </p>
          </div>

          {/* News Outlets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* KXAN */}
            <a
              href="https://www.kxan.com/news/local/feel-like-im-being-robbed-newer-homes-throughout-central-texas-sustain-repeated-roof-damage-neighbors-want-accountability/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-primary-200 hover:border-accent-400"
            >
              <div className="flex items-center gap-4 mb-3">
                {/* KXAN Logo - Text Based */}
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-white font-bold text-xs text-center leading-tight">
                    <div className="text-lg">KXAN</div>
                    <div className="text-[10px] font-light">News</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary-900 group-hover:text-accent-600 transition-colors text-sm">
                    KXAN News
                  </h3>
                  <p className="text-xs text-primary-600">Austin Local News</p>
                </div>
              </div>
              <p className="text-sm text-primary-700 leading-relaxed">
                Featured in coverage of roof damage and storm resilience across Central Texas, discussing solutions for homeowner protection.
              </p>
              <div className="mt-4 flex items-center gap-2 text-accent-600 group-hover:text-accent-700 transition-colors text-sm font-semibold">
                <span>Read Article</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Yahoo News */}
            <a
              href="https://www.yahoo.com/news/feel-m-being-robbed-newer-232834986.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-primary-200 hover:border-accent-400"
            >
              <div className="flex items-center gap-4 mb-3">
                {/* Yahoo Logo - Text Based */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-purple-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-white font-bold text-sm text-center">
                    Yahoo!
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary-900 group-hover:text-accent-600 transition-colors text-sm">
                    Yahoo News
                  </h3>
                  <p className="text-xs text-primary-600">National News Network</p>
                </div>
              </div>
              <p className="text-sm text-primary-700 leading-relaxed">
                Syndicated article highlighting roof damage trends and expert insights on residential property protection in Texas.
              </p>
              <div className="mt-4 flex items-center gap-2 text-accent-600 group-hover:text-accent-700 transition-colors text-sm font-semibold">
                <span>Read Article</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 text-center">
            <p className="text-xs text-primary-600 uppercase tracking-wider">
              ✓ Featured as Local Expert Source • CertainTeed Shingle Master Certified
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
