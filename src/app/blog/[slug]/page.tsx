import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { getAllPostSlugs, getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { SocialShare } from '@/components/blog/SocialShare'
import { getBlurDataURL } from '@/lib/image-blur'
import { BlogSidebar } from '@/components/blog/BlogSidebar'
import ArticleSchema from '@/components/seo/ArticleSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://rippleroofs.com/blog/${params.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()

  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        title={post.title}
        description={post.description}
        image={post.image}
        datePublished={post.date}
        author={post.author}
        category={post.category}
        tags={post.tags}
        slug={params.slug}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${params.slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-900 to-primary-800 text-white py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-primary-300">
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
                <li className="text-white">{post.title}</li>
              </ol>
            </nav>

            {/* Category */}
            <Link href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
              <span className="inline-block px-3 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full mb-4">
                {post.category}
              </span>
            </Link>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-primary-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="relative h-96 bg-primary-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL={getBlurDataURL(16, 9)}
        />
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Social Share Buttons */}
              <div className="mb-8 pb-8 border-b border-primary-200">
                <SocialShare 
                  url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://rippleroofs.com'}/blog/${params.slug}`}
                  title={post.title}
                  description={post.description}
                />
              </div>

              {/* MDX Content */}
              <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary-900 prose-p:text-primary-700 prose-a:text-accent-600 hover:prose-a:text-accent-700 prose-strong:text-primary-900 prose-ul:text-primary-700 prose-ol:text-primary-700">
                <MDXRemote source={post.content} />
              </article>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-primary-200">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-primary-700">Tags:</span>
                  {post.tags.map((tag) => (
                    <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full hover:bg-primary-200 transition-colors">
                        #{tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      <RelatedPosts 
        currentPost={post}
        allPosts={allPosts}
        maxPosts={4}
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Need Roofing Services?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a free inspection and quote from Central Texas's trusted roofing experts
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <button className="btn btn-primary btn-lg">
                  Get Free Inspection
                </button>
              </Link>
              <a href="tel:5127635277">
                <button className="btn btn-secondary btn-lg">
                  Call: (512) 763-5277
                </button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
