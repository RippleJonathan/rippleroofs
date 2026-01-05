import { BUSINESS_RATING } from '@/constants/business';
import { BUSINESS_INFO_TEXAS, BUSINESS_INFO_ARIZONA } from '@/constants/business';

export default function LocalBusinessSchema() {
  // Organization schema with both offices
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://rippleroofs.com/#organization',
    name: 'Ripple Roofing & Construction',
    legalName: 'Ripple Roofing & Construction LLC',
    url: 'https://rippleroofs.com',
    logo: 'https://rippleroofs.com/images/ripple-roofing-logo.png',
    image: [
      'https://rippleroofs.com/images/ripple-roofing-logo.png',
      'https://rippleroofs.com/images/services/residential-roofing.jpg',
      'https://rippleroofs.com/images/services/commercial-roofing.jpg',
    ],
    description:
      'Premium roofing services in Texas and Arizona. CertainTeed Shingle Master certified contractor serving Round Rock, Austin, Phoenix, Scottsdale, and surrounding areas with roof replacement, repairs, emergency services, and more. 24/7 emergency service available.',
    email: 'info@rippleroofs.com',
    sameAs: [
      'https://www.facebook.com/rippleroofs',
      'https://www.instagram.com/ripple_roofing/',
      'https://www.linkedin.com/company/ripple-roofing',
      'https://nextdoor.com/page/ripple-roofing-construction/',
      'https://share.google/SsBLQ1RNm8ZQ7rFrk',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_RATING.ratingValue,
      reviewCount: BUSINESS_RATING.reviewCount,
      bestRating: BUSINESS_RATING.bestRating,
      worstRating: BUSINESS_RATING.worstRating,
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Texas',
      },
      {
        '@type': 'State',
        name: 'Arizona',
      },
    ],
    slogan: 'Premium Roofing Services in Texas & Arizona',
    foundingDate: '2015',
  };

  // Texas Office LocalBusiness
  const texasOfficeSchema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': 'https://rippleroofs.com/#texas-office',
    name: 'Ripple Roofing & Construction - Texas',
    parentOrganization: {
      '@id': 'https://rippleroofs.com/#organization',
    },
    url: 'https://rippleroofs.com',
    logo: 'https://rippleroofs.com/images/ripple-roofing-logo.png',
    description:
      'Premium roofing services in Central Texas. CertainTeed Shingle Master certified contractor serving Round Rock, Austin, Georgetown, and surrounding areas.',
    telephone: BUSINESS_INFO_TEXAS.phoneRaw,
    email: 'info@rippleroofs.com',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO_TEXAS.address.street,
      addressLocality: BUSINESS_INFO_TEXAS.address.city,
      addressRegion: BUSINESS_INFO_TEXAS.address.state,
      postalCode: BUSINESS_INFO_TEXAS.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO_TEXAS.geo.latitude.toString(),
      longitude: BUSINESS_INFO_TEXAS.geo.longitude.toString(),
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+1${BUSINESS_INFO_TEXAS.phoneRaw}`,
        contactType: 'customer service',
        availableLanguage: ['English', 'Spanish'],
        areaServed: 'TX',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          opens: '00:00',
          closes: '23:59',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          description: '24/7 Emergency Service',
        },
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Round Rock',
        '@id': 'https://www.wikidata.org/wiki/Q128346',
      },
      {
        '@type': 'City',
        name: 'Austin',
        '@id': 'https://www.wikidata.org/wiki/Q16559',
      },
      {
        '@type': 'City',
        name: 'Georgetown',
        '@id': 'https://www.wikidata.org/wiki/Q128345',
      },
      {
        '@type': 'City',
        name: 'Cedar Park',
      },
      {
        '@type': 'City',
        name: 'Pflugerville',
      },
      {
        '@type': 'City',
        name: 'Leander',
      },
      {
        '@type': 'City',
        name: 'San Marcos',
      },
      {
        '@type': 'City',
        name: 'New Braunfels',
      },
      {
        '@type': 'City',
        name: 'San Antonio',
      },
      {
        '@type': 'City',
        name: 'Temple',
      },
      {
        '@type': 'City',
        name: 'Killeen',
      },
      {
        '@type': 'City',
        name: 'Copperas Cove',
      },
      {
        '@type': 'City',
        name: 'Waco',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Residential Roofing',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Roof Replacement',
                url: 'https://rippleroofs.com/services/roof-replacement',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Roof Repairs',
                url: 'https://rippleroofs.com/services/roof-repairs',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Emergency Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '24/7 Emergency Roofing',
                url: 'https://rippleroofs.com/services/emergency-services',
              },
            },
          ],
        },
      ],
    },
    knowsAbout: [
      'Roofing',
      'Roof Replacement',
      'Storm Damage',
      'Hail Damage',
      'Emergency Roofing',
      'Impact-Resistant Roofing',
      'CertainTeed Shingles',
    ],
    awards: ['CertainTeed Shingle Master Certification'],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'CertainTeed Shingle Master',
        recognizedBy: {
          '@type': 'Organization',
          name: 'CertainTeed Corporation',
        },
      },
    ],
  };

  // Arizona Office LocalBusiness
  const arizonaOfficeSchema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': 'https://rippleroofs.com/#arizona-office',
    name: 'Ripple Roofing & Construction - Arizona',
    parentOrganization: {
      '@id': 'https://rippleroofs.com/#organization',
    },
    url: 'https://rippleroofs.com/arizona',
    logo: 'https://rippleroofs.com/images/ripple-roofing-logo.png',
    description:
      'Premium roofing services in Phoenix Metro. Tile roof specialists, foam roofing experts, monsoon damage repair. Arizona ROC 362945 licensed contractor.',
    telephone: BUSINESS_INFO_ARIZONA.phoneRaw,
    email: 'info@rippleroofs.com',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO_ARIZONA.address.street,
      addressLocality: BUSINESS_INFO_ARIZONA.address.city,
      addressRegion: BUSINESS_INFO_ARIZONA.address.state,
      postalCode: BUSINESS_INFO_ARIZONA.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO_ARIZONA.geo.latitude.toString(),
      longitude: BUSINESS_INFO_ARIZONA.geo.longitude.toString(),
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+1${BUSINESS_INFO_ARIZONA.phoneRaw}`,
        contactType: 'customer service',
        availableLanguage: ['English', 'Spanish'],
        areaServed: 'AZ',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          opens: '00:00',
          closes: '23:59',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          description: '24/7 Emergency Service',
        },
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Scottsdale',
      },
      {
        '@type': 'City',
        name: 'Phoenix',
      },
      {
        '@type': 'City',
        name: 'Tempe',
      },
      {
        '@type': 'City',
        name: 'Mesa',
      },
      {
        '@type': 'City',
        name: 'Chandler',
      },
      {
        '@type': 'City',
        name: 'Gilbert',
      },
      {
        '@type': 'City',
        name: 'Peoria',
      },
      {
        '@type': 'City',
        name: 'Surprise',
      },
      {
        '@type': 'City',
        name: 'Avondale',
      },
      {
        '@type': 'City',
        name: 'Goodyear',
      },
      {
        '@type': 'City',
        name: 'Glendale',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Arizona Roofing Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Tile Roofing',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Tile Roof Repair',
                url: 'https://rippleroofs.com/arizona/services/tile-roof-repair',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Tile Roof Replacement',
                url: 'https://rippleroofs.com/arizona/services/roof-replacement',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Foam Roofing',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Foam Roof Coating',
                url: 'https://rippleroofs.com/arizona/services/foam-roof-coating',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Emergency Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Monsoon Damage Repair',
                url: 'https://rippleroofs.com/arizona/services/monsoon-damage-repair',
              },
            },
          ],
        },
      ],
    },
    knowsAbout: [
      'Tile Roofing',
      'Foam Roofing',
      'Monsoon Damage',
      'Roof Replacement',
      'SPF Roofing',
      'Concrete Tile',
      'Clay Tile',
      'Asphalt Shingles',
      'Arizona Roofing',
    ],
    awards: ['CertainTeed Shingle Master Certification', 'Arizona ROC 362945 Licensed'],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'CertainTeed Shingle Master',
        recognizedBy: {
          '@type': 'Organization',
          name: 'CertainTeed Corporation',
        },
      },
    ],
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Arizona ROC License',
        value: BUSINESS_INFO_ARIZONA.license?.number || 'ROC 362945',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(texasOfficeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(arizonaOfficeSchema) }}
      />
    </>
  );
}
