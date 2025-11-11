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
  heroImage?: string // Optional custom hero image
}

export const LOCATIONS: LocationData[] = [
  {
    slug: 'round-rock',
    city: 'Round Rock',
    state: 'TX',
    zip: '78664',
    county: 'Williamson County',
    metroArea: 'Austin-Round Rock Metro',
    heroImage: '/images/locations/round-rock-hero.jpg',
    neighborhoods: [
      'Heritage Center',
      'Stone Oak',
      'Teravista',
      'University Oaks',
      'Cat Hollow',
      'Forest Creek',
      'Brushy Creek',
      'Walsh Ranch',
      'Sonoma',
      'Paloma Lake'
    ],
    landmarks: [
      'Dell Diamond',
      'Round Rock Premium Outlets',
      'Old Settlers Park',
      'Kalahari Resort',
      'Round Rock Public Library',
      'Memorial Park',
      'Brushy Creek Lake Park'
    ],
    description: 'Round Rock is a thriving city in Central Texas, home to major tech companies including Dell Technologies and growing families. Located just north of Austin, Round Rock offers excellent schools, parks, and a strong economy. Our location in Round Rock makes us your local roofing experts, with deep knowledge of the area\'s unique climate challenges and building codes.',
    population: '130,000+',
    weatherNote: 'Round Rock experiences hot Texas summers with intense UV exposure regularly exceeding 100°F, occasional severe storms with large hail (particularly in spring), high humidity, and rapid temperature fluctuations that can damage roofing materials over time.'
  },
  {
    slug: 'austin',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    county: 'Travis County',
    metroArea: 'Austin-Round Rock Metro',
    heroImage: '/images/locations/austin-hero.jpg',
    neighborhoods: [
      'Downtown Austin',
      'South Congress (SoCo)',
      'East Austin',
      'Hyde Park',
      'Zilker',
      'Barton Hills',
      'Tarrytown',
      'Mueller',
      'Allandale',
      'Westlake Hills',
      'Bouldin Creek',
      'Travis Heights'
    ],
    landmarks: [
      'Texas State Capitol',
      'University of Texas',
      'Lady Bird Lake',
      'Zilker Park',
      'Domain Shopping Center',
      'South Congress Avenue',
      'Barton Springs Pool',
      'Austin City Limits'
    ],
    description: 'Austin, the vibrant capital of Texas and the "Live Music Capital of the World," is known for its booming tech industry, world-class universities, and rapidly growing population. From historic neighborhoods to modern developments, we proudly serve Austin homeowners and businesses with premium roofing services tailored to our city\'s unique architectural styles.',
    population: '1,000,000+',
    weatherNote: 'Austin\'s climate brings scorching summers regularly reaching 100°F+ with extreme UV exposure, severe thunderstorms with golf-ball-sized hail, flash flooding, occasional winter ice storms, and high pollen that can affect roof longevity.'
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
      'Riverview',
      'Shell Rock',
      'Westinghouse',
      'Lake Georgetown Estates'
    ],
    landmarks: [
      'Georgetown Square',
      'Blue Hole Park',
      'Inner Space Cavern',
      'San Gabriel River',
      'Southwestern University',
      'Lake Georgetown',
      'Georgetown Palace Theatre'
    ],
    description: 'Georgetown perfectly combines small-town charm with modern amenities, featuring a beautifully preserved Victorian-era downtown square and rapidly growing residential communities. As one of the fastest-growing cities in America, Georgetown attracts families seeking excellent schools and quality of life. We serve Georgetown with reliable roofing expertise backed by local knowledge.',
    population: '80,000+',
    weatherNote: 'Georgetown\'s location north of Austin means increased exposure to severe weather including devastating hailstorms (some of Texas\'s worst), high winds exceeding 60mph, intense summer heat, and occasional tornadoes.'
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
      'King William',
      'Monte Vista',
      'Olmos Park',
      'Shavano Park',
      'Castle Hills'
    ],
    landmarks: [
      'The Alamo',
      'River Walk',
      'Tower of the Americas',
      'San Antonio Missions',
      'Pearl District',
      'Six Flags Fiesta Texas',
      'SeaWorld San Antonio',
      'San Antonio Zoo'
    ],
    description: 'San Antonio, Texas\' second-largest city, masterfully blends 300 years of rich history with modern metropolitan growth. Home to historic missions, a world-famous River Walk, and major military installations, San Antonio offers diverse architecture from Spanish colonial to modern suburban. We provide comprehensive roofing services throughout San Antonio and surrounding areas.',
    population: '1,500,000+',
    weatherNote: 'San Antonio faces extreme summer heat exceeding 100°F for extended periods, frequent and severe hailstorms, high humidity levels that accelerate roof deterioration, occasional flooding, and intense UV radiation year-round.'
  },
  {
    slug: 'killeen',
    city: 'Killeen',
    state: 'TX',
    zip: '76541',
    county: 'Bell County',
    metroArea: 'Killeen-Temple Metro',
    neighborhoods: [
      'Fort Cavazos Area',
      'Clear Creek',
      'Marlboro Heights',
      'Skyline',
      'Brookhaven',
      'Inspiration Hills',
      'Stonetree',
      'Bridgewood',
      'Woodland Hills'
    ],
    landmarks: [
      'Fort Cavazos (Fort Hood)',
      'Lions Club Park',
      'Killeen Mall',
      'Vive Les Arts Theatre',
      'Stonetree Golf Club',
      'Dana Peak Park',
      'Belton Lake'
    ],
    description: 'Killeen proudly serves as home to Fort Cavazos (formerly Fort Hood), one of the world\'s largest military installations. This vibrant community supports military families, veterans, and civilians with excellent schools, shopping, and recreation. We\'re honored to serve those who serve, providing quality roofing services to military and civilian families throughout the Killeen area.',
    population: '150,000+',
    weatherNote: 'Killeen\'s Central Texas location brings severe thunderstorms with large hail, damaging wind gusts, intense summer heat exceeding 100°F, high UV exposure, occasional tornadoes, and rapid weather changes.'
  },
  {
    slug: 'pflugerville',
    city: 'Pflugerville',
    state: 'TX',
    zip: '78660',
    county: 'Travis County',
    metroArea: 'Austin-Round Rock Metro',
    heroImage: '/images/locations/pflugerville-hero.jpg',
    neighborhoods: [
      'Blackhawk',
      'Brookfield',
      'Celebration',
      'Falcon Pointe',
      'Gatlinburg',
      'Greenbury',
      'Highland Park',
      'Mansfield Dam',
      'Park at Blackhawk',
      'Sendero Springs',
      'Willow Creek'
    ],
    landmarks: [
      'Lake Pflugerville',
      'Pfluger Park',
      'Pflugerville Heritage House',
      'Typhoon Texas',
      'Northeast Metro Park',
      'Stone Hill Town Center'
    ],
    description: 'Pflugerville, affectionately known as "Pf" by locals, is a family-friendly community northeast of Austin known for its German heritage, excellent parks, and strong community spirit. With rapid growth and top-rated schools, Pflugerville attracts young families and professionals. We serve Pflugerville with dedicated local roofing expertise.',
    population: '70,000+',
    weatherNote: 'Pflugerville experiences typical Central Texas weather with severe spring hailstorms, intense summer heat and UV exposure, occasional winter freezes, high humidity, and powerful thunderstorms.'
  },
  {
    slug: 'cedar-park',
    city: 'Cedar Park',
    state: 'TX',
    zip: '78613',
    county: 'Williamson County',
    metroArea: 'Austin-Round Rock Metro',
    heroImage: '/images/locations/cedar-park-hero.jpg',
    neighborhoods: [
      'Buttercup Creek',
      'Anderson Mill',
      'Cypress Creek',
      'Whitestone',
      'Avery Ranch',
      'Lakeline',
      'Twin Lakes',
      'Trails of Avery Ranch',
      'Desert Oaks'
    ],
    landmarks: [
      'H-E-B Center',
      'Lakeline Mall',
      'Brushy Creek Regional Trail',
      'Veterans Memorial Park',
      'Elizabeth M. Milburn Park',
      'Cedar Park Town Center'
    ],
    description: 'Cedar Park is a thriving suburban community northwest of Austin, home to the H-E-B Center arena and known for its excellent schools, family-friendly atmosphere, and convenient Hill Country location. With booming growth and modern developments, Cedar Park residents demand quality roofing services from trusted local experts.',
    population: '80,000+',
    weatherNote: 'Cedar Park\'s location near the Hill Country brings severe weather including damaging hail, flash flooding from heavy rains, extreme summer heat, high winds, and occasional ice storms in winter.'
  },
  {
    slug: 'leander',
    city: 'Leander',
    state: 'TX',
    zip: '78641',
    county: 'Williamson County',
    metroArea: 'Austin-Round Rock Metro',
    heroImage: '/images/locations/leander-hero.jpg',
    neighborhoods: [
      'Crystal Falls',
      'Mason Hills',
      'Summerlyn',
      'San Gabriel Village',
      'Block House Creek',
      'Northline',
      'Palmera Ridge',
      'Travisso'
    ],
    landmarks: [
      'Benbrook Ranch Park',
      'Old Town Leander',
      'Twin Lakes YMCA',
      'Devine Lake Park',
      'South Fork Trail System',
      'Leander Station'
    ],
    description: 'Leander is one of the fastest-growing cities in Texas, offering a perfect blend of small-town feel and modern conveniences. Located northwest of Austin with Capital MetroRail access, Leander attracts families seeking affordable homes, great schools, and Hill Country views. We provide expert roofing services throughout Leander\'s growing communities.',
    population: '70,000+',
    weatherNote: 'Leander experiences severe Central Texas weather patterns including destructive hailstorms, flash flooding, intense heat and drought conditions, high winds, and occasional severe thunderstorms with tornadoes.'
  },
  {
    slug: 'temple',
    city: 'Temple',
    state: 'TX',
    zip: '76501',
    county: 'Bell County',
    metroArea: 'Killeen-Temple Metro',
    neighborhoods: [
      'Westwood',
      'Wildflower Country Club',
      'Southwood',
      'Morgan\'s Point',
      'Prairie Dell',
      'Woodland Hills',
      'North Temple'
    ],
    landmarks: [
      'Baylor Scott & White Health',
      'Temple Railroad & Heritage Museum',
      'Miller Springs Nature Center',
      'Lions Junction Family Water Park',
      'Temple Mall',
      'Downtown Temple'
    ],
    description: 'Temple is a medical hub and growing city in Central Texas, home to one of the state\'s largest medical centers. With a historic downtown, quality schools, and strong economy, Temple offers residents an excellent quality of life. We serve Temple and surrounding areas with professional roofing services and local expertise.',
    population: '80,000+',
    weatherNote: 'Temple faces typical Central Texas severe weather including large hail, damaging winds, extreme summer temperatures often exceeding 100°F, occasional tornadoes, and intense thunderstorms.'
  },
  {
    slug: 'waco',
    city: 'Waco',
    state: 'TX',
    zip: '76701',
    county: 'McLennan County',
    metroArea: 'Greater Waco',
    neighborhoods: [
      'West Waco',
      'Hewitt',
      'Woodway',
      'Mountainview',
      'Sanger Heights',
      'Castle Heights',
      'Cameron Park',
      'Baylor University Area'
    ],
    landmarks: [
      'Magnolia Market at the Silos',
      'Baylor University',
      'Cameron Park Zoo',
      'Waco Mammoth National Monument',
      'Texas Ranger Hall of Fame',
      'Dr Pepper Museum',
      'Brazos River'
    ],
    description: 'Waco has experienced a renaissance in recent years, growing from a college town into a vibrant destination known for Magnolia Market and rich history. Located on the Brazos River between Austin and Dallas, Waco offers residents affordable living, cultural attractions, and Southern hospitality. We proudly serve Waco with reliable roofing solutions.',
    population: '140,000+',
    weatherNote: 'Waco\'s location in Central Texas means exposure to severe weather including frequent hailstorms (some of the largest in Texas), tornadoes, extreme heat and drought, flash flooding, and damaging wind events.'
  },
  {
    slug: 'san-marcos',
    city: 'San Marcos',
    state: 'TX',
    zip: '78666',
    county: 'Hays County',
    metroArea: 'Austin-San Marcos Corridor',
    neighborhoods: [
      'Purgatory Creek',
      'The Heights',
      'Old Town',
      'Blanco Gardens',
      'Encino Park',
      'Mission Hills',
      'Quail Creek'
    ],
    landmarks: [
      'Texas State University',
      'San Marcos River',
      'Aquarena Springs',
      'Wonder World Cave',
      'Tanger Outlets',
      'San Marcos Plaza',
      'Rio Vista Park'
    ],
    description: 'San Marcos sits perfectly between Austin and San Antonio, offering crystal-clear springs, Texas State University, and a thriving downtown. Known for outdoor recreation on the San Marcos River and affordable living, this growing city attracts students, families, and retirees. We serve San Marcos with expert roofing services for all property types.',
    population: '70,000+',
    weatherNote: 'San Marcos experiences severe Central Texas weather including damaging hail, flash flooding (particularly dangerous given the river), extreme summer heat, high humidity, and occasional severe thunderstorms.'
  },
  {
    slug: 'new-braunfels',
    city: 'New Braunfels',
    state: 'TX',
    zip: '78130',
    county: 'Comal County',
    metroArea: 'San Antonio-New Braunfels Metro',
    neighborhoods: [
      'Gruene',
      'Westpointe',
      'Klein Road',
      'Sattler',
      'Canyon Lake Area',
      'Garden Ridge',
      'Veramendi',
      'Vintage Oaks'
    ],
    landmarks: [
      'Gruene Historic District',
      'Schlitterbahn Waterpark',
      'Guadalupe River',
      'Comal River',
      'Landa Park',
      'Natural Bridge Caverns',
      'Downtown New Braunfels'
    ],
    description: 'New Braunfels celebrates its German heritage while serving as a popular tourist destination known for river tubing, Schlitterbahn, and the historic Gruene district. Located between Austin and San Antonio, this charming city offers residents Hill Country beauty and strong community values. We provide quality roofing services throughout New Braunfels and surrounding areas.',
    population: '100,000+',
    weatherNote: 'New Braunfels faces intense Hill Country weather including severe hailstorms, flash flooding from heavy rains (dangerous near rivers), extreme heat, high humidity, and occasional damaging wind events.'
  },
  {
    slug: 'copperas-cove',
    city: 'Copperas Cove',
    state: 'TX',
    zip: '76522',
    county: 'Coryell County',
    metroArea: 'Killeen-Temple Metro',
    neighborhoods: [
      'Fairview Heights',
      'Ogletree Gap',
      'Clawson',
      'South Mountain',
      'Country Club Estates',
      'West Range'
    ],
    landmarks: [
      'Ogletree Gap Heritage Festival',
      'City Park',
      'Copperas Cove Civic Center',
      'Fort Cavazos (adjacent)',
      'South Mountain'
    ],
    description: 'Copperas Cove is a close-knit community adjacent to Fort Cavazos, proudly supporting military families and offering small-town Texas living. With affordable housing, good schools, and strong community spirit, Copperas Cove provides a welcoming environment. We\'re honored to serve military and civilian families in Copperas Cove with professional roofing services.',
    population: '35,000+',
    weatherNote: 'Copperas Cove experiences severe Central Texas weather including large hail, strong winds, extreme summer heat, occasional tornadoes, and intense thunderstorms typical of the region.'
  },
]
