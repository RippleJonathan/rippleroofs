import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Financing Options',
  description: 'Flexible financing options for your roofing project. Easy online application with competitive rates. Make your dream roof affordable with payment plans that fit your budget.',
  openGraph: {
    title: 'Roofing Financing - Ripple Roofing & Construction',
    description: 'Affordable payment plans for quality roofing',
  },
}

export default function FinancingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Flexible Financing Options
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Quality roofing should be accessible. We offer competitive financing to make your project affordable with monthly payments that fit your budget.
            </p>
            <a
              href="https://cp.decisionlender.solutions/cp2/pure659/(retail/new/page1//advertisement:loan-calculator)?internalDealerId=4757391059731"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary btn-lg">
                Apply Now - Get Instant Decision
              </button>
            </a>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Why Finance */}
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">
                Why Choose Financing?
              </h2>
              <p className="text-lg text-primary-700 max-w-3xl mx-auto mb-12">
                Your roof protects your most valuable investment – your home. Don't delay necessary repairs or upgrades due to upfront costs. Our financing options make it easy to get the roof you need today.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-primary-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Affordable Monthly Payments
                  </h3>
                  <p className="text-primary-700">
                    Spread the cost over time with low monthly payments that fit your budget
                  </p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Quick Approval
                  </h3>
                  <p className="text-primary-700">
                    Get an instant decision online in minutes with our simple application
                  </p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Competitive Rates
                  </h3>
                  <p className="text-primary-700">
                    Flexible terms and competitive interest rates to match your financial situation
                  </p>
                </div>
              </div>
            </div>

            {/* Financing Web Art */}
            <div className="mb-16 bg-gradient-to-br from-accent-50 to-primary-50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-primary-700">
                  Apply online in minutes and get an instant decision
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <a
                  href="https://cp.decisionlender.solutions/cp2/pure659/(retail/new/page1//advertisement:loan-calculator)?internalDealerId=4757391059731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                >
                  <Image
                    src="https://22210029.fs1.hubspotusercontent-na1.net/hubfs/22210029/Dealer%20Marketing%20Content/Ripple%20Roofing%20Web%20Art.png"
                    alt="Ripple Roofing Financing Options"
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-xl"
                    priority
                  />
                </a>
                
                <div className="text-center mt-8">
                  <a
                    href="https://cp.decisionlender.solutions/cp2/pure659/(retail/new/page1//advertisement:loan-calculator)?internalDealerId=4757391059731"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-primary btn-lg">
                      Apply Online Now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-8 text-center">
                How Financing Works
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Apply Online
                  </h3>
                  <p className="text-primary-700">
                    Quick 5-minute application with instant decision
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Get Approved
                  </h3>
                  <p className="text-primary-700">
                    Receive your credit decision within minutes
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Schedule Work
                  </h3>
                  <p className="text-primary-700">
                    We'll schedule your roofing project at your convenience
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Enjoy Your Roof
                  </h3>
                  <p className="text-primary-700">
                    Make affordable monthly payments that fit your budget
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-8 text-center">
                Financing FAQs
              </h2>
              
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="border border-primary-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    What credit score do I need?
                  </h3>
                  <p className="text-primary-700">
                    We work with a range of credit scores. Apply to see what options are available for your situation.
                  </p>
                </div>

                <div className="border border-primary-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    How long does approval take?
                  </h3>
                  <p className="text-primary-700">
                    Most applications receive an instant decision. In some cases, additional verification may be needed, which typically takes 24-48 hours.
                  </p>
                </div>

                <div className="border border-primary-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    What are the interest rates?
                  </h3>
                  <p className="text-primary-700">
                    Rates vary based on creditworthiness and loan terms. We offer competitive rates and will help you find the best option for your budget.
                  </p>
                </div>

                <div className="border border-primary-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Can I pay off early?
                  </h3>
                  <p className="text-primary-700">
                    Yes! Most of our financing options allow early payoff without penalties. Check your specific loan terms for details.
                  </p>
                </div>
              </div>
            </div>

            {/* Download Flyer */}
            <div className="bg-primary-900 text-white rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Want More Information?
              </h2>
              <p className="text-lg text-primary-100 mb-6">
                Download our financing flyer for complete details
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://22210029.fs1.hubspotusercontent-na1.net/hubfs/22210029/Dealer%20Marketing%20Content/Ripple%20Roofing%20&%20Construction%20Flyer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary btn-lg">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Financing Flyer (PDF)
                  </button>
                </a>
                <a href="/contact">
                  <button className="btn btn-secondary btn-lg">
                    Contact Us for Questions
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
