'use client'

import { useState } from 'react'

export interface CustomerInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  preferredContact: 'email' | 'phone' | 'either'
  timeframe: string
  notes?: string
}

interface CustomerInfoFormProps {
  onSubmit: (info: CustomerInfo) => void
  isSubmitting?: boolean
}

export function CustomerInfoForm({ onSubmit, isSubmitting }: CustomerInfoFormProps) {
  const [formData, setFormData] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: 'either',
    timeframe: 'asap',
    notes: ''
  })

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerInfo, string>>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CustomerInfo, string>> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleChange = (field: keyof CustomerInfo, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary-900 mb-2">
          Almost There! 🎉
        </h2>
        <p className="text-primary-600">
          Enter your information to receive your detailed estimate
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-primary-900 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                errors.firstName
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-primary-200 focus:border-accent-500'
              }`}
              placeholder="John"
              disabled={isSubmitting}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-primary-900 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                errors.lastName
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-primary-200 focus:border-accent-500'
              }`}
              placeholder="Doe"
              disabled={isSubmitting}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
              errors.email
                ? 'border-red-500 focus:border-red-600'
                : 'border-primary-200 focus:border-accent-500'
            }`}
            placeholder="john.doe@example.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
          <p className="mt-1 text-xs text-primary-600">
            Your estimate will be sent to this email
          </p>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
              errors.phone
                ? 'border-red-500 focus:border-red-600'
                : 'border-primary-200 focus:border-accent-500'
            }`}
            placeholder="(555) 123-4567"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-semibold text-primary-900 mb-2">
            Preferred Contact Method
          </label>
          <div className="grid grid-cols-3 gap-3">
            {(['email', 'phone', 'either'] as const).map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => handleChange('preferredContact', method)}
                className={`py-3 px-4 rounded-lg font-medium transition-all ${
                  formData.preferredContact === method
                    ? 'bg-accent-600 text-white'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
                disabled={isSubmitting}
              >
                {method === 'email' ? '📧 Email' : method === 'phone' ? '📞 Phone' : '✨ Either'}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeframe" className="block text-sm font-semibold text-primary-900 mb-2">
            When are you looking to start?
          </label>
          <select
            id="timeframe"
            value={formData.timeframe}
            onChange={(e) => handleChange('timeframe', e.target.value)}
            className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
            disabled={isSubmitting}
          >
            <option value="asap">As soon as possible</option>
            <option value="1-2-weeks">Within 1-2 weeks</option>
            <option value="1-month">Within 1 month</option>
            <option value="2-3-months">2-3 months</option>
            <option value="planning">Just planning ahead</option>
          </select>
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-primary-900 mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none resize-none"
            placeholder="Any specific concerns, requirements, or questions?"
            disabled={isSubmitting}
          />
        </div>

        {/* Privacy Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-1">Your Privacy Matters</p>
              <p className="text-xs">
                We respect your privacy. Your information will only be used to send your estimate and follow up if requested. We never sell or share your data.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-bold text-lg rounded-xl hover:from-accent-700 hover:to-accent-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating Your Estimate...
            </span>
          ) : (
            '📊 Get My Detailed Estimate'
          )}
        </button>
      </form>
    </div>
  )
}
