// Google Places Script Loader - ensures script only loads once
// Only loads Places API for address autocomplete (not full Maps)

let isLoading = false
let isLoaded = false
const callbacks: (() => void)[] = []

export function loadGoogleMapsScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Already loaded
    if (isLoaded) {
      resolve()
      return
    }

    // Currently loading, queue callback
    if (isLoading) {
      callbacks.push(resolve)
      return
    }

    // Check if already loaded in DOM
    if (window.google && window.google.maps && window.google.maps.places) {
      isLoaded = true
      resolve()
      return
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
    if (!apiKey) {
      reject(new Error('Google Maps API key not configured'))
      return
    }

    isLoading = true

    const script = document.createElement('script')
    script.async = true
    script.defer = true
    // Only load Places library - we use Mapbox for the map
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`

    script.onload = () => {
      isLoaded = true
      isLoading = false
      resolve()
      
      // Execute queued callbacks
      callbacks.forEach(cb => cb())
      callbacks.length = 0
    }

    script.onerror = () => {
      isLoading = false
      const error = new Error('Failed to load Google Places')
      reject(error)
      
      // Reject queued callbacks
      callbacks.forEach(cb => cb())
      callbacks.length = 0
    }

    document.head.appendChild(script)
  })
}
