'use client'

import { FC, useState } from 'react'

interface MaterialOption {
  name: string
  pricePerSquare: { min: number; max: number }
  lifespan: string
  warranty: string
  pros: string[]
  cons: string[]
  bestFor: string
}

const materials: MaterialOption[] = [
  {
    name: '3-Tab Asphalt Shingles',
    pricePerSquare: { min: 90, max: 150 },
    lifespan: '15-20 years',
    warranty: '20-25 years',
    pros: ['Most affordable option', 'Easy installation', 'Widely available'],
    cons: ['Shorter lifespan', 'Less wind/hail resistance', 'Basic appearance'],
    bestFor: 'Budget-conscious homeowners, rental properties'
  },
  {
    name: 'Architectural Shingles',
    pricePerSquare: { min: 120, max: 200 },
    lifespan: '25-30 years',
    warranty: '30-50 years',
    pros: ['Better appearance', 'Good durability', 'Excellent value', 'Wide color selection'],
    cons: ['More expensive than 3-tab', 'Heavier weight'],
    bestFor: 'Most residential homes - best value/quality balance'
  },
  {
    name: 'Impact-Resistant (Class 4) Shingles',
    pricePerSquare: { min: 150, max: 230 },
    lifespan: '25-30 years',
    warranty: '30-50 years',
    pros: ['Hail damage protection', 'Insurance discounts (10-35%)', 'Better wind resistance', 'Premium appearance'],
    cons: ['Higher upfront cost', 'Limited color options'],
    bestFor: 'Texas hail-prone areas, insurance savings'
  },
  {
    name: 'Designer/Premium Shingles',
    pricePerSquare: { min: 200, max: 350 },
    lifespan: '30-40 years',
    warranty: '50 years - Lifetime',
    pros: ['Luxury appearance', 'Maximum durability', 'Excellent warranties', 'High curb appeal'],
    cons: ['Highest shingle cost', 'Professional installation required'],
    bestFor: 'High-end homes, maximum aesthetics'
  },
  {
    name: 'Metal Roofing (Standing Seam)',
    pricePerSquare: { min: 400, max: 700 },
    lifespan: '40-70 years',
    warranty: '30-50 years',
    pros: ['Longest lifespan', 'Energy efficient', 'Fire resistant', 'Low maintenance', 'Modern look'],
    cons: ['Highest cost', 'Can be noisy in rain', 'Specialized installation'],
    bestFor: 'Long-term investment, modern homes, commercial'
  },
  {
    name: 'Tile Roofing (Clay/Concrete)',
    pricePerSquare: { min: 500, max: 900 },
    lifespan: '50-100 years',
    warranty: '30-50 years',
    pros: ['Extremely durable', 'Fire resistant', 'Energy efficient', 'Classic appearance'],
    cons: ['Very expensive', 'Heavy (structure must support)', 'Difficult repairs'],
    bestFor: 'Mediterranean/Spanish style homes, premium market'
  }
]

export const CostEstimator: FC = () => {
  const [squareFootage, setSquareFootage] = useState<number>(0)
  const [roofSquares, setRoofSquares] = useState<number>(0)
  const [inputMethod, setInputMethod] = useState<'sqft' | 'squares'>('sqft')
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Architectural Shingles')
  const [includeRemoval, setIncludeRemoval] = useState(true)
  const [includeDeckRepair, setIncludeDeckRepair] = useState(false)

  const handleSquareFootageChange = (value: number) => {
    setSquareFootage(value)
    setRoofSquares(value / 100)
  }

  const handleRoofSquaresChange = (value: number) => {
    setRoofSquares(value)
    setSquareFootage(value * 100)
  }

  const currentMaterial = materials.find(m => m.name === selectedMaterial) || materials[1]

  // Calculate costs
  const materialCostMin = currentMaterial.pricePerSquare.min * roofSquares
  const materialCostMax = currentMaterial.pricePerSquare.max * roofSquares

  // Labor costs (typically 60-100 per square)
  const laborCostMin = 60 * roofSquares
  const laborCostMax = 100 * roofSquares

  // Removal costs ($100-150 per square)
  const removalCostMin = includeRemoval ? 100 * roofSquares : 0
  const removalCostMax = includeRemoval ? 150 * roofSquares : 0

  // Deck repair (10-20% of roofs need it, $200-400 per square for repairs)
  const deckRepairMin = includeDeckRepair ? 200 * roofSquares * 0.15 : 0
  const deckRepairMax = includeDeckRepair ? 400 * roofSquares * 0.25 : 0

  // Additional costs (permits, disposal, misc - typically $500-1000)
  const additionalCosts = roofSquares > 0 ? 750 : 0

  // Total costs
  const totalMin = materialCostMin + laborCostMin + removalCostMin + deckRepairMin + additionalCosts
  const totalMax = materialCostMax + laborCostMax + removalCostMax + deckRepairMax + additionalCosts

  const showResults = roofSquares > 0

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary-100">
      <div className="mb-6">
        <h2 className="text-3xl font-display font-bold text-primary-900 mb-2">
          💰 Roof Replacement Cost Estimator
        </h2>
        <p className="text-primary-600">
          Get an accurate price range for your roof replacement based on size and materials.
        </p>
      </div>

      {/* Input Method Toggle */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-primary-700 mb-2">
          Input Method:
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => setInputMethod('sqft')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              inputMethod === 'sqft'
                ? 'bg-accent-500 text-white'
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            Square Feet
          </button>
          <button
            onClick={() => setInputMethod('squares')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              inputMethod === 'squares'
                ? 'bg-accent-500 text-white'
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            Roofing Squares
          </button>
        </div>
      </div>

      {/* Size Input */}
      <div className="mb-6">
        {inputMethod === 'sqft' ? (
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-2">
              Roof Size (Square Feet)
            </label>
            <input
              type="number"
              min="0"
              step="100"
              value={squareFootage || ''}
              onChange={(e) => handleSquareFootageChange(parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-3 text-lg border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              placeholder="Enter square feet (e.g., 2000)"
            />
            {squareFootage > 0 && (
              <p className="mt-2 text-sm text-primary-600">
                = {roofSquares.toFixed(1)} roofing squares
              </p>
            )}
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-2">
              Roof Size (Roofing Squares)
              <span className="ml-1 text-xs text-primary-500">(1 square = 100 sq ft)</span>
            </label>
            <input
              type="number"
              min="0"
              step="0.5"
              value={roofSquares || ''}
              onChange={(e) => handleRoofSquaresChange(parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-3 text-lg border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              placeholder="Enter squares (e.g., 20)"
            />
            {roofSquares > 0 && (
              <p className="mt-2 text-sm text-primary-600">
                = {squareFootage.toFixed(0)} square feet
              </p>
            )}
          </div>
        )}
      </div>

      {/* Material Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-primary-700 mb-2">
          Roofing Material
        </label>
        <select
          value={selectedMaterial}
          onChange={(e) => setSelectedMaterial(e.target.value)}
          className="w-full px-4 py-3 text-lg border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
        >
          {materials.map(material => (
            <option key={material.name} value={material.name}>
              {material.name} (${material.pricePerSquare.min}-${material.pricePerSquare.max}/sq)
            </option>
          ))}
        </select>
      </div>

      {/* Additional Options */}
      <div className="mb-6 space-y-3">
        <label className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg cursor-pointer hover:bg-primary-100 transition-colors">
          <input
            type="checkbox"
            checked={includeRemoval}
            onChange={(e) => setIncludeRemoval(e.target.checked)}
            className="w-5 h-5 text-accent-500 border-primary-300 rounded focus:ring-accent-500"
          />
          <div>
            <span className="font-medium text-primary-900">Include old roof removal</span>
            <p className="text-sm text-primary-600">Adds $100-150 per square (~${(roofSquares * 125).toFixed(0)})</p>
          </div>
        </label>

        <label className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg cursor-pointer hover:bg-primary-100 transition-colors">
          <input
            type="checkbox"
            checked={includeDeckRepair}
            onChange={(e) => setIncludeDeckRepair(e.target.checked)}
            className="w-5 h-5 text-accent-500 border-primary-300 rounded focus:ring-accent-500"
          />
          <div>
            <span className="font-medium text-primary-900">Include deck repair allowance</span>
            <p className="text-sm text-primary-600">10-20% of roofs need some deck repair</p>
          </div>
        </label>
      </div>

      {/* Results */}
      {showResults && (
        <>
          {/* Price Range */}
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl p-6 text-white mb-6">
            <h3 className="text-xl font-bold mb-4">Estimated Total Cost</h3>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur mb-4">
              <p className="text-sm text-white/80 mb-2">Your Roof Replacement Cost Range:</p>
              <p className="text-4xl font-bold mb-2">
                ${totalMin.toLocaleString()} - ${totalMax.toLocaleString()}
              </p>
              <p className="text-sm text-white/90">
                Average: ${((totalMin + totalMax) / 2).toLocaleString()}
              </p>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-white/10 rounded">
                <span>Materials ({currentMaterial.name})</span>
                <span className="font-semibold">${materialCostMin.toLocaleString()} - ${materialCostMax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between p-2 bg-white/10 rounded">
                <span>Labor & Installation</span>
                <span className="font-semibold">${laborCostMin.toLocaleString()} - ${laborCostMax.toLocaleString()}</span>
              </div>
              {includeRemoval && (
                <div className="flex justify-between p-2 bg-white/10 rounded">
                  <span>Old Roof Removal</span>
                  <span className="font-semibold">${removalCostMin.toLocaleString()} - ${removalCostMax.toLocaleString()}</span>
                </div>
              )}
              {includeDeckRepair && (
                <div className="flex justify-between p-2 bg-white/10 rounded">
                  <span>Deck Repair Allowance</span>
                  <span className="font-semibold">${deckRepairMin.toLocaleString()} - ${deckRepairMax.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between p-2 bg-white/10 rounded">
                <span>Permits, Disposal & Misc</span>
                <span className="font-semibold">${additionalCosts.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Material Details */}
          <div className="bg-primary-50 rounded-xl p-6 border border-primary-200 mb-6">
            <h4 className="font-bold text-primary-900 mb-4">About {currentMaterial.name}</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-primary-600 mb-1">Lifespan</p>
                <p className="font-bold text-primary-900">{currentMaterial.lifespan}</p>
              </div>
              <div>
                <p className="text-sm text-primary-600 mb-1">Warranty</p>
                <p className="font-bold text-primary-900">{currentMaterial.warranty}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">✓ Pros:</p>
                <ul className="text-sm text-primary-700 space-y-1">
                  {currentMaterial.pros.map((pro, i) => (
                    <li key={i}>• {pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-orange-700 mb-2">⚠ Cons:</p>
                <ul className="text-sm text-primary-700 space-y-1">
                  {currentMaterial.cons.map((con, i) => (
                    <li key={i}>• {con}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-primary-700 mt-4">
              <strong>Best For:</strong> {currentMaterial.bestFor}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="flex-1 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-6 rounded-lg text-center transition-colors"
            >
              Get Accurate Free Estimate
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

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-sm text-yellow-900">
          <strong>Important:</strong> This calculator provides estimated ranges based on typical Central Texas pricing. 
          Actual costs vary based on roof complexity, accessibility, local codes, and current material costs. 
          For an accurate quote, schedule a free professional inspection.
        </p>
      </div>
    </div>
  )
}
