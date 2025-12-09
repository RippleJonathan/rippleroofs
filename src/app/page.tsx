import dynamic from 'next/dynamic'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { CTASection } from '@/components/home/CTASection'
import { TrustBadges } from '@/components/ui/TrustBadges'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { FeaturedIn } from '@/components/home/FeaturedIn'
import { SITE_CONFIG } from '@/lib/constants'

// Lazy load below-the-fold components for better mobile performance
const Testimonials = dynamic(() => import('@/components/home/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true
})

const ProjectGalleryPreview = dynamic(() => import('@/components/home/ProjectGalleryPreview').then(mod => ({ default: mod.ProjectGalleryPreview })), {
  loading: () => <div className="h-64 bg-gray-50" />,
  ssr: true
})

const FreeResourcesSection = dynamic(() => import('@/components/home/FreeResourcesSection').then(mod => ({ default: mod.FreeResourcesSection })), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true
})

export const metadata = {
  title: 'Round Rock Roofing | CertainTeed Certified | 24/7 Service',
  description: 'Round Rock\'s trusted roofing contractor. CertainTeed Shingle Master certified serving Round Rock, Austin, Georgetown & Central Texas. 24/7 emergency service, residential & commercial. Free inspections.',
  alternates: {
    canonical: 'https://rippleroofs.com'
  },
}

export default function Home() {
  // Enhanced Structured Data - LocalBusiness/Organization Schema
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['RoofingContractor', 'LocalBusiness', 'Organization'],
    '@id': SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    alternateName: 'Ripple Roofing',
    legalName: 'Ripple Roofing & Construction',
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/logo.png`,
      width: 250,
      height: 60
    },
    image: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/images/hero-roofing.jpg`,
      width: 1200,
      height: 630
    },
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1000 Heritage Center Circle, #165',
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
      description: '24/7 Emergency Services Available'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Round Rock',
        containedIn: { '@type': 'State', name: 'Texas' }
      },
      {
        '@type': 'City',
        name: 'Austin',
        containedIn: { '@type': 'State', name: 'Texas' }
      },
      {
        '@type': 'City',
        name: 'Georgetown',
        containedIn: { '@type': 'State', name: 'Texas' }
      },
      {
        '@type': 'City',
        name: 'Pflugerville',
        containedIn: { '@type': 'State', name: 'Texas' }
      },
      {
        '@type': 'City',
        name: 'Cedar Park',
        containedIn: { '@type': 'State', name: 'Texas' }
      },
      {
        '@type': 'City',
        name: 'Leander',
        containedIn: { '@type': 'State', name: 'Texas' }
      },
      {
        '@type': 'City',
        name: 'San Antonio',
        containedIn: { '@type': 'State', name: 'Texas' }
      }
    ],
    priceRange: '$$-$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '267',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      SITE_CONFIG.social.facebook,
      'https://www.bbb.org/us/tx/round-rock/profile/roofing-contractors/ripple-roofing-construction',
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
            name: 'Storm Damage Restoration',
            description: 'Comprehensive storm damage assessment and restoration services',
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
    knowsAbout: [
      'Roof Replacement',
      'Roof Repair',
      'Storm Damage',
      'Hail Damage',
      'Insurance Claims',
      'Residential Roofing',
      'Commercial Roofing',
      'Shingle Installation',
      'Metal Roofing',
      'Impact-Resistant Shingles'
    ],
    slogan: 'Central Texas Premier Roofing Contractor',
    foundingDate: '2018',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 30.5089,
        longitude: -97.6789
      },
      geoRadius: '80000' // 80km radius
    }
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
      <FeaturedIn />
      <ServicesGrid />
      <FreeResourcesSection />
      <WhyChooseUs />
      <Testimonials />
      <ProjectGalleryPreview />
      <CTASection />
    </>
  )
}


