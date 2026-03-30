import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'

export const metadata: Metadata = {
  title: 'Lifetime Roofing Warranty | CertainTeed ShingleMaster Premier | Ripple Roofing',
  description: 'Ripple Roofing is a CertainTeed ShingleMaster Premier contractor — the highest certification level. We offer Lifetime, 30-Year, and 15-Year CertainTeed-backed workmanship warranties in Round Rock & Austin, TX.',
  openGraph: {
    title: 'Lifetime Roofing Warranty — CertainTeed ShingleMaster Premier | Ripple Roofing',
    description: 'The highest CertainTeed certification level. Lifetime, 30-Year & 15-Year backed workmanship warranties in Central Texas.',
  },
}

export default function WarrantyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Lifetime Roofing Warranty
            </h1>
            <p className="text-xl text-primary-100 mb-4">
              Ripple Roofing is a <strong>CertainTeed ShingleMaster Premier</strong> contractor — the highest certification level CertainTeed offers. That means you get industry-leading warranty protection backed by one of the largest roofing manufacturers in North America.
            </p>
            <p className="text-lg text-primary-200 mb-8">
              Choose from Lifetime, 30-Year, or 15-Year CertainTeed-backed workmanship warranties — not just a contractor promise.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact">
                <button className="btn btn-primary">
                  Get Free Inspection
                </button>
              </a>
              <a href="tel:5127635277">
                <button className="btn btn-secondary">
                  Call: (512) 763-5277
                </button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Intro */}
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">
                Your Peace of Mind is Our Priority
              </h2>
              <p className="text-lg text-primary-700 max-w-3xl mx-auto">
                When you invest in a new roof, you deserve confidence that it will protect your home for years to come. That's why we offer industry-leading warranty coverage backed by our commitment to quality workmanship.
              </p>
            </div>

            {/* Warranty Tiers — ShingleMaster Premier */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4 text-center">
                Choose Your Warranty Level
              </h2>
              <p className="text-lg text-primary-700 text-center max-w-3xl mx-auto mb-10">
                As a CertainTeed ShingleMaster Premier contractor — the highest certification tier — we can offer three levels of CertainTeed-backed workmanship warranty. Most contractors cannot offer these options.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Lifetime */}
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white rounded-2xl p-8 text-center relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">BEST</div>
                  <div className="text-5xl font-display font-bold mb-2">Lifetime</div>
                  <div className="text-primary-200 text-sm mb-6">Workmanship Warranty</div>
                  <ul className="text-left space-y-3 text-primary-100">
                    <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">✓</span> CertainTeed-backed coverage</li>
                    <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">✓</span> Covers installation defects for life of the roof</li>
                    <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">✓</span> Transferable to future homeowners</li>
                    <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">✓</span> Available on qualifying CertainTeed systems</li>
                  </ul>
                </div>
                {/* 30-Year */}
                <div className="bg-gradient-to-br from-primary-700 to-primary-600 text-white rounded-2xl p-8 text-center">
                  <div className="text-5xl font-display font-bold mb-2">30-Year</div>
                  <div className="text-primary-200 text-sm mb-6">Workmanship Warranty</div>
                  <ul className="text-left space-y-3 text-primary-100">
                    <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">✓</span> CertainTeed-backed coverage</li>
                    <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">✓</span> 30 years of installation protection</li>
                    <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">✓</span> Transferable to future homeowners</li>
                    <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">✓</span> Available on select CertainTeed products</li>
                  </ul>
                </div>
                {/* 15-Year */}
                <div className="bg-gradient-to-br from-primary-500 to-primary-400 text-white rounded-2xl p-8 text-center">
                  <div className="text-5xl font-display font-bold mb-2">15-Year</div>
                  <div className="text-primary-200 text-sm mb-6">Workmanship Warranty</div>
                  <ul className="text-left space-y-3 text-primary-100">
                    <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">✓</span> CertainTeed-backed coverage</li>
                    <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">✓</span> 15 years of installation protection</li>
                    <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">✓</span> Transferable to future homeowners</li>
                    <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">✓</span> Standard CertainTeed systems</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-sm text-primary-600 italic">Warranty tier is determined by the CertainTeed product system selected. Ask us which warranty level applies to your project — we'll walk you through your options at no cost.</p>
            </div>

            {/* Warranty Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Manufacturer Warranty */}
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-8 border-2 border-accent-200">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  Manufacturer's Material Warranty
                </h3>
                <p className="text-primary-700 mb-6">
                  All roofing materials we install come with comprehensive manufacturer warranties that cover defects in materials.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-primary-800"><strong>Asphalt Shingles:</strong> 25-50 year warranties depending on product</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-primary-800"><strong>Metal Roofing:</strong> 30-50 year warranties on paint and materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-primary-800"><strong>CertainTeed Products:</strong> Enhanced system warranties available as a ShingleMaster Premier contractor</span>
                  </li>
                </ul>
              </div>

              {/* Workmanship Warranty */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border-2 border-primary-200">
                <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  Our Workmanship Warranty
                </h3>
                <p className="text-primary-700 mb-6">
                  We guarantee the quality of our installation and stand behind our work with comprehensive coverage.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-primary-800"><strong>Lifetime, 30-Year, or 15-Year:</strong> CertainTeed-backed workmanship coverage depending on product system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-primary-800"><strong>Transferable:</strong> Can be transferred to new homeowners — adds real resale value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-primary-800"><strong>No Hidden Fees:</strong> Repairs covered at no additional cost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-primary-800"><strong>Transferable Up to 20 Years:</strong> New buyer inherits remaining warranty coverage — a documented asset when you sell</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-primary-800"><strong>We Handle Registration:</strong> We register your warranty with CertainTeed upon project completion — no extra steps for you</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What's Covered */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-8 text-center">
                What Our Workmanship Warranty Covers
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Installation Defects
                  </h3>
                  <p className="text-primary-700 text-sm">
                    Any issues related to improper installation techniques or procedures
                  </p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Flashing Failures
                  </h3>
                  <p className="text-primary-700 text-sm">
                    Leaks or issues caused by improper flashing installation
                  </p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ventilation Issues
                  </h3>
                  <p className="text-primary-700 text-sm">
                    Problems related to inadequate or improper ventilation
                  </p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Nail Pop-Ups
                  </h3>
                  <p className="text-primary-700 text-sm">
                    Fastener issues caused by installation errors
                  </p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Workmanship Leaks
                  </h3>
                  <p className="text-primary-700 text-sm">
                    Any leaks resulting from installation mistakes
                  </p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sealing Problems
                  </h3>
                  <p className="text-primary-700 text-sm">
                    Issues with sealant application around penetrations
                  </p>
                </div>
              </div>
            </div>

            {/* CertainTeed ShingleMaster Premier Benefits */}
            <div className="mb-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white rounded-3xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
                  CertainTeed ShingleMaster Premier Advantages
                </h2>
                <p className="text-xl text-primary-100 mb-8 text-center">
                  As a CertainTeed ShingleMaster Premier contractor, we can offer enhanced warranty options
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <strong className="text-lg">System Warranties:</strong>
                      <p className="text-primary-100">Coverage on complete CertainTeed roofing systems including underlayment, shingles, and accessories</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <strong className="text-lg">Extended Coverage:</strong>
                      <p className="text-primary-100">Up to 50-year non-prorated coverage on select premium products</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <strong className="text-lg">Expert Installation:</strong>
                      <p className="text-primary-100">Installed by factory-certified technicians following strict CertainTeed standards</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Maintenance Tips */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-8 text-center">
                Protecting Your Warranty
              </h2>
              <p className="text-lg text-primary-700 text-center mb-8 max-w-3xl mx-auto">
                To maintain your warranty coverage, follow these simple maintenance guidelines:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-primary-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                    <span className="text-3xl">✓</span>
                    Do This
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-primary-700">
                      <span className="text-accent-600">•</span>
                      Schedule annual professional inspections
                    </li>
                    <li className="flex items-start gap-2 text-primary-700">
                      <span className="text-accent-600">•</span>
                      Keep gutters clean and free-flowing
                    </li>
                    <li className="flex items-start gap-2 text-primary-700">
                      <span className="text-accent-600">•</span>
                      Remove debris like leaves and branches
                    </li>
                    <li className="flex items-start gap-2 text-primary-700">
                      <span className="text-accent-600">•</span>
                      Report issues promptly for quick repairs
                    </li>
                    <li className="flex items-start gap-2 text-primary-700">
                      <span className="text-accent-600">•</span>
                      Keep warranty documentation in a safe place
                    </li>
                  </ul>
                </div>

                <div className="border border-red-200 rounded-xl p-6 bg-red-50">
                  <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                    <span className="text-3xl">✗</span>
                    Avoid This
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-red-800">
                      <span className="text-red-600">•</span>
                      Walking on the roof unnecessarily
                    </li>
                    <li className="flex items-start gap-2 text-red-800">
                      <span className="text-red-600">•</span>
                      Power washing shingles (can damage granules)
                    </li>
                    <li className="flex items-start gap-2 text-red-800">
                      <span className="text-red-600">•</span>
                      Hiring uninsured contractors for repairs
                    </li>
                    <li className="flex items-start gap-2 text-red-800">
                      <span className="text-red-600">•</span>
                      Ignoring small issues until they become major
                    </li>
                    <li className="flex items-start gap-2 text-red-800">
                      <span className="text-red-600">•</span>
                      Making modifications without consulting us
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
                Questions About Our Warranties?
              </h2>
              <p className="text-lg text-primary-700 mb-6">
                Our team is here to explain all warranty options and help you choose the best protection for your investment.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="/contact">
                  <button className="btn btn-primary btn-lg">
                    Schedule Free Consultation
                  </button>
                </a>
                <a href="tel:5127635277">
                  <button className="btn btn-secondary btn-lg">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
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
