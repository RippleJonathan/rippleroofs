'use client'

import { FC, useState } from 'react'

export const ROICalculator: FC = () => {
  const [currentMonthlyBill, setCurrentMonthlyBill] = useState<number>(0)
  const [roofAge, setRoofAge] = useState<number>(10)
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([])

  const upgrades = [
    {
      id: 'cool-roof',
      name: 'Cool Roof / Reflective Shingles',
      savingsPercent: 12,
      cost: 1500,
      description: 'Reflective granules reduce heat absorption',
      lifespan: 25
    },
    {
      id: 'ir-shingles',
      name: 'Impact-Resistant (Class 4) Shingles',
      savingsPercent: 5,
      cost: 2000,
      description: 'Insurance discount + energy savings',
      insuranceDiscount: 15,
      lifespan: 30
    },
    {
      id: 'ridge-vent',
      name: 'Ridge Vent + Soffit Ventilation',
      savingsPercent: 15,
      cost: 800,
      description: 'Proper attic airflow reduces cooling costs',
      lifespan: 30
    },
    {
      id: 'radiant-barrier',
      name: 'Radiant Barrier Installation',
      savingsPercent: 10,
      cost: 600,
      description: 'Reflects heat away from attic',
      lifespan: 20
    },
    {
      id: 'insulation',
      name: 'Attic Insulation Upgrade (R-38)',
      savingsPercent: 20,
      cost: 1200,
      description: 'Improved R-value reduces heat transfer',
      lifespan: 30
    }
  ]

  const toggleUpgrade = (id: string) => {
    setSelectedUpgrades(prev =>
      prev.includes(id)
        ? prev.filter(u => u !== id)
        : [...prev, id]
    )
  }

  const selectedUpgradeObjects = upgrades.filter(u => selectedUpgrades.includes(u.id))

  // Calculate savings
  const annualBill = currentMonthlyBill * 12
  const totalSavingsPercent = selectedUpgradeObjects.reduce((sum, u) => sum + u.savingsPercent, 0)
  const cappedSavingsPercent = Math.min(totalSavingsPercent, 40) // Cap at 40% max savings
  
  const annualEnergySavings = annualBill * (cappedSavingsPercent / 100)
  const monthlyEnergySavings = annualEnergySavings / 12

  // Insurance savings (if IR shingles selected)
  const irShingle = selectedUpgradeObjects.find(u => u.id === 'ir-shingles')
  const annualInsuranceSavings = irShingle
    ? 1500 * (irShingle.insuranceDiscount! / 100) // Avg TX homeowners insurance = $1500/yr
    : 0

  const totalAnnualSavings = annualEnergySavings + annualInsuranceSavings

  // Total investment
  const totalInvestment = selectedUpgradeObjects.reduce((sum, u) => sum + u.cost, 0)

  // ROI calculation
  const paybackYears = totalAnnualSavings > 0 ? totalInvestment / totalAnnualSavings : 0
  const roi10Year = totalAnnualSavings > 0 ? ((totalAnnualSavings * 10 - totalInvestment) / totalInvestment) * 100 : 0

  const showResults = selectedUpgrades.length > 0 && currentMonthlyBill > 0

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary-100">
      <div className="mb-6">
        <h2 className="text-3xl font-display font-bold text-primary-900 mb-2">
          📊 Energy Savings & ROI Calculator
        </h2>
        <p className="text-primary-600">
          Calculate your return on investment for energy-efficient roofing upgrades.
        </p>
      </div>

      {/* Current Bill Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-primary-700 mb-2">
          Current Monthly Electric Bill (Summer Average)
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-600 font-bold text-lg">
            $
          </span>
          <input
            type="number"
            min="0"
            step="10"
            value={currentMonthlyBill || ''}
            onChange={(e) => setCurrentMonthlyBill(parseFloat(e.target.value) || 0)}
            className="w-full pl-8 pr-4 py-3 text-lg border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            placeholder="200"
          />
        </div>
        {currentMonthlyBill > 0 && (
          <p className="mt-2 text-sm text-primary-600">
            Annual cost: ${(currentMonthlyBill * 12).toLocaleString()}/year
          </p>
        )}
      </div>

      {/* Roof Age Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-primary-700 mb-2">
          Current Roof Age (Years)
        </label>
        <input
          type="range"
          min="0"
          max="30"
          value={roofAge}
          onChange={(e) => setRoofAge(parseInt(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-primary-600 mt-1">
          <span>New</span>
          <span className="font-bold text-primary-900">{roofAge} years</span>
          <span>30+ years</span>
        </div>
      </div>

      {/* Upgrade Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-primary-700 mb-3">
          Select Energy-Efficient Upgrades:
        </label>
        <div className="space-y-3">
          {upgrades.map(upgrade => (
            <label
              key={upgrade.id}
              className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-all ${
                selectedUpgrades.includes(upgrade.id)
                  ? 'bg-accent-50 border-2 border-accent-500'
                  : 'bg-primary-50 border-2 border-transparent hover:border-primary-200'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedUpgrades.includes(upgrade.id)}
                onChange={() => toggleUpgrade(upgrade.id)}
                className="w-5 h-5 mt-1 text-accent-500 border-primary-300 rounded focus:ring-accent-500"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <span className="font-bold text-primary-900">{upgrade.name}</span>
                  <span className="text-sm font-semibold text-accent-600 ml-2">
                    ~${upgrade.cost.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-primary-600 mb-1">{upgrade.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                    {upgrade.savingsPercent}% energy savings
                  </span>
                  {upgrade.insuranceDiscount && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                      {upgrade.insuranceDiscount}% insurance discount
                    </span>
                  )}
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                    {upgrade.lifespan} year lifespan
                  </span>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Results */}
      {showResults && (
        <>
          {/* Savings Summary */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white mb-6">
            <h3 className="text-xl font-bold mb-4">Your Savings & ROI</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="text-sm text-white/80 mb-1">Monthly Savings</p>
                <p className="text-2xl font-bold">${monthlyEnergySavings.toFixed(0)}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="text-sm text-white/80 mb-1">Annual Savings</p>
                <p className="text-2xl font-bold">${totalAnnualSavings.toFixed(0)}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="text-sm text-white/80 mb-1">Payback Period</p>
                <p className="text-2xl font-bold">{paybackYears.toFixed(1)} years</p>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Energy bill savings:</span>
                <span className="font-semibold">${annualEnergySavings.toFixed(0)}/year</span>
              </div>
              {annualInsuranceSavings > 0 && (
                <div className="flex justify-between">
                  <span>Insurance discount:</span>
                  <span className="font-semibold">${annualInsuranceSavings.toFixed(0)}/year</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-white/20">
                <span>Total annual savings:</span>
                <span className="font-bold text-lg">${totalAnnualSavings.toFixed(0)}</span>
              </div>
            </div>
          </div>

          {/* Investment Details */}
          <div className="bg-primary-50 rounded-xl p-6 border border-primary-200 mb-6">
            <h4 className="font-bold text-primary-900 mb-4">Investment Analysis</h4>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-primary-700">Total Investment:</span>
                <span className="font-bold text-primary-900">${totalInvestment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-700">Payback Period:</span>
                <span className="font-bold text-primary-900">{paybackYears.toFixed(1)} years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-700">10-Year ROI:</span>
                <span className={`font-bold ${roi10Year > 0 ? 'text-green-600' : 'text-orange-600'}`}>
                  {roi10Year.toFixed(0)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-700">10-Year Net Savings:</span>
                <span className="font-bold text-green-600">
                  ${((totalAnnualSavings * 10) - totalInvestment).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Selected Upgrades */}
            <div className="pt-4 border-t border-primary-200">
              <p className="text-sm font-semibold text-primary-700 mb-2">Selected Upgrades:</p>
              <ul className="text-sm text-primary-600 space-y-1">
                {selectedUpgradeObjects.map(u => (
                  <li key={u.id}>• {u.name} - ${u.cost.toLocaleString()}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommendation */}
          {paybackYears < 5 && (
            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200 mb-6">
              <p className="text-green-900 font-medium">
                ✅ <strong>Excellent Investment!</strong> Your selected upgrades will pay for themselves in under 5 years 
                and continue saving you money for decades.
              </p>
            </div>
          )}

          {paybackYears >= 5 && paybackYears < 10 && (
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200 mb-6">
              <p className="text-blue-900 font-medium">
                💡 <strong>Good Investment:</strong> Your upgrades will pay for themselves within {paybackYears.toFixed(1)} years 
                and provide long-term savings.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="flex-1 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-6 rounded-lg text-center transition-colors"
            >
              Schedule Energy Assessment
            </a>
            <a
              href="tel:5127635277"
              className="flex-1 bg-primary-100 hover:bg-primary-200 text-primary-900 font-bold py-4 px-6 rounded-lg text-center transition-colors"
            >
              Call (512) 763-5277
            </a>
          </div>
        </>
      )}

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-bold text-blue-900 mb-2">💡 Did You Know?</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Central Texas summers can heat attics to 150-160°F without proper ventilation</li>
          <li>• Cool roofs can reduce roof surface temps by 50-60°F</li>
          <li>• Impact-resistant shingles typically save 10-35% on insurance premiums</li>
          <li>• Proper attic insulation (R-38+) can cut cooling costs by 20-30%</li>
          <li>• Many upgrades qualify for federal energy efficiency tax credits</li>
        </ul>
      </div>
    </div>
  )
}
