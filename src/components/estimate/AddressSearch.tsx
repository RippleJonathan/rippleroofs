'use client'

import { useState, useRef, useEffect } from 'react'
import { Address } from '@/types/estimate'
import { loadGoogleMaps } from '@/lib/loadGoogleMaps'

interface AddressSearchProps {
  onAddressSelect: (address: Address) => void
}

export function AddressSearch({ onAddressSelect }: AddressSearchProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)

  useEffect(() => {
    const init = async () => {
      try {
        await loadGoogleMaps()
        initAutocomplete()
      } catch (err) {
        console.error('Error loading Google Maps:', err)
        setError('Failed to load Google Maps. Please refresh the page.')
      }
    }

    init()

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current)
      }
    }
  }, [])

  const initAutocomplete = () => {
    if (!inputRef.current || !window.google) return

    // Initialize autocomplete
    autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: 'us' },
      fields: ['address_components', 'formatted_address', 'geometry'],
      types: ['address'],
    })

    // Listen for place selection
    autocompleteRef.current.addListener('place_changed', handlePlaceSelect)
  }

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current?.getPlace()
    if (!place || !place.geometry || !place.geometry.location) {
      setError('Please select a valid address from the dropdown')
      return
    }

    setError(null)
    setIsLoading(true)

    // Parse address components
    const addressComponents = place.address_components || []
    let street = ''
    let city = ''
    let state = ''
    let zip = ''

    addressComponents.forEach((component) => {
      const types = component.types
      if (types.includes('street_number')) {
        street = component.long_name + ' '
      }
      if (types.includes('route')) {
        street += component.long_name
      }
      if (types.includes('locality')) {
        city = component.long_name
      }
      if (types.includes('administrative_area_level_1')) {
        state = component.short_name
      }
      if (types.includes('postal_code')) {
        zip = component.long_name
      }
    })

    const address: Address = {
      formatted: place.formatted_address || '',
      street: street.trim(),
      city,
      state,
      zip,
      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng(),
    }

    setTimeout(() => {
      setIsLoading(false)
      onAddressSelect(address)
    }, 500)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
        <label htmlFor="address-input" className="block text-sm font-semibold text-primary-900 mb-2">
          Enter Your Property Address
        </label>
        <input
          ref={inputRef}
          id="address-input"
          type="text"
          placeholder="123 Main St, Austin, TX 78701"
          className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none text-primary-900 placeholder-primary-400"
          disabled={isLoading}
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
        <p className="mt-2 text-xs text-primary-600">
          Start typing your address and select from the dropdown
        </p>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center gap-3 text-primary-700">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-600"></div>
          <span>Loading map...</span>
        </div>
      )}
    </div>
  )
}
