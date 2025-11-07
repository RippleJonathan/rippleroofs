import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export const Hero: FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Modern roofing excellence"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Gradient Overlay with Blue Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-accent-900/30" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl">
          <h1 className="heading-1 text-white mb-6 animate-fade-up">
            Premium Roofing Services in{' '}
            <span className="text-gradient bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              Central Texas
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            CertainTeed Shingle Master certified roofing experts serving the Austin Metro area. 
            Residential, commercial, and emergency services available 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Get Free Inspection
              </Button>
            </Link>
            <a href={`tel:${SITE_CONFIG.phoneRaw}`}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-900">
                Call {SITE_CONFIG.phone}
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-6 text-primary-100 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">CertainTeed Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
