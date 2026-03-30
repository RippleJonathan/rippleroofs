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

      {/* Editorial Content — Unique standalone resource for Google indexing */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">

            {/* Stats block */}
            <div className="mb-14">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Texas Storm Damage: What Every Homeowner Should Know</h2>
              <p className="text-lg text-gray-700 mb-6">
                Central Texas sits in the heart of Tornado Alley, directly in the path of the severe weather systems that sweep north from the Gulf of Mexico each spring and fall. The Austin-Round Rock metro averages more than <strong>60 days of thunderstorm activity per year</strong>, with hail being the single largest cause of residential roof damage in Texas. In 2023, Texas homeowners filed over <strong>$3.5 billion in hail-damage insurance claims</strong> — more than any other state.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50 rounded-2xl p-6">
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-primary-700">60+</p>
                  <p className="text-sm text-gray-600 mt-1">thunderstorm days per year in Central TX</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-primary-700">$3.5B</p>
                  <p className="text-sm text-gray-600 mt-1">in TX hail-damage claims annually</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-primary-700">72 hrs</p>
                  <p className="text-sm text-gray-600 mt-1">recommended window to inspect after a storm</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-primary-700">1 yr</p>
                  <p className="text-sm text-gray-600 mt-1">typical TX insurance claim deadline from storm date</p>
                </div>
              </div>
            </div>

            {/* Step-by-step guide */}
            <div className="mb-14">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">What To Do Immediately After a Storm</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold text-lg">1</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Stay Safe — Don't Access the Roof Yourself</h3>
                    <p className="text-gray-700">After wind, hail, or heavy rain, structural damage may not be visible from the ground. Wet roofing materials are extremely slippery. Call a licensed contractor to perform the inspection rather than climbing up yourself.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold text-lg">2</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Document Everything Within 72 Hours</h3>
                    <p className="text-gray-700">Photograph damage to your siding, gutters, HVAC units, and any interior water intrusion. Date-stamp all photos. Insurance adjusters require proof that damage occurred during the storm event, not from previous wear-and-tear.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold text-lg">3</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Apply Emergency Protection Before Filing</h3>
                    <p className="text-gray-700">If there is an active leak or exposed decking, a temporary roof tarp should be applied before the next rain event. Most insurance policies require homeowners to take reasonable steps to prevent further damage — this protects your claim.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold text-lg">4</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Get a Roofing Contractor Inspection Before the Adjuster Arrives</h3>
                    <p className="text-gray-700">A qualified roofer can document granule loss, dented vents, cracked ridge caps, and bruised shingles that are easy for non-specialists to miss. Having an independent inspection report strengthens your claim and ensures the adjuster doesn't underestimate the scope of damage.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold text-lg">5</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">File Your Insurance Claim Promptly</h3>
                    <p className="text-gray-700">Texas law (TIC §542A) gives insurers 15 days to acknowledge your claim and 5 business days to accept or deny it after receiving all documentation. Most policies have a 1-year deadline from the date of loss to file — don't let that window close.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold text-lg">6</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Choose a Local, Licensed Contractor to Complete Repairs</h3>
                    <p className="text-gray-700">After a major storm, out-of-state "storm chasers" flood the area offering quick low-cost repairs. Always verify a contractor holds a Texas roofing registration, is properly insured, and has verifiable local references before signing any contract.</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Insurance section */}
            <div className="mb-14 bg-blue-50 rounded-2xl p-8">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Understanding Your Roof Insurance Claim in Texas</h2>
              <p className="text-gray-700 mb-4">
                Texas homeowner policies typically cover sudden storm damage from wind, hail, and lightning. However, damage caused by lack of maintenance, age-related deterioration, or improper installation is usually excluded. This distinction is critical when your adjuster is assessing your roof.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>ACV vs. RCV:</strong> Your policy may pay <em>actual cash value</em> (ACV — current market value minus depreciation) or <em>replacement cost value</em> (RCV — full replacement cost with no depreciation deducted). RCV policies pay out in two stages: the ACV amount upfront, then the <em>recoverable depreciation</em> once repairs are completed. Understanding which you have changes how you should approach your claim.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Class 4 impact-resistant shingles</strong> installed after a claim replacement may qualify you for a 20–30% homeowner insurance discount in Texas. Ask your contractor about CertainTeed Class 4 options — they can pay for themselves within a few policy renewal cycles.
              </p>
              <div className="border-t border-blue-200 pt-4">
                <p className="text-sm text-gray-500 italic">
                  <strong>Disclaimer:</strong> Ripple Roofing &amp; Construction is a licensed roofing contractor — we are not insurance professionals, public adjusters, or licensed insurance agents, and nothing on this page constitutes public adjusting or insurance advice. This content is provided for general informational purposes only. Every homeowner policy is different. Please contact your insurance agent or insurance company directly for guidance specific to your policy, coverage, and claim.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-4">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Storm Damage FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How can I tell if my roof has hail damage without going up there?</h3>
                  <p className="text-gray-700">Look for these ground-level signs: dented aluminum gutters or downspouts, cracked or bent gutter guards, damage to HVAC units or window screens, and dents in soft-metal flashing around your chimney or vents. If you see any of these, assume your shingles took a hit too.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How long do I have to file a storm damage claim in Texas?</h3>
                  <p className="text-gray-700">Most Texas homeowner insurance policies require you to file within <strong>1 year of the date of loss</strong>. Some policies are shorter (6 months). Check your declarations page, and don't delay — getting a free inspection right after a storm is the best way to know whether you have a claim worth filing.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Will a storm damage repair affect my insurance premiums?</h3>
                  <p className="text-gray-700">In Texas, a single weather-related claim typically does not increase your premiums or cause non-renewal. Weather claims are categorized as "Acts of God" and treated differently from at-fault claims. However, multiple claims within a short period may affect your policy terms — your insurer and agent can give you specifics.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Should I use the roofing contractor my insurance company recommends?</h3>
                  <p className="text-gray-700">You are not required to. Insurers may have preferred vendor programs, but you have the legal right to choose any licensed Texas contractor you trust. Choosing your own contractor — especially one who performs a thorough independent inspection before the adjuster visits — often results in a more complete claim payout.</p>
                </div>
              </div>
            </div>

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
