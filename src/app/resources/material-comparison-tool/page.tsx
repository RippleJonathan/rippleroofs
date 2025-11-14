import { Metadata } from 'next';
import MaterialComparisonTool from './MaterialComparisonTool';

export const metadata: Metadata = {
  title: 'Roofing Material Comparison Tool | Compare All Options | Ripple Roofs',
  description: 'Interactive roofing material comparison tool. Compare costs, lifespan, hail resistance, and warranties for shingles, metal, and tile roofs in Central Texas.',
  keywords: 'roofing material comparison, roof types, shingle vs metal roof, Class 4 shingles, impact resistant roofing, Texas roofing materials, roof cost comparison',
  openGraph: {
    title: 'Interactive Roofing Material Comparison Tool',
    description: 'Compare all roofing materials side-by-side. Filter by budget, climate needs, and durability.',
    type: 'website',
  },
};

export default function Page() {
  return <MaterialComparisonTool />;
}
