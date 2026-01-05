import { FC } from 'react'
import Script from 'next/script'
import { BUSINESS_INFO_ARIZONA } from '@/constants/business'

interface CitySchemaProps {
  cityName: string
  stateName: 'Arizona' | 'Texas'
  serviceAreaRadius: number // in miles
  latitude: number
  longitude: number
}

/**
 * Location-specific schema markup for city pages
 * Includes service area, geo-targeting, and enhanced local SEO
 */
export const CitySchema: FC<CitySchemaProps> = ({
  cityName,
  stateName,
  serviceAreaRadius,
  latitude,
  longitude
}) => {
  const businessInfo = stateName === 'Arizona' ? BUSINESS_INFO_ARIZONA : null
  
  if (!businessInfo) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Roofing Services',
    'provider': {
      '@type': 'LocalBusiness',
      'name': `${businessInfo.name} - ${cityName} Service Area`,
      'image': 'https://rippleroofs.com/images/ripple-roofing-logo.png',
      'telephone': businessInfo.phone,
      'email': businessInfo.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': businessInfo.address.street,
        'addressLocality': businessInfo.address.city,
        'addressRegion': businessInfo.address.state,
        'postalCode': businessInfo.address.zip,
        'addressCountry': 'US'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': businessInfo.geo.latitude,
        'longitude': businessInfo.geo.longitude
      },
      'url': `https://rippleroofs.com/arizona/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
      'priceRange': '$$-$$$',
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '07:00',
          'closes': '17:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Saturday',
          'opens': '08:00',
          'closes': '14:00'
        }
      ],
      ...(stateName === 'Arizona' && {
        'hasCredential': [
          {
            '@type': 'EducationalOccupationalCredential',
            'credentialCategory': 'Professional License',
            'name': 'Arizona ROC License',
            'identifier': '362945',
            'issuedBy': {
              '@type': 'Organization',
              'name': 'Arizona Registrar of Contractors'
            }
          },
          {
            '@type': 'EducationalOccupationalCredential',
            'credentialCategory': 'Certification',
            'name': 'CertainTeed ShingleMaster',
            'issuedBy': {
              '@type': 'Organization',
              'name': 'CertainTeed Corporation'
            }
          }
        ]
      })
    },
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': latitude,
        'longitude': longitude
      },
      'geoRadius': `${serviceAreaRadius} mi`,
      'name': `${cityName}, ${stateName}`,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': cityName,
        'addressRegion': stateName === 'Arizona' ? 'AZ' : 'TX',
        'addressCountry': 'US'
      }
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Roofing Services',
      'itemListElement': stateName === 'Arizona' ? [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Tile Roof Repair',
            'description': 'Tile roof repair and underlayment replacement for Arizona homes'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Foam Roof Coating',
            'description': 'SPF roof recoating and maintenance services'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Monsoon Damage Repair',
            'description': '24/7 emergency storm damage repair and leak fixes'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Roof Replacement',
            'description': 'Complete roof replacement with tile, foam, or shingle systems'
          }
        }
      ] : []
    }
  }

  return (
    <Script
      id={`city-schema-${cityName.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
