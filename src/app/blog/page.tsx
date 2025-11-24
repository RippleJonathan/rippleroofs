import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import { BlogPostCard } from '@/components/blog/BlogPostCard'
import { BlogCategories } from '@/components/blog/BlogCategories'
import { BlogSidebar } from '@/components/blog/BlogSidebar'
import { ContentHubs } from '@/components/blog/ContentHubs'

export const metadata: Metadata = {
  title: 'Roofing Blog & Resources',
  description: 'Expert roofing tips, maintenance guides, and industry insights from Central Texas roofing professionals. Learn about roof repairs, replacements, and more.',
  alternates: {
    canonical: 'https://rippleroofs.com/blog'
  },
  openGraph: {
    title: 'Roofing Blog - Ripple Roofing & Construction',
    description: 'Expert roofing advice and resources for Texas homeowners',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Roofing Blog & Resources
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Expert advice, maintenance tips, and industry insights to help you protect your most valuable investment
            </p>
          </div>
        </Container>
      </section>

      {/* Content Hubs Section */}
      <section className="py-12 bg-gradient-to-b from-primary-50 to-white">
        <Container>
          <ContentHubs variant="page" />
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

            {/* Main Content with Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Blog Posts - 2/3 width */}
              <div className="lg:col-span-2">
                {posts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post) => (
                      <BlogPostCard key={post.slug} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-12 h-12 text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                      No Blog Posts Yet
                    </h2>
                    <p className="text-lg text-primary-600 mb-8">
                      We're working on creating valuable content for you. Check back soon!
                    </p>
                    <a href="/">
                      <button className="btn btn-primary">
                        Return to Homepage
                      </button>
                    </a>
                  </div>
                )}
              </div>

              {/* Sidebar - 1/3 width */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <BlogSidebar />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
