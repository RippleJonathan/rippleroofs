import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import { BlogPostCard } from '@/components/blog/BlogPostCard'
import { BlogCategories } from '@/components/blog/BlogCategories'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface CategoryPageProps {
  params: {
    category: string
  }
}

// Category descriptions for SEO
const categoryDescriptions: Record<string, { description: string; seoText: string }> = {
  'maintenance': {
    description: 'Essential roof maintenance tips, seasonal checklists, and preventive care guides to extend your roof\'s lifespan and avoid costly repairs.',
    seoText: 'Regular roof maintenance is the key to maximizing your roof\'s lifespan and preventing expensive emergency repairs. Learn from Central Texas roofing experts about seasonal maintenance schedules, what to look for during inspections, and how to keep your roof in peak condition year-round. From gutter cleaning to shingle inspections, we cover everything homeowners need to know about proper roof care.'
  },
  'storm-damage': {
    description: 'Expert guidance on identifying storm damage, filing insurance claims, and getting emergency repairs after hail, wind, and severe weather events.',
    seoText: 'Central Texas experiences severe weather including hailstorms, high winds, and flash flooding that can devastate roofs. Our storm damage guides help you identify hidden damage, document everything for insurance claims, choose reputable contractors (not storm chasers), and navigate the repair process. Learn what to do in the first 48 hours after a storm and how to protect your home from further damage.'
  },
  'roofing-materials': {
    description: 'Comprehensive guides comparing roofing materials, from asphalt shingles to metal and tile roofing, with pros, cons, and cost breakdowns.',
    seoText: 'Choosing the right roofing material for Central Texas\'s climate is crucial. We compare architectural shingles, metal roofing, tile, and other options with honest assessments of durability, cost, energy efficiency, and aesthetic appeal. Learn which materials perform best in intense Texas heat, resist hail damage, and provide the best return on investment for your specific situation.'
  },
  'storm-preparation': {
    description: 'Protect your roof before storms hit with our preparation guides, weatherproofing tips, and emergency readiness checklists.',
    seoText: 'Don\'t wait for severe weather warnings to think about your roof. Our storm preparation guides help Texas homeowners inspect and reinforce their roofs before storm season, identify vulnerabilities, create emergency plans, and know when to call professionals. Being proactive can prevent thousands in damage and give you peace of mind during severe weather events.'
  },
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categorySlug = params.category
  const categoryName = categorySlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const categoryInfo = categoryDescriptions[categorySlug]
  const description = categoryInfo?.description || `Expert ${categoryName.toLowerCase()} articles and guides from Central Texas roofing professionals.`

  return {
    title: `${categoryName} | Roofing Blog`,
    description,
    openGraph: {
      title: `${categoryName} Articles | Ripple Roofing`,
      description,
    },
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.category
  const categoryName = categorySlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const allPosts = getAllPosts()
  const categories = getAllCategories()
  
  // Filter posts by category (case-insensitive)
  const posts = allPosts.filter(
    (post) => post.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  )

  if (posts.length === 0) {
    notFound()
  }

  const categoryInfo = categoryDescriptions[categorySlug]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-primary-300">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white">{categoryName}</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              {categoryName}
            </h1>
            <p className="text-xl text-primary-100 mb-4">
              {categoryInfo?.description || `Expert articles and guides on ${categoryName.toLowerCase()}`}
            </p>
            <p className="text-primary-200">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>
        </Container>
      </section>

      {/* Category Description for SEO */}
      {categoryInfo && (
        <section className="py-12 bg-primary-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-primary-700 leading-relaxed">
                {categoryInfo.seoText}
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            {/* Categories */}
            {categories.length > 0 && (
              <div className="mb-12">
                <BlogCategories categories={categories} />
              </div>
            )}

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>

            {/* Related Services CTA */}
            <div className="mt-16 bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                Need Professional Roofing Services?
              </h2>
              <p className="text-primary-700 mb-6">
                From inspections to full replacements, our CertainTeed certified team is here to help.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/services">
                  <button className="btn btn-primary">
                    View Services
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="btn btn-secondary">
                    Get Free Inspection
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
