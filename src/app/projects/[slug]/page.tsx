import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { PROJECTS } from '@/lib/projects'
import { SITE_CONFIG } from '@/lib/constants'

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.id === params.slug)
  if (!project) return {}

  const locationStr = project.neighborhood
    ? `${project.neighborhood}, ${project.location}`
    : project.location

  return {
    title: `${project.title} | Ripple Roofing`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: `${SITE_CONFIG.url}${project.photos[0]}` }],
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.id === params.slug)
  if (!project) notFound()

  const relatedProjects = PROJECTS.filter(
    (p) => p.id !== project.id && p.category === project.category
  ).slice(0, 3)

  const locationStr = project.neighborhood
    ? `${project.neighborhood}, ${project.location}`
    : project.location

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.title,
    description: project.description,
    image: `${SITE_CONFIG.url}${project.photos[0]}`,
    datePublished: project.year ? `${project.year}-06-01` : undefined,
    author: {
      '@type': 'Organization',
      name: 'Ripple Roofing & Construction',
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ripple Roofing & Construction',
      url: SITE_CONFIG.url,
    },
    about: {
      '@type': 'Service',
      name: project.category,
      serviceType: project.service,
      areaServed: locationStr,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Ripple Roofing & Construction',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Round Rock',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
      },
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16">
        <Container>
          <div className="flex items-center gap-2 text-primary-200 text-sm mb-4">
            <Link href="/projects" className="hover:text-white transition-colors">
              Our Projects
            </Link>
            <span>/</span>
            <span>{project.category}</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-block bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {project.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-primary-100 mb-6">{project.description}</p>
            <div className="flex items-center gap-2 text-primary-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">{locationStr}</span>
              {project.year && <span className="ml-4">Completed {project.year}</span>}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Photo + Details */}
            <div className="lg:col-span-1">
              {/* Primary photo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-3">
                <Image
                  src={project.photos[0]}
                  alt={`${project.title} — ${locationStr}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
              {/* Additional photos */}
              {project.photos.length > 1 && (
                <div className={`grid gap-3 mb-8 ${project.photos.length === 2 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {project.photos.slice(1).map((photo, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow">
                      <Image
                        src={photo}
                        alt={`${project.title} — photo ${i + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 20vw"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Project Details Card */}
              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <h2 className="text-lg font-bold text-primary-900 mb-4">Project Details</h2>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Location</dt>
                    <dd className="text-primary-900 font-medium">{locationStr}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Service</dt>
                    <dd className="text-primary-900 font-medium">{project.service}</dd>
                  </div>
                  {project.squareFeet && (
                    <div>
                      <dt className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Roof Size</dt>
                      <dd className="text-primary-900 font-medium">{project.squareFeet}</dd>
                    </div>
                  )}
                  {project.material && (
                    <div>
                      <dt className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Material</dt>
                      <dd className="text-primary-900 font-medium">{project.material}</dd>
                    </div>
                  )}
                  {project.insuranceCarrier && (
                    <div>
                      <dt className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Insurance</dt>
                      <dd className="text-primary-900 font-medium">{project.insuranceCarrier}</dd>
                    </div>
                  )}
                  {project.year && (
                    <div>
                      <dt className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Completed</dt>
                      <dd className="text-primary-900 font-medium">{project.year}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* CTA */}
              <div className="mt-6 p-6 bg-accent-50 rounded-2xl border border-accent-200">
                <p className="text-primary-900 font-semibold mb-3">Want a similar project?</p>
                <Link href="/estimate" className="block mb-3">
                  <Button variant="primary" size="lg" className="w-full">
                    Get Free Estimate
                  </Button>
                </Link>
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    Call {SITE_CONFIG.phone}
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Story */}
            <div className="lg:col-span-2">
              {/* Challenge / Result */}
              {(project.challenge || project.result) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {project.challenge && (
                    <div className="bg-primary-50 rounded-xl p-5 border-l-4 border-primary-400">
                      <div className="text-sm font-bold text-primary-600 uppercase tracking-wide mb-2">The Challenge</div>
                      <p className="text-primary-800 leading-relaxed">{project.challenge}</p>
                    </div>
                  )}
                  {project.result && (
                    <div className="bg-accent-50 rounded-xl p-5 border-l-4 border-accent-500">
                      <div className="text-sm font-bold text-accent-700 uppercase tracking-wide mb-2">The Result</div>
                      <p className="text-primary-800 leading-relaxed">{project.result}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Long Description */}
              {project.longDescription && (
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-primary-900 mb-4">About This Project</h2>
                  <div className="prose prose-primary max-w-none">
                    {project.longDescription.split('\n\n').map((para, i) => (
                      <p key={i} className="text-primary-700 leading-relaxed mb-4">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-primary-900 mb-4">Project Highlights</h2>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-primary-800 font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Service Link */}
              {project.relatedServiceSlug && (
                <div className="bg-primary-900 text-white rounded-2xl p-6">
                  <p className="text-primary-200 text-sm font-semibold uppercase tracking-wide mb-2">Learn More</p>
                  <h3 className="text-xl font-bold mb-3">
                    Interested in {project.category} for Your Home?
                  </h3>
                  <p className="text-primary-200 mb-4">
                    See our full service details, pricing, and what sets us apart.
                  </p>
                  <Link href={`/services/${project.relatedServiceSlug}`}>
                    <Button variant="secondary" size="lg">
                      View {project.category} Service
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-primary-50">
          <Container>
            <h2 className="text-2xl font-bold text-primary-900 mb-8">More {project.category} Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  href={`/projects/${related.id}`}
                  className="group bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={related.photos[0]}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-primary-900 mb-1 leading-tight">{related.title}</h3>
                    <p className="text-sm text-primary-600">
                      {related.neighborhood ? `${related.neighborhood}, ` : ''}{related.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/projects">
                <Button variant="outline" size="lg">
                  View All Projects
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      )}
    </main>
  )
}
