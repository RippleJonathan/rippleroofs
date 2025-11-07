'use client'

import { FC, useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  questions: FAQItem[]
}

export const FAQAccordion: FC<FAQAccordionProps> = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div
          key={index}
          className="border border-primary-200 rounded-lg overflow-hidden hover:border-accent-300 transition-colors"
        >
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-primary-50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-primary-900 text-lg">
              {item.question}
            </span>
            <svg
              className={`w-6 h-6 text-accent-600 flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
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
          
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            <div className="px-6 py-4 bg-primary-25 border-t border-primary-200">
              <p className="text-primary-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
