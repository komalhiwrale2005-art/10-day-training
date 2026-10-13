# Day 8: Database + Laravel

## Project Overview

This project is a Facility Management REST API developed using Laravel and MySQL. It manages facilities, inspections, complaints, departments, and employees through RESTful API endpoints.

The project also includes SQL schema definitions and practice queries to understand database operations, joins, grouping, subqueries, indexes, and transactions.

## Technologies Used

- PHP
- Laravel
- MySQL
- REST API
- JSON
- SQL
- Eloquent ORM

## Project Structure

```text
Day_08/
├── sql/
│   ├── schema.sql
│   └── practice-queries.sql
├── database/
│   └── database-notes.md
├── laravel-api/
│   ├── app/
│   │   ├── Http/Controllers/
│   │   │   ├── Api/
│   │   │   ├── DepartmentController.php
│   │   │   └── EmployeeController.php
│   │   └── Models/
│   │       ├── Department.php
│   │       └── Employee.php
│   ├── database/migrations/
│   ├── routes/
│   │   └── api.php
│   └── ...
└── README.md
```

## Main Features

- Create, view, update, and delete facilities.
- Manage facility inspections.
- Record and update complaints.
- Create and manage departments.
- Create and manage employees.
- Connect employees with their departments.
- Validate incoming API data.
- Use Laravel migrations to create database tables.
- Return API responses in JSON format.
- Practice SQL CRUD operations, joins, grouping, subqueries, indexes, and transactions.

## Database

**Database name:** `day08_training`

The project includes the following tables:

1. `facilities`
2. `inspections`
3. `complaints`
4. `departments`
5. `employees`
6. `users`

The `departments` table stores department names and locations. The `employees` table stores employee names, email addresses, salaries, and department IDs.

### Database Relationships

- One department can have multiple employees.
- Each employee can belong to one department.
- An employee's `department_id` can be null.
- If a department is deleted, its employees remain, and their `department_id` is set to null.
- Facilities are related to their inspections and complaints through foreign keys.

## API Endpoints

All endpoints use the `/api` prefix. The Laravel development server runs at `http://127.0.0.1:8000` by default.

### Facilities

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/facilities` | List facilities |
| POST | `/api/facilities` | Create a facility |
| GET | `/api/facilities/{id}` | View one facility |
| PUT/PATCH | `/api/facilities/{id}` | Update a facility |
| DELETE | `/api/facilities/{id}` | Delete a facility |

### Inspections

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/inspections` | List inspections |
| POST | `/api/inspections` | Create an inspection |
| GET | `/api/inspections/{id}` | View one inspection |
| PUT/PATCH | `/api/inspections/{id}` | Update an inspection |
| DELETE | `/api/inspections/{id}` | Delete an inspection |

### Complaints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/complaints` | List complaints |
| POST | `/api/complaints` | Create a complaint |
| GET | `/api/complaints/{id}` | View one complaint |
| PUT/PATCH | `/api/complaints/{id}` | Update a complaint |
| DELETE | `/api/complaints/{id}` | Delete a complaint |

### Departments

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/departments` | List departments with employees |
| POST | `/api/departments` | Create a department |
| GET | `/api/departments/{id}` | View a department with employees |
| PUT/PATCH | `/api/departments/{id}` | Update a department |
| DELETE | `/api/departments/{id}` | Delete a department |

### Employees

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/employees` | List employees with department details |
| POST | `/api/employees` | Create an employee |
| GET | `/api/employees/{id}` | View one employee |
| PUT/PATCH | `/api/employees/{id}` | Update an employee |
| DELETE | `/api/employees/{id}` | Delete an employee |

## SQL Practice

The `sql/` folder contains SQL schema definitions and practice queries covering:

- SELECT, WHERE, and ORDER BY
- INSERT, UPDATE, and DELETE
- GROUP BY and HAVING
- INNER JOIN and LEFT JOIN
- Subqueries
- Indexes
- Transactions

Run the SQL queries against a database with the required tables and sample data.

## How to Run

1. Open a terminal inside the `laravel-api` folder.
2. Configure the database connection in the `.env` file.
3. Create the MySQL database named `day08_training` if it does not exist.
4. Run the Laravel migrations:

   ```bash
   php artisan migrate
   ```

5. Start the Laravel development server:

   ```bash
   php artisan serve
   ```

6. Open the API endpoints in a browser or test them using an API client.

> If PHP is not available through the `php` command, use the full path to your PHP executable.

## Testing Completed

- Verified that all 25 API routes are registered.
- Tested the Departments API and retrieved department details with employees.
- Tested the Employees API and retrieved employee details with department information.
- Checked the Facilities, Inspections, and Complaints API endpoints.
- Created department and employee records.
- Verified the Department–Employee relationship.
- Created database tables using Laravel migrations.

## Learning Outcomes

- Building RESTful APIs using Laravel.
- Connecting Laravel to MySQL.
- Creating and managing database tables with migrations.
- Using Eloquent models and relationships.
- Performing CRUD operations.
- Validating API requests.
- Returning JSON responses.
- Writing SQL queries using joins, grouping, subqueries, indexes, and transactions.
