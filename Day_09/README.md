# Day 9 – Angular, TypeScript and API Integration

## Project Overview
The Facility Inspection Dashboard is an Angular application developed using TypeScript. It connects to a REST API to display facility information and inspection records, and allows users to submit new inspections.

## Technologies Used
- Angular
- TypeScript
- HTML and CSS
- Laravel REST API
- Angular HttpClient
- RxJS Observables
- JSON

## Features
- Dashboard metrics for total facilities, pending inspections, completed inspections, and average cleanliness.
- Facility list with search, filtering, and sorting.
- Inspection form with facility selection, date, inspector name, cleanliness score, and remarks.
- Inspection history retrieved from the API.
- Create and save inspections through HTTP POST requests.
- TypeScript interfaces for API data.
- Angular services and dependency injection.
- Loading states and error messages.

## Project Structure
```text
Day_09/
├── angular-app/
├── api-integration/
│   ├── README.md
│   └── api-tests.http
└── README.md
```

## API Integration
The Angular application communicates with the Laravel REST API.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/facilities` | Retrieve facilities |
| GET | `/api/inspections` | Retrieve inspection history |
| POST | `/api/inspections` | Save a new inspection |

**Local API base URL:** `http://127.0.0.1:8000`

## How to Run the Project

### 1. Start the Laravel Backend
Open a terminal in the Day 8 Laravel project folder:

```cmd
cd "C:\Desktop\10 Day's Training\Day_08\laravel-api"
php artisan serve
```

### 2. Start the Angular Application
Open another terminal:

```cmd
cd "C:\Desktop\10 Day's Training\Day_09\angular-app"
npm start
```

If `npm start` is not configured, run:

```cmd
ng serve
```

### 3. Open the Application
Visit `http://localhost:4200` in your browser.

## API Testing Results

All three API requests were tested successfully using the
VS Code REST Client extension.

- GET `/api/facilities` — Successful
- GET `/api/inspections` — Successful
- POST `/api/inspections` — Successful (HTTP 201 Created)

The newly created inspection was also verified in the
Angular dashboard's Recent History section.

## Learning Outcomes
- Understanding Angular components, templates, and data binding.
- Using TypeScript interfaces and models.
- Working with Angular services and dependency injection.
- Making REST API requests with HttpClient.
- Handling asynchronous data with RxJS Observables.
- Implementing API error handling and form validation.

## Notes
The Laravel backend must be running for API requests to work. The configured API URL is intended for local development.
