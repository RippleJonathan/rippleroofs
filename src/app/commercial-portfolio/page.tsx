'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

// Commercial portfolio data
const COMMERCIAL_PROJECTS = [
  {
    id: 'commercial-1',
    title: 'Multi-Unit Apartment Complex Roof Replacement',
    category: 'Apartment Complex',
    location: 'Austin, TX',
    service: 'Full Roof Replacement',
    year: 2024,
    image: '/images/projects/commercial-apartment.jpg',
    description: 'Complete roof replacement on 120-unit apartment complex. Coordinated with building management for minimal tenant disruption. Installed Class 4 impact-resistant shingles across 45,000 sq ft.',
    highlights: [
      '45,000 sq ft of roofing',
      'Class 4 impact-resistant shingles',
      'Phased installation to minimize tenant disruption',
      'Project completed on schedule',
    ],
  },
  {
    id: 'commercial-2',
    title: 'Commercial Office Building Metal Roof',
    category: 'Office Building',
    location: 'Round Rock, TX',
    service: 'Metal Roofing Installation',
    year: 2024,
    image: '/images/projects/commercial-office.jpg',
    description: 'Standing seam metal roof installation on modern 3-story office building. Incorporated solar panel ready mounting system. Energy-efficient design reduces cooling costs by 25%.',
    highlights: [
      '28,000 sq ft standing seam metal',
      'Solar panel ready mounting system',
      '25% estimated energy savings',
      'Modern architectural design',
    ],
  },
  {
    id: 'commercial-3',
    title: 'Retail Shopping Center Roof Restoration',
    category: 'Retail Center',
    location: 'Cedar Park, TX',
    service: 'Roof Restoration & Repairs',
    year: 2023,
    image: '/images/projects/commercial-retail.jpg',
    description: 'Comprehensive roof restoration on 15,000 sq ft retail center including valley repairs, new flashing, and ventilation upgrades. Restored structural integrity while extending roof life 15+ years.',
    highlights: [
      '15,000 sq ft area coverage',
      'Valley and flashing replacement',
      'Enhanced ventilation system',
      'Extended roof life estimate: 15+ years',
    ],
  },
  {
    id: 'commercial-4',
    title: 'Industrial Warehouse Metal Panel Installation',
    category: 'Warehouse',
    location: 'Austin, TX',
    service: 'Metal Panel Installation',
    year: 2023,
    image: '/images/projects/commercial-warehouse.jpg',
    description: 'Industrial-grade metal panel installation on 50,000 sq ft warehouse facility. Corrugated metal panels provide durability and cost-effectiveness. Quick installation minimized production downtime.',
    highlights: [
      '50,000 sq ft metal panels',
      'Industrial-grade durability',
      'Minimal downtime installation',
      ' 40+ year lifespan',
    ],
  },
  {
    id: 'commercial-5',
    title: 'Restaurant Group Multi-Location Roofing',
    category: 'Food Service',
    location: 'Austin, San Antonio, Round Rock',
    service: 'Multi-Location Roof Replacement',
    year: 2024,
    image: '/images/projects/commercial-restaurant.jpg',
    description: 'Coordinated roof replacements across 4 restaurant locations. Standardized material selection and contractor team for consistent quality. Minimized disruption to business operations across all sites.',
    highlights: [
      '4 restaurant locations',
      'Coordinated project management',
      'Business hours-friendly scheduling',
      'Consistent quality across all sites',
    ],
  },
  {
    id: 'commercial-6',
    title: 'Medical Office Building TPO Roof',
    category: 'Medical Facility',
    location: 'Georgetown, TX',
    service: 'TPO Flat Roof Installation',
    year: 2023,
    image: '/images/projects/commercial-medical.jpg',
    description: 'TPO flat roof installation on modern medical office building. Single-ply membrane provides energy efficiency and durability. Includes HVAC curb flashing and custom penetrations.',
    highlights: [
      'TPO flat roof system',
      'Energy-efficient membrane',
      'HVAC integration',
      'Medical facility requirements met',
    ],
  },
]

const COMMERCIAL_CATEGORIES = ['All Projects', 'Apartment Complex', 'Office Building', 'Retail Center', 'Warehouse', 'Food Service', 'Medical Facility']

export default function CommercialPortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects')
  const [selectedProject, setSelectedProject] = useState<typeof COMMERCIAL_PROJECTS[0] | null>(null)

  const filteredProjects = COMMERCIAL_PROJECTS.filter((project) => {
    return selectedCategory === 'All Projects' || project.category === selectedCategory
  })

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Commercial Roofing Portfolio
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Proven expertise across apartment complexes, office buildings, retail centers, warehouses, and more. 
              Ripple Roofing handles commercial projects of any size with professional coordination and minimal business disruption.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Request Commercial Quote
                </Button>
              </Link>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
                  Call {SITE_CONFIG.phone}
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-50 border-b border-primary-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-accent-600 mb-2">500+</div>
              <p className="text-primary-700 font-semibold">Commercial Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-accent-600 mb-2">150,000+</div>
              <p className="text-primary-700 font-semibold">Square Feet Installed Annually</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-accent-600 mb-2">15+</div>
              <p className="text-primary-700 font-semibold">Years Commercial Experience</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-primary-100 bg-white">
        <Container>
          <div className="flex flex-wrap gap-2">
            {COMMERCIAL_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-accent-500 text-white shadow-lg'
                    : 'bg-primary-100 text-primary-900 hover:bg-primary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-primary-600">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <Container>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-2">No projects found</h3>
              <p className="text-primary-600 mb-6">Try adjusting your filters</p>
              <Button
                variant="primary"
                onClick={() => {
                  setSelectedCategory('All Projects')
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-primary-100"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-primary-100">
                    <Image
                      src={project.image}
                      alt={`${project.title} in ${project.location}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e0e0e0" width="400" height="300"/%3E%3Ctext x="50%" y="50%" font-size="24" fill="%23666" text-anchor="middle" dy=".3em"%3ECommercial Project Image%3C/text%3E%3C/svg%3E'
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-600 mb-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">{project.location}</span>
                    </div>
                    <p className="text-primary-700 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary-600">{project.service}</span>
                      {project.year && (
                        <span className="text-primary-500">{project.year}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 text-primary-900 hover:text-accent-500 bg-white rounded-full p-2 shadow-lg transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-96 lg:h-auto bg-primary-100 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} in ${selectedProject.location}`}
                  fill
                  className="object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23e0e0e0" width="600" height="400"/%3E%3Ctext x="50%" y="50%" font-size="32" fill="%23666" text-anchor="middle" dy=".3em"%3ECommercial Project Image%3C/text%3E%3C/svg%3E'
                  }}
                />
                <div className="absolute top-4 left-4 bg-accent-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  {selectedProject.category}
                </div>
              </div>

              {/* Details */}
              <div className="p-8 lg:p-10">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">
                  {selectedProject.title}
                </h2>
                
                <div className="flex items-center gap-2 text-primary-600 mb-6">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg font-semibold">{selectedProject.location}</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary-900 mb-1">Service Type</div>
                      <div className="text-primary-700">{selectedProject.service}</div>
                    </div>
                  </div>

                  {selectedProject.year && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-primary-900 mb-1">Completed</div>
                        <div className="text-primary-700">{selectedProject.year}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary-900 mb-1">Project Details</div>
                      <div className="text-primary-700 leading-relaxed mb-4">{selectedProject.description}</div>
                      
                      {/* Highlights */}
                      {selectedProject.highlights && (
                        <ul className="space-y-2">
                          {selectedProject.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-primary-700">
                              <svg className="w-4 h-4 text-accent-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="border-t border-primary-200 pt-6">
                  <p className="text-primary-900 font-semibold mb-4">
                    Ready for a similar commercial project?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="flex-1">
                      <Button variant="primary" size="lg" className="w-full">
                        🎯 Get Commercial Quote
                      </Button>
                    </Link>
                    <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex-1">
                      <Button variant="outline" size="lg" className="w-full">
                        📞 Call Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      <section className="py-16 bg-primary-50">
        <Container>
          <h2 className="text-3xl font-display font-bold text-center text-primary-900 mb-12">
            Why Commercial Clients Choose Ripple Roofing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Detailed Project Management</h3>
              <p className="text-primary-700">Dedicated project manager coordinates timelines, budgets, and communication to ensure minimal disruption to your business operations.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Commercial Expertise</h3>
              <p className="text-primary-700">Experience with multi-unit projects, flat roofs, metal panels, and complex coordinations across multiple properties.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">24/7 Emergency Support</h3>
              <p className="text-primary-700">Always available for emergency repairs, inspections, and maintenance to keep your properties protected.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Licensed & Insured</h3>
              <p className="text-primary-700">Fully licensed roofing contractor with comprehensive general liability and workers' compensation insurance.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Competitive Pricing</h3>
              <p className="text-primary-700">Volume discounts available for multi-property projects. Transparent pricing with detailed cost breakdowns.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Proven Track Record</h3>
              <p className="text-primary-700">500+ completed commercial projects with consistent quality, on-time delivery, and professional service.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Discuss Your Commercial Roofing Needs
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us for a comprehensive quote, project timeline, and detailed solution for your commercial property.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Request Commercial Quote
                </Button>
              </Link>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent-600">
                  Call {SITE_CONFIG.phone}
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
