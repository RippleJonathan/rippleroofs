export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
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
      'Premium roofing services in Central Texas. CertainTeed Shingle Master certified contractor serving Round Rock, Austin, Georgetown, and surrounding areas with roof replacement, repairs, emergency services, and more. 24/7 emergency service available.',
    telephone: '+15127635277',
    email: 'info@rippleroofs.com',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1000 Heritage Center Circle',
      addressLocality: 'Round Rock',
      addressRegion: 'TX',
      postalCode: '78664',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.5088',
      longitude: '-97.6789',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+15127635277',
        contactType: 'customer service',
        availableLanguage: ['English', 'Spanish'],
        areaServed: ['TX', 'US'],
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
    sameAs: [
      'https://www.facebook.com/rippleroofs',
      'https://www.instagram.com/ripple_roofing/',
      'https://www.linkedin.com/company/ripple-roofing',
      'https://nextdoor.com/page/ripple-roofing-construction/',
      'https://share.google/SsBLQ1RNm8ZQ7rFrk',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '87',
      bestRating: '5',
      worstRating: '1',
    },
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
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Roof Inspection',
                url: 'https://rippleroofs.com/services/roof-inspection',
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
                description: 'Emergency tarping, storm damage, leak repairs',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Storm Damage Restoration',
                url: 'https://rippleroofs.com/services/storm-damage-restoration',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Additional Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Gutter Installation',
                url: 'https://rippleroofs.com/services/gutter-installation',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Siding Installation',
                url: 'https://rippleroofs.com/services/siding-installation',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Attic Ventilation',
                url: 'https://rippleroofs.com/services/attic-ventilation',
              },
            },
          ],
        },
      ],
    },
    knowsAbout: [
      'Roofing',
      'Roof Replacement',
      'Roof Repair',
      'Storm Damage',
      'Hail Damage',
      'Emergency Roofing',
      'Residential Roofing',
      'Commercial Roofing',
      'Gutter Installation',
      'Siding Installation',
      'CertainTeed Shingles',
      'Impact-Resistant Roofing',
      'Metal Roofing',
    ],
    slogan: 'Premium Roofing Services in Central Texas',
    foundingDate: '2015',
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
