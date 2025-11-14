# Database Schema Documentation - Part 2

## Continuing from Part 1...

### 11. project_materials

Tracks materials used in projects.

```sql
CREATE TABLE public.project_materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  material_id UUID REFERENCES materials(id) NOT NULL,
  
  -- Usage details
  quantity_estimated DECIMAL(10,2) NOT NULL,
  quantity_used DECIMAL(10,2) DEFAULT 0,
  quantity_remaining DECIMAL(10,2),
  
  -- Pricing (captured at time of project)
  unit_cost DECIMAL(10,2) NOT NULL,
  total_cost DECIMAL(10,2) NOT NULL,
  
  -- Tracking
  ordered_date DATE,
  delivered_date DATE,
  used_date DATE,
  
  -- Status
  status TEXT NOT NULL DEFAULT 'planned', -- 'planned', 'ordered', 'delivered', 'in_use', 'used', 'returned'
  
  -- Notes
  notes TEXT,
  
  -- Metadata
  created_by UUID REFERENCES users(id) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT status_check CHECK (status IN (
    'planned', 'ordered', 'delivered', 'in_use', 'used', 'returned'
  ))
);

-- Indexes
CREATE INDEX idx_project_materials_project_id ON project_materials(project_id);
CREATE INDEX idx_project_materials_material_id ON project_materials(material_id);
CREATE INDEX idx_project_materials_status ON project_materials(status);

-- RLS Policies
ALTER TABLE project_materials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view materials for accessible projects"
  ON project_materials FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE id = project_materials.project_id
      AND (
        EXISTS (
          SELECT 1 FROM users
          WHERE id = auth.uid()
          AND role IN ('super_admin', 'admin', 'manager')
          AND deleted_at IS NULL
        )
        OR
        EXISTS (
          SELECT 1 FROM crew_assignments
          WHERE project_id = projects.id
          AND crew_member_id = auth.uid()
        )
      )
    )
  );

CREATE POLICY "Admins can manage project materials"
  ON project_materials FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin', 'manager')
      AND deleted_at IS NULL
    )
  );
```

### 12. equipment

Company equipment and tools.

```sql
CREATE TABLE public.equipment (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  equipment_number TEXT UNIQUE NOT NULL, -- Format: EQ-XXXX
  
  -- Equipment details
  category TEXT NOT NULL, -- 'ladder', 'compressor', 'nailer', 'cutter', 'safety', 'truck', 'trailer'
  name TEXT NOT NULL,
  description TEXT,
  manufacturer TEXT,
  model_number TEXT,
  serial_number TEXT,
  
  -- Purchase info
  purchase_date DATE,
  purchase_cost DECIMAL(10,2),
  current_value DECIMAL(10,2),
  
  -- Status
  status TEXT NOT NULL DEFAULT 'available', -- 'available', 'in_use', 'maintenance', 'retired'
  condition TEXT NOT NULL DEFAULT 'good', -- 'excellent', 'good', 'fair', 'poor'
  
  -- Assignment
  assigned_to UUID REFERENCES users(id),
  assigned_project_id UUID REFERENCES projects(id),
  
  -- Maintenance
  last_maintenance_date DATE,
  next_maintenance_date DATE,
  maintenance_interval_days INTEGER DEFAULT 90,
  
  -- Location
  storage_location TEXT,
  
  -- Notes
  notes TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ,
  
  -- Constraints
  CONSTRAINT category_check CHECK (category IN (
    'ladder', 'compressor', 'nailer', 'cutter', 'safety', 
    'truck', 'trailer', 'generator', 'tool', 'other'
  )),
  CONSTRAINT status_check CHECK (status IN (
    'available', 'in_use', 'maintenance', 'retired', 'lost'
  )),
  CONSTRAINT condition_check CHECK (condition IN (
    'excellent', 'good', 'fair', 'poor'
  ))
);

-- Indexes
CREATE INDEX idx_equipment_status ON equipment(status) WHERE deleted_at IS NULL;
CREATE INDEX idx_equipment_assigned_to ON equipment(assigned_to) WHERE deleted_at IS NULL;
CREATE INDEX idx_equipment_category ON equipment(category) WHERE deleted_at IS NULL;
CREATE INDEX idx_equipment_equipment_number ON equipment(equipment_number) WHERE deleted_at IS NULL;

-- RLS Policies
ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;

CREATE POLICY "All authenticated users can view available equipment"
  ON equipment FOR SELECT
  USING (deleted_at IS NULL);

CREATE POLICY "Admins can manage equipment"
  ON equipment FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin', 'manager')
      AND deleted_at IS NULL
    )
  );
```

### 13. vehicles

Company vehicles.

```sql
CREATE TABLE public.vehicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_number TEXT UNIQUE NOT NULL, -- Format: VH-XXXX
  
  -- Vehicle details
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  color TEXT,
  license_plate TEXT UNIQUE,
  vin TEXT UNIQUE,
  
  -- Status
  status TEXT NOT NULL DEFAULT 'available', -- 'available', 'in_use', 'maintenance', 'retired'
  
  -- Assignment
  assigned_to UUID REFERENCES users(id),
  
  -- Purchase info
  purchase_date DATE,
  purchase_cost DECIMAL(10,2),
  current_value DECIMAL(10,2),
  
  -- Maintenance
  mileage INTEGER,
  last_oil_change_date DATE,
  last_oil_change_mileage INTEGER,
  next_oil_change_mileage INTEGER,
  last_maintenance_date DATE,
  next_maintenance_date DATE,
  
  -- Insurance
  insurance_company TEXT,
  insurance_policy_number TEXT,
  insurance_expiration_date DATE,
  
  -- Registration
  registration_expiration_date DATE,
  inspection_expiration_date DATE,
  
  -- Notes
  notes TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ,
  
  -- Constraints
  CONSTRAINT status_check CHECK (status IN (
    'available', 'in_use', 'maintenance', 'retired'
  ))
);

-- Indexes
CREATE INDEX idx_vehicles_status ON vehicles(status) WHERE deleted_at IS NULL;
CREATE INDEX idx_vehicles_assigned_to ON vehicles(assigned_to) WHERE deleted_at IS NULL;
CREATE INDEX idx_vehicles_license_plate ON vehicles(license_plate) WHERE deleted_at IS NULL;

-- RLS Policies
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "All authenticated users can view vehicles"
  ON vehicles FOR SELECT
  USING (deleted_at IS NULL);

CREATE POLICY "Admins can manage vehicles"
  ON vehicles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin', 'manager')
      AND deleted_at IS NULL
    )
  );
```

### 14. invoices

Customer invoices for projects.

```sql
CREATE TABLE public.invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_number TEXT UNIQUE NOT NULL, -- Format: INV-YYYYMMDD-XXXX
  
  -- Related entities
  customer_id UUID REFERENCES customers(id) NOT NULL,
  project_id UUID REFERENCES projects(id),
  quote_id UUID REFERENCES quotes(id),
  
  -- Invoice details
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'draft', -- 'draft', 'sent', 'viewed', 'partial', 'paid', 'overdue', 'cancelled'
  
  -- Pricing
  subtotal DECIMAL(10,2) NOT NULL DEFAULT 0,
  tax_rate DECIMAL(5,4) NOT NULL DEFAULT 0.0825,
  tax_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  discount_amount DECIMAL(10,2) DEFAULT 0,
  total_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  amount_paid DECIMAL(10,2) DEFAULT 0,
  balance_due DECIMAL(10,2) NOT NULL DEFAULT 0,
  
  -- Dates
  invoice_date DATE NOT NULL DEFAULT CURRENT_DATE,
  due_date DATE NOT NULL,
  sent_at TIMESTAMPTZ,
  viewed_at TIMESTAMPTZ,
  paid_at TIMESTAMPTZ,
  
  -- Payment terms
  payment_terms TEXT DEFAULT 'Net 30',
  late_fee_percentage DECIMAL(5,2) DEFAULT 1.50,
  
  -- Notes
  terms_and_conditions TEXT,
  internal_notes TEXT,
  customer_notes TEXT,
  
  -- Files
  pdf_url TEXT,
  
  -- Metadata
  created_by UUID REFERENCES users(id) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ,
  
  -- Constraints
  CONSTRAINT status_check CHECK (status IN (
    'draft', 'sent', 'viewed', 'partial', 'paid', 'overdue', 'cancelled', 'refunded'
  ))
);

-- Indexes
CREATE INDEX idx_invoices_customer_id ON invoices(customer_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_invoices_project_id ON invoices(project_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_invoices_status ON invoices(status) WHERE deleted_at IS NULL;
CREATE INDEX idx_invoices_invoice_date ON invoices(invoice_date DESC) WHERE deleted_at IS NULL;
CREATE INDEX idx_invoices_due_date ON invoices(due_date) WHERE deleted_at IS NULL;
CREATE INDEX idx_invoices_invoice_number ON invoices(invoice_number) WHERE deleted_at IS NULL;

-- RLS Policies
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all invoices"
  ON invoices FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin', 'manager')
      AND deleted_at IS NULL
    )
  );

CREATE POLICY "Admins can manage invoices"
  ON invoices FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin')
      AND deleted_at IS NULL
    )
  );
```

### 15. invoice_line_items

Individual items on an invoice.

```sql
CREATE TABLE public.invoice_line_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID REFERENCES invoices(id) ON DELETE CASCADE NOT NULL,
  
  -- Item details
  category TEXT NOT NULL,
  item_name TEXT NOT NULL,
  description TEXT,
  
  -- Pricing
  quantity DECIMAL(10,2) NOT NULL DEFAULT 1,
  unit TEXT DEFAULT 'each',
  unit_price DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  
  -- Material reference
  material_id UUID REFERENCES materials(id),
  
  -- Ordering
  sort_order INTEGER NOT NULL DEFAULT 0,
  
  -- Metadata
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT category_check CHECK (category IN (
    'labor', 'materials', 'equipment', 'permit', 
    'disposal', 'warranty', 'inspection', 'other'
  ))
);

-- Indexes
CREATE INDEX idx_invoice_line_items_invoice_id ON invoice_line_items(invoice_id);
CREATE INDEX idx_invoice_line_items_material_id ON invoice_line_items(material_id);

-- RLS Policies (inherits from invoices)
ALTER TABLE invoice_line_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all invoice line items"
  ON invoice_line_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin', 'manager')
      AND deleted_at IS NULL
    )
  );

CREATE POLICY "Admins can manage invoice line items"
  ON invoice_line_items FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin')
      AND deleted_at IS NULL
    )
  );
```

### 16. payments

Tracks customer payments.

```sql
CREATE TABLE public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_number TEXT UNIQUE NOT NULL, -- Format: PAY-YYYYMMDD-XXXX
  
  -- Related entities
  invoice_id UUID REFERENCES invoices(id) NOT NULL,
  customer_id UUID REFERENCES customers(id) NOT NULL,
  
  -- Payment details
  amount DECIMAL(10,2) NOT NULL,
  payment_date DATE NOT NULL DEFAULT CURRENT_DATE,
  payment_method TEXT NOT NULL, -- 'cash', 'check', 'credit_card', 'debit_card', 'ach', 'wire', 'venmo', 'zelle'
  
  -- Payment method details
  check_number TEXT,
  transaction_id TEXT,
  last_four TEXT, -- Last 4 digits of card
  
  -- Status
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'processing', 'completed', 'failed', 'refunded'
  
  -- Fees
  processing_fee DECIMAL(10,2) DEFAULT 0,
  net_amount DECIMAL(10,2) NOT NULL,
  
  -- Notes
  notes TEXT,
  
  -- Metadata
  processed_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ,
  
  -- Constraints
  CONSTRAINT payment_method_check CHECK (payment_method IN (
    'cash', 'check', 'credit_card', 'debit_card', 
    'ach', 'wire', 'venmo', 'zelle', 'other'
  )),
  CONSTRAINT status_check CHECK (status IN (
    'pending', 'processing', 'completed', 'failed', 'refunded'
  ))
);

-- Indexes
CREATE INDEX idx_payments_invoice_id ON payments(invoice_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_payments_customer_id ON payments(customer_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_payments_payment_date ON payments(payment_date DESC) WHERE deleted_at IS NULL;
CREATE INDEX idx_payments_status ON payments(status) WHERE deleted_at IS NULL;

-- RLS Policies
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all payments"
  ON payments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin', 'manager')
      AND deleted_at IS NULL
    )
  );

CREATE POLICY "Admins can manage payments"
  ON payments FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin')
      AND deleted_at IS NULL
    )
  );
```

### 17. appointments

Customer appointments for consultations, inspections, etc.

```sql
CREATE TABLE public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Related entities
  lead_id UUID REFERENCES leads(id),
  customer_id UUID REFERENCES customers(id),
  project_id UUID REFERENCES projects(id),
  
  -- Appointment details
  title TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL, -- 'consultation', 'inspection', 'estimate', 'follow_up', 'final_walkthrough'
  status TEXT NOT NULL DEFAULT 'scheduled', -- 'scheduled', 'confirmed', 'in_progress', 'completed', 'cancelled', 'no_show'
  
  -- Scheduling
  scheduled_date DATE NOT NULL,
  scheduled_start_time TIME NOT NULL,
  scheduled_end_time TIME NOT NULL,
  actual_start_time TIME,
  actual_end_time TIME,
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  
  -- Location
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL DEFAULT 'TX',
  zip TEXT NOT NULL,
  location_notes TEXT,
  
  -- Assignment
  assigned_to UUID REFERENCES users(id) NOT NULL,
  
  -- Reminders
  reminder_sent BOOLEAN DEFAULT false,
  reminder_sent_at TIMESTAMPTZ,
  
  -- Outcome
  outcome TEXT, -- 'quote_provided', 'follow_up_needed', 'not_interested', 'scheduled_project'
  outcome_notes TEXT,
  
  -- Metadata
  created_by UUID REFERENCES users(id) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ,
  
  -- Constraints
  CONSTRAINT type_check CHECK (type IN (
    'consultation', 'inspection', 'estimate', 'follow_up', 
    'final_walkthrough', 'warranty_inspection', 'emergency'
  )),
  CONSTRAINT status_check CHECK (status IN (
    'scheduled', 'confirmed', 'in_progress', 'completed', 
    'cancelled', 'no_show', 'rescheduled'
  )),
  CONSTRAINT at_least_one_relation CHECK (
    lead_id IS NOT NULL OR 
    customer_id IS NOT NULL OR 
    project_id IS NOT NULL
  )
);

-- Indexes
CREATE INDEX idx_appointments_lead_id ON appointments(lead_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_appointments_customer_id ON appointments(customer_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_appointments_project_id ON appointments(project_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_appointments_assigned_to ON appointments(assigned_to) WHERE deleted_at IS NULL;
CREATE INDEX idx_appointments_scheduled_date ON appointments(scheduled_date) WHERE deleted_at IS NULL;
CREATE INDEX idx_appointments_status ON appointments(status) WHERE deleted_at IS NULL;

-- RLS Policies
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their appointments"
  ON appointments FOR SELECT
  USING (assigned_to = auth.uid() OR created_by = auth.uid());

CREATE POLICY "Admins can view all appointments"
  ON appointments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin', 'manager')
      AND deleted_at IS NULL
    )
  );

CREATE POLICY "Admins can manage appointments"
  ON appointments FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin', 'manager')
      AND deleted_at IS NULL
    )
  );
```

### 18. project_photos

Photos uploaded during projects.

```sql
CREATE TABLE public.project_photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  
  -- Photo details
  title TEXT,
  description TEXT,
  category TEXT NOT NULL, -- 'before', 'during', 'after', 'damage', 'repair', 'inspection'
  
  -- File info
  file_url TEXT NOT NULL,
  file_size INTEGER, -- bytes
  file_type TEXT, -- 'image/jpeg', 'image/png', etc.
  
  -- Photo metadata
  taken_at TIMESTAMPTZ,
  taken_by UUID REFERENCES users(id),
  
  -- Organization
  sort_order INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_customer_visible BOOLEAN DEFAULT false,
  
  -- Location
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  
  -- Notes
  notes TEXT,
  
  -- Metadata
  uploaded_by UUID REFERENCES users(id) NOT NULL,
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ,
  
  -- Constraints
  CONSTRAINT category_check CHECK (category IN (
    'before', 'during', 'after', 'damage', 'repair', 
    'inspection', 'materials', 'crew', 'equipment', 'other'
  ))
);

-- Indexes
CREATE INDEX idx_project_photos_project_id ON project_photos(project_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_project_photos_category ON project_photos(category) WHERE deleted_at IS NULL;
CREATE INDEX idx_project_photos_is_featured ON project_photos(is_featured) WHERE deleted_at IS NULL;

-- RLS Policies
ALTER TABLE project_photos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view photos for accessible projects"
  ON project_photos FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE id = project_photos.project_id
      AND (
        EXISTS (
          SELECT 1 FROM users
          WHERE id = auth.uid()
          AND role IN ('super_admin', 'admin', 'manager')
          AND deleted_at IS NULL
        )
        OR
        EXISTS (
          SELECT 1 FROM crew_assignments
          WHERE project_id = projects.id
          AND crew_member_id = auth.uid()
        )
      )
    )
  );

CREATE POLICY "Users can upload photos to assigned projects"
  ON project_photos FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM projects
      WHERE id = project_photos.project_id
      AND (
        EXISTS (
          SELECT 1 FROM users
          WHERE id = auth.uid()
          AND role IN ('super_admin', 'admin', 'manager')
          AND deleted_at IS NULL
        )
        OR
        EXISTS (
          SELECT 1 FROM crew_assignments
          WHERE project_id = projects.id
          AND crew_member_id = auth.uid()
        )
      )
    )
  );
```

### 19. project_notes

Notes and comments on projects.

```sql
CREATE TABLE public.project_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  
  -- Note details
  note_type TEXT NOT NULL, -- 'general', 'issue', 'solution', 'customer_request', 'internal'
  subject TEXT,
  content TEXT NOT NULL,
  
  -- Visibility
  is_internal BOOLEAN DEFAULT false, -- If true, only visible to admins/crew
  is_pinned BOOLEAN DEFAULT false,
  
  -- Attachments
  attachment_urls TEXT[], -- Array of URLs
  
  -- Metadata
  created_by UUID REFERENCES users(id) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ,
  
  -- Constraints
  CONSTRAINT note_type_check CHECK (note_type IN (
    'general', 'issue', 'solution', 'customer_request', 
    'internal', 'safety', 'quality', 'delay'
  ))
);

-- Indexes
CREATE INDEX idx_project_notes_project_id ON project_notes(project_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_project_notes_created_at ON project_notes(created_at DESC) WHERE deleted_at IS NULL;
CREATE INDEX idx_project_notes_is_pinned ON project_notes(is_pinned) WHERE deleted_at IS NULL;

-- RLS Policies
ALTER TABLE project_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view notes for accessible projects"
  ON project_notes FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE id = project_notes.project_id
      AND (
        EXISTS (
          SELECT 1 FROM users
          WHERE id = auth.uid()
          AND role IN ('super_admin', 'admin', 'manager')
          AND deleted_at IS NULL
        )
        OR
        (
          EXISTS (
            SELECT 1 FROM crew_assignments
            WHERE project_id = projects.id
            AND crew_member_id = auth.uid()
          )
          AND NOT project_notes.is_internal
        )
      )
    )
  );

CREATE POLICY "Users can create notes on accessible projects"
  ON project_notes FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM projects
      WHERE id = project_notes.project_id
      AND (
        EXISTS (
          SELECT 1 FROM users
          WHERE id = auth.uid()
          AND role IN ('super_admin', 'admin', 'manager', 'crew_lead', 'crew_member')
          AND deleted_at IS NULL
        )
        OR
        EXISTS (
          SELECT 1 FROM crew_assignments
          WHERE project_id = projects.id
          AND crew_member_id = auth.uid()
        )
      )
    )
  );
```

### 20. email_logs

Logs all emails sent from the system.

```sql
CREATE TABLE public.email_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Related entities
  lead_id UUID REFERENCES leads(id),
  customer_id UUID REFERENCES customers(id),
  project_id UUID REFERENCES projects(id),
  quote_id UUID REFERENCES quotes(id),
  invoice_id UUID REFERENCES invoices(id),
  
  -- Email details
  email_type TEXT NOT NULL, -- 'lead_confirmation', 'quote_sent', 'invoice_sent', 'payment_received', 'project_update', 'follow_up'
  recipient_email TEXT NOT NULL,
  recipient_name TEXT,
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  
  -- Status
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'sent', 'delivered', 'opened', 'clicked', 'bounced', 'failed'
  
  -- Tracking
  sent_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  opened_at TIMESTAMPTZ,
  clicked_at TIMESTAMPTZ,
  bounced_at TIMESTAMPTZ,
  
  -- Provider info
  provider TEXT DEFAULT 'resend',
  provider_message_id TEXT,
  error_message TEXT,
  
  -- Attachments
  attachment_urls TEXT[],
  
  -- Metadata
  sent_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT email_type_check CHECK (email_type IN (
    'lead_confirmation', 'quote_sent', 'invoice_sent', 
    'payment_received', 'project_update', 'follow_up', 
    'appointment_reminder', 'review_request', 'newsletter'
  )),
  CONSTRAINT status_check CHECK (status IN (
    'pending', 'sent', 'delivered', 'opened', 
    'clicked', 'bounced', 'failed'
  ))
);

-- Indexes
CREATE INDEX idx_email_logs_lead_id ON email_logs(lead_id);
CREATE INDEX idx_email_logs_customer_id ON email_logs(customer_id);
CREATE INDEX idx_email_logs_project_id ON email_logs(project_id);
CREATE INDEX idx_email_logs_status ON email_logs(status);
CREATE INDEX idx_email_logs_created_at ON email_logs(created_at DESC);
CREATE INDEX idx_email_logs_recipient_email ON email_logs(recipient_email);

-- RLS Policies
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all email logs"
  ON email_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin', 'manager')
      AND deleted_at IS NULL
    )
  );

CREATE POLICY "System can insert email logs"
  ON email_logs FOR INSERT
  WITH CHECK (true); -- Allow system to log emails
```

### 21. sms_logs

Logs all SMS messages sent from the system.

```sql
CREATE TABLE public.sms_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Related entities
  lead_id UUID REFERENCES leads(id),
  customer_id UUID REFERENCES customers(id),
  project_id UUID REFERENCES projects(id),
  appointment_id UUID REFERENCES appointments(id),
  
  -- SMS details
  sms_type TEXT NOT NULL, -- 'appointment_reminder', 'project_update', 'quote_ready', 'payment_reminder', 'review_request'
  recipient_phone TEXT NOT NULL,
  recipient_name TEXT,
  message TEXT NOT NULL,
  
  -- Status
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'sent', 'delivered', 'failed', 'undelivered'
  
  -- Tracking
  sent_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  
  -- Provider info
  provider TEXT DEFAULT 'twilio',
  provider_message_id TEXT,
  error_message TEXT,
  
  -- Cost tracking
  cost DECIMAL(6,4), -- Cost per SMS
  
  -- Metadata
  sent_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT sms_type_check CHECK (sms_type IN (
    'appointment_reminder', 'project_update', 'quote_ready', 
    'payment_reminder', 'review_request', 'follow_up', 
    'emergency_notification', 'custom'
  )),
  CONSTRAINT status_check CHECK (status IN (
    'pending', 'sent', 'delivered', 'failed', 'undelivered'
  ))
);

-- Indexes
CREATE INDEX idx_sms_logs_lead_id ON sms_logs(lead_id);
CREATE INDEX idx_sms_logs_customer_id ON sms_logs(customer_id);
CREATE INDEX idx_sms_logs_project_id ON sms_logs(project_id);
CREATE INDEX idx_sms_logs_status ON sms_logs(status);
CREATE INDEX idx_sms_logs_created_at ON sms_logs(created_at DESC);
CREATE INDEX idx_sms_logs_recipient_phone ON sms_logs(recipient_phone);

-- RLS Policies
ALTER TABLE sms_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all sms logs"
  ON sms_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role IN ('super_admin', 'admin', 'manager')
      AND deleted_at IS NULL
    )
  );

CREATE POLICY "System can insert sms logs"
  ON sms_logs FOR INSERT
  WITH CHECK (true); -- Allow system to log SMS
```

### 22. system_settings

Application-wide settings and configuration.

```sql
CREATE TABLE public.system_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key TEXT UNIQUE NOT NULL,
  setting_value JSONB NOT NULL,
  description TEXT,
  
  -- Metadata
  updated_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_system_settings_setting_key ON system_settings(setting_key);

-- RLS Policies
ALTER TABLE system_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "All authenticated users can view settings"
  ON system_settings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Super admins can manage settings"
  ON system_settings FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND role = 'super_admin'
      AND deleted_at IS NULL
    )
  );

-- Insert default settings
INSERT INTO system_settings (setting_key, setting_value, description) VALUES
  ('company_info', '{"name": "Ripple Roofs", "phone": "", "email": "info@rippleroofs.com", "address": ""}', 'Company contact information'),
  ('tax_rate', '{"rate": 0.0825, "label": "TX Sales Tax"}', 'Default tax rate'),
  ('quote_validity_days', '{"days": 30}', 'Default quote validity period'),
  ('payment_terms', '{"default": "Net 30", "options": ["Due on Receipt", "Net 15", "Net 30", "Net 60"]}', 'Available payment terms'),
  ('lead_sources', '{"sources": ["website", "google_ads", "facebook", "referral", "phone", "walk_in", "seo", "email", "other"]}', 'Available lead sources'),
  ('service_types', '{"types": ["repair", "replacement", "inspection", "maintenance", "emergency", "consultation", "warranty"]}', 'Available service types'),
  ('warranty_years', '{"default": 10, "options": [5, 10, 15, 20, 25]}', 'Warranty period options'),
  ('notification_settings', '{"email_enabled": true, "sms_enabled": false, "lead_notification_recipients": []}', 'Notification preferences');
```

## Database Functions and Triggers

### Auto-update updated_at Timestamp

```sql
-- Function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all tables with updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ... (apply to all other tables with updated_at)
```

### Auto-generate Quote Numbers

```sql
-- Function to generate quote number
CREATE OR REPLACE FUNCTION generate_quote_number()
RETURNS TRIGGER AS $$
DECLARE
  next_num INTEGER;
  date_part TEXT;
BEGIN
  IF NEW.quote_number IS NULL THEN
    date_part := TO_CHAR(NOW(), 'YYYYMMDD');
    
    SELECT COALESCE(MAX(CAST(SUBSTRING(quote_number FROM 'QT-\d{8}-(\d{4})') AS INTEGER)), 0) + 1
    INTO next_num
    FROM quotes
    WHERE quote_number LIKE 'QT-' || date_part || '-%';
    
    NEW.quote_number := 'QT-' || date_part || '-' || LPAD(next_num::TEXT, 4, '0');
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_quote_number BEFORE INSERT ON quotes
  FOR EACH ROW EXECUTE FUNCTION generate_quote_number();
```

### Auto-generate Project Numbers

```sql
-- Function to generate project number
CREATE OR REPLACE FUNCTION generate_project_number()
RETURNS TRIGGER AS $$
DECLARE
  next_num INTEGER;
  date_part TEXT;
BEGIN
  IF NEW.project_number IS NULL THEN
    date_part := TO_CHAR(NOW(), 'YYYYMMDD');
    
    SELECT COALESCE(MAX(CAST(SUBSTRING(project_number FROM 'PRJ-\d{8}-(\d{4})') AS INTEGER)), 0) + 1
    INTO next_num
    FROM projects
    WHERE project_number LIKE 'PRJ-' || date_part || '-%';
    
    NEW.project_number := 'PRJ-' || date_part || '-' || LPAD(next_num::TEXT, 4, '0');
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_project_number BEFORE INSERT ON projects
  FOR EACH ROW EXECUTE FUNCTION generate_project_number();
```

### Calculate Quote Totals

```sql
-- Function to calculate quote totals
CREATE OR REPLACE FUNCTION calculate_quote_totals()
RETURNS TRIGGER AS $$
DECLARE
  quote_subtotal DECIMAL(10,2);
BEGIN
  -- Calculate subtotal from line items
  SELECT COALESCE(SUM(total_price), 0)
  INTO quote_subtotal
  FROM quote_line_items
  WHERE quote_id = NEW.quote_id;
  
  -- Update quote
  UPDATE quotes
  SET 
    subtotal = quote_subtotal,
    tax_amount = quote_subtotal * tax_rate,
    total_amount = quote_subtotal + (quote_subtotal * tax_rate) - COALESCE(discount_amount, 0),
    updated_at = NOW()
  WHERE id = NEW.quote_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_quote_totals_on_line_item_change
AFTER INSERT OR UPDATE OR DELETE ON quote_line_items
FOR EACH ROW EXECUTE FUNCTION calculate_quote_totals();
```

## Database Views

### Active Projects View

```sql
CREATE VIEW active_projects_view AS
SELECT 
  p.*,
  c.full_name as customer_name,
  c.email as customer_email,
  c.phone as customer_phone,
  pm.full_name as project_manager_name,
  (SELECT COUNT(*) FROM project_tasks WHERE project_id = p.id AND status != 'completed') as pending_tasks,
  (SELECT COUNT(*) FROM project_tasks WHERE project_id = p.id) as total_tasks
FROM projects p
LEFT JOIN customers c ON p.customer_id = c.id
LEFT JOIN users pm ON p.project_manager_id = pm.id
WHERE p.deleted_at IS NULL
AND p.status IN ('scheduled', 'in_progress');
```

### Lead Pipeline View

```sql
CREATE VIEW lead_pipeline_view AS
SELECT 
  l.*,
  u.full_name as assigned_to_name,
  (SELECT COUNT(*) FROM activities WHERE lead_id = l.id) as activity_count,
  (SELECT MAX(created_at) FROM activities WHERE lead_id = l.id) as last_activity_date,
  (SELECT COUNT(*) FROM quotes WHERE lead_id = l.id) as quote_count
FROM leads l
LEFT JOIN users u ON l.assigned_to = u.id
WHERE l.deleted_at IS NULL
AND l.status NOT IN ('won', 'lost', 'dead');
```

### Revenue Dashboard View

```sql
CREATE VIEW revenue_dashboard_view AS
SELECT 
  DATE_TRUNC('month', p.actual_start_date) as month,
  COUNT(*) as project_count,
  SUM(p.contract_amount) as total_contract_value,
  SUM(p.total_paid) as total_revenue,
  SUM(p.balance_due) as total_outstanding,
  AVG(p.contract_amount) as avg_project_value
FROM projects p
WHERE p.deleted_at IS NULL
AND p.status IN ('completed', 'in_progress')
GROUP BY DATE_TRUNC('month', p.actual_start_date)
ORDER BY month DESC;
```

## Migration Strategy

### Initial Setup

```sql
-- 1. Create all tables in order (respecting foreign keys)
-- 2. Create all indexes
-- 3. Enable RLS on all tables
-- 4. Create all RLS policies
-- 5. Create all functions and triggers
-- 6. Create all views
-- 7. Insert default system settings
-- 8. Create initial admin user
```

### Seeding Development Data

```sql
-- Create sample users, leads, customers, projects for testing
-- See seed.sql file in supabase/migrations/
```

---

**Last Updated**: November 14, 2025  
**Version**: 1.0  
**Status**: Complete schema definition
