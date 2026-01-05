import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle, Shield, Clock, Wind, CloudRain, Zap } from 'lucide-react';
import { BUSINESS_INFO_ARIZONA } from '@/constants/business';
import { EnhancedROCBadge } from '@/components/ui/EnhancedROCBadge';

export const metadata: Metadata = {
  title: 'Emergency Monsoon Roof Repair Phoenix | 24/7 Storm Damage | Ripple Roofing',
  description: '24/7 emergency monsoon roof repair in Phoenix metro. Wind damage, haboob repairs, leak fixes. ROC 362945. Insurance claim assistance. Call (602) 529-3311 now.',
  alternates: {
    canonical: 'https://rippleroofs.com/arizona/services/monsoon-damage-repair'
  },
};

export default function MonsoonDamageRepairPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
            <Clock className="w-5 h-5 animate-pulse" />
            <span>24/7 EMERGENCY MONSOON REPAIR • CALL NOW: {BUSINESS_INFO_ARIZONA.phone}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Arizona ROC 362945 Licensed</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              24/7 Emergency Monsoon Roof Repair
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Rapid Response to Storm Damage Across Phoenix Metro
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${BUSINESS_INFO_ARIZONA.phoneRaw}`} className="btn-accent animate-pulse">
                <Phone className="w-5 h-5" />
                EMERGENCY: {BUSINESS_INFO_ARIZONA.phone}
              </a>
              <Link href="/contact?state=AZ" className="btn-secondary">
                Schedule Inspection
              </Link>
            </div>

            <p className="mt-6 text-sm text-blue-200">
              Average response time: &lt;2 hours for emergencies
            </p>
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

      {/* Monsoon Damage Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Common Monsoon Roof Damage
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
                <Wind className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Wind Damage</h3>
                <p className="text-gray-600 mb-4">
                  60+ mph winds during monsoons can lift tiles, tear shingles, and compromise roof integrity.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Lifted or displaced roof tiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Missing shingles or panels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Damaged flashing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Exposed underlayment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-600">
                <CloudRain className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Water Intrusion</h3>
                <p className="text-gray-600 mb-4">
                  Heavy rainfall (1-3 inches/hour) can overwhelm drainage systems and exploit weak points.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Active leaks and water damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Clogged drains causing ponding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Compromised seals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Interior water stains</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-600">
                <Zap className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Debris & Haboob Damage</h3>
                <p className="text-gray-600 mb-4">
                  Flying debris and dust storms can cause impact damage and abrasive wear to roofing materials.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Punctures from airborne objects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Coating abrasion (foam roofs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Broken tiles from impacts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tree branch damage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Emergency Response Process</h2>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">
                    When to Call for Emergency Service
                  </h3>
                  <ul className="text-red-800 space-y-1">
                    <li>• Active leaking inside your home</li>
                    <li>• Visible structural damage to roof</li>
                    <li>• Large areas of missing roofing material</li>
                    <li>• Water pooling on flat roof sections</li>
                    <li>• Exposed roof deck or underlayment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { 
                  step: 1, 
                  title: 'Emergency Call', 
                  time: 'Immediate',
                  desc: 'Call our 24/7 emergency line. We answer every call, no voicemail.'
                },
                { 
                  step: 2, 
                  title: 'Rapid Assessment', 
                  time: '&lt;2 hours',
                  desc: 'Emergency response team dispatched to your location for damage assessment.'
                },
                { 
                  step: 3, 
                  title: 'Temporary Protection', 
                  time: 'Same day',
                  desc: 'Emergency tarping, leak sealing, or temporary repairs to prevent further damage.'
                },
                { 
                  step: 4, 
                  title: 'Documentation', 
                  time: '1-2 days',
                  desc: 'Complete photo documentation and damage report for insurance claims.'
                },
                { 
                  step: 5, 
                  title: 'Permanent Repair', 
                  time: '3-7 days',
                  desc: 'Scheduled permanent repairs once materials are sourced and approved.'
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Claims */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Insurance Claim Assistance</h2>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                We work directly with insurance companies and adjusters to ensure your monsoon damage claim is properly documented and processed. Our team has experience with all major insurance carriers.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-blue-600" />
                    We Provide
                  </h3>
                  <ul className="space-y-2">
                    <li>• Comprehensive damage documentation</li>
                    <li>• Professional photo evidence</li>
                    <li>• Detailed repair estimates</li>
                    <li>• Expert witness testimony if needed</li>
                    <li>• Direct communication with adjusters</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    You Get
                  </h3>
                  <ul className="space-y-2">
                    <li>• Faster claim processing</li>
                    <li>• Accurate damage assessment</li>
                    <li>• Maximum coverage eligibility</li>
                    <li>• Professional repair documentation</li>
                    <li>• Peace of mind</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <h4 className="font-bold text-yellow-900 mb-2">Important: File Claims Within 1 Year</h4>
                <p className="text-yellow-800 text-sm">
                  Arizona homeowners insurance policies typically require storm damage claims within 1 year of the incident. Don't wait—contact us immediately after monsoon damage for documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Monsoon Season Preparation</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Before Monsoon Season (May)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Schedule professional roof inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Clean all drains and scuppers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Trim overhanging tree branches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Secure loose tiles or shingles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Check and repair flashing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">After Major Storms</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Visual inspection from ground level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Check for missing materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Look for interior water stains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Clear debris from roof surface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Call for professional inspection if damage suspected</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Clock className="w-16 h-16 mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Monsoon Damage?
          </h2>
          <p className="text-xl mb-8">
            We're Available 24/7 • Average Response Time &lt;2 Hours
          </p>
          <a href={`tel:${BUSINESS_INFO_ARIZONA.phoneRaw}`} className="btn-accent bg-white text-red-600 hover:bg-gray-100">
            <Phone className="w-5 h-5" />
            CALL NOW: {BUSINESS_INFO_ARIZONA.phone}
          </a>
          <p className="mt-4 text-sm text-red-100">
            ROC 362945 Licensed & Insured • Serving All Phoenix Metro
          </p>
        </div>
      </section>
    </main>
  );
}
