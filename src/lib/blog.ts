import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
  tags: string[]
  content: string
  readingTime: string
}

export interface BlogPostMetadata {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
  tags: string[]
  readingTime: string
}

// Ensure blog directory exists
function ensureBlogDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }
}

// Get all blog post slugs
export function getAllPostSlugs(): string[] {
  ensureBlogDirectory()
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''))
  } catch (error) {
    return []
  }
}

// Get a single blog post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  ensureBlogDirectory()
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'Ripple Roofing Team',
      category: data.category || 'General',
      image: data.image || '/images/blog/default.jpg',
      tags: data.tags || [],
      content,
      readingTime: stats.text,
    }
  } catch (error) {
    return null
  }
}

// Get all blog posts (sorted by date, newest first)
export function getAllPosts(): BlogPostMetadata[] {
  ensureBlogDirectory()
  const slugs = getAllPostSlugs()
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug)
      if (!post) return null
      
      // Return metadata only (without full content)
      const { content, ...metadata } = post
      return metadata
    })
    .filter((post): post is BlogPostMetadata => post !== null)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return posts
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPostMetadata[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPostMetadata[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.tags.includes(tag))
}

// Get all categories
export function getAllCategories(): string[] {
  const allPosts = getAllPosts()
  const categories = Array.from(new Set(allPosts.map((post) => post.category)))
  return categories.sort()
}

// Get all tags
export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = Array.from(new Set(allPosts.flatMap((post) => post.tags)))
  return tags.sort()
}

// Get related posts (same category, excluding current post)
export function getRelatedPosts(slug: string, limit: number = 3): BlogPostMetadata[] {
  const currentPost = getPostBySlug(slug)
  if (!currentPost) return []

  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter((post) => post.slug !== slug && post.category === currentPost.category)
    .slice(0, limit)

  return relatedPosts
}
