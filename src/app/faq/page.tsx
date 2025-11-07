import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { FAQAccordion } from '@/components/faq/FAQAccordion'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Get answers to common questions about roofing services, costs, warranties, and more. Expert advice from Central Texas roofing professionals.',
  openGraph: {
    title: 'FAQ - Ripple Roofing & Construction',
    description: 'Common questions about roofing answered by our experts',
  },
}

const faqCategories = [
  {
    category: 'General Roofing',
    questions: [
      {
        question: 'How often should I replace my roof?',
        answer: 'The lifespan of your roof depends on the material. Asphalt shingle roofs typically last 20-25 years, metal roofs 40-70 years, and tile roofs can last 50+ years. However, factors like weather conditions, maintenance, and installation quality can affect this timeline. We recommend a professional inspection every 3-5 years to assess your roof\'s condition.',
      },
      {
        question: 'How do I know if I need a roof repair or replacement?',
        answer: 'Signs you need repair include: missing or damaged shingles, minor leaks, granules in gutters, or localized damage. You likely need replacement if: your roof is over 20 years old, has widespread damage, multiple leaks, sagging areas, or extensive water damage. Our free inspection will help determine the best solution for your situation.',
      },
      {
        question: 'How long does a roof replacement take?',
        answer: 'Most residential roof replacements take 1-3 days, depending on the size of your home, roof complexity, weather conditions, and material choice. We\'ll provide a specific timeline during your estimate and keep you informed throughout the process.',
      },
      {
        question: 'Will you work in bad weather?',
        answer: 'Safety is our priority. We don\'t install roofs during heavy rain, high winds, or extreme temperatures, as these conditions can compromise installation quality and worker safety. However, we offer 24/7 emergency tarping services to protect your home until conditions improve.',
      },
    ],
  },
  {
    category: 'Cost & Payment',
    questions: [
      {
        question: 'How much does a new roof cost?',
        answer: 'Roof replacement costs vary based on several factors: roof size, material choice, complexity, accessibility, and any necessary repairs to underlying structures. On average, homeowners can expect to invest $8,000-$25,000+ for a complete replacement. We provide free, detailed estimates that break down all costs with no hidden fees.',
      },
      {
        question: 'Do you offer financing options?',
        answer: 'Yes! We partner with Pure Finance to offer flexible financing options with competitive rates. You can apply online and get approved quickly. We believe quality roofing should be accessible, so we work with various budgets to find a solution that fits your financial situation.',
      },
      {
        question: 'Do you work with insurance companies?',
        answer: 'Absolutely! We have extensive experience working with insurance companies on storm damage claims. We can help document damage, provide detailed estimates, and work directly with your adjuster to ensure you get the coverage you deserve. Our goal is to make the insurance process as smooth as possible.',
      },
      {
        question: 'Is a deposit required?',
        answer: 'We typically require a deposit to secure materials and schedule your project. The deposit amount varies based on project size and scope. We never require full payment upfront – final payment is due upon satisfactory completion of the work.',
      },
    ],
  },
  {
    category: 'Materials & Installation',
    questions: [
      {
        question: 'What roofing materials do you recommend?',
        answer: 'For Central Texas, we typically recommend architectural asphalt shingles (great value, 25-30 year lifespan), metal roofing (excellent for Texas heat, energy-efficient, 40-70 years), or tile roofing (premium aesthetic, very durable). As a CertainTeed Shingle Master contractor, we specialize in high-quality shingle installations with industry-leading warranties.',
      },
      {
        question: 'Are CertainTeed shingles better than other brands?',
        answer: 'CertainTeed is one of North America\'s leading roofing manufacturers, known for durability, aesthetic options, and comprehensive warranties. As a Shingle Master contractor, we\'ve been specially trained in CertainTeed products and can offer enhanced warranties. We also work with other premium brands to meet your specific needs and preferences.',
      },
      {
        question: 'Can I install a new roof over my existing one?',
        answer: 'While it\'s sometimes possible to install over one existing layer, we generally don\'t recommend it. Removing old roofing allows us to inspect the decking for damage, ensures proper installation, maximizes your new roof\'s lifespan, and may be required by local building codes. A proper tear-off also keeps your roof lighter and extends its life.',
      },
      {
        question: 'Do you handle permits and inspections?',
        answer: 'Yes! We handle all necessary permits and ensure your project meets local building codes. We coordinate all required inspections and provide you with copies of all documentation. This is included in our service – you don\'t need to worry about navigating the permit process.',
      },
    ],
  },
  {
    category: 'Warranties & Guarantees',
    questions: [
      {
        question: 'What kind of warranty do you offer?',
        answer: 'We offer comprehensive warranty coverage: Manufacturer\'s Material Warranty (varies by product, typically 25-50 years), Our Workmanship Warranty (covers installation for 10 years), and Enhanced Warranties (available as CertainTeed Shingle Master for qualifying installations). We stand behind our work and will address any installation-related issues.',
      },
      {
        question: 'What does your warranty cover?',
        answer: 'Our workmanship warranty covers any defects or issues related to the installation process, including improper nailing, flashing errors, or other installation mistakes. Manufacturer warranties cover material defects. We provide detailed warranty documentation at project completion explaining all coverage.',
      },
      {
        question: 'Will my warranty be voided if I sell my home?',
        answer: 'No! Our warranties and most manufacturer warranties are transferable to new homeowners, which can be a valuable selling point. We provide all necessary documentation for warranty transfer. Some enhanced warranties may have specific transfer procedures – we\'ll explain these at project completion.',
      },
    ],
  },
  {
    category: 'Emergency Services',
    questions: [
      {
        question: 'Do you offer 24/7 emergency services?',
        answer: 'Yes! We understand that roof emergencies don\'t wait for business hours. We offer 24/7 emergency response for situations like severe storm damage, sudden leaks, or fallen trees. Call us anytime at (512) 763-5277 and we\'ll dispatch a team to assess and secure your property.',
      },
      {
        question: 'How quickly can you respond to emergencies?',
        answer: 'We prioritize emergency calls and typically respond within 2-4 hours for critical situations. Our first priority is securing your property with tarping or temporary repairs to prevent further damage. We\'ll then schedule permanent repairs as quickly as possible.',
      },
      {
        question: 'What constitutes a roofing emergency?',
        answer: 'Contact us immediately for: Active leaking causing interior damage, large sections of missing roofing, structural damage or sagging, holes in the roof, storm damage with exposed areas, fallen trees or branches penetrating the roof. Don\'t wait – these situations worsen quickly and can cause extensive interior damage.',
      },
    ],
  },
  {
    category: 'Process & Timeline',
    questions: [
      {
        question: 'What\'s involved in the free inspection?',
        answer: 'Our comprehensive inspection includes: visual examination of all roof surfaces, checking for damaged or missing shingles, inspecting flashing around chimneys and vents, evaluating gutters and drainage, looking for signs of leaks or water damage, assessing ventilation, and documenting findings with photos. We provide a detailed report and honest recommendations.',
      },
      {
        question: 'How soon can you start my project?',
        answer: 'Timeline depends on project scope and our current schedule. Emergency repairs can often begin within 24-48 hours. Full replacements typically start within 1-2 weeks of approval. During peak storm season, timelines may extend. We\'ll provide a specific start date when you approve your estimate.',
      },
      {
        question: 'Do I need to be home during the work?',
        answer: 'You don\'t need to be present during the entire project, but we recommend being available for the initial walkthrough and final inspection. We\'ll coordinate with you on key milestones. Our crews are professional, respectful of your property, and will keep you updated on progress.',
      },
      {
        question: 'How will you protect my property and landscaping?',
        answer: 'We take protection seriously: tarps protect landscaping and AC units, magnetic tools collect metal debris, careful material handling prevents damage, daily site cleanup, and final thorough inspection with a magnet roller. We treat your property as if it were our own.',
      },
    ],
  },
]

export default function FAQPage() {
  // FAQ Schema for SEO
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
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Expert answers to your roofing questions from Central Texas's trusted professionals
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact">
                <button className="btn btn-primary">
                  Get Free Inspection
                </button>
              </a>
              <a href={`tel:5127635277`}>
                <button className="btn btn-secondary">
                  Call: (512) 763-5277
                </button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="mb-12 text-center">
              <p className="text-lg text-primary-700">
                We've compiled answers to the most common questions we receive. Don't see your
                question? <a href="/contact" className="text-accent-600 hover:text-accent-700 font-semibold">Contact us</a> – we're happy to help!
              </p>
            </div>

            {/* FAQ Categories */}
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

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-primary-700 mb-6">
                Our team is here to help! Get in touch for personalized answers and a free, no-obligation inspection.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="/contact">
                  <button className="btn btn-primary btn-lg">
                    Schedule Free Inspection
                  </button>
                </a>
                <a href={`tel:5127635277`}>
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
