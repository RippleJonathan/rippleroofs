import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/blog')
const blogImagesDirectory = path.join(process.cwd(), 'public/images/blog')

export interface ComparisonTable {
  about: string
  columns: string[]
  rows: { [key: string]: string }[]
}

export interface HowToStep {
  name: string
  text: string
  image?: string
}

export interface HowToGuide {
  name: string
  description: string
  totalTime?: string
  steps: HowToStep[]
}

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
  comparisonTable?: ComparisonTable
  howTo?: HowToGuide
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

// Extract first paragraph from content for description fallback
function extractFirstParagraph(content: string): string {
  // Remove frontmatter if present
  const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---/, '').trim()
  
  // Find first paragraph (text before first heading or double newline)
  const paragraphMatch = contentWithoutFrontmatter.match(/^([\s\S]*?)(?:\n\n|^#+\s)/m)
  
  if (paragraphMatch) {
    // Clean up markdown syntax and extract plain text
    let text = paragraphMatch[1]
      .replace(/\!\[[^\]]*\]\([^\)]*\)/g, '') // Remove images
      .replace(/\[[^\]]*\]\([^\)]*\)/g, '') // Remove links
      .replace(/[\*_`]/g, '') // Remove markdown formatting
      .replace(/\n+/g, ' ') // Convert newlines to spaces
      .trim()
    
    // Limit to ~150 characters for RSS description
    if (text.length > 160) {
      text = text.substring(0, 160).trim() + '...'
    }
    
    return text
  }
  
  return ''
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
    
    // Explicitly ensure frontmatter is stripped (redundant safety check)
    const cleanContent = content.replace(/^---[\s\S]*?---\s*/, '').trim()
    
    const stats = readingTime(cleanContent)

    // Ensure valid date - default to current date if invalid
    let postDate = data.date || new Date().toISOString().split('T')[0]
    // Validate date format
    if (isNaN(Date.parse(postDate))) {
      postDate = new Date().toISOString().split('T')[0]
    }

    // Smart image handling with fuzzy matching
    let imageUrl = data.image || ''
    
    if (imageUrl) {
      // Check if exact file exists first (most common case)
      const exactPath = path.join(process.cwd(), 'public', imageUrl)
      if (fs.existsSync(exactPath)) {
        // Exact file exists, use it directly
        // (no need for fuzzy matching)
      } else {
        // Try fuzzy matching as fallback
        const matchedImage = findBestMatchingImage(imageUrl)
        imageUrl = matchedImage || generatePlaceholderImagePath(slug, data.title || slug)
      }
    } else {
      // No image specified, use placeholder
      imageUrl = generatePlaceholderImagePath(slug, data.title || slug)
    }

    return {
      slug,
      title: data.title || '',
      description: data.description || extractFirstParagraph(cleanContent) || data.excerpt || '',
      date: postDate,
      author: data.author || 'Ripple Roofing Team',
      category: data.category || 'General',
      image: imageUrl,
      tags: data.tags || [],
      content: cleanContent,
      readingTime: stats.text,
      comparisonTable: data.comparisonTable,
      howTo: data.howTo,
    }
  } catch (error) {
    return null
  }
}

// Generate placeholder image path (SVG will be generated on demand)
function generatePlaceholderImagePath(slug: string, title: string): string {
  // Return path to placeholder image generator API route
  return `/api/blog-placeholder/${slug}`
}

// Find best matching image file using fuzzy matching
function findBestMatchingImage(requestedPath: string): string | null {
  if (!requestedPath || !requestedPath.startsWith('/images/blog/')) {
    return null
  }

  // Extract just the filename from the path
  const requestedFilename = path.basename(requestedPath)
  
  try {
    // Check if exact file exists first
    const exactPath = path.join(process.cwd(), 'public', requestedPath)
    if (fs.existsSync(exactPath)) {
      return requestedPath
    }

    // If not, try fuzzy matching in blog images directory
    if (!fs.existsSync(blogImagesDirectory)) {
      return null
    }

    const allFiles = getAllFilesRecursive(blogImagesDirectory)
    
    // Extract slug/keywords from requested filename (remove extension)
    const requestedSlug = requestedFilename.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '')
    const requestedWords = requestedSlug.toLowerCase().split(/[-_\s]+/)
    
    let bestMatch: { file: string; score: number } | null = null
    
    for (const file of allFiles) {
      const filename = path.basename(file)
      const fileSlug = filename.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '')
      const fileWords = fileSlug.toLowerCase().split(/[-_\s]+/)
      
      // Calculate similarity score (number of matching words)
      let score = 0
      for (const word of requestedWords) {
        if (word.length > 2 && fileWords.some(fw => fw.includes(word) || word.includes(fw))) {
          score++
        }
      }
      
      // Exact match (case insensitive)
      if (fileSlug.toLowerCase() === requestedSlug.toLowerCase()) {
        score += 100
      }
      
      // Very close match (one word difference)
      if (score > 0 && (!bestMatch || score > bestMatch.score)) {
        bestMatch = { file, score }
      }
    }
    
    // Return best match if score is reasonable
    if (bestMatch && bestMatch.score >= 2) {
      const relativePath = '/images/blog/' + path.relative(blogImagesDirectory, bestMatch.file).replace(/\\/g, '/')
      return relativePath
    }
  } catch (error) {
    console.error('Error in fuzzy image matching:', error)
  }
  
  return null
}

// Recursively get all image files in a directory
function getAllFilesRecursive(dir: string): string[] {
  const files: string[] = []
  
  try {
    const items = fs.readdirSync(dir)
    
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        files.push(...getAllFilesRecursive(fullPath))
      } else if (/\.(jpg|jpeg|png|webp|gif)$/i.test(item)) {
        files.push(fullPath)
      }
    }
  } catch (error) {
    // Directory doesn't exist or can't be read
  }
  
  return files
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
