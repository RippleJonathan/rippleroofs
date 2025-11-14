# Ripple Roofs Admin System - Project Overview

## Vision

Build a comprehensive admin dashboard and CRM system that manages the entire customer lifecycle from lead capture through project completion, while maintaining the existing public-facing website functionality.

## Core Principles

1. **Modular Architecture**: Each feature is a self-contained module that can be added without breaking existing features
2. **Database-First Design**: Well-structured database schema that supports all future features
3. **Role-Based Access**: Clear separation between admin, crew, and customer capabilities
4. **API-First Approach**: All admin features interact with the database through a consistent API layer
5. **No Breaking Changes**: New features extend functionality, never modify core structure

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PUBLIC WEBSITE                            │
│  (Homepage, Services, Blog, Contact Forms, Estimates)        │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    SUPABASE BACKEND                          │
│  ┌──────────────┬──────────────┬──────────────────────────┐ │
│  │  Database    │  Auth        │  Storage                 │ │
│  │  (Postgres)  │  (RLS)       │  (Files/Images)          │ │
│  └──────────────┴──────────────┴──────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            │
            ┌───────────────┼───────────────┐
            ▼               ▼               ▼
    ┌──────────────┐ ┌─────────────┐ ┌────────────────┐
    │   ADMIN      │ │    CREW     │ │   CUSTOMER     │
    │  DASHBOARD   │ │   MOBILE    │ │    PORTAL      │
    │ (Full Access)│ │ (Job View)  │ │ (Project View) │
    └──────────────┘ └─────────────┘ └────────────────┘
```

## Technology Stack

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth with Row Level Security (RLS)
- **Storage**: Supabase Storage
- **Real-time**: Supabase Realtime subscriptions
- **Edge Functions**: Supabase Edge Functions (for complex operations)

### Frontend
- **Framework**: Next.js 14 (already in use)
- **UI Components**: shadcn/ui (Tailwind CSS based)
- **State Management**: React Query (for server state)
- **Forms**: React Hook Form + Zod validation
- **Tables**: TanStack Table
- **Charts**: Recharts
- **Calendar**: FullCalendar or shadcn/ui calendar

### Integrations
- **Email**: Resend (already configured)
- **SMS**: Twilio
- **PDF Generation**: react-pdf
- **Maps**: Google Maps API (already integrated)
- **Payment**: Stripe (future)

## Development Phases

### Phase 0: Foundation (CURRENT - Week 1-2)
- Database schema design
- TypeScript types and interfaces
- Constants and enums
- Utility functions
- API client structure
- Authentication setup

### Phase 1: Core Admin (Week 3-6)
- Admin authentication
- Admin layout and navigation
- Dashboard overview
- User management

### Phase 2: CRM Module (Week 7-10)
- Lead management
- Lead pipeline
- Activity tracking
- Follow-up system

### Phase 3: Quote Module (Week 11-14)
- Quote generation
- Pricing calculator
- PDF generation
- Quote approval workflow

### Phase 4: Project Module (Week 15-18)
- Project management
- Crew assignment
- Progress tracking
- Document management

### Phase 5: Scheduling Module (Week 19-22)
- Calendar system
- Crew scheduling
- Equipment tracking
- Appointment booking

### Phase 6: Automation Module (Week 23-26)
- Email automation
- SMS notifications
- Review requests
- Follow-up sequences

### Phase 7: Analytics Module (Week 27-30)
- Reporting dashboard
- Lead source tracking
- Revenue analytics
- Performance metrics

### Phase 8: Advanced Features (Week 31+)
- Inventory management
- Subcontractor portal
- Mobile crew app
- Customer portal

## File Structure

```
src/
├── app/
│   ├── (public)/              # Public website routes
│   │   ├── page.tsx           # Homepage
│   │   ├── services/
│   │   ├── blog/
│   │   └── ...
│   └── (admin)/               # Admin dashboard routes
│       ├── admin/
│       │   ├── layout.tsx     # Admin layout wrapper
│       │   ├── dashboard/     # Overview dashboard
│       │   ├── leads/         # CRM module
│       │   ├── quotes/        # Quote module
│       │   ├── projects/      # Project module
│       │   ├── schedule/      # Scheduling module
│       │   ├── analytics/     # Analytics module
│       │   └── settings/      # System settings
│       └── crew/              # Crew mobile views
│           └── ...
├── components/
│   ├── admin/                 # Admin-specific components
│   │   ├── layouts/
│   │   ├── leads/
│   │   ├── quotes/
│   │   ├── projects/
│   │   └── shared/
│   └── (existing public components)
├── lib/
│   ├── supabase/              # Supabase client and utilities
│   │   ├── client.ts          # Browser client
│   │   ├── server.ts          # Server client
│   │   ├── admin.ts           # Admin service account
│   │   └── types.ts           # Database types
│   ├── api/                   # API client functions
│   │   ├── leads.ts
│   │   ├── quotes.ts
│   │   ├── projects.ts
│   │   └── ...
│   ├── types/                 # TypeScript types
│   │   ├── admin.ts
│   │   ├── database.ts
│   │   └── ...
│   ├── constants/             # Constants and enums
│   │   ├── admin.ts
│   │   ├── statuses.ts
│   │   └── ...
│   └── utils/                 # Utility functions
│       ├── calculations.ts
│       ├── formatting.ts
│       └── ...
├── hooks/                     # Custom React hooks
│   ├── use-leads.ts
│   ├── use-projects.ts
│   └── ...
└── supabase/                  # Supabase configuration
    ├── migrations/            # Database migrations
    └── seed.sql               # Initial data
```

## Key Design Decisions

### 1. Separate Route Groups
- Public routes: `app/(public)/`
- Admin routes: `app/(admin)/admin/`
- Crew routes: `app/(admin)/crew/`
- Customer routes: `app/(admin)/portal/`

This prevents route conflicts and allows different layouts.

### 2. Database-First Approach
- Define complete schema upfront
- Use migrations for all changes
- Generate TypeScript types from schema
- Never modify tables directly

### 3. Modular Feature Structure
Each feature module includes:
- Database tables (migration)
- TypeScript types
- API functions
- React components
- Routes/pages

### 4. Consistent Naming Conventions
- **Database**: snake_case (PostgreSQL standard)
- **TypeScript**: PascalCase (types/interfaces), camelCase (variables/functions)
- **Files**: kebab-case
- **Components**: PascalCase

### 5. Error Handling Strategy
- All database operations return `{ data, error }`
- UI displays user-friendly error messages
- Log detailed errors for debugging
- Never expose sensitive information

## Security Model

### Row Level Security (RLS)
Every table has RLS policies:
- **SELECT**: Who can read records
- **INSERT**: Who can create records
- **UPDATE**: Who can modify records
- **DELETE**: Who can remove records

### User Roles
```sql
-- roles enum
'super_admin'    -- Full system access
'admin'          -- Standard admin access
'manager'        -- Limited admin access
'crew_lead'      -- Crew management
'crew_member'    -- Job execution only
'customer'       -- Customer portal access
```

### Authentication Flow
1. User signs in (email/password or Google)
2. Supabase validates credentials
3. JWT token issued with user metadata
4. Frontend reads user role from metadata
5. RLS policies enforce database access
6. UI conditionally shows features based on role

## Data Flow Pattern

### Standard CRUD Operation Flow
```
1. User Action (UI)
   ↓
2. Form Validation (React Hook Form + Zod)
   ↓
3. API Function Call (lib/api/*)
   ↓
4. Supabase Client Query
   ↓
5. RLS Policy Check (Database)
   ↓
6. Database Operation
   ↓
7. Return {data, error}
   ↓
8. Update UI State (React Query)
   ↓
9. Show Success/Error Message
```

### Real-time Update Flow
```
1. Database Change (any client)
   ↓
2. Supabase Realtime Broadcast
   ↓
3. React Query Invalidate Cache
   ↓
4. UI Re-renders with New Data
```

## Performance Considerations

### Database Indexing
- Index all foreign keys
- Index commonly queried fields (status, created_at)
- Composite indexes for complex queries

### Query Optimization
- Use select() to fetch only needed columns
- Implement pagination (limit/offset)
- Use database views for complex aggregations
- Cache frequently accessed data

### Frontend Optimization
- React Query for server state caching
- Lazy load heavy components
- Virtualize long lists (TanStack Virtual)
- Optimize images (Next.js Image)

## Testing Strategy

### Database
- Migration tests (rollback/forward)
- RLS policy tests
- Data integrity constraints

### API Layer
- Unit tests for all API functions
- Mock Supabase client
- Test error scenarios

### UI Components
- Component unit tests (Vitest)
- Integration tests (Playwright)
- Accessibility tests

### End-to-End
- Critical user flows
- Multi-role scenarios
- Data consistency checks

## Deployment Strategy

### Environment Setup
```
Development  → Supabase Dev Project
Staging      → Supabase Staging Project
Production   → Supabase Production Project
```

### Database Migrations
1. Create migration locally
2. Test in dev environment
3. Apply to staging
4. Validate data integrity
5. Apply to production
6. Monitor for issues

### Feature Rollout
1. Develop feature in branch
2. Test thoroughly
3. Merge to main
4. Deploy to staging
5. QA testing
6. Deploy to production
7. Monitor analytics

## Documentation Standards

Each module MUST include:
1. **README.md**: Overview and quick start
2. **ARCHITECTURE.md**: Technical details
3. **API.md**: API function documentation
4. **TYPES.md**: TypeScript interface documentation
5. **EXAMPLES.md**: Usage examples

## Success Metrics

### Technical Metrics
- Page load time < 2 seconds
- API response time < 500ms
- Database query time < 100ms
- 99.9% uptime

### Business Metrics
- Lead response time (target: < 2 hours)
- Quote generation time (target: < 15 minutes)
- Project completion time
- Customer satisfaction score

## Support and Maintenance

### Regular Maintenance
- Weekly: Review error logs
- Monthly: Database optimization
- Quarterly: Dependency updates
- Annually: Security audit

### Backup Strategy
- Daily automated backups (Supabase)
- Point-in-time recovery (7 days)
- Weekly manual backup downloads
- Disaster recovery plan

## Future Considerations

### Scalability
- Design for 1000+ leads/month
- Support 100+ concurrent projects
- Handle 50+ active users

### Integrations (Phase 9+)
- QuickBooks Online
- Insurance company APIs
- Material supplier APIs
- Payment processing (Stripe)
- SMS marketing platforms

### Mobile Apps (Phase 10+)
- Native iOS app (crew)
- Native Android app (crew)
- Progressive Web App (customers)

## Getting Started

See individual module documentation:
1. [Database Schema](./01-DATABASE-SCHEMA.md)
2. [TypeScript Types](./02-TYPESCRIPT-TYPES.md)
3. [Constants & Enums](./03-CONSTANTS-ENUMS.md)
4. [API Layer](./04-API-LAYER.md)
5. [Authentication](./05-AUTHENTICATION.md)

---

**Last Updated**: November 14, 2025  
**Version**: 1.0  
**Status**: Planning Phase
