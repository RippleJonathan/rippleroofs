import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { SERVICES } from '@/lib/constants'

export const ServicesGrid: FC = () => {
  // Show first 6 services on homepage
  const featuredServices = SERVICES.slice(0, 6)

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-primary-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="heading-2 text-primary-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Comprehensive roofing solutions for residential and commercial properties throughout Central Texas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <Card className="h-full group cursor-pointer">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="text-5xl">{service.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-primary-900 group-hover:text-accent-500 transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-primary-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  
                  {/* Benefits */}
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm text-primary-700">
                        <svg className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <div className="pt-4">
                    <span className="text-accent-500 font-semibold group-hover:underline flex items-center group-hover:translate-x-1 transition-transform duration-200">
                      Learn More
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center mt-12">
          <Link href="/services">
            <button className="btn btn-secondary btn-lg">
              View All Services
            </button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
