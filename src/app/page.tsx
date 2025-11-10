import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { Testimonials } from '@/components/home/Testimonials'
import { ProjectGalleryPreview } from '@/components/home/ProjectGalleryPreview'
import { CTASection } from '@/components/home/CTASection'
import { TrustBadges } from '@/components/ui/TrustBadges'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata = {
  title: 'Home',
  description: 'CertainTeed Shingle Master certified roofing experts serving Austin Metro, San Antonio, and Central Texas. Residential, commercial, and 24/7 emergency roofing services. Fully insured.',
}

export default function Home() {
  // Structured Data - LocalBusiness Schema
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1000 Heritage Center Circle',
      addressLocality: SITE_CONFIG.city,
      addressRegion: SITE_CONFIG.state,
      postalCode: SITE_CONFIG.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.5089,
      longitude: -97.6789,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Round Rock',
        '@id': 'https://en.wikipedia.org/wiki/Round_Rock,_Texas',
      },
      {
        '@type': 'City',
        name: 'Austin',
        '@id': 'https://en.wikipedia.org/wiki/Austin,_Texas',
      },
      {
        '@type': 'City',
        name: 'Georgetown',
        '@id': 'https://en.wikipedia.org/wiki/Georgetown,_Texas',
      },
      {
        '@type': 'City',
        name: 'San Antonio',
        '@id': 'https://en.wikipedia.org/wiki/San_Antonio',
      },
      {
        '@type': 'City',
        name: 'Killeen',
        '@id': 'https://en.wikipedia.org/wiki/Killeen,_Texas',
      },
    ],
    priceRange: '$$-$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '62',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      SITE_CONFIG.social.facebook,
    ].filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Roofing',
            description: 'Professional residential roof installation, repair, and replacement services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Roofing',
            description: 'Expert commercial roofing solutions for businesses',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency Roof Repair',
            description: '24/7 emergency roofing services for immediate assistance',
          },
        },
      ],
    },
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Hero />
      <TrustBadges />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <ProjectGalleryPreview />
      <CTASection />
    </>
  )
}
