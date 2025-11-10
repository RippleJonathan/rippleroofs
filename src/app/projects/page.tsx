'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { PROJECTS, PROJECT_CATEGORIES, PROJECT_LOCATIONS } from '@/lib/projects'
import { SITE_CONFIG } from '@/lib/constants'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects')
  const [selectedLocation, setSelectedLocation] = useState<string>('All Locations')
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null)

  const filteredProjects = PROJECTS.filter((project) => {
    const categoryMatch = selectedCategory === 'All Projects' || project.category === selectedCategory
    const locationMatch = selectedLocation === 'All Locations' || project.location.includes(selectedLocation)
    return categoryMatch && locationMatch
  })

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Roofing Projects
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              See the quality craftsmanship that has made us Central Texas's trusted roofing contractor. 
              From metal roofs to shingle installations, every project showcases our commitment to excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Start Your Project
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

      {/* Filters */}
      <section className="py-8 border-b border-primary-100 bg-primary-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-accent-500 text-white shadow-lg'
                      : 'bg-white text-primary-900 hover:bg-primary-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Location Filter */}
            <div className="flex items-center gap-3">
              <label className="text-primary-900 font-semibold">Location:</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 rounded-lg border border-primary-300 bg-white text-primary-900 font-semibold focus:outline-none focus:ring-2 focus:ring-accent-500"
              >
                {PROJECT_LOCATIONS.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center text-primary-600">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <Container>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-2">No projects found</h3>
              <p className="text-primary-600 mb-6">Try adjusting your filters</p>
              <Button
                variant="primary"
                onClick={() => {
                  setSelectedCategory('All Projects')
                  setSelectedLocation('All Locations')
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
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
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
                    />
                    <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                />
                <div className="absolute top-4 left-4 bg-accent-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
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
                      <div className="text-primary-700 leading-relaxed">{selectedProject.description}</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="border-t border-primary-200 pt-6">
                  <p className="text-primary-900 font-semibold mb-4">
                    Ready for a similar project?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="flex-1">
                      <Button variant="primary" size="lg" className="w-full">
                        Get Free Quote
                      </Button>
                    </Link>
                    <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex-1">
                      <Button variant="outline" size="lg" className="w-full">
                        Call {SITE_CONFIG.phone}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Your Roofing Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of satisfied Central Texas homeowners. Get your free inspection and detailed quote today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Schedule Free Inspection
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Roofing Projects - Ripple Roofing & Construction',
            description: 'View our completed roofing projects across Central Texas including metal roofs and shingle installations.',
            url: `${SITE_CONFIG.url}/projects`,
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: PROJECTS.length,
              itemListElement: PROJECTS.map((project, index) => ({
                '@type': 'ImageObject',
                position: index + 1,
                name: project.title,
                description: project.description,
                contentLocation: {
                  '@type': 'Place',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: project.location.split(',')[0],
                    addressRegion: 'TX',
                  },
                },
              })),
            },
          }),
        }}
      />
    </main>
  )
}
