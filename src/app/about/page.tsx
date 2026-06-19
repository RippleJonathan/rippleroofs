import { FC } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Ripple Roofing | CertainTeed Premier Roofer in Round Rock, TX',
  description:
    'Navy veteran-owned roofing company in Round Rock, TX. One of fewer than 3% of contractors to hold CertainTeed ShingleMaster Premier certification. Honest insurance claims, real advocacy — no deductible waiving, ever.',
  keywords:
    'about Ripple Roofing, Round Rock roofing company, CertainTeed ShingleMaster Premier, owner-operated roofer Central Texas, roof insurance claim advocate Texas',
  openGraph: {
    title: 'About Ripple Roofing & Construction | Round Rock, TX',
    description:
      'Owner-operated roofing company founded in 2024. CertainTeed ShingleMaster Premier certified. Real insurance claim advocacy. No deductible waiving — ever.',
  },
  alternates: {
    canonical: 'https://rippleroofs.com/about',
  },
}

const AboutPage: FC = () => {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative h-[500px] bg-primary-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Ripple Roofing team at work on a Central Texas roof"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/70" />
        </div>
        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Owner-Operated. No Shortcuts.
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Ripple Roofing & Construction was founded in Round Rock in 2024 because Central Texas homeowners
              deserved a roofing company where the owner actually shows up — and actually cares about getting it right.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contact">Get a Free Inspection</Button>
              <Button variant="secondary" size="lg" href={`tel:${SITE_CONFIG.phoneRaw}`}>
                Call {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2024</div>
              <div className="text-white/90">Founded in Round Rock</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/90">Crew Members Network</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3 of 3</div>
              <div className="text-white/90">CertainTeed Premier Level</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Emergency Response</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-accent-600 font-semibold uppercase tracking-wide text-sm mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">
                Why Ripple Roofing Exists
              </h2>
              <div className="space-y-5 text-primary-700 leading-relaxed">
                <p>
                  Before founding Ripple Roofing, Jonathan spent years running operations for a corporate roofing company.
                  He was good at it — but the longer he did it, the more clearly he saw the problem. Corporate roofing
                  operations are structured to move volume. The owner isn't on the job. The customer isn't a person,
                  they're a ticket number. And quality control suffers when nobody with real skin in the game is paying attention.
                </p>
                <p>
                  He believed the owner needed to be directly involved — in customer satisfaction, in workmanship, in
                  standing behind the work. So in January 2024, he started Ripple Roofing & Construction in Round Rock,
                  Texas. The company he wished existed when he was on the customer side of the conversation.
                </p>
                <p>
                  Jonathan served in the U.S. Navy before relocating to Central Texas to attend Central Texas College
                  and later Texas A&M University in Killeen, where he graduated. He's called Central Texas home for
                  over 14 years. This is his community — his neighbors are his customers, and that changes how you
                  approach the work.
                </p>
                <p>
                  He built Ripple Roofing with something else in mind, too: his wife and three children. He wants
                  them to see firsthand what it looks like to build something with integrity — that when you identify
                  a problem and believe you can solve it better, you go do it.
                </p>
              </div>
            </div>

            {/* Name Story Callout */}
            <div className="space-y-6">
              <div className="bg-primary-50 rounded-2xl p-8 border-l-4 border-accent-500">
                <p className="text-accent-600 font-semibold uppercase tracking-wide text-sm mb-3">The Name</p>
                <h3 className="text-xl font-bold text-primary-900 mb-4">How "Ripple Roofing" Got Its Name</h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  It took over 100 attempts. Every name Jonathan came up with — every creative combination he
                  researched — was already taken. He wanted something unique, something that couldn't be confused
                  with anyone else.
                </p>
                <p className="text-primary-700 leading-relaxed mb-4">
                  Eventually he started writing random words next to "Roofing" and seeing what looked right. He
                  narrowed it down to three options and put it to his family and friends. Ripple Roofing won.
                </p>
                <p className="text-primary-700 leading-relaxed">
                  The "& Construction" came shortly after — because even from day one, the vision was never
                  limited to just roofing.
                </p>
              </div>

              <div className="bg-primary-900 text-white rounded-2xl p-8">
                <p className="text-primary-200 font-semibold uppercase tracking-wide text-sm mb-3">Our Reach</p>
                <h3 className="text-xl font-bold mb-4">Locally Rooted, Regionally Serving</h3>
                <p className="text-primary-200 leading-relaxed mb-4">
                  We're headquartered in Round Rock and serve the greater Central Texas region — from Georgetown
                  and Cedar Park to San Antonio, Temple, and beyond.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {['Round Rock', 'Austin', 'Georgetown', 'Cedar Park', 'Leander', 'Pflugerville', 'Hutto', 'Taylor', 'Killeen', 'Temple', 'San Antonio', 'San Marcos'].map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                      <span className="text-primary-200">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Insurance Ethics Section */}
      <section className="py-20 bg-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent-600 font-semibold uppercase tracking-wide text-sm mb-3">Our Position</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
                The Truth About Roof Insurance Claims in Texas
              </h2>
              <p className="text-xl text-primary-600">
                Most homeowners don't know what they're walking into. We do — and we'll tell you straight.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">Deductible Waiving Is Illegal — and a Warning Sign</h3>
                <p className="text-primary-700 leading-relaxed">
                  If a contractor offers to waive or reduce your deductible, they're breaking Texas law — and
                  almost certainly cutting corners somewhere else to make up the difference. We will never
                  offer to waive a deductible. Your deductible exists; we work within it honestly.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">Insurance Adjusters Work for the Insurance Company</h3>
                <p className="text-primary-700 leading-relaxed">
                  Not all adjusters act in bad faith — but they are trained to minimize payouts. A homeowner
                  who lets an adjuster inspect their roof without an advocate present often leaves money on
                  the table. We document everything before the adjuster arrives and make sure the full scope
                  of damage is captured.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">Corner-Cutting Is More Common Than You Think</h3>
                <p className="text-primary-700 leading-relaxed">
                  Leaving old felt under new shingles. Swapping specified materials for cheaper alternatives
                  without telling the homeowner. Using the minimum nail count. These shortcuts are widespread
                  in the industry and invisible until the roof fails. We don't do them.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">Your Only Out-of-Pocket Should Be Your Deductible</h3>
                <p className="text-primary-700 leading-relaxed">
                  When the damage is documented correctly and the scope is written accurately, most homeowners
                  with RCV (replacement cost value) coverage pay only their deductible. We handle the
                  documentation, the adjuster meetings, and the supplemental claims when a payout comes up short.
                </p>
              </div>
            </div>

            <div className="bg-accent-600 text-white rounded-2xl p-8 text-center">
              <p className="text-xl font-semibold mb-2">
                Thorough documentation before the adjuster arrives means the full scope of damage is on record — not just what's easiest to approve.
              </p>
              <p className="text-white/80">
                If you've already received an adjuster's estimate, we'll review it for free before you sign anything.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Credentials */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-600 font-semibold uppercase tracking-wide text-sm mb-3">Credentials</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">
                CertainTeed ShingleMaster Premier: The Highest Level
              </h2>
              <div className="space-y-5 text-primary-700 leading-relaxed">
                <p>
                  CertainTeed's ShingleMaster certification has three levels. Premier is the top. It's not
                  something every contractor can put on a business card — earning it requires passing multiple
                  technical examinations, demonstrating consistent installation standards, and maintaining
                  ongoing performance requirements to keep it.
                </p>
                <p>
                  Most roofing contractors in Central Texas are not certified at this level. Many aren't
                  certified at all. The certification matters because CertainTeed backs it: Premier-certified
                  contractors can offer enhanced warranty coverage — including the SureStart PLUS warranty —
                  that uncertified contractors simply cannot provide.
                </p>
                <p>
                  We're also fully licensed and insured with general liability and workers' compensation
                  coverage. Before any contractor gets on your roof, you should verify both.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-primary-50 rounded-2xl p-7 flex items-start gap-5">
                <div className="w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-1">CertainTeed ShingleMaster Premier</h3>
                  <p className="text-primary-600 text-sm">Highest of three certification levels. Multiple exams required. Ongoing standards to maintain.</p>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-7 flex items-start gap-5">
                <div className="w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-1">Fully Licensed & Insured</h3>
                  <p className="text-primary-600 text-sm">General liability and workers' compensation coverage on every job. Verifiable on request.</p>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-7 flex items-start gap-5">
                <div className="w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-1">Texas Registered Roofing Contractor</h3>
                  <p className="text-primary-600 text-sm">Registered and compliant with Texas state roofing contractor requirements.</p>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-7 flex items-start gap-5">
                <div className="w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-1">24/7 Emergency Response</h3>
                  <p className="text-primary-600 text-sm">Storms don't wait for business hours. Neither do we.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How We Operate */}
      <section className="py-20 bg-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-accent-600 font-semibold uppercase tracking-wide text-sm mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
              Quality Control on Every Job
            </h2>
            <p className="text-xl text-primary-600">
              Ripple Roofing runs lean by design — experienced crews, strong oversight, and consistent standards
              from the first inspection to the final walkthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="text-5xl font-bold text-accent-500 mb-3">50+</div>
              <h3 className="text-lg font-bold text-primary-900 mb-3">Experienced Crew Network</h3>
              <p className="text-primary-600">
                Every trade is handled by crews we've worked with directly and vetted firsthand.
                When you hire Ripple Roofing, you get experienced installers — not whoever was
                available this week.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-3">Leadership Oversight</h3>
              <p className="text-primary-600">
                Leadership is involved at every key stage — inspection, scope, installation, and final
                sign-off. Quality isn't delegated away and forgotten. The standard that earns a
                CertainTeed Premier certification gets applied on every job, regardless of size.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-3">Built to Scale</h3>
              <p className="text-primary-600">
                After a major storm event, many contractors can't handle the volume. Our crew network
                scales to meet demand without compromising the installation standards and quality
                controls we hold every project to.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <p className="text-accent-600 font-semibold uppercase tracking-wide text-sm mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-accent-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Responsibility',
                description: "We own the outcome. If something isn't right, we fix it — no hand-wringing, no excuses. That accountability starts at the top and runs through every crew member on every job.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
              },
              {
                title: 'Integrity',
                description: "We don't waive deductibles. We don't cut corners on materials. We don't tell you what you want to hear if the truth is different. Straight answers, always.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                ),
              },
              {
                title: 'Professionalism',
                description: "Clean job sites. Clear communication. Permits pulled. Inspections passed. Every project is run the way it should be, not the way that's fastest.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
              },
              {
                title: 'Performance',
                description: "We specify the right material for the job and install it correctly. CertainTeed Premier certification isn't just a credential — it's a standard we're held to on every installation.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
              },
              {
                title: 'Loyalty',
                description: "We stand behind our work after the job is done. Our customers in Round Rock, Austin, and across Central Texas can call us after the project closes — and we'll pick up.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                ),
              },
              {
                title: 'Excellence',
                description: "Good enough isn't a standard we work with. Excellence means the roof performs, the install holds up, and the homeowner never has to wonder if it was done right.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                ),
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary-100">
                <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 mb-5">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-primary-900 mb-3">{value.title}</h3>
                <p className="text-primary-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Work With a Contractor Who Actually Shows Up?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Free inspection. Honest assessment. No pressure. That's how we do it.
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

export default AboutPage
