import { z } from 'zod'

// Quote Form Schema
export const quoteFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter your property address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please provide some details about your project (at least 10 characters)'),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>
