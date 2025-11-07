import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'

// Sample projects - can be moved to constants or fetched from CMS
const FEATURED_PROJECTS = [
  {
    id: '1',
    title: 'Modern Residential Roof Replacement',
    category: 'Residential',
    image: '/images/hero/placeholder.svg',
    location: 'Austin, TX',
  },
  {
    id: '2',
    title: 'Commercial Property Roof Restoration',
    category: 'Commercial',
    image: '/images/hero/placeholder.svg',
    location: 'Round Rock, TX',
  },
  {
    id: '3',
    title: 'Emergency Storm Damage Repair',
    category: 'Emergency',
    image: '/images/hero/placeholder.svg',
    location: 'Georgetown, TX',
  },
  {
    id: '4',
    title: 'New Construction Roofing',
    category: 'Residential',
    image: '/images/hero/placeholder.svg',
    location: 'San Antonio, TX',
  },
]

export const ProjectGalleryPreview: FC = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-primary-50 to-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="heading-2 text-primary-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            See the quality craftsmanship we deliver to homes and businesses across Central Texas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-primary-100"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="text-accent-500 text-sm font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-primary-200 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <Link href="/projects">
            <button className="btn btn-secondary btn-lg">
              View All Projects
            </button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
