import { FC } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { getAllPosts } from '@/lib/blog'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Storm Damage & Insurance Claims Hub | 24/7 Emergency Roofing',
  description: 'Complete guide to storm damage assessment, emergency repairs, and insurance claims. Get 24/7 emergency service in Central Texas.',
  keywords: 'storm damage roofing, hail damage, insurance claims, emergency roof repair, roof inspection, Texas storms',
  alternates: {
    canonical: 'https://rippleroofs.com/hubs/storm-damage'
  },
}

export default function StormDamageHub() {
  const allPosts = getAllPosts()
  
  const stormPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes('storm') || 
    post.title.toLowerCase().includes('hail') ||
    post.title.toLowerCase().includes('wind') ||
    post.title.toLowerCase().includes('weather') ||
    post.category === 'Storm Damage'
  )
  
  const insurancePosts = allPosts.filter(post => 
    post.title.toLowerCase().includes('insurance') || 
    post.title.toLowerCase().includes('claim') ||
    post.title.toLowerCase().includes('warranty')
  )
  
  const emergencyPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes('emergency') ||
    post.title.toLowerCase().includes('repair') ||
    post.title.toLowerCase().includes('leak')
  )

  const inspectionPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes('inspection') ||
    post.title.toLowerCase().includes('damage') ||
    post.title.toLowerCase().includes('assessment')
  )

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-700 via-primary-800 to-primary-900 text-white py-20">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-red-500 rounded-full mb-4">
              <span className="font-bold text-sm">🚨 EMERGENCY RESOURCES</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Storm Damage & Insurance Claims Hub
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Comprehensive guide to handling storm damage, filing insurance claims, and getting emergency repairs. 
              Available 24/7 for storm damage emergencies in Central Texas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contact">
                🚨 24/7 Emergency Service
              </Button>
              <Button variant="secondary" size="lg" href="/estimate">
                Free Damage Inspection
              </Button>
            </div>
            <div className="mt-6 p-4 bg-red-900/50 border border-red-400 rounded-lg">
              <p className="text-lg font-semibold">📞 Emergency Hotline: <a href="tel:5123660880" className="underline hover:text-accent-300">(512) 366-0880</a></p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Nav */}
      <section className="py-8 bg-primary-50 border-b border-primary-200">
        <Container>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <span className="font-semibold text-primary-700">Jump to:</span>
            <a href="#storm" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              ⛈️ Storm Damage
            </a>
            <a href="#insurance" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              📋 Insurance Claims
            </a>
            <a href="#emergency" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              🚨 Emergency Repairs
            </a>
            <a href="#inspection" className="px-4 py-2 bg-white rounded-lg hover:bg-accent-50 hover:text-accent-700 transition-colors shadow-sm">
              🔍 Inspections
            </a>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Storm Damage */}
            {stormPosts.length > 0 && (
              <div id="storm" className="scroll-mt-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                    ⛈️ Understanding Storm Damage
                  </h2>
                  <p className="text-lg text-primary-600">
                    Learn to identify hail damage, wind damage, and other storm-related roofing issues
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stormPosts.map((post) => (
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

            {/* Insurance */}
            {insurancePosts.length > 0 && (
              <div id="insurance" className="scroll-mt-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                    📋 Insurance Claims & Coverage
                  </h2>
                  <p className="text-lg text-primary-600">
                    Navigate the insurance claims process and maximize your coverage for storm damage
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {insurancePosts.map((post) => (
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

            {/* Emergency */}
            {emergencyPosts.length > 0 && (
              <div id="emergency" className="scroll-mt-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                    🚨 Emergency Repairs & Response
                  </h2>
                  <p className="text-lg text-primary-600">
                    Immediate steps to take after storm damage and how to get emergency roofing services
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {emergencyPosts.map((post) => (
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

            {/* Inspection */}
            {inspectionPosts.length > 0 && (
              <div id="inspection" className="scroll-mt-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                    🔍 Damage Inspections & Assessment
                  </h2>
                  <p className="text-lg text-primary-600">
                    Professional roof inspections to document damage and support your insurance claim
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {inspectionPosts.map((post) => (
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
      <section className="py-16 bg-gradient-to-r from-red-700 to-primary-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Storm Damage? We're Here 24/7</h2>
            <p className="text-xl text-primary-100 mb-8">Fast response times for emergency repairs and free damage inspections throughout Central Texas</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/contact">🚨 Emergency Service</Button>
              <Button variant="secondary" size="lg" href="tel:5123660880">📞 Call: (512) 366-0880</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
