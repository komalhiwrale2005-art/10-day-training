# Day 8: Facility Management REST API

## Project Overview
This project is a Facility Management REST API developed using Laravel and MySQL. It manages facilities, their inspection records, and complaints through RESTful API endpoints.

## Technologies Used
- PHP
- Laravel
- MySQL
- REST API
- JSON

## Project Structure
```text
Day_08/
├── sql/
│   └── schema.sql
├── database/
│   └── database-notes.md
├── laravel-api/
│   ├── app/
│   ├── database/
│   ├── routes/
│   └── ...
└── README.md
```

## Main Features
- Create, view, update, and delete facilities.
- Manage facility inspections.
- Record and update complaints.
- Validate incoming API data.
- Maintain relationships between facilities, inspections, and complaints.
- Return API responses in JSON format.

## Database
Database name: `day08_training`

Tables:
1. `facilities`
2. `inspections`
3. `complaints`

One facility can have multiple inspections and complaints. Related records are deleted when their facility is deleted.

## API Endpoints

### Facilities
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/facilities` | List facilities |
| POST | `/api/facilities` | Create facility |
| GET | `/api/facilities/{id}` | View one facility |
| PUT/PATCH | `/api/facilities/{id}` | Update facility |
| DELETE | `/api/facilities/{id}` | Delete facility |

### Inspections
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/inspections` | List inspections |
| POST | `/api/inspections` | Create inspection |
| GET | `/api/inspections/{id}` | View one inspection |
| PUT/PATCH | `/api/inspections/{id}` | Update inspection |
| DELETE | `/api/inspections/{id}` | Delete inspection |

### Complaints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/complaints` | List complaints |
| POST | `/api/complaints` | Create complaint |
| GET | `/api/complaints/{id}` | View one complaint |
| PUT/PATCH | `/api/complaints/{id}` | Update complaint |
| DELETE | `/api/complaints/{id}` | Delete complaint |

## How to Run
1. Open a terminal inside the `laravel-api` folder.
2. Configure database credentials in `.env`.
3. Run migrations:

   ```bash
   php artisan migrate
   ```

4. Start the Laravel development server:

   ```bash
   php artisan serve
   ```

5. Test the endpoints using a browser or an API client.

## Testing Completed
- Tested the Facilities API.
- Created and retrieved an inspection.
- Updated an inspection and tested deletion.
- Created and retrieved a complaint.
- Updated a complaint status and tested deletion.

## Learning Outcomes
- Building RESTful APIs using Laravel.
- Working with MySQL and migrations.
- Using Eloquent models and relationships.
- Performing CRUD operations.
- Validating requests and returning JSON responses.
