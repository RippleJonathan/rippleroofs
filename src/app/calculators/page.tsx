import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { RoofSizeCalculator } from '@/components/calculators/RoofSizeCalculator'
import { CostEstimator } from '@/components/calculators/CostEstimator'
import { ROICalculator } from '@/components/calculators/ROICalculator'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Free Roofing Calculators - Cost Estimator & ROI Calculator | Central Texas',
  description: 'Calculate your roof size, estimate replacement costs, and analyze energy savings ROI. Free interactive roofing calculators for Central Texas homeowners.',
  openGraph: {
    title: 'Free Roofing Calculators - Ripple Roofing',
    description: 'Estimate your roof replacement cost and calculate energy savings',
  },
}

export default function CalculatorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Free Roofing Calculators
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Get instant estimates for your roofing project. Calculate roof size, estimate costs, 
              and analyze energy savings ROI—all for free.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#size-calculator">
                <Button variant="secondary" size="lg">
                  📏 Roof Size
                </Button>
              </a>
              <a href="#cost-estimator">
                <Button variant="secondary" size="lg">
                  💰 Cost Estimate
                </Button>
              </a>
              <a href="#roi-calculator">
                <Button variant="secondary" size="lg">
                  📊 Energy ROI
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Calculator 1: Roof Size */}
      <section id="size-calculator" className="py-20 bg-white">
        <Container>
          <RoofSizeCalculator />
        </Container>
      </section>

      {/* Calculator 2: Cost Estimator */}
      <section id="cost-estimator" className="py-20 bg-primary-50">
        <Container>
          <CostEstimator />
        </Container>
      </section>

      {/* Calculator 3: ROI Calculator */}
      <section id="roi-calculator" className="py-20 bg-white">
        <Container>
          <ROICalculator />
        </Container>
      </section>

      {/* Why Use Our Calculators */}
      <section className="py-20 bg-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8 text-center">
              Why Use Our Roofing Calculators?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-primary-200">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Accurate Estimates</h3>
                <p className="text-primary-700">
                  Our calculators use real Central Texas pricing data and include pitch multipliers 
                  for accurate measurements—not generic national averages.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-primary-200">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Make Informed Decisions</h3>
                <p className="text-primary-700">
                  Compare material options, understand cost breakdowns, and see exactly where 
                  your money goes before committing to a project.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-primary-200">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Instant Results</h3>
                <p className="text-primary-700">
                  Get immediate estimates without waiting for callbacks or sales pitches. 
                  Use the numbers to budget and plan your roofing project.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-primary-200">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">No Obligation</h3>
                <p className="text-primary-700">
                  All calculators are completely free to use. No email required, no high-pressure 
                  sales tactics—just helpful tools for homeowners.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8 text-center">
              How to Get the Most Accurate Estimate
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center font-bold text-accent-600 text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Calculate Your Roof Size
                  </h3>
                  <p className="text-primary-700 mb-2">
                    Measure your home's length and width at ground level. Identify your roof pitch 
                    (common residential is 6/12). Add separate sections for complex roofs.
                  </p>
                  <p className="text-sm text-primary-600">
                    <strong>Tip:</strong> Include overhangs—typically add 1-2 feet to each dimension.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center font-bold text-accent-600 text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Estimate Replacement Cost
                  </h3>
                  <p className="text-primary-700 mb-2">
                    Use your calculated square footage in the Cost Estimator. Compare material options 
                    and see detailed price breakdowns including labor, removal, and permits.
                  </p>
                  <p className="text-sm text-primary-600">
                    <strong>Tip:</strong> Class 4 IR shingles cost more upfront but save on insurance long-term.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center font-bold text-accent-600 text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Calculate Energy Savings ROI
                  </h3>
                  <p className="text-primary-700 mb-2">
                    Enter your current electric bill and select energy-efficient upgrades. See exactly 
                    how long it takes to recoup your investment through energy and insurance savings.
                  </p>
                  <p className="text-sm text-primary-600">
                    <strong>Tip:</strong> Combine multiple upgrades for maximum savings—up to 40% reduction.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center font-bold text-accent-600 text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Get Professional Verification
                  </h3>
                  <p className="text-primary-700 mb-2">
                    These calculators provide excellent estimates, but every roof is unique. Schedule 
                    a free professional inspection for the most accurate quote tailored to your home.
                  </p>
                  <p className="text-sm text-primary-600">
                    <strong>Free service:</strong> No obligation inspections available throughout Central Texas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready for an Accurate Professional Quote?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our calculators give you great estimates, but nothing beats a free professional 
              inspection. Get a detailed quote tailored to your exact roof in just 24-48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Schedule Free Inspection
                </Button>
              </a>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-accent-600"
                >
                  Call {SITE_CONFIG.phone}
                </Button>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/90">
                <span>✓ CertainTeed Shingle Master</span>
                <span>✓ A+ BBB Rating</span>
                <span>✓ 10-Year Workmanship Warranty</span>
                <span>✓ Free Inspections</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8 text-center">
              Calculator FAQ
            </h2>
            
            <div className="space-y-6">
              <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <h3 className="font-bold text-primary-900 mb-2">
                  How accurate are these calculators?
                </h3>
                <p className="text-primary-700">
                  Very accurate for budgeting purposes! Our calculators use real Central Texas pricing 
                  and include proper pitch multipliers. However, final costs depend on roof complexity, 
                  accessibility, and current material prices. Professional inspections provide the most accurate quotes.
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <h3 className="font-bold text-primary-900 mb-2">
                  Do I need to provide my email or contact info?
                </h3>
                <p className="text-primary-700">
                  No! All calculators are completely free to use with no registration, email capture, 
                  or sales pressure. Use them as many times as you need.
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <h3 className="font-bold text-primary-900 mb-2">
                  What if my roof has multiple sections or complex angles?
                </h3>
                <p className="text-primary-700">
                  The Roof Size Calculator lets you add multiple sections with different dimensions 
                  and pitches. Measure each plane separately and the calculator totals everything accurately.
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <h3 className="font-bold text-primary-900 mb-2">
                  Are these prices for Round Rock only?
                </h3>
                <p className="text-primary-700">
                  These are Central Texas prices applicable to Round Rock, Austin, Georgetown, Cedar Park, 
                  Pflugerville, Leander, and surrounding areas. Prices in rural areas may be 5-10% higher 
                  due to travel time.
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <h3 className="font-bold text-primary-900 mb-2">
                  Can I save or print my results?
                </h3>
                <p className="text-primary-700">
                  Yes! Simply take a screenshot of your results or use your browser's print function. 
                  For a detailed written quote, schedule a free professional inspection.
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <h3 className="font-bold text-primary-900 mb-2">
                  Do these calculators work on mobile devices?
                </h3>
                <p className="text-primary-700">
                  Absolutely! All three calculators are fully mobile-responsive and work great on 
                  phones and tablets.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Roofing Cost Calculator',
            applicationCategory: 'UtilitiesApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            description: 'Free roofing calculators for Central Texas homeowners. Calculate roof size, estimate replacement costs, and analyze energy savings ROI.',
            provider: {
              '@type': 'Organization',
              name: SITE_CONFIG.name,
              telephone: SITE_CONFIG.phone,
              url: SITE_CONFIG.url
            },
            featureList: [
              'Roof Size Calculator with pitch multipliers',
              'Cost Estimator with material comparison',
              'Energy Savings ROI Calculator',
              'Central Texas specific pricing'
            ]
          })
        }}
      />
    </>
  )
}
