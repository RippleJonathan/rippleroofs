import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roofing Projects in Central Texas',
  description: 'Completed roof replacements, standing seam metal roofs, and Class 4 shingle installs by Ripple Roofing across Round Rock, Austin, Georgetown, Hutto, Pflugerville, and Central Texas.',
  alternates: {
    canonical: 'https://rippleroofs.com/projects',
  },
  openGraph: {
    title: 'Roofing Projects in Central Texas | Ripple Roofing & Construction',
    description: 'Completed roof replacements, standing seam metal roofs, and Class 4 shingle installs across Central Texas.',
    url: 'https://rippleroofs.com/projects',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
