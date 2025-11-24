// Centralized Google Maps loader to prevent duplicate script loading
// Supports multiple libraries: places, drawing, geometry

let isLoading = false
let isLoaded = false
let loadPromise: Promise<void> | null = null

// Required libraries for the estimate tool
const REQUIRED_LIBRARIES = ['places', 'drawing', 'geometry']

// Helper to wait for Google Maps libraries to be ready
function waitForGoogleMapsLibraries(timeout = 10000): Promise<void> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now()
    
    const checkLibraries = () => {
      // Check if all required libraries are loaded
      if (
        window.google?.maps?.places?.Autocomplete &&
        window.google?.maps?.drawing?.DrawingManager &&
        window.google?.maps?.geometry?.spherical
      ) {
        resolve()
      } else if (Date.now() - startTime > timeout) {
        reject(new Error('Timeout waiting for Google Maps libraries to load'))
      } else {
        // Check again in 50ms
        setTimeout(checkLibraries, 50)
      }
    }
    
    checkLibraries()
  })
}

export async function loadGoogleMaps(): Promise<void> {
  // If already loaded with all required libraries, return immediately
  if (isLoaded && window.google?.maps?.places?.Autocomplete && window.google?.maps?.drawing && window.google?.maps?.geometry) {
    return Promise.resolve()
  }

  // If currently loading, return the existing promise
  if (isLoading && loadPromise) {
    return loadPromise
  }

  // Start loading
  isLoading = true
  loadPromise = new Promise<void>(async (resolve, reject) => {
    try {
      // Check if script already exists (prevent duplicates)
      const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')
      
      if (existingScript) {
        // Script exists, wait for libraries to be ready
        if (window.google?.maps?.places?.Autocomplete) {
          isLoaded = true
          isLoading = false
          resolve()
        } else {
          // Wait for libraries to initialize
          await waitForGoogleMapsLibraries()
          isLoaded = true
          isLoading = false
          resolve()
        }
        return
      }

      // Create new script with all required libraries
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
      
      if (!apiKey) {
        isLoading = false
        reject(new Error('Google Maps API key not configured'))
        return
      }

      // Create script WITHOUT loading=async parameter (causes issues with library initialization)
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${REQUIRED_LIBRARIES.join(',')}`
      script.async = true
      script.defer = true
      
      script.onload = async () => {
        try {
          // Wait for libraries to be fully initialized
          await waitForGoogleMapsLibraries()
          isLoaded = true
          isLoading = false
          resolve()
        } catch (err) {
          isLoading = false
          reject(err)
        }
      }
      
      script.onerror = () => {
        isLoading = false
        reject(new Error('Failed to load Google Maps'))
      }
      
      document.head.appendChild(script)
    } catch (err) {
      isLoading = false
      reject(err)
    }
  })

  return loadPromise
}

// Reset function for testing/development
export function resetGoogleMapsLoader(): void {
  isLoading = false
  isLoaded = false
  loadPromise = null
}
