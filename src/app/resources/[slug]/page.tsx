import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LeadMagnetForm from '@/components/lead-magnets/LeadMagnetForm';
import { CheckCircle, Download, Shield, Clock } from 'lucide-react';

// Define lead magnet metadata
const leadMagnets = {
  'roof-inspection-checklist': {
    title: 'Free Roof Inspection Checklist',
    description: 'Complete guide to inspecting your roof like a pro. Includes ground-level and attic inspection items, photo documentation tips, and Texas-specific concerns.',
    metaDescription: 'Download our free comprehensive roof inspection checklist for Texas homeowners. Learn what to look for during seasonal inspections.',
    benefits: [
      'Ground-level safety inspection checklist',
      'Attic inspection guide (6 key areas)',
      'Photo documentation tips for insurance',
      'Texas-specific concerns (hail, heat, wind)',
      'Typical repair cost ranges',
      'When to call a professional vs DIY'
    ],
    preview: {
      pages: '8 pages',
      format: 'PDF Guide',
      includes: 'Checklists, photos tips, cost estimates'
    },
    color: 'blue'
  },
  'storm-damage-insurance-guide': {
    title: 'Storm Damage Insurance Claims Guide',
    description: 'Navigate the insurance claims process with confidence. Complete walkthrough from first 24 hours through final payment.',
    metaDescription: 'Free guide to filing storm damage insurance claims in Texas. Learn the 8-step process, ACV vs RCV, and how to avoid storm chasers.',
    benefits: [
      'First 24 hours critical action checklist',
      'Complete documentation requirements',
      '8-step claims process walkthrough',
      'ACV vs RCV payment explained with examples',
      'Storm chaser warning signs',
      'How to fight common claim denials',
      'Professional negotiation tips'
    ],
    preview: {
      pages: '10+ pages',
      format: 'PDF Guide',
      includes: 'Step-by-step process, examples, negotiation tips'
    },
    color: 'red'
  },
  'material-comparison-chart': {
    title: 'Roofing Material Comparison Chart',
    description: 'Side-by-side comparison of all major roofing materials. Make an informed decision based on cost, lifespan, and Texas climate suitability.',
    metaDescription: 'Compare all roofing materials for Central Texas. Free detailed chart with costs, lifespan, climate ratings, and decision guide.',
    benefits: [
      'Quick comparison table (7 materials)',
      'Detailed analysis of each material type',
      'Cost vs lifespan over 50 years',
      'Climate suitability ratings for Central Texas',
      'Wind and hail resistance ratings',
      'Decision guide based on your situation',
      'Popular brand recommendations'
    ],
    preview: {
      pages: '10+ pages',
      format: 'PDF Guide',
      includes: 'Comparison tables, detailed analysis, decision guide'
    },
    color: 'green'
  },
  'seasonal-maintenance-calendar': {
    title: 'Seasonal Roof Maintenance Calendar',
    description: 'Month-by-month maintenance guide tailored to Central Texas seasons. Know exactly what to do and when to save money and extend roof life.',
    metaDescription: 'Free seasonal roof maintenance calendar for Texas homeowners. Month-by-month tasks, cost-saving tips, and red flags.',
    benefits: [
      'Month-by-month task breakdowns',
      'Spring storm season preparation',
      'Summer heat management tips',
      'Fall major maintenance checklist',
      'Winter replacement timing (save 10-20%)',
      'Cost-saving tips with ROI analysis',
      'Red flags requiring professional help'
    ],
    preview: {
      pages: '12+ pages',
      format: 'PDF Guide',
      includes: 'Monthly tasks, cost estimates, maintenance tips'
    },
    color: 'blue'
  }
};

type LeadMagnetSlug = keyof typeof leadMagnets;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const leadMagnet = leadMagnets[params.slug as LeadMagnetSlug];
  
  if (!leadMagnet) {
    return {
      title: 'Resource Not Found',
    };
  }

  return {
    title: `${leadMagnet.title} | Ripple Roofing`,
    description: leadMagnet.metaDescription,
    openGraph: {
      title: leadMagnet.title,
      description: leadMagnet.metaDescription,
      type: 'website',
    },
  };
}

export default function LeadMagnetPage({
  params,
}: {
  params: { slug: string };
}) {
  const leadMagnet = leadMagnets[params.slug as LeadMagnetSlug];

  if (!leadMagnet) {
    notFound();
  }

  const colorClasses = {
    blue: {
      gradient: 'from-blue-600 to-blue-800',
      badge: 'bg-blue-100 text-blue-800',
      icon: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    red: {
      gradient: 'from-red-600 to-red-800',
      badge: 'bg-red-100 text-red-800',
      icon: 'text-red-600',
      button: 'bg-red-600 hover:bg-red-700'
    },
    green: {
      gradient: 'from-green-600 to-green-800',
      badge: 'bg-green-100 text-green-800',
      icon: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700'
    }
  };

  const colors = colorClasses[leadMagnet.color as keyof typeof colorClasses];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${colors.gradient} text-white py-20`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Download className="w-4 h-4" />
              <span className="text-sm font-semibold">FREE DOWNLOAD</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {leadMagnet.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {leadMagnet.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Shield className="w-4 h-4" />
                <span>{leadMagnet.preview.pages}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="w-4 h-4" />
                <span>{leadMagnet.preview.format}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Clock className="w-4 h-4" />
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What You'll Get
              </h2>
              <p className="text-gray-600 mb-8">
                This comprehensive guide includes everything you need to know:
              </p>
              <ul className="space-y-4 mb-8">
                {leadMagnet.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className={`w-6 h-6 ${colors.icon} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Preview Box */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  What's Inside:
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Format:</strong> {leadMagnet.preview.format}</p>
                  <p><strong>Length:</strong> {leadMagnet.preview.pages}</p>
                  <p><strong>Includes:</strong> {leadMagnet.preview.includes}</p>
                  <p><strong>Best For:</strong> Texas homeowners, property managers, DIY inspectors</p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>Created by licensed roofing professionals</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Texas-specific guidance and considerations</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Download Your Free Guide
                </h3>
                <p className="text-gray-600 mb-6">
                  Enter your details below and we'll send it to your inbox instantly.
                </p>
                
                <LeadMagnetForm slug={params.slug} title={leadMagnet.title} />

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy. Your information will never be shared.
                    Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Trusted by Homeowners Across Texas & Arizona
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">2,000+</div>
                <div className="text-gray-600">Roofs Installed</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all lead magnets
export function generateStaticParams() {
  return Object.keys(leadMagnets).map((slug) => ({
    slug,
  }));
}
