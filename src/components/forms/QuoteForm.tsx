'use client'

import { FC, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { quoteFormSchema, type QuoteFormInput } from '@/lib/validations/quote'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'

interface QuoteFormProps {
  className?: string
  prefillAddress?: string // Auto-fill address based on location page
}

export const QuoteForm: FC<QuoteFormProps> = ({ className = '', prefillAddress }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formMountTime, setFormMountTime] = useState<number>(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<QuoteFormInput>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      address: prefillAddress || '',
    },
  })

  // Track when form is mounted for timing check
  useEffect(() => {
    setFormMountTime(Date.now())
    
    // Update address if prefillAddress changes
    if (prefillAddress) {
      setValue('address', prefillAddress)
    }
  }, [prefillAddress, setValue])

  const onSubmit = async (data: QuoteFormInput) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Add timestamp for spam detection (tracks when form was mounted)
      const submissionData = {
        ...data,
        _timestamp: formMountTime,
      }

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form')
      }

      setSubmitStatus('success')
      reset()
      setFormMountTime(Date.now()) // Reset timing for next submission
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Quote request submitted!</h3>
              <p className="mt-1 text-sm text-green-700">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error submitting form</h3>
              <p className="mt-1 text-sm text-red-700">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Name Fields */}
      <div>
        <Input
          label="Full Name"
          type="text"
          required
          placeholder="John Smith"
          error={errors.name?.message}
          {...register('name')}
        />
      </div>

      {/* Honeypot Field - Hidden from users, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <Input
          label="Website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('_website')}
        />
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email"
          type="email"
          required
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          label="Phone"
          type="tel"
          required
          placeholder="(512) 123-4567"
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>

      {/* Address */}
      <Input
        label="Property Address"
        type="text"
        required
        placeholder="1234 Main St, Round Rock, TX 78664"
        error={errors.address?.message}
        {...register('address')}
      />

      {/* Service Selection */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-primary-900 mb-2">
          Service Needed
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="service"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.service
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-primary-200 focus:border-accent-500 focus:ring-accent-500'
          } focus:outline-none focus:ring-2 transition-colors`}
          {...register('service')}
        >
          <option value="">Select a service</option>
          <option value="Roof Repair">Roof Repair</option>
          <option value="Roof Replacement">Roof Replacement</option>
          <option value="New Installation">New Installation</option>
          <option value="Storm Damage">Storm Damage</option>
          <option value="Other">Other</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-2">
          Project Details
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-primary-200 focus:border-accent-500 focus:ring-accent-500'
          } focus:outline-none focus:ring-2 transition-colors`}
          placeholder="Please describe your roofing needs, any issues you're experiencing, or questions you have..."
          {...register('message')}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          'Get Your Free Quote'
        )}
      </Button>

      <p className="text-sm text-primary-600 text-center">
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  )
}
