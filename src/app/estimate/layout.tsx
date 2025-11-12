import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Instant Roof Estimate | Ripple Roofing',
  description: 'Get an instant, accurate roof replacement estimate in 60 seconds. Draw your roof on our interactive map and see pricing for CertainTeed, metal, and economic roofing packages.',
  openGraph: {
    title: 'Free Instant Roof Estimate | Ripple Roofing',
    description: 'Get an instant, accurate roof replacement estimate in 60 seconds. No pressure, no callbacks required.',
  },
}

export default function EstimateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
