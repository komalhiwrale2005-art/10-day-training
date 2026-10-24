# DAY 7 — Next.js + Node.js

## 1. Objective

The objective of Day 7 is to understand modern React application development using Next.js and backend API development using Node.js and Express.js.

The practical assignment focuses on converting the existing Employee Dashboard into a Next.js application and building a REST API to manage employee records.

## 2. Technologies Used

- Next.js
- React
- TypeScript
- Node.js
- Express.js
- REST API
- HTML and CSS
- Git and GitHub

## 3. Next.js Concepts Covered

- App Router
- Pages and layouts
- Dynamic routes
- Server and Client Components
- Data fetching
- Loading and error states
- API routes
- Environment variables

## 4. Node.js and Express Concepts Covered

- Node.js and npm
- Express.js
- Routing
- Controllers
- Middleware
- REST APIs
- Request and response handling
- Input validation
- Authentication basics using API keys
- Error handling

## 5. Practical Assignment

### Employee Management Dashboard

The existing Employee Dashboard was converted into a Next.js application connected to a Node.js and Express.js backend.

### Frontend Requirements

- Create a dashboard to display employee records.
- Implement employee search, filtering, and sorting.
- Display individual employee details using dynamic routes.
- Support adding, updating, and deleting employee records.
- Fetch employee data through API requests.
- Use Next.js App Router and API routes.

### Required Application Routes

| Route | Purpose |
|---|---|
| `/` | Employee dashboard |
| `/employees` | Employee listing |
| `/employees/[id]` | Individual employee details |
| `/employees/create` | Create a new employee |
| `/api/employees` | Next.js API route for employee requests |

**Note:** The dashboard, dynamic employee details page, and Next.js employee API route are implemented. The `/employees` listing and `/employees/create` routes may need separate pages if required by the assignment.

## 6. Backend API Development

A Node.js and Express.js REST API was created to manage employee records.

### API Endpoints

Base URL: `https://day-7-node-api.onrender.com/api/employees`

| HTTP Method | Endpoint | Operation |
|---|---|---|
| GET | `/api/employees` | Retrieve all employees |
| POST | `/api/employees` | Create a new employee |
| PUT | `/api/employees/:id` | Update employee details |
| DELETE | `/api/employees/:id` | Delete an employee |

The API uses request validation, API key authentication middleware, and error handling.

## 7. Complete Project Folder Structure

```text
Day_07/
├── README.md
├── .gitignore
│
├── nextjs-app/
│   ├── public/
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   │
│   ├── src/
│   │   └── app/
│   │       ├── api/
│   │       │   └── employees/
│   │       │       └── route.ts
│   │       ├── employees/
│   │       │   └── [id]/
│   │       │       └── page.tsx
│   │       ├── favicon.ico
│   │       ├── globals.css
│   │       ├── layout.tsx
│   │       ├── page.module.css
│   │       └── page.tsx
│   │
│   ├── .gitignore
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── package.json
│   ├── package-lock.json
│   └── .env.local (not committed to GitHub)
│
└── node-api/
    ├── controllers/
    │   └── employeeController.js
    ├── middleware/
    │   ├── authMiddleware.js
    │   └── errorMiddleware.js
    ├── routes/
    │   └── employeeRoutes.js
    ├── services/
    │   └── employeeService.js
    ├── server.js
    ├── package.json
    ├── package-lock.json
    └── .env (not committed to GitHub)
```

The structure above reflects the files currently created. The assignment also mentions `models/` and `utils/`; these folders can be added if required. The `/employees` listing and `/employees/create` pages are not currently shown in the structure.

## 8. Backend Architecture

- **Routes:** Define API endpoints.
- **Controllers:** Handle incoming requests and responses.
- **Services:** Manage employee-related operations.
- **Middleware:** Handle API key authentication and errors.
- **Models:** Can be added when dedicated data models or database integration are introduced.
- **Utils:** Can contain reusable helper functions as the application grows.

## 9. Environment Variables

The backend uses environment variables for the server port and API key.

Example backend `.env` configuration:

```env
PORT=5000
API_KEY=your_secret_key
```

The Next.js application uses `.env.local` for its environment configuration.

Example frontend `.env.local` configuration:

```env
API_KEY=your_secret_key
NEXT_PUBLIC_API_KEY=your_secret_key
```

Use matching API key values in both applications. Actual `.env` and `.env.local` files must not be committed to GitHub. Avoid exposing sensitive credentials in public frontend code.

## 10. How to Run the Application

### Start the Backend

Open a terminal in the project directory:

```bash
cd node-api
npm install
node server.js
```

Backend URL: `http://localhost:5000`

### Start the Frontend

Open another terminal in the project directory:

```bash
cd nextjs-app
npm install
npm run dev
```

Frontend URL: `http://localhost:3000`

Keep both servers running while testing the application.

## 11. Testing

The following backend operations were tested:

- Retrieving employee records using GET.
- Creating an employee using POST.
- Updating employee details using PUT.
- Deleting an employee using DELETE.
- Accessing the Next.js employee API route.
- Checking API key authentication for protected backend endpoints.

## 12. Data Storage

Employee records are stored in an in-memory JavaScript array. Data changes are temporary and reset when the backend server restarts. A persistent database is not connected in this version.

## 13. Learning Outcomes

- Understanding Next.js App Router and dynamic routing.
- Learning the difference between Server and Client Components.
- Fetching data from backend APIs.
- Building REST APIs using Node.js and Express.js.
- Implementing CRUD operations.
- Organizing backend code into routes, controllers, services, and middleware.
- Understanding request validation and API key authentication.
- Handling API errors and environment variables.
- Testing API endpoints and preparing a project for GitHub.

## 14. Deliverables

```text
Day_07/
├── nextjs-app/
├── node-api/
└── README.md
```

## Conclusion

Day 7 provided practical experience in modern frontend development with Next.js and backend development with Node.js and Express.js. The assignment helped develop an understanding of routing, data fetching, REST API development, CRUD operations, authentication basics, and modular backend architecture.