import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export const Hero: FC = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Modern roofing excellence"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          quality={80}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />        {/* Gradient Overlay - Simplified for mobile performance */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/70" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2">
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

            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    🎯 Get My FREE Inspection ($200 Value)
                  </Button>
                </Link>
                <a href={`tel:${SITE_CONFIG.phoneRaw}`}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-900">
                    📞 Call Now: {SITE_CONFIG.phone}
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-primary-100">
                <span className="flex items-center gap-1">⭐ 5.0 Star Rating</span>
                <span>•</span>
                <span className="flex items-center gap-1">✓ CertainTeed Master™</span>
                <span>•</span>
                <span className="flex items-center gap-1">🛡️ Fully Insured</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-6 text-primary-100 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">5-Star Rated Service</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">Top 1% Certified Master</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* CertainTeed Badge - Right Side */}
          <div className="hidden lg:flex justify-end pt-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-32 h-32">
              <Image
                src="/images/certainteed-shingle-master.webp"
                alt="CertainTeed Shingle Master Certified"
                fill
                className="object-contain"
              />
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
