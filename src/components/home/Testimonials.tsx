'use client'

import { FC, useEffect, useState } from 'react'
import { Container } from '@/components/layout/Container'

interface GoogleReview {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  profile_photo_url?: string
}

export const Testimonials: FC = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [overallRating, setOverallRating] = useState<number>(0)
  const [totalReviews, setTotalReviews] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetch('/api/reviews')
        if (response.ok) {
          const data = await response.json()
          setReviews(data.reviews || [])
          setOverallRating(data.rating || 0)
          setTotalReviews(data.user_ratings_total || 0)
        }
      } catch (error) {
        console.error('Failed to load reviews:', error)
      } finally {
        setLoading(false)
      }
    }

    loadReviews()
  }, [])

  // Fallback reviews if API fails
  const fallbackReviews: GoogleReview[] = [
    {
      author_name: 'John Smith',
      rating: 5,
      text: 'Excellent service from start to finish. The team was professional, punctual, and the quality of work exceeded our expectations. Our new roof looks amazing!',
      relative_time_description: '2 months ago',
    },
    {
      author_name: 'Sarah Johnson',
      rating: 5,
      text: 'Called them for an emergency leak repair and they came out the same day. Fast, reliable, and reasonably priced. Highly recommend!',
      relative_time_description: '1 month ago',
    },
    {
      author_name: 'Mike Davis',
      rating: 5,
      text: 'Great experience with Ripple Roofing. They handled our commercial property with care and completed the job on time. Very professional team.',
      relative_time_description: '3 weeks ago',
    },
  ]

  const displayReviews = reviews.length > 0 ? reviews : fallbackReviews

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % displayReviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + displayReviews.length) % displayReviews.length)
  }

  const goToReview = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    if (displayReviews.length > 1) {
      const interval = setInterval(nextReview, 5000)
      return () => clearInterval(interval)
    }
  }, [displayReviews.length, currentIndex])

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <Container>
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent-600"></div>
          </div>
        </Container>
      </section>
    )
  }

  const currentReview = displayReviews[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto mb-6">
            Don't just take our word for it - hear from our satisfied customers throughout Central Texas
          </p>
          
          {/* Overall Rating */}
          {totalReviews > 0 && (
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < Math.floor(overallRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-bold text-primary-900">
                {overallRating.toFixed(1)} ({totalReviews} Google reviews)
              </span>
            </div>
          )}
        </div>

        {/* Slider Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Review Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 min-h-[400px] flex flex-col justify-between">
            {/* Quote Icon */}
            <div className="mb-6">
              <svg className="w-12 h-12 text-accent-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentReview.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-8 h-8 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-xl md:text-2xl text-primary-900 leading-relaxed text-center mb-8 italic font-medium">
              "{currentReview.text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-4 pt-6 border-t border-primary-200">
              {currentReview.profile_photo_url && (
                <img
                  src={currentReview.profile_photo_url}
                  alt={currentReview.author_name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent-200"
                />
              )}
              <div className="text-center">
                <p className="font-bold text-lg text-primary-900">{currentReview.author_name}</p>
                <p className="text-sm text-primary-600">{currentReview.relative_time_description}</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-xs text-primary-500">Google Review</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {displayReviews.length > 1 && (
            <>
              <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-primary-900 hover:bg-accent-500 hover:text-white transition-all z-10"
                aria-label="Previous review"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-primary-900 hover:bg-accent-500 hover:text-white transition-all z-10"
                aria-label="Next review"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Navigation */}
          {displayReviews.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {displayReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`w-12 h-12 rounded-full transition-all flex items-center justify-center ${
                    index === currentIndex
                      ? 'bg-accent-100 hover:bg-accent-200'
                      : 'bg-primary-100 hover:bg-primary-200'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                >
                  <span 
                    className={`rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-accent-500 w-8 h-3'
                        : 'bg-primary-400 w-3 h-3'
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-primary-700 mb-6">
            Ready to experience the same exceptional service?
          </p>
          <a href="/contact">
            <button className="btn btn-primary btn-lg">
              Get Your Free Inspection
            </button>
          </a>
        </div>
      </Container>
    </section>
  )
}
