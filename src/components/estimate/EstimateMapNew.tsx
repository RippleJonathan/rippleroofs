'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import { Address, PolygonPoint } from '@/types/estimate'
import { calculatePolygonArea } from '@/lib/estimate/calculations'

import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

interface EstimateMapProps {
  address: Address
  onAreaCalculated: (squareFeet: number, points: PolygonPoint[]) => void
}

export function EstimateMap({ address, onAreaCalculated }: EstimateMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const drawRef = useRef<MapboxDraw | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [squareFeet, setSquareFeet] = useState<number>(0)
  const [hasDrawing, setHasDrawing] = useState(false)

  useEffect(() => {
    // Get Mapbox token
    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    
    if (!mapContainerRef.current) return

    try {
      // Set Mapbox access token
      mapboxgl.accessToken = token

      // Initialize map
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12', // Using streets temporarily to test if map works
        center: [address.longitude, address.latitude],
        zoom: 19, // Close zoom for roof detail
        pitch: 0, // Top-down view
      })

      mapRef.current = map

      // Add navigation controls
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')

      // Add marker for the address
      new mapboxgl.Marker({ color: '#FF6B35' })
        .setLngLat([address.longitude, address.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(`<strong>${address.formatted}</strong>`))
        .addTo(map)

      // Initialize drawing tools
      const draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          polygon: true,
          trash: true,
        },
        defaultMode: 'simple_select',
        styles: [
          // Polygon fill
          {
            id: 'gl-draw-polygon-fill',
            type: 'fill',
            filter: ['all', ['==', '$type', 'Polygon']],
            paint: {
              'fill-color': '#3B82F6',
              'fill-opacity': 0.4,
            },
          },
          // Polygon outline
          {
            id: 'gl-draw-polygon-stroke-active',
            type: 'line',
            filter: ['all', ['==', '$type', 'Polygon']],
            paint: {
              'line-color': '#1E40AF',
              'line-width': 3,
            },
          },
          // Vertex points
          {
            id: 'gl-draw-polygon-and-line-vertex-active',
            type: 'circle',
            filter: ['all', ['==', 'meta', 'vertex'], ['==', '$type', 'Point']],
            paint: {
              'circle-radius': 5,
              'circle-color': '#fff',
              'circle-stroke-color': '#1E40AF',
              'circle-stroke-width': 2,
            },
          },
        ],
      })

      map.addControl(draw as any, 'top-left')
      drawRef.current = draw

      // Listen for drawing events
      map.on('draw.create', handleDrawUpdate)
      map.on('draw.update', handleDrawUpdate)
      map.on('draw.delete', () => {
        setSquareFeet(0)
        setHasDrawing(false)
        onAreaCalculated(0, [])
      })

      map.on('load', () => {
        setIsLoading(false)
      })

      map.on('error', (e) => {
        console.error('Mapbox error:', e)
        setError('Failed to load map. Please refresh the page.')
        setIsLoading(false)
      })
    } catch (err) {
      console.error('Error initializing map:', err)
      setError('Failed to initialize map. Please refresh the page.')
      setIsLoading(false)
    }

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
      }
    }
  }, [address])

  const handleDrawUpdate = () => {
    if (!drawRef.current) return

    const data = drawRef.current.getAll()
    if (data.features.length === 0) {
      setSquareFeet(0)
      setHasDrawing(false)
      onAreaCalculated(0, [])
      return
    }

    // Get the first polygon
    const polygon = data.features[0]
    if (polygon.geometry.type !== 'Polygon') return

    // Convert coordinates to PolygonPoint format
    const coordinates = polygon.geometry.coordinates[0] as [number, number][]
    const points: PolygonPoint[] = coordinates.map(([lng, lat]) => ({
      lat,
      lng,
    }))

    // Calculate area
    const area = calculatePolygonArea(points)
    setSquareFeet(area)
    setHasDrawing(true)
    onAreaCalculated(area, points)
  }

  const startDrawing = () => {
    if (drawRef.current) {
      drawRef.current.changeMode('draw_polygon')
    }
  }

  const clearDrawing = () => {
    if (drawRef.current) {
      drawRef.current.deleteAll()
      setSquareFeet(0)
      setHasDrawing(false)
      onAreaCalculated(0, [])
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
      {!error && (
        <div className="relative">
          <div
            ref={mapContainerRef}
            className={`w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl ${isLoading ? 'hidden' : ''}`}
          />

          {/* Drawing Controls Overlay */}
          {!isLoading && (
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 space-y-3 z-10">
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
                <li>Click "Start Drawing" to begin</li>
                <li>Click along the outer edge of your roof to create points</li>
                <li>Double-click the last point to finish</li>
                <li>Drag any point to adjust the outline</li>
                <li>Use the trash icon in the top-left to delete</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
