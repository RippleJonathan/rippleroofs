import { FC } from 'react';
import { Container } from '@/components/layout/Container';

const SERVICE_AREAS_TEXAS = [
  {
    name: 'Round Rock',
    description: 'Our headquarters and primary service area',
    population: '130,000+',
    featured: true,
  },
  {
    name: 'Austin',
    description: 'Complete coverage of Austin metro area',
    population: '1M+',
    featured: true,
  },
  {
    name: 'Georgetown',
    description: 'Serving all Georgetown neighborhoods',
    population: '75,000+',
    featured: false,
  },
  {
    name: 'Pflugerville',
    description: 'Full residential & commercial services',
    population: '70,000+',
    featured: false,
  },
  {
    name: 'Cedar Park',
    description: 'Trusted local roofing partner',
    population: '80,000+',
    featured: false,
  },
  {
    name: 'Leander',
    description: 'Fast response times guaranteed',
    population: '65,000+',
    featured: false,
  },
  {
    name: 'Hutto',
    description: 'Growing community, trusted service',
    population: '35,000+',
    featured: false,
  },
  {
    name: 'Taylor',
    description: 'Reliable roofing solutions',
    population: '18,000+',
    featured: false,
  },
  {
    name: 'San Antonio',
    description: 'Expanding coverage area',
    population: '1.5M+',
    featured: true,
  },
];

const SERVICE_AREAS_ARIZONA = [
  {
    name: 'Phoenix',
    description: 'Complete metro area coverage',
    population: '1.7M+',
    featured: true,
  },
  {
    name: 'Scottsdale',
    description: 'Premium tile roof specialists',
    population: '240,000+',
    featured: true,
  },
  {
    name: 'Mesa',
    description: 'Residential & commercial services',
    population: '510,000+',
    featured: true,
  },
  {
    name: 'Tempe',
    description: 'Fast response guaranteed',
    population: '190,000+',
    featured: false,
  },
  {
    name: 'Chandler',
    description: 'Full-service roofing solutions',
    population: '280,000+',
    featured: false,
  },
  {
    name: 'Gilbert',
    description: 'Trusted local roofing partner',
    population: '270,000+',
    featured: false,
  },
  {
    name: 'Glendale',
    description: 'Our Arizona headquarters',
    population: '250,000+',
    featured: false,
  },
  {
    name: 'Peoria',
    description: 'Growing community, expert service',
    population: '190,000+',
    featured: false,
  },
  {
    name: 'Surprise',
    description: 'Comprehensive roofing services',
    population: '150,000+',
    featured: false,
  },
  {
    name: 'Avondale',
    description: 'Reliable roofing solutions',
    population: '90,000+',
    featured: false,
  },
];

interface ServiceAreasMapProps {
  state?: 'TX' | 'AZ';
}

export const ServiceAreasMap: FC<ServiceAreasMapProps> = ({ state = 'TX' }) => {
  const isArizona = state === 'AZ';
  const serviceAreas = isArizona ? SERVICE_AREAS_ARIZONA : SERVICE_AREAS_TEXAS;
  const phoneNumber = isArizona ? '+16025293311' : '+15127635277';
  const phoneDisplay = isArizona ? '(602) 529-3311' : '(512) 763-5277';
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
              {isArizona ? 'Proudly Serving Phoenix Metro' : 'Proudly Serving Central Texas'}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {isArizona 
                ? 'We provide expert roofing services throughout the Greater Phoenix area. If you don\'t see your city listed, give us a call—we likely serve your area!'
                : 'We provide expert roofing services throughout the Central Texas region. If you don\'t see your city listed, give us a call—we likely serve your area!'
              }
            </p>
          </div>

          {/* Coverage Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className={`bg-white rounded-xl shadow-lg p-6 text-center border-2 ${isArizona ? 'border-blue-100' : 'border-accent-100'}`}>
              <div className={`text-4xl font-bold mb-2 ${isArizona ? 'text-blue-600' : 'text-accent-600'}`}>
                {isArizona ? '50+' : '80+'}
              </div>
              <div className="text-sm text-primary-600 font-medium">Mile Radius</div>
            </div>
            <div className={`bg-white rounded-xl shadow-lg p-6 text-center border-2 ${isArizona ? 'border-blue-100' : 'border-accent-100'}`}>
              <div className={`text-4xl font-bold mb-2 ${isArizona ? 'text-blue-600' : 'text-accent-600'}`}>
                {isArizona ? '10+' : '9+'}
              </div>
              <div className="text-sm text-primary-600 font-medium">Cities Served</div>
            </div>
            <div className={`bg-white rounded-xl shadow-lg p-6 text-center border-2 ${isArizona ? 'border-blue-100' : 'border-accent-100'}`}>
              <div className={`text-4xl font-bold mb-2 ${isArizona ? 'text-blue-600' : 'text-accent-600'}`}>24/7</div>
              <div className="text-sm text-primary-600 font-medium">Emergency Response</div>
            </div>
            <div className={`bg-white rounded-xl shadow-lg p-6 text-center border-2 ${isArizona ? 'border-blue-100' : 'border-accent-100'}`}>
              <div className={`text-4xl font-bold mb-2 ${isArizona ? 'text-blue-600' : 'text-accent-600'}`}>
                {isArizona ? '4M+' : '2.5M+'}
              </div>
              <div className="text-sm text-primary-600 font-medium">Residents Served</div>
            </div>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className={`rounded-xl p-6 transition-all duration-300 hover:shadow-xl ${
                  area.featured
                    ? isArizona
                      ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300'
                      : 'bg-gradient-to-br from-accent-50 to-accent-100 border-2 border-accent-300'
                    : 'bg-white border-2 border-primary-100 hover:border-accent-200'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-1">
                      {area.name}
                    </h3>
                    <div className="text-sm text-primary-500 font-medium">
                      {area.population} residents
                    </div>
                  </div>
                  {area.featured && (
                    <div className={`text-xs font-bold px-2 py-1 rounded ${isArizona ? 'bg-blue-600 text-white' : 'bg-accent-500 text-white'}`}>
                      PRIMARY
                    </div>
                  )}
                </div>
                <p className="text-sm text-primary-600">{area.description}</p>
              </div>
            ))}
          </div>

          {/* Visual Map Representation */}
          <div className={`rounded-2xl p-8 md:p-12 text-white ${isArizona ? 'bg-gradient-to-br from-blue-900 to-blue-800' : 'bg-gradient-to-br from-primary-900 to-primary-800'}`}>
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${isArizona ? 'bg-blue-500' : 'bg-accent-500'}`}>
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Don't See Your City?
              </h3>
              <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
                {isArizona
                  ? 'We service many additional areas throughout the Phoenix metro area. Contact us to confirm coverage in your specific location—chances are, we can help!'
                  : 'We service many additional areas throughout Central Texas. Contact us to confirm coverage in your specific location—chances are, we can help!'
                }
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber}`}
                className={`inline-flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-lg transition-colors text-center ${isArizona ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-accent-500 hover:bg-accent-600 text-white'}`}
              >
                📞 Call {phoneDisplay}
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-50 text-primary-900 font-bold py-4 px-8 rounded-lg transition-colors text-center"
              >
                Get Free Inspection
              </a>
            </div>
          </div>

          {/* Additional Service Info */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border-2 border-primary-100">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className={`mb-3 ${isArizona ? 'text-blue-600' : 'text-accent-600'}`}>
                  <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-primary-900 mb-2">Fast Response</h4>
                <p className="text-sm text-primary-600">
                  Same-day service available in most areas. Emergency response 24/7.
                </p>
              </div>
              <div className="text-center">
                <div className={`mb-3 ${isArizona ? 'text-blue-600' : 'text-accent-600'}`}>
                  <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-primary-900 mb-2">Licensed & Insured</h4>
                <p className="text-sm text-primary-600">
                  {isArizona 
                    ? 'ROC licensed (#362945), bonded, and fully insured in all service areas.'
                    : 'Fully licensed, bonded, and insured in all service areas we cover.'
                  }
                </p>
              </div>
              <div className="text-center">
                <div className={`mb-3 ${isArizona ? 'text-blue-600' : 'text-accent-600'}`}>
                  <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h4 className="font-bold text-primary-900 mb-2">Local Expertise</h4>
                <p className="text-sm text-primary-600">
                  {isArizona
                    ? 'Deep knowledge of Arizona climate, monsoons, and heat-resistant roofing systems.'
                    : 'Deep knowledge of Central Texas climate, weather, and building codes.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
