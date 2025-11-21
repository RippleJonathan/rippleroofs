import { FC } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { getAllPosts } from '@/lib/blog'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Metal Roofing Central Texas: Complete Guide, Costs & Benefits Hub',
  description: 'Everything you need to know about metal roofing in Central Texas. Compare costs, types, energy savings, and find expert metal roofing contractors in Round Rock, Austin, Georgetown, and Cedar Park.',
  keywords: 'metal roofing texas, standing seam metal roof, metal roof cost, metal roofing contractors, central texas metal roofing, metal vs shingles',
  alternates: {
    canonical: 'https://rippleroofs.com/hubs/metal-roofing'
  },
  openGraph: {
    title: 'Metal Roofing Central Texas: Complete Resource Hub',
    description: 'Complete guide to metal roofing costs, benefits, and installation in Central Texas.',
    url: 'https://rippleroofs.com/hubs/metal-roofing',
    siteName: 'Ripple Roofing',
    images: [{
      url: '/images/blog/roofing-materials-comparison.jpg',
      width: 1200,
      height: 630,
    }],
    type: 'website',
  }
}

export default function MetalRoofingHub() {
  const allPosts = getAllPosts()
  
  // Filter for metal roofing content
  const metalPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes('metal') ||
    post.tags.some(tag => tag.toLowerCase().includes('metal'))
  )
  
  // Cost & Pricing posts
  const costPosts = metalPosts.filter(post => 
    post.title.toLowerCase().includes('cost') || 
    post.title.toLowerCase().includes('price') ||
    post.title.toLowerCase().includes('roi') ||
    post.title.toLowerCase().includes('investment')
  )
  
  // Location-specific metal posts
  const locationPosts = metalPosts.filter(post => 
    post.category === 'Location Guides' ||
    post.tags.some(tag => 
      ['Austin', 'Round Rock', 'Georgetown', 'Cedar Park', 'Pflugerville', 'Leander', 'San Antonio'].includes(tag)
    )
  )
  
  // Types & Comparison posts
  const comparisonPosts = metalPosts.filter(post => 
    post.title.toLowerCase().includes('vs') ||
    post.title.toLowerCase().includes('comparison') ||
    post.title.toLowerCase().includes('compare') ||
    post.title.toLowerCase().includes('standing seam') ||
    post.title.toLowerCase().includes('types')
  )
  
  // Performance & Benefits posts
  const performancePosts = metalPosts.filter(post => 
    post.title.toLowerCase().includes('energy') ||
    post.title.toLowerCase().includes('hail') ||
    post.title.toLowerCase().includes('lifespan') ||
    post.title.toLowerCase().includes('benefits') ||
    post.title.toLowerCase().includes('performance') ||
    post.category === 'Materials & Energy'
  )

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700 text-white py-20">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent-500 rounded-full mb-4">
              <span className="font-bold text-sm">🏗️ PREMIUM ROOFING RESOURCE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Metal Roofing Central Texas Hub
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Your complete resource for metal roofing in Central Texas. Compare costs, explore types, understand energy savings, 
              and make an informed decision about metal roofing for your home. 50+ year lifespan, extreme durability, 
              and 20-30% energy savings await.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/estimate">
                Get Free Metal Roof Estimate
              </Button>
              <Button variant="secondary" size="lg" href="/resources/material-comparison-tool">
                Compare Metal vs Shingles
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent-300">50-70</div>
                <div className="text-sm text-primary-200">Year Lifespan</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent-300">20-30%</div>
                <div className="text-sm text-primary-200">Energy Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent-300">140+</div>
                <div className="text-sm text-primary-200">MPH Wind Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent-300">100%</div>
                <div className="text-sm text-primary-200">Recyclable</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Nav */}
      <section className="py-8 bg-primary-50 border-b border-primary-200">
        <Container>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <span className="font-semibold text-primary-700">Jump to:</span>
            <a href="#costs" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              💰 Costs & Pricing
            </a>
            <a href="#locations" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              📍 By Location
            </a>
            <a href="#types" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              🏗️ Types & Comparison
            </a>
            <a href="#performance" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              ⚡ Performance & Benefits
            </a>
          </div>
        </Container>
      </section>

      {/* Why Metal Roofing in Texas */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-6 text-center">
              Why Metal Roofing Makes Sense in Central Texas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="text-3xl mb-3">🔥</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Extreme Heat Resistance</h3>
                <p className="text-primary-700">
                  Metal roofs reflect 70% of solar energy, keeping your home cooler and cutting AC costs by 20-30% 
                  in brutal Texas summers.
                </p>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="text-3xl mb-3">⛈️</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Superior Hail Protection</h3>
                <p className="text-primary-700">
                  While asphalt shingles fail in Central Texas hailstorms, metal roofs dent but rarely leak or require 
                  replacement. Built for storm alley.
                </p>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="text-3xl mb-3">💪</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Exceptional Longevity</h3>
                <p className="text-primary-700">
                  50-70 year lifespan means you'll never re-roof again. Outlasts 2-3 asphalt roof replacements, 
                  saving thousands long-term.
                </p>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="text-3xl mb-3">💵</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Lower Lifetime Cost</h3>
                <p className="text-primary-700">
                  Despite higher upfront cost, metal roofing costs less over 30+ years. Add energy savings and 
                  insurance discounts for maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50">
        <Container>
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Costs & Pricing */}
            {costPosts.length > 0 && (
              <div id="costs" className="scroll-mt-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                    💰 Metal Roofing Costs & Pricing
                  </h2>
                  <p className="text-lg text-primary-600">
                    Understand what you'll pay for metal roofing in Central Texas, financing options, and lifetime ROI analysis
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
            )}

            {/* Location Guides */}
            {locationPosts.length > 0 && (
              <div id="locations" className="scroll-mt-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                    📍 Metal Roofing by Location
                  </h2>
                  <p className="text-lg text-primary-600">
                    City-specific metal roofing guides for Round Rock, Austin, Georgetown, Cedar Park, and surrounding areas
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {locationPosts.map((post) => (
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

            {/* Types & Comparison */}
            {comparisonPosts.length > 0 && (
              <div id="types" className="scroll-mt-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                    🏗️ Metal Roofing Types & Comparisons
                  </h2>
                  <p className="text-lg text-primary-600">
                    Compare standing seam, exposed fastener, metal shingles, and metal vs asphalt to make the right choice
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

            {/* Performance & Benefits */}
            {performancePosts.length > 0 && (
              <div id="performance" className="scroll-mt-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                    ⚡ Performance & Benefits
                  </h2>
                  <p className="text-lg text-primary-600">
                    Learn about energy savings, hail resistance, lifespan expectations, and why metal roofing excels in Texas
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {performancePosts.map((post) => (
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

      {/* Metal Roofing Quick Facts */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8 text-center">
              Metal Roofing Quick Reference
            </h2>
            <div className="bg-primary-50 rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">Cost Ranges (Installed)</h3>
                  <ul className="space-y-2 text-primary-700">
                    <li className="flex justify-between"><span>Corrugated/Agricultural:</span> <strong>$9-$14/sf</strong></li>
                    <li className="flex justify-between"><span>Exposed Fastener:</span> <strong>$10-$15/sf</strong></li>
                    <li className="flex justify-between"><span>Metal Shingles:</span> <strong>$12-$18/sf</strong></li>
                    <li className="flex justify-between"><span>Standing Seam:</span> <strong>$14-$22/sf</strong></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">Lifespan Expectations</h3>
                  <ul className="space-y-2 text-primary-700">
                    <li className="flex justify-between"><span>Corrugated Steel:</span> <strong>30-40 years</strong></li>
                    <li className="flex justify-between"><span>Exposed Fastener:</span> <strong>30-40 years</strong></li>
                    <li className="flex justify-between"><span>Stone-Coated Metal:</span> <strong>40-60 years</strong></li>
                    <li className="flex justify-between"><span>Standing Seam:</span> <strong>50-70 years</strong></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-primary-200 pt-6">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Energy Savings</h3>
                <p className="text-primary-700 mb-3">
                  Metal roofs with cool roof coatings reflect 70% of solar energy, reducing attic temperatures by 
                  20-30°F and cutting cooling costs by 20-30% in Central Texas summers.
                </p>
                <p className="text-primary-700">
                  <strong>Annual savings:</strong> $400-$800/year on average Central Texas home
                </p>
              </div>
              <div className="border-t border-primary-200 pt-6">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Insurance Discounts</h3>
                <p className="text-primary-700">
                  Many Texas insurers offer 5-35% discounts for metal roofing due to superior wind, fire, and hail 
                  resistance. Class 4 impact-rated metal can save $500-$1,200/year.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-accent-700 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Invest in a Metal Roof?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a free, no-pressure estimate for your Central Texas home. Discover how much you'll save with metal roofing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/estimate">Get Free Metal Roof Estimate</Button>
              <Button variant="secondary" size="lg" href="/contact">Schedule Consultation</Button>
            </div>
            <p className="mt-6 text-primary-200">
              📞 Questions? Call us: <a href="tel:5123660880" className="underline hover:text-accent-300">(512) 366-0880</a>
            </p>
          </div>
        </Container>
      </section>
    </main>
  )
}
