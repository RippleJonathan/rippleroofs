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
              See the quality craftsmanship that has made us Central Texas&apos;s trusted roofing contractor.
              From standing seam metal roofs to Class 4 shingle installations, every project showcases our commitment to excellence.
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
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-primary-100">
                    <Image
                      src={project.photos[0]}
                      alt={`${project.title} in ${project.location}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {project.photos.length > 1 && (
                      <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        +{project.photos.length - 1} photos
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-primary-900 mb-2 leading-tight">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-2 text-primary-600 mb-3">
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-sm">
                        {project.neighborhood ? `${project.neighborhood}, ` : ''}{project.location}
                      </span>
                    </div>
                    <p className="text-primary-700 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <span className="text-primary-600">{project.service}</span>
                        {project.insuranceCarrier && (
                          <span className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                            {project.insuranceCarrier}
                          </span>
                        )}
                      </div>
                      {project.year && (
                        <span className="text-primary-500">{project.year}</span>
                      )}
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-accent-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      View project details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>

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
    </main>
  )
}
