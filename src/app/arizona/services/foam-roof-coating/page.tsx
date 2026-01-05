import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle, Shield, Droplets, Sun, Timer } from 'lucide-react';
import { BUSINESS_INFO_ARIZONA } from '@/constants/business';
import { EnhancedROCBadge } from '@/components/ui/EnhancedROCBadge';

export const metadata: Metadata = {
  title: 'Foam Roof Coating Phoenix | SPF Roof Repair | Ripple Roofing AZ',
  description: 'Foam roof coating & recoating in Phoenix metro. SPF roofing specialists. 5-10 year recoat cycles extend roof life. Arizona ROC 362945. Call (602) 529-3311.',
  alternates: {
    canonical: 'https://rippleroofs.com/arizona/services/foam-roof-coating'
  },
};

export default function FoamRoofCoatingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Arizona ROC 362945 Licensed</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Foam Roof Coating & Recoating
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Extend Your Foam Roof's Life With Professional Recoating
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${BUSINESS_INFO_ARIZONA.phoneRaw}`} className="btn-primary">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO_ARIZONA.phone}
              </a>
              <Link href="/contact?state=AZ" className="btn-secondary">
                Free Estimate
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

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Foam Roof Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
                <Droplets className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Foam Roof Recoating</h3>
                <p className="text-gray-600 mb-4">
                  Regular recoating every 5-10 years prevents UV damage and extends your foam roof indefinitely.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Surface cleaning & prep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Minor foam repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Fresh elastomeric coating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>UV protection restoration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600">
                <Sun className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">New SPF Installation</h3>
                <p className="text-gray-600 mb-4">
                  Complete spray polyurethane foam roofing system. Seamless, energy-efficient, and ideal for Arizona's flat roofs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>R-6.5 per inch insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Seamless waterproof barrier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Lightweight (no structural load)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reflective coating finish</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-600">
                <Timer className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Foam Roof Repair</h3>
                <p className="text-gray-600 mb-4">
                  Fix damaged areas before they become major problems. Quick turnaround on most repairs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Puncture repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Blistered coating removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Seam repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Drain area fixes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Foam Roofs Need Recoating */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Why Foam Roofs Need Regular Recoating</h2>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Spray polyurethane foam (SPF) roofs are one of the most durable and energy-efficient roofing systems available in Arizona. However, the foam itself is vulnerable to UV radiation, which is why it's protected by an elastomeric coating.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">The Recoat Cycle</h3>
                <p className="text-blue-800 mb-4">
                  Arizona's intense UV exposure (300+ sunny days/year) gradually degrades the protective coating. Regular recoating every 5-10 years prevents UV damage to the foam and extends your roof's life indefinitely.
                </p>
                <div className="text-sm text-blue-700">
                  <strong>Cost comparison:</strong> $3-5/sq ft for recoating vs. $8-12/sq ft for complete replacement
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Signs Your Foam Roof Needs Recoating</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">⚠️</span>
                    Early Warning Signs
                  </h4>
                  <ul className="space-y-2">
                    <li>• Coating appears chalky or faded</li>
                    <li>• Coating surface feels rough/deteriorated</li>
                    <li>• Slight color change from original</li>
                    <li>• Roof is 5-8 years old</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🚨</span>
                    Urgent Indicators
                  </h4>
                  <ul className="space-y-2">
                    <li>• Foam visible through coating</li>
                    <li>• Coating peeling or blistering</li>
                    <li>• Active leaks</li>
                    <li>• Roof age over 10 years</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Benefits of Regular Recoating</h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl mb-2">💰</div>
                  <h4 className="font-bold mb-2">Cost Savings</h4>
                  <p className="text-sm text-gray-600">
                    Preventive maintenance costs 40-60% less than reactive repairs or replacement
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h4 className="font-bold mb-2">Extended Life</h4>
                  <p className="text-sm text-gray-600">
                    Properly maintained foam roofs can last 50+ years vs. 20-25 without recoating
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl mb-2">❄️</div>
                  <h4 className="font-bold mb-2">Energy Efficiency</h4>
                  <p className="text-sm text-gray-600">
                    Fresh reflective coating reduces cooling costs by 15-30% in summer
                  </p>
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
              Our Foam Roof Recoating Process
            </h2>

            <div className="space-y-6">
              {[
                { step: 1, title: 'Inspection & Assessment', desc: 'Comprehensive evaluation of coating condition, foam integrity, and drainage.' },
                { step: 2, title: 'Power Washing', desc: 'Remove dirt, debris, and loose coating material to ensure proper adhesion.' },
                { step: 3, title: 'Foam Repairs', desc: 'Address any damaged areas, punctures, or gaps in the foam layer.' },
                { step: 4, title: 'Surface Preparation', desc: 'Primer application if needed based on existing coating condition.' },
                { step: 5, title: 'Elastomeric Coating', desc: 'Professional application of high-quality, UV-resistant coating system.' },
                { step: 6, title: 'Detail Work', desc: 'Hand-coating penetrations, edges, and critical areas for full protection.' },
                { step: 7, title: 'Final Inspection', desc: 'Quality check and warranty documentation with recommended recoat timeline.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold text-lg">
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

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">How often should I recoat my foam roof?</h3>
                <p className="text-gray-600">
                  In Arizona, plan for recoating every 5-10 years depending on coating quality and UV exposure. South-facing roofs may need more frequent attention.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Can I walk on a foam roof?</h3>
                <p className="text-gray-600">
                  Yes, but minimize traffic. Foam roofs are walkable but can be damaged by heavy equipment or frequent foot traffic. Use walk pads for regular maintenance areas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">What's the best time of year for recoating?</h3>
                <p className="text-gray-600">
                  Spring (March-May) and fall (September-November) offer ideal conditions. Avoid monsoon season (June-September) and extreme summer heat for best coating adhesion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protect Your Foam Roof Investment
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Schedule a free foam roof inspection and recoating estimate
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
