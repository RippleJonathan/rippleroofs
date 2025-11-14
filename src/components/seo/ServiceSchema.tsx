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
    description: description,
    provider: {
      '@type': 'RoofingContractor',
      name: 'Ripple Roofing & Construction',
      telephone: '(512) 763-5277',
      url: 'https://rippleroofs.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Round Rock',
        addressRegion: 'TX',
        postalCode: '78664',
        addressCountry: 'US',
      },
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Round Rock',
      },
      {
        '@type': 'City',
        name: 'Austin',
      },
      {
        '@type': 'City',
        name: 'Georgetown',
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
    ],
    url: `https://rippleroofs.com/services/${slug}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceRange: '$$$',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
