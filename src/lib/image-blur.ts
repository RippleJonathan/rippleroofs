/**
 * Generate a blur placeholder data URL for images
 * This improves perceived performance by showing a blurred version while the full image loads
 */

export function getBlurDataURL(width: number = 8, height: number = 8): string {
  // Create a simple gradient blur placeholder
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f172a;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#24C4FC;stop-opacity:0.05" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)" />
      <rect width="${width}" height="${height}" fill="#f1f5f9" fill-opacity="0.8" />
    </svg>
  `
  
  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}

/**
 * Shimmer effect for loading images
 */
export function getShimmerDataURL(): string {
  const shimmer = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1">
            <animate attributeName="offset" values="-2; 1" dur="1.5s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" style="stop-color:#cbd5e1;stop-opacity:1">
            <animate attributeName="offset" values="-1; 2" dur="1.5s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" style="stop-color:#f1f5f9;stop-opacity:1">
            <animate attributeName="offset" values="0; 3" dur="1.5s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#shimmer)" />
    </svg>
  `
  
  const base64 = Buffer.from(shimmer).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}
