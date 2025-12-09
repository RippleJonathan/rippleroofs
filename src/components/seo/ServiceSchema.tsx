interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  slug: string;
}

export default function ServiceSchema({
  serviceName,
  description,
  slug,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    name: serviceName,
    description: description,
    provider: {
      '@type': 'RoofingContractor',
      '@id': 'https://rippleroofs.com/#organization',
      name: 'Ripple Roofing & Construction',
      telephone: '+15127635277',
      email: 'info@rippleroofs.com',
      url: 'https://rippleroofs.com',
      logo: 'https://rippleroofs.com/images/logo.png',
      image: 'https://rippleroofs.com/images/logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1000 Heritage Center Circle, #165',
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
      priceRange: '$$$',
      sameAs: [
        'https://www.facebook.com/rippleroofs',
        'https://www.instagram.com/ripple_roofing/',
        'https://www.linkedin.com/company/ripple-roofing',
        'https://nextdoor.com/page/ripple-roofing-construction/',
      ],
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
        name: 'San Antonio',
      },
      {
        '@type': 'City',
        name: 'Killeen',
      },
      {
        '@type': 'City',
        name: 'Temple',
      },
    ],
    url: `https://rippleroofs.com/services/${slug}`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${serviceName} Services`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: serviceName,
            description: description,
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceRange: '$$$',
      priceCurrency: 'USD',
      availableAtOrFrom: {
        '@type': 'Place',
        name: 'Central Texas',
      },
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://rippleroofs.com/services/${slug}`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+15127635277',
        contactType: 'customer service',
        availableLanguage: ['English', 'Spanish'],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
