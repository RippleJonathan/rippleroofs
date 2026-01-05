import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Phone, MapPin, CheckCircle, Shield, Clock, Star } from 'lucide-react';
import { BUSINESS_INFO_ARIZONA } from '@/constants/business';
import { ARIZONA_LOCATIONS } from '@/constants/locations-arizona';

// Lazy load below-the-fold components
const Testimonials = dynamic(() => import('@/components/home/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true
});

const FreeResourcesSection = dynamic(() => import('@/components/home/FreeResourcesSection').then(mod => ({ default: mod.FreeResourcesSection })), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true
});

const ProjectGalleryPreview = dynamic(() => import('@/components/home/ProjectGalleryPreview').then(mod => ({ default: mod.ProjectGalleryPreview })), {
  loading: () => <div className="h-64 bg-gray-50" />,
  ssr: true
});

export const metadata: Metadata = {
  title: 'Phoenix Roofing Company | Tile, Foam & Monsoon Experts | Ripple Roofing AZ',
  description: 'Professional roofing services in Phoenix metro. Tile roof specialists, foam coating, monsoon damage repair. Arizona ROC 362945 licensed. Serving Scottsdale, Phoenix, Tempe & more. Call (602) 529-3311.',
  alternates: {
    canonical: 'https://rippleroofs.com/arizona'
  },
  openGraph: {
    title: 'Phoenix Roofing Company | Ripple Roofing Arizona',
    description: 'Arizona\'s trusted tile roof and foam coating specialists. ROC 362945 licensed. Serving Phoenix metro area.',
    url: 'https://rippleroofs.com/arizona',
  },
};

export default function ArizonaHomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Arizona Specific */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* ROC License Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold">Arizona ROC #362945 Licensed</span>
              <a 
                href={BUSINESS_INFO_ARIZONA.license?.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline text-sm"
              >
                Verify
              </a>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Phoenix Metro's Trusted<br />
              <span className="text-yellow-400">Tile Roof & Foam Coating</span><br />
              Specialists
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Serving Arizona Since 2026 | CertainTeed Shingle Master Certified
            </p>
            
            <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
              Professional roofing services for Phoenix's extreme heat and monsoon seasons. 
              Specializing in tile roof underlayment replacement, foam coating, asphalt shingles, and emergency storm repairs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${BUSINESS_INFO_ARIZONA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO_ARIZONA.phone}
              </a>
              
              <Link
                href="/arizona/quote"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
              >
                Free Estimate
              </Link>
            </div>

            {/* Service Areas */}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {ARIZONA_LOCATIONS.slice(0, 6).map((location) => (
                <Link
                  key={location.slug}
                  href={`/arizona/${location.slug}`}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-colors"
                >
                  {location.name}
                </Link>
              ))}
              <Link
                href="#service-areas"
                className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-colors"
              >
                +4 More Cities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div className="font-bold text-lg">ROC Licensed</div>
              <div className="text-sm text-gray-600">#362945</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="font-bold text-lg">5-Star Rated</div>
              <div className="text-sm text-gray-600">Google Reviews</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="font-bold text-lg">ShingleMaster</div>
              <div className="text-sm text-gray-600">CertainTeed Certified</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <div className="font-bold text-lg">24/7 Emergency</div>
              <div className="text-sm text-gray-600">Monsoon Response</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <div className="font-bold text-lg">Free Inspections</div>
              <div className="text-sm text-gray-600">No Obligation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Arizona-Specific Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Arizona Roofing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized solutions for Phoenix's extreme heat, monsoons, and unique roofing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Tile Roof Repair */}
            <Link href="/arizona/services/tile-roof-repair" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500">
                <div className="text-4xl mb-4">🏺</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">
                  Tile Roof Repair & Replacement
                </h3>
                <p className="text-gray-600 mb-4">
                  Expert tile roof services including underlayment replacement (15-20 year cycle), cracked tile repair, and full roof replacement.
                </p>
                <div className="text-blue-600 font-semibold group-hover:underline">
                  Learn More →
                </div>
              </div>
            </Link>

            {/* Foam Roof Coating */}
            <Link href="/arizona/services/foam-roof-coating" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">
                  Foam Roof Coating & Maintenance
                </h3>
                <p className="text-gray-600 mb-4">
                  SPF foam roof installation, recoating ($3-5/sq ft every 7-10 years), repairs, and preventative maintenance programs.
                </p>
                <div className="text-blue-600 font-semibold group-hover:underline">
                  Learn More →
                </div>
              </div>
            </Link>

            {/* Monsoon Damage */}
            <Link href="/arizona/services/monsoon-damage-repair" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500">
                <div className="text-4xl mb-4">⛈️</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">
                  Monsoon Damage Repair
                </h3>
                <p className="text-gray-600 mb-4">
                  24/7 emergency response for microburst winds, haboob damage, flash flooding, and storm-related roof issues.
                </p>
                <div className="text-blue-600 font-semibold group-hover:underline">
                  Learn More →
                </div>
              </div>
            </Link>

            {/* Roof Replacement */}
            <Link href="/arizona/services/roof-replacement" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">
                  Complete Roof Replacement
                </h3>
                <p className="text-gray-600 mb-4">
                  Full roof replacement with tile, foam, metal, or asphalt shingle materials engineered for Arizona's extreme climate.
                </p>
                <div className="text-blue-600 font-semibold group-hover:underline">
                  Learn More →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Arizona */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Arizona Homeowners Choose Ripple Roofing
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tile Roof Expertise</h3>
                  <p className="text-gray-600">
                    Specialists in Arizona's dominant roofing material. We understand the 15-20 year underlayment replacement cycle unique to tile roofs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">CertainTeed Shingle Master</h3>
                  <p className="text-gray-600">
                    Elite certified contractor for premium asphalt shingle installations. Extended warranties and quality guarantees on all shingle projects.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Foam Coating Certified</h3>
                  <p className="text-gray-600">
                    Experienced in SPF foam roofing systems common in Arizona. Proper recoating schedules and repair techniques.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Monsoon Preparedness</h3>
                  <p className="text-gray-600">
                    24/7 emergency response during monsoon season (June-September). Fast response to microburst and haboob damage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">HOA Approval Experts</h3>
                  <p className="text-gray-600">
                    Navigate strict Arizona HOA requirements. We handle architectural review submissions and ensure compliance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Extreme Heat Solutions</h3>
                  <p className="text-gray-600">
                    Materials and techniques designed for 120°F+ temperatures. Focus on energy efficiency and cooling cost reduction.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Arizona ROC Licensed</h3>
                  <p className="text-gray-600">
                    Fully licensed (ROC 362945), bonded, and insured. Compliant with all Arizona contractor regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <FreeResourcesSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Project Gallery Preview */}
      <ProjectGalleryPreview />

      {/* Service Areas */}
      <section id="service-areas" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving Phoenix Metro Area
            </h2>
            <p className="text-xl text-gray-600">
              Professional roofing services across 10 major cities in the Phoenix metropolitan area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ARIZONA_LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/arizona/${location.slug}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl p-6 transition-shadow border-2 border-transparent hover:border-blue-500"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {location.county}
                    </p>
                    <p className="text-xs text-gray-500">
                      {location.roofingConsiderations.primaryMaterial} • {location.roofingConsiderations.hoaPrevalence} HOA
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              ~80 mile service radius from our Glendale office
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Arizona Home?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free roof inspection and estimate from Arizona's tile and foam specialists
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO_ARIZONA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO_ARIZONA.phone}
            </a>
            
            <Link
              href="/contact?state=AZ"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Request Free Estimate
            </Link>
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
              <MapPin className="w-4 h-4" />
              <span>
                {BUSINESS_INFO_ARIZONA.address.street}, {BUSINESS_INFO_ARIZONA.address.city}, {BUSINESS_INFO_ARIZONA.address.state} {BUSINESS_INFO_ARIZONA.address.zip}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${BUSINESS_INFO_ARIZONA.email}`} className="hover:text-yellow-400 transition-colors">
                {BUSINESS_INFO_ARIZONA.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
