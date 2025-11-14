# Implementation Order Guide

## Overview

This guide provides the **exact sequence** for building the admin system. Follow this order to avoid refactoring and ensure each feature builds properly on the previous one.

**Critical Rule**: Complete each step fully and test before moving to the next. Do not skip ahead.

## Phase 0: Foundation (Week 1) - MUST DO FIRST

### Step 1: Supabase Project Setup (Day 1)

**Purpose**: Create and configure the database backend

```bash
# 1. Create Supabase project
# - Go to supabase.com
# - Create new project
# - Save project URL and anon key
# - Save service role key (for admin operations)

# 2. Install Supabase CLI
npm install -g supabase

# 3. Link local project to Supabase
npx supabase link --project-ref YOUR_PROJECT_REF

# 4. Create local environment file
cp .env.example .env.local
```

**.env.local**:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your-resend-key
```

### Step 2: Database Schema - Core Tables (Day 1-2)

**Purpose**: Create foundational tables that everything else depends on

**Order Matters**: Tables must be created in this sequence due to foreign key dependencies.

```sql
-- Migration: 20241114000001_create_core_tables.sql

-- 1. Extend auth.users with profile table
CREATE TABLE public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT,
  role TEXT NOT NULL DEFAULT 'customer',
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ,
  CONSTRAINT role_check CHECK (role IN (
    'super_admin', 'admin', 'manager', 
    'crew_lead', 'crew_member', 'customer'
  ))
);

-- 2. Create leads table (no dependencies)
CREATE TABLE public.leads (
  -- See 01A-DATABASE-SCHEMA.md for full definition
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  -- ... (copy from schema doc)
);

-- 3. Create customers table (depends on leads)
CREATE TABLE public.customers (
  -- See 01A-DATABASE-SCHEMA.md for full definition
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  -- ... (copy from schema doc)
);

-- 4. Create activities table (depends on leads, customers)
CREATE TABLE public.activities (
  -- See 01A-DATABASE-SCHEMA.md for full definition
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  customer_id UUID REFERENCES customers(id),
  -- ... (copy from schema doc)
);

-- 5. Create indexes
CREATE INDEX idx_users_role ON users(role) WHERE deleted_at IS NULL;
CREATE INDEX idx_leads_status ON leads(status) WHERE deleted_at IS NULL;
-- ... (copy all indexes from schema doc)

-- 6. Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

-- 7. Create RLS policies
-- (Copy from 01A-DATABASE-SCHEMA.md)

-- 8. Create functions and triggers
-- (Copy from 01B-DATABASE-SCHEMA-PART-2.md)
```

**Apply Migration**:
```bash
npx supabase db push
```

**Verify**:
```sql
-- Check tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';

-- Check RLS is enabled
SELECT tablename, rowsecurity FROM pg_tables 
WHERE schemaname = 'public';
```

### Step 3: TypeScript Types (Day 2)

**Purpose**: Generate types from database and create application types

```bash
# Generate database types from Supabase
npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/lib/types/database.ts
```

**Create type files**:
```bash
mkdir -p src/lib/types
touch src/lib/types/database.ts    # Generated above
touch src/lib/types/admin.ts
touch src/lib/types/leads.ts
touch src/lib/types/api.ts
touch src/lib/types/enums.ts
touch src/lib/types/index.ts
```

**Copy content from**: `02-TYPESCRIPT-TYPES.md`

**Test**:
```typescript
// src/test-types.ts
import { Lead, UserRole } from '@/lib/types'

const testLead: Lead = {
  id: '123',
  full_name: 'Test',
  // ... TypeScript should autocomplete all fields
}

console.log('Types working:', UserRole.ADMIN)
```

### Step 4: Constants (Day 2)

**Purpose**: Define all configuration values upfront

**Create constants files**:
```bash
mkdir -p src/lib/constants
touch src/lib/constants/admin.ts
touch src/lib/constants/leads.ts
touch src/lib/constants/ui.ts
touch src/lib/constants/index.ts
```

**Copy content from**: `03-CONSTANTS-CONFIG.md`

**Test**:
```typescript
// src/test-constants.ts
import { ADMIN_ROUTES, LEAD_DEFAULTS } from '@/lib/constants'

console.log('Admin dashboard:', ADMIN_ROUTES.DASHBOARD)
console.log('Lead default status:', LEAD_DEFAULTS.STATUS)
```

### Step 5: Supabase Client Setup (Day 3)

**Purpose**: Create reusable Supabase client instances

**Create client files**:
```bash
mkdir -p src/lib/supabase
touch src/lib/supabase/client.ts    # Browser client
touch src/lib/supabase/server.ts    # Server client
touch src/lib/supabase/admin.ts     # Admin client
```

**Copy content from**: `04-API-STRUCTURE.md`

**Test**:
```typescript
// src/app/test-supabase/page.tsx
import { supabase } from '@/lib/supabase/client'

export default async function TestPage() {
  const { data, error } = await supabase.from('leads').select('count')
  
  return <div>Database connection: {error ? 'Failed' : 'Success'}</div>
}
```

### Step 6: API Client Functions (Day 3-4)

**Purpose**: Create centralized database access layer

**Create API files**:
```bash
mkdir -p src/lib/api
touch src/lib/api/leads.ts
touch src/lib/api/customers.ts
touch src/lib/api/activities.ts
touch src/lib/api/users.ts
```

**Copy content from**: `04-API-STRUCTURE.md`

**Create basic CRUD for leads**:
```typescript
// src/lib/api/leads.ts
// Copy getLeads, getLeadById, createLead, updateLead, deleteLead
// from 04-API-STRUCTURE.md
```

**Test**:
```typescript
// src/app/test-api/page.tsx
import { getLeads, createLead } from '@/lib/api/leads'

export default async function TestApiPage() {
  // Test read
  const { data: leads, error } = await getLeads()
  
  // Test create
  const { data: newLead, error: createError } = await createLead({
    full_name: 'Test Lead',
    email: 'test@example.com',
    phone: '1234567890',
    source: 'website',
    service_type: 'repair',
  })
  
  return <div>API Test: {error || createError ? 'Failed' : 'Success'}</div>
}
```

### Step 7: React Query Setup (Day 4)

**Purpose**: Set up caching and state management

**Install dependencies**:
```bash
npm install @tanstack/react-query
```

**Create provider**:
```typescript
// src/providers/react-query-provider.tsx
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            retry: 1,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
```

**Add to layout**:
```typescript
// src/app/layout.tsx
import { ReactQueryProvider } from '@/providers/react-query-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
```

**Create hooks**:
```bash
mkdir -p src/hooks
touch src/hooks/use-leads.ts
```

**Copy content from**: `04-API-STRUCTURE.md` (React Query Hooks section)

**Test**:
```typescript
// src/app/test-hooks/page.tsx
'use client'

import { useLeads } from '@/hooks/use-leads'

export default function TestHooksPage() {
  const { data, isLoading, error } = useLeads()
  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  
  return <div>Leads: {data?.data?.length || 0}</div>
}
```

### Step 8: Authentication (Day 5)

**Purpose**: Set up user authentication and protected routes

**Create auth helper**:
```typescript
// src/lib/auth/session.ts
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function getSession() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  return session
}

export async function requireAuth() {
  const session = await getSession()
  if (!session) {
    redirect('/login')
  }
  return session
}

export async function requireRole(allowedRoles: string[]) {
  const session = await requireAuth()
  
  const supabase = createClient()
  const { data: user } = await supabase
    .from('users')
    .select('role')
    .eq('id', session.user.id)
    .single()
  
  if (!user || !allowedRoles.includes(user.role)) {
    redirect('/unauthorized')
  }
  
  return user
}
```

**Create login page**:
```typescript
// src/app/login/page.tsx
'use client'

import { supabase } from '@/lib/supabase/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) {
      alert(error.message)
    } else {
      router.push('/admin/dashboard')
    }
  }
  
  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  )
}
```

**Create first admin user**:
```sql
-- Run in Supabase SQL editor
-- Create auth user
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at)
VALUES (
  gen_random_uuid(),
  'admin@rippleroofs.com',
  crypt('your-password-here', gen_salt('bf')),
  NOW()
);

-- Create profile
INSERT INTO public.users (id, email, full_name, role)
SELECT 
  id,
  email,
  'Admin User',
  'super_admin'
FROM auth.users
WHERE email = 'admin@rippleroofs.com';
```

**Test**: Navigate to `/login`, log in, should redirect to `/admin/dashboard`

### Step 9: Admin Layout (Day 5-6)

**Purpose**: Create the admin dashboard shell

**Create layout structure**:
```typescript
// src/app/(admin)/admin/layout.tsx
import { requireRole } from '@/lib/auth/session'
import { AdminSidebar } from '@/components/admin/layouts/sidebar'
import { AdminHeader } from '@/components/admin/layouts/header'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Require admin role
  await requireRole(['super_admin', 'admin', 'manager'])
  
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
```

**Create sidebar component**:
```typescript
// src/components/admin/layouts/sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ADMIN_ROUTES } from '@/lib/constants'

export function AdminSidebar() {
  const pathname = usePathname()
  
  const navItems = [
    { label: 'Dashboard', href: ADMIN_ROUTES.DASHBOARD, icon: '📊' },
    { label: 'Leads', href: ADMIN_ROUTES.LEADS, icon: '👤' },
    { label: 'Quotes', href: ADMIN_ROUTES.QUOTES, icon: '📄' },
    { label: 'Projects', href: ADMIN_ROUTES.PROJECTS, icon: '🏗️' },
    { label: 'Customers', href: ADMIN_ROUTES.CUSTOMERS, icon: '👥' },
    { label: 'Invoices', href: ADMIN_ROUTES.INVOICES, icon: '💰' },
    { label: 'Schedule', href: ADMIN_ROUTES.SCHEDULE, icon: '📅' },
    { label: 'Analytics', href: ADMIN_ROUTES.ANALYTICS, icon: '📈' },
  ]
  
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Ripple Roofs</h1>
      </div>
      <nav className="px-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-lg mb-1
              ${pathname === item.href ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}
            `}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
```

**Create dashboard page**:
```typescript
// src/app/(admin)/admin/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Leads</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
        {/* More stats cards */}
      </div>
    </div>
  )
}
```

**Test**: 
- Log in as admin
- See sidebar with navigation
- Click through different routes
- Verify protected routes redirect to login

### Step 10: Validation Schemas (Day 6)

**Purpose**: Set up form validation

**Install Zod**:
```bash
npm install zod @hookform/resolvers
```

**Create validation schemas**:
```bash
mkdir -p src/lib/validation
touch src/lib/validation/schemas.ts
```

**Copy content from**: `02-TYPESCRIPT-TYPES.md` (Form Validation Schemas section)

**Test**:
```typescript
// src/test-validation.ts
import { leadFormSchema } from '@/lib/validation/schemas'

const validLead = leadFormSchema.parse({
  full_name: 'John Doe',
  email: 'john@example.com',
  phone: '1234567890',
  source: 'website',
  service_type: 'repair',
})

console.log('Validation works:', validLead)
```

### ✅ Phase 0 Complete Checklist

Before moving to Phase 1, verify:

- [ ] Supabase project created and connected
- [ ] Core tables created (users, leads, customers, activities)
- [ ] RLS policies enabled and working
- [ ] TypeScript types generated and compiling
- [ ] Constants defined and accessible
- [ ] Supabase clients working (browser, server, admin)
- [ ] API functions created and tested
- [ ] React Query set up and working
- [ ] Authentication working (can log in)
- [ ] Admin layout visible and navigation works
- [ ] Validation schemas created
- [ ] All tests passing

**Time Check**: If Phase 0 took more than 1 week, identify bottlenecks before proceeding.

---

## Phase 1: Lead Management (Weeks 2-3)

### Why This Order?
Lead management is the foundation of the CRM. It has minimal dependencies and every other feature (quotes, projects, activities) relates back to leads.

### Step 11: Leads List Page (Day 7-8)

**Purpose**: Display all leads in a table

**Create page**:
```typescript
// src/app/(admin)/admin/leads/page.tsx
'use client'

import { useLeads } from '@/hooks/use-leads'
import { DataTable } from '@/components/admin/shared/data-table'
import { leadColumns } from '@/components/admin/leads/columns'

export default function LeadsPage() {
  const { data, isLoading } = useLeads()
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Leads</h1>
        <button>Add Lead</button>
      </div>
      
      <DataTable
        columns={leadColumns}
        data={data?.data || []}
        isLoading={isLoading}
      />
    </div>
  )
}
```

**Test**:
- Visit `/admin/leads`
- See empty state (no leads yet)
- Layout renders correctly

### Step 12: Lead Detail Page (Day 9)

```typescript
// src/app/(admin)/admin/leads/[id]/page.tsx
'use client'

import { useLead } from '@/hooks/use-leads'
import { LeadDetails } from '@/components/admin/leads/lead-details'

export default function LeadDetailPage({ params }: { params: { id: string } }) {
  const { data, isLoading } = useLead(params.id)
  
  if (isLoading) return <div>Loading...</div>
  if (!data?.data) return <div>Lead not found</div>
  
  return <LeadDetails lead={data.data} />
}
```

**Test**:
- Create test lead manually in database
- Visit `/admin/leads/[id]`
- See lead details

### Step 13: Lead Form (Day 10-11)

```typescript
// src/components/admin/leads/lead-form.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadFormSchema } from '@/lib/validation/schemas'
import { useCreateLead } from '@/hooks/use-leads'

export function LeadForm({ onSuccess }: { onSuccess?: () => void }) {
  const createLead = useCreateLead()
  
  const form = useForm({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      full_name: '',
      email: '',
      phone: '',
      source: 'website',
      service_type: 'repair',
    },
  })
  
  const onSubmit = async (data) => {
    await createLead.mutateAsync(data)
    onSuccess?.()
  }
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  )
}
```

**Test**:
- Open "Add Lead" modal
- Fill out form
- Submit
- Lead appears in list

### Step 14: Lead Filters & Search (Day 12)

**Test**:
- Filter leads by status
- Search by name/email
- Results update correctly

### Step 15: Lead Assignment (Day 13)

**Test**:
- Assign lead to user
- Reassign lead
- See assigned leads in user's view

### ✅ Phase 1 Week 2-3 Complete Checklist

- [ ] Leads list page working
- [ ] Can create new lead
- [ ] Can view lead details
- [ ] Can edit lead
- [ ] Can delete lead (soft delete)
- [ ] Can filter leads
- [ ] Can search leads
- [ ] Can assign leads
- [ ] All CRUD operations tested

---

**Continue with remaining phases following the same pattern...**

See individual phase guides:
- [Phase 1 Complete Guide](./08-PHASE-1-FOUNDATION.md)
- [Phase 2 Guide](./09-PHASE-2-QUOTES-PROJECTS.md)
- [Phase 3 Guide](./10-PHASE-3-AUTOMATION.md)
- [Phase 4 Guide](./11-PHASE-4-ADVANCED.md)

---

**Last Updated**: November 14, 2025  
**Version**: 1.0  
**Status**: Implementation sequence defined
