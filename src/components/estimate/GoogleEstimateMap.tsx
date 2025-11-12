'use client'

import { useEffect, useRef, useState } from 'react'
import { Address, PolygonPoint } from '@/types/estimate'
import { calculatePolygonArea } from '@/lib/estimate/calculations'

interface GoogleEstimateMapProps {
  address: Address
  onAreaCalculated: (squareFeet: number, points: PolygonPoint[]) => void
}

export function GoogleEstimateMap({ address, onAreaCalculated }: GoogleEstimateMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const drawingManagerRef = useRef<google.maps.drawing.DrawingManager | null>(null)
  const polygonRef = useRef<google.maps.Polygon | null>(null)
  const polylineRef = useRef<google.maps.Polyline | null>(null)
  const currentPathRef = useRef<google.maps.LatLng[]>([])
  const mouseMoveListenerRef = useRef<google.maps.MapsEventListener | null>(null)
  const edgeLabelsRef = useRef<google.maps.Marker[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [squareFeet, setSquareFeet] = useState<number>(0)
  const [hasDrawing, setHasDrawing] = useState(false)
  const [isDrawingMode, setIsDrawingMode] = useState(false)
  const [edgeLengths, setEdgeLengths] = useState<number[]>([])
  const [totalPerimeter, setTotalPerimeter] = useState<number>(0)

  useEffect(() => {
    if (!address || !mapContainerRef.current || mapRef.current) return

    const initMap = async () => {
      try {
        // Load Google Maps if not already loaded
        if (!window.google?.maps?.drawing || !window.google?.maps?.geometry) {
          const script = document.createElement('script')
          const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=drawing,geometry`
          script.async = true
          script.defer = true
          
          await new Promise<void>((resolve, reject) => {
            script.onload = () => resolve()
            script.onerror = () => reject(new Error('Failed to load Google Maps'))
            document.head.appendChild(script)
          })
        }

        // Initialize map with satellite view
        const map = new google.maps.Map(mapContainerRef.current!, {
          center: { lat: address.latitude, lng: address.longitude },
          zoom: 20,
          mapTypeId: 'satellite',
          tilt: 0,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_RIGHT,
          },
          fullscreenControl: true,
          streetViewControl: false,
        })

        mapRef.current = map

        // Add marker for the address
        new google.maps.Marker({
          position: { lat: address.latitude, lng: address.longitude },
          map: map,
          title: address.formatted,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: '#FF6B35',
            fillOpacity: 1,
            strokeColor: '#fff',
            strokeWeight: 2,
          },
        })

        // Initialize drawing manager
        const drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: null,
          drawingControl: false,
          polygonOptions: {
            fillColor: '#3B82F6',
            fillOpacity: 0.4,
            strokeColor: '#1E40AF',
            strokeWeight: 3,
            editable: true,
            draggable: false,
            clickable: true,
          },
        })

        drawingManager.setMap(map)
        drawingManagerRef.current = drawingManager

        // Handle polygon complete
        google.maps.event.addListener(drawingManager, 'polygoncomplete', (polygon: google.maps.Polygon) => {
          // Remove previous polygon if exists
          if (polygonRef.current) {
            polygonRef.current.setMap(null)
          }
          if (polylineRef.current) {
            polylineRef.current.setMap(null)
          }

          polygonRef.current = polygon
          currentPathRef.current = []
          setIsDrawingMode(false)
          drawingManager.setDrawingMode(null)
          
          // Remove mouse move listener
          if (mouseMoveListenerRef.current) {
            google.maps.event.removeListener(mouseMoveListenerRef.current)
            mouseMoveListenerRef.current = null
          }
          
          // Calculate area and measurements
          calculateArea(polygon)
          calculateEdgeLengths(polygon)

          // Listen for polygon edits
          google.maps.event.addListener(polygon.getPath(), 'set_at', () => {
            calculateArea(polygon)
            calculateEdgeLengths(polygon)
          })
          google.maps.event.addListener(polygon.getPath(), 'insert_at', () => {
            calculateArea(polygon)
            calculateEdgeLengths(polygon)
          })
          google.maps.event.addListener(polygon.getPath(), 'remove_at', () => {
            calculateArea(polygon)
            calculateEdgeLengths(polygon)
          })
        })

        setIsLoading(false)
      } catch (err) {
        console.error('Error initializing map:', err)
        setError('Failed to load map. Please refresh the page.')
        setIsLoading(false)
      }
    }

    initMap()

    // Keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawingMode) {
        clearDrawing()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      if (mouseMoveListenerRef.current) {
        google.maps.event.removeListener(mouseMoveListenerRef.current)
      }
    }
  }, [address])

  const calculateArea = (polygon: google.maps.Polygon) => {
    const path = polygon.getPath()
    
    // Use Google's built-in spherical geometry calculation for accuracy
    // This uses the actual Earth's radius and spherical model
    const areaSquareMeters = google.maps.geometry.spherical.computeArea(path)
    
    // Convert square meters to square feet (1 m² = 10.764 ft²)
    const areaSquareFeet = Math.round(areaSquareMeters * 10.764)

    // Also collect points for reference
    const points: PolygonPoint[] = []
    for (let i = 0; i < path.getLength(); i++) {
      const point = path.getAt(i)
      points.push({
        lat: point.lat(),
        lng: point.lng(),
      })
    }

    setSquareFeet(areaSquareFeet)
    setHasDrawing(true)
    onAreaCalculated(areaSquareFeet, points)
  }

  const calculateEdgeLengths = (polygon: google.maps.Polygon) => {
    const path = polygon.getPath()
    const lengths: number[] = []
    let perimeter = 0

    // Clear existing labels
    edgeLabelsRef.current.forEach(label => label.setMap(null))
    edgeLabelsRef.current = []

    for (let i = 0; i < path.getLength(); i++) {
      const start = path.getAt(i)
      const end = path.getAt((i + 1) % path.getLength())
      const distance = google.maps.geometry.spherical.computeDistanceBetween(start, end)
      const distanceFeet = Math.round(distance * 3.28084) // meters to feet
      lengths.push(distanceFeet)
      perimeter += distanceFeet

      // Calculate midpoint for label
      const midLat = (start.lat() + end.lat()) / 2
      const midLng = (start.lng() + end.lng()) / 2

      // Create label marker
      const label = new google.maps.Marker({
        position: { lat: midLat, lng: midLng },
        map: mapRef.current,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 0,
        },
        label: {
          text: `${distanceFeet}'`,
          color: '#1E40AF',
          fontSize: '12px',
          fontWeight: 'bold',
          className: 'edge-label',
        },
        zIndex: 1000,
      })

      edgeLabelsRef.current.push(label)
    }

    setEdgeLengths(lengths)
    setTotalPerimeter(perimeter)
  }

  const startDrawing = () => {
    if (drawingManagerRef.current && mapRef.current) {
      // Clear any existing drawing first
      if (polygonRef.current) {
        polygonRef.current.setMap(null)
        polygonRef.current = null
      }
      
      // Clear edge labels
      edgeLabelsRef.current.forEach(label => label.setMap(null))
      edgeLabelsRef.current = []
      
      drawingManagerRef.current.setDrawingMode(google.maps.drawing.OverlayType.POLYGON)
      setIsDrawingMode(true)
      setHasDrawing(false)
      setSquareFeet(0)
      setEdgeLengths([])
      setTotalPerimeter(0)
    }
  }

  const clearDrawing = () => {
    if (polygonRef.current) {
      polygonRef.current.setMap(null)
      polygonRef.current = null
    }
    if (polylineRef.current) {
      polylineRef.current.setMap(null)
      polylineRef.current = null
    }
    if (mouseMoveListenerRef.current) {
      google.maps.event.removeListener(mouseMoveListenerRef.current)
      mouseMoveListenerRef.current = null
    }
    if (drawingManagerRef.current) {
      drawingManagerRef.current.setDrawingMode(null)
    }
    // Clear edge labels
    edgeLabelsRef.current.forEach(label => label.setMap(null))
    edgeLabelsRef.current = []
    
    currentPathRef.current = []
    setSquareFeet(0)
    setHasDrawing(false)
    setIsDrawingMode(false)
    setEdgeLengths([])
    setTotalPerimeter(0)
    onAreaCalculated(0, [])
  }

  return (
    <div className="w-full">
      {/* Loading State */}
      {isLoading && (
        <div className="w-full h-[500px] md:h-[600px] rounded-xl bg-primary-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-600 mx-auto mb-4"></div>
            <p className="text-primary-700 font-semibold">Loading satellite map...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="w-full h-[500px] md:h-[600px] rounded-xl bg-red-50 border-2 border-red-200 flex items-center justify-center">
          <div className="text-center max-w-md px-6">
            <svg className="w-16 h-16 text-red-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-red-900 font-semibold mb-2">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      )}

      {/* Map Container */}
      {!error && (
        <div className="relative">
          <div
            ref={mapContainerRef}
            className={`w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl ${isLoading ? 'hidden' : ''} ${isDrawingMode ? 'cursor-crosshair' : ''}`}
          />

          {/* Drawing Mode Indicator */}
          {isDrawingMode && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-accent-600 text-white px-4 py-2 rounded-lg shadow-lg z-10 flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Drawing Mode Active</span>
            </div>
          )}

          {/* Drawing Controls Overlay */}
          {!isLoading && (
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 space-y-3 z-10 max-w-xs">
              <h3 className="font-semibold text-primary-900 text-sm mb-2">Draw Your Roof</h3>
              
              {!hasDrawing && (
                <button
                  onClick={startDrawing}
                  className="w-full px-4 py-2 bg-accent-600 text-white text-sm font-semibold rounded-lg hover:bg-accent-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Start Drawing
                </button>
              )}

              {hasDrawing && (
                <>
                  <div className="bg-primary-50 p-3 rounded-lg space-y-2">
                    <p className="text-xs text-primary-600 mb-1">Calculated Area:</p>
                    <p className="text-2xl font-bold text-primary-900">
                      {squareFeet.toLocaleString()}
                      <span className="text-sm font-normal text-primary-600"> sq ft</span>
                    </p>
                    
                    {totalPerimeter > 0 && (
                      <div className="pt-2 border-t border-primary-200">
                        <p className="text-xs text-primary-600">Perimeter:</p>
                        <p className="text-lg font-semibold text-primary-800">
                          {totalPerimeter.toLocaleString()} ft
                        </p>
                      </div>
                    )}
                    
                    {edgeLengths.length > 0 && (
                      <div className="pt-2 border-t border-primary-200">
                        <p className="text-xs text-primary-600 mb-1">Edge Lengths:</p>
                        <div className="flex flex-wrap gap-1">
                          {edgeLengths.map((length, i) => (
                            <span key={i} className="text-xs bg-primary-100 px-2 py-1 rounded">
                              {length} ft
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={clearDrawing}
                    className="w-full px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Clear & Redraw
                  </button>

                  <div className="text-xs text-primary-600 border-t pt-2">
                    💡 Tip: Drag points to adjust your outline
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {/* Instructions */}
      {!isLoading && !error && (
        <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-1">How to measure your roof:</p>
              <ol className="list-decimal ml-4 space-y-1">
                <li>Click "Start Drawing" button above</li>
                <li>Click along the outer edge of your roof to create points</li>
                <li>Click the first point again to close the shape</li>
                <li>Drag any corner point to adjust the outline</li>
                <li>Edge measurements display on the map in feet</li>
                <li>Press <kbd className="px-1 bg-white border rounded text-xs font-mono">Esc</kbd> or "Clear & Redraw" to start over</li>
              </ol>
              <p className="mt-2 text-xs text-blue-700">
                💡 <strong>Pro Tip:</strong> Use the crosshair cursor for precise clicking. Edge lengths display automatically!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
