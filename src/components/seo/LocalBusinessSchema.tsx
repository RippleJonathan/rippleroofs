export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: 'Ripple Roofing & Construction',
    image: 'https://rippleroofs.com/images/ripple-roofing-logo.png',
    '@id': 'https://rippleroofs.com',
    url: 'https://rippleroofs.com',
    telephone: '(512) 763-5277',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Round Rock',
      addressRegion: 'TX',
      postalCode: '78664',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.5083,
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
        name: 'Cedar Park',
        '@id': 'https://en.wikipedia.org/wiki/Cedar_Park,_Texas',
      },
      {
        '@type': 'City',
        name: 'Pflugerville',
        '@id': 'https://en.wikipedia.org/wiki/Pflugerville,_Texas',
      },
      {
        '@type': 'City',
        name: 'Leander',
        '@id': 'https://en.wikipedia.org/wiki/Leander,_Texas',
      },
    ],
    sameAs: [
      'https://www.facebook.com/RippleRoofs',
      'https://www.instagram.com/rippleroofs/',
      'https://www.linkedin.com/company/ripple-roofing-construction/',
      'https://nextdoor.com/page/ripple-roofing-construction/',
    ],
    description:
      'Ripple Roofing & Construction provides expert residential and commercial roofing services throughout Central Texas. Specializing in roof replacement, repairs, storm damage restoration, and insurance claims assistance.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
