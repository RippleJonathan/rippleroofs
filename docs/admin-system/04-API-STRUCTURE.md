# API Structure & Patterns

## Overview

This document defines the API client architecture, patterns, and functions for interacting with the Supabase backend. All database operations go through this API layer for consistency and maintainability.

## Architecture

```
┌─────────────────────────────────────────────┐
│           React Components                  │
│   (Pages, Forms, Tables, etc.)              │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│          React Query Hooks                  │
│   (useLeads, useProjects, etc.)             │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│           API Client Functions              │
│   (getLeads, createLead, etc.)              │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│          Supabase Client                    │
│   (Database, Auth, Storage)                 │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│          PostgreSQL Database                │
│   (Tables, RLS Policies, Functions)         │
└─────────────────────────────────────────────┘
```

## Supabase Client Setup

### Browser Client

```typescript
// src/lib/supabase/client.ts

import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@/lib/types/database'

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// Export singleton instance
export const supabase = createClient()
```

### Server Client

```typescript
// src/lib/supabase/server.ts

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Database } from '@/lib/types/database'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // Server component, can't set cookies
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // Server component, can't remove cookies
          }
        },
      },
    }
  )
}
```

### Admin Client (Service Role)

```typescript
// src/lib/supabase/admin.ts

import { createClient } from '@supabase/supabase-js'
import { Database } from '@/lib/types/database'

// Only use this in server-side code!
export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)

// Bypasses RLS - use with extreme caution!
```

## API Response Pattern

### Standard Response Type

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

// Helper function to create error responses
export function createErrorResponse(error: unknown): { error: ApiError; data: null } {
  if (error instanceof Error) {
    return {
      error: {
        message: error.message,
        code: error.name,
        details: error,
      },
      data: null,
    }
  }
  
  return {
    error: {
      message: 'An unknown error occurred',
      details: error,
    },
    data: null,
  }
}
```

### Paginated Response Type

```typescript
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

export interface PaginationParams {
  page?: number
  per_page?: number
  sort_by?: string
  sort_order?: 'asc' | 'desc'
}
```

## API Client Functions

### Lead API

```typescript
// src/lib/api/leads.ts

import { supabase } from '@/lib/supabase/client'
import { Lead, LeadInsert, LeadUpdate, LeadWithRelations } from '@/lib/types/leads'
import { ApiResponse, PaginatedResponse, PaginationParams, createErrorResponse } from '@/lib/types/api'

// Get all leads (with optional filters)
export async function getLeads(params?: {
  status?: string[]
  source?: string[]
  assigned_to?: string
  search?: string
}): Promise<ApiResponse<Lead[]>> {
  try {
    let query = supabase
      .from('leads')
      .select('*')
      .is('deleted_at', null)
      .order('created_at', { ascending: false })

    // Apply filters
    if (params?.status && params.status.length > 0) {
      query = query.in('status', params.status)
    }

    if (params?.source && params.source.length > 0) {
      query = query.in('source', params.source)
    }

    if (params?.assigned_to) {
      query = query.eq('assigned_to', params.assigned_to)
    }

    if (params?.search) {
      query = query.or(`full_name.ilike.%${params.search}%,email.ilike.%${params.search}%,phone.ilike.%${params.search}%`)
    }

    const { data, error, count } = await query

    if (error) {
      return createErrorResponse(error)
    }

    return { data, error: null, count: count || undefined }
  } catch (error) {
    return createErrorResponse(error)
  }
}

// Get leads with pagination
export async function getLeadsPaginated(
  pagination: PaginationParams = {}
): Promise<PaginatedResponse<Lead>> {
  try {
    const page = pagination.page || 1
    const per_page = pagination.per_page || 20
    const sort_by = pagination.sort_by || 'created_at'
    const sort_order = pagination.sort_order || 'desc'

    const from = (page - 1) * per_page
    const to = from + per_page - 1

    const { data, error, count } = await supabase
      .from('leads')
      .select('*', { count: 'exact' })
      .is('deleted_at', null)
      .order(sort_by, { ascending: sort_order === 'asc' })
      .range(from, to)

    if (error) {
      return {
        ...createErrorResponse(error),
        data: [],
        pagination: {
          page,
          per_page,
          total: 0,
          total_pages: 0,
          has_next: false,
          has_previous: false,
        },
      }
    }

    const total = count || 0
    const total_pages = Math.ceil(total / per_page)

    return {
      data: data || [],
      pagination: {
        page,
        per_page,
        total,
        total_pages,
        has_next: page < total_pages,
        has_previous: page > 1,
      },
      error: null,
    }
  } catch (error) {
    return {
      ...createErrorResponse(error),
      data: [],
      pagination: {
        page: 1,
        per_page: 20,
        total: 0,
        total_pages: 0,
        has_next: false,
        has_previous: false,
      },
    }
  }
}

// Get single lead by ID
export async function getLeadById(id: string): Promise<ApiResponse<LeadWithRelations>> {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select(`
        *,
        assignedUser:users!assigned_to(*),
        activities(*),
        quotes(*)
      `)
      .eq('id', id)
      .is('deleted_at', null)
      .single()

    if (error) {
      return createErrorResponse(error)
    }

    return { data, error: null }
  } catch (error) {
    return createErrorResponse(error)
  }
}

// Create new lead
export async function createLead(lead: LeadInsert): Promise<ApiResponse<Lead>> {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert(lead)
      .select()
      .single()

    if (error) {
      return createErrorResponse(error)
    }

    return { data, error: null }
  } catch (error) {
    return createErrorResponse(error)
  }
}

// Update lead
export async function updateLead(id: string, updates: LeadUpdate): Promise<ApiResponse<Lead>> {
  try {
    const { data, error } = await supabase
      .from('leads')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return createErrorResponse(error)
    }

    return { data, error: null }
  } catch (error) {
    return createErrorResponse(error)
  }
}

// Soft delete lead
export async function deleteLead(id: string): Promise<ApiResponse<void>> {
  try {
    const { error } = await supabase
      .from('leads')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', id)

    if (error) {
      return createErrorResponse(error)
    }

    return { data: null, error: null }
  } catch (error) {
    return createErrorResponse(error)
  }
}

// Assign lead to user
export async function assignLead(leadId: string, userId: string): Promise<ApiResponse<Lead>> {
  return updateLead(leadId, { assigned_to: userId })
}

// Update lead status
export async function updateLeadStatus(leadId: string, status: string): Promise<ApiResponse<Lead>> {
  return updateLead(leadId, { status })
}

// Convert lead to customer
export async function convertLeadToCustomer(leadId: string): Promise<ApiResponse<{ lead: Lead; customer: Customer }>> {
  try {
    // Get lead data
    const { data: lead, error: leadError } = await supabase
      .from('leads')
      .select('*')
      .eq('id', leadId)
      .single()

    if (leadError || !lead) {
      return createErrorResponse(leadError || new Error('Lead not found'))
    }

    // Create customer from lead
    const { data: customer, error: customerError } = await supabase
      .from('customers')
      .insert({
        lead_id: lead.id,
        email: lead.email,
        full_name: lead.full_name,
        phone: lead.phone,
        address: lead.address || '',
        city: lead.city || '',
        state: lead.state || 'TX',
        zip: lead.zip || '',
      })
      .select()
      .single()

    if (customerError) {
      return createErrorResponse(customerError)
    }

    // Update lead status
    const { error: updateError } = await supabase
      .from('leads')
      .update({
        status: 'won',
        converted_to_customer: true,
        converted_at: new Date().toISOString(),
      })
      .eq('id', leadId)

    if (updateError) {
      return createErrorResponse(updateError)
    }

    return { data: { lead, customer }, error: null }
  } catch (error) {
    return createErrorResponse(error)
  }
}

// Get lead pipeline stats
export async function getLeadPipelineStats(): Promise<ApiResponse<LeadPipelineStats>> {
  try {
    const { data: leads, error } = await supabase
      .from('leads')
      .select('status, source, created_at, converted_at')
      .is('deleted_at', null)

    if (error) {
      return createErrorResponse(error)
    }

    // Calculate stats
    const total = leads?.length || 0
    const byStatus = leads?.reduce((acc, lead) => {
      acc[lead.status] = (acc[lead.status] || 0) + 1
      return acc
    }, {} as Record<string, number>) || {}

    const bySource = leads?.reduce((acc, lead) => {
      acc[lead.source] = (acc[lead.source] || 0) + 1
      return acc
    }, {} as Record<string, number>) || {}

    const wonLeads = leads?.filter(l => l.status === 'won') || []
    const conversionRate = total > 0 ? (wonLeads.length / total) * 100 : 0

    // Calculate average days to close for won leads
    const daysToClose = wonLeads
      .filter(l => l.converted_at)
      .map(l => {
        const created = new Date(l.created_at).getTime()
        const converted = new Date(l.converted_at!).getTime()
        return (converted - created) / (1000 * 60 * 60 * 24) // days
      })

    const avgDaysToClose = daysToClose.length > 0
      ? daysToClose.reduce((a, b) => a + b, 0) / daysToClose.length
      : 0

    const stats: LeadPipelineStats = {
      total,
      byStatus,
      bySource,
      conversionRate,
      avgResponseTime: 0, // Calculate from activities
      avgDaysToClose,
    }

    return { data: stats, error: null }
  } catch (error) {
    return createErrorResponse(error)
  }
}
```

### Quote API

```typescript
// src/lib/api/quotes.ts

import { supabase } from '@/lib/supabase/client'
import { Quote, QuoteInsert, QuoteUpdate, QuoteWithRelations } from '@/lib/types/quotes'
import { ApiResponse, createErrorResponse } from '@/lib/types/api'

// Get all quotes
export async function getQuotes(params?: {
  status?: string[]
  customer_id?: string
  search?: string
}): Promise<ApiResponse<Quote[]>> {
  try {
    let query = supabase
      .from('quotes')
      .select('*')
      .is('deleted_at', null)
      .order('created_at', { ascending: false })

    if (params?.status && params.status.length > 0) {
      query = query.in('status', params.status)
    }

    if (params?.customer_id) {
      query = query.eq('customer_id', params.customer_id)
    }

    if (params?.search) {
      query = query.or(`title.ilike.%${params.search}%,quote_number.ilike.%${params.search}%`)
    }

    const { data, error, count } = await query

    if (error) {
      return createErrorResponse(error)
    }

    return { data, error: null, count: count || undefined }
  } catch (error) {
    return createErrorResponse(error)
  }
}

// Get quote by ID with relations
export async function getQuoteById(id: string): Promise<ApiResponse<QuoteWithRelations>> {
  try {
    const { data, error } = await supabase
      .from('quotes')
      .select(`
        *,
        lead:leads(*),
        customer:customers(*),
        lineItems:quote_line_items(*),
        createdBy:users!created_by(*)
      `)
      .eq('id', id)
      .is('deleted_at', null)
      .single()

    if (error) {
      return createErrorResponse(error)
    }

    return { data, error: null }
  } catch (error) {
    return createErrorResponse(error)
  }
}

// Create quote with line items
export async function createQuote(
  quote: QuoteInsert,
  lineItems: QuoteLineItemInsert[]
): Promise<ApiResponse<QuoteWithRelations>> {
  try {
    // Insert quote
    const { data: quoteData, error: quoteError } = await supabase
      .from('quotes')
      .insert(quote)
      .select()
      .single()

    if (quoteError) {
      return createErrorResponse(quoteError)
    }

    // Insert line items
    const lineItemsWithQuoteId = lineItems.map(item => ({
      ...item,
      quote_id: quoteData.id,
    }))

    const { error: lineItemsError } = await supabase
      .from('quote_line_items')
      .insert(lineItemsWithQuoteId)

    if (lineItemsError) {
      // Rollback quote creation
      await supabase.from('quotes').delete().eq('id', quoteData.id)
      return createErrorResponse(lineItemsError)
    }

    // Return quote with line items
    return getQuoteById(quoteData.id)
  } catch (error) {
    return createErrorResponse(error)
  }
}

// Update quote
export async function updateQuote(id: string, updates: QuoteUpdate): Promise<ApiResponse<Quote>> {
  try {
    const { data, error } = await supabase
      .from('quotes')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return createErrorResponse(error)
    }

    return { data, error: null }
  } catch (error) {
    return createErrorResponse(error)
  }
}

// Delete quote
export async function deleteQuote(id: string): Promise<ApiResponse<void>> {
  try {
    const { error } = await supabase
      .from('quotes')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', id)

    if (error) {
      return createErrorResponse(error)
    }

    return { data: null, error: null }
  } catch (error) {
    return createErrorResponse(error)
  }
}

// Update quote status
export async function updateQuoteStatus(
  quoteId: string,
  status: string
): Promise<ApiResponse<Quote>> {
  const updates: QuoteUpdate = { status }

  // Add timestamps based on status
  if (status === 'sent') {
    updates.sent_at = new Date().toISOString()
  } else if (status === 'accepted') {
    updates.accepted_at = new Date().toISOString()
  } else if (status === 'rejected') {
    updates.rejected_at = new Date().toISOString()
  }

  return updateQuote(quoteId, updates)
}

// Generate quote PDF
export async function generateQuotePDF(quoteId: string): Promise<ApiResponse<string>> {
  try {
    // This would call an edge function or API route to generate PDF
    const response = await fetch(`/api/quotes/${quoteId}/pdf`, {
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error('Failed to generate PDF')
    }

    const { url } = await response.json()

    // Update quote with PDF URL
    await updateQuote(quoteId, { pdf_url: url })

    return { data: url, error: null }
  } catch (error) {
    return createErrorResponse(error)
  }
}

// Send quote email
export async function sendQuoteEmail(quoteId: string): Promise<ApiResponse<void>> {
  try {
    // This would call an edge function or API route to send email
    const response = await fetch(`/api/quotes/${quoteId}/send`, {
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error('Failed to send quote email')
    }

    // Update quote status
    await updateQuoteStatus(quoteId, 'sent')

    return { data: null, error: null }
  } catch (error) {
    return createErrorResponse(error)
  }
}
```

## React Query Hooks

### Lead Hooks

```typescript
// src/hooks/use-leads.ts

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  getLeads,
  getLeadById,
  createLead,
  updateLead,
  deleteLead,
  getLeadPipelineStats,
} from '@/lib/api/leads'
import { LeadInsert, LeadUpdate } from '@/lib/types/leads'
import { toast } from 'sonner'

// Query keys
export const leadKeys = {
  all: ['leads'] as const,
  lists: () => [...leadKeys.all, 'list'] as const,
  list: (filters: Record<string, unknown>) => [...leadKeys.lists(), filters] as const,
  details: () => [...leadKeys.all, 'detail'] as const,
  detail: (id: string) => [...leadKeys.details(), id] as const,
  stats: () => [...leadKeys.all, 'stats'] as const,
}

// Get all leads
export function useLeads(filters?: Record<string, unknown>) {
  return useQuery({
    queryKey: leadKeys.list(filters || {}),
    queryFn: () => getLeads(filters),
  })
}

// Get single lead
export function useLead(id: string) {
  return useQuery({
    queryKey: leadKeys.detail(id),
    queryFn: () => getLeadById(id),
    enabled: !!id,
  })
}

// Get lead stats
export function useLeadStats() {
  return useQuery({
    queryKey: leadKeys.stats(),
    queryFn: () => getLeadPipelineStats(),
  })
}

// Create lead mutation
export function useCreateLead() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (lead: LeadInsert) => createLead(lead),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: leadKeys.lists() })
      queryClient.invalidateQueries({ queryKey: leadKeys.stats() })
      toast.success('Lead created successfully')
    },
    onError: (error: Error) => {
      toast.error(`Failed to create lead: ${error.message}`)
    },
  })
}

// Update lead mutation
export function useUpdateLead() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: LeadUpdate }) =>
      updateLead(id, updates),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: leadKeys.detail(variables.id) })
      queryClient.invalidateQueries({ queryKey: leadKeys.lists() })
      queryClient.invalidateQueries({ queryKey: leadKeys.stats() })
      toast.success('Lead updated successfully')
    },
    onError: (error: Error) => {
      toast.error(`Failed to update lead: ${error.message}`)
    },
  })
}

// Delete lead mutation
export function useDeleteLead() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteLead(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: leadKeys.lists() })
      queryClient.invalidateQueries({ queryKey: leadKeys.stats() })
      toast.success('Lead deleted successfully')
    },
    onError: (error: Error) => {
      toast.error(`Failed to delete lead: ${error.message}`)
    },
  })
}
```

## Usage in Components

### List Page Example

```typescript
// src/app/(admin)/admin/leads/page.tsx

'use client'

import { useLeads, useDeleteLead } from '@/hooks/use-leads'
import { LeadStatus } from '@/lib/types/enums'
import { useState } from 'react'

export default function LeadsPage() {
  const [filters, setFilters] = useState({
    status: [] as LeadStatus[],
    search: '',
  })

  const { data: response, isLoading, error } = useLeads(filters)
  const deleteMutation = useDeleteLead()

  const leads = response?.data || []

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this lead?')) {
      await deleteMutation.mutateAsync(id)
    }
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>Leads</h1>
      {/* Filters, table, etc. */}
    </div>
  )
}
```

### Form Example

```typescript
// src/components/admin/leads/lead-form.tsx

'use client'

import { useCreateLead, useUpdateLead } from '@/hooks/use-leads'
import { Lead, LeadFormData } from '@/lib/types/leads'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadFormSchema } from '@/lib/validation/schemas'

interface LeadFormProps {
  lead?: Lead
  onSuccess?: () => void
}

export function LeadForm({ lead, onSuccess }: LeadFormProps) {
  const createMutation = useCreateLead()
  const updateMutation = useUpdateLead()

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: lead || {
      full_name: '',
      email: '',
      phone: '',
      source: 'website',
      service_type: 'repair',
    },
  })

  const onSubmit = async (data: LeadFormData) => {
    if (lead) {
      await updateMutation.mutateAsync({ id: lead.id, updates: data })
    } else {
      await createMutation.mutateAsync(data)
    }
    
    onSuccess?.()
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  )
}
```

---

**Last Updated**: November 14, 2025  
**Version**: 1.0  
**Status**: Complete API patterns defined
