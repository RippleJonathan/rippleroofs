import { FC } from 'react'

interface CitySchemaProps {
  cityName: string
  stateName: string
  serviceAreaRadius: number // in miles
  latitude: number
  longitude: number
}

/**
 * Location-specific schema markup for city pages
 * Includes service area, geo-targeting, and enhanced local SEO
 */
export const CitySchema: FC<CitySchemaProps> = () => {
  // Reserved for future use
  return null
}
