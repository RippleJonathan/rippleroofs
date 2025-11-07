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
      { href: '/locations/georgetown', label: 'Georgetown' },
      { href: '/locations/san-antonio', label: 'San Antonio' },
      { href: '/locations/killeen', label: 'Killeen' },
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
    shortDescription: 'When it\'s time for a new roof, our team guides you through the process with expertise.',
    description: 'When it\'s time for a new roof, our team guides you through the process with expertise. We offer a wide range of roofing materials and styles, ensuring a replacement that enhances both the aesthetics and functionality of your home.',
    icon: '🔄',
    image: '/images/services/roof-replacement.jpg',
    process: [
      { step: 1, title: 'Inspection', description: 'Complete assessment of current roof condition' },
      { step: 2, title: 'Material Selection', description: 'Choose from premium roofing materials' },
      { step: 3, title: 'Installation', description: 'Professional replacement by certified team' },
      { step: 4, title: 'Warranty', description: 'Comprehensive warranty coverage' },
    ],
    benefits: [
      'Wide range of materials',
      'Enhanced aesthetics',
      'Improved functionality',
      'Expert guidance',
    ],
  },
  {
    id: '4',
    title: 'Roof Repairs',
    slug: 'roof-repairs',
    shortDescription: 'From minor leaks to damaged shingles, our prompt and efficient repair services.',
    description: 'From minor leaks to damaged shingles, our prompt and efficient repair services address a range of issues. We use high-quality materials to restore your roof to its optimal condition, protecting your home from the elements.',
    icon: '🔧',
    image: '/images/services/roof-repairs.jpg',
    process: [
      { step: 1, title: 'Inspection', description: 'Identify all issues and potential concerns' },
      { step: 2, title: 'Quote', description: 'Transparent pricing and timeline' },
      { step: 3, title: 'Repair', description: 'Quality repairs with premium materials' },
      { step: 4, title: 'Follow-up', description: 'Ensure complete satisfaction' },
    ],
    benefits: [
      'Prompt service',
      'High-quality materials',
      'Optimal roof condition',
      'Element protection',
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
