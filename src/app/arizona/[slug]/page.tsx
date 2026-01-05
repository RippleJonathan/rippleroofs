import { FC } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MapPin, Home, CheckCircle, Clock, Shield, Sun, CloudRain, Wind } from 'lucide-react';
import { ARIZONA_LOCATIONS, getArizonaLocationBySlug } from '@/constants/locations-arizona';
import { BUSINESS_INFO_ARIZONA } from '@/constants/business';
import { CitySchema } from '@/components/seo/CitySchema';

interface ArizonaCityPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all Arizona cities
export async function generateStaticParams() {
  return ARIZONA_LOCATIONS.map((location) => ({
    slug: location.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ArizonaCityPageProps): Promise<Metadata> {
  const location = getArizonaLocationBySlug(params.slug);
  
  if (!location) {
    return {
      title: 'City Not Found',
    };
  }

  const title = `${location.name} Roofing Company | Tile & Foam Specialists | Ripple Roofing AZ`;
  const description = `Professional roofing services in ${location.name}, Arizona. Tile roof specialists, foam coating, monsoon damage repair. Arizona ROC 362945. Average cost: ${location.roofingConsiderations.averageCostPerSqFt}. Call (602) 529-3311.`;

  return {
    title,
    description,
    keywords: [
      `${location.name} roofer`,
      `${location.name} roofing company`,
      `tile roof repair ${location.name}`,
      `foam roofing ${location.name}`,
      `${location.name} arizona roofing`,
    ],
    openGraph: {
      title,
      description,
      locale: 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `https://rippleroofs.com/arizona/${params.slug}`
    }
  };
}

const ArizonaCityPage: FC<ArizonaCityPageProps> = ({ params }) => {
  const location = getArizonaLocationBySlug(params.slug);

  if (!location) {
    notFound();
  }

  const isTier1 = ['scottsdale', 'phoenix', 'tempe'].includes(location.slug);

  return (
    <main className="min-h-screen bg-white">
      {/* City-Specific Schema */}
      <CitySchema
        cityName={location.name}
        stateName="Arizona"
        serviceAreaRadius={25}
        latitude={location.coordinates.latitude}
        longitude={location.coordinates.longitude}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/arizona" className="hover:text-blue-600">Arizona</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{location.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">{location.name}, {location.county}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {location.name} Roofing Company
            </h1>
            
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              {location.roofingConsiderations.primaryMaterial} Specialists | Arizona ROC 362945 Licensed
            </p>
            
            <p className="text-lg mb-8 text-blue-200 max-w-2xl">
              {location.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`tel:${BUSINESS_INFO_ARIZONA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO_ARIZONA.phone}
              </a>
              
              <Link
                href="/contact?state=AZ"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Free Roof Inspection
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div>
                <div className="text-sm text-blue-200 mb-1">Primary Material</div>
                <div className="font-bold">{location.roofingConsiderations.primaryMaterial}</div>
              </div>
              <div>
                <div className="text-sm text-blue-200 mb-1">Avg. Cost/Sq Ft</div>
                <div className="font-bold">{location.roofingConsiderations.averageCostPerSqFt}</div>
              </div>
              <div>
                <div className="text-sm text-blue-200 mb-1">HOA Prevalence</div>
                <div className="font-bold">{location.roofingConsiderations.hoaPrevalence}</div>
              </div>
              <div>
                <div className="text-sm text-blue-200 mb-1">Response Time</div>
                <div className="font-bold">Same Day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Roofing Issues */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Common Roofing Challenges in {location.name}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {location.roofingConsiderations.commonIssues.map((issue, index) => (
                <div key={index} className="flex gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold">!</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{issue}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-blue-900">
                <strong>Local Expertise Matters:</strong> We understand {location.name}'s unique roofing challenges 
                and use materials and techniques specifically engineered for Arizona's extreme climate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for This City */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our {location.name} Roofing Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-transparent hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold mb-3">Tile Roof Services</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Underlayment replacement (15-20 year cycle)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Cracked tile repair & replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Full tile roof replacement</span>
                  </li>
                </ul>
                <Link href="/arizona/services/tile-roof-repair" className="text-blue-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-transparent hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold mb-3">Foam Roof Services</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>SPF foam roof installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Recoating (every 7-10 years)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Foam roof repairs & maintenance</span>
                  </li>
                </ul>
                <Link href="/arizona/services/foam-roof-coating" className="text-blue-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-transparent hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold mb-3">Emergency Services</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>24/7 monsoon damage response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Microburst wind damage repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Emergency tarping & temporary fixes</span>
                  </li>
                </ul>
                <Link href="/arizona/services/monsoon-damage-repair" className="text-blue-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-transparent hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold mb-3">Complete Replacement</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Full roof replacement (tile, foam, metal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Energy-efficient upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>HOA approval assistance</span>
                  </li>
                </ul>
                <Link href="/arizona/services/roof-replacement" className="text-blue-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods (if Tier 1) */}
      {isTier1 && location.neighborhoods && location.neighborhoods.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {location.name} Neighborhoods We Serve
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We proudly serve homeowners throughout {location.name} and surrounding communities, with specialized expertise in each neighborhood's unique requirements.
              </p>

              {/* Detailed Neighborhood Cards for Tier 1 */}
              {location.slug === 'scottsdale' && (
                <div className="space-y-6 mb-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Home className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Silverleaf</h3>
                        <p className="text-gray-600 mb-3">
                          Ultra-luxury community in North Scottsdale with estates ranging from $3-15M. Tile roofing is mandatory per HOA with strict architectural review. Custom clay tile installations are common, with underlayment replacement cycles critical due to premium tile preservation requirements.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-semibold">Avg. Project Cost:</span> $35,000-75,000
                          </div>
                          <div>
                            <span className="font-semibold">Common Material:</span> Premium Clay Tile
                          </div>
                          <div>
                            <span className="font-semibold">HOA Review:</span> 4-6 weeks
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Home className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">DC Ranch</h3>
                        <p className="text-gray-600 mb-3">
                          Master-planned community with rigorous architectural standards. Requires specific tile profiles and colors from approved palettes. We maintain relationships with DC Ranch architectural review committee for faster approvals.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-semibold">Avg. Project Cost:</span> $28,000-50,000
                          </div>
                          <div>
                            <span className="font-semibold">Common Material:</span> Concrete S-Tile
                          </div>
                          <div>
                            <span className="font-semibold">HOA Review:</span> 3-4 weeks
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Home className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Grayhawk</h3>
                        <p className="text-gray-600 mb-3">
                          Family-oriented luxury community with established homes. Mix of tile and foam roofing. Known for HOA flexibility compared to newer developments. Popular for tile underlayment replacement projects.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-semibold">Avg. Project Cost:</span> $22,000-40,000
                          </div>
                          <div>
                            <span className="font-semibold">Common Material:</span> Concrete Flat Tile
                          </div>
                          <div>
                            <span className="font-semibold">HOA Review:</span> 2-3 weeks
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {location.slug === 'phoenix' && (
                <div className="space-y-6 mb-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Home className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Arcadia</h3>
                        <p className="text-gray-600 mb-3">
                          Mid-century modern homes with unique architectural requirements. Original tile roofs from 1950s-1970s often need complete replacement. No HOA restrictions allow for material flexibility while preserving historic aesthetics.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-semibold">Avg. Project Cost:</span> $18,000-35,000
                          </div>
                          <div>
                            <span className="font-semibold">Common Material:</span> Tile or Metal
                          </div>
                          <div>
                            <span className="font-semibold">HOA Review:</span> None
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Home className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Ahwatukee</h3>
                        <p className="text-gray-600 mb-3">
                          Large master-planned community in South Phoenix with moderate HOA oversight. Mix of tile and foam roofing systems. Popular area for foam recoating projects due to flat roof prevalence.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-semibold">Avg. Project Cost:</span> $15,000-28,000
                          </div>
                          <div>
                            <span className="font-semibold">Common Material:</span> Foam or Tile
                          </div>
                          <div>
                            <span className="font-semibold">HOA Review:</span> 2-3 weeks
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Home className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Desert Ridge</h3>
                        <p className="text-gray-600 mb-3">
                          Newer development in North Phoenix with contemporary homes. Tile roofing standard with newer underlayment systems. Good area for preventive maintenance before 15-year underlayment failure point.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-semibold">Avg. Project Cost:</span> $16,000-30,000
                          </div>
                          <div>
                            <span className="font-semibold">Common Material:</span> Concrete Tile
                          </div>
                          <div>
                            <span className="font-semibold">HOA Review:</span> 2-4 weeks
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {location.slug === 'tempe' && (
                <div className="space-y-6 mb-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Home className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Ahwatukee Foothills</h3>
                        <p className="text-gray-600 mb-3">
                          Premium area of Tempe with mountain views and larger lots. Strict HOA requirements for tile profiles. Common for complete tile replacements and underlayment projects on 15-25 year old homes.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-semibold">Avg. Project Cost:</span> $20,000-38,000
                          </div>
                          <div>
                            <span className="font-semibold">Common Material:</span> S-Tile (Concrete)
                          </div>
                          <div>
                            <span className="font-semibold">HOA Review:</span> 3-4 weeks
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Home className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">South Tempe</h3>
                        <p className="text-gray-600 mb-3">
                          Established neighborhoods near ASU with mix of older homes and newer construction. Flexible roofing options with many areas having no HOA. Popular for foam roofing on flat roof homes built in 1980s-1990s.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-semibold">Avg. Project Cost:</span> $14,000-25,000
                          </div>
                          <div>
                            <span className="font-semibold">Common Material:</span> Foam or Shingle
                          </div>
                          <div>
                            <span className="font-semibold">HOA Review:</span> Varies/None
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Complete neighborhood list */}
              <div>
                <h3 className="text-xl font-bold mb-4">All {location.name} Neighborhoods:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {location.neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                      <Home className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="font-medium">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section for Tier 1 Cities */}
      {isTier1 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions - {location.name} Roofing
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Common questions from {location.name} homeowners about roofing projects, costs, and our services.
              </p>

              <div className="space-y-6">
                {/* Scottsdale-specific FAQs */}
                {location.slug === 'scottsdale' && (
                  <>
                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">What is the average cost of a tile roof replacement in Scottsdale?</h3>
                      <p className="text-gray-600">
                        In Scottsdale, tile roof replacement costs range from $18-25 per square foot for standard concrete tile, and $25-40+ per square foot for premium clay tile. A typical 2,500 sq ft home ranges from $25,000-55,000 depending on tile selection, roof complexity, and HOA requirements. Luxury communities like Silverleaf and DC Ranch typically see higher costs due to premium materials and architectural review requirements.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">How long does HOA approval take for roofing in Scottsdale?</h3>
                      <p className="text-gray-600">
                        Scottsdale HOA approval times vary by community. Silverleaf and DC Ranch typically require 4-6 weeks with detailed architectural plans. Grayhawk and Troon average 2-3 weeks. We handle all HOA submissions and maintain relationships with most Scottsdale architectural review committees to expedite approvals. We recommend starting the HOA process before monsoon season (June-September).
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Can I just replace the underlayment under my tile roof instead of replacing the tile?</h3>
                      <p className="text-gray-600">
                        Yes! This is one of the most popular services in Scottsdale for homes 15-25 years old. Tile lasts 50+ years but underlayment fails at 15-20 years. We carefully remove and inventory your existing tile, replace the underlayment with modern synthetic materials, then reinstall the same tile. This saves $10,000-20,000 versus complete replacement and is commonly approved by HOAs since the roof appearance remains identical.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">What roofing materials are allowed in Scottsdale HOAs?</h3>
                      <p className="text-gray-600">
                        Most Scottsdale HOAs require tile roofing with specific profiles and color palettes. Common approved materials include concrete S-tile, flat tile, and premium clay tile. Metal roofing is rarely approved except in specific architectural styles. Foam roofing is occasionally approved for flat roof sections. Each community maintains an approved materials list—we review these before providing estimates to ensure compliance.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Do you offer financing for Scottsdale roofing projects?</h3>
                      <p className="text-gray-600">
                        Yes, we offer multiple financing options for Scottsdale homeowners including 12-month same-as-cash and extended payment plans up to 120 months. Many of our Scottsdale clients also use home equity lines of credit due to high home values. We work with several lenders familiar with Arizona roofing projects and can help you find the best financing solution for your budget.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">When is the best time of year for roof replacement in Scottsdale?</h3>
                      <p className="text-gray-600">
                        October through May is ideal for Scottsdale roofing projects. Summer temperatures (June-August) exceed 110°F, making roofing work challenging and unsafe. Spring (March-May) and fall (October-November) offer the best balance of moderate temperatures and low rainfall. We recommend scheduling HOA approval in summer for fall installation, or completing projects before monsoon season begins in June.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Are you licensed and insured in Arizona?</h3>
                      <p className="text-gray-600">
                        Yes, we hold Arizona ROC license #362945 (Residential/Commercial Roofing) and carry $2 million in general liability insurance plus workers' compensation. We provide certificates of insurance to Scottsdale HOAs and can add your community as an additional insured if required. All our technicians are licensed, background-checked, and trained in Arizona-specific roofing techniques.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">How do monsoons affect roofing in Scottsdale?</h3>
                      <p className="text-gray-600">
                        Arizona monsoons (June-September) bring intense winds (60+ mph), heavy rainfall, and dust storms that test roof integrity. Loose tiles are common after monsoon storms, and underlayment damage can occur from wind-driven rain. We offer emergency monsoon damage repairs within 24 hours and free post-storm inspections for Scottsdale homeowners to identify issues before they worsen.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">What warranty do you offer on roofing work in Scottsdale?</h3>
                      <p className="text-gray-600">
                        We provide a 10-year workmanship warranty on all installations, plus manufacturer warranties on materials (typically 50 years for tile, 30 years for underlayment). Our warranty is fully transferable if you sell your Scottsdale home, which adds value during real estate transactions. We also offer extended maintenance programs to maximize roof lifespan in Arizona's harsh climate.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Can you help with insurance claims for roof damage in Scottsdale?</h3>
                      <p className="text-gray-600">
                        Yes, we work extensively with insurance claims in Scottsdale, especially for monsoon and hail damage. We provide detailed inspection reports with photos, meet with insurance adjusters on-site, and help document all damage. Many Scottsdale homeowners don't realize their insurance covers underlayment replacement—we help identify all covered items to maximize your claim payout.
                      </p>
                    </div>
                  </>
                )}

                {/* Phoenix-specific FAQs */}
                {location.slug === 'phoenix' && (
                  <>
                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">What does a roof replacement cost in Phoenix?</h3>
                      <p className="text-gray-600">
                        Phoenix roof replacement costs vary by material and neighborhood. Foam roofing ranges from $8-12 per square foot ($12,000-18,000 for 1,500 sq ft). Tile roofing costs $15-22 per square foot ($22,500-33,000 for 1,500 sq ft). Metal roofing ranges $12-18 per square foot. Neighborhoods like Arcadia with unique homes may see higher costs due to complexity, while standard production homes in Ahwatukee are more economical.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Is foam roofing a good choice for Phoenix homes?</h3>
                      <p className="text-gray-600">
                        Yes! Foam roofing is extremely popular in Phoenix and comprises 15-20% of the market. It offers superior insulation (R-6.5 per inch), seamless waterproofing, and energy efficiency—critical for Phoenix's 120°F+ summers. Foam is ideal for flat or low-slope roofs common in Phoenix. With proper recoating every 10-15 years, foam roofs last 50+ years and significantly reduce cooling costs.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">How often should I recoat my foam roof in Phoenix?</h3>
                      <p className="text-gray-600">
                        In Phoenix's intense UV environment, we recommend recoating foam roofs every 10-12 years. Phoenix receives 300+ days of sunshine annually, which degrades the protective coating over time. Regular recoating costs $3-5 per square foot ($4,500-7,500 for 1,500 sq ft) and prevents costly foam degradation. Signs you need recoating include chalking, coating loss, or exposed foam.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Do Phoenix homes need HOA approval for roofing?</h3>
                      <p className="text-gray-600">
                        It depends on the neighborhood. Areas like Ahwatukee and Desert Ridge have HOA requirements with 2-4 week approval times. Historic neighborhoods like Arcadia, Encanto, and Coronado typically have no HOA, offering complete material flexibility. Newer communities in North Phoenix generally require architectural review. We always verify HOA requirements before starting your project.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Can you work on historic homes in Phoenix neighborhoods like Arcadia?</h3>
                      <p className="text-gray-600">
                        Absolutely! We specialize in Arcadia's mid-century modern homes and understand the unique requirements of preserving architectural integrity while updating roofing systems. Many Arcadia homes have original 1950s-1970s tile roofs that need complete replacement. We can match historic tile profiles or recommend period-appropriate alternatives like metal roofing that complement mid-century aesthetics.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">How long does a roofing project take in Phoenix?</h3>
                      <p className="text-gray-600">
                        Most Phoenix residential roofing projects take 2-5 days depending on size and complexity. A standard 1,500 sq ft foam roof takes 2-3 days. Tile roofs (2,000-2,500 sq ft) typically take 3-5 days. Complex multi-level homes or tile underlayment replacements may extend to 5-7 days. We schedule around Phoenix weather—avoiding the hottest summer days and monsoon season when possible.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Do you offer emergency roof repairs in Phoenix?</h3>
                      <p className="text-gray-600">
                        Yes, we provide 24/7 emergency roofing services throughout Phoenix with same-day response for active leaks. Common emergencies include monsoon damage, HVAC equipment failures causing roof penetrations, and flash flood damage. We offer emergency tarping, temporary repairs, and fast permanent solutions. Call our emergency line at (602) 529-3311 for immediate assistance.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Will a new roof lower my energy bills in Phoenix?</h3>
                      <p className="text-gray-600">
                        Yes! Phoenix homeowners typically see 15-25% cooling cost reduction with modern roofing systems. Foam roofing offers the highest insulation value (R-6.5 per inch vs R-0.5 for tile). Cool roof coatings reflect 85% of solar radiation, keeping attics 20-30°F cooler. In Phoenix's climate where cooling represents 60% of summer electricity costs, proper roofing is one of the best energy investments you can make.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Are you licensed and insured for Phoenix roofing?</h3>
                      <p className="text-gray-600">
                        Yes, we hold Arizona ROC license #362945 for residential and commercial roofing. We carry $2 million general liability insurance and workers' compensation for all employees. We're locally owned and operated with our Arizona office in Glendale. All our roofing technicians are background-checked, drug-tested, and trained in Arizona-specific techniques for desert climate roofing.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">What financing options do you offer for Phoenix homeowners?</h3>
                      <p className="text-gray-600">
                        We partner with multiple lenders to offer flexible financing including 12-month same-as-cash, 24-60 month payment plans, and extended financing up to 120 months for larger projects. Most Phoenix homeowners qualify for financing regardless of credit score. We also work with SRP and APS energy efficiency rebate programs which can offset $500-2,000 of roofing costs for qualifying projects.
                      </p>
                    </div>
                  </>
                )}

                {/* Tempe-specific FAQs */}
                {location.slug === 'tempe' && (
                  <>
                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">How much does roof replacement cost in Tempe?</h3>
                      <p className="text-gray-600">
                        Tempe roof replacement costs range from $12,000-35,000 depending on material and neighborhood. South Tempe homes with foam roofing typically cost $12,000-20,000. Ahwatukee Foothills homes with tile roofing range $20,000-35,000. Smaller ASU-area homes cost $10,000-18,000. Factors affecting cost include HOA requirements, roof complexity, and material selection (foam, tile, or shingle).
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Do I need HOA approval for roofing in Tempe?</h3>
                      <p className="text-gray-600">
                        It depends on your neighborhood. Ahwatukee Foothills communities typically require HOA approval with 3-4 week processing times and strict tile profile requirements. South Tempe near ASU often has no HOA, allowing complete material flexibility. Newer developments along Warner Road and Elliot Road have varying HOA requirements. We verify HOA requirements as part of our free estimate process.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">What roofing material is best for Tempe's climate?</h3>
                      <p className="text-gray-600">
                        Tempe's climate (similar to Phoenix) makes foam and tile the top choices. Foam roofing excels for flat roofs common in Tempe, offering superior insulation and energy efficiency. Tile roofing is standard in Ahwatukee Foothills and provides 50+ year lifespan. Both materials handle Tempe's 115°F+ summers and monsoon storms effectively. We recommend foam for energy savings and tile for HOA compliance and aesthetics.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Can you service rental properties near ASU in Tempe?</h3>
                      <p className="text-gray-600">
                        Yes! We work extensively with Tempe landlords and property managers, especially in the ASU area. We offer property manager accounts with priority scheduling, fleet pricing, and streamlined billing. Common projects include foam recoating on 1980s-1990s rentals, emergency leak repairs between tenants, and preventive maintenance programs to avoid costly mid-lease repairs.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">How long does a roofing project take in Tempe?</h3>
                      <p className="text-gray-600">
                        Most Tempe residential roofs take 2-5 days. Standard foam roofing projects (1,200-1,500 sq ft common in South Tempe) take 2-3 days. Tile roofs in Ahwatukee Foothills (2,000-2,500 sq ft) take 3-5 days. We schedule around ASU academic calendar when possible to minimize disruption in student-dense areas, and avoid monsoon season (June-September) for safest installation conditions.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Do you offer emergency roofing services in Tempe?</h3>
                      <p className="text-gray-600">
                        Yes, we provide 24/7 emergency roofing response throughout Tempe with typical arrival within 2-4 hours for active leaks. Common emergencies include monsoon damage, HVAC platform failures, and aging foam degradation. We serve the entire Tempe area from South Tempe to Ahwatukee Foothills. Call (602) 529-3311 for emergency service anytime.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Will a new roof reduce my energy bills in Tempe?</h3>
                      <p className="text-gray-600">
                        Absolutely! Tempe homeowners typically see 15-30% cooling cost reduction with modern roofing. Foam roofing offers the best insulation value, reducing attic temperatures by 20-30°F. This is especially impactful in Tempe where SRP electricity rates peak during summer months (May-October). Many Tempe homeowners report $50-150/month summer savings with new foam or tile roofing systems.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Are you licensed and insured in Arizona?</h3>
                      <p className="text-gray-600">
                        Yes, we hold Arizona ROC license #362945 for residential and commercial roofing. We maintain $2 million general liability insurance and workers' compensation for all employees. We're locally owned with our Arizona office in Glendale, just 20 minutes from Tempe. All technicians are licensed, background-checked, and trained in Arizona roofing techniques specific to desert climate challenges.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">Can you help with insurance claims for roof damage in Tempe?</h3>
                      <p className="text-gray-600">
                        Yes, we regularly assist Tempe homeowners with insurance claims, especially for monsoon and wind damage. We provide comprehensive inspection reports with photos, meet adjusters on-site, and help document all damage to maximize your claim. Many Tempe homeowners are surprised to learn their insurance covers more than they expected—we help identify all covered items including underlayment, decking, and ventilation.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <h3 className="text-xl font-bold mb-3">What financing options are available for Tempe roofing projects?</h3>
                      <p className="text-gray-600">
                        We offer multiple financing solutions for Tempe homeowners including 12-month same-as-cash, standard payment plans (24-60 months), and extended financing up to 120 months for larger projects. We work with lenders familiar with Arizona roofing and can often approve financing within 24 hours. We also help homeowners access SRP energy efficiency rebates for qualifying roofing improvements.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why {location.name} Homeowners Trust Ripple Roofing
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">ROC Licensed</h3>
                <p className="text-gray-600">
                  Arizona ROC #362945 licensed, bonded, and fully insured for your protection.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-gray-600">
                  Same-day service available. 24/7 emergency response during monsoon season.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  We understand {location.name}'s climate, HOA requirements, and roofing challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Pricing & Climate Section for Tier 1 */}
      {isTier1 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Pricing Breakdown */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">{location.name} Roofing Costs</h2>
                  
                  {location.slug === 'scottsdale' && (
                    <>
                      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h3 className="text-xl font-bold mb-4">Average Project Costs by Neighborhood</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span className="font-medium">Silverleaf / Desert Mountain</span>
                            <span className="text-blue-600 font-bold">$35k-75k</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span className="font-medium">DC Ranch / Troon</span>
                            <span className="text-blue-600 font-bold">$28k-50k</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span className="font-medium">Grayhawk / McDowell Mountain</span>
                            <span className="text-blue-600 font-bold">$22k-40k</span>
                          </div>
                          <div className="flex justify-between items-center pb-2">
                            <span className="font-medium">South Scottsdale</span>
                            <span className="text-blue-600 font-bold">$18k-32k</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-4">Cost Breakdown by Service</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>Tile Underlayment Replacement</span>
                            <span className="text-blue-600 font-bold">$10-15/sqft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>Complete Tile Replacement</span>
                            <span className="text-blue-600 font-bold">$18-25/sqft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>Premium Clay Tile</span>
                            <span className="text-blue-600 font-bold">$25-40/sqft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2">
                            <span>Emergency Repairs</span>
                            <span className="text-blue-600 font-bold">$500-2,500</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                          *Costs vary based on roof complexity, material selection, and HOA requirements. Free estimates provided.
                        </p>
                      </div>
                    </>
                  )}

                  {location.slug === 'phoenix' && (
                    <>
                      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h3 className="text-xl font-bold mb-4">Average Project Costs by Area</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span className="font-medium">Arcadia / Biltmore</span>
                            <span className="text-blue-600 font-bold">$18k-35k</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span className="font-medium">Desert Ridge / N. Phoenix</span>
                            <span className="text-blue-600 font-bold">$16k-30k</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span className="font-medium">Ahwatukee</span>
                            <span className="text-blue-600 font-bold">$15k-28k</span>
                          </div>
                          <div className="flex justify-between items-center pb-2">
                            <span className="font-medium">Central Phoenix</span>
                            <span className="text-blue-600 font-bold">$12k-22k</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-4">Cost by Roofing Type</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>Foam Roofing (new)</span>
                            <span className="text-blue-600 font-bold">$8-12/sqft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>Foam Recoating</span>
                            <span className="text-blue-600 font-bold">$3-5/sqft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>Tile Roofing</span>
                            <span className="text-blue-600 font-bold">$15-22/sqft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2">
                            <span>Metal Roofing</span>
                            <span className="text-blue-600 font-bold">$12-18/sqft</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                          *Average costs for standard residential roofing. Free estimates include exact pricing for your home.
                        </p>
                      </div>
                    </>
                  )}

                  {location.slug === 'tempe' && (
                    <>
                      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h3 className="text-xl font-bold mb-4">Average Project Costs by Area</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span className="font-medium">Ahwatukee Foothills</span>
                            <span className="text-blue-600 font-bold">$20k-38k</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span className="font-medium">South Tempe</span>
                            <span className="text-blue-600 font-bold">$14k-25k</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span className="font-medium">Central Tempe</span>
                            <span className="text-blue-600 font-bold">$12k-22k</span>
                          </div>
                          <div className="flex justify-between items-center pb-2">
                            <span className="font-medium">Near ASU</span>
                            <span className="text-blue-600 font-bold">$10k-18k</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-4">Cost by Service Type</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>Foam Roofing</span>
                            <span className="text-blue-600 font-bold">$8-12/sqft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>Foam Recoating</span>
                            <span className="text-blue-600 font-bold">$3-5/sqft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span>Tile Roofing</span>
                            <span className="text-blue-600 font-bold">$16-22/sqft</span>
                          </div>
                          <div className="flex justify-between items-center pb-2">
                            <span>Shingle Roofing</span>
                            <span className="text-blue-600 font-bold">$5-8/sqft</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                          *Costs vary by home size and condition. Free estimates provided within 24 hours.
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Climate & Seasonal Guide */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">{location.name} Climate & Roofing</h2>
                  
                  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4">Seasonal Roofing Guide</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-bold">Best: October - May</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Ideal roofing weather with temperatures 60-85°F. Plan major projects during this window. Schedule HOA approvals in summer for fall installation.
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="font-bold">Caution: June - September</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Monsoon season with intense storms and 110-120°F heat. Emergency repairs only. Risk of delays due to afternoon thunderstorms and extreme temperatures.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="font-bold">Optimal: March - April, October - November</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Perfect weather conditions for roofing. Highest quality installations with comfortable temperatures (70-80°F) and minimal rain risk.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4">Climate Challenges</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Sun className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold block">Extreme Heat</span>
                          <span className="text-sm text-gray-600">300+ days of sunshine, 120°F+ summer temperatures degrade roofing materials rapidly</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CloudRain className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold block">Monsoon Storms</span>
                          <span className="text-sm text-gray-600">June-September brings 60+ mph winds, heavy rain, and hail requiring robust roofing systems</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Wind className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold block">Dust Storms</span>
                          <span className="text-sm text-gray-600">Haboobs create wind-driven debris that damages roofing, especially loose tiles</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Sun className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold block">UV Degradation</span>
                          <span className="text-sm text-gray-600">Intense UV radiation requires premium materials and regular maintenance/recoating</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-3">💡 Local Expert Tip</h3>
                    {location.slug === 'scottsdale' && (
                      <p className="text-gray-700">
                        Scottsdale HOAs often require specific tile colors to maintain community aesthetics. Submit HOA applications before summer heat arrives to ensure fall installation during optimal weather. Consider tile underlayment replacement at 15 years to prevent costly damage.
                      </p>
                    )}
                    {location.slug === 'phoenix' && (
                      <p className="text-gray-700">
                        Phoenix's extreme heat makes foam roofing an excellent investment. The superior insulation (R-6.5 per inch) can reduce summer cooling costs by 20-30%, paying for itself in 7-10 years through energy savings alone.
                      </p>
                    )}
                    {location.slug === 'tempe' && (
                      <p className="text-gray-700">
                        Tempe homes built in the 1980s-1990s often have original foam roofing nearing end-of-life. Recoating every 10-12 years extends roof life to 50+ years at a fraction of replacement cost. Don't wait for leaks—proactive recoating saves thousands.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule Your Free Roof Inspection in {location.name}
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get expert advice and a detailed estimate for your roofing project. No obligation.
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

          <div className="mt-8 text-sm text-blue-200">
            Serving {location.name} from our Glendale office • Arizona ROC 362945
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArizonaCityPage;
