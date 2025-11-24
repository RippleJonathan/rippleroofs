/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '22210029.fs1.hubspotusercontent-na1.net',
        pathname: '/hubfs/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
  // Enable strict mode for better development warnings
  reactStrictMode: true,
  
  // Redirects for old site URLs
  async redirects() {
    return [
      // Old "about-2" pages
      {
        source: '/about-2',
        destination: '/about',
        permanent: true,
      },
      // Old residential roofing pages
      {
        source: '/residential-roofing-2',
        destination: '/services/residential-roofing',
        permanent: true,
      },
      // Old tag pages (redirect to blog)
      {
        source: '/tag/:slug*',
        destination: '/blog',
        permanent: true,
      },
      // Old blog post redirects (examples - add specific ones as needed)
      {
        source: '/roofing-repairs-vs-replacement-when-to-choose-which-option',
        destination: '/blog',
        permanent: true,
      },
      // Old homepage variations
      {
        source: '/homepage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/services',
        permanent: true,
      },
      // Old Elementor pages
      {
        source: '/elementor-hf/:slug*',
        destination: '/',
        permanent: true,
      },
      // Remove trailing slashes and redirect to non-trailing
      {
        source: '/contact/',
        destination: '/contact',
        permanent: true,
      },
      // Old blog category redirects with URL-encoded characters
      {
        source: '/blog/category/solar-&-energy',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/category/warranties-&-protection',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/category/materials-&-energy',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/category/insurance-&-claims',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
  
  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig

