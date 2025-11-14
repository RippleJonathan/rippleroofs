# TypeScript Types & Interfaces

## Overview

This document defines all TypeScript types, interfaces, and enums used throughout the admin system. These types mirror the database schema and provide type safety across the application.

## File Structure

```
src/lib/types/
├── database.ts          # Database table types (auto-generated from Supabase)
├── admin.ts             # Admin-specific types
├── leads.ts             # Lead management types
├── quotes.ts            # Quote system types
├── projects.ts          # Project management types
├── scheduling.ts        # Scheduling types
├── invoicing.ts         # Invoice and payment types
├── api.ts               # API response types
└── index.ts             # Re-export all types
```

## Core Enums

### User Roles

```typescript
// src/lib/types/enums.ts

export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  MANAGER = 'manager',
  CREW_LEAD = 'crew_lead',
  CREW_MEMBER = 'crew_member',
  CUSTOMER = 'customer',
}

export const USER_ROLE_LABELS: Record<UserRole, string> = {
  [UserRole.SUPER_ADMIN]: 'Super Admin',
  [UserRole.ADMIN]: 'Admin',
  [UserRole.MANAGER]: 'Manager',
  [UserRole.CREW_LEAD]: 'Crew Lead',
  [UserRole.CREW_MEMBER]: 'Crew Member',
  [UserRole.CUSTOMER]: 'Customer',
};

export const USER_ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  [UserRole.SUPER_ADMIN]: ['*'], // All permissions
  [UserRole.ADMIN]: [
    'leads:read', 'leads:write', 'leads:delete',
    'quotes:read', 'quotes:write', 'quotes:delete',
    'projects:read', 'projects:write', 'projects:delete',
    'customers:read', 'customers:write',
    'invoices:read', 'invoices:write',
    'users:read', 'users:write',
    'analytics:read',
  ],
  [UserRole.MANAGER]: [
    'leads:read', 'leads:write',
    'quotes:read', 'quotes:write',
    'projects:read', 'projects:write',
    'customers:read', 'customers:write',
    'invoices:read',
    'analytics:read',
  ],
  [UserRole.CREW_LEAD]: [
    'projects:read', 'projects:write',
    'tasks:read', 'tasks:write',
    'photos:write',
    'notes:write',
  ],
  [UserRole.CREW_MEMBER]: [
    'projects:read',
    'tasks:read', 'tasks:write',
    'photos:write',
  ],
  [UserRole.CUSTOMER]: [
    'projects:read_own',
    'invoices:read_own',
    'quotes:read_own',
  ],
};
```

### Lead Status

```typescript
export enum LeadStatus {
  NEW = 'new',
  CONTACTED = 'contacted',
  QUALIFIED = 'qualified',
  QUOTED = 'quoted',
  WON = 'won',
  LOST = 'lost',
  DEAD = 'dead',
}

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  [LeadStatus.NEW]: 'New',
  [LeadStatus.CONTACTED]: 'Contacted',
  [LeadStatus.QUALIFIED]: 'Qualified',
  [LeadStatus.QUOTED]: 'Quoted',
  [LeadStatus.WON]: 'Won',
  [LeadStatus.LOST]: 'Lost',
  [LeadStatus.DEAD]: 'Dead',
};

export const LEAD_STATUS_COLORS: Record<LeadStatus, string> = {
  [LeadStatus.NEW]: 'blue',
  [LeadStatus.CONTACTED]: 'yellow',
  [LeadStatus.QUALIFIED]: 'purple',
  [LeadStatus.QUOTED]: 'orange',
  [LeadStatus.WON]: 'green',
  [LeadStatus.LOST]: 'red',
  [LeadStatus.DEAD]: 'gray',
};
```

### Lead Source

```typescript
export enum LeadSource {
  WEBSITE = 'website',
  GOOGLE_ADS = 'google_ads',
  FACEBOOK = 'facebook',
  REFERRAL = 'referral',
  PHONE = 'phone',
  WALK_IN = 'walk_in',
  EMAIL = 'email',
  SEO = 'seo',
  OTHER = 'other',
}

export const LEAD_SOURCE_LABELS: Record<LeadSource, string> = {
  [LeadSource.WEBSITE]: 'Website Form',
  [LeadSource.GOOGLE_ADS]: 'Google Ads',
  [LeadSource.FACEBOOK]: 'Facebook',
  [LeadSource.REFERRAL]: 'Referral',
  [LeadSource.PHONE]: 'Phone Call',
  [LeadSource.WALK_IN]: 'Walk In',
  [LeadSource.EMAIL]: 'Email',
  [LeadSource.SEO]: 'Organic Search',
  [LeadSource.OTHER]: 'Other',
};
```

### Service Type

```typescript
export enum ServiceType {
  REPAIR = 'repair',
  REPLACEMENT = 'replacement',
  INSPECTION = 'inspection',
  MAINTENANCE = 'maintenance',
  EMERGENCY = 'emergency',
  CONSULTATION = 'consultation',
  WARRANTY = 'warranty',
}

export const SERVICE_TYPE_LABELS: Record<ServiceType, string> = {
  [ServiceType.REPAIR]: 'Repair',
  [ServiceType.REPLACEMENT]: 'Replacement',
  [ServiceType.INSPECTION]: 'Inspection',
  [ServiceType.MAINTENANCE]: 'Maintenance',
  [ServiceType.EMERGENCY]: 'Emergency',
  [ServiceType.CONSULTATION]: 'Consultation',
  [ServiceType.WARRANTY]: 'Warranty Service',
};
```

### Project Status

```typescript
export enum ProjectStatus {
  PENDING = 'pending',
  SCHEDULED = 'scheduled',
  IN_PROGRESS = 'in_progress',
  ON_HOLD = 'on_hold',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  WARRANTY = 'warranty',
}

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  [ProjectStatus.PENDING]: 'Pending',
  [ProjectStatus.SCHEDULED]: 'Scheduled',
  [ProjectStatus.IN_PROGRESS]: 'In Progress',
  [ProjectStatus.ON_HOLD]: 'On Hold',
  [ProjectStatus.COMPLETED]: 'Completed',
  [ProjectStatus.CANCELLED]: 'Cancelled',
  [ProjectStatus.WARRANTY]: 'Warranty',
};

export const PROJECT_STATUS_COLORS: Record<ProjectStatus, string> = {
  [ProjectStatus.PENDING]: 'gray',
  [ProjectStatus.SCHEDULED]: 'blue',
  [ProjectStatus.IN_PROGRESS]: 'yellow',
  [ProjectStatus.ON_HOLD]: 'orange',
  [ProjectStatus.COMPLETED]: 'green',
  [ProjectStatus.CANCELLED]: 'red',
  [ProjectStatus.WARRANTY]: 'purple',
};
```

### Quote Status

```typescript
export enum QuoteStatus {
  DRAFT = 'draft',
  SENT = 'sent',
  VIEWED = 'viewed',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  EXPIRED = 'expired',
}

export const QUOTE_STATUS_LABELS: Record<QuoteStatus, string> = {
  [QuoteStatus.DRAFT]: 'Draft',
  [QuoteStatus.SENT]: 'Sent',
  [QuoteStatus.VIEWED]: 'Viewed',
  [QuoteStatus.ACCEPTED]: 'Accepted',
  [QuoteStatus.REJECTED]: 'Rejected',
  [QuoteStatus.EXPIRED]: 'Expired',
};

export const QUOTE_STATUS_COLORS: Record<QuoteStatus, string> = {
  [QuoteStatus.DRAFT]: 'gray',
  [QuoteStatus.SENT]: 'blue',
  [QuoteStatus.VIEWED]: 'purple',
  [QuoteStatus.ACCEPTED]: 'green',
  [QuoteStatus.REJECTED]: 'red',
  [QuoteStatus.EXPIRED]: 'orange',
};
```

### Invoice Status

```typescript
export enum InvoiceStatus {
  DRAFT = 'draft',
  SENT = 'sent',
  VIEWED = 'viewed',
  PARTIAL = 'partial',
  PAID = 'paid',
  OVERDUE = 'overdue',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
}

export const INVOICE_STATUS_LABELS: Record<InvoiceStatus, string> = {
  [InvoiceStatus.DRAFT]: 'Draft',
  [InvoiceStatus.SENT]: 'Sent',
  [InvoiceStatus.VIEWED]: 'Viewed',
  [InvoiceStatus.PARTIAL]: 'Partially Paid',
  [InvoiceStatus.PAID]: 'Paid',
  [InvoiceStatus.OVERDUE]: 'Overdue',
  [InvoiceStatus.CANCELLED]: 'Cancelled',
  [InvoiceStatus.REFUNDED]: 'Refunded',
};
```

### Payment Method

```typescript
export enum PaymentMethod {
  CASH = 'cash',
  CHECK = 'check',
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  ACH = 'ach',
  WIRE = 'wire',
  VENMO = 'venmo',
  ZELLE = 'zelle',
  OTHER = 'other',
}

export const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string> = {
  [PaymentMethod.CASH]: 'Cash',
  [PaymentMethod.CHECK]: 'Check',
  [PaymentMethod.CREDIT_CARD]: 'Credit Card',
  [PaymentMethod.DEBIT_CARD]: 'Debit Card',
  [PaymentMethod.ACH]: 'ACH Transfer',
  [PaymentMethod.WIRE]: 'Wire Transfer',
  [PaymentMethod.VENMO]: 'Venmo',
  [PaymentMethod.ZELLE]: 'Zelle',
  [PaymentMethod.OTHER]: 'Other',
};
```

## Database Types (Auto-Generated)

```typescript
// src/lib/types/database.ts
// This file is auto-generated from Supabase schema

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          phone: string | null
          role: UserRole
          avatar_url: string | null
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id: string
          email: string
          full_name: string
          phone?: string | null
          role?: UserRole
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          phone?: string | null
          role?: UserRole
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
      }
      customers: {
        Row: {
          id: string
          lead_id: string | null
          email: string
          full_name: string
          phone: string
          address: string
          city: string
          state: string
          zip: string
          property_type: string | null
          roof_type: string | null
          roof_age: number | null
          square_footage: number | null
          preferred_contact_method: string
          email_opt_in: boolean
          sms_opt_in: boolean
          customer_since: string
          lifetime_value: number
          total_projects: number
          notes: string | null
          created_by: string | null
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: string
          lead_id?: string | null
          email: string
          full_name: string
          phone: string
          address: string
          city: string
          state?: string
          zip: string
          property_type?: string | null
          roof_type?: string | null
          roof_age?: number | null
          square_footage?: number | null
          preferred_contact_method?: string
          email_opt_in?: boolean
          sms_opt_in?: boolean
          customer_since?: string
          lifetime_value?: number
          total_projects?: number
          notes?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: string
          lead_id?: string | null
          email?: string
          full_name?: string
          phone?: string
          address?: string
          city?: string
          state?: string
          zip?: string
          property_type?: string | null
          roof_type?: string | null
          roof_age?: number | null
          square_footage?: number | null
          preferred_contact_method?: string
          email_opt_in?: boolean
          sms_opt_in?: boolean
          customer_since?: string
          lifetime_value?: number
          total_projects?: number
          notes?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
      }
      leads: {
        Row: {
          id: string
          full_name: string
          email: string
          phone: string
          address: string | null
          city: string | null
          state: string
          zip: string | null
          source: LeadSource
          service_type: ServiceType
          urgency: string
          status: LeadStatus
          description: string | null
          estimated_budget: number | null
          preferred_start_date: string | null
          score: number
          quality: string
          assigned_to: string | null
          converted_to_customer: boolean
          converted_at: string | null
          lost_reason: string | null
          lost_at: string | null
          created_by: string | null
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: string
          full_name: string
          email: string
          phone: string
          address?: string | null
          city?: string | null
          state?: string
          zip?: string | null
          source: LeadSource
          service_type: ServiceType
          urgency?: string
          status?: LeadStatus
          description?: string | null
          estimated_budget?: number | null
          preferred_start_date?: string | null
          score?: number
          quality?: string
          assigned_to?: string | null
          converted_to_customer?: boolean
          converted_at?: string | null
          lost_reason?: string | null
          lost_at?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: string
          full_name?: string
          email?: string
          phone?: string
          address?: string | null
          city?: string | null
          state?: string
          zip?: string | null
          source?: LeadSource
          service_type?: ServiceType
          urgency?: string
          status?: LeadStatus
          description?: string | null
          estimated_budget?: number | null
          preferred_start_date?: string | null
          score?: number
          quality?: string
          assigned_to?: string | null
          converted_to_customer?: boolean
          converted_at?: string | null
          lost_reason?: string | null
          lost_at?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
      }
      // ... (continue for all tables)
    }
    Views: {
      active_projects_view: {
        Row: {
          // View columns
        }
      }
      lead_pipeline_view: {
        Row: {
          // View columns
        }
      }
      revenue_dashboard_view: {
        Row: {
          // View columns
        }
      }
    }
    Functions: {
      // Database functions
    }
    Enums: {
      user_role: UserRole
      lead_status: LeadStatus
      lead_source: LeadSource
      service_type: ServiceType
      project_status: ProjectStatus
      quote_status: QuoteStatus
      invoice_status: InvoiceStatus
      payment_method: PaymentMethod
    }
  }
}
```

## Application Types

### User Types

```typescript
// src/lib/types/admin.ts

import { Database } from './database'

export type User = Database['public']['Tables']['users']['Row']
export type UserInsert = Database['public']['Tables']['users']['Insert']
export type UserUpdate = Database['public']['Tables']['users']['Update']

export interface UserProfile extends User {
  assignedLeadCount?: number
  activeProjectCount?: number
  completedProjectCount?: number
}

export interface UserWithPermissions extends User {
  permissions: string[]
  canAccess: (permission: string) => boolean
}

export interface AuthUser {
  id: string
  email: string
  role: UserRole
  profile: UserProfile
}
```

### Lead Types

```typescript
// src/lib/types/leads.ts

import { Database } from './database'

export type Lead = Database['public']['Tables']['leads']['Row']
export type LeadInsert = Database['public']['Tables']['leads']['Insert']
export type LeadUpdate = Database['public']['Tables']['leads']['Update']

export interface LeadWithRelations extends Lead {
  assignedUser?: User | null
  activities?: Activity[]
  quotes?: Quote[]
  activityCount?: number
  lastActivityDate?: string | null
}

export interface LeadFormData {
  full_name: string
  email: string
  phone: string
  address?: string
  city?: string
  state?: string
  zip?: string
  source: LeadSource
  service_type: ServiceType
  urgency?: string
  description?: string
  estimated_budget?: number
  preferred_start_date?: string
}

export interface LeadFilters {
  status?: LeadStatus[]
  source?: LeadSource[]
  service_type?: ServiceType[]
  urgency?: string[]
  assigned_to?: string[]
  date_range?: {
    start: string
    end: string
  }
  search?: string
}

export interface LeadPipelineStats {
  total: number
  byStatus: Record<LeadStatus, number>
  bySource: Record<LeadSource, number>
  conversionRate: number
  avgResponseTime: number // in hours
  avgDaysToClose: number
}
```

### Quote Types

```typescript
// src/lib/types/quotes.ts

import { Database } from './database'

export type Quote = Database['public']['Tables']['quotes']['Row']
export type QuoteInsert = Database['public']['Tables']['quotes']['Insert']
export type QuoteUpdate = Database['public']['Tables']['quotes']['Update']

export type QuoteLineItem = Database['public']['Tables']['quote_line_items']['Row']
export type QuoteLineItemInsert = Database['public']['Tables']['quote_line_items']['Insert']
export type QuoteLineItemUpdate = Database['public']['Tables']['quote_line_items']['Update']

export interface QuoteWithRelations extends Quote {
  lead?: Lead | null
  customer?: Customer | null
  lineItems?: QuoteLineItem[]
  createdBy?: User
}

export interface QuoteFormData {
  lead_id?: string
  customer_id?: string
  title: string
  description?: string
  service_type: ServiceType
  estimated_duration_days?: number
  warranty_years?: number
  valid_until: string
  deposit_percentage?: number
  payment_terms?: string
  terms_and_conditions?: string
  customer_notes?: string
  line_items: QuoteLineItemFormData[]
}

export interface QuoteLineItemFormData {
  category: string
  item_name: string
  description?: string
  quantity: number
  unit: string
  unit_price: number
  material_id?: string
}

export interface QuoteCalculations {
  subtotal: number
  tax_amount: number
  discount_amount: number
  total_amount: number
  deposit_amount: number
}

export interface QuoteFilters {
  status?: QuoteStatus[]
  service_type?: ServiceType[]
  customer_id?: string
  date_range?: {
    start: string
    end: string
  }
  search?: string
}

export interface QuoteStats {
  total: number
  byStatus: Record<QuoteStatus, number>
  totalValue: number
  avgQuoteValue: number
  acceptanceRate: number
}
```

### Project Types

```typescript
// src/lib/types/projects.ts

import { Database } from './database'

export type Project = Database['public']['Tables']['projects']['Row']
export type ProjectInsert = Database['public']['Tables']['projects']['Insert']
export type ProjectUpdate = Database['public']['Tables']['projects']['Update']

export type ProjectTask = Database['public']['Tables']['project_tasks']['Row']
export type ProjectTaskInsert = Database['public']['Tables']['project_tasks']['Insert']
export type ProjectTaskUpdate = Database['public']['Tables']['project_tasks']['Update']

export type CrewAssignment = Database['public']['Tables']['crew_assignments']['Row']
export type CrewAssignmentInsert = Database['public']['Tables']['crew_assignments']['Insert']
export type CrewAssignmentUpdate = Database['public']['Tables']['crew_assignments']['Update']

export interface ProjectWithRelations extends Project {
  customer: Customer
  quote?: Quote | null
  projectManager?: User | null
  tasks?: ProjectTask[]
  crewAssignments?: CrewAssignment[]
  photos?: ProjectPhoto[]
  notes?: ProjectNote[]
  materials?: ProjectMaterial[]
  invoices?: Invoice[]
}

export interface ProjectFormData {
  customer_id: string
  quote_id?: string
  title: string
  description?: string
  service_type: ServiceType
  property_type?: string
  address: string
  city: string
  state: string
  zip: string
  scheduled_start_date?: string
  scheduled_end_date?: string
  estimated_duration_days?: number
  contract_amount: number
  deposit_received?: number
  project_manager_id?: string
  internal_notes?: string
}

export interface ProjectFilters {
  status?: ProjectStatus[]
  service_type?: ServiceType[]
  project_manager_id?: string
  customer_id?: string
  date_range?: {
    start: string
    end: string
  }
  search?: string
}

export interface ProjectStats {
  total: number
  byStatus: Record<ProjectStatus, number>
  totalValue: number
  totalPaid: number
  totalOutstanding: number
  avgCompletionDays: number
  onTimePercentage: number
}

export interface ProjectTimeline {
  event: string
  date: string
  type: 'milestone' | 'task' | 'note' | 'photo'
  user?: User
  details?: string
}
```

### Activity Types

```typescript
// src/lib/types/activities.ts

import { Database } from './database'

export type Activity = Database['public']['Tables']['activities']['Row']
export type ActivityInsert = Database['public']['Tables']['activities']['Insert']
export type ActivityUpdate = Database['public']['Tables']['activities']['Update']

export interface ActivityWithRelations extends Activity {
  lead?: Lead | null
  customer?: Customer | null
  project?: Project | null
  quote?: Quote | null
  assignedUser?: User
  createdByUser?: User
}

export interface ActivityFormData {
  lead_id?: string
  customer_id?: string
  project_id?: string
  quote_id?: string
  type: string
  subject: string
  description?: string
  outcome?: string
  scheduled_at?: string
  duration_minutes?: number
  assigned_to: string
  requires_follow_up?: boolean
  follow_up_date?: string
}

export interface ActivityFilters {
  type?: string[]
  assigned_to?: string[]
  date_range?: {
    start: string
    end: string
  }
  completed?: boolean
  search?: string
}
```

### Invoice Types

```typescript
// src/lib/types/invoicing.ts

import { Database } from './database'

export type Invoice = Database['public']['Tables']['invoices']['Row']
export type InvoiceInsert = Database['public']['Tables']['invoices']['Insert']
export type InvoiceUpdate = Database['public']['Tables']['invoices']['Update']

export type InvoiceLineItem = Database['public']['Tables']['invoice_line_items']['Row']
export type Payment = Database['public']['Tables']['payments']['Row']

export interface InvoiceWithRelations extends Invoice {
  customer: Customer
  project?: Project | null
  quote?: Quote | null
  lineItems?: InvoiceLineItem[]
  payments?: Payment[]
  createdBy?: User
}

export interface InvoiceFormData {
  customer_id: string
  project_id?: string
  quote_id?: string
  title: string
  description?: string
  invoice_date: string
  due_date: string
  payment_terms?: string
  terms_and_conditions?: string
  customer_notes?: string
  line_items: InvoiceLineItemFormData[]
}

export interface InvoiceLineItemFormData {
  category: string
  item_name: string
  description?: string
  quantity: number
  unit: string
  unit_price: number
}

export interface PaymentFormData {
  invoice_id: string
  amount: number
  payment_date: string
  payment_method: PaymentMethod
  check_number?: string
  transaction_id?: string
  notes?: string
}

export interface InvoiceStats {
  total: number
  byStatus: Record<InvoiceStatus, number>
  totalBilled: number
  totalPaid: number
  totalOutstanding: number
  avgDaysToPayment: number
  overdueAmount: number
  overdueCount: number
}
```

## API Response Types

```typescript
// src/lib/types/api.ts

export interface ApiResponse<T> {
  data: T | null
  error: ApiError | null
  count?: number
}

export interface ApiError {
  message: string
  code?: string
  details?: unknown
}

export interface PaginationParams {
  page: number
  per_page: number
  sort_by?: string
  sort_order?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    per_page: number
    total: number
    total_pages: number
    has_next: boolean
    has_previous: boolean
  }
  error: ApiError | null
}

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface TableColumn<T> {
  key: keyof T | string
  header: string
  sortable?: boolean
  filterable?: boolean
  render?: (row: T) => React.ReactNode
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'number' | 'date' | 'select' | 'textarea' | 'checkbox'
  required?: boolean
  placeholder?: string
  options?: SelectOption[]
  validation?: {
    min?: number
    max?: number
    pattern?: RegExp
    message?: string
  }
}
```

## Form Validation Schemas (Zod)

```typescript
// src/lib/validation/schemas.ts

import { z } from 'zod'

export const leadFormSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits'),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().length(2, 'State must be 2 characters').optional(),
  zip: z.string().regex(/^\d{5}$/, 'ZIP must be 5 digits').optional(),
  source: z.nativeEnum(LeadSource),
  service_type: z.nativeEnum(ServiceType),
  urgency: z.string().optional(),
  description: z.string().optional(),
  estimated_budget: z.number().positive().optional(),
  preferred_start_date: z.string().optional(),
})

export const quoteFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().optional(),
  service_type: z.nativeEnum(ServiceType),
  estimated_duration_days: z.number().positive().optional(),
  warranty_years: z.number().positive().optional(),
  valid_until: z.string(),
  deposit_percentage: z.number().min(0).max(100).optional(),
  payment_terms: z.string().optional(),
  line_items: z.array(
    z.object({
      category: z.string(),
      item_name: z.string().min(1, 'Item name required'),
      description: z.string().optional(),
      quantity: z.number().positive(),
      unit: z.string(),
      unit_price: z.number().positive(),
    })
  ).min(1, 'At least one line item required'),
})

export const projectFormSchema = z.object({
  customer_id: z.string().uuid(),
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().optional(),
  service_type: z.nativeEnum(ServiceType),
  address: z.string().min(5, 'Address required'),
  city: z.string().min(2, 'City required'),
  state: z.string().length(2, 'State must be 2 characters'),
  zip: z.string().regex(/^\d{5}$/, 'ZIP must be 5 digits'),
  scheduled_start_date: z.string().optional(),
  contract_amount: z.number().positive('Contract amount required'),
})

export const invoiceFormSchema = z.object({
  customer_id: z.string().uuid(),
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().optional(),
  invoice_date: z.string(),
  due_date: z.string(),
  payment_terms: z.string().optional(),
  line_items: z.array(
    z.object({
      category: z.string(),
      item_name: z.string().min(1, 'Item name required'),
      description: z.string().optional(),
      quantity: z.number().positive(),
      unit: z.string(),
      unit_price: z.number().positive(),
    })
  ).min(1, 'At least one line item required'),
})

export const paymentFormSchema = z.object({
  invoice_id: z.string().uuid(),
  amount: z.number().positive('Amount must be positive'),
  payment_date: z.string(),
  payment_method: z.nativeEnum(PaymentMethod),
  check_number: z.string().optional(),
  transaction_id: z.string().optional(),
  notes: z.string().optional(),
})
```

## Usage Examples

```typescript
// Using types in components
import { Lead, LeadWithRelations, LeadFormData } from '@/lib/types/leads'
import { ApiResponse, PaginatedResponse } from '@/lib/types/api'

// Fetching data
const { data: leads, error }: ApiResponse<Lead[]> = await getLeads()

// With relations
const { data: lead, error }: ApiResponse<LeadWithRelations> = await getLeadById(id)

// Form handling
const handleSubmit = async (formData: LeadFormData) => {
  const { data, error }: ApiResponse<Lead> = await createLead(formData)
  if (error) {
    // Handle error
  }
}

// Paginated
const { data, pagination, error }: PaginatedResponse<Lead> = await getLeadsPaginated({
  page: 1,
  per_page: 20,
  sort_by: 'created_at',
  sort_order: 'desc',
})
```

---

**Last Updated**: November 14, 2025  
**Version**: 1.0  
**Status**: Complete type definitions
