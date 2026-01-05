import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle, Shield, Home, TrendingUp, Award } from 'lucide-react';
import { BUSINESS_INFO_ARIZONA } from '@/constants/business';
import { EnhancedROCBadge } from '@/components/ui/EnhancedROCBadge';

export const metadata: Metadata = {
  title: 'Roof Replacement Phoenix AZ | Tile, Foam, Shingle | Ripple Roofing',
  description: 'Complete roof replacement in Phoenix metro. Tile, foam, and shingle roofing. 20-70 year warranties. Arizona ROC 362945. Free estimates. Call (602) 529-3311.',
  alternates: {
    canonical: 'https://rippleroofs.com/arizona/services/roof-replacement'
  },
};

export default function RoofReplacementPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Arizona ROC 362945 Licensed</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Roof Replacement
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Premium Roofing Systems Built for Arizona's Extreme Climate
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

      {/* Roofing Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Arizona Roofing Systems
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Tile */}
              <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-orange-600">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🏺</div>
                  <h3 className="text-2xl font-bold mb-2">Tile Roofing</h3>
                  <p className="text-gray-600 text-sm">Most Popular in Phoenix Metro</p>
                </div>
                
                <div className="mb-6 pb-6 border-b">
                  <div className="text-3xl font-bold text-orange-600 mb-1">$15-20<span className="text-lg">/sq ft</span></div>
                  <p className="text-sm text-gray-600">Installed</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>50-70 year lifespan</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Excellent heat resistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Increases home value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">HOA-preferred aesthetic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Class A fire rating</span>
                  </li>
                </ul>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-xs text-gray-700 mb-2"><strong>Best For:</strong></p>
                  <p className="text-xs text-gray-600">Sloped roofs, traditional homes, neighborhoods with strict HOA requirements</p>
                </div>

                <Link href="#tile-details" className="block text-center py-2 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition-colors font-semibold">
                  Learn More
                </Link>
              </div>

              {/* Foam */}
              <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                  BEST ENERGY EFFICIENCY
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🏠</div>
                  <h3 className="text-2xl font-bold mb-2">Foam Roofing (SPF)</h3>
                  <p className="text-gray-600 text-sm">Ideal for Flat Roofs</p>
                </div>
                
                <div className="mb-6 pb-6 border-b">
                  <div className="text-3xl font-bold text-blue-600 mb-1">$8-12<span className="text-lg">/sq ft</span></div>
                  <p className="text-sm text-gray-600">Installed</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>50+ year lifespan</strong> (with recoating)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">R-6.5 per inch insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Seamless waterproofing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">15-30% cooling cost reduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Lightweight (no added load)</span>
                  </li>
                </ul>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-xs text-gray-700 mb-2"><strong>Best For:</strong></p>
                  <p className="text-xs text-gray-600">Flat or low-slope roofs, commercial buildings, energy-conscious homeowners</p>
                </div>

                <Link href="#foam-details" className="block text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Learn More
                </Link>
              </div>

              {/* Shingle */}
              <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-green-600">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🏡</div>
                  <h3 className="text-2xl font-bold mb-2">Asphalt Shingles</h3>
                  <p className="text-gray-600 text-sm">Budget-Friendly Option</p>
                </div>
                
                <div className="mb-6 pb-6 border-b">
                  <div className="text-3xl font-bold text-green-600 mb-1">$6-10<span className="text-lg">/sq ft</span></div>
                  <p className="text-sm text-gray-600">Installed</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>20-30 year lifespan</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Most affordable option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Quick installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Wide variety of colors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Class 4 hail-resistant options</span>
                  </li>
                </ul>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-xs text-gray-700 mb-2"><strong>Best For:</strong></p>
                  <p className="text-xs text-gray-600">Budget-conscious projects, quick replacements, areas without strict HOA rules</p>
                </div>

                <Link href="#shingle-details" className="block text-center py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-semibold">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Replace */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">When It's Time to Replace Your Roof</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">⏰</span>
                  Age-Related Indicators
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Roof is 20+ years old (shingles)</li>
                  <li>• Roof is 15+ years old (underlayment under tile)</li>
                  <li>• Multiple previous repairs</li>
                  <li>• Energy bills increasing</li>
                  <li>• Neighbors replacing roofs</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🚨</span>
                  Critical Damage Signs
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Active or recurring leaks</li>
                  <li>• Sagging roof deck</li>
                  <li>• Extensive granule loss (shingles)</li>
                  <li>• Missing or damaged tiles/shingles</li>
                  <li>• Daylight visible through roof</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Cost of Waiting</h3>
              <p className="text-blue-800 mb-4">
                Delaying a needed roof replacement can lead to:
              </p>
              <ul className="space-y-1 text-sm text-blue-800">
                <li>• Interior water damage ($5,000-15,000 in repairs)</li>
                <li>• Mold remediation costs ($2,000-10,000)</li>
                <li>• Structural damage requiring permits and engineering</li>
                <li>• Higher energy bills from heat gain/loss</li>
                <li>• Decreased home value and marketability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Replacement Process
            </h2>

            <div className="space-y-6">
              {[
                { step: 1, title: 'Free Inspection & Estimate', desc: 'Comprehensive roof assessment with material recommendations and detailed pricing.' },
                { step: 2, title: 'Material Selection', desc: 'Choose your roofing system, color, and style with guidance on HOA requirements.' },
                { step: 3, title: 'Permitting & HOA Approval', desc: 'We handle all permits and architectural review submissions.' },
                { step: 4, title: 'Project Scheduling', desc: 'Coordinate timeline based on weather, HOA deadlines, and your availability.' },
                { step: 5, title: 'Complete Tear-Off', desc: 'Remove old roofing materials down to the deck, inspect for damage.' },
                { step: 6, title: 'Deck Repair & Prep', desc: 'Replace damaged decking, install ice/water barrier and underlayment.' },
                { step: 7, title: 'New Roof Installation', desc: 'Professional installation following manufacturer specs for full warranty.' },
                { step: 8, title: 'Cleanup & Final Inspection', desc: 'Magnetic sweep for nails, complete cleanup, final walkthrough and warranty.' },
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

      {/* Warranties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Warranty Protection</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Manufacturer Warranties</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 50-year limited (tile)</li>
                  <li>• 20-year system warranty (foam)</li>
                  <li>• 25-50 year shingle warranties</li>
                  <li>• Transferable to new homeowners</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Workmanship Guarantee</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 10-year installation warranty</li>
                  <li>• All labor and materials covered</li>
                  <li>• Leak-free guarantee</li>
                  <li>• Locally backed and enforced</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Return on Investment</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600 mb-2">85-95%</div>
                <p className="text-sm text-gray-700">Average ROI on roof replacement when selling</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Home className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-2">$15-25K</div>
                <p className="text-sm text-gray-700">Average increase in home value (Phoenix metro)</p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-orange-600 mb-2">15-30%</div>
                <p className="text-sm text-gray-700">Energy cost savings with modern roofing systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a New Roof?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Free inspection and detailed estimate. No obligation.
          </p>
          <a href={`tel:${BUSINESS_INFO_ARIZONA.phoneRaw}`} className="btn-accent">
            <Phone className="w-5 h-5" />
            Call {BUSINESS_INFO_ARIZONA.phone}
          </a>
          <p className="mt-4 text-sm text-blue-200">
            Arizona ROC 362945 Licensed • Serving All Phoenix Metro
          </p>
        </div>
      </section>
    </main>
  );
}
