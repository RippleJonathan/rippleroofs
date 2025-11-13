import { FC } from 'react';
import Link from 'next/link';
import { Download, CheckCircle } from 'lucide-react';

interface LeadMagnetCTAProps {
  serviceSlug: string;
}

// Map services to most relevant lead magnets
const SERVICE_LEAD_MAGNET_MAP: Record<string, {
  slug: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  relevance: string;
}> = {
  'storm-damage-restoration': {
    slug: 'storm-damage-insurance-guide',
    title: 'Storm Damage Insurance Guide',
    description: 'Navigate insurance claims with confidence. Complete first 24-hour action plan, documentation requirements, and negotiation strategies.',
    icon: '⛈️',
    benefits: [
      'First 24-hour action plan after storm',
      'Complete claims process walkthrough',
      'Documentation checklist with examples',
      'How to avoid storm chaser scams',
    ],
    relevance: 'Filing a storm damage claim? This guide walks you through every step of the insurance process.',
  },
  'roof-inspections': {
    slug: 'roof-inspection-checklist',
    title: 'DIY Roof Inspection Checklist',
    description: 'Complete seasonal inspection guide with safety procedures, warning signs, and photo documentation tips for Texas roofs.',
    icon: '📋',
    benefits: [
      'Quarterly inspection schedule',
      'Ground-level safety procedures',
      'Attic inspection walkthrough',
      'Texas-specific concerns',
    ],
    relevance: 'Want to monitor your roof between professional inspections? Use this comprehensive checklist.',
  },
  'residential-roofing': {
    slug: 'material-comparison-chart',
    title: 'Roofing Material Comparison Chart',
    description: 'Data-driven analysis of 7 roofing materials with costs, lifespan projections, and climate suitability for Central Texas.',
    icon: '📊',
    benefits: [
      'Cost vs. lifespan analysis',
      'Climate suitability ratings',
      'Wind & hail performance data',
      'ROI calculations included',
    ],
    relevance: 'Choosing roofing materials? Compare all your options with detailed cost and performance data.',
  },
  'emergency-roof-repair': {
    slug: 'storm-damage-insurance-guide',
    title: 'Storm Damage Insurance Guide',
    description: 'Navigate insurance claims with confidence. Complete first 24-hour action plan, documentation requirements, and negotiation strategies.',
    icon: '⛈️',
    benefits: [
      'Emergency response checklist',
      'Temporary repair procedures',
      'Documentation for insurance',
      'When to call professionals',
    ],
    relevance: 'Dealing with emergency roof damage? This guide helps you respond quickly and document properly.',
  },
  'roof-replacement': {
    slug: 'material-comparison-chart',
    title: 'Roofing Material Comparison Chart',
    description: 'Data-driven analysis of 7 roofing materials with costs, lifespan projections, and climate suitability for Central Texas.',
    icon: '📊',
    benefits: [
      'Compare all material options',
      'Lifespan & warranty details',
      'Texas climate suitability',
      'Budget planning tools',
    ],
    relevance: 'Planning a roof replacement? Compare materials to find the best value for your home.',
  },
  'roof-maintenance': {
    slug: 'seasonal-maintenance-calendar',
    title: 'Seasonal Roof Maintenance Calendar',
    description: 'Year-round maintenance schedule with monthly tasks, cost-saving tips, and Texas-specific timing recommendations.',
    icon: '📅',
    benefits: [
      'Month-by-month task list',
      'Preventive maintenance tips',
      'Cost-saving strategies',
      'Red flag indicators',
    ],
    relevance: 'Extend your roof\'s lifespan with proper maintenance. Follow this seasonal calendar.',
  },
  'commercial-roofing': {
    slug: 'material-comparison-chart',
    title: 'Roofing Material Comparison Chart',
    description: 'Data-driven analysis of commercial roofing materials with costs, lifespan projections, and performance ratings.',
    icon: '📊',
    benefits: [
      'Commercial material options',
      'ROI & lifecycle costs',
      'Performance in Texas climate',
      'Maintenance requirements',
    ],
    relevance: 'Evaluating commercial roofing options? Compare materials based on cost and longevity.',
  },
};

// Default lead magnet for services without specific mapping
const DEFAULT_LEAD_MAGNET = {
  slug: 'roof-inspection-checklist',
  title: 'Free Roof Inspection Checklist',
  description: 'Complete seasonal inspection guide with safety procedures, warning signs, and documentation tips.',
  icon: '📋',
  benefits: [
    'Quarterly inspection schedule',
    'Ground-level safety procedures',
    'Warning signs to watch for',
    'Photo documentation guide',
  ],
  relevance: 'Stay on top of your roof\'s condition with our comprehensive inspection checklist.',
};

export const ServiceLeadMagnetCTA: FC<LeadMagnetCTAProps> = ({ serviceSlug }) => {
  const leadMagnet = SERVICE_LEAD_MAGNET_MAP[serviceSlug] || DEFAULT_LEAD_MAGNET;

  return (
    <section className="py-16 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-bold mb-4">
                <Download className="w-4 h-4" />
                Free Resource
              </div>
              <div className="text-5xl mb-4">{leadMagnet.icon}</div>
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-3">
                {leadMagnet.title}
              </h2>
              <p className="text-primary-600 mb-6 leading-relaxed">
                {leadMagnet.description}
              </p>
              
              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                {leadMagnet.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/resources/${leadMagnet.slug}`}
                className="inline-flex items-center justify-center gap-2 bg-primary-900 hover:bg-primary-800 text-white font-bold py-4 px-8 rounded-lg transition-colors w-full sm:w-auto"
              >
                <Download className="w-5 h-5" />
                Download Free Guide
              </Link>

              <p className="text-sm text-primary-500 mt-4">
                No credit card required • Instant PDF download • No spam
              </p>
            </div>

            {/* Right Side - Relevance & CTA */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 p-8 lg:p-12 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-4">Why This Matters</h3>
              <p className="text-primary-100 mb-8 leading-relaxed text-lg">
                {leadMagnet.relevance}
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h4 className="font-bold mb-3">What You'll Learn:</h4>
                <ul className="space-y-2 text-sm text-primary-100">
                  <li className="flex items-center gap-2">
                    <span className="text-accent-400">✓</span>
                    <span>Step-by-step instructions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-400">✓</span>
                    <span>Expert tips from professionals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-400">✓</span>
                    <span>Texas-specific recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-400">✓</span>
                    <span>Cost-saving strategies</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-sm text-primary-200 mb-4">
                  Need professional help instead?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+15127635277"
                    className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    📞 Call (512) 763-5277
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Get Free Estimate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
