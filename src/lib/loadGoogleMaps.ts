// Centralized Google Maps loader to prevent duplicate script loading
// Supports multiple libraries: places, drawing, geometry

let isLoading = false
let isLoaded = false
let loadPromise: Promise<void> | null = null

// Required libraries for the estimate tool
const REQUIRED_LIBRARIES = ['places', 'drawing', 'geometry']

export async function loadGoogleMaps(): Promise<void> {
  // If already loaded with all required libraries, return immediately
  if (isLoaded && window.google?.maps?.places && window.google?.maps?.drawing && window.google?.maps?.geometry) {
    return Promise.resolve()
  }

  // If currently loading, return the existing promise
  if (isLoading && loadPromise) {
    return loadPromise
  }

  // Start loading
  isLoading = true
  loadPromise = new Promise<void>((resolve, reject) => {
    // Check if script already exists (prevent duplicates)
    const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')
    
    if (existingScript) {
      // Script exists, wait for it to load
      if (window.google?.maps) {
        isLoaded = true
        isLoading = false
        resolve()
      } else {
        // Wait for load event
        existingScript.addEventListener('load', () => {
          isLoaded = true
          isLoading = false
          resolve()
        })
        existingScript.addEventListener('error', () => {
          isLoading = false
          reject(new Error('Failed to load Google Maps'))
        })
      }
      return
    }

    // Create new script with all required libraries
    const script = document.createElement('script')
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
    
    if (!apiKey) {
      isLoading = false
      reject(new Error('Google Maps API key not configured'))
      return
    }

    // Load with async to follow best practices
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${REQUIRED_LIBRARIES.join(',')}&loading=async`
    script.async = true
    script.defer = true
    
    script.onload = () => {
      isLoaded = true
      isLoading = false
      resolve()
    }
    
    script.onerror = () => {
      isLoading = false
      reject(new Error('Failed to load Google Maps'))
    }
    
    document.head.appendChild(script)
  })

  return loadPromise
}

// Reset function for testing/development
export function resetGoogleMapsLoader(): void {
  isLoading = false
  isLoaded = false
  loadPromise = null
}
