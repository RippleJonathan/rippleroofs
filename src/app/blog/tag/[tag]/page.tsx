import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { getAllPosts, getAllTags } from '@/lib/blog'
import { BlogPostCard } from '@/components/blog/BlogPostCard'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface TagPageProps {
  params: {
    tag: string
  }
}

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const tagSlug = params.tag
  const tagName = tagSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${tagName} | Roofing Blog`,
    description: `Articles tagged with ${tagName} from Central Texas roofing professionals.`,
  }
}

export default function TagPage({ params }: TagPageProps) {
  const tagSlug = params.tag
  const tagName = tagSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const allPosts = getAllPosts()
  
  // Filter posts by tag (case-insensitive)
  const posts = allPosts.filter((post) =>
    post.tags.some(
      (tag) => tag.toLowerCase().replace(/\s+/g, '-') === tagSlug
    )
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
            <div className="mb-4">
              <Link href="/blog">
                <span className="text-primary-300 hover:text-white transition-colors text-sm">
                  ← Back to Blog
                </span>
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              #{tagName}
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} tagged with {tagName}
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
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
