export interface RoofingPackage {
  id: string
  name: string
  brand: string
  description: string
  pricePerSquare: number
  features: string[]
  warranty: string
  lifespan: string
  impactRating?: string
  colorOptions: string[]
  brochureUrl?: string
  imageUrl?: string
  facts: string[]
  materials: {
    shingles: string
    underlayment: string
    starter: string
    ridgeCap: string
    ventilation: string
    iceAndWater: string
    drip: string
  }
  scopeOfWork: string[]
  timeframe: string
  bestFor: string[]
}

export const ROOFING_PACKAGES: RoofingPackage[] = [
  {
    id: 'climateflex',
    name: 'ClimateFlex Premium',
    brand: 'CertainTeed Landmark',
    description: 'Class 4 impact-resistant shingles with superior weather protection. Perfect for Florida\'s harsh climate with hurricane-force wind resistance.',
    pricePerSquare: 550,
    features: [
      'Class 4 Impact Resistance - Highest rating available',
      '130 MPH Wind Resistance - Hurricane-grade protection',
      'Algae Resistance - Keeps your roof looking new',
      'Insurance Discounts - Save 10-30% on premiums',
      'Enhanced UV Protection - Longer color retention',
      'Premium Synthetic Underlayment - Superior waterproofing',
      'Limited Lifetime Warranty - CertainTeed backed'
    ],
    warranty: 'Limited Lifetime Material Warranty + 10-Year Workmanship Warranty from Ripple Roofing & Construction',
    lifespan: '30-50 years',
    impactRating: 'Class 4 (UL 2218)',
    colorOptions: [
      'Weathered Wood',
      'Driftwood',
      'Burnt Sienna',
      'Hunter Green',
      'Cobblestone Gray',
      'Colonial Slate',
      'Max Def Pewter'
    ],
    brochureUrl: 'https://certainteed.widen.net/content/4azmgr9hvd/pdf/landmark-climateflex-brochure-00-00-558-US-EN-2509.pdf?u=nwk4fd',
    imageUrl: '/images/packages/climateflex.jpg',
    facts: [
      'Class 4 impact rating can reduce insurance premiums by 10-30%',
      'Withstands 2-inch hail without damage',
      'Specially designed for extreme weather climates',
      'Meets Florida Building Code requirements',
      'CertainTeed is North America\'s largest roofing manufacturer'
    ],
    materials: {
      shingles: 'CertainTeed Landmark ClimateFlex IR Class 4',
      underlayment: 'CertainTeed DiamondDeck Synthetic',
      starter: 'CertainTeed SwiftStart',
      ridgeCap: 'CertainTeed Shadow Ridge',
      ventilation: 'CertainTeed Roof Louvers or Ridge Vent',
      iceAndWater: 'CertainTeed WinterGuard',
      drip: 'Galvanized 2" Drip Edge (Painted)'
    },
    scopeOfWork: [
      'Tear Off 1 Layer of existing roofing shingles and felt (Additional layers charged extra)',
      'Replace any rotten wood at $75 per sheet',
      'Install 1 Layer of new synthetic felt underlayment nailed to deck using approved fasteners',
      'Replace all Pipe Boots, Roof Vents and Re-flash as needed',
      'Install Ice/Water shield moisture barrier in all valleys',
      'Install Ridge Cap on Hips & Ridges',
      'Remove & Replace 2" Drip Edge Painted',
      'Tear off & haul away debris with onsite dumpster',
      'Full & Thorough Cleanup',
      'Limited Lifetime Warranty on materials from manufacturer',
      '10 year Limited Workmanship Warranty from Ripple Roofing & Construction'
    ],
    timeframe: '2-4 days',
    bestFor: [
      'Homes in hail-prone areas',
      'Properties seeking insurance discounts',
      'Long-term investment',
      'Maximum weather protection',
      'Premium curb appeal'
    ]
  },
  {
    id: 'metal',
    name: 'Standing Seam Metal',
    brand: 'McElroy Metal',
    description: 'Premium standing seam metal roofing with concealed fasteners. Superior longevity, energy efficiency, and modern aesthetic. The last roof you\'ll ever need.',
    pricePerSquare: 975,
    features: [
      'Concealed Fastener System - No exposed screws',
      '50+ Year Lifespan - Outlasts asphalt 2-3x',
      'Energy Star Rated - Reduces cooling costs up to 25%',
      'High Wind Resistance - Withstands 140+ MPH winds',
      'Fire Resistant - Class A fire rating',
      '100% Recyclable - Sustainable choice',
      'Low Maintenance - No periodic replacement needed'
    ],
    warranty: '50-Year Paint Warranty + 10-Year Workmanship Warranty from Ripple Roofing & Construction',
    lifespan: '50-70 years',
    colorOptions: [
      'Galvalume (Natural Silver)',
      'Charcoal Gray',
      'Slate Blue',
      'Forest Green',
      'Copper Penny',
      'Matte Black',
      'Clay Red'
    ],
    brochureUrl: 'https://www.mcelroymetal.com/hubfs/assets/176181%20MM101%20Product%20Catalog%2036pg%20web%20(1).pdf',
    imageUrl: '/images/packages/metal.jpg',
    facts: [
      'Metal roofs last 50-70 years compared to 15-25 for asphalt',
      'Cool roof technology reflects 70% of solar energy, lowering AC costs',
      'Increases home resale value by 1-6%',
      'Withstands extreme weather: hail, high winds, heavy snow',
      'Non-combustible with Class A fire rating',
      '100% recyclable - most contain 25-95% recycled content'
    ],
    materials: {
      shingles: 'McElroy Metal Standing Seam Panels (24-26 gauge)',
      underlayment: 'High-temperature synthetic underlayment rated for metal',
      starter: 'Custom metal starter trim and eave flashing',
      ridgeCap: 'Matching metal ridge cap with concealed fasteners',
      ventilation: 'Metal ridge vent system or powered ventilation',
      iceAndWater: 'High-temperature ice and water shield membrane',
      drip: 'Custom bent metal drip edge and fascia trim'
    },
    scopeOfWork: [
      'Tear Off 1 Layer of existing roofing materials (Additional layers charged extra)',
      'Replace any rotten wood at $75 per sheet',
      'Install high-temperature synthetic underlayment',
      'Install ice and water shield in valleys and critical areas',
      'Install custom metal trim, drip edge, and flashing',
      'Install standing seam metal panels with concealed clip system',
      'Install matching metal ridge cap and hip trim',
      'Seal all penetrations with metal boots and trim',
      'Install proper ventilation system',
      'Full & Thorough Cleanup with onsite dumpster',
      '50-Year Paint Warranty on metal panels',
      '10 year Limited Workmanship Warranty from Ripple Roofing & Construction'
    ],
    timeframe: '3-5 days',
    bestFor: [
      'Long-term investment (50+ years)',
      'Energy-conscious homeowners',
      'Modern or contemporary homes',
      'Coastal/high-wind areas',
      'Minimal maintenance preference',
      'Eco-friendly building'
    ]
  },
  {
    id: 'economy',
    name: 'Economy Value',
    brand: 'GAF Natural Shadow',
    description: 'Budget-friendly 3-tab shingles with reliable protection. Quality roofing from North America\'s largest manufacturer at an affordable price.',
    pricePerSquare: 375,
    features: [
      'Affordable Quality - Budget-friendly pricing',
      'GAF Trusted Brand - Industry leader',
      'Wind Resistant - Meets building codes',
      'Algae Resistant - StainGuard protection',
      'Clean 3-Tab Design - Classic look',
      'Limited Warranty - GAF backed'
    ],
    warranty: 'GAF Limited Warranty + 10-Year Workmanship Warranty from Ripple Roofing & Construction',
    lifespan: '20-25 years',
    colorOptions: [
      'Weathered Wood',
      'Birchwood',
      'Autumn Brown',
      'Slate Gray',
      'Shadow Gray'
    ],
    brochureUrl: 'https://www.gaf.com/en-us/document-library/documents/specifications/timberline-ns-shingles-spec-sheet-resgn467ns.pdf',
    imageUrl: '/images/packages/economy.jpg',
    facts: [
      'GAF is North America\'s largest roofing manufacturer',
      'Classic 3-tab design provides traditional curb appeal',
      'StainGuard algae protection prevents unsightly streaks',
      'Meets all building code wind requirements',
      'Excellent value for budget-conscious homeowners'
    ],
    materials: {
      shingles: 'GAF Natural Shadow 3-Tab Shingles',
      underlayment: '#30 Felt Underlayment',
      starter: 'GAF Pro-Start Starter Strip or equivalent',
      ridgeCap: 'Cut Ridge Cap from field shingles',
      ventilation: 'Standard Roof Vents or Ridge Vent',
      iceAndWater: 'Ice and Water Shield in valleys',
      drip: 'Galvanized Drip Edge'
    },
    scopeOfWork: [
      'Tear Off 1 Layer of existing roofing shingles and felt (Additional layers charged extra)',
      'Replace any rotten wood at $75 per sheet',
      'Install #30 felt underlayment',
      'Install Ice and Water Shield in valleys',
      'Install drip edge around perimeter',
      'Replace all Pipe Boots and Roof Vents as needed',
      'Install GAF Natural Shadow 3-Tab Shingles',
      'Install cut ridge cap on hips and ridges',
      'Tear off & haul away debris with onsite dumpster',
      'Full & Thorough Cleanup',
      'GAF Limited Warranty on materials',
      '10 year Limited Workmanship Warranty from Ripple Roofing & Construction'
    ],
    timeframe: '1-3 days',
    bestFor: [
      'Budget-conscious homeowners',
      'Rental or investment properties',
      'Traditional home styles',
      'Short-term ownership plans',
      'Quick, reliable replacement'
    ]
  }
]
