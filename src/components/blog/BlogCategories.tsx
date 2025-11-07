'use client'

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BlogCategoriesProps {
  categories: string[]
}

export const BlogCategories: FC<BlogCategoriesProps> = ({ categories }) => {
  const pathname = usePathname()

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-semibold text-primary-900">Filter by:</span>
      
      <Link href="/blog">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            pathname === '/blog'
              ? 'bg-accent-500 text-white'
              : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
          }`}
        >
          All Posts
        </button>
      </Link>

      {categories.map((category) => {
        const categorySlug = category.toLowerCase().replace(/\s+/g, '-')
        const isActive = pathname === `/blog/category/${categorySlug}`

        return (
          <Link key={category} href={`/blog/category/${categorySlug}`}>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-accent-500 text-white'
                  : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
              }`}
            >
              {category}
            </button>
          </Link>
        )
      })}
    </div>
  )
}
