# Supabase Setup Documentation

This document outlines the database functions and Row Level Security (RLS) policies for the AAR Monitoring system.

## Database Functions

### 1. `get_reports_by_status()`

Retrieves AAR reports filtered by status, joined with user information.

**Parameters:**

- `p_status` (varchar): Status to filter by

**Returns:** Table with report details including user info

```sql
DROP FUNCTION IF EXISTS get_reports_by_status(varchar);

CREATE OR REPLACE FUNCTION get_reports_by_status(p_status varchar)
RETURNS TABLE(
    id bigint,
    rank_fullname varchar,
    subject TEXT,
    address TEXT,
    date timestamp,
    screenshots TEXT,
    status varchar,
    "for" text,
    description text,
    "reference" text
) AS $$
BEGIN
    RETURN QUERY
    SELECT u.id, u.rank_fullname, a.subject, a.address,
           a.date, a.screenshots, a.status, a."for", a.description,
           a."reference"
    FROM aar_report a
    JOIN users u ON a.user_id = u.id
    WHERE a.status = p_status;
END;
$$ LANGUAGE plpgsql;
```

---

### 2. `get_no_aar()`

Retrieves users who haven't submitted an AAR report for a specific status and date.

**Parameters:**

- `p_status` (varchar): Report status to check
- `p_date` (date): Date to check for missing reports

**Returns:** Users with no AAR report on that date

```sql
DROP FUNCTION IF EXISTS get_no_aar(varchar, date);

CREATE OR REPLACE FUNCTION get_no_aar(p_status varchar, p_date date)
RETURNS TABLE(
    id bigint,
    rank_fullname varchar,
    report_date date
) AS $$
BEGIN
    RETURN QUERY
    SELECT u.id,
           u.rank_fullname,
           p_date AS report_date
    FROM users u
    WHERE NOT EXISTS (
        SELECT 1
        FROM aar_report a
        WHERE a.user_id = u.id
          AND a.status = p_status
          AND DATE(a.date) = p_date
    );
END;
$$ LANGUAGE plpgsql;
```

---

### 3. `get_user_reports()`

Retrieves aggregated report data for a specific user.

**Parameters:**

- `p_user_id` (bigint): User ID to fetch reports for

**Returns:** Aggregated user reports with documents

```sql
DROP FUNCTION IF EXISTS get_user_reports(bigint);

CREATE OR REPLACE FUNCTION get_user_reports(p_user_id bigint)
RETURNS TABLE(
    id bigint,
    rank_fullname varchar,
    subject text,
    dates text,
    addresses text,
    screenshots text,
    files text,
    totalreport int
) AS $$
BEGIN
    RETURN QUERY
    SELECT u.id,
           u.rank_fullname,
           STRING_AGG(a.subject, '; ') AS subject,
           STRING_AGG(a.date::text, '; ') AS dates,
           STRING_AGG(a.address, '; ') AS addresses,
           STRING_AGG(a.screenshots, '; ') AS screenshots,
           STRING_AGG(d.files, '; ') as files,
           COUNT(*)::int AS totalreport
    FROM users u
    JOIN aar_report a ON u.id = a.user_id
    JOIN documents d ON d.user_id = u.id
    WHERE u.id = p_user_id
    GROUP BY u.id, u.rank_fullname;
END;
$$ LANGUAGE plpgsql;
```

---

### 4. `update_report_fields()`

Updates specific fields in an AAR report for a user.

**Parameters:**

- `p_user_id` (bigint): User ID (for restriction)
- `p_new_subject` (text, optional): New subject
- `p_new_address` (text, optional): New address
- `p_new_for` (text, optional): New "for" field
- `p_new_description` (text, optional): New description
- `p_new_reference` (text, optional): New reference

**Returns:** Updated report fields

```sql
CREATE OR REPLACE FUNCTION update_report_fields(
    p_user_id bigint,
    p_new_subject text DEFAULT NULL,
    p_new_address text DEFAULT NULL,
    p_new_for text DEFAULT NULL,
    p_new_description text DEFAULT NULL,
    p_new_reference text DEFAULT NULL
)
RETURNS TABLE(
    id bigint,
    subject TEXT,
    address TEXT,
    "for" text,
    description text,
    "reference" text
) AS $$
BEGIN
    RETURN QUERY
    UPDATE aar_report a
    SET subject     = COALESCE(p_new_subject, a.subject),
        address     = COALESCE(p_new_address, a.address),
        "for"       = COALESCE(p_new_for, a."for"),
        description = COALESCE(p_new_description, a.description),
        "reference" = COALESCE(p_new_reference, a."reference")
    FROM users u
    WHERE a.user_id = u.id
      AND a.user_id = p_user_id
    RETURNING u.id,
              a.subject, a.address, a."for",
              a.description, a."reference";
END;
$$ LANGUAGE plpgsql;
```

---

## Row Level Security (RLS) Policies

### Enable RLS on Tables

```sql
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE aar_report ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
```

---

### Users Table Policies

**SELECT Policy - Public Read**

```sql
CREATE POLICY "Users are viewable by everyone" ON users FOR SELECT USING (true);
```

**INSERT Policy - Allow New Users**

```sql
CREATE POLICY "Users can insert new officers" ON users FOR INSERT
  WITH CHECK (true);
```

**DELETE Policy - Allow User Deletion**

```sql
CREATE POLICY "Users can delete officers" ON users FOR DELETE USING (true);
```

---

### AAR Report Table Policies

**SELECT Policy - Public Read**

```sql
CREATE POLICY "aar_report are viewable by everyone" ON aar_report FOR SELECT USING (true);
```

**INSERT Policy - Allow Report Creation**

```sql
CREATE POLICY "Authenticated users can insert aar_report" ON aar_report FOR INSERT
  WITH CHECK (true);
```

**UPDATE Policy - Allow Report Updates**

```sql
CREATE POLICY "Authenticated users can update aar_report" ON aar_report FOR UPDATE
  WITH CHECK (true);
```

**DELETE Policy - Allow Report Deletion**

```sql
CREATE POLICY "Authenticated users can delete aar_report" ON aar_report FOR DELETE
USING (true);
```

---

### Documents Table Policies

**SELECT Policy - Public Read**

```sql
CREATE POLICY "documents are viewable by everyone" ON documents FOR SELECT USING (true);
```

**INSERT Policy - Allow Document Upload**

```sql
CREATE POLICY "Authenticated users can insert documents" ON documents FOR INSERT
  WITH CHECK (true);
```

**DELETE Policy - Allow Document Deletion**

```sql
CREATE POLICY "documents can delete officers" ON documents FOR DELETE
USING (true);
```

---

## Security Considerations

⚠️ **Note:** The current RLS policies are permissive (`true` conditions). Consider implementing more restrictive policies:

- **Restrict user deletion** - Only admins should delete users
- **Restrict report inserts** - Only authenticated users should insert
- **Add user isolation** - Users should only access their own data by default
- **Implement role-based access** - Use `auth.jwt()` to check user roles

---

## Deployment

Run all SQL scripts in order:

1. Create functions
2. Enable RLS on tables
3. Create RLS policies

Use Supabase CLI or dashboard to apply these migrations.
