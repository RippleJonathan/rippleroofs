import { z } from 'zod'

/**
 * Enhanced name validation - blocks spam patterns
 * - Must contain only letters, spaces, hyphens, apostrophes, periods
 * - No all-caps strings 10+ characters
 * - No random character sequences
 * - No excessive repeated characters
 */
const nameValidation = z
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(100, 'Name must be less than 100 characters')
  .refine(
    (val) => /^[a-zA-Z\s\-'.]+$/.test(val),
    'Name must contain only letters, spaces, hyphens, apostrophes, and periods'
  )
  .refine(
    (val) => {
      // Check for all-caps strings 10+ characters (spam pattern)
      const allCapsPattern = /[A-Z]{10,}/
      return !allCapsPattern.test(val)
    },
    'Name appears invalid'
  )
  .refine(
    (val) => {
      // Check for mixed-case random patterns like "AbCdEfGh"
      const mixedCasePattern = /^([a-z][A-Z]){4,}|([A-Z][a-z]){4,}/
      return !mixedCasePattern.test(val)
    },
    'Name appears invalid'
  )
  .refine(
    (val) => {
      // Check for repeated characters 5+ times
      const repeatedCharsPattern = /(.)\1{4,}/
      return !repeatedCharsPattern.test(val)
    },
    'Name appears invalid'
  )

/**
 * Enhanced email validation - blocks spam email patterns
 * - Standard email format
 * - No 20+ random letters before @
 * - No test/spam keywords
 * - No disposable email domains
 */
const emailValidation = z
  .string()
  .email('Invalid email address')
  .refine(
    (val) => {
      // Check for 20+ random-looking letters before @
      const randomEmailPattern = /^[a-z]{20,}@/i
      return !randomEmailPattern.test(val)
    },
    'Email address appears invalid'
  )
  .refine(
    (val) => {
      const lowerEmail = val.toLowerCase()
      const spamKeywords = ['test', 'spam', 'fake', 'temporary', 'disposable']
      return !spamKeywords.some(keyword => lowerEmail.includes(keyword))
    },
    'Email address appears invalid'
  )
  .refine(
    (val) => {
      const lowerEmail = val.toLowerCase()
      const disposableDomains = [
        'mailinator.com',
        'guerrillamail.com',
        'temp-mail.org',
        'throwaway.email',
        '10minutemail.com',
        'tempmail.com',
      ]
      return !disposableDomains.some(domain => lowerEmail.endsWith(`@${domain}`))
    },
    'Please use a permanent email address'
  )

/**
 * Enhanced phone validation - accepts US and international formats
 * - 10-15 digits
 * - Accepts common formats: (512) 123-4567, 512-123-4567, +1-512-123-4567
 */
const phoneValidation = z
  .string()
  .optional()
  .refine(
    (val) => {
      if (!val) return true // Optional field
      // Remove all non-digit characters for validation
      const digitsOnly = val.replace(/\D/g, '')
      return digitsOnly.length >= 10 && digitsOnly.length <= 15
    },
    'Phone number must be 10-15 digits'
  )

/**
 * Enhanced address validation - ensures realistic addresses
 * - Must contain both numbers AND letters
 * - Must look like a real street address
 * - No random strings
 */
const addressValidation = z
  .string()
  .optional()
  .refine(
    (val) => {
      if (!val) return true // Optional field
      // Must contain at least one number (street number)
      const hasNumber = /\d/.test(val)
      // Must contain letters (street name)
      const hasLetters = /[a-zA-Z]/.test(val)
      return hasNumber && hasLetters
    },
    'Address must contain a street number and name'
  )
  .refine(
    (val) => {
      if (!val) return true
      // Check for random character sequences (no spaces, all random)
      const randomPattern = /^[a-zA-Z]{15,}$/
      return !randomPattern.test(val.replace(/\s/g, ''))
    },
    'Address appears invalid'
  )

/**
 * Lead magnet form schema with comprehensive spam protection
 */
export const leadMagnetFormSchema = z.object({
  name: nameValidation,
  email: emailValidation,
  phone: phoneValidation,
  address: addressValidation,
  slug: z.string().min(1, 'Resource identifier required'),
  title: z.string().min(1, 'Resource title required'),
  // Honeypot field - should always be empty
  _website: z.string().optional(),
  // Timing check - form mount timestamp
  _timestamp: z.number().optional(),
})

export type LeadMagnetFormData = z.infer<typeof leadMagnetFormSchema>

/**
 * Content spam detection - checks for spam keywords
 */
export function detectSpamContent(text: string): boolean {
  const suspiciousKeywords = [
    'bitcoin', 'crypto', 'cryptocurrency', 'investment', 'casino', 
    'viagra', 'cialis', 'loan', 'credit card', 'click here', 
    'buy now', 'limited time', 'act now', 'free money',
  ]
  
  const lowerText = text.toLowerCase()
  return suspiciousKeywords.some(keyword => lowerText.includes(keyword))
}

/**
 * Timing validation - ensures form wasn't submitted too quickly (bot) or too slowly (expired)
 */
export function validateFormTiming(timestamp: number | undefined): { valid: boolean; reason?: string } {
  if (!timestamp) {
    return { valid: true } // If no timestamp, skip timing check
  }

  const currentTime = Date.now()
  const timeDiff = currentTime - timestamp

  // Too fast - likely a bot (< 2 seconds)
  if (timeDiff < 2000) {
    return { 
      valid: false, 
      reason: 'Please take a moment to review your information.' 
    }
  }

  // Invalid timestamp (from future or > 1 hour old)
  if (timeDiff < 0 || timeDiff > 3600000) {
    return { 
      valid: false, 
      reason: 'Form session expired. Please refresh and try again.' 
    }
  }

  return { valid: true }
}

/**
 * Rate limiting map - simple in-memory storage
 * For production, consider using Redis or similar
 */
export const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Rate limit: 3 submissions per IP per hour
export const RATE_LIMIT_MAX = 3
export const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

/**
 * Check if IP has exceeded rate limit
 */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    // First submission or window expired
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false // Rate limit exceeded
  }

  // Increment count
  record.count++
  return true
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip)
    }
  }
}, 5 * 60 * 1000) // Clean up every 5 minutes
