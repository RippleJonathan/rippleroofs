import { FC } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export const CTASection: FC = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-primary-950 via-primary-900 to-accent-900/30 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2324C4FC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Get a free, no-obligation roof inspection from Central Texas's trusted roofing experts. 
            CertainTeed Shingle Master certified with 24/7 emergency service available.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Schedule Free Inspection
              </Button>
            </Link>
            <a href={`tel:${SITE_CONFIG.phoneRaw}`}>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary-900"
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </a>
          </div>

          {/* Service Areas */}
          <div className="pt-8 border-t border-primary-700">
            <p className="text-primary-300 mb-4 font-semibold">Proudly Serving:</p>
            <p className="text-primary-200 leading-relaxed">
              {SITE_CONFIG.serviceArea}
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-primary-200">
            {SITE_CONFIG.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
