/**
 * Business constants for Ripple Roofing & Construction
 * Texas office configuration
 */

export type StateCode = 'TX';

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
  email: 'tx@rippleroofs.com',
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
    facebook: 'https://www.facebook.com/rippleroofs',
    instagram: 'https://www.instagram.com/ripple_roofing/',
    linkedin: 'https://www.linkedin.com/company/ripple-roofing',
    youtube: 'https://www.youtube.com/@rippleroofing',
  },
} as const;

/**
 * Legacy export for backward compatibility
 * Defaults to Texas office
 */
export const BUSINESS_INFO = BUSINESS_INFO_TEXAS;

/**
 * Get business info for specific state
 * @param state - State code ('TX')
 * @returns Business info object for Texas
 */
export function getBusinessInfo(state?: StateCode | null): BusinessInfo {
  return BUSINESS_INFO_TEXAS;
}

/**
 * Google Business Profile ratings
 * Source: Google Business Profile
 * Last updated: July 2026
 */
export const BUSINESS_RATING = {
  ratingValue: '5.0',
  reviewCount: '70',
  bestRating: '5',
  worstRating: '1',
} as const;

type BusinessRatingOverride = {
  ratingValue?: number | string | null;
  reviewCount?: number | string | null;
};

export function getBusinessRatingSnapshot(overrides: BusinessRatingOverride = {}) {
  const ratingValue =
    typeof overrides.ratingValue === 'number'
      ? overrides.ratingValue.toFixed(1)
      : overrides.ratingValue ?? BUSINESS_RATING.ratingValue;

  const reviewCount =
    typeof overrides.reviewCount === 'number'
      ? String(overrides.reviewCount)
      : overrides.reviewCount ?? BUSINESS_RATING.reviewCount;

  return {
    ratingValue,
    reviewCount,
    bestRating: BUSINESS_RATING.bestRating,
    worstRating: BUSINESS_RATING.worstRating,
  };
}

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
    'CertainTeed ShingleMaster Premier Company',
    'HAAG Certified Inspector',
  ],
  licenses: [
    'Licensed and Insured in Texas',
  ],
} as const;
