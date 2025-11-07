export interface GoogleReview {
  author_name: string
  author_url?: string
  language?: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

export interface GooglePlaceDetails {
  name: string
  rating: number
  user_ratings_total: number
  reviews: GoogleReview[]
}

export async function fetchGoogleReviews(): Promise<GooglePlaceDetails | null> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    console.error('Missing Google Places API credentials')
    return null
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch reviews')
    }

    const data = await response.json()

    if (data.status === 'OK' && data.result) {
      return data.result
    }

    console.error('Google Places API error:', data.status)
    return null
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return null
  }
}
