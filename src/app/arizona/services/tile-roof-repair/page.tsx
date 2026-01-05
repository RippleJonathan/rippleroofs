import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle, Shield, Clock, DollarSign, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO_ARIZONA } from '@/constants/business';
import { EnhancedROCBadge } from '@/components/ui/EnhancedROCBadge';

export const metadata: Metadata = {
  title: 'Tile Roof Repair Phoenix | Underlayment Replacement | Ripple Roofing AZ',
  description: 'Expert tile roof repair in Phoenix metro. Underlayment replacement (15-20 year cycle), cracked tile repair, full replacement. Arizona ROC 362945. Call (602) 529-3311.',
  alternates: {
    canonical: 'https://rippleroofs.com/arizona/services/tile-roof-repair'
  },
};

export default function TileRoofRepairPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Arizona ROC 362945 Licensed</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tile Roof Repair & Replacement
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Phoenix Metro's Tile Roofing Specialists
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${BUSINESS_INFO_ARIZONA.phoneRaw}`} className="btn-primary">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO_ARIZONA.phone}
              </a>
              <Link href="/contact?state=AZ" className="btn-secondary">
                Free Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROC License Badge */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <EnhancedROCBadge variant="banner" />
          </div>
        </div>
      </section>

      {/* Tile Roof Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Tile Roof Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
                <div className="text-4xl mb-4">🏺</div>
                <h3 className="text-xl font-bold mb-3">Underlayment Replacement</h3>
                <p className="text-gray-600 mb-4">
                  The most common tile roof issue in Arizona. Underlayment fails after 15-20 years while tiles last 50+ years.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Complete underlayment replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tile removal and preservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>New weather barrier installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tile reinstallation</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>$12,000-$25,000 typical project</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600">
                <div className="text-4xl mb-4">🔨</div>
                <h3 className="text-xl font-bold mb-3">Cracked Tile Repair</h3>
                <p className="text-gray-600 mb-4">
                  Individual tile replacement from thermal shock, wind damage, or walking traffic.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Single or multiple tile replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Color/style matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Roof walk pads installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Valley repair</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>$300-$2,000 depending on scope</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-600">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3">Full Tile Replacement</h3>
                <p className="text-gray-600 mb-4">
                  Complete roof replacement with new tile when current tiles are beyond repair.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Concrete or clay tile options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Multiple profile choices (flat, S-tile, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>HOA-approved colors and styles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>40-70 year lifespan</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>$15-$20/sq ft installed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 15-Year Problem */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">
                    The 15-Year Problem Nobody Talks About
                  </h3>
                  <p className="text-red-800">
                    Your tile roof was likely sold as a "50-year roof," but the underlayment beneath those tiles only lasts 15-20 years in Arizona's extreme heat. When it fails, you need a costly replacement even though the tiles look perfect.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-4">Why Tile Roof Underlayment Fails in Arizona</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Tile roofs are incredibly durable in Arizona—concrete and clay tiles can last 50-70 years. However, the underlayment (the waterproof barrier beneath the tiles) experiences extreme degradation from:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌡️</span>
                  <div>
                    <strong>Extreme Heat:</strong> Roof surface temperatures reach 180-200°F in summer, causing accelerated aging of synthetic and felt underlayment.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">☀️</span>
                  <div>
                    <strong>UV Exposure:</strong> Even under tiles, UV radiation degrades underlayment materials through tile gaps and during monsoons.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌡️</span>
                  <div>
                    <strong>Thermal Shock:</strong> Daily 45-50°F temperature swings cause expansion/contraction cycles that break down materials.
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Signs Your Underlayment Needs Replacement</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                  <h4 className="font-bold mb-2">🚨 Interior Signs</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Water stains on ceilings</li>
                    <li>• Active leaks after rain</li>
                    <li>• Mold or mildew growth</li>
                    <li>• Peeling interior paint</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                  <h4 className="font-bold mb-2">👁️ Roof Inspection Findings</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Visible underlayment deterioration</li>
                    <li>• Brittle or crumbling material</li>
                    <li>• Separation at seams</li>
                    <li>• Roof age 15+ years</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Tile Roof Repair Process
            </h2>

            <div className="space-y-6">
              {[
                { step: 1, title: 'Free Inspection', desc: 'Comprehensive roof assessment with photo documentation and detailed report.' },
                { step: 2, title: 'Detailed Estimate', desc: 'Transparent pricing breakdown including materials, labor, and timeline.' },
                { step: 3, title: 'HOA Approval Assistance', desc: 'We help navigate architectural review requirements if needed.' },
                { step: 4, title: 'Tile Removal & Storage', desc: 'Careful removal and organization of existing tiles for reuse.' },
                { step: 5, title: 'Underlayment Replacement', desc: 'Installation of premium synthetic underlayment rated for Arizona heat.' },
                { step: 6, title: 'Tile Reinstallation', desc: 'Professional reinstallation with proper attachment and sealing.' },
                { step: 7, title: 'Quality Inspection', desc: 'Final walkthrough and warranty documentation.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule Your Free Tile Roof Inspection
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Expert diagnosis and honest recommendations. No obligation.
          </p>
          <a href={`tel:${BUSINESS_INFO_ARIZONA.phoneRaw}`} className="btn-accent">
            <Phone className="w-5 h-5" />
            Call {BUSINESS_INFO_ARIZONA.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
