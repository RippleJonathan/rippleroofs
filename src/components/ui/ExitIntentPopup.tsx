'use client'

import { FC, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from './Button'
import { Input } from './Input'

const quickLeadSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Phone is required'),
  _website: z.string().max(0).optional().default(''),
})

type QuickLeadInput = z.infer<typeof quickLeadSchema>

export const ExitIntentPopup: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuickLeadInput>({
    resolver: zodResolver(quickLeadSchema),
  })

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown')
    if (popupShown) {
      setHasShown(true)
      return
    }

    // Track mouse movement near top of page (exit intent)
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of page
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exitPopupShown', 'true')
      }
    }

    // Also show after 30 seconds if user hasn't interacted
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exitPopupShown', 'true')
      }
    }, 30000) // 30 seconds

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [hasShown])

  const onSubmit = async (data: QuickLeadInput) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: 'exitintent@rippleroofs.com', // Placeholder since email not collected
          address: 'To be determined during call',
          service: 'Other',
          message: `Exit-intent popup lead - Customer requested callback. Phone: ${data.phone}`,
          _website: data._website,
          _timestamp: Date.now(),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      setSubmitStatus('success')
      reset()

      // Close popup after 3 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998] animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-md mx-4 animate-scale-in">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 px-8 py-6 text-white">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="text-2xl font-bold mb-2">Wait! Before You Go...</h3>
            <p className="text-accent-100">Get Your FREE Roof Inspection Today!</p>
          </div>

          {/* Content */}
          <div className="px-8 py-6">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-primary-900 mb-2">Thanks! We'll Call You Soon</h4>
                <p className="text-primary-600">Our team will reach out within the hour during business hours.</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <ul className="space-y-3 text-primary-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>FREE</strong> Professional Inspection ($200 value)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Same-day scheduling available</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>No obligation - 100% FREE</span>
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Honeypot */}
                  <div className="hidden">
                    <input type="text" {...register('_website')} tabIndex={-1} autoComplete="off" />
                  </div>

                  <Input
                    label="Your Name"
                    type="text"
                    placeholder="John Smith"
                    error={errors.name?.message}
                    {...register('name')}
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="(512) 555-1234"
                    error={errors.phone?.message}
                    {...register('phone')}
                  />

                  {submitStatus === 'error' && (
                    <p className="text-sm text-red-600">Something went wrong. Please try again or call us directly.</p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Submitting...' : '📞 Get My FREE Inspection'}
                  </Button>

                  <p className="text-xs text-center text-primary-500">
                    Or call us now: <a href="tel:512-763-5277" className="text-accent-600 font-bold hover:text-accent-700">(512) 763-5277</a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
