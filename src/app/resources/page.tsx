import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Download, Calculator, FileText, Calendar, Shield, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Roofing Resources & Tools | Ripple Roofing',
  description: 'Free roofing guides, checklists, calculators, and tools for Texas homeowners. Download expert resources for roof inspection, storm damage claims, material selection, and seasonal maintenance.',
  alternates: {
    canonical: 'https://rippleroofs.com/resources'
  }
};

const downloadableResources = [
  {
    slug: 'roof-inspection-checklist',
    title: 'Roof Inspection Checklist',
    description: 'Complete guide to inspecting your roof like a pro. Ground-level, attic, and Texas-specific concerns.',
    icon: CheckCircle,
    pages: '8 pages',
    color: 'blue'
  },
  {
    slug: 'storm-damage-insurance-guide',
    title: 'Storm Damage Insurance Claims Guide',
    description: 'Navigate the insurance claims process from first 24 hours through final payment.',
    icon: Shield,
    pages: '10+ pages',
    color: 'red'
  },
  {
    slug: 'material-comparison-chart',
    title: 'Roofing Material Comparison Chart',
    description: 'Side-by-side comparison of all major roofing materials for Texas climate.',
    icon: FileText,
    pages: '6 pages',
    color: 'green'
  },
  {
    slug: 'seasonal-maintenance-calendar',
    title: 'Seasonal Maintenance Calendar',
    description: 'Month-by-month roofing maintenance schedule optimized for Central Texas climate.',
    icon: Calendar,
    pages: '4 pages',
    color: 'purple'
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    button: 'bg-blue-600 hover:bg-blue-700'
  },
  red: {
    bg: 'bg-red-50',
    icon: 'text-red-600',
    button: 'bg-red-600 hover:bg-red-700'
  },
  green: {
    bg: 'bg-green-50',
    icon: 'text-green-600',
    button: 'bg-green-600 hover:bg-green-700'
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'text-purple-600',
    button: 'bg-purple-600 hover:bg-purple-700'
  }
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-900 to-primary-800 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Free Roofing Resources & Tools
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Expert guides, calculators, and checklists to help you make informed roofing decisions.
              Download our free resources or use our interactive tools.
            </p>
          </div>
        </Container>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Free Downloadable Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive PDF guides you can download and reference anytime. No login required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {downloadableResources.map((resource) => {
              const Icon = resource.icon;
              const colors = colorClasses[resource.color as keyof typeof colorClasses];
              
              return (
                <div key={resource.slug} className={`${colors.bg} rounded-2xl p-8 hover:shadow-xl transition-shadow`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${colors.icon} p-3 bg-white rounded-lg shadow-sm`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Download className="w-4 h-4" />
                        <span>{resource.pages} PDF</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {resource.description}
                  </p>

                  <Link 
                    href={`/resources/${resource.slug}`}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 ${colors.button} text-white font-semibold rounded-lg transition-colors w-full`}
                  >
                    <Download className="w-5 h-5" />
                    Download Free Guide
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Interactive Tools */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Interactive Tools & Calculators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our free online tools to compare materials, calculate costs, and plan your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Material Comparison Tool */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-accent-600 p-3 bg-accent-50 rounded-lg">
                  <Calculator className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Material Comparison Tool
                  </h3>
                  <div className="text-sm text-gray-600">
                    Interactive Calculator
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Compare roofing materials side-by-side with real-time cost calculations, lifespan analysis, and suitability ratings for your home.
              </p>

              <Link 
                href="/resources/material-comparison-tool"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition-colors w-full"
              >
                Launch Tool
              </Link>
            </div>

            {/* Cost Calculator */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-primary-600 p-3 bg-primary-50 rounded-lg">
                  <Calculator className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Roofing Calculators
                  </h3>
                  <div className="text-sm text-gray-600">
                    Cost Estimators
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Get instant cost estimates for different roofing materials based on your home size, complexity, and location in Central Texas.
              </p>

              <Link 
                href="/calculators"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors w-full"
              >
                View Calculators
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Need Expert Advice?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Our resources are designed to educate, but nothing beats a personalized consultation. 
              Get a free inspection and expert recommendation for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/estimate">
                Get Free Estimate
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
