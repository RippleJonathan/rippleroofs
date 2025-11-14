'use client'

import { RoofMeasurement } from '@/types/estimate'
import { ROOFING_PACKAGES } from '@/types/packages'
import { CustomerInfo } from './CustomerInfoForm'

interface EstimateSummaryProps {
  measurement: RoofMeasurement
  selectedPackageId: string
  customerInfo: CustomerInfo
  address: string
}

export function EstimateSummary({ 
  measurement, 
  selectedPackageId, 
  customerInfo,
  address 
}: EstimateSummaryProps) {
  const selectedPackage = ROOFING_PACKAGES.find(pkg => pkg.id === selectedPackageId)
  
  if (!selectedPackage) {
    return <div>Package not found</div>
  }

  const totalPrice = measurement.totalSquares * selectedPackage.pricePerSquare

  return (
    <div className="space-y-8">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-2xl shadow-xl p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Your Estimate is Ready!
        </h1>
        <p className="text-xl text-accent-50">
          A detailed PDF has been sent to <strong>{customerInfo.email}</strong>
        </p>
      </div>

      {/* Pricing Overview */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-primary-900 mb-6 text-center">
          💰 Your Custom Pricing
        </h2>
        
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 mb-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <p className="text-sm text-primary-600 mb-2">Total Area</p>
              <p className="text-3xl font-bold text-primary-900">{measurement.totalSquares}</p>
              <p className="text-sm text-primary-600">squares</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-primary-600 mb-2">Price per Square</p>
              <p className="text-3xl font-bold text-primary-900">${selectedPackage.pricePerSquare}</p>
              <p className="text-sm text-primary-600">per square</p>
            </div>
            <div className="text-center bg-white rounded-lg p-4 shadow-md">
              <p className="text-sm font-semibold text-accent-600 mb-2">TOTAL ESTIMATE</p>
              <p className="text-4xl font-bold text-accent-900">${totalPrice.toLocaleString()}</p>
              <p className="text-xs text-primary-600 mt-2">*Subject to site inspection</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 text-sm text-primary-700">
            <p className="font-semibold mb-2">📍 Property Address:</p>
            <p>{address}</p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="text-sm">
              <p className="font-semibold text-blue-900 mb-1">Final pricing determined after site inspection</p>
              <p className="text-blue-800">
                This estimate is based on the measurements provided. Final pricing will be confirmed after our team inspects your roof and verifies all details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Package Details */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
            {selectedPackage.brand.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-900">{selectedPackage.name}</h2>
            <p className="text-lg text-primary-600">{selectedPackage.brand}</p>
            <p className="text-primary-700 mt-2">{selectedPackage.description}</p>
          </div>
        </div>

        {selectedPackage.brochureUrl && (
          <a
            href={selectedPackage.brochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-900 rounded-lg hover:bg-primary-200 transition-colors mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Product Brochure
          </a>
        )}

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-primary-900 mb-3">✨ Key Features</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {selectedPackage.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty & Lifespan */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-primary-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h4 className="font-semibold text-primary-900">Warranty</h4>
            </div>
            <p className="text-sm text-primary-700">{selectedPackage.warranty}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <h4 className="font-semibold text-green-900">Expected Lifespan</h4>
            </div>
            <p className="text-sm text-green-700">{selectedPackage.lifespan}</p>
          </div>
        </div>
      </div>

      {/* Materials Included */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-primary-900 mb-6">🛠️ Materials Included</h2>
        <div className="space-y-3">
          <MaterialRow 
            label="Shingles" 
            value={selectedPackage.materials.shingles}
            links={
              selectedPackage.id === 'climateflex' ? [
                { text: 'Product Brochure', url: 'https://certainteed.widen.net/content/4azmgr9hvd/pdf/landmark-climateflex-brochure-00-00-558-US-EN-2509.pdf?u=nwk4fd' },
                { text: 'Life Cycle Guide', url: 'https://certainteed.widen.net/content/wulhpo5uwc/pdf/life-cycle-roof-brochure-00-00-3651-NA-EN-2308-v3.pdf?u=nwk4fd' }
              ] : selectedPackage.id === 'metal' ? [
                { text: 'Product Catalog', url: 'https://www.mcelroymetal.com/hubfs/assets/176181%20MM101%20Product%20Catalog%2036pg%20web%20(1).pdf' }
              ] : selectedPackage.id === 'economy' ? [
                { text: 'Spec Sheet', url: 'https://www.gaf.com/en-us/document-library/documents/specifications/timberline-ns-shingles-spec-sheet-resgn467ns.pdf' }
              ] : undefined
            }
          />
          <MaterialRow 
            label="Underlayment" 
            value={selectedPackage.materials.underlayment}
            links={selectedPackage.id === 'climateflex' ? [
              { text: 'Roof Runner Info', url: 'https://certainteed.widen.net/content/rcyansauox/pdf/roofrunner-sellsheet-00-04-2102-NA-EN-2304.pdf?u=nwk4fd' }
            ] : undefined}
          />
          <MaterialRow 
            label="Starter Shingles" 
            value={selectedPackage.materials.starter}
            links={selectedPackage.id === 'climateflex' ? [
              { text: 'SwiftStart Details', url: 'https://certainteed.widen.net/content/iin4o10rja/pdf/swiftstart-sellsheet-00-04-768-NA-EN-2305.pdf?u=nwk4fd' }
            ] : undefined}
          />
          <MaterialRow 
            label="Ridge Cap" 
            value={selectedPackage.materials.ridgeCap}
            links={selectedPackage.id === 'climateflex' ? [
              { text: 'Shadow Ridge Info', url: 'https://certainteed.widen.net/content/rk1me8ewzg/pdf/shadowridge-sellsheet-00-04-1156-NA-EN-2301.pdf?u=nwk4fd' }
            ] : undefined}
          />
          <MaterialRow label="Ventilation" value={selectedPackage.materials.ventilation} />
          <MaterialRow 
            label="Ice & Water Shield" 
            value={selectedPackage.materials.iceAndWater}
            links={selectedPackage.id === 'climateflex' ? [
              { text: 'DryRoof SA Info', url: 'https://certainteed.widen.net/content/qm4sk7drs1/pdf/dryroofsa-sellsheet-00-04-494-NA-EN-2111.pdf?u=nwk4fd' }
            ] : undefined}
          />
          <MaterialRow label="Drip Edge" value={selectedPackage.materials.drip} />
        </div>
      </div>

      {/* Scope of Work */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-primary-900 mb-6">📋 Scope of Work</h2>
        <div className="space-y-3">
          {selectedPackage.scopeOfWork.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent-100 text-accent-700 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                {idx + 1}
              </div>
              <p className="text-primary-700 pt-0.5">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline & Colors */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-bold text-primary-900 mb-4">⏱️ Project Timeline</h3>
          <div className="bg-primary-50 rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-primary-900 mb-2">{selectedPackage.timeframe}</p>
            <p className="text-sm text-primary-600">Weather dependent</p>
          </div>
        </div>

        {/* Color Options */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-bold text-primary-900 mb-4">🎨 Available Colors</h3>
          <div className="flex flex-wrap gap-2">
            {selectedPackage.colorOptions.map((color, idx) => (
              <span key={idx} className="px-3 py-2 bg-primary-100 text-primary-900 rounded-lg text-sm">
                {color}
              </span>
            ))}
          </div>
          <p className="text-xs text-primary-600 mt-3">Final color selection during consultation</p>
        </div>
      </div>

      {/* Interesting Facts */}
      <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl shadow-xl p-8">
        <h3 className="text-xl font-bold text-primary-900 mb-4">💡 Did You Know?</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {selectedPackage.facts.map((fact, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-sm text-primary-700">{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Happens Next - Prominent CTA Section */}
      <div className="relative overflow-hidden">
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-primary-100">
          {/* Header Banner */}
          <div className="bg-white py-8 px-8 text-center border-b-2 border-primary-100">
            <div className="inline-block p-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full mb-4 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary-900">What Happens Next?</h2>
            <p className="text-primary-600 text-lg">Your journey to a beautiful new roof starts here</p>
          </div>

          {/* Steps Grid */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-primary-50 to-accent-50">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-primary-200 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">Check Your Email</h3>
                <p className="text-primary-600 leading-relaxed">
                  Your detailed PDF estimate is on its way! It should arrive in your inbox within the next few minutes.
                </p>
                <div className="mt-4 inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200">
                  ✓ Sent to {customerInfo.email}
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-accent-200 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">We'll Contact You</h3>
                <p className="text-primary-600 leading-relaxed">
                  Our roofing specialists will reach out within 24 hours to answer questions and discuss your project details.
                </p>
                <div className="mt-4 inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200">
                  {customerInfo.preferredContact === 'phone' ? '📞 Phone Preferred' : 
                   customerInfo.preferredContact === 'email' ? '📧 Email Preferred' : 
                   '📱 Either Method'}
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-primary-200 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary-700 to-primary-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">Schedule Inspection</h3>
                <p className="text-primary-600 leading-relaxed">
                  We'll arrange a free, no-obligation on-site inspection to finalize measurements and answer any questions.
                </p>
                <div className="mt-4 inline-block px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium border border-accent-200">
                  🗓️ {customerInfo.timeframe === 'asap' ? 'ASAP' : 
                      customerInfo.timeframe === '1-2-weeks' ? '1-2 Weeks' :
                      customerInfo.timeframe === '1-month' ? '1 Month' :
                      customerInfo.timeframe === '2-3-months' ? '2-3 Months' : 
                      'Planning Ahead'}
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="border-t border-primary-200 pt-8 bg-white">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+15127635277"
                  className="group relative px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-bold text-lg rounded-xl hover:from-accent-700 hover:to-accent-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Now: (512) 763-5277
                </a>
                <a
                  href="mailto:sales@rippleroofs.com"
                  className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-lg rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
              </div>
              <p className="text-center text-primary-600 text-sm mt-6">
                Questions? We're here to help! Our team is available Monday-Saturday, 8am-6pm
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="bg-gradient-to-r from-primary-950 to-primary-900 text-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-accent-400">Ripple Roofing & Construction</h4>
              <p className="text-primary-200 text-sm leading-relaxed mb-4">
                Professional roofing services backed by years of experience and a commitment to quality craftsmanship.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-accent-400">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-primary-200 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-primary-200 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Services
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-primary-200 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-primary-200 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-primary-200 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-accent-400">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-primary-200">Phone</p>
                    <a href="tel:+15127635277" className="text-white hover:text-accent-400 transition-colors font-medium">
                      (512) 763-5277
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-primary-200">Email</p>
                    <a href="mailto:sales@rippleroofs.com" className="text-white hover:text-accent-400 transition-colors font-medium">
                      sales@rippleroofs.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-primary-200">Hours</p>
                    <p className="text-white font-medium">Mon-Sat: 8am-6pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-300">
              <p>&copy; {new Date().getFullYear()} Ripple Roofing & Construction. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
                <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MaterialRow({ 
  label, 
  value, 
  links 
}: { 
  label: string
  value: string
  links?: { text: string; url: string }[]
}) {
  return (
    <div className="border-b border-primary-100 pb-3 last:border-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="flex-1">
          <span className="font-semibold text-primary-900 text-sm">{label}:</span>
          <span className="text-primary-700 text-sm ml-2">{value}</span>
        </div>
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-2 py-1 bg-accent-100 text-accent-700 hover:bg-accent-200 rounded transition-colors"
              >
                📄 {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
