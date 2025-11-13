'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CheckCircle, Download, ArrowRight, Phone } from 'lucide-react';
import { trackPdfDownload, trackPhoneClick } from '@/lib/analytics';
import { generateRoofInspectionChecklistPDF } from '@/components/lead-magnets/RoofInspectionChecklistPDF';
import { generateStormDamageInsuranceGuidePDF } from '@/components/lead-magnets/StormDamageInsuranceGuidePDF';
import { generateMaterialComparisonChartPDF } from '@/components/lead-magnets/MaterialComparisonChartPDF';
import { generateSeasonalMaintenanceCalendarPDF } from '@/components/lead-magnets/SeasonalMaintenanceCalendarPDF';

const pdfGenerators: Record<string, () => void> = {
  'roof-inspection-checklist': generateRoofInspectionChecklistPDF,
  'storm-damage-insurance-guide': generateStormDamageInsuranceGuidePDF,
  'material-comparison-chart': generateMaterialComparisonChartPDF,
  'seasonal-maintenance-calendar': generateSeasonalMaintenanceCalendarPDF,
};

const pageContent: Record<string, {
  title: string;
  subtitle: string;
  relatedServices: Array<{ title: string; href: string; }>;
}> = {
  'roof-inspection-checklist': {
    title: 'Your Roof Inspection Checklist is Ready!',
    subtitle: 'Check your email for a copy and download it below.',
    relatedServices: [
      { title: 'Schedule a Professional Inspection', href: '/contact' },
      { title: 'Learn About Our Repair Services', href: '/services/roof-repair-cedar-park-tx' },
      { title: 'Read More Roofing Tips', href: '/blog' },
    ],
  },
  'storm-damage-insurance-guide': {
    title: 'Your Storm Damage Insurance Guide is Ready!',
    subtitle: 'Check your email for a copy and download it below.',
    relatedServices: [
      { title: 'Get a Storm Damage Inspection', href: '/contact' },
      { title: 'Learn About Insurance Claims', href: '/blog/roof-insurance-claim-guide-texas' },
      { title: 'Emergency Repair Services', href: '/services/roof-repair-cedar-park-tx' },
    ],
  },
  'material-comparison-chart': {
    title: 'Your Material Comparison Chart is Ready!',
    subtitle: 'Check your email for a copy and download it below.',
    relatedServices: [
      { title: 'Get a Free Roof Estimate', href: '/contact' },
      { title: 'Explore Replacement Options', href: '/services/roof-replacement-cedar-park-tx' },
      { title: 'Compare Materials in Detail', href: '/blog' },
    ],
  },
  'seasonal-maintenance-calendar': {
    title: 'Your Seasonal Maintenance Calendar is Ready!',
    subtitle: 'Check your email for a copy and download it below.',
    relatedServices: [
      { title: 'Schedule Maintenance Service', href: '/contact' },
      { title: 'Learn About Preventive Care', href: '/blog' },
      { title: 'Get a Free Inspection', href: '/contact' },
    ],
  },
};

export default function ThankYouPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [isDownloading, setIsDownloading] = useState(false);
  const content = pageContent[slug];

  // Auto-download on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      handleDownload();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    const generator = pdfGenerators[slug];
    if (generator) {
      try {
        generator();
        // Track successful PDF download
        trackPdfDownload(content.title, slug);
      } catch (error) {
        console.error('PDF generation error:', error);
        alert('There was an error generating your PDF. Please contact us at (512) 763-5277 and we\'ll send it to you directly.');
      }
    }
    setIsDownloading(false);
  };

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Success Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-white/90">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Download Button */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-8 shadow-lg text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Download Your Free Guide
              </h2>
              <p className="text-gray-600 mb-6">
                Click the button below to download your PDF. It will also be sent to your email.
              </p>
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
              >
                <Download className="w-5 h-5" />
                {isDownloading ? 'Generating PDF...' : 'Download Now'}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Didn't receive the email? Check your spam folder or{' '}
                <a 
                  href="tel:+15127635277" 
                  className="text-blue-600 hover:underline"
                  onClick={() => trackPhoneClick('thank_you_page')}
                >
                  call us at (512) 763-5277
                </a>
              </p>
            </div>

            {/* What's Next */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What's Next?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Review Your Guide
                    </h3>
                    <p className="text-gray-600">
                      Read through the comprehensive information we've provided. Take notes on anything that applies to your situation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Assess Your Roof
                    </h3>
                    <p className="text-gray-600">
                      Use the information to understand your roof's condition and what actions you might need to take.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Get Professional Help
                    </h3>
                    <p className="text-gray-600">
                      When you're ready, contact us for a free inspection and estimate. We'll help you with any roofing needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Take Action?
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Get a free professional roof inspection and estimate
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15127635277"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => trackPhoneClick('thank_you_cta')}
                >
                  <Phone className="w-5 h-5" />
                  Call (512) 763-5277
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors duration-200"
                >
                  Request Free Estimate
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Related Resources */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Helpful Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {content.relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-200 group"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Choose Ripple Roofing?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">2,000+</div>
                <div className="text-gray-600 font-medium">Roofs Installed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
