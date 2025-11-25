import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingCallButton } from '@/components/ui/FloatingCallButton'
import { EmergencyBanner } from '@/components/ui/EmergencyBanner'
import { StickyMobileBar } from '@/components/ui/StickyMobileBar'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'

// Lazy load below-the-fold components for better initial load performance
const FooterReviews = dynamic(() => import('@/components/layout/FooterReviews').then(mod => ({ default: mod.FooterReviews })), {
  loading: () => <div className="h-96 bg-gray-50" />, // Prevent layout shift
  ssr: true
})

const ExitIntentPopup = dynamic(() => import('@/components/ui/ExitIntentPopup').then(mod => ({ default: mod.ExitIntentPopup })), {
  ssr: false, // Client-side only
  loading: () => null
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ripple Roofing & Construction - Premium Roofing Services in Central Texas',
    template: '%s | Ripple Roofing & Construction'
  },
  description: 'CertainTeed Shingle Master certified roofing experts serving Austin Metro, San Antonio, and Central Texas. Residential, commercial, and 24/7 emergency services. Fully insured. Get your free inspection today.',
  keywords: ['roofing austin', 'roofing round rock', 'roof repair texas', 'roof replacement austin', 'roofing company central texas', 'residential roofing', 'commercial roofing', 'emergency roof repair', 'CertainTeed shingle master'],
  authors: [{ name: 'Ripple Roofing & Construction' }],
  creator: 'Ripple Roofing & Construction',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Ripple Roofing & Construction',
    title: 'Ripple Roofing & Construction - Premium Roofing Services in Central Texas',
    description: 'CertainTeed Shingle Master certified roofing experts. Residential, commercial, and 24/7 emergency services in Austin Metro and Central Texas.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ripple Roofing & Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ripple Roofing & Construction - Central Texas Roofing Experts',
    description: 'CertainTeed certified roofing services. 24/7 emergency service available.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload LCP image for faster render - CRITICAL */}
        <link
          rel="preload"
          as="image"
          href="/images/hero/hero-bg.jpg"
          fetchPriority="high"
          // @ts-ignore - Next.js handles image optimization
          imageSrcSet="/images/hero/hero-bg.jpg"
        />
      </head>
      <body className="font-sans">
        {/* Local Business Schema */}
        <LocalBusinessSchema />
        
        {/* Google Analytics - Deferred for better performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3F0FNPXXC5"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3F0FNPXXC5');
          `}
        </Script>
        
        <EmergencyBanner />
        <Navbar />
        <main>{children}</main>
        <FooterReviews />
        <Footer />
        <FloatingCallButton />
        <StickyMobileBar />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
