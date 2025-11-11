import { z } from 'zod'

// Phone regex that accepts various formats
const phoneRegex = /^[\d\s\-\+\(\)]+$/

// Enhanced name validation - must contain letters and reasonable characters
const nameRegex = /^[a-zA-Z\s\-\'\.]+$/

// Realistic address validation - must have numbers and letters
const addressRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d\s\-\,\.#]+$/

// Detect suspicious patterns (common in spam)
const suspiciousPatterns = [
  /^[A-Z]{10,}$/i, // All caps 10+ characters
  /[A-Z]{5}[a-z]{5}[A-Z]{5}/i, // Mixed case pattern
  /(.)\1{5,}/, // Same character repeated 5+ times
]

const isSuspiciousString = (str: string): boolean => {
  return suspiciousPatterns.some(pattern => pattern.test(str))
}

export const quoteFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(nameRegex, 'Please enter a valid name (letters, spaces, hyphens only)')
    .refine(name => !isSuspiciousString(name), {
      message: 'Please enter a valid name',
    }),
  
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(phoneRegex, 'Please enter a valid phone number')
    .refine(phone => {
      // Remove non-digits and check length
      const digits = phone.replace(/\D/g, '')
      return digits.length >= 10 && digits.length <= 15
    }, {
      message: 'Please enter a valid phone number',
    }),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(255, 'Email must be less than 255 characters')
    .refine(email => {
      // Block obviously fake email patterns
      const suspiciousEmailPatterns = [
        /^[a-z]{20,}@/i, // 20+ random letters before @
        /\+test@/i,
        /\+spam@/i,
        /mailinator/i,
        /guerrillamail/i,
      ]
      return !suspiciousEmailPatterns.some(pattern => pattern.test(email))
    }, {
      message: 'Please enter a valid email address',
    }),
  
  address: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .max(255, 'Address must be less than 255 characters')
    .regex(addressRegex, 'Please enter a valid address (must include street number)')
    .refine(addr => !isSuspiciousString(addr), {
      message: 'Please enter a valid address',
    }),
  
  service: z.enum([
    'Roof Repair',
    'Roof Replacement',
    'New Installation',
    'Storm Damage',
    'Other',
  ], {
    errorMap: () => ({ message: 'Please select a service' }),
  }),
  
  message: z
    .string()
    .max(1000, 'Message must be less than 1000 characters')
    .optional(),
  
  // Honeypot field - should always be empty
  // Bots fill this, humans don't see it
  _website: z.string().max(0, 'Invalid submission').optional().default(''),
  
  // Timestamp for timing check
  _timestamp: z.number().optional(),
})

export type QuoteFormInput = z.infer<typeof quoteFormSchema>

// Mini form schema (for sidebar forms with fewer fields)
export const miniQuoteFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Phone is required').regex(phoneRegex, 'Invalid phone number'),
  email: z.string().email('Invalid email address'),
  service: z.enum([
    'Roof Repair',
    'Roof Replacement',
    'New Installation',
    'Storm Damage',
    'Other',
  ]),
})

export type MiniQuoteFormInput = z.infer<typeof miniQuoteFormSchema>
