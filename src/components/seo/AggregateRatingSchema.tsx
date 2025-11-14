interface AggregateRatingSchemaProps {
  ratingValue: string;
  reviewCount: string;
  bestRating?: string;
  worstRating?: string;
}

export default function AggregateRatingSchema({
  ratingValue,
  reviewCount,
  bestRating = '5',
  worstRating = '1',
}: AggregateRatingSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ripple Roofing & Construction',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: reviewCount,
      bestRating: bestRating,
      worstRating: worstRating,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
