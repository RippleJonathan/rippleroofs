import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import { BlogPostCard } from '@/components/blog/BlogPostCard'
import { BlogCategories } from '@/components/blog/BlogCategories'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: {
    category: string
  }
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

  return {
    title: `${categoryName} | Roofing Blog`,
    description: `Expert ${categoryName.toLowerCase()} articles and guides from Central Texas roofing professionals.`,
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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              {categoryName}
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this category
            </p>
          </div>
        </Container>
      </section>

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
          </div>
        </Container>
      </section>
    </>
  )
}
