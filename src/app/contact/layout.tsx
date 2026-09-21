import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Ripple Roofing & Construction',
  description: 'Get a free roof inspection quote from Ripple Roofing & Construction. Serving Central Texas. Call (512) 763-5277 or fill out our contact form.',
  alternates: {
    canonical: 'https://rippleroofs.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
