'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  image: string
}

interface RelatedPostsProps {
  currentPost: BlogPost
  allPosts: BlogPost[]
  maxPosts?: number
}

export const RelatedPosts: FC<RelatedPostsProps> = ({ 
  currentPost, 
  allPosts,
  maxPosts = 4 
}) => {
  // Calculate relevance score for each post
  const scorePosts = (post: BlogPost): number => {
    let score = 0
    
    // Don't include the current post
    if (post.slug === currentPost.slug) return -1
    
    // Same category = +10 points
    if (post.category === currentPost.category) {
      score += 10
    }
    
    // Shared tags = +3 points per tag
    const sharedTags = post.tags.filter(tag => 
      currentPost.tags.includes(tag)
    )
    score += sharedTags.length * 3
    
    // Same author = +2 points
    if (post.author === currentPost.author) {
      score += 2
    }
    
    // Recency bonus (posts from last 6 months get +1)
    const postDate = new Date(post.date)
    const sixMonthsAgo = new Date()
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)
    if (postDate > sixMonthsAgo) {
      score += 1
    }
    
    return score
  }
  
  // Get related posts sorted by relevance
  const relatedPosts = allPosts
    .map(post => ({
      post,
      score: scorePosts(post)
    }))
    .filter(({ score }) => score > 0) // Only posts with positive relevance
    .sort((a, b) => b.score - a.score) // Sort by score descending
    .slice(0, maxPosts) // Take top N posts
    .map(({ post }) => post)
  
  // Don't render if no related posts found
  if (relatedPosts.length === 0) {
    return null
  }
  
  return (
    <section className="py-12 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold text-primary-900 mb-2">
            Related Articles
          </h2>
          <p className="text-lg text-primary-600">
            Continue learning about roofing in Central Texas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-primary-100">
                <Image
                  src={post.image || '/images/blog/default.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-primary-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-primary-500">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                  <span className="flex items-center gap-1 text-accent-600 font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-10">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white font-bold rounded-lg hover:bg-accent-600 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Blog Posts
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
