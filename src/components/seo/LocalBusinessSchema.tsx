import { BUSINESS_INFO_TEXAS } from '@/constants/business';

export default function LocalBusinessSchema() {
  // Organization schema - Texas only
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
      'Premium roofing services in Texas. CertainTeed ShingleMaster Premier certified contractor serving Round Rock, Austin, Georgetown, and surrounding areas with roof replacement, repairs, emergency services, and more. 24/7 emergency service available.',
    email: 'info@rippleroofs.com',
    sameAs: [
      'https://www.facebook.com/rippleroofs',
      'https://www.instagram.com/ripple_roofing/',
      'https://www.linkedin.com/company/ripple-roofing',
      'https://nextdoor.com/page/ripple-roofing-construction/',
      'https://share.google/SsBLQ1RNm8ZQ7rFrk',
    ],
    areaServed: [
      {
        '@type': 'State',
        name: 'Texas',
      },
    ],
    slogan: 'Premium Roofing Services in Texas',
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
      'Premium roofing services in Central Texas. CertainTeed ShingleMaster Premier certified contractor serving Round Rock, Austin, Georgetown, and surrounding areas.',
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
    awards: ['CertainTeed ShingleMaster Premier Certification'],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'CertainTeed ShingleMaster Premier',
        recognizedBy: {
          '@type': 'Organization',
          name: 'CertainTeed Corporation',
        },
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
    </>
  );
}
