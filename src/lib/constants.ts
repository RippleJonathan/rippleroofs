import type { NavLink, Service } from '@/types'

// Site Configuration
export const SITE_CONFIG = {
  name: 'Ripple Roofing & Construction',
  description: 'Premium Roofing Services in Central Texas',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  phone: '(512) 763-5277',
  phoneRaw: '5127635277',
  email: 'info@rippleroofs.com',
  address: '1000 Heritage Center Circle, Round Rock, TX 78664',
  city: 'Round Rock',
  state: 'Texas',
  zip: '78664',
  hours: '24/7 Emergency Service Available',
  serviceArea: 'Central Texas, Austin Metro, San Antonio, Georgetown, Round Rock, Killeen, Copperas Cove, Portland',
  certifications: ['CertainTeed Shingle Master', 'Fully Insured'],
  social: {
    facebook: 'https://facebook.com/rippleroofs',
    instagram: '',
    linkedin: '',
    twitter: '',
    youtube: '',
  },
}

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { 
    href: '/services', 
    label: 'Services',
    children: [
      { href: '/services/residential-roofing', label: 'Residential Roofing' },
      { href: '/services/commercial-roofing', label: 'Commercial Roofing' },
      { href: '/services/roof-replacement', label: 'Roof Replacement' },
      { href: '/services/roof-repairs', label: 'Roof Repairs' },
      { href: '/services/emergency-services', label: 'Emergency Services' },
      { href: '/services/roof-inspection', label: 'Roof Inspection' },
      { href: '/services/gutter-installation', label: 'Gutter Installation' },
    ]
  },
  {
    href: '/locations',
    label: 'Locations',
    children: [
      { href: '/locations/round-rock', label: 'Round Rock' },
      { href: '/locations/austin', label: 'Austin' },
      { href: '/locations/pflugerville', label: 'Pflugerville' },
      { href: '/locations/cedar-park', label: 'Cedar Park' },
      { href: '/locations/leander', label: 'Leander' },
      { href: '/locations/georgetown', label: 'Georgetown' },
      { href: '/locations/san-marcos', label: 'San Marcos' },
      { href: '/locations/new-braunfels', label: 'New Braunfels' },
      { href: '/locations/san-antonio', label: 'San Antonio' },
      { href: '/locations/temple', label: 'Temple' },
      { href: '/locations/killeen', label: 'Killeen' },
      { href: '/locations/copperas-cove', label: 'Copperas Cove' },
      { href: '/locations/waco', label: 'Waco' },
    ]
  },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/financing', label: 'Financing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

// Services Data
export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Residential Roofing',
    slug: 'residential-roofing',
    shortDescription: 'Your home is more than just a structure—it\'s a haven for your family.',
    description: 'At Ripple Roofing & Construction, we understand that your home is more than just a structure—it\'s a haven for your family. We provide comprehensive residential roofing services including inspections, repairs, and complete roof replacements.',
    icon: '🏠',
    image: '/images/services/residential-roofing.jpg',
    process: [
      { step: 1, title: 'Inspection', description: 'Thorough assessment of your roof\'s condition' },
      { step: 2, title: 'Consultation', description: 'Discuss options and provide detailed estimate' },
      { step: 3, title: 'Installation', description: 'Expert installation with premium materials' },
      { step: 4, title: 'Final Walkthrough', description: 'Quality inspection and warranty activation' },
    ],
    benefits: [
      'CertainTeed Shingle Master Certified',
      'Wide range of materials and styles',
      'Fully insured',
      '24/7 emergency service',
    ],
  },
  {
    id: '2',
    title: 'Commercial Roofing',
    slug: 'commercial-roofing',
    shortDescription: 'The integrity of your commercial property\'s roof is paramount to your business success.',
    description: 'As a business owner, the integrity of your commercial property\'s roof is paramount to the success and longevity of your enterprise. We provide specialized commercial roofing solutions with customized maintenance programs.',
    icon: '🏢',
    image: '/images/services/commercial-roofing.jpg',
    process: [
      { step: 1, title: 'Assessment', description: 'Comprehensive evaluation of your commercial roof' },
      { step: 2, title: 'Planning', description: 'Custom solution tailored to your business needs' },
      { step: 3, title: 'Installation', description: 'Minimal disruption to your operations' },
      { step: 4, title: 'Maintenance', description: 'Ongoing maintenance programs available' },
    ],
    benefits: [
      'Preventative maintenance programs',
      'Minimal business disruption',
      'Cost-effective solutions',
      'Extended roof longevity',
    ],
  },
  {
    id: '3',
    title: 'Roof Replacement',
    slug: 'roof-replacement',
    shortDescription: 'Expert roof replacement services in Central Texas. From material selection to installation, we guide you through every step with transparency and craftsmanship.',
    description: 'When it\'s time for a new roof, Ripple Roofing & Construction guides you through the process with expertise and transparency. As a CertainTeed Shingle Master certified contractor, we offer premium roofing materials specifically chosen for Central Texas\'s challenging climate—intense heat, severe storms, and hail. Whether your roof has reached the end of its lifespan, sustained storm damage, or you\'re upgrading for energy efficiency and curb appeal, we provide comprehensive roof replacement services with industry-leading warranties. Serving Round Rock, Austin, Georgetown, and all of Central Texas, we\'ve helped thousands of homeowners protect their most valuable investment with quality craftsmanship and honest service.',
    icon: '🔄',
    image: '/images/services/roof-replacement.jpg',
    process: [
      { step: 1, title: 'Free Comprehensive Inspection', description: 'We conduct a thorough 50-point inspection of your existing roof, identifying all issues, potential concerns, and underlying problems. We document everything with photos and provide a detailed written report.' },
      { step: 2, title: 'Material Selection & Consultation', description: 'We guide you through material options including architectural shingles, impact-resistant shingles, metal roofing, and tile. We explain pros/cons, costs, warranties, and what works best for your specific home, budget, and neighborhood.' },
      { step: 3, title: 'Detailed Written Estimate', description: 'You receive a transparent, itemized estimate with no hidden fees. We explain every line item, timeline expectations, and payment terms. We help you understand insurance coverage if applicable and financing options available.' },
      { step: 4, title: 'Project Preparation', description: 'We handle all permits and HOA approvals. We protect your property with tarps and barriers, coordinate material delivery, and provide a detailed project timeline. Your project manager will be your single point of contact throughout.' },
      { step: 5, title: 'Expert Installation', description: 'Our certified crews arrive on schedule and complete most replacements in 1-3 days. We use premium materials, follow manufacturer specifications precisely, and maintain a clean, safe work site. Daily progress updates keep you informed.' },
      { step: 6, title: 'Quality Inspection & Cleanup', description: 'We conduct a final walkthrough with you, ensuring complete satisfaction. Our magnetic sweep removes all nails and debris. We leave your property cleaner than we found it, with professional disposal of all materials.' },
      { step: 7, title: 'Warranty Activation & Follow-Up', description: 'We register your warranty with the manufacturer, provide all documentation, and schedule a follow-up inspection after your first rain. We\'re here for the life of your roof with ongoing support and maintenance.' },
    ],
    benefits: [
      'CertainTeed Shingle Master Certified—elite contractor status with enhanced warranties',
      'Premium materials rated for Texas heat, hail, and high winds',
      'Transparent pricing with detailed, itemized estimates',
      'Most projects completed in 1-3 days with minimal disruption',
      'Comprehensive warranties on both materials (25-50+ years) and workmanship (10 years)',
      'Insurance claim assistance including adjuster meetings and documentation',
      'Flexible financing options with approved credit',
      'Thorough cleanup including magnetic nail sweep',
      'Local Central Texas company—not storm chasers, here for the long term',
      'A+ BBB rating with hundreds of satisfied customers',
      'Free inspections after severe weather events',
      '24/7 emergency service availability',
    ],
  },
  {
    id: '4',
    title: 'Roof Repairs',
    slug: 'roof-repairs',
    shortDescription: 'Fast, reliable roof repairs that stop leaks and prevent costly damage.',
    description: 'Don\'t let a small roof problem become a big expense. Our expert roof repair services in Round Rock, Austin, and Georgetown address everything from minor leaks and missing shingles to storm damage and flashing issues. As a CertainTeed Shingle Master certified contractor, we use premium materials and proven techniques to restore your roof\'s integrity. Most repairs are completed in just a few hours, with same-day service available. We provide honest assessments—if repair isn\'t the best option, we\'ll tell you. Our 10-year workmanship warranty backs every repair we make.',
    icon: '🔧',
    image: '/images/services/roof-repairs.jpg',
    process: [
      { step: 1, title: 'Free Inspection & Diagnosis', description: 'Thorough evaluation to identify all issues, not just visible damage. We check for underlying problems that could worsen. Honest assessment of whether repair or replacement is more cost-effective.' },
      { step: 2, title: 'Detailed Photo Documentation', description: 'We document all damage with photos and notes for your records and insurance claims. Clear explanation of what needs fixing and why.' },
      { step: 3, title: 'Transparent Pricing', description: 'Upfront pricing with no surprises. Itemized quote showing materials and labor. We work directly with insurance companies if storm damage is involved.' },
      { step: 4, title: 'Professional Repair', description: 'Experienced crews complete most repairs in 2-4 hours. We match existing materials for seamless appearance. All work meets manufacturer specifications and local building codes.' },
      { step: 5, title: 'Quality Inspection', description: 'Final walkthrough to ensure repair quality. We test for leaks and verify structural integrity. Magnetic nail sweep of work area.' },
      { step: 6, title: '10-Year Workmanship Warranty', description: 'Every repair backed by our comprehensive workmanship warranty. If the repaired area has issues, we fix it at no charge.' },
    ],
    benefits: [
      'Same-day and emergency repair services available',
      'CertainTeed Shingle Master certified technicians',
      'Premium Texas-rated materials that match existing roof',
      'Complete in 2-4 hours for most repairs',
      '10-year workmanship warranty on all repairs',
      'Insurance claim assistance and documentation',
      'Honest assessments—we\'ll tell you if replacement is better',
      'No hidden fees or surprise charges',
      'Free inspections after major storms',
      'Local company serving Central Texas since [year]',
      'A+ BBB rating with hundreds of satisfied customers',
      '24/7 emergency service for urgent situations',
    ],
  },
  {
    id: '5',
    title: 'Emergency Services',
    slug: 'emergency-services',
    shortDescription: '24/7 emergency roofing services to provide quick response and effective solutions.',
    description: 'Unexpected roof damage can be stressful. Our emergency roofing services are available 24/7 to provide quick response times and effective solutions, minimizing further damage to your home. We offer emergency tarping services to protect your property.',
    icon: '🚨',
    image: '/images/services/emergency-services.jpg',
    process: [
      { step: 1, title: 'Emergency Call', description: '24/7 immediate response' },
      { step: 2, title: 'Emergency Tarping', description: 'Protect your property from further damage' },
      { step: 3, title: 'Assessment', description: 'Complete damage evaluation' },
      { step: 4, title: 'Restoration', description: 'Permanent repair and restoration' },
    ],
    benefits: [
      '24/7 availability',
      'Quick response times',
      'Emergency tarping',
      'Minimize damage',
    ],
  },
  {
    id: '6',
    title: 'Roof Inspection & Assessment',
    slug: 'roof-inspection',
    shortDescription: 'Thorough roof inspections to identify any issues or potential concerns.',
    description: 'We conduct thorough roof inspections to identify any issues or potential concerns. Whether you\'re buying a new property or need a routine assessment, we provide detailed reports and recommendations.',
    icon: '🔍',
    image: '/images/services/roof-inspection.jpg',
    process: [
      { step: 1, title: 'Schedule', description: 'Book your inspection appointment' },
      { step: 2, title: 'Inspection', description: 'Comprehensive roof examination' },
      { step: 3, title: 'Report', description: 'Detailed findings and recommendations' },
      { step: 4, title: 'Consultation', description: 'Discuss next steps if needed' },
    ],
    benefits: [
      'Detailed reports',
      'Expert recommendations',
      'Routine or pre-purchase',
      'Peace of mind',
    ],
  },
  {
    id: '7',
    title: 'Gutter Installation',
    slug: 'gutter-installation',
    shortDescription: 'Professional gutter installation to prevent water buildup and protect your foundation.',
    description: 'Proper drainage is crucial for the well-being of your home. We offer professional gutter installation to prevent water buildup, safeguard your foundation, and maintain the longevity of your roofing system.',
    icon: '💧',
    image: '/images/services/gutter-installation.jpg',
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate your drainage needs' },
      { step: 2, title: 'Design', description: 'Custom gutter system design' },
      { step: 3, title: 'Installation', description: 'Professional installation' },
      { step: 4, title: 'Testing', description: 'Ensure proper drainage' },
    ],
    benefits: [
      'Prevent water buildup',
      'Foundation protection',
      'Extended roof longevity',
      'Custom solutions',
    ],
  },
]

// Service Types for Form
export const SERVICE_TYPES = [
  'Roof Repair',
  'Roof Replacement',
  'New Installation',
  'Storm Damage',
  'Other',
] as const

// Trust Bar / Value Propositions
export const VALUE_PROPS = [
  {
    icon: '✓',
    title: 'CertainTeed Shingle Master',
    description: 'Certified Excellence',
  },
  {
    icon: '�️',
    title: 'Fully Insured',
    description: 'Your protection guaranteed',
  },
  {
    icon: '🚨',
    title: '24/7 Emergency Service',
    description: 'Always here when you need us',
  },
  {
    icon: '🌟',
    title: 'Central Texas Experts',
    description: 'Serving the Austin Metro',
  },
]

// Project Categories
export const PROJECT_CATEGORIES = [
  'All',
  'Commercial',
  'Residential',
  'Metal',
  'Shingle',
  'Tile',
] as const
