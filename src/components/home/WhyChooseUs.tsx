import { FC } from 'react'
import { Container } from '@/components/layout/Container'

export const WhyChooseUs: FC = () => {
  const comparisons = [
    {
      feature: 'Certification',
      us: 'CertainTeed Shingle Master',
      them: 'Basic contractor license',
      highlight: true,
    },
    {
      feature: 'Warranty',
      us: '10-year workmanship + manufacturer',
      them: '1-2 year workmanship',
      highlight: true,
    },
    {
      feature: 'Response Time',
      us: '24/7 emergency service',
      them: 'Business hours only',
      highlight: false,
    },
    {
      feature: 'Insurance Coverage',
      us: 'Full liability + workers comp',
      them: 'Minimal or none',
      highlight: true,
    },
    {
      feature: 'Financing',
      us: 'Flexible payment plans',
      them: 'Full payment upfront',
      highlight: false,
    },
    {
      feature: 'Customer Rating',
      us: '5.0 stars (62+ reviews)',
      them: 'Variable or no reviews',
      highlight: true,
    },
    {
      feature: 'Free Services',
      us: 'Inspections & estimates',
      them: 'Often charge for quotes',
      highlight: false,
    },
    {
      feature: 'Project Cleanup',
      us: 'Thorough magnetic sweep',
      them: 'Basic or incomplete',
      highlight: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-4">
              Why Choose Ripple Roofing?
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Not all roofing contractors are created equal. See how we compare to typical competitors.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="font-bold text-lg text-primary-900"></div>
                <div className="bg-accent-500 text-white rounded-t-xl py-4 px-6 text-center">
                  <div className="text-2xl font-display font-bold mb-1">
                    Ripple Roofing
                  </div>
                  <div className="text-sm opacity-90">Your Smart Choice</div>
                </div>
                <div className="bg-primary-200 text-primary-700 rounded-t-xl py-4 px-6 text-center">
                  <div className="text-2xl font-display font-bold mb-1">
                    Other Contractors
                  </div>
                  <div className="text-sm opacity-75">Typical Competitors</div>
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-2">
                {comparisons.map((item, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 gap-4 items-center py-4 px-4 rounded-lg ${
                      item.highlight ? 'bg-accent-50 border-2 border-accent-200' : 'bg-primary-25'
                    }`}
                  >
                    <div className="font-bold text-primary-900">
                      {item.feature}
                    </div>
                    <div className="flex items-center gap-2 text-primary-900">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold">{item.us}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-600">
                      <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item.them}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div></div>
                <div className="bg-accent-500 text-white rounded-b-xl py-6 px-6 text-center">
                  <a href="/contact">
                    <button className="btn btn-primary w-full">
                      Choose Excellence
                    </button>
                  </a>
                </div>
                <div className="bg-primary-200 rounded-b-xl py-6 px-6 text-center flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">
                    Risk Compromise
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent-600">20+</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                Years of Experience
              </h3>
              <p className="text-primary-600">
                Serving Central Texas with expertise and reliability
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent-600">5,000+</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                Homes Protected
              </h3>
              <p className="text-primary-600">
                Thousands of satisfied customers across the region
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent-600">100%</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                Satisfaction Guarantee
              </h3>
              <p className="text-primary-600">
                We don't stop until you're completely happy
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
