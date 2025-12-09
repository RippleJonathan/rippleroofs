/**
 * Business constants for Ripple Roofing & Construction
 * Centralized source of truth for business information used across the site
 */

export const BUSINESS_INFO = {
  name: 'Ripple Roofing & Construction',
  phone: '(512) 763-5277',
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
