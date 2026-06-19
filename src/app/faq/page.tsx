import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { FAQAccordion } from '@/components/faq/FAQAccordion'

export const metadata: Metadata = {
  title: 'Roofing FAQ: Costs, Insurance Claims & Contractors | Central Texas',
  description: 'Expert answers to the most common roofing questions for Central Texas homeowners — insurance claims, roof replacement costs, what to say to adjusters, how to choose a contractor, and more.',
  alternates: {
    canonical: 'https://rippleroofs.com/faq'
  },
  openGraph: {
    title: 'Roofing FAQ | Ripple Roofing — Central Texas',
    description: 'Answers to the most common roofing questions for Central Texas homeowners.',
  },
}

const faqCategories = [
  {
    category: 'Insurance Claims & Storm Damage',
    questions: [
      {
        question: 'What should you not say to a roof insurance adjuster?',
        answer: 'Avoid saying "I don\'t think there\'s much damage" before the adjuster has fully inspected — you may be right about cosmetic areas but wrong about the full scope. Don\'t accept the first estimate as final before comparing it to a contractor\'s documented scope. Don\'t say the damage looks old or was pre-existing — leave condition assessments to the adjuster and your contractor. And don\'t sign anything that waives your right to supplement or dispute the claim before the work is complete and you\'ve reviewed the settlement.',
      },
      {
        question: 'What is the 25% rule for roofing in Texas?',
        answer: 'The 25% rule is an insurance industry threshold: if repairing a roof costs more than 25% of the full replacement cost, many insurers consider full replacement rather than partial repair to be the appropriate remedy. In Texas, this rule is often cited in conjunction with functional damage assessments — if a significant portion of the roof was damaged in a storm, the adjuster may opt for replacement rather than spot repairs. Your contractor should document damage to every section to establish the full scope.',
      },
      {
        question: 'Is it worth filing a roof insurance claim for hail damage in Texas?',
        answer: 'In most cases, yes — if you have genuine storm damage and an RCV (Replacement Cost Value) policy. Texas law gives homeowners two years to file from the date of loss, and most major hailstorm events are declared catastrophe events by carriers, which typically doesn\'t affect individual renewal rates. Get a free inspection first. If the damage doesn\'t meet your deductible or is purely cosmetic under your policy, we\'ll tell you that honestly so you can make an informed decision.',
      },
      {
        question: 'How long does a roof insurance claim take in Texas?',
        answer: 'Under the Texas Prompt Payment Act, insurers must acknowledge your claim within 15 days of filing, accept or deny within 15 business days of receiving proof of loss, and pay within 5 business days of acceptance. In practice, major storm events stretch these timelines considerably — adjusters are in high demand and scheduling can take 2-4 weeks. Once settled, most roof replacements complete within 1-2 weeks of material availability.',
      },
      {
        question: 'Can my insurance company drop me for filing a roof claim in Texas?',
        answer: 'Texas carriers can non-renew policies after claims, but they cannot cancel mid-term for filing a weather claim. After a major catastrophe event (like the April 2026 Williamson County storms), claims are typically coded as CAT events and don\'t trigger individual non-renewals. Isolated, non-CAT weather claims can affect your renewal eligibility. If damage is minor and close to your deductible, discuss with your agent before filing.',
      },
      {
        question: 'Do I have to use the insurance company\'s preferred contractor?',
        answer: 'No. Texas law gives you the right to choose any licensed roofing contractor. Insurance carriers may suggest preferred contractor networks, but participation is entirely voluntary. Using a carrier-preferred contractor does not affect your settlement amount — you\'re entitled to the full Xactimate scope regardless of which contractor you choose.',
      },
    ],
  },
  {
    category: 'Costs & Pricing',
    questions: [
      {
        question: 'Is $30,000 too much for a roof in Texas?',
        answer: 'Not necessarily — it depends heavily on home size, material, and complexity. For a 2,000–2,500 sq ft home with standard architectural shingles, $14,000–$22,000 is typical in Central Texas. $30,000 at that size would be high for shingles but reasonable for Class 4 impact shingles or stone-coated steel on a complex roof. For standing seam metal roofing on a 2,000–2,500 sq ft home, $28,000–$46,000 is the expected range. Always get itemized proposals so you understand what drives the number.',
      },
      {
        question: 'How much does it cost to replace a roof on a 2,200 square foot home in Texas?',
        answer: 'For a 2,200 sq ft home in Central Texas, expect: standard architectural shingles — $14,000–$20,000; Class 4 impact-resistant shingles — $16,000–$24,000; stone-coated steel — $26,000–$40,000; standing seam metal — $31,000–$51,000. These are installed prices including tear-off, deck inspection, all materials, labor, permit, and cleanup. Roof pitch complexity, number of penetrations (chimneys, skylights, dormers), and material lead times affect final cost.',
      },
      {
        question: 'How much does it cost to shingle a 1,200 square foot roof?',
        answer: 'A 1,200 sq ft home in Central Texas would expect to pay $9,500–$14,000 for standard architectural shingles installed, or $11,000–$17,000 for Class 4 impact-resistant shingles. The square footage of your living space and your roof\'s actual surface area aren\'t the same — a 1,200 sq ft home might have 1,400–1,800 sq ft of actual roof surface depending on pitch and overhangs. We measure the actual roof, not the footprint.',
      },
      {
        question: 'What is the cheapest time of year to get a new roof in Texas?',
        answer: 'Late fall and winter (November through February) typically have lower demand and sometimes better contractor availability in Central Texas. However, the price difference is modest — material costs are set by manufacturers, not season, and quality contractors stay busy year-round. The biggest pricing factor is storm events: after a major hailstorm, demand spikes and some contractors raise prices. Getting ahead of storm season or moving quickly after settlement (rather than waiting) is more impactful than timing the calendar.',
      },
      {
        question: 'How much does a metal roof save on insurance in Texas?',
        answer: 'Class 4 impact-resistant metal roofing (standing seam or stone-coated steel) qualifies for 15–35% premium discounts with most major Texas carriers. On a $4,000/year homeowners policy, that\'s $600–$1,400/year in savings. Over a 50-year metal roof lifespan, that\'s $30,000–$70,000 in cumulative premium savings — often more than offsetting the installation premium over asphalt. Contact your carrier to confirm your specific discount after installation.',
      },
    ],
  },
  {
    category: 'Choosing a Contractor',
    questions: [
      {
        question: 'How do you tell if a roofer is lying to you?',
        answer: 'Watch for these: vague or verbal-only proposals (legitimate contractors provide written, itemized scopes); pressure to sign immediately before a storm-chasing "deal" expires; claims they can waive your insurance deductible (this is insurance fraud in Texas and illegal); no physical local address or Texas registration; asking for full payment upfront. A trustworthy contractor will welcome your questions, provide references, pull permits in their name, and never pressure you to sign on the spot.',
      },
      {
        question: 'What should you not say to a roofing contractor?',
        answer: 'Don\'t say "just do whatever you think is best" without getting it in writing first — verbal agreements create misunderstandings. Don\'t say you\'ll pay cash to avoid permits (permits protect you, not just the contractor). Don\'t reveal your insurance settlement amount before getting an independent estimate — your coverage is your business. And don\'t agree to let a contractor who "happens to be in the neighborhood" inspect your roof without verifying their license and insurance first.',
      },
      {
        question: 'What questions should I ask a roofing contractor before hiring?',
        answer: 'Ask: Are you registered with the Texas Department of Insurance as a roofing contractor? (Required in most TX cities.) Can I see your general liability and workers\' compensation certificates? Do you pull permits and schedule inspections, or do I have to? What manufacturer are you certified with, and what warranty does that enable? How do you handle supplements with my insurance carrier? Can you provide references from recent jobs in my neighborhood? Get specific answers, not vague reassurances.',
      },
      {
        question: 'Is CertainTeed ShingleMaster Premier the best shingle certification?',
        answer: 'CertainTeed\'s ShingleMaster Premier is the highest tier of their three-level certification program — fewer than 1% of CertainTeed contractors nationwide hold it. It requires demonstrated installation volume, inspector verification, and ongoing training. Premier certification enables the SureStart PLUS warranty, which is CertainTeed\'s best coverage and extends the manufacturer\'s material warranty with enhanced protection. For a homeowner, it means your contractor was vetted, not just signed up.',
      },
    ],
  },
  {
    category: 'Materials & Performance',
    questions: [
      {
        question: 'What color roof increases home value in Texas?',
        answer: 'Neutral, coordinated tones consistently outperform trendy colors at resale — Charcoal Gray, Medium Bronze, Weathered Wood, and Slate remain preferred by buyers in Central Texas markets. For metal roofing, Dark Bronze and Charcoal test well with modern and transitional architecture common in Austin suburbs. The bigger driver of value is material quality: a Class 4 shingle or metal roof with documented impact resistance and remaining warranty life is a meaningful selling point regardless of color. Buyers and inspectors look for this.',
      },
      {
        question: 'How long do roofs actually last in Central Texas heat?',
        answer: 'Shorter than manufacturer ratings suggest. Standard architectural shingles rated for 30 years often perform 18–22 years in Texas due to UV intensity, thermal cycling, and heat. Class 4 impact shingles do better — 25–35 years is realistic. Stone-coated steel: 40–55 years. Standing seam metal: 50–70 years. The Texas climate specifically degrades asphalt through blistering, granule loss, and accelerated thermal expansion. This is the core reason metal roofing ROI improves significantly in our market versus northern states.',
      },
      {
        question: 'What is Class 4 impact resistance and why does it matter in Texas?',
        answer: 'Class 4 is the highest UL 2218 impact resistance rating, tested by dropping a 2-inch steel ball from 20 feet. Shingles or metal panels that pass retain waterproofing after impact. In Texas — which sits in national hail alley — Class 4 rating qualifies for insurance premium discounts (15–35% with most carriers) and is the threshold that prevents functional damage on all but the most extreme hail events. It\'s the single most important specification to ask about when replacing a roof in Central Texas.',
      },
      {
        question: 'Does a new roof affect my homeowners insurance premium?',
        answer: 'Yes, materially. A new roof — regardless of material — typically triggers a premium review. Older roofs (15+ years) often carry a surcharge or ACV-only coverage restriction. A new Class 4 shingle or metal roof can qualify for 15–35% discounts with most major Texas carriers. Notify your insurer within 30 days of completion and provide the post-installation documentation (material specs, impact rating, permit). We provide this documentation as part of every job closeout.',
      },
    ],
  },
  {
    category: 'Emergency Services & Storm Response',
    questions: [
      {
        question: 'What should I do immediately after a hailstorm damages my roof?',
        answer: 'Don\'t go on the roof yourself — assess from ground level only. Take dated photos of any visible damage: dented gutters, dings on AC units, and damaged landscaping all corroborate a storm event for your claim. Call for a professional inspection before contacting your insurer if possible — our inspection documents the damage properly before an adjuster scopes it. Then file your claim promptly. Texas law gives you two years, but filing soon preserves your ability to establish damage was storm-related, not pre-existing.',
      },
      {
        question: 'Do you offer 24/7 emergency tarping?',
        answer: 'Yes. If a storm has left your home exposed — missing shingles, damaged decking, holes from fallen branches — we provide emergency tarping to prevent interior water damage while waiting for a permanent repair scope and insurance settlement. Call (512) 763-5277 anytime.',
      },
      {
        question: 'How do I know if my roof actually needs replacement or just repair after a storm?',
        answer: 'This depends on storm severity, roof age, and damage distribution. If hail impacts are distributed across the entire roof surface and the shingles are losing granule protection, replacement is typically warranted — partial repairs leave the remaining surface compromised. If damage is isolated to a few sections (e.g., one slope was sheltered), repair may be appropriate. A professional inspection with photos and a written scope is the only reliable way to know. We document everything and give you an honest assessment.',
      },
    ],
  },
  {
    category: 'Warranties & CertainTeed Certification',
    questions: [
      {
        question: 'What warranty does a CertainTeed ShingleMaster Premier contractor offer?',
        answer: 'Premier certification enables the SureStart PLUS warranty — CertainTeed\'s highest tier. It covers both materials and workmanship, is transferable to the next homeowner (a real selling point), and extends material coverage beyond the standard warranty. The specifics depend on the product line installed. We provide full warranty documentation at project completion and explain exactly what\'s covered and for how long.',
      },
      {
        question: 'Is a roofing warranty transferable when I sell my home?',
        answer: 'CertainTeed\'s SureStart PLUS warranty is transferable to new homeowners — this is one of its key advantages. Manufacturer material warranties from other brands are typically also transferable with notice. Our workmanship warranty transfers as well. A documented, in-force warranty is a verifiable selling point that buyers\' inspectors and real estate agents can confirm. We provide all transfer documentation.',
      },
      {
        question: 'What voids a roofing warranty in Texas?',
        answer: 'Common warranty voidances: improper ventilation (most manufacturers require specific attic ventilation standards); installation of equipment that penetrates the roof without approved flashing (solar, HVAC, etc.); re-coating or painting the roof surface without manufacturer approval; roof traffic without protection; and installation over materials the manufacturer doesn\'t approve. For metal roofing, solar clamp installation on standing seam does NOT void the warranty — this is specifically designed into the system.',
      },
    ],
  },
]

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap((category) =>
      category.questions.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      }))
    ),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Roofing Questions, Straight Answers
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Real answers for Central Texas homeowners — insurance claims, costs, contractors, and materials.
              No fluff.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact">
                <button className="btn btn-primary">Get Free Inspection</button>
              </a>
              <a href="tel:5127635277">
                <button className="btn btn-secondary">Call: (512) 763-5277</button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-lg text-primary-700">
                These are the questions we actually get from Central Texas homeowners — especially after hailstorms.
                Don't see yours?{' '}
                <a href="/contact" className="text-accent-600 hover:text-accent-700 font-semibold">
                  Contact us
                </a>{' '}
                and we'll answer it directly.
              </p>
            </div>

            <div className="space-y-12">
              {faqCategories.map((category, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-display font-bold text-primary-900 mb-6 pb-3 border-b-2 border-accent-200">
                    {category.category}
                  </h2>
                  <FAQAccordion questions={category.questions} />
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-primary-700 mb-6">
                We'll give you a straight answer — no sales pressure. Free inspection, honest assessment.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="/contact">
                  <button className="btn btn-primary btn-lg">Schedule Free Inspection</button>
                </a>
                <a href="tel:5127635277">
                  <button className="btn btn-secondary btn-lg">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
