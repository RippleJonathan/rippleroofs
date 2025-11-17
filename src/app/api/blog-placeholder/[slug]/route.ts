import { NextRequest, NextResponse } from 'next/server'
import { getPostBySlug } from '@/lib/blog'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params
  
  // Get post to extract title
  const post = getPostBySlug(slug)
  const title = post?.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  // Generate SVG placeholder with title
  const svg = generateBlogPlaceholderSVG(title)
  
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}

function generateBlogPlaceholderSVG(title: string): string {
  // Wrap text to fit in image (max 40 chars per line)
  const words = title.split(' ')
  const lines: string[] = []
  let currentLine = ''
  
  words.forEach(word => {
    if ((currentLine + word).length > 35) {
      if (currentLine) lines.push(currentLine.trim())
      currentLine = word + ' '
    } else {
      currentLine += word + ' '
    }
  })
  if (currentLine) lines.push(currentLine.trim())
  
  // Limit to 3 lines
  const displayLines = lines.slice(0, 3)
  if (lines.length > 3) {
    displayLines[2] = displayLines[2].substring(0, 32) + '...'
  }
  
  // Calculate positions for centered text
  const startY = 280 - (displayLines.length * 35)
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e3a5f;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#grad)"/>
  
  <!-- Pattern overlay -->
  <g opacity="0.1">
    <circle cx="100" cy="100" r="200" fill="#ffffff" />
    <circle cx="1100" cy="530" r="200" fill="#ffffff" />
  </g>
  
  <!-- Icon/Logo area -->
  <rect x="80" y="80" width="120" height="120" rx="20" fill="#f97316" opacity="0.9"/>
  <text x="140" y="165" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="#ffffff" text-anchor="middle">R</text>
  
  <!-- Title -->
  ${displayLines.map((line, index) => `
  <text x="80" y="${startY + (index * 70)}" font-family="Arial, sans-serif" font-size="54" font-weight="bold" fill="#ffffff">
    ${escapeXml(line)}
  </text>`).join('')}
  
  <!-- Ripple Roofing branding -->
  <text x="80" y="550" font-family="Arial, sans-serif" font-size="28" fill="#f97316" font-weight="600">
    Ripple Roofing & Construction
  </text>
</svg>`
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '&': return '&amp;'
      case "'": return '&apos;'
      case '"': return '&quot;'
      default: return c
    }
  })
}
