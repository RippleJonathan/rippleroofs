'use client'

import { useEffect, useRef, useState } from 'react'
import { Address, PolygonPoint } from '@/types/estimate'
import { calculatePolygonArea } from '@/lib/estimate/calculations'
import { loadGoogleMapsScript } from '@/lib/googleMaps'

interface EstimateMapProps {
  address: Address
  onAreaCalculated: (squareFeet: number, points: PolygonPoint[]) => void
}

export function EstimateMap({ address, onAreaCalculated }: EstimateMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const googleMapRef = useRef<google.maps.Map | null>(null)
  const polygonRef = useRef<google.maps.Polygon | null>(null)
  const drawingManagerRef = useRef<google.maps.drawing.DrawingManager | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [squareFeet, setSquareFeet] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current) return

      try {
        // Ensure Google Maps is loaded
        await loadGoogleMapsScript()
        
        // Wait a bit for the drawing library to be ready
        if (!google.maps.drawing) {
          await new Promise(resolve => setTimeout(resolve, 500))
        }

        // Initialize map
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: address.latitude, lng: address.longitude },
          zoom: 21, // Maximum zoom for satellite view
          mapTypeId: google.maps.MapTypeId.SATELLITE,
          tilt: 0, // Top-down view
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_RIGHT,
          },
          streetViewControl: false,
          fullscreenControl: true,
        })

        googleMapRef.current = map

        // Add a marker for the address
        new google.maps.Marker({
          position: { lat: address.latitude, lng: address.longitude },
          map,
          title: address.formatted,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: '#FF6B35',
            fillOpacity: 0.8,
            strokeColor: '#fff',
            strokeWeight: 2,
          },
        })

        // Initialize Drawing Manager
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
          },
        })

        drawingManager.setMap(map)
        drawingManagerRef.current = drawingManager

        // Listen for polygon complete
        google.maps.event.addListener(drawingManager, 'polygoncomplete', (polygon: google.maps.Polygon) => {
          handlePolygonComplete(polygon)
        })

        setIsLoading(false)
      } catch (err) {
        console.error('Error loading map:', err)
        setError('Failed to load map. Please refresh the page.')
        setIsLoading(false)
      }
    }

    initMap()

    return () => {
      if (googleMapRef.current) {
        google.maps.event.clearInstanceListeners(googleMapRef.current)
      }
    }
  }, [address])

  const handlePolygonComplete = (polygon: google.maps.Polygon) => {
    // Remove previous polygon if exists
    if (polygonRef.current) {
      polygonRef.current.setMap(null)
    }

    polygonRef.current = polygon
    setIsDrawing(false)

    // Stop drawing mode
    if (drawingManagerRef.current) {
      drawingManagerRef.current.setDrawingMode(null)
    }

    // Calculate area
    calculateArea(polygon)

    // Listen for path changes (when user edits the polygon)
    google.maps.event.addListener(polygon.getPath(), 'set_at', () => calculateArea(polygon))
    google.maps.event.addListener(polygon.getPath(), 'insert_at', () => calculateArea(polygon))
  }

  const calculateArea = (polygon: google.maps.Polygon) => {
    const path = polygon.getPath()
    const points: PolygonPoint[] = []

    for (let i = 0; i < path.getLength(); i++) {
      const point = path.getAt(i)
      points.push({
        lat: point.lat(),
        lng: point.lng(),
      })
    }

    const area = calculatePolygonArea(points)
    setSquareFeet(area)
    onAreaCalculated(area, points)
  }

  const startDrawing = () => {
    setIsDrawing(true)
    if (drawingManagerRef.current) {
      drawingManagerRef.current.setDrawingMode(google.maps.drawing.OverlayType.POLYGON)
    }
  }

  const clearDrawing = () => {
    if (polygonRef.current) {
      polygonRef.current.setMap(null)
      polygonRef.current = null
    }
    setSquareFeet(0)
    setIsDrawing(false)
    if (drawingManagerRef.current) {
      drawingManagerRef.current.setDrawingMode(null)
    }
  }

  return (
    <div className="w-full">
      {/* Loading State */}
      {isLoading && (
        <div className="w-full h-[500px] md:h-[600px] rounded-xl bg-primary-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-600 mx-auto mb-4"></div>
            <p className="text-primary-700 font-semibold">Loading map...</p>
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
      {!isLoading && !error && (
        <div className="relative">
          <div
            ref={mapRef}
            className="w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl"
          />

          {/* Drawing Controls Overlay */}
          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 space-y-3">
          <h3 className="font-semibold text-primary-900 text-sm mb-2">Draw Your Roof</h3>
          
          {!polygonRef.current && !isDrawing && (
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

          {isDrawing && (
            <div className="text-sm text-primary-700 bg-accent-50 p-3 rounded-lg">
              <p className="font-semibold mb-1">👆 Click to add points</p>
              <p className="text-xs">Click the first point again to finish</p>
            </div>
          )}

          {polygonRef.current && (
            <>
              <div className="bg-primary-50 p-3 rounded-lg">
                <p className="text-xs text-primary-600 mb-1">Calculated Area:</p>
                <p className="text-2xl font-bold text-primary-900">
                  {squareFeet.toLocaleString()}
                  <span className="text-sm font-normal text-primary-600"> sq ft</span>
                </p>
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
                💡 Tip: Drag points to adjust
              </div>
            </>
          )}
        </div>
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
                <li>Click "Start Drawing" to begin</li>
                <li>Click along the outer edge of your roof to create points</li>
                <li>Click the first point again to close the shape</li>
                <li>Drag any point to adjust the outline</li>
                <li>The area will calculate automatically</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
