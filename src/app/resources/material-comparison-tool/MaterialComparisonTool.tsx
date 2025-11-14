'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Filter, Mail, Download, Check, X } from 'lucide-react';

// Material data structure
interface RoofingMaterial {
  id: string;
  name: string;
  category: 'shingles' | 'metal' | 'tile';
  costPerSqFt: { min: number; max: number };
  lifespan: { min: number; max: number };
  budgetLevel: 'budget' | 'mid-range' | 'premium' | 'luxury';
  texasClimateRating: 1 | 2 | 3 | 4 | 5;
  hailResistance: 'standard' | 'class-3' | 'class-4' | 'excellent';
  windRating: string;
  heatReflection: 'poor' | 'fair' | 'good' | 'excellent';
  aesthetics: 'basic' | 'good' | 'premium' | 'luxury';
  warranty: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  popularBrands: string[];
  colorOptions: string;
}

const materials: RoofingMaterial[] = [
  {
    id: '3-tab',
    name: '3-Tab Shingles',
    category: 'shingles',
    costPerSqFt: { min: 3.50, max: 5.50 },
    lifespan: { min: 15, max: 20 },
    budgetLevel: 'budget',
    texasClimateRating: 2,
    hailResistance: 'standard',
    windRating: '60-70 mph',
    heatReflection: 'poor',
    aesthetics: 'basic',
    warranty: '20-25 years',
    pros: [
      'Most affordable roofing option',
      'Easy to install, widely available',
      'Adequate for standard Texas homes',
      'Quick replacement timeline'
    ],
    cons: [
      'Shorter lifespan (15-20 years)',
      'Less hail/wind resistance',
      'Basic appearance, flat profile',
      'Higher insurance premiums',
      'More vulnerable to Texas heat'
    ],
    bestFor: [
      'Budget-conscious homeowners',
      'Rental/investment properties',
      'Temporary/short-term solutions',
      'Homes not in high-hail areas'
    ],
    popularBrands: ['GAF Royal Sovereign', 'Owens Corning Supreme', 'CertainTeed XT 25'],
    colorOptions: '10-15 standard colors'
  },
  {
    id: 'architectural',
    name: 'Architectural Shingles',
    category: 'shingles',
    costPerSqFt: { min: 4.50, max: 7.00 },
    lifespan: { min: 25, max: 30 },
    budgetLevel: 'mid-range',
    texasClimateRating: 4,
    hailResistance: 'standard',
    windRating: '110-130 mph',
    heatReflection: 'fair',
    aesthetics: 'good',
    warranty: '30-50 years (limited)',
    pros: [
      'Best value for most homeowners',
      'Dimensional appearance (wood shake look)',
      'Good wind resistance (110-130 mph)',
      '30+ year lifespan in Texas',
      'Wide color/style selection',
      'Strong manufacturer warranties'
    ],
    cons: [
      'Standard hail resistance (not Class 4)',
      'Can still lose granules in extreme heat',
      'Insurance discount limited without impact rating',
      'Mid-range curb appeal'
    ],
    bestFor: [
      'Standard residential replacements',
      'Homeowners wanting good value',
      'Moderate climate areas',
      'Traditional home styles'
    ],
    popularBrands: ['GAF Timberline HD', 'Owens Corning Duration', 'CertainTeed Landmark'],
    colorOptions: '30+ colors available'
  },
  {
    id: 'impact-resistant',
    name: 'Impact-Resistant (Class 4)',
    category: 'shingles',
    costPerSqFt: { min: 5.50, max: 8.50 },
    lifespan: { min: 30, max: 50 },
    budgetLevel: 'mid-range',
    texasClimateRating: 5,
    hailResistance: 'class-4',
    windRating: '130+ mph',
    heatReflection: 'good',
    aesthetics: 'premium',
    warranty: '50 years (limited lifetime)',
    pros: [
      'Highest hail resistance available (Class 4)',
      '20-35% insurance premium discounts',
      'Enhanced wind resistance (130+ mph)',
      'Premium appearance and durability',
      '50-year warranties common',
      'BEST CHOICE for Texas hail zones'
    ],
    cons: [
      'Higher upfront cost ($1,500-$3,000 more)',
      'Slightly heavier (structural check recommended)',
      'Limited contractor availability'
    ],
    bestFor: [
      'Central Texas hail-prone areas',
      'Homeowners wanting insurance savings',
      'Long-term homeowners (ROI in 5-7 years)',
      'Premium home values'
    ],
    popularBrands: ['GAF Timberline HDZ', 'Owens Corning Duration Flex', 'CertainTeed Landmark Solaris'],
    colorOptions: '25-35 colors'
  },
  {
    id: 'designer',
    name: 'Designer/Luxury Shingles',
    category: 'shingles',
    costPerSqFt: { min: 8.00, max: 12.00 },
    lifespan: { min: 40, max: 50 },
    budgetLevel: 'luxury',
    texasClimateRating: 5,
    hailResistance: 'class-4',
    windRating: '130+ mph',
    heatReflection: 'excellent',
    aesthetics: 'luxury',
    warranty: '50 years (lifetime)',
    pros: [
      'Premium curb appeal (slate/shake look)',
      'Class 4 impact resistance standard',
      'Exceptional wind ratings',
      'Lifetime warranties available',
      'Highest-quality materials',
      'Significant home value increase'
    ],
    cons: [
      'Expensive ($20k-$40k+ for average home)',
      'Requires experienced installers',
      'Overkill for rental/investment properties',
      'Longer lead times for materials'
    ],
    bestFor: [
      'Luxury homes ($500k+)',
      'Historical renovation projects',
      'HOA strict appearance requirements',
      'Homeowners prioritizing aesthetics'
    ],
    popularBrands: ['GAF Grand Sequoia', 'CertainTeed Grand Manor', 'Owens Corning Berkshire'],
    colorOptions: '40+ premium colors'
  },
  {
    id: 'standing-seam-metal',
    name: 'Standing Seam Metal',
    category: 'metal',
    costPerSqFt: { min: 10.00, max: 16.00 },
    lifespan: { min: 40, max: 70 },
    budgetLevel: 'premium',
    texasClimateRating: 5,
    hailResistance: 'excellent',
    windRating: '140+ mph',
    heatReflection: 'excellent',
    aesthetics: 'premium',
    warranty: '30-50 years (paint/materials)',
    pros: [
      'Longest lifespan (50-70+ years)',
      'Excellent hail/wind resistance',
      'Superior heat reflection (30% cooling savings)',
      'Modern, clean appearance',
      'Low maintenance requirements',
      'Environmentally friendly (100% recyclable)'
    ],
    cons: [
      'High upfront cost ($25k-$50k+)',
      'Can dent from extreme hail',
      'Expansion/contraction noise in heat',
      'Specialized installer required',
      'Not traditional aesthetic'
    ],
    bestFor: [
      'Long-term investment (20+ year ownership)',
      'Modern/contemporary homes',
      'Environmentally conscious buyers',
      'Areas with extreme weather',
      'Commercial buildings'
    ],
    popularBrands: ['Metal Sales', 'McElroy Metal', 'ATAS International', 'Englert'],
    colorOptions: '30+ colors (Kynar finish)'
  },
  {
    id: 'corrugated-metal',
    name: 'Corrugated Metal (Ag Panel)',
    category: 'metal',
    costPerSqFt: { min: 5.00, max: 9.00 },
    lifespan: { min: 30, max: 50 },
    budgetLevel: 'mid-range',
    texasClimateRating: 4,
    hailResistance: 'class-3',
    windRating: '120+ mph',
    heatReflection: 'excellent',
    aesthetics: 'basic',
    warranty: '20-40 years',
    pros: [
      'Affordable metal option',
      'Good heat reflection',
      'Popular Hill Country/ranch style',
      'Faster installation than standing seam',
      'Decent hail/wind resistance',
      'Maintenance-free'
    ],
    cons: [
      'Industrial/agricultural appearance',
      'Can dent more easily than standing seam',
      'Exposed fasteners (potential leak points)',
      'Not suitable for all home styles',
      'Lower resale impact'
    ],
    bestFor: [
      'Barn/shop/outbuildings',
      'Rustic Hill Country homes',
      'Budget-conscious metal roof seekers',
      'Rural properties'
    ],
    popularBrands: ['Mueller', 'Central Texas Iron Works', 'ABC Supply'],
    colorOptions: '15-20 standard colors'
  },
  {
    id: 'concrete-tile',
    name: 'Concrete Tile',
    category: 'tile',
    costPerSqFt: { min: 10.00, max: 18.00 },
    lifespan: { min: 40, max: 50 },
    budgetLevel: 'premium',
    texasClimateRating: 5,
    hailResistance: 'excellent',
    windRating: '125+ mph',
    heatReflection: 'good',
    aesthetics: 'premium',
    warranty: '50 years',
    pros: [
      'Exceptional durability (50+ years)',
      'Superior hail resistance',
      'Spanish/Mediterranean aesthetic',
      'Energy efficient (thermal mass)',
      'Fire-resistant (Class A)',
      'Low maintenance'
    ],
    cons: [
      'Very heavy (structural reinforcement needed)',
      'Expensive ($25k-$45k average home)',
      'Walking on roof can break tiles',
      'Specialized installation required',
      'Limited contractor availability',
      'Longer installation time'
    ],
    bestFor: [
      'Spanish/Mediterranean style homes',
      'San Antonio/Austin luxury markets',
      'HOA requiring tile appearance',
      'Homeowners wanting 50+ year solution'
    ],
    popularBrands: ['Boral', 'Eagle', 'Westlake Royal'],
    colorOptions: '30+ colors (terracotta to gray)'
  },
  {
    id: 'clay-tile',
    name: 'Clay Tile',
    category: 'tile',
    costPerSqFt: { min: 15.00, max: 25.00 },
    lifespan: { min: 50, max: 100 },
    budgetLevel: 'luxury',
    texasClimateRating: 5,
    hailResistance: 'excellent',
    windRating: '125+ mph',
    heatReflection: 'excellent',
    aesthetics: 'luxury',
    warranty: '50-75 years',
    pros: [
      'Longest lifespan (75-100+ years)',
      'Authentic Spanish/Mediterranean look',
      'Exceptional energy efficiency',
      'Superior weather resistance',
      'Historic home authenticity',
      'Increases home value significantly'
    ],
    cons: [
      'Most expensive option ($40k-$90k+)',
      'Extremely heavy (structural engineering needed)',
      'Fragile when walked on',
      'Very limited contractor expertise',
      'Long installation timeline',
      'Expensive repairs if broken'
    ],
    bestFor: [
      'Historic Spanish Colonial homes',
      'Luxury estates ($1M+)',
      'San Antonio historic districts',
      'Generational homes (100+ year ownership)',
      'Premium Mediterranean architecture'
    ],
    popularBrands: ['Ludowici', 'MCA Clay Roof Tile', 'US Tile'],
    colorOptions: 'Natural terracotta to custom glazes'
  }
];

export default function MaterialComparisonTool() {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    budget: 'all' as 'all' | 'budget' | 'mid-range' | 'premium' | 'luxury',
    climate: false,
    hailResistance: false,
    lifespan: 'all' as 'all' | '20+' | '30+' | '50+'
  });
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Filter materials based on selections
  const filteredMaterials = materials.filter(material => {
    if (filters.budget !== 'all' && material.budgetLevel !== filters.budget) return false;
    if (filters.climate && material.texasClimateRating < 4) return false;
    if (filters.hailResistance && !['class-4', 'excellent'].includes(material.hailResistance)) return false;
    if (filters.lifespan === '20+' && material.lifespan.min < 20) return false;
    if (filters.lifespan === '30+' && material.lifespan.min < 30) return false;
    if (filters.lifespan === '50+' && material.lifespan.min < 50) return false;
    return true;
  });

  const toggleMaterial = (id: string) => {
    if (selectedMaterials.includes(id)) {
      setSelectedMaterials(selectedMaterials.filter(m => m !== id));
    } else {
      setSelectedMaterials([...selectedMaterials, id]);
    }
  };

  const selectedMaterialsData = materials.filter(m => selectedMaterials.includes(m.id));

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Container className="py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            Roofing Material Comparison Tool
          </h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Compare roofing materials side-by-side. Filter by budget, climate needs, and durability to find your perfect match for Central Texas.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-accent-600" />
            <h2 className="text-xl font-bold text-primary-900">Filter Options</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {/* Budget Filter */}
            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">Budget Level</label>
              <select 
                className="w-full border border-primary-300 rounded-lg px-3 py-2 text-primary-900"
                value={filters.budget}
                onChange={(e) => setFilters({...filters, budget: e.target.value as any})}
              >
                <option value="all">All Budgets</option>
                <option value="budget">Budget ($3-6/sq ft)</option>
                <option value="mid-range">Mid-Range ($5-9/sq ft)</option>
                <option value="premium">Premium ($10-18/sq ft)</option>
                <option value="luxury">Luxury ($15-25/sq ft)</option>
              </select>
            </div>

            {/* Lifespan Filter */}
            <div>
              <label className="block text-sm font-semibold text-primary-900 mb-2">Minimum Lifespan</label>
              <select 
                className="w-full border border-primary-300 rounded-lg px-3 py-2 text-primary-900"
                value={filters.lifespan}
                onChange={(e) => setFilters({...filters, lifespan: e.target.value as any})}
              >
                <option value="all">Any Lifespan</option>
                <option value="20+">20+ Years</option>
                <option value="30+">30+ Years</option>
                <option value="50+">50+ Years</option>
              </select>
            </div>

            {/* Texas Climate Filter */}
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.climate}
                  onChange={(e) => setFilters({...filters, climate: e.target.checked})}
                  className="w-4 h-4 text-accent-600 rounded"
                />
                <div>
                  <span className="block text-sm font-semibold text-primary-900">Texas Climate Rated</span>
                  <span className="block text-xs text-primary-600">Heat, hail, wind resistant</span>
                </div>
              </label>
            </div>

            {/* Hail Resistance Filter */}
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.hailResistance}
                  onChange={(e) => setFilters({...filters, hailResistance: e.target.checked})}
                  className="w-4 h-4 text-accent-600 rounded"
                />
                <div>
                  <span className="block text-sm font-semibold text-primary-900">Class 4 Impact Rated</span>
                  <span className="block text-xs text-primary-600">Maximum hail protection</span>
                </div>
              </label>
            </div>
          </div>

          <div className="mt-4 text-sm text-primary-600">
            Showing <strong className="text-accent-600">{filteredMaterials.length}</strong> of {materials.length} materials
          </div>
        </div>

        {/* Material Selection Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">Select Materials to Compare</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredMaterials.map(material => (
              <div
                key={material.id}
                onClick={() => toggleMaterial(material.id)}
                className={`
                  border-2 rounded-xl p-4 cursor-pointer transition-all
                  ${selectedMaterials.includes(material.id) 
                    ? 'border-accent-600 bg-accent-50 shadow-lg' 
                    : 'border-primary-200 bg-white hover:border-accent-400 hover:shadow-md'}
                `}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-primary-900">{material.name}</h3>
                  {selectedMaterials.includes(material.id) && (
                    <Check className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  )}
                </div>
                <div className="text-sm space-y-1">
                  <p className="text-accent-600 font-semibold">
                    ${material.costPerSqFt.min.toFixed(2)} - ${material.costPerSqFt.max.toFixed(2)}/sq ft
                  </p>
                  <p className="text-primary-700">
                    {material.lifespan.min}-{material.lifespan.max} years
                  </p>
                  <p className="text-xs text-primary-600">
                    {material.hailResistance === 'class-4' || material.hailResistance === 'excellent' ? '✓ Class 4' : 'Standard'} • {material.windRating}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedMaterialsData.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary-900">
                Comparing {selectedMaterialsData.length} Material{selectedMaterialsData.length !== 1 ? 's' : ''}
              </h2>
              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  onClick={() => setShowEmailModal(true)}
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Results
                </Button>
                <Button
                  variant="secondary"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-primary-300">
                    <th className="text-left py-3 px-2 font-semibold text-primary-900">Feature</th>
                    {selectedMaterialsData.map(material => (
                      <th key={material.id} className="text-left py-3 px-2 font-semibold text-primary-900">
                        {material.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary-200">
                    <td className="py-3 px-2 font-medium text-primary-700">Cost per Sq Ft</td>
                    {selectedMaterialsData.map(material => (
                      <td key={material.id} className="py-3 px-2 text-accent-600 font-semibold">
                        ${material.costPerSqFt.min} - ${material.costPerSqFt.max}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-primary-200">
                    <td className="py-3 px-2 font-medium text-primary-700">Lifespan</td>
                    {selectedMaterialsData.map(material => (
                      <td key={material.id} className="py-3 px-2">
                        {material.lifespan.min}-{material.lifespan.max} years
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-primary-200">
                    <td className="py-3 px-2 font-medium text-primary-700">Texas Climate Rating</td>
                    {selectedMaterialsData.map(material => (
                      <td key={material.id} className="py-3 px-2">
                        {'⭐'.repeat(material.texasClimateRating)}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-primary-200">
                    <td className="py-3 px-2 font-medium text-primary-700">Hail Resistance</td>
                    {selectedMaterialsData.map(material => (
                      <td key={material.id} className="py-3 px-2">
                        {material.hailResistance === 'class-4' || material.hailResistance === 'excellent' ? (
                          <span className="text-green-600 font-semibold">✓ Class 4</span>
                        ) : material.hailResistance === 'class-3' ? (
                          <span className="text-blue-600">Class 3</span>
                        ) : (
                          <span className="text-primary-600">Standard</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-primary-200">
                    <td className="py-3 px-2 font-medium text-primary-700">Wind Rating</td>
                    {selectedMaterialsData.map(material => (
                      <td key={material.id} className="py-3 px-2">
                        {material.windRating}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-primary-200">
                    <td className="py-3 px-2 font-medium text-primary-700">Heat Reflection</td>
                    {selectedMaterialsData.map(material => (
                      <td key={material.id} className="py-3 px-2 capitalize">
                        {material.heatReflection}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-primary-200">
                    <td className="py-3 px-2 font-medium text-primary-700">Warranty</td>
                    {selectedMaterialsData.map(material => (
                      <td key={material.id} className="py-3 px-2">
                        {material.warranty}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-primary-200">
                    <td className="py-3 px-2 font-medium text-primary-700">Popular Brands</td>
                    {selectedMaterialsData.map(material => (
                      <td key={material.id} className="py-3 px-2 text-xs">
                        {material.popularBrands.slice(0, 2).join(', ')}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Detailed Comparison */}
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedMaterialsData.map(material => (
                <div key={material.id} className="border border-primary-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg text-primary-900 mb-3">{material.name}</h3>
                  
                  <div className="mb-3">
                    <h4 className="font-semibold text-green-700 text-sm mb-1">✓ Pros:</h4>
                    <ul className="text-xs text-primary-700 space-y-1">
                      {material.pros.slice(0, 4).map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3">
                    <h4 className="font-semibold text-red-700 text-sm mb-1">✗ Cons:</h4>
                    <ul className="text-xs text-primary-700 space-y-1">
                      {material.cons.slice(0, 3).map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-700 text-sm mb-1">Best For:</h4>
                    <ul className="text-xs text-primary-700 space-y-1">
                      {material.bestFor.slice(0, 3).map((use, i) => (
                        <li key={i}>• {use}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Choose Your Perfect Roof?</h2>
          <p className="text-lg mb-6 text-accent-50">
            Get a free inspection and detailed quote for your specific home. We'll help you select the best material for your needs and budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/estimate">
              Get Free Estimate
            </Button>
            <Button variant="outline" size="lg" href="tel:5127635277" className="bg-white/10 border-white text-white hover:bg-white/20">
              Call (512) 763-5277
            </Button>
          </div>
        </div>

        {/* Email Modal */}
        {showEmailModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-primary-900">Email Your Comparison</h3>
                <button onClick={() => setShowEmailModal(false)}>
                  <X className="w-6 h-6 text-primary-600" />
                </button>
              </div>
              <p className="text-primary-700 mb-4">
                Enter your email to receive a detailed comparison of the materials you selected.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-primary-300 rounded-lg px-4 py-2"
                  required
                />
                <Button type="submit" className="w-full">
                  Send Comparison
                </Button>
              </form>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
