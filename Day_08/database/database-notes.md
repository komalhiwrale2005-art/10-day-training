# Day 8 - Database Documentation

## Project: Facility Management API

This project uses MySQL as the database and Laravel as the backend framework.

## Database Name
`day08_training`

## Tables

### 1. Facilities
Stores information about facilities.

- `id` – Unique facility ID
- `name` – Facility name
- `location` – Facility location
- `facility_type` – Type of facility
- `description` – Facility details
- `is_active` – Active status
- `created_at` and `updated_at` – Timestamps

### 2. Inspections
Stores inspection records for facilities.

- `id` – Unique inspection ID
- `facility_id` – Related facility ID
- `inspection_date` – Date of inspection
- `inspector_name` – Name of inspector
- `cleanliness_score` – Cleanliness score
- `remarks` – Inspection remarks

### 3. Complaints
Stores complaints reported for facilities.

- `id` – Unique complaint ID
- `facility_id` – Related facility ID
- `title` – Complaint title
- `description` – Complaint details
- `status` – Complaint status
- `reported_by` – Name of the person reporting the complaint

## Relationships

- One facility can have multiple inspections.
- One facility can have multiple complaints.
- Inspections and complaints belong to a facility.
- Deleting a facility also deletes its related inspections and complaints because of the cascade delete rule.

## Technologies Used

- MySQL
- Laravel
- PHP
- REST API
