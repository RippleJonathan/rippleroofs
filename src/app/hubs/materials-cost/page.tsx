import { FC } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { getAllPosts } from '@/lib/blog'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Roofing Materials & Cost Guide Hub | Central Texas Pricing',
  description: 'Compare roofing materials, understand costs, and make informed decisions. Complete pricing guides for shingles, metal, tile, and more in Texas.',
  keywords: 'roofing materials, roofing cost, shingle prices, metal roof cost, roofing materials comparison, Texas roofing',
  alternates: {
    canonical: 'https://rippleroofs.com/hubs/materials-cost'
  },
}

export default function MaterialsCostHub() {
  const allPosts = getAllPosts()
  
  const materialPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes('material') || 
    post.title.toLowerCase().includes('shingle') ||
    post.title.toLowerCase().includes('metal') ||
    post.title.toLowerCase().includes('tile') ||
    post.category === 'Roofing Materials' ||
    post.category === 'Materials & Energy'
  )
  
  const costPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes('cost') || 
    post.title.toLowerCase().includes('price') ||
    post.title.toLowerCase().includes('financing') ||
    post.title.toLowerCase().includes('budget') ||
    post.category === 'Cost Guides' ||
    post.category === 'Cost Guide'
  )
  
  const comparisonPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes('vs') ||
    post.title.toLowerCase().includes('comparison') ||
    post.title.toLowerCase().includes('compare')
  )

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent-700 via-primary-800 to-primary-900 text-white py-20">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent-500 rounded-full mb-4">
              <span className="font-bold text-sm">📚 RESOURCE HUB</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Roofing Materials & Cost Guide
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Everything you need to compare materials, understand pricing, and budget for your roofing project. 
              From asphalt shingles to metal roofing, get expert insights on costs and performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/estimate">
                Get Instant Estimate
              </Button>
              <Button variant="secondary" size="lg" href="/resources/material-comparison-tool">
                Compare Materials
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Nav */}
      <section className="py-8 bg-primary-50 border-b border-primary-200">
        <Container>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <span className="font-semibold text-primary-700">Jump to:</span>
            <a href="#materials" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              🏗️ Materials
            </a>
            <a href="#costs" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              💰 Cost Guides
            </a>
            <a href="#comparisons" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              ⚖️ Comparisons
            </a>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Materials */}
            <div id="materials" className="scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                  🏗️ Roofing Materials Guides
                </h2>
                <p className="text-lg text-primary-600">
                  Understand the pros, cons, and performance of different roofing materials in Texas climate
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materialPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-primary-100 hover:border-accent-500">
                    <div className="relative h-48">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="p-5">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3">{post.category}</span>
                      <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-primary-600 line-clamp-2">{post.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Cost Guides */}
            <div id="costs" className="scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                  💰 Roofing Cost & Pricing Guides
                </h2>
                <p className="text-lg text-primary-600">
                  Real pricing data, budget planning, and financing options for Central Texas roofing projects
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {costPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-primary-100 hover:border-accent-500">
                    <div className="relative h-48">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="p-5">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3">{post.category}</span>
                      <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-primary-600 line-clamp-2">{post.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Comparisons */}
            {comparisonPosts.length > 0 && (
              <div id="comparisons" className="scroll-mt-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                    ⚖️ Material Comparisons
                  </h2>
                  <p className="text-lg text-primary-600">
                    Side-by-side comparisons to help you choose the best roofing material for your needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {comparisonPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-primary-100 hover:border-accent-500">
                      <div className="relative h-48">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
                      </div>
                      <div className="p-5">
                        <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3">{post.category}</span>
                        <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-primary-600 line-clamp-2">{post.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-accent-700 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Need Help Choosing Materials?</h2>
            <p className="text-xl text-primary-100 mb-8">Get expert recommendations and accurate pricing for your specific project</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/estimate">Get Free Estimate</Button>
              <Button variant="secondary" size="lg" href="/contact">Talk to Expert</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
