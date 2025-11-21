import { FC } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { getAllPosts } from '@/lib/blog'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Austin Roofing Guide: Complete Resource Hub | Ripple Roofing',
  description: 'Your complete resource for Austin roofing: costs, contractors, materials, insurance, and neighborhood-specific advice. Expert guides for Round Rock, Georgetown, Cedar Park, and more.',
  keywords: 'Austin roofing, Austin roofer, roofing cost Austin, roofing contractors Austin, Round Rock roofing, Georgetown roofing',
  alternates: {
    canonical: 'https://rippleroofs.com/hubs/austin-roofing'
  },
  openGraph: {
    title: 'Austin Roofing Guide: Complete Resource Hub',
    description: 'Everything Austin homeowners need to know about roofing - costs, materials, contractors, and more.',
    type: 'website',
  },
}

export default function AustinRoofingHub() {
  const allPosts = getAllPosts()
  
  // Filter posts by Austin-related content
  const austinPosts = allPosts.filter(post => 
    post.tags.some(tag => 
      ['Austin', 'Round Rock', 'Georgetown', 'Cedar Park', 'Pflugerville', 'Leander', 'Lakeway', 'Bee Cave'].includes(tag)
    ) || post.category === 'Location Guides'
  )
  
  const costPosts = austinPosts.filter(post => 
    post.title.toLowerCase().includes('cost') || 
    post.title.toLowerCase().includes('price') ||
    post.title.toLowerCase().includes('financing')
  )
  
  const materialPosts = austinPosts.filter(post => 
    post.title.toLowerCase().includes('material') || 
    post.title.toLowerCase().includes('shingle') ||
    post.title.toLowerCase().includes('metal')
  )
  
  const locationPosts = austinPosts.filter(post => 
    post.category === 'Location Guides' ||
    post.tags.some(tag => ['Round Rock', 'Georgetown', 'Cedar Park', 'Pflugerville', 'Leander'].includes(tag))
  )
  
  const stormPosts = austinPosts.filter(post => 
    post.title.toLowerCase().includes('storm') || 
    post.title.toLowerCase().includes('hail') ||
    post.title.toLowerCase().includes('insurance') ||
    post.title.toLowerCase().includes('damage')
  )

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700 text-white py-20">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent-500 rounded-full mb-4">
              <span className="font-bold text-sm">📚 RESOURCE HUB</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Austin Area Roofing Guide
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Everything Central Texas homeowners need to know about roofing—from costs and materials 
              to contractors and insurance claims. Expert guides for Austin, Round Rock, Georgetown, 
              Cedar Park, Pflugerville, Leander, and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/estimate">
                Get Free Estimate
              </Button>
              <Button variant="secondary" size="lg" href="/contact">
                Schedule Inspection
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-primary-50 border-b border-primary-200">
        <Container>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <span className="font-semibold text-primary-700">Jump to:</span>
            <a href="#costs" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              💰 Costs & Pricing
            </a>
            <a href="#materials" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              🏗️ Materials
            </a>
            <a href="#locations" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              📍 Locations
            </a>
            <a href="#storm" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              ⛈️ Storm & Insurance
            </a>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Cost & Pricing Section */}
            <div id="costs" className="scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                  💰 Roofing Costs & Pricing
                </h2>
                <p className="text-lg text-primary-600">
                  Understand what you'll pay for roof replacement, repairs, and upgrades in Central Texas
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {costPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-primary-100 hover:border-accent-500"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-primary-600 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Materials Section */}
            <div id="materials" className="scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                  🏗️ Roofing Materials & Options
                </h2>
                <p className="text-lg text-primary-600">
                  Compare materials, understand performance in Texas heat, and choose the best option for your home
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materialPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-primary-100 hover:border-accent-500"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-primary-600 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/resources/material-comparison-tool" className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold">
                  Try Our Interactive Material Comparison Tool →
                </Link>
              </div>
            </div>

            {/* Locations Section */}
            <div id="locations" className="scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                  📍 Neighborhood & City Guides
                </h2>
                <p className="text-lg text-primary-600">
                  Local roofing advice tailored to your specific Central Texas community
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {locationPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-primary-100 hover:border-accent-500"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-primary-600 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Storm & Insurance Section */}
            <div id="storm" className="scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                  ⛈️ Storm Damage & Insurance
                </h2>
                <p className="text-lg text-primary-600">
                  Navigate insurance claims, handle emergency repairs, and protect your home from Texas storms
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stormPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-primary-100 hover:border-accent-500"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-primary-600 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to Start Your Roofing Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a free inspection and quote from Central Texas's CertainTeed Master certified roofing experts
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/estimate">
                Get Free Estimate
              </Button>
              <Button variant="secondary" size="lg" href="tel:5127635277">
                Call: (512) 763-5277
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
