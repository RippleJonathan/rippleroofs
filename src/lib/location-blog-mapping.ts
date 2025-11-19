// Mapping of location slugs to related blog posts
export const LOCATION_BLOG_POSTS: Record<string, Array<{
  title: string
  description: string
  slug: string
  category: string
}>> = {
  'austin': [
    {
      title: 'Complete Austin Roofing Guide',
      description: 'Everything Austin homeowners need to know about roofing materials, costs, and contractor selection.',
      slug: 'austin-roofing-guide',
      category: 'Location Guide'
    },
    {
      title: 'Austin Storm Damage Guide',
      description: 'How to handle insurance claims and emergency repairs after severe weather in Austin.',
      slug: 'austin-storm-damage-guide',
      category: 'Storm Damage'
    },
    {
      title: 'Roof Replacement Cost Austin 2025',
      description: 'Complete pricing guide with real costs for Austin roof replacements by size and material.',
      slug: 'roof-replacement-cost-austin-texas-2025',
      category: 'Cost Guide'
    },
    {
      title: 'Metal vs Shingle Roofing Austin',
      description: 'Compare metal and asphalt shingle roofing costs, lifespan, and ROI for Austin homes.',
      slug: 'metal-vs-shingle-roofing-austin',
      category: 'Materials'
    },
  ],
  'round-rock': [
    {
      title: 'Complete Round Rock Roofing Guide',
      description: 'Comprehensive guide to roofing in Round Rock including neighborhood-specific advice.',
      slug: 'round-rock-roofing-guide',
      category: 'Location Guide'
    },
    {
      title: 'Top 5 Roofing Problems in Round Rock',
      description: 'Common issues Round Rock homeowners face and how to fix them before they become expensive.',
      slug: 'top-5-roofing-problems-round-rock',
      category: 'Maintenance'
    },
    {
      title: 'Best Roofing Materials for Round Rock',
      description: 'Expert comparison of roofing materials optimized for Round Rock\'s hail and heat challenges.',
      slug: 'best-roofing-materials-round-rock',
      category: 'Materials'
    },
  ],
  'georgetown': [
    {
      title: 'Georgetown Roofing Guide',
      description: 'Complete roofing guide for Georgetown including historic district requirements and Sun City advice.',
      slug: 'georgetown-roofing-guide',
      category: 'Location Guide'
    },
    {
      title: 'Top 5 Roofing Problems in Georgetown',
      description: 'Most common Georgetown roofing issues from hail damage to heat stress and how to fix them.',
      slug: 'top-5-roofing-problems-georgetown',
      category: 'Maintenance'
    },
    {
      title: 'Best Roofing Materials for Georgetown',
      description: 'Material recommendations for Georgetown homes including historic properties and modern developments.',
      slug: 'best-roofing-materials-georgetown',
      category: 'Materials'
    },
  ],
  'cedar-park': [
    {
      title: 'Best Roofing Materials for Cedar Park',
      description: 'Expert guide to choosing roofing materials that perform best in Cedar Park\'s climate.',
      slug: 'best-roofing-materials-cedar-park',
      category: 'Materials'
    },
    {
      title: 'Cedar Park Neighborhood Roofing Guide',
      description: 'Roofing advice for specific Cedar Park neighborhoods including HOA requirements and costs.',
      slug: 'cedar-park-neighborhoods-roofing-guide',
      category: 'Location Guide'
    },
  ],
  'pflugerville': [
    {
      title: 'Pflugerville Roofing Guide',
      description: 'Complete roofing guide for Pflugerville homeowners including neighborhood-specific challenges.',
      slug: 'pflugerville-roofing-guide',
      category: 'Location Guide'
    },
    {
      title: 'Top 5 Roofing Problems in Pflugerville',
      description: 'Common Pflugerville roofing issues and expert solutions to prevent costly disasters.',
      slug: 'top-5-roofing-problems-pflugerville',
      category: 'Maintenance'
    },
  ],
  'leander': [
    {
      title: 'Leander Roofing Guide',
      description: 'Everything Leander homeowners need to know about roofing in Hill Country storms.',
      slug: 'leander-roofing-guide',
      category: 'Location Guide'
    },
    {
      title: 'Leander Storm Damage Guide',
      description: 'Complete guide to handling storm damage insurance claims and emergency repairs in Leander.',
      slug: 'leander-storm-damage-guide',
      category: 'Storm Damage'
    },
  ],
  'lakeway': [
    {
      title: 'Lakeway Roofing Guide',
      description: 'Premium roofing solutions for Lakeway\'s luxury waterfront homes and Hill Country estates.',
      slug: 'lakeway-roofing-guide',
      category: 'Location Guide'
    },
  ],
  'bee-cave': [
    {
      title: 'Bee Cave Roofing Guide',
      description: 'Expert roofing guide for Bee Cave\'s affluent Hill Country community with premium recommendations.',
      slug: 'bee-cave-roofing-guide',
      category: 'Location Guide'
    },
  ],
}

// Generic blog posts relevant to all locations
export const GENERIC_LOCATION_POSTS = [
  {
    title: 'Class 4 Shingles & Insurance Discounts',
    description: 'Save 10-35% on insurance premiums with impact-resistant roofing. Complete guide to Class 4 shingles in Texas.',
    slug: 'class-4-shingles-insurance-discounts-texas',
    category: 'Insurance'
  },
  {
    title: '5 Signs You Need Roof Replacement',
    description: 'Critical warning signs every Texas homeowner should watch for to know when it\'s time to replace your roof.',
    slug: '5-signs-roof-replacement-texas',
    category: 'Guidance'
  },
  {
    title: 'Choosing a Roofing Contractor in Austin',
    description: 'How to find legitimate contractors, avoid storm chasers, and verify credentials before hiring.',
    slug: 'choosing-roofing-contractor-austin',
    category: 'Contractor Tips'
  },
]
