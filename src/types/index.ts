// Form Types
export interface QuoteFormData {
  name: string
  phone: string
  email: string
  address: string
  service: ServiceType
  message?: string
}

export type ServiceType = 
  | 'Roof Repair'
  | 'Roof Replacement'
  | 'New Installation'
  | 'Storm Damage'
  | 'Other'

// Service Types
export interface Service {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  icon: string
  image: string
  process: ProcessStep[]
  benefits: string[]
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

// Project Types
export interface Project {
  id: string
  title: string
  category: ProjectCategory
  image: string
  beforeImage?: string
  afterImage?: string
  description: string
  date: string
}

export type ProjectCategory = 
  | 'All'
  | 'Commercial'
  | 'Residential'
  | 'Metal'
  | 'Shingle'
  | 'Tile'

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  date: string
  service?: string
}

// Navigation Types
export interface NavLink {
  href: string
  label: string
  children?: NavLink[]
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  error?: string
}
