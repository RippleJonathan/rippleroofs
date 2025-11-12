'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { AddressSearch } from '@/components/estimate/AddressSearch'
import { GoogleEstimateMap } from '@/components/estimate/GoogleEstimateMap'
import { PackageSelector } from '@/components/estimate/PackageSelector'
import { CustomerInfoForm, CustomerInfo } from '@/components/estimate/CustomerInfoForm'
import { EstimateSummary } from '@/components/estimate/EstimateSummary'
import { Address, RoofMeasurement, PolygonPoint } from '@/types/estimate'
import { calculateRoofMeasurement } from '@/lib/estimate/calculations'
import { DEFAULT_PITCH, DEFAULT_WASTE_FACTOR, PITCH_MULTIPLIERS } from '@/types/estimate'
import { ROOFING_PACKAGES } from '@/types/packages'
import { generateEstimatePDF } from '@/lib/pdf/generateEstimatePDF'

export default function EstimatePage() {
  const [step, setStep] = useState<'address' | 'draw' | 'measure' | 'package' | 'summary'>('address')
  const [address, setAddress] = useState<Address | null>(null)
  const [squareFeet, setSquareFeet] = useState<number>(0)
  const [polygonPoints, setPolygonPoints] = useState<PolygonPoint[]>([])
  const [pitch, setPitch] = useState<string>(DEFAULT_PITCH)
  const [wasteFactor, setWasteFactor] = useState<number>(DEFAULT_WASTE_FACTOR)
  const [measurement, setMeasurement] = useState<RoofMeasurement | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined)
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddressSelect = (selectedAddress: Address) => {
    setAddress(selectedAddress)
    setStep('draw')
  }

  const handleAreaCalculated = (area: number, points: PolygonPoint[]) => {
    setSquareFeet(area)
    setPolygonPoints(points)
    
    // Auto-calculate with default settings
    const calc = calculateRoofMeasurement(area, pitch, wasteFactor)
    setMeasurement(calc)
  }

  const handlePitchChange = (newPitch: string) => {
    setPitch(newPitch)
    if (squareFeet > 0) {
      const calc = calculateRoofMeasurement(squareFeet, newPitch, wasteFactor)
      setMeasurement(calc)
    }
  }

  const handleWasteChange = (newWaste: number) => {
    setWasteFactor(newWaste)
    if (squareFeet > 0) {
      const calc = calculateRoofMeasurement(squareFeet, pitch, newWaste)
      setMeasurement(calc)
    }
  }

  const handleContinueToPackages = () => {
    setStep('package')
  }

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId)
  }

  const handleCustomerInfoSubmit = async (info: CustomerInfo) => {
    setIsSubmitting(true)
    try {
      // Store customer info
      setCustomerInfo(info)
      
      // Find the selected package
      const selectedPkg = ROOFING_PACKAGES.find(pkg => pkg.id === selectedPackage)
      
      if (!selectedPkg || !measurement || !address) {
        throw new Error('Missing required data')
      }

      // Generate PDF
      const pdfBlob = await generateEstimatePDF({
        customerInfo: info,
        address: address.formatted,
        measurement: measurement,
        package: selectedPkg,
      })

      // Send email with PDF
      const formData = new FormData()
      formData.append('pdf', pdfBlob, 'estimate.pdf')
      formData.append('customerEmail', info.email)
      formData.append('customerName', `${info.firstName} ${info.lastName}`)
      formData.append('packageName', selectedPkg.name)
      formData.append('totalPrice', `$${(measurement.totalSquares * selectedPkg.pricePerSquare).toLocaleString()}`)
      formData.append('address', address.formatted)

      const response = await fetch('/api/send-estimate', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to send email')
      }

      // Move to summary step
      setStep('summary')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your estimate. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleContinueToSummary = () => {
    setStep('summary')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-accent-900 text-white py-12">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              🎯 Get Your Instant Roof Estimate
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              No pressure. No callbacks. Just an accurate estimate in 60 seconds.
            </p>
            
            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-2 md:gap-4 text-sm md:text-base">
              <Step number={1} label="Address" active={step === 'address'} completed={!!address} />
              <StepDivider completed={!!address} />
              <Step number={2} label="Draw Roof" active={step === 'draw'} completed={squareFeet > 0} />
              <StepDivider completed={squareFeet > 0} />
              <Step number={3} label="Package" active={step === 'package'} completed={!!selectedPackage} />
              <StepDivider completed={!!selectedPackage} />
              <Step number={4} label="Your Info" active={step === 'measure'} completed={!!customerInfo} />
              <StepDivider completed={!!customerInfo} />
              <Step number={5} label="Estimate" active={step === 'summary'} completed={false} />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            
            {/* Step 1: Address Search */}
            {step === 'address' && (
              <div className="animate-fade-up">
                <AddressSearch onAddressSelect={handleAddressSelect} />
              </div>
            )}

            {/* Step 2: Draw on Map */}
            {step === 'draw' && address && (
              <div className="animate-fade-up">
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                      Draw Your Roof Outline
                    </h2>
                    <p className="text-primary-600">
                      <span className="font-semibold">{address.formatted}</span>
                    </p>
                  </div>
                  
                  <GoogleEstimateMap 
                    address={address} 
                    onAreaCalculated={handleAreaCalculated}
                  />

                  {squareFeet > 0 && measurement && (
                    <div className="mt-6 space-y-4">
                      {/* Measurement Adjustments */}
                      <div className="bg-primary-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-primary-900 mb-4">
                          Adjust Measurements
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Pitch Selector */}
                          <div>
                            <label className="block text-sm font-semibold text-primary-900 mb-2">
                              Roof Pitch
                            </label>
                            <select
                              value={pitch}
                              onChange={(e) => handlePitchChange(e.target.value)}
                              className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none text-primary-900"
                            >
                              {Object.keys(PITCH_MULTIPLIERS).map((p) => (
                                <option key={p} value={p}>
                                  {p} ({(Math.atan(parseInt(p.split('/')[0]) / parseInt(p.split('/')[1])) * 180 / Math.PI).toFixed(1)}°)
                                </option>
                              ))}
                            </select>
                            <p className="mt-1 text-xs text-primary-600">
                              Standard Texas pitch is 6/12 (26.6°)
                            </p>
                          </div>

                          {/* Waste Factor */}
                          <div>
                            <label className="block text-sm font-semibold text-primary-900 mb-2">
                              Waste Factor: {(wasteFactor * 100).toFixed(0)}%
                            </label>
                            <input
                              type="range"
                              min="0.10"
                              max="0.20"
                              step="0.01"
                              value={wasteFactor}
                              onChange={(e) => handleWasteChange(parseFloat(e.target.value))}
                              className="w-full"
                            />
                            <div className="flex justify-between text-xs text-primary-600 mt-1">
                              <span>10% (simple)</span>
                              <span>20% (complex)</span>
                            </div>
                          </div>
                        </div>

                        {/* Calculated Results */}
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-white rounded-lg p-4 text-center">
                            <p className="text-xs text-primary-600 mb-1">Base Area</p>
                            <p className="text-xl font-bold text-primary-900">
                              {measurement.squareFeet.toLocaleString()}
                            </p>
                            <p className="text-xs text-primary-600">sq ft</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 text-center">
                            <p className="text-xs text-primary-600 mb-1">w/ Pitch</p>
                            <p className="text-xl font-bold text-primary-900">
                              {measurement.adjustedSquareFeet.toLocaleString()}
                            </p>
                            <p className="text-xs text-primary-600">sq ft</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 text-center">
                            <p className="text-xs text-primary-600 mb-1">Multiplier</p>
                            <p className="text-xl font-bold text-primary-900">
                              {measurement.pitchMultiplier.toFixed(2)}x
                            </p>
                            <p className="text-xs text-primary-600">pitch</p>
                          </div>
                          <div className="bg-accent-100 rounded-lg p-4 text-center">
                            <p className="text-xs text-accent-800 mb-1 font-semibold">Total Squares</p>
                            <p className="text-2xl font-bold text-accent-900">
                              {measurement.totalSquares}
                            </p>
                            <p className="text-xs text-accent-700">w/ waste</p>
                          </div>
                        </div>
                      </div>

                      {/* Continue Button */}
                      <button
                        onClick={handleContinueToPackages}
                        className="w-full px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-bold text-lg rounded-xl hover:from-accent-700 hover:to-accent-800 transition-all shadow-lg hover:shadow-xl"
                      >
                        Continue to Package Selection →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Package Selection */}
            {step === 'package' && measurement && (
              <div className="animate-fade-up">
                <PackageSelector 
                  onPackageSelect={handlePackageSelect}
                  selectedPackage={selectedPackage}
                />
                
                {selectedPackage && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={() => setStep('measure')}
                      className="px-12 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-bold text-lg rounded-xl hover:from-accent-700 hover:to-accent-800 transition-all shadow-lg hover:shadow-xl"
                    >
                      Continue to Get Your Estimate →
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Customer Information Form */}
            {step === 'measure' && selectedPackage && (
              <div className="animate-fade-up">
                <CustomerInfoForm 
                  onSubmit={handleCustomerInfoSubmit}
                  isSubmitting={isSubmitting}
                />
              </div>
            )}

            {/* Step 5: Estimate Summary */}
            {step === 'summary' && customerInfo && selectedPackage && measurement && address && (
              <div className="animate-fade-up">
                <EstimateSummary 
                  measurement={measurement}
                  selectedPackageId={selectedPackage}
                  customerInfo={customerInfo}
                  address={address.formatted}
                />
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  )
}

// Progress Step Component
function Step({ number, label, active, completed }: { number: number; label: string; active: boolean; completed: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-base transition-all ${
          completed
            ? 'bg-accent-500 text-white'
            : active
            ? 'bg-white text-primary-900 ring-4 ring-accent-400'
            : 'bg-primary-700 text-primary-300'
        }`}
      >
        {completed ? '✓' : number}
      </div>
      <span className={`text-xs md:text-sm font-medium ${active ? 'text-white' : completed ? 'text-accent-200' : 'text-primary-300'}`}>
        {label}
      </span>
    </div>
  )
}

// Progress Step Divider
function StepDivider({ completed }: { completed: boolean }) {
  return (
    <div className={`h-0.5 w-8 md:w-16 ${completed ? 'bg-accent-400' : 'bg-primary-700'} transition-all`} />
  )
}
