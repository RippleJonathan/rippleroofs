import { Metadata } from 'next';
import { BUSINESS_INFO_ARIZONA } from '@/constants/business';
import { SeasonalBanner } from '@/components/layout/SeasonalBanner';

/**
 * Arizona section layout
 * Wraps all Arizona pages with state-specific context
 */

export const metadata: Metadata = {
  title: {
    default: 'Arizona Roofing Services | Phoenix Metro | Ripple Roofing',
    template: '%s | Ripple Roofing Arizona'
  },
  description: 'Professional roofing services in Phoenix metro area. Tile roof specialists, foam coating experts, monsoon damage repair. Arizona ROC 362945. Serving Scottsdale, Phoenix, Tempe & more.',
  keywords: [
    'arizona roofing',
    'phoenix roofer',
    'scottsdale roofing',
    'tile roof repair arizona',
    'foam roof coating phoenix',
    'monsoon damage repair',
    'glendale roofing contractor',
  ],
  openGraph: {
    title: 'Ripple Roofing Arizona | Phoenix Metro Roofing Experts',
    description: 'Tile roof specialists and foam coating experts serving Phoenix metro. Arizona ROC 362945.',
    url: 'https://rippleroofs.com/arizona',
    siteName: 'Ripple Roofing & Construction',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ArizonaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Arizona seasonal banner */}
      <SeasonalBanner state="AZ" />
      
      {/* Arizona state context available to all child components */}
      <div data-state="AZ" data-office={BUSINESS_INFO_ARIZONA.office}>
        {children}
      </div>
    </>
  );
}
