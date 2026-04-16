import { type GoogleReview } from '@/lib/googleReviews'

interface LocationReviewWallProps {
  city: string
  ratingValue: string
  reviewCount: string
  reviews: GoogleReview[]
  reviewUrl: string
}

function truncateReview(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text
  }

  return `${text.slice(0, maxLength).trim()}...`
}

function ReviewStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-accent-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>{index < rating ? '★' : '☆'}</span>
      ))}
    </div>
  )
}

export function LocationReviewWall({
  city,
  ratingValue,
  reviewCount,
  reviews,
  reviewUrl,
}: LocationReviewWallProps) {
  const hasReviews = reviews.length > 0

  return (
    <section className="rounded-3xl border border-primary-200 bg-gradient-to-br from-primary-50 via-white to-accent-50 p-8 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-700 shadow-sm">
            Live Google Review Snapshot
          </div>
          <h2 className="mt-4 text-3xl font-display font-bold text-primary-900">
            Recent Google reviews for {city} roofing customers
          </h2>
          <p className="mt-3 text-lg text-primary-700">
            Homeowners in {city} usually want the same proof before they book: fast communication, clean work, and a crew that follows through. These reviews come directly from your Google Business Profile so visitors can see recent customer feedback without leaving the page.
          </p>
        </div>

        <div className="rounded-2xl bg-primary-900 px-6 py-5 text-white shadow-lg">
          <div className="text-sm uppercase tracking-[0.18em] text-primary-200">Google Rating</div>
          <div className="mt-2 flex items-end gap-3">
            <span className="text-4xl font-bold">{ratingValue}</span>
            <span className="pb-1 text-primary-200">/ 5.0</span>
          </div>
          <p className="mt-2 text-sm text-primary-200">Based on {reviewCount} Google reviews</p>
        </div>
      </div>

      {hasReviews ? (
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article key={`${review.author_name}-${index}`} className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-primary-900">{review.author_name}</h3>
                  <p className="text-sm text-primary-500">{review.relative_time_description}</p>
                </div>
                <ReviewStars rating={review.rating} />
              </div>
              <p className="mt-4 text-sm leading-7 text-primary-700">
                {truncateReview(review.text, 260)}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
          <p className="text-primary-700">
            Google review details are temporarily unavailable, but your current Business Profile rating is still reflected above.
          </p>
        </div>
      )}

      <div className="mt-8">
        <a
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-accent-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-600"
        >
          Read all {reviewCount} Google reviews
        </a>
      </div>
    </section>
  )
}