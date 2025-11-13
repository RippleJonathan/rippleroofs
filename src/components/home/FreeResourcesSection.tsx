import { FC } from 'react';
import Link from 'next/link';
import { Download, CheckCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const LEAD_MAGNETS = [
  {
    title: 'Roof Inspection Checklist',
    description: 'Complete DIY guide with seasonal checkpoints, warning signs, and photo documentation tips for Texas roofs.',
    slug: 'roof-inspection-checklist',
    icon: '📋',
    benefits: [
      'Quarterly inspection schedule',
      'Ground-level safety checks',
      'Attic inspection guide',
      'Texas-specific concerns',
    ],
  },
  {
    title: 'Storm Damage Insurance Guide',
    description: 'Navigate insurance claims with confidence. First 24-hour action plan, documentation requirements, and negotiation strategies.',
    slug: 'storm-damage-insurance-guide',
    icon: '⛈️',
    benefits: [
      'First 24-hour action plan',
      'Claims process walkthrough',
      'Documentation checklist',
      'Avoid storm chasers',
    ],
  },
  {
    title: 'Material Comparison Chart',
    description: 'Data-driven analysis of 7 roofing materials with costs, lifespan projections, and climate suitability for Central Texas.',
    slug: 'material-comparison-chart',
    icon: '📊',
    benefits: [
      'Cost vs. lifespan analysis',
      'Climate suitability ratings',
      'Wind & hail performance',
      'ROI calculations',
    ],
  },
  {
    title: 'Seasonal Maintenance Calendar',
    description: 'Year-round roof care schedule with monthly tasks, cost-saving tips, and Texas-specific timing recommendations.',
    slug: 'seasonal-maintenance-calendar',
    icon: '📅',
    benefits: [
      'Month-by-month tasks',
      'Preventive maintenance tips',
      'Cost-saving strategies',
      'Red flag indicators',
    ],
  },
];

export const FreeResourcesSection: FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
              Free Roofing Resources
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Download our expert guides and make informed decisions about your roof. 
              No obligation, no sales calls—just valuable information to help you.
            </p>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {LEAD_MAGNETS.map((magnet, index) => (
              <div
                key={magnet.slug}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-primary-100"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{magnet.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary-900 mb-2">
                      {magnet.title}
                    </h3>
                    <p className="text-primary-600">
                      {magnet.description}
                    </p>
                  </div>
                </div>

                {/* Benefits List */}
                <ul className="space-y-2 mb-6">
                  {magnet.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-primary-700">
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={`/resources/${magnet.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-900 hover:bg-primary-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Free
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Professional Help?
            </h3>
            <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
              While these guides are helpful, nothing beats a professional inspection. 
              Get your free, no-obligation estimate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15127635277"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                📞 Call (512) 763-5277
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-50 text-primary-900 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
