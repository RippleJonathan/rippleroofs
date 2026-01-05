import { FC } from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ArizonaQuoteForm } from '@/components/forms/ArizonaQuoteForm';
import { BUSINESS_INFO_ARIZONA } from '@/constants/business';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get a Free Quote - Arizona | Ripple Roofing',
  description: 'Request a free roofing quote for your Phoenix metro home. Tile, foam, and shingle roofing specialists. Arizona ROC 362945 licensed. Call (602) 529-3311.',
  openGraph: {
    title: 'Get a Free Quote - Arizona Roofing',
    description: 'Request a free roofing inspection and quote from Arizona ROC 362945 licensed professionals.',
  },
};

const ArizonaQuotePage: FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold">Arizona ROC #362945 Licensed</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🎯 Get Your FREE Arizona Roofing Inspection
            </h1>
            <p className="text-xl text-blue-100">
              Expert tile, foam, and shingle roofing services across Phoenix metro. Same-day scheduling available.
            </p>
          </div>
        </Container>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Request a Free Inspection
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our Arizona team will get back to you within 24 hours with a detailed quote for your roofing project.
                </p>
                <ArizonaQuoteForm />
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-yellow-500">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                    <a
                      href={`tel:${BUSINESS_INFO_ARIZONA.phoneRaw}`}
                      className="text-yellow-600 hover:text-yellow-700 font-bold text-lg transition-colors"
                    >
                      {BUSINESS_INFO_ARIZONA.phone}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">24/7 Emergency Monsoon Service</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <a
                      href="mailto:az@rippleroofs.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors break-all"
                    >
                      az@rippleroofs.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      {BUSINESS_INFO_ARIZONA.address.street}<br />
                      {BUSINESS_INFO_ARIZONA.address.city}, {BUSINESS_INFO_ARIZONA.address.state} {BUSINESS_INFO_ARIZONA.address.zip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-gray-900 mb-3">Service Areas</h3>
                <p className="text-sm text-gray-600 mb-3">
                  We serve the entire Phoenix metropolitan area including:
                </p>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>• Scottsdale</div>
                  <div>• Phoenix</div>
                  <div>• Tempe</div>
                  <div>• Mesa</div>
                  <div>• Chandler</div>
                  <div>• Gilbert</div>
                  <div>• Glendale</div>
                  <div>• Peoria</div>
                  <div>• Surprise</div>
                  <div>• Avondale</div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>ROC #362945 Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span>CertainTeed Shingle Master</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-yellow-600" />
                    <span>Tile Roof Specialists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-purple-600" />
                    <span>Foam Coating Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-red-600" />
                    <span>24/7 Monsoon Emergency Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ArizonaQuotePage;
