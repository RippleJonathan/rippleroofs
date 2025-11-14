# Constants & Configuration

## Overview

This document defines all constants, configuration values, and default settings used throughout the admin system. These values should be defined once and reused throughout the application.

## File Structure

```
src/lib/constants/
├── admin.ts             # Admin dashboard constants
├── leads.ts             # Lead management constants
├── quotes.ts            # Quote generation constants
├── projects.ts          # Project management constants
├── invoicing.ts         # Invoice and payment constants
├── notifications.ts     # Email/SMS constants
├── ui.ts                # UI/UX constants
└── index.ts             # Re-export all constants
```

## Admin Constants

```typescript
// src/lib/constants/admin.ts

export const ADMIN_ROUTES = {
  DASHBOARD: '/admin/dashboard',
  LEADS: '/admin/leads',
  LEAD_DETAIL: (id: string) => `/admin/leads/${id}`,
  QUOTES: '/admin/quotes',
  QUOTE_DETAIL: (id: string) => `/admin/quotes/${id}`,
  PROJECTS: '/admin/projects',
  PROJECT_DETAIL: (id: string) => `/admin/projects/${id}`,
  CUSTOMERS: '/admin/customers',
  CUSTOMER_DETAIL: (id: string) => `/admin/customers/${id}`,
  INVOICES: '/admin/invoices',
  INVOICE_DETAIL: (id: string) => `/admin/invoices/${id}`,
  SCHEDULE: '/admin/schedule',
  ANALYTICS: '/admin/analytics',
  SETTINGS: '/admin/settings',
  USERS: '/admin/users',
  MATERIALS: '/admin/materials',
  EQUIPMENT: '/admin/equipment',
} as const

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
  MAX_PAGE_SIZE: 100,
} as const

export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  DISPLAY_WITH_TIME: 'MMM dd, yyyy hh:mm a',
  INPUT: 'yyyy-MM-dd',
  API: 'yyyy-MM-dd',
  FILENAME: 'yyyyMMdd',
} as const

export const CURRENCY = {
  SYMBOL: '$',
  CODE: 'USD',
  LOCALE: 'en-US',
  DECIMALS: 2,
} as const

export const PHONE_FORMAT = {
  PATTERN: /^(\d{3})(\d{3})(\d{4})$/,
  DISPLAY: '($1) $2-$3',
  VALIDATION: /^\d{10}$/,
} as const

export const DEBOUNCE_DELAY = {
  SEARCH: 300, // milliseconds
  AUTO_SAVE: 1000,
  INPUT: 300,
} as const
```

## Lead Management Constants

```typescript
// src/lib/constants/leads.ts

export const LEAD_DEFAULTS = {
  URGENCY: 'medium',
  STATUS: 'new',
  QUALITY: 'unqualified',
  SCORE: 0,
  STATE: 'TX',
} as const

export const LEAD_SCORING_WEIGHTS = {
  HAS_BUDGET: 20,
  HAS_TIMELINE: 15,
  COMPLETE_ADDRESS: 10,
  HIGH_URGENCY: 15,
  REFERRAL_SOURCE: 20,
  RESPONSIVE: 10,
  QUALIFIED_SERVICE: 10,
} as const

export const LEAD_QUALITY_THRESHOLDS = {
  EXCELLENT: 75,
  GOOD: 50,
  POOR: 25,
  UNQUALIFIED: 0,
} as const

export const LEAD_RESPONSE_TIME = {
  TARGET_MINUTES: 30,
  WARNING_MINUTES: 60,
  CRITICAL_MINUTES: 120,
} as const

export const LEAD_FILTERS_DEFAULT = {
  status: [],
  source: [],
  service_type: [],
  urgency: [],
  assigned_to: [],
  date_range: null,
  search: '',
} as const

export const LEAD_PIPELINE_STAGES = [
  { status: 'new', label: 'New Leads', color: 'blue' },
  { status: 'contacted', label: 'Contacted', color: 'yellow' },
  { status: 'qualified', label: 'Qualified', color: 'purple' },
  { status: 'quoted', label: 'Quoted', color: 'orange' },
  { status: 'won', label: 'Won', color: 'green' },
  { status: 'lost', label: 'Lost', color: 'red' },
] as const

export const LEAD_AUTO_ASSIGNMENT = {
  ENABLED: true,
  ROUND_ROBIN: true,
  CONSIDER_WORKLOAD: true,
  MAX_LEADS_PER_USER: 50,
} as const
```

## Quote Constants

```typescript
// src/lib/constants/quotes.ts

export const QUOTE_DEFAULTS = {
  STATUS: 'draft',
  TAX_RATE: 0.0825, // Texas sales tax 8.25%
  VALID_DAYS: 30,
  DEPOSIT_PERCENTAGE: 30,
  PAYMENT_TERMS: 'Net 30',
  WARRANTY_YEARS: 10,
} as const

export const QUOTE_NUMBER_FORMAT = {
  PREFIX: 'QT',
  SEPARATOR: '-',
  DATE_FORMAT: 'YYYYMMDD',
  SEQUENCE_LENGTH: 4,
  // Example: QT-20241114-0001
} as const

export const QUOTE_LINE_ITEM_CATEGORIES = {
  LABOR: { label: 'Labor', default_unit: 'hour', taxable: true },
  MATERIALS: { label: 'Materials', default_unit: 'square', taxable: true },
  EQUIPMENT: { label: 'Equipment', default_unit: 'day', taxable: true },
  PERMIT: { label: 'Permit', default_unit: 'each', taxable: false },
  DISPOSAL: { label: 'Disposal', default_unit: 'each', taxable: true },
  WARRANTY: { label: 'Warranty', default_unit: 'year', taxable: false },
  INSPECTION: { label: 'Inspection', default_unit: 'each', taxable: true },
  OTHER: { label: 'Other', default_unit: 'each', taxable: true },
} as const

export const QUOTE_UNITS = [
  { value: 'each', label: 'Each' },
  { value: 'square', label: 'Square' },
  { value: 'bundle', label: 'Bundle' },
  { value: 'hour', label: 'Hour' },
  { value: 'day', label: 'Day' },
  { value: 'box', label: 'Box' },
  { value: 'roll', label: 'Roll' },
  { value: 'linear_foot', label: 'Linear Foot' },
] as const

export const QUOTE_TEMPLATES = {
  BASIC_REPAIR: {
    title: 'Roof Repair Service',
    line_items: [
      { category: 'labor', item_name: 'Roof Repair Labor', quantity: 4, unit: 'hour', unit_price: 85 },
      { category: 'materials', item_name: 'Shingles', quantity: 2, unit: 'bundle', unit_price: 35 },
      { category: 'disposal', item_name: 'Debris Disposal', quantity: 1, unit: 'each', unit_price: 150 },
    ],
  },
  ROOF_REPLACEMENT: {
    title: 'Complete Roof Replacement',
    line_items: [
      { category: 'labor', item_name: 'Tear-off & Installation', quantity: 1, unit: 'square', unit_price: 350 },
      { category: 'materials', item_name: 'Architectural Shingles', quantity: 1, unit: 'square', unit_price: 150 },
      { category: 'materials', item_name: 'Underlayment', quantity: 1, unit: 'square', unit_price: 35 },
      { category: 'materials', item_name: 'Drip Edge', quantity: 1, unit: 'linear_foot', unit_price: 2.5 },
      { category: 'permit', item_name: 'Building Permit', quantity: 1, unit: 'each', unit_price: 250 },
      { category: 'disposal', item_name: 'Dumpster & Disposal', quantity: 1, unit: 'each', unit_price: 500 },
      { category: 'warranty', item_name: '10-Year Workmanship Warranty', quantity: 1, unit: 'each', unit_price: 0 },
    ],
  },
  INSPECTION: {
    title: 'Roof Inspection',
    line_items: [
      { category: 'inspection', item_name: 'Comprehensive Roof Inspection', quantity: 1, unit: 'each', unit_price: 150 },
      { category: 'inspection', item_name: 'Detailed Report with Photos', quantity: 1, unit: 'each', unit_price: 0 },
    ],
  },
} as const

export const QUOTE_EMAIL_TEMPLATES = {
  SENT: {
    subject: 'Your Estimate from Ripple Roofs - Quote #{{quote_number}}',
    preview: 'Thank you for considering Ripple Roofs for your roofing needs.',
  },
  REMINDER: {
    subject: 'Reminder: Your Estimate from Ripple Roofs - Quote #{{quote_number}}',
    preview: 'Just following up on the estimate we sent you.',
  },
  ACCEPTED: {
    subject: 'Thank You for Choosing Ripple Roofs - Quote #{{quote_number}} Accepted',
    preview: "We're excited to work with you on your roofing project!",
  },
} as const

export const QUOTE_PDF_OPTIONS = {
  FILENAME_FORMAT: 'Quote-{{quote_number}}-{{customer_name}}.pdf',
  PAGE_SIZE: 'letter',
  MARGINS: { top: 50, right: 50, bottom: 50, left: 50 },
  FONTS: {
    HEADING: 'Helvetica-Bold',
    BODY: 'Helvetica',
  },
} as const
```

## Project Constants

```typescript
// src/lib/constants/projects.ts

export const PROJECT_DEFAULTS = {
  STATUS: 'pending',
  PRIORITY: 'normal',
  PROPERTY_TYPE: 'residential',
  STATE: 'TX',
  COMPLETION_PERCENTAGE: 0,
  INSPECTION_REQUIRED: true,
} as const

export const PROJECT_NUMBER_FORMAT = {
  PREFIX: 'PRJ',
  SEPARATOR: '-',
  DATE_FORMAT: 'YYYYMMDD',
  SEQUENCE_LENGTH: 4,
  // Example: PRJ-20241114-0001
} as const

export const PROJECT_MILESTONES = {
  CONTRACT_SIGNED: { label: 'Contract Signed', days: 0 },
  DEPOSIT_RECEIVED: { label: 'Deposit Received', days: 1 },
  MATERIALS_ORDERED: { label: 'Materials Ordered', days: 3 },
  PERMIT_APPROVED: { label: 'Permit Approved', days: 7 },
  PROJECT_START: { label: 'Project Start', days: 10 },
  INSPECTION_SCHEDULED: { label: 'Inspection Scheduled', days: 12 },
  PROJECT_COMPLETE: { label: 'Project Complete', days: 14 },
  FINAL_PAYMENT: { label: 'Final Payment', days: 15 },
} as const

export const PROJECT_TASK_TEMPLATES = {
  ROOF_REPLACEMENT: [
    { title: 'Site Inspection & Measurement', estimated_hours: 2, sort_order: 1 },
    { title: 'Order Materials', estimated_hours: 1, sort_order: 2 },
    { title: 'Schedule Dumpster Delivery', estimated_hours: 0.5, sort_order: 3 },
    { title: 'Tear Off Old Roof', estimated_hours: 8, sort_order: 4 },
    { title: 'Install Underlayment', estimated_hours: 4, sort_order: 5 },
    { title: 'Install Drip Edge', estimated_hours: 2, sort_order: 6 },
    { title: 'Install Shingles', estimated_hours: 16, sort_order: 7 },
    { title: 'Install Ridge Vents', estimated_hours: 3, sort_order: 8 },
    { title: 'Final Cleanup', estimated_hours: 2, sort_order: 9 },
    { title: 'Customer Walkthrough', estimated_hours: 1, sort_order: 10 },
  ],
  ROOF_REPAIR: [
    { title: 'Inspect Damage', estimated_hours: 1, sort_order: 1 },
    { title: 'Remove Damaged Shingles', estimated_hours: 2, sort_order: 2 },
    { title: 'Install New Shingles', estimated_hours: 3, sort_order: 3 },
    { title: 'Seal & Inspect', estimated_hours: 1, sort_order: 4 },
    { title: 'Cleanup', estimated_hours: 1, sort_order: 5 },
  ],
} as const

export const PROJECT_PHOTO_CATEGORIES = {
  BEFORE: { label: 'Before', required: true, min_photos: 4 },
  DURING: { label: 'During', required: true, min_photos: 2 },
  AFTER: { label: 'After', required: true, min_photos: 4 },
  DAMAGE: { label: 'Damage', required: false, min_photos: 0 },
  REPAIR: { label: 'Repair', required: false, min_photos: 0 },
  INSPECTION: { label: 'Inspection', required: false, min_photos: 0 },
} as const

export const PROJECT_CREW_ROLES = {
  LEAD: { label: 'Crew Lead', hourly_rate: 45 },
  ROOFER: { label: 'Roofer', hourly_rate: 35 },
  LABORER: { label: 'Laborer', hourly_rate: 25 },
  SPECIALIST: { label: 'Specialist', hourly_rate: 50 },
  SUPERVISOR: { label: 'Supervisor', hourly_rate: 55 },
} as const

export const PROJECT_DURATION_ESTIMATES = {
  REPAIR: { min_days: 1, max_days: 2, crew_size: 2 },
  REPLACEMENT_SMALL: { min_days: 2, max_days: 3, crew_size: 3, max_squares: 15 },
  REPLACEMENT_MEDIUM: { min_days: 3, max_days: 5, crew_size: 4, max_squares: 30 },
  REPLACEMENT_LARGE: { min_days: 5, max_days: 7, crew_size: 5, max_squares: 50 },
  REPLACEMENT_XLARGE: { min_days: 7, max_days: 10, crew_size: 6, max_squares: 999 },
  INSPECTION: { min_days: 0.5, max_days: 0.5, crew_size: 1 },
  MAINTENANCE: { min_days: 0.5, max_days: 1, crew_size: 2 },
} as const

export const PROJECT_COMPLETION_CHECKLIST = [
  { item: 'All work completed per contract', required: true },
  { item: 'Final inspection passed', required: true },
  { item: 'Site cleaned up', required: true },
  { item: 'Customer walkthrough completed', required: true },
  { item: 'Before/after photos taken', required: true },
  { item: 'Warranty documents provided', required: true },
  { item: 'Final payment received', required: true },
  { item: 'Customer satisfaction survey sent', required: false },
] as const
```

## Invoice & Payment Constants

```typescript
// src/lib/constants/invoicing.ts

export const INVOICE_DEFAULTS = {
  STATUS: 'draft',
  TAX_RATE: 0.0825,
  PAYMENT_TERMS: 'Net 30',
  LATE_FEE_PERCENTAGE: 1.5,
} as const

export const INVOICE_NUMBER_FORMAT = {
  PREFIX: 'INV',
  SEPARATOR: '-',
  DATE_FORMAT: 'YYYYMMDD',
  SEQUENCE_LENGTH: 4,
  // Example: INV-20241114-0001
} as const

export const PAYMENT_NUMBER_FORMAT = {
  PREFIX: 'PAY',
  SEPARATOR: '-',
  DATE_FORMAT: 'YYYYMMDD',
  SEQUENCE_LENGTH: 4,
  // Example: PAY-20241114-0001
} as const

export const PAYMENT_TERMS_OPTIONS = [
  { value: 'due_on_receipt', label: 'Due on Receipt', days: 0 },
  { value: 'net_15', label: 'Net 15', days: 15 },
  { value: 'net_30', label: 'Net 30', days: 30 },
  { value: 'net_60', label: 'Net 60', days: 60 },
  { value: 'net_90', label: 'Net 90', days: 90 },
] as const

export const PAYMENT_METHOD_FEES = {
  CASH: 0,
  CHECK: 0,
  CREDIT_CARD: 0.029, // 2.9%
  DEBIT_CARD: 0.015, // 1.5%
  ACH: 0.008, // 0.8%
  WIRE: 0,
  VENMO: 0.019, // 1.9%
  ZELLE: 0,
  OTHER: 0,
} as const

export const INVOICE_REMINDERS = {
  BEFORE_DUE: {
    DAYS: -7,
    SUBJECT: 'Upcoming Invoice Due - Invoice #{{invoice_number}}',
  },
  DUE_DATE: {
    DAYS: 0,
    SUBJECT: 'Invoice Due Today - Invoice #{{invoice_number}}',
  },
  PAST_DUE_7: {
    DAYS: 7,
    SUBJECT: 'Past Due Invoice - Invoice #{{invoice_number}}',
  },
  PAST_DUE_14: {
    DAYS: 14,
    SUBJECT: 'Second Notice: Past Due Invoice - Invoice #{{invoice_number}}',
  },
  PAST_DUE_30: {
    DAYS: 30,
    SUBJECT: 'Final Notice: Past Due Invoice - Invoice #{{invoice_number}}',
  },
} as const

export const INVOICE_PDF_OPTIONS = {
  FILENAME_FORMAT: 'Invoice-{{invoice_number}}-{{customer_name}}.pdf',
  PAGE_SIZE: 'letter',
  MARGINS: { top: 50, right: 50, bottom: 50, left: 50 },
} as const

export const PAYMENT_RECEIPT_OPTIONS = {
  FILENAME_FORMAT: 'Receipt-{{payment_number}}-{{customer_name}}.pdf',
  AUTO_SEND_EMAIL: true,
} as const
```

## Notification Constants

```typescript
// src/lib/constants/notifications.ts

export const EMAIL_SENDER = {
  NAME: 'Ripple Roofs',
  EMAIL: 'info@rippleroofs.com',
  REPLY_TO: 'info@rippleroofs.com',
} as const

export const EMAIL_TEMPLATES = {
  LEAD_CONFIRMATION: {
    subject: 'Thank You for Contacting Ripple Roofs',
    template_id: 'lead_confirmation',
  },
  QUOTE_SENT: {
    subject: 'Your Estimate from Ripple Roofs',
    template_id: 'quote_sent',
  },
  QUOTE_REMINDER: {
    subject: 'Reminder: Your Estimate from Ripple Roofs',
    template_id: 'quote_reminder',
  },
  INVOICE_SENT: {
    subject: 'Invoice from Ripple Roofs',
    template_id: 'invoice_sent',
  },
  PAYMENT_RECEIVED: {
    subject: 'Payment Received - Thank You!',
    template_id: 'payment_received',
  },
  PROJECT_SCHEDULED: {
    subject: 'Your Project Has Been Scheduled',
    template_id: 'project_scheduled',
  },
  PROJECT_STARTED: {
    subject: 'Your Project Has Started',
    template_id: 'project_started',
  },
  PROJECT_COMPLETED: {
    subject: 'Your Project Is Complete',
    template_id: 'project_completed',
  },
  REVIEW_REQUEST: {
    subject: 'We\'d Love Your Feedback',
    template_id: 'review_request',
  },
} as const

export const SMS_TEMPLATES = {
  APPOINTMENT_REMINDER: {
    message: 'Reminder: You have an appointment with Ripple Roofs tomorrow at {{time}}. Reply YES to confirm or CANCEL to reschedule.',
  },
  PROJECT_START_TOMORROW: {
    message: 'Your Ripple Roofs project starts tomorrow at {{time}}. Our crew will arrive at {{address}}.',
  },
  CREW_ON_WAY: {
    message: 'Our crew is on their way! They should arrive at {{address}} in approximately {{eta}} minutes.',
  },
  PROJECT_COMPLETE: {
    message: 'Your project is complete! Please do a final walkthrough with our crew lead at your convenience.',
  },
  QUOTE_READY: {
    message: 'Your estimate from Ripple Roofs is ready! Check your email for details or call us at {{phone}}.',
  },
  PAYMENT_REMINDER: {
    message: 'Friendly reminder: Invoice #{{invoice_number}} for ${{amount}} is due {{due_date}}. View: {{link}}',
  },
} as const

export const NOTIFICATION_TIMING = {
  APPOINTMENT_REMINDER: { hours_before: 24 },
  PROJECT_START_REMINDER: { hours_before: 24 },
  QUOTE_FOLLOW_UP: { days_after: 3 },
  REVIEW_REQUEST: { days_after: 7 },
  INVOICE_REMINDER: { days_before: 7 },
  OVERDUE_NOTICE: { days_after: 7 },
} as const

export const NOTIFICATION_PREFERENCES = {
  CAN_OPT_OUT: {
    MARKETING: true,
    PROMOTIONAL: true,
    REVIEW_REQUESTS: true,
    NEWSLETTERS: true,
  },
  CANNOT_OPT_OUT: {
    APPOINTMENT_CONFIRMATIONS: false,
    INVOICE_NOTICES: false,
    PROJECT_UPDATES: false,
    PAYMENT_RECEIPTS: false,
  },
} as const
```

## UI Constants

```typescript
// src/lib/constants/ui.ts

export const COLORS = {
  PRIMARY: '#1e40af', // blue-800
  SECONDARY: '#64748b', // slate-500
  SUCCESS: '#16a34a', // green-600
  WARNING: '#d97706', // amber-600
  ERROR: '#dc2626', // red-600
  INFO: '#0284c7', // sky-600
} as const

export const STATUS_BADGE_COLORS = {
  // Lead statuses
  new: 'blue',
  contacted: 'yellow',
  qualified: 'purple',
  quoted: 'orange',
  won: 'green',
  lost: 'red',
  dead: 'gray',
  
  // Project statuses
  pending: 'gray',
  scheduled: 'blue',
  in_progress: 'yellow',
  on_hold: 'orange',
  completed: 'green',
  cancelled: 'red',
  warranty: 'purple',
  
  // Quote/Invoice statuses
  draft: 'gray',
  sent: 'blue',
  viewed: 'purple',
  accepted: 'green',
  rejected: 'red',
  expired: 'orange',
  paid: 'green',
  overdue: 'red',
  partial: 'yellow',
} as const

export const TOAST_DURATION = {
  SHORT: 3000, // 3 seconds
  MEDIUM: 5000, // 5 seconds
  LONG: 7000, // 7 seconds
} as const

export const MODAL_SIZES = {
  SMALL: 'max-w-md',
  MEDIUM: 'max-w-2xl',
  LARGE: 'max-w-4xl',
  XLARGE: 'max-w-6xl',
  FULL: 'max-w-full',
} as const

export const TABLE_ROW_ACTIONS = {
  VIEW: { label: 'View', icon: 'eye' },
  EDIT: { label: 'Edit', icon: 'pencil' },
  DELETE: { label: 'Delete', icon: 'trash', danger: true },
  DUPLICATE: { label: 'Duplicate', icon: 'copy' },
  ARCHIVE: { label: 'Archive', icon: 'archive' },
} as const

export const EMPTY_STATES = {
  NO_LEADS: {
    title: 'No leads yet',
    description: 'Leads will appear here when customers submit contact forms or are manually added.',
    action: 'Add Lead',
  },
  NO_PROJECTS: {
    title: 'No projects yet',
    description: 'Projects will appear here when quotes are accepted and converted.',
    action: 'Create Project',
  },
  NO_QUOTES: {
    title: 'No quotes yet',
    description: 'Create estimates for your leads and customers.',
    action: 'Create Quote',
  },
  NO_INVOICES: {
    title: 'No invoices yet',
    description: 'Invoices will appear here when projects are billed.',
    action: 'Create Invoice',
  },
  NO_CUSTOMERS: {
    title: 'No customers yet',
    description: 'Customers will appear here when leads are converted.',
    action: 'Add Customer',
  },
  NO_SEARCH_RESULTS: {
    title: 'No results found',
    description: 'Try adjusting your search or filter criteria.',
    action: null,
  },
} as const

export const LOADING_MESSAGES = {
  DEFAULT: 'Loading...',
  SAVING: 'Saving...',
  DELETING: 'Deleting...',
  UPLOADING: 'Uploading...',
  GENERATING: 'Generating...',
  SENDING: 'Sending...',
} as const
```

## Material Pricing Constants

```typescript
// src/lib/constants/materials.ts

export const MATERIAL_CATEGORIES = {
  SHINGLES: 'shingles',
  UNDERLAYMENT: 'underlayment',
  FLASHING: 'flashing',
  VENTILATION: 'ventilation',
  FASTENERS: 'fasteners',
  TOOLS: 'tools',
  SAFETY: 'safety',
  OTHER: 'other',
} as const

export const STANDARD_MATERIALS = {
  // Shingles (per square)
  ARCHITECTURAL_SHINGLES: { category: 'shingles', cost: 120, price: 150, unit: 'square' },
  THREE_TAB_SHINGLES: { category: 'shingles', cost: 80, price: 100, unit: 'square' },
  DESIGNER_SHINGLES: { category: 'shingles', cost: 180, price: 225, unit: 'square' },
  
  // Underlayment (per square)
  SYNTHETIC_UNDERLAYMENT: { category: 'underlayment', cost: 28, price: 35, unit: 'square' },
  FELT_UNDERLAYMENT: { category: 'underlayment', cost: 16, price: 20, unit: 'square' },
  ICE_AND_WATER_SHIELD: { category: 'underlayment', cost: 40, price: 50, unit: 'roll' },
  
  // Flashing (per linear foot)
  DRIP_EDGE: { category: 'flashing', cost: 2.00, price: 2.50, unit: 'linear_foot' },
  STEP_FLASHING: { category: 'flashing', cost: 3.50, price: 4.50, unit: 'linear_foot' },
  VALLEY_FLASHING: { category: 'flashing', cost: 4.00, price: 5.00, unit: 'linear_foot' },
  
  // Ventilation
  RIDGE_VENT: { category: 'ventilation', cost: 32, price: 40, unit: 'linear_foot' },
  ROOF_VENT: { category: 'ventilation', cost: 20, price: 30, unit: 'each' },
  SOFFIT_VENT: { category: 'ventilation', cost: 8, price: 12, unit: 'each' },
} as const

export const LABOR_RATES = {
  TEAR_OFF: 75, // per square
  INSTALLATION: 250, // per square
  REPAIR: 85, // per hour
  INSPECTION: 150, // flat rate
  EMERGENCY: 125, // per hour (1.5x normal)
} as const
```

## Environment Configuration

```typescript
// src/lib/config/env.ts

export const ENV = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_DEV: process.env.NODE_ENV === 'development',
  IS_PROD: process.env.NODE_ENV === 'production',
  
  // Supabase
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  
  // Site
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL!,
  
  // Email (Resend)
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  
  // SMS (Twilio)
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER,
  
  // Google Maps
  GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  
  // Analytics
  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
} as const

// Validate required environment variables
export function validateEnv() {
  const required = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'NEXT_PUBLIC_SITE_URL',
  ]
  
  for (const key of required) {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`)
    }
  }
}
```

## Feature Flags

```typescript
// src/lib/config/features.ts

export const FEATURES = {
  // Phase 1
  LEAD_MANAGEMENT: true,
  CRM_ACTIVITIES: true,
  USER_MANAGEMENT: true,
  
  // Phase 2
  QUOTE_GENERATION: true,
  PROJECT_MANAGEMENT: true,
  
  // Phase 3
  SCHEDULING: false, // Coming soon
  CREW_ASSIGNMENTS: false, // Coming soon
  
  // Phase 4
  EMAIL_AUTOMATION: false, // Coming soon
  SMS_NOTIFICATIONS: false, // Coming soon
  
  // Advanced
  CUSTOMER_PORTAL: false, // Future
  MOBILE_APP: false, // Future
  AI_FEATURES: false, // Future
} as const

export function isFeatureEnabled(feature: keyof typeof FEATURES): boolean {
  return FEATURES[feature] === true
}
```

---

**Last Updated**: November 14, 2025  
**Version**: 1.0  
**Status**: Complete constants definition
