/**
 * Business constants for Ripple Roofing & Construction
 * Multi-state configuration for Texas and Arizona offices
 * Updated: January 5, 2026 - Added Arizona expansion
 */

export type StateCode = 'TX' | 'AZ';

export interface BusinessInfo {
  name: string;
  state: StateCode;
  stateName: string;
  office: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    emergency: string;
  };
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
  license?: {
    number: string;
    type: string;
    verifyUrl: string;
  };
}

/**
 * Texas Office - Round Rock Headquarters
 */
export const BUSINESS_INFO_TEXAS: BusinessInfo = {
  name: 'Ripple Roofing & Construction',
  state: 'TX',
  stateName: 'Texas',
  office: 'Round Rock Headquarters',
  phone: '(512) 763-5277',
  phoneRaw: '5127635277',
  email: 'info@rippleroofs.com',
  address: {
    street: '1000 Heritage Center Circle, #165',
    city: 'Round Rock',
    state: 'TX',
    zip: '78664',
    country: 'US',
  },
  geo: {
    latitude: 30.5088,
    longitude: -97.6789,
  },
  hours: {
    weekdays: 'Monday-Friday: 8:00 AM - 5:00 PM',
    saturday: 'Saturday: 9:00 AM - 3:00 PM',
    sunday: 'Sunday: Closed',
    emergency: '24/7 Emergency Services Available',
  },
  social: {
    facebook: 'https://www.facebook.com/rippleroofing',
    instagram: 'https://www.instagram.com/rippleroofing',
    linkedin: 'https://www.linkedin.com/company/ripple-roofing',
    youtube: 'https://www.youtube.com/@rippleroofing',
  },
} as const;

/**
 * Arizona Office - Glendale
 * Launched: January 2026
 */
export const BUSINESS_INFO_ARIZONA: BusinessInfo = {
  name: 'Ripple Roofing & Construction',
  state: 'AZ',
  stateName: 'Arizona',
  office: 'Glendale Office',
  phone: '(602) 529-3311',
  phoneRaw: '6025293311',
  email: 'az@rippleroofs.com',
  address: {
    street: '6751 N. Sunset Blvd. #320',
    city: 'Glendale',
    state: 'AZ',
    zip: '85305',
    country: 'US',
  },
  geo: {
    latitude: 33.5387,
    longitude: -112.1860,
  },
  hours: {
    weekdays: 'Monday-Friday: 8:00 AM - 5:00 PM',
    saturday: 'Saturday: 9:00 AM - 3:00 PM',
    sunday: 'Sunday: Closed',
    emergency: '24/7 Emergency Services Available',
  },
  social: {
    facebook: 'https://www.facebook.com/rippleroofing',
    instagram: 'https://www.instagram.com/rippleroofing',
    linkedin: 'https://www.linkedin.com/company/ripple-roofing',
    youtube: 'https://www.youtube.com/@rippleroofing',
  },
  license: {
    number: 'ROC 362945',
    type: 'Arizona Registrar of Contractors',
    verifyUrl: 'https://azroc.my.site.com/AZRoc/s/contractor-search?licenseId=a0ocs00000HufhpAAB',
  },
} as const;

/**
 * Legacy export for backward compatibility
 * Defaults to Texas office
 * @deprecated Use getBusinessInfo() instead for state-aware access
 */
export const BUSINESS_INFO = BUSINESS_INFO_TEXAS;

/**
 * Get business info for specific state
 * @param state - State code ('TX' or 'AZ')
 * @returns Business info object for the specified state
 */
export function getBusinessInfo(state?: StateCode | null): BusinessInfo {
  if (state === 'AZ') {
    return BUSINESS_INFO_ARIZONA;
  }
  return BUSINESS_INFO_TEXAS; // Default to Texas
}

/**
 * Google Business Profile ratings
 * Source: Google Business Profile
 * Last updated: November 2025
 */
export const BUSINESS_RATING = {
  ratingValue: '5.0',
  reviewCount: '62',
  bestRating: '5',
  worstRating: '1',
} as const;

/**
 * Service areas (cities we serve in Central Texas)
 */
export const SERVICE_AREAS = [
  'Round Rock',
  'Austin',
  'Georgetown',
  'Cedar Park',
  'Pflugerville',
  'Leander',
  'Hutto',
  'Taylor',
  'Liberty Hill',
  'Jarrell',
  'Granger',
  'Thorndale',
  'Thrall',
] as const;

/**
 * Business credentials and certifications
 */
export const CREDENTIALS = {
  certifications: [
    'CertainTeed Shingle Master Company',
    'BBB Accredited Business',
    'HAAG Certified Inspector',
  ],
  licenses: [
    'Licensed and Insured in Texas',
  ],
} as const;
