export interface Project {
  id: string
  title: string
  location: string
  category: 'Metal Roofing' | 'Shingle Roofing'
  service: string
  image: string
  description: string
  year?: string
}

export const PROJECTS: Project[] = [
  // Metal Roofs
  {
    id: 'metal-roof-austin-1',
    title: 'Standing Seam Metal Roof',
    location: 'Austin, TX',
    category: 'Metal Roofing',
    service: 'New Installation',
    image: '/images/projects/metal-roof-austin-1.jpg',
    description: 'Premium standing seam metal roof installation in Austin. Durable, energy-efficient, and built to last decades.',
    year: '2024',
  },
  {
    id: 'metal-roof-round-rock-1',
    title: 'Standing Seam Metal Roof',
    location: 'Round Rock, TX',
    category: 'Metal Roofing',
    service: 'Roof Replacement',
    image: '/images/projects/metal-roof-round-rock-1.jpg',
    description: 'Complete metal roof replacement in Round Rock. Standing seam system provides superior weather protection.',
    year: '2024',
  },
  {
    id: 'metal-roof-austin-2',
    title: 'Standing Seam Metal Roof',
    location: 'Austin, TX',
    category: 'Metal Roofing',
    service: 'New Installation',
    image: '/images/projects/metal-roof-austin-2.jpg',
    description: 'Modern metal roofing system installed in Austin. Energy-efficient and low maintenance solution.',
    year: '2024',
  },
  
  // Shingle Roofs
  {
    id: 'shingle-roof-hutto-1',
    title: 'Residential Shingle Roof',
    location: 'Hutto, TX',
    category: 'Shingle Roofing',
    service: 'Roof Replacement',
    image: '/images/projects/shingle-roof-hutto-1.jpg',
    description: 'High-quality architectural shingle roof replacement in Hutto. Impact-resistant materials for Texas weather.',
    year: '2024',
  },
  {
    id: 'shingle-roof-pflugerville-1',
    title: 'Residential Shingle Roof',
    location: 'Pflugerville, TX',
    category: 'Shingle Roofing',
    service: 'Roof Replacement',
    image: '/images/projects/shingle-roof-pflugerville-1.jpg',
    description: 'Complete shingle roof replacement in Pflugerville with CertainTeed certified installation.',
    year: '2024',
  },
  {
    id: 'shingle-roof-killeen-1',
    title: 'Residential Shingle Roof',
    location: 'Killeen, TX',
    category: 'Shingle Roofing',
    service: 'Roof Replacement',
    image: '/images/projects/shingle-roof-killeen-1.jpg',
    description: 'Premium shingle roofing project in Killeen. Class 4 impact-resistant shingles for maximum protection.',
    year: '2024',
  },
  {
    id: 'shingle-roof-georgetown-1',
    title: 'Residential Shingle Roof',
    location: 'Georgetown, TX',
    category: 'Shingle Roofing',
    service: 'Roof Replacement',
    image: '/images/projects/shingle-roof-georgetown-1.jpg',
    description: 'Expert shingle roof installation in Georgetown. High-performance materials backed by manufacturer warranty.',
    year: '2024',
  },
  {
    id: 'shingle-roof-georgetown-2',
    title: 'Residential Shingle Roof',
    location: 'Georgetown, TX',
    category: 'Shingle Roofing',
    service: 'Roof Replacement',
    image: '/images/projects/shingle-roof-georgetown-2.jpg',
    description: 'Beautiful architectural shingle roof in Georgetown. Professional installation with attention to detail.',
    year: '2024',
  },
  {
    id: 'shingle-roof-hutto-2',
    title: 'Residential Shingle Roof',
    location: 'Hutto, TX',
    category: 'Shingle Roofing',
    service: 'Roof Replacement',
    image: '/images/projects/shingle-roof-hutto-2.jpg',
    description: 'Quality shingle roofing project in Hutto with superior craftsmanship and materials.',
    year: '2024',
  },
  {
    id: 'shingle-roof-hutto-3',
    title: 'Residential Shingle Roof',
    location: 'Hutto, TX',
    category: 'Shingle Roofing',
    service: 'New Installation',
    image: '/images/projects/shingle-roof-hutto-3.jpg',
    description: 'New construction shingle roof in Hutto. Precision installation meets Texas building codes.',
    year: '2024',
  },
  {
    id: 'shingle-roof-austin-1',
    title: 'Residential Shingle Roof',
    location: 'Austin, TX',
    category: 'Shingle Roofing',
    service: 'Roof Replacement',
    image: '/images/projects/shingle-roof-austin-1.jpg',
    description: 'Complete roof replacement in Austin. Energy-efficient shingles with exceptional curb appeal.',
    year: '2024',
  },
  {
    id: 'shingle-roof-austin-2',
    title: 'Residential Shingle Roof',
    location: 'Austin, TX',
    category: 'Shingle Roofing',
    service: 'Roof Replacement',
    image: '/images/projects/shingle-roof-austin-2.jpg',
    description: 'Professional shingle roof replacement in Austin with lifetime warranty coverage.',
    year: '2024',
  },
]

export const PROJECT_CATEGORIES = ['All Projects', 'Metal Roofing', 'Shingle Roofing'] as const

export const PROJECT_LOCATIONS = [
  'All Locations',
  'Austin',
  'Round Rock',
  'Georgetown',
  'Hutto',
  'Pflugerville',
  'Killeen',
] as const
