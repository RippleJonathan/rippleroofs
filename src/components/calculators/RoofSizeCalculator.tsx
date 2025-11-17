'use client'

import { FC, useState } from 'react'

interface RoofSection {
  id: string
  length: number
  width: number
  pitch: number
}

export const RoofSizeCalculator: FC = () => {
  const [sections, setSections] = useState<RoofSection[]>([
    { id: '1', length: 0, width: 0, pitch: 6 }
  ])
  const [unit, setUnit] = useState<'feet' | 'meters'>('feet')

  // Pitch multipliers for accurate square footage
  const pitchMultipliers: { [key: number]: number } = {
    0: 1.00,   // Flat
    1: 1.00,
    2: 1.01,
    3: 1.03,
    4: 1.05,
    5: 1.08,
    6: 1.12,   // Common residential
    7: 1.16,
    8: 1.20,
    9: 1.25,
    10: 1.30,
    11: 1.36,
    12: 1.41,  // Steep
  }

  const addSection = () => {
    setSections([...sections, { 
      id: String(sections.length + 1), 
      length: 0, 
      width: 0, 
      pitch: 6 
    }])
  }

  const removeSection = (id: string) => {
    if (sections.length > 1) {
      setSections(sections.filter(s => s.id !== id))
    }
  }

  const updateSection = (id: string, field: keyof RoofSection, value: number) => {
    setSections(sections.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ))
  }

  const calculateSquareFootage = (section: RoofSection): number => {
    const baseArea = section.length * section.width
    const multiplier = pitchMultipliers[section.pitch] || 1.12
    return baseArea * multiplier
  }

  const totalSquareFootage = sections.reduce((total, section) => 
    total + calculateSquareFootage(section), 0
  )

  const roofSquares = totalSquareFootage / 100 // 1 square = 100 sq ft

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary-100">
      <div className="mb-6">
        <h2 className="text-3xl font-display font-bold text-primary-900 mb-2">
          🏠 Roof Size Calculator
        </h2>
        <p className="text-primary-600">
          Calculate your roof's square footage for accurate estimates. Add multiple sections for complex roofs.
        </p>
      </div>

      {/* Unit Toggle */}
      <div className="mb-6 flex items-center gap-4">
        <span className="text-sm font-medium text-primary-700">Measurement Unit:</span>
        <div className="flex gap-2">
          <button
            onClick={() => setUnit('feet')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              unit === 'feet'
                ? 'bg-accent-500 text-white'
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            Feet
          </button>
          <button
            onClick={() => setUnit('meters')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              unit === 'meters'
                ? 'bg-accent-500 text-white'
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            Meters
          </button>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6 mb-6">
        {sections.map((section, index) => (
          <div key={section.id} className="bg-primary-50 rounded-xl p-6 border border-primary-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-primary-900">
                Section {index + 1}
              </h3>
              {sections.length > 1 && (
                <button
                  onClick={() => removeSection(section.id)}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Length */}
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Length ({unit})
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={section.length || ''}
                  onChange={(e) => updateSection(section.id, 'length', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  placeholder="0"
                />
              </div>

              {/* Width */}
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Width ({unit})
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={section.width || ''}
                  onChange={(e) => updateSection(section.id, 'width', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  placeholder="0"
                />
              </div>

              {/* Pitch */}
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Roof Pitch
                  <span className="ml-1 text-xs text-primary-500">(rise per 12" run)</span>
                </label>
                <select
                  value={section.pitch}
                  onChange={(e) => updateSection(section.id, 'pitch', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                >
                  <option value="0">0/12 (Flat)</option>
                  <option value="1">1/12</option>
                  <option value="2">2/12</option>
                  <option value="3">3/12</option>
                  <option value="4">4/12</option>
                  <option value="5">5/12</option>
                  <option value="6">6/12 (Common)</option>
                  <option value="7">7/12</option>
                  <option value="8">8/12</option>
                  <option value="9">9/12</option>
                  <option value="10">10/12</option>
                  <option value="11">11/12</option>
                  <option value="12">12/12 (Steep)</option>
                </select>
              </div>
            </div>

            {/* Section Result */}
            {section.length > 0 && section.width > 0 && (
              <div className="mt-4 p-3 bg-white rounded-lg border border-primary-200">
                <p className="text-sm text-primary-600">
                  Section {index + 1} Area: <span className="font-bold text-primary-900">
                    {calculateSquareFootage(section).toFixed(0)} sq ft
                  </span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Section Button */}
      <button
        onClick={addSection}
        className="w-full py-3 px-4 bg-primary-100 hover:bg-primary-200 text-primary-900 font-medium rounded-lg transition-colors mb-6 border-2 border-dashed border-primary-300"
      >
        + Add Another Section
      </button>

      {/* Results */}
      {totalSquareFootage > 0 && (
        <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Your Roof Size</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
              <p className="text-sm text-white/80 mb-1">Total Square Footage</p>
              <p className="text-3xl font-bold">{totalSquareFootage.toFixed(0)} sq ft</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
              <p className="text-sm text-white/80 mb-1">Roofing Squares</p>
              <p className="text-3xl font-bold">{roofSquares.toFixed(1)} squares</p>
              <p className="text-xs text-white/70 mt-1">1 square = 100 sq ft</p>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-4 p-4 bg-white/10 rounded-lg backdrop-blur">
            <p className="text-sm text-white/90">
              <strong>Note:</strong> This calculator includes pitch multipliers for accurate measurements. 
              For the most precise estimate, schedule a free professional inspection.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="flex-1 bg-white text-accent-600 hover:bg-primary-50 font-bold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Get Free Estimate
            </a>
            <a
              href="tel:5127635277"
              className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Call (512) 763-5277
            </a>
          </div>
        </div>
      )}

      {/* Help Section */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-bold text-blue-900 mb-2">💡 How to Measure Your Roof:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li><strong>Length & Width:</strong> Measure the building dimensions at ground level</li>
          <li><strong>Pitch:</strong> Count how many inches the roof rises per 12 inches of horizontal run</li>
          <li><strong>Multiple Sections:</strong> Add separate sections for different roof planes (front, back, garage, etc.)</li>
          <li><strong>Accuracy:</strong> Include overhangs (typically 12-24 inches on each side)</li>
        </ul>
      </div>
    </div>
  )
}
