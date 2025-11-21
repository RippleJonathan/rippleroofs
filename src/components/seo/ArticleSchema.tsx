interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  category: string;
  tags: string[];
  slug: string;
}

export default function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  category,
  tags,
  slug,
}: ArticleSchemaProps) {
  const imageUrl = image.startsWith('http') ? image : `https://rippleroofs.com${image}`
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: [imageUrl],
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://rippleroofs.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ripple Roofing & Construction',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rippleroofs.com/images/logo.png',
        width: 600,
        height: 60,
      },
      url: 'https://rippleroofs.com',
      telephone: '+15127635277',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Round Rock',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rippleroofs.com/blog/${slug}`,
    },
    articleSection: category,
    keywords: tags.join(', '),
    inLanguage: 'en-US',
    isAccessibleForFree: 'True',
    about: {
      '@type': 'Thing',
      name: 'Roofing',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
