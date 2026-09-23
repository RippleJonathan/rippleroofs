import type { Metadata } from 'next'

// Post-download confirmation page — nothing here for searchers, keep it out of the index.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children
}
