'use client'

import { FC, useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

interface LocationFAQProps {
  city: string
  faqs?: FAQ[]
}

export const LocationFAQ: FC<LocationFAQProps> = ({ city, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const defaultFAQs: FAQ[] = [
    {
      question: `How much does a roof replacement cost in ${city}?`,
      answer: `Roof replacement costs in ${city} typically range from $8,000 to $25,000+ depending on size, materials, pitch, and complexity. We provide free detailed inspections and transparent quotes with no hidden fees. Factors affecting cost include square footage, number of layers to remove, roof complexity, material choice (asphalt shingles, metal, tile), and current damage extent. Contact us for a personalized quote for your ${city} property.`
    },
    {
      question: `Do you offer emergency roofing services in ${city}?`,
      answer: `Yes! We provide 24/7 emergency roofing services throughout ${city}. Whether it's storm damage, leaks, or fallen trees, our team responds quickly to protect your property. We offer emergency tarping, temporary repairs, and fast permanent solutions. Call ${city} residents can reach us anytime at (512) 763-5277 for immediate assistance.`
    },
    {
      question: `How long does a roof last in ${city}'s climate?`,
      answer: `In ${city}'s climate with intense heat, UV exposure, hail, and severe storms, roof lifespan varies by material: Asphalt shingles typically last 15-25 years, architectural shingles 25-30 years, metal roofing 40-70 years, and tile 50+ years. Regular maintenance, proper ventilation, and quality installation significantly extend roof life. We recommend annual inspections for ${city} homes to catch issues early.`
    },
    {
      question: `What roofing materials work best in ${city}?`,
      answer: `For ${city}'s climate, we recommend impact-resistant shingles rated for hail, Class 4 rated materials, light-colored reflective options to reduce heat absorption, proper ventilation systems, and CertainTeed Landmark or Presidential shingles. These materials withstand Texas heat, UV exposure, hail, and severe weather common in ${city}. We'll help you choose the perfect material for your budget and needs.`
    },
    {
      question: `Are you licensed and insured to work in ${city}?`,
      answer: `Absolutely! We are fully licensed and insured to provide roofing services throughout ${city} and all Central Texas areas. We carry comprehensive liability insurance and workers' compensation coverage. Additionally, we're CertainTeed Shingle Master certified, placing us among the top 1% of roofing contractors nationwide. All work is performed to or above ${city} building codes and regulations.`
    },
    {
      question: `How long does a roof replacement take in ${city}?`,
      answer: `Most residential roof replacements in ${city} take 1-3 days depending on size and complexity. Single-story homes typically complete in 1-2 days, while larger two-story homes may take 2-3 days. Commercial projects vary based on size and scope. Weather can affect timelines. We work efficiently while maintaining quality, and always clean up thoroughly. We'll provide a specific timeline during your ${city} property inspection.`
    },
    {
      question: `Will you help with insurance claims for ${city} storm damage?`,
      answer: `Yes! We assist ${city} homeowners throughout the entire insurance claim process. Our services include free storm damage inspections, detailed damage documentation with photos, meeting with insurance adjusters, providing itemized estimates matching insurance requirements, advocating for fair settlements, and direct communication with insurers. We know how to navigate claims specific to ${city}'s common storm damage scenarios.`
    },
    {
      question: `Do you offer financing for ${city} residents?`,
      answer: `Yes, we offer flexible financing options through Pure Finance to make quality roofing affordable for ${city} homeowners. We provide competitive rates, flexible payment terms, quick approval process, no prepayment penalties, and financing for repairs and replacements. Many ${city} customers appreciate being able to protect their homes now while spreading costs over time. Visit our financing page or ask during your consultation for details.`
    }
  ]

  const displayFAQs = faqs || defaultFAQs

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-display font-bold text-primary-900 mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-primary-600 mb-8">
        Common questions from {city} homeowners about our roofing services
      </p>
      
      <div className="space-y-4">
        {displayFAQs.map((faq, index) => (
          <div
            key={index}
            className="border border-primary-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-5 hover:bg-primary-50 transition-colors flex items-center justify-between gap-4"
            >
              <span className="font-semibold text-primary-900 pr-8">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-accent-600 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-5 pt-0 text-primary-700 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-accent-50 rounded-lg border-l-4 border-accent-500">
        <p className="text-primary-900 font-medium">
          Have more questions about roofing in {city}?{' '}
          <a href="/contact" className="text-accent-600 hover:text-accent-700 underline">
            Contact us
          </a>{' '}
          or call{' '}
          <a href="tel:5127635277" className="text-accent-600 hover:text-accent-700 font-bold">
            (512) 763-5277
          </a>
        </p>
      </div>
    </div>
  )
}
