# API Integration – Day 9

## Overview
This folder documents the REST API integration used in the Facility Inspection Dashboard built with Angular and TypeScript.

## Technologies Used
- Angular
- TypeScript
- Laravel REST API
- HTTP Client
- RxJS Observables
- JSON

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/facilities` | Fetch all facilities |
| GET | `/api/inspections` | Fetch inspection history |
| POST | `/api/inspections` | Save a new inspection |

**Base URL:** `http://127.0.0.1:8000`

## Features
- Fetch facility data from the REST API.
- Display inspection history.
- Submit new inspections.
- Use TypeScript models for facility data.
- Handle API errors and display messages.
- Use Angular services and HttpClient for API requests.
- Use RxJS Observables to handle asynchronous responses.

## How to Run
1. Start the Laravel backend from the Day 8 `laravel-api` folder.
2. Start the Angular application from the `angular-app` folder using `npm start` or the configured Angular serve command.
3. Open `http://localhost:4200` in the browser.

## Notes
The API base URL is configured for local development. The Laravel backend must be running for API requests to work.
