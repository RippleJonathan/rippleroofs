import { z } from 'zod'

// Phone regex that accepts various formats
const phoneRegex = /^[\d\s\-\+\(\)]+$/

export const quoteFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(phoneRegex, 'Please enter a valid phone number'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(255, 'Email must be less than 255 characters'),
  
  address: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .max(255, 'Address must be less than 255 characters'),
  
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
