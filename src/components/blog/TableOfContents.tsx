'use client'

import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
  className?: string
}

export const TableOfContents: FC<TableOfContentsProps> = ({ content, className = '' }) => {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Extract headings from content
    const extractedHeadings: Heading[] = []
    const headingRegex = /^(#{2,3})\s+(.+)$/gm
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2].trim()
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      extractedHeadings.push({ id, text, level })
    }

    setHeadings(extractedHeadings)
  }, [content])

  useEffect(() => {
    // Intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
      }
    )

    // Observe all headings
    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      
      setActiveId(id)
      setIsOpen(false) // Close mobile menu after click
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-accent-500 text-white p-4 rounded-full shadow-2xl hover:bg-accent-600 transition-all"
        aria-label="Toggle Table of Contents"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Table of Contents */}
      <nav
        className={`
          ${className}
          fixed lg:sticky top-24 z-50 lg:z-auto
          bg-white rounded-xl shadow-xl border-2 border-primary-100 p-6
          max-h-[calc(100vh-8rem)] overflow-y-auto
          transition-all duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          left-6 right-6 lg:left-auto lg:right-auto
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-primary-200">
          <h3 className="text-lg font-bold text-primary-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            Table of Contents
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-primary-600 hover:text-primary-900"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Headings List */}
        <ul className="space-y-2">
          {headings.map(({ id, text, level }) => (
            <li key={id}>
              <button
                onClick={() => scrollToHeading(id)}
                className={`
                  w-full text-left py-2 px-3 rounded-lg transition-all text-sm
                  ${level === 3 ? 'pl-6' : ''}
                  ${
                    activeId === id
                      ? 'bg-accent-50 text-accent-700 font-semibold border-l-4 border-accent-600'
                      : 'text-primary-700 hover:bg-primary-50 hover:text-accent-600 border-l-4 border-transparent'
                  }
                `}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>

        {/* Progress Indicator */}
        <div className="mt-6 pt-4 border-t border-primary-200">
          <div className="flex items-center justify-between text-xs text-primary-600 mb-2">
            <span>Reading Progress</span>
            <span>{Math.round((headings.findIndex(h => h.id === activeId) / headings.length) * 100) || 0}%</span>
          </div>
          <div className="w-full bg-primary-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-accent-500 h-full transition-all duration-300 rounded-full"
              style={{
                width: `${Math.round((headings.findIndex(h => h.id === activeId) / headings.length) * 100) || 0}%`,
              }}
            />
          </div>
        </div>
      </nav>
    </>
  )
}
