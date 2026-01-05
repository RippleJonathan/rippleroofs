/**
 * Arizona Location Data
 * City-specific information for all Arizona service areas
 * Created: January 5, 2026
 */

export interface ArizonaLocation {
  slug: string;
  name: string;
  state: 'AZ';
  county: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  population: number;
  medianHomePrice: number;
  roofingConsiderations: {
    primaryMaterial: string;
    averageCostPerSqFt: string;
    commonIssues: string[];
    hoaPrevalence: 'Very High' | 'High' | 'Moderate' | 'Low';
  };
  neighborhoods?: string[];
  description: string;
}

/**
 * Arizona Service Areas - Phoenix Metro (10 Cities)
 * Served from Glendale office: 6751 N. Sunset Blvd. #320, Glendale, AZ 85305
 * Service radius: ~80 miles from Glendale
 */
export const ARIZONA_LOCATIONS: ArizonaLocation[] = [
  // TIER 1 - Expanded Content Cities
  {
    slug: 'scottsdale',
    name: 'Scottsdale',
    state: 'AZ',
    county: 'Maricopa County',
    coordinates: {
      latitude: 33.4942,
      longitude: -111.9261,
    },
    population: 241361,
    medianHomePrice: 850000,
    roofingConsiderations: {
      primaryMaterial: 'Tile (Concrete & Clay)',
      averageCostPerSqFt: '$15-20',
      commonIssues: [
        'Tile underlayment failure (15-20 year cycle)',
        'Strict HOA requirements and approval processes',
        'Thermal shock damage from extreme heat',
        'Monsoon wind damage to tiles',
        'Premium tile replacement costs',
      ],
      hoaPrevalence: 'Very High',
    },
    neighborhoods: [
      'Silverleaf',
      'DC Ranch',
      'Troon',
      'Troon North',
      'Desert Mountain',
      'Grayhawk',
      'McDowell Mountain Ranch',
      'Gainey Ranch',
      'McCormick Ranch',
      'North Scottsdale',
    ],
    description: 'Premium luxury market with strict HOA architectural requirements. Tile roofing dominates 80%+ of homes. High-end custom estates require specialized expertise and materials.',
  },
  {
    slug: 'phoenix',
    name: 'Phoenix',
    state: 'AZ',
    county: 'Maricopa County',
    coordinates: {
      latitude: 33.4484,
      longitude: -112.0740,
    },
    population: 1680992,
    medianHomePrice: 425000,
    roofingConsiderations: {
      primaryMaterial: 'Tile & Foam (Mixed)',
      averageCostPerSqFt: '$12-18',
      commonIssues: [
        'Extreme heat exposure (120°F+ summer days)',
        'Monsoon microbursts and dust storms',
        'Diverse housing stock requiring varied solutions',
        'Foam roof maintenance and recoating needs',
        'Energy efficiency concerns (cooling costs)',
      ],
      hoaPrevalence: 'High',
    },
    neighborhoods: [
      'Arcadia',
      'Paradise Valley Village',
      'Ahwatukee Foothills',
      'North Phoenix',
      'Central Phoenix',
      'Desert Ridge',
      'Moon Valley',
      'Willo Historic District',
      'Roosevelt Historic District',
      'Encanto',
    ],
    description: 'Largest market with diverse neighborhoods. Mix of tile (60%), foam (20%), and shingle (15%) roofs. Historic districts, luxury areas, and standard residential all represented.',
  },
  {
    slug: 'tempe',
    name: 'Tempe',
    state: 'AZ',
    county: 'Maricopa County',
    coordinates: {
      latitude: 33.4255,
      longitude: -111.9400,
    },
    population: 180587,
    medianHomePrice: 425000,
    roofingConsiderations: {
      primaryMaterial: 'Tile & Shingle (Mixed)',
      averageCostPerSqFt: '$12-16',
      commonIssues: [
        'University area housing (rentals and owner-occupied mix)',
        'Ahwatukee Foothills tile roof maintenance',
        'Monsoon season preparation',
        'HOA requirements in master-planned areas',
        'Energy-efficient solutions for heat',
      ],
      hoaPrevalence: 'High',
    },
    neighborhoods: [
      'Ahwatukee Foothills',
      'South Tempe',
      'North Tempe',
      'Warner Ranch',
      'Kyrene Corridor',
      'Lakewood',
    ],
    description: 'University area (ASU) with mix of residential and rental properties. Ahwatukee Foothills features master-planned communities with HOA requirements. Mid-range market with quality expectations.',
  },

  // TIER 2 - Basic Template Cities
  {
    slug: 'mesa',
    name: 'Mesa',
    state: 'AZ',
    county: 'Maricopa County',
    coordinates: {
      latitude: 33.4152,
      longitude: -111.8315,
    },
    population: 504258,
    medianHomePrice: 390000,
    roofingConsiderations: {
      primaryMaterial: 'Tile & Shingle',
      averageCostPerSqFt: '$11-16',
      commonIssues: [
        'Large geographic area with varied housing ages',
        'Mix of tile and shingle roofs',
        'Monsoon damage common',
        'HOAs in newer developments',
      ],
      hoaPrevalence: 'Moderate',
    },
    description: 'Third-largest city in Arizona. Diverse housing stock from 1950s to brand new. Mix of tile and shingle roofs with growing foam market.',
  },
  {
    slug: 'chandler',
    name: 'Chandler',
    state: 'AZ',
    county: 'Maricopa County',
    coordinates: {
      latitude: 33.3062,
      longitude: -111.8413,
    },
    population: 275987,
    medianHomePrice: 520000,
    roofingConsiderations: {
      primaryMaterial: 'Tile',
      averageCostPerSqFt: '$13-17',
      commonIssues: [
        'Newer master-planned communities',
        'HOA requirements common',
        'Tile roof predominance',
        'Premium subdivision expectations',
      ],
      hoaPrevalence: 'High',
    },
    description: 'Rapidly growing city with master-planned communities. Strong HOA presence. Higher-end market with tile roof preference.',
  },
  {
    slug: 'gilbert',
    name: 'Gilbert',
    state: 'AZ',
    county: 'Maricopa County',
    coordinates: {
      latitude: 33.3528,
      longitude: -111.7890,
    },
    population: 267918,
    medianHomePrice: 575000,
    roofingConsiderations: {
      primaryMaterial: 'Tile',
      averageCostPerSqFt: '$13-18',
      commonIssues: [
        'Family-oriented master-planned areas',
        'Tile roof standard in most subdivisions',
        'HOA architectural requirements',
        'Quality expectations high',
      ],
      hoaPrevalence: 'Very High',
    },
    description: 'Family-friendly community with high median income. Master-planned developments dominate. Tile roofing standard with strict HOA oversight.',
  },
  {
    slug: 'peoria',
    name: 'Peoria',
    state: 'AZ',
    county: 'Maricopa County',
    coordinates: {
      latitude: 33.5806,
      longitude: -112.2374,
    },
    population: 190985,
    medianHomePrice: 475000,
    roofingConsiderations: {
      primaryMaterial: 'Tile',
      averageCostPerSqFt: '$12-17',
      commonIssues: [
        'Northwest valley location',
        'Master-planned communities common',
        'Tile and foam roof mix',
        'Monsoon exposure',
      ],
      hoaPrevalence: 'High',
    },
    description: 'Northwest valley community with strong growth. Mix of established and newer neighborhoods. Tile roofing predominant in newer areas.',
  },
  {
    slug: 'surprise',
    name: 'Surprise',
    state: 'AZ',
    county: 'Maricopa County',
    coordinates: {
      latitude: 33.6303,
      longitude: -112.3679,
    },
    population: 147965,
    medianHomePrice: 425000,
    roofingConsiderations: {
      primaryMaterial: 'Tile',
      averageCostPerSqFt: '$12-16',
      commonIssues: [
        'Rapidly growing northwest valley city',
        'Many newer subdivisions',
        'HOA requirements prevalent',
        'Desert landscape dust issues',
      ],
      hoaPrevalence: 'High',
    },
    description: 'Fast-growing northwest valley city. Predominantly newer construction with tile roofing. Active adult communities and family neighborhoods.',
  },
  {
    slug: 'avondale',
    name: 'Avondale',
    state: 'AZ',
    county: 'Maricopa County',
    coordinates: {
      latitude: 33.4356,
      longitude: -112.3496,
    },
    population: 89334,
    medianHomePrice: 375000,
    roofingConsiderations: {
      primaryMaterial: 'Tile & Shingle',
      averageCostPerSqFt: '$11-15',
      commonIssues: [
        'Mix of older and new construction',
        'Growing community',
        'Varied material types',
        'Monsoon preparation important',
      ],
      hoaPrevalence: 'Moderate',
    },
    description: 'West valley community experiencing growth. Mix of tile and shingle roofs. More affordable market with diverse housing types.',
  },
  {
    slug: 'goodyear',
    name: 'Goodyear',
    state: 'AZ',
    county: 'Maricopa County',
    coordinates: {
      latitude: 33.4353,
      longitude: -112.3576,
    },
    population: 95294,
    medianHomePrice: 485000,
    roofingConsiderations: {
      primaryMaterial: 'Tile',
      averageCostPerSqFt: '$12-16',
      commonIssues: [
        'Master-planned communities',
        'Tile roofing standard',
        'HOA requirements',
        'Energy efficiency focus',
      ],
      hoaPrevalence: 'High',
    },
    description: 'Southwest valley community with planned developments. Tile roofing predominant. Family-oriented with quality construction standards.',
  },
];

/**
 * Helper function to get location by slug
 */
export function getArizonaLocationBySlug(slug: string): ArizonaLocation | undefined {
  return ARIZONA_LOCATIONS.find(loc => loc.slug === slug);
}

/**
 * Helper function to get all Arizona city names
 */
export function getArizonaCityNames(): string[] {
  return ARIZONA_LOCATIONS.map(loc => loc.name);
}

/**
 * Arizona-specific roofing facts
 */
export const ARIZONA_ROOFING_FACTS = {
  tileMarketShare: '60-65%',
  foamMarketShare: '15-20%',
  shingleMarketShare: '10-15%',
  metalMarketShare: '5-8%',
  
  peakHeatDays: '90+ days above 110°F',
  roofSurfaceTemp: '180-200°F in summer',
  monsoonSeason: 'June - September',
  
  averageTileLifespan: '40-70 years',
  averageUnderlaymentLifespan: '15-20 years',
  averageFoamLifespan: '15-25 years',
  foamRecoatingCycle: '7-10 years',
  
  primaryChallenges: [
    'Extreme heat (120°F+)',
    'Intense UV radiation',
    'Thermal shock (45-50°F day/night swings)',
    'Monsoon microbursts',
    'Dust storms (haboobs)',
    'Flash flooding',
  ],
};
