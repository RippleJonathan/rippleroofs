// Location-specific data for SEO landing pages
export interface LocationData {
  slug: string
  city: string
  state: string
  zip: string
  county: string
  metroArea: string
  neighborhoods: string[]
  landmarks: string[]
  description: string
  population: string
  weatherNote: string
}

export const LOCATIONS: LocationData[] = [
  {
    slug: 'round-rock',
    city: 'Round Rock',
    state: 'TX',
    zip: '78664',
    county: 'Williamson County',
    metroArea: 'Austin-Round Rock Metro',
    neighborhoods: [
      'Heritage Center',
      'Stone Oak',
      'Teravista',
      'University Oaks',
      'Cat Hollow',
      'Forest Creek',
      'Brushy Creek'
    ],
    landmarks: [
      'Dell Diamond',
      'Round Rock Premium Outlets',
      'Old Settlers Park',
      'Kalahari Resort',
      'Round Rock Public Library'
    ],
    description: 'Round Rock is a thriving city in Central Texas, home to major tech companies and growing families. Our location in Round Rock makes us your local roofing experts.',
    population: '130,000+',
    weatherNote: 'Round Rock experiences hot Texas summers with intense UV exposure and occasional severe storms with hail, requiring durable roofing solutions.'
  },
  {
    slug: 'austin',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    county: 'Travis County',
    metroArea: 'Austin-Round Rock Metro',
    neighborhoods: [
      'Downtown Austin',
      'South Congress',
      'East Austin',
      'Hyde Park',
      'Zilker',
      'Barton Hills',
      'Tarrytown',
      'Mueller',
      'Allandale'
    ],
    landmarks: [
      'Texas State Capitol',
      'University of Texas',
      'Lady Bird Lake',
      'Zilker Park',
      'Domain Shopping Center',
      'South Congress Avenue'
    ],
    description: 'Austin, the vibrant capital of Texas, is known for its live music scene, tech industry, and rapidly growing population. We proudly serve Austin homeowners and businesses with premium roofing services.',
    population: '1,000,000+',
    weatherNote: 'Austin\'s climate brings scorching summers reaching 100°F+, severe thunderstorms with hail, and occasional winter ice storms, demanding weather-resistant roofing systems.'
  },
  {
    slug: 'georgetown',
    city: 'Georgetown',
    state: 'TX',
    zip: '78626',
    county: 'Williamson County',
    metroArea: 'Austin-Round Rock Metro',
    neighborhoods: [
      'Sun City Texas',
      'Berry Creek',
      'Historic Downtown',
      'Wolf Ranch',
      'Cimarron Hills',
      'Riverview'
    ],
    landmarks: [
      'Georgetown Square',
      'Blue Hole Park',
      'Inner Space Cavern',
      'San Gabriel River',
      'Southwestern University'
    ],
    description: 'Georgetown combines small-town charm with modern amenities, featuring a historic downtown square and growing residential communities. We serve Georgetown with reliable roofing expertise.',
    population: '80,000+',
    weatherNote: 'Georgetown\'s location north of Austin means exposure to severe weather including hailstorms, high winds, and intense summer heat that can damage roofing materials.'
  },
  {
    slug: 'san-antonio',
    city: 'San Antonio',
    state: 'TX',
    zip: '78201',
    county: 'Bexar County',
    metroArea: 'Greater San Antonio',
    neighborhoods: [
      'Alamo Heights',
      'Stone Oak',
      'The Dominion',
      'Terrell Hills',
      'Medical Center',
      'Downtown San Antonio',
      'Southtown',
      'King William'
    ],
    landmarks: [
      'The Alamo',
      'River Walk',
      'Tower of the Americas',
      'San Antonio Missions',
      'Pearl District',
      'Six Flags Fiesta Texas'
    ],
    description: 'San Antonio, Texas\' second-largest city, blends rich history with modern growth. From historic missions to bustling suburbs, we provide comprehensive roofing services throughout San Antonio.',
    population: '1,500,000+',
    weatherNote: 'San Antonio faces extreme heat, frequent hailstorms, and high humidity that can accelerate roof wear, requiring premium materials and expert installation.'
  },
  {
    slug: 'killeen',
    city: 'Killeen',
    state: 'TX',
    zip: '76541',
    county: 'Bell County',
    metroArea: 'Killeen-Temple Metro',
    neighborhoods: [
      'Fort Hood Area',
      'Clear Creek',
      'Marlboro Heights',
      'Skyline',
      'Brookhaven',
      'Inspiration Hills'
    ],
    landmarks: [
      'Fort Hood (Fort Cavazos)',
      'Lions Club Park',
      'Killeen Mall',
      'Vive Les Arts Theatre',
      'Stonetree Golf Club'
    ],
    description: 'Killeen serves as home to Fort Hood, one of the world\'s largest military installations. We\'re proud to serve military families and civilians in the Killeen area with quality roofing services.',
    population: '150,000+',
    weatherNote: 'Killeen\'s Central Texas location brings severe thunderstorms, hail damage, intense summer heat, and occasional tornadoes, demanding robust roofing systems.'
  },
]
