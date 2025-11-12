import { RoofingPackage } from '@/types/estimate'

export const ROOFING_PACKAGES: RoofingPackage[] = [
  {
    id: 'climateflex',
    name: 'CertainTeed Landmark ClimateFlex',
    description: 'Premium impact-resistant shingles with insurance discounts',
    pricePerSquare: 280,
    features: [
      'Class 4 Impact-Resistant Shingles',
      'Up to 15% Insurance Discount (avg $600/year savings)',
      'Synthetic Underlayment',
      'Ridge Vent Installation',
      'Ventilation Inspection & Upgrade',
      'Ice & Water Shield (valleys, eaves, penetrations)',
      'Nail Gun with Proper Nail Depth',
      'Full Property Cleanup',
      'Haul Away & Disposal Included',
    ],
    warranty: {
      manufacturer: 'Lifetime Limited Warranty',
      workmanship: '10-Year Workmanship Guarantee',
    },
    color: 'primary',
    recommended: true,
  },
  {
    id: 'metal',
    name: 'Standing Seam Metal Roofing',
    description: 'Premium metal roofing with 40+ year lifespan',
    pricePerSquare: 450,
    features: [
      '24-Gauge Galvanized Steel',
      'Concealed Fastener System',
      'Kynar 500 Finish (40-Year)',
      'Energy-Efficient (reflects heat)',
      'Fire Resistant (Class A)',
      'Wind Resistant (up to 140 mph)',
      'Ventilation Inspection & Upgrade',
      'Ice & Water Shield',
      'Full Property Cleanup',
      'Haul Away & Disposal Included',
    ],
    warranty: {
      manufacturer: '40-Year Finish Warranty',
      workmanship: '10-Year Workmanship Guarantee',
    },
    color: 'accent',
  },
  {
    id: 'economic',
    name: 'Economic Package',
    description: 'Budget-friendly architectural shingles',
    pricePerSquare: 200,
    features: [
      'Architectural Shingles',
      'Standard Felt Underlayment',
      'Ridge Vent Installation',
      'Basic Ventilation Check',
      'Ice & Water Shield (valleys only)',
      'Nail Gun with Proper Nail Depth',
      'Full Property Cleanup',
      'Haul Away & Disposal Included',
    ],
    warranty: {
      manufacturer: '25-Year Limited Warranty',
      workmanship: '5-Year Workmanship Guarantee',
    },
    color: 'secondary',
  },
]

// Additional line items that may be added
export const ADDITIONAL_COSTS = {
  disposal: {
    description: 'Debris Removal & Disposal',
    cost: 850,
  },
  permits: {
    description: 'Building Permits & Inspections',
    cost: 250,
  },
  deckingRepair: {
    description: 'Decking Repair',
    costPerSheet: 85,
    unit: 'per 4x8 sheet',
  },
  ventilationUpgrade: {
    description: 'Ventilation System Upgrade',
    costRange: [600, 1200],
  },
}

// Calculate total estimate price
export function calculateEstimateTotal(
  totalSquares: number,
  packageId: string,
  includeDisposal: boolean = true,
  includePermits: boolean = true
): {
  materialLabor: number
  disposal: number
  permits: number
  subtotal: number
  total: number
} {
  const selectedPackage = ROOFING_PACKAGES.find(pkg => pkg.id === packageId)
  if (!selectedPackage) {
    throw new Error('Invalid package selected')
  }

  const materialLabor = Math.round(totalSquares * selectedPackage.pricePerSquare)
  const disposal = includeDisposal ? ADDITIONAL_COSTS.disposal.cost : 0
  const permits = includePermits ? ADDITIONAL_COSTS.permits.cost : 0
  const subtotal = materialLabor + disposal + permits
  const total = subtotal

  return {
    materialLabor,
    disposal,
    permits,
    subtotal,
    total,
  }
}
