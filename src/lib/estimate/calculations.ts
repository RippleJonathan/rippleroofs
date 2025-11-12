import {
  PolygonPoint,
  RoofMeasurement,
  PITCH_MULTIPLIERS,
  DEFAULT_PITCH,
  DEFAULT_WASTE_FACTOR,
  SQUARE_FEET_PER_SQUARE,
} from '@/types/estimate'

/**
 * Calculate the area of a polygon using the Shoelace formula
 * @param points Array of {lat, lng} coordinates
 * @returns Area in square meters
 */
export function calculatePolygonArea(points: PolygonPoint[]): number {
  if (points.length < 3) return 0

  let area = 0
  const n = points.length

  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n
    area += points[i].lng * points[j].lat
    area -= points[j].lng * points[i].lat
  }

  area = Math.abs(area) / 2

  // Convert to square feet (approximate)
  // 1 degree latitude ≈ 364,000 feet
  // 1 degree longitude ≈ 288,200 feet (at Texas latitude ~30°)
  const latFeet = 364000
  const lngFeet = 288200
  const areaSquareFeet = area * latFeet * lngFeet

  return Math.round(areaSquareFeet)
}

/**
 * Calculate roof measurement with pitch and waste factor
 */
export function calculateRoofMeasurement(
  squareFeet: number,
  pitch: string = DEFAULT_PITCH,
  wasteFactor: number = DEFAULT_WASTE_FACTOR
): RoofMeasurement {
  const pitchMultiplier = PITCH_MULTIPLIERS[pitch] || PITCH_MULTIPLIERS[DEFAULT_PITCH]
  
  // Apply pitch multiplier
  const adjustedSquareFeet = Math.round(squareFeet * pitchMultiplier)
  
  // Apply waste factor
  const squareFeetWithWaste = Math.round(adjustedSquareFeet * (1 + wasteFactor))
  
  // Convert to squares (1 square = 100 sq ft)
  const totalSquares = Number((squareFeetWithWaste / SQUARE_FEET_PER_SQUARE).toFixed(1))

  return {
    squareFeet,
    pitch,
    pitchMultiplier,
    wasteFactor,
    adjustedSquareFeet,
    totalSquares,
  }
}

/**
 * Format square footage with commas
 */
export function formatSquareFeet(sqft: number): string {
  return sqft.toLocaleString('en-US')
}

/**
 * Format price with currency
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Get pitch angle in degrees
 */
export function getPitchAngle(pitch: string): number {
  const angles: Record<string, number> = {
    '4/12': 18.4,
    '5/12': 22.6,
    '6/12': 26.6,
    '7/12': 30.3,
    '8/12': 33.7,
    '9/12': 36.9,
    '10/12': 39.8,
    '12/12': 45.0,
  }
  return angles[pitch] || angles[DEFAULT_PITCH]
}

/**
 * Estimate project timeline based on roof size
 */
export function estimateTimeline(totalSquares: number): string {
  if (totalSquares < 25) {
    return '1 Day'
  } else if (totalSquares < 40) {
    return '1-2 Days'
  } else if (totalSquares < 60) {
    return '2-3 Days'
  } else {
    return '3-5 Days'
  }
}

/**
 * Calculate estimate valid until date (30 days from now)
 */
export function getEstimateValidUntil(): Date {
  const date = new Date()
  date.setDate(date.getDate() + 30)
  return date
}
