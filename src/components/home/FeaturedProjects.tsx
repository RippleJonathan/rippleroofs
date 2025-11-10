'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { PROJECTS } from '@/lib/projects'

export const FeaturedProjects: FC = () => {
  // Get 6 featured projects (mix of metal and shingle)
  const featuredProjects = [
    PROJECTS[0], // Metal roof Austin
    PROJECTS[3], // Shingle Hutto
    PROJECTS[1], // Metal Round Rock
    PROJECTS[4], // Shingle Pflugerville
    PROJECTS[2], // Metal Austin 2
    PROJECTS[6], // Shingle Georgetown
  ]

  return (
    <section className="py-20 bg-primary-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-lg text-primary-700">
            See the quality craftsmanship and attention to detail that makes us Central Texas&apos; 
            trusted roofing contractor. Every project showcases our commitment to excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
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
                <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-primary-600 mb-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-sm">{project.location}</span>
                </div>
                <p className="text-primary-700 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/projects">
            <Button variant="primary" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
