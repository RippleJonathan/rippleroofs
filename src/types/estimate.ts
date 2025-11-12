// Estimate Tool Types

export interface Address {
  formatted: string
  street: string
  city: string
  state: string
  zip: string
  latitude: number
  longitude: number
}

export interface RoofMeasurement {
  squareFeet: number
  pitch: string
  pitchMultiplier: number
  wasteFactor: number
  adjustedSquareFeet: number
  totalSquares: number
}

export interface RoofingPackage {
  id: string
  name: string
  description: string
  pricePerSquare: number
  features: string[]
  warranty: {
    manufacturer: string
    workmanship: string
  }
  color: 'primary' | 'accent' | 'secondary'
  recommended?: boolean
}

export interface EstimateLineItem {
  description: string
  quantity?: number
  unit?: string
  unitPrice?: number
  total: number
}

export interface Estimate {
  address: Address
  measurement: RoofMeasurement
  package: RoofingPackage
  lineItems: EstimateLineItem[]
  subtotal: number
  total: number
  timeline: string
  validUntil: Date
  createdAt: Date
  customerInfo?: {
    name: string
    email: string
    phone?: string
  }
}

export interface PolygonPoint {
  lat: number
  lng: number
}

export const PITCH_MULTIPLIERS: Record<string, number> = {
  '4/12': 1.06,
  '5/12': 1.08,
  '6/12': 1.12,
  '7/12': 1.16,
  '8/12': 1.20,
  '9/12': 1.25,
  '10/12': 1.30,
  '12/12': 1.41,
}

export const DEFAULT_PITCH = '6/12'
export const DEFAULT_WASTE_FACTOR = 0.10 // 10%
export const SQUARE_FEET_PER_SQUARE = 100
