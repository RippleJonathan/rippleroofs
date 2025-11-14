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
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: `https://rippleroofs.com${image}`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ripple Roofing & Construction',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rippleroofs.com/images/ripple-roofing-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rippleroofs.com/blog/${slug}`,
    },
    articleSection: category,
    keywords: tags.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
