import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogPostMetadata } from '@/lib/blog'
import { getShimmerDataURL } from '@/lib/image-blur'

interface BlogPostCardProps {
  post: BlogPostMetadata
}

export const BlogPostCard: FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-primary-100">
      {/* Featured Image */}
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-56 bg-primary-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            placeholder="blur"
            blurDataURL={getShimmerDataURL()}
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Category & Reading Time */}
        <div className="flex items-center gap-4 mb-3">
          <Link href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
            <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full hover:bg-accent-200 transition-colors">
              {post.category}
            </span>
          </Link>
          <span className="text-xs text-primary-500 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readingTime}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-display font-bold text-primary-900 mb-3 hover:text-accent-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>

        {/* Description */}
        <p className="text-primary-700 mb-4 line-clamp-3">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-primary-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {post.author.charAt(0)}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-primary-900">{post.author}</p>
              <p className="text-xs text-primary-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <button className="text-accent-600 hover:text-accent-700 font-semibold text-sm flex items-center gap-1">
              Read More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </article>
  )
}
