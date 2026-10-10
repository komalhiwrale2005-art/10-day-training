# Day 6 – TypeScript and React Employee Management Dashboard

## Overview

Day 6 focuses on learning TypeScript fundamentals and building an Employee Management Dashboard using React and TypeScript.

The project helps manage employee information through a simple, interactive, and responsive user interface.

## Project Structure

```text
Day_06/
├── typescript/
│   ├── basics.ts
│   ├── tsconfig.json
│   └── dist/
│       └── basics.js
├── react-app/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   └── ...
└── README.md
```

*Note: The `dist/` folder is generated after successful TypeScript compilation. The `components/`, `hooks/`, and `types/` folders contain reusable code when implemented.*

## Technologies Used

- TypeScript
- React
- Vite
- HTML5
- CSS3
- JavaScript
- Browser Local Storage
- Node.js and npm

## Part 1: TypeScript Practice

The `typescript` folder contains practice examples covering the fundamentals of TypeScript.

Topics covered:

- Variables and data types
- Arrays
- Functions with typed parameters and return values
- Interfaces
- Objects and arrays of objects
- Union types
- Optional properties
- Type aliases
- Type checking and compilation

### Run the TypeScript Program

Open a terminal in the `Day_06` folder.

Install TypeScript if it is not already installed:

```bash
npm install --save-dev typescript
```

Compile the TypeScript project:

```bash
npx tsc -p typescript
```

Run the compiled JavaScript:

```bash
node typescript/dist/basics.js
```

The program displays the practice examples and their output in the terminal.

## Part 2: Employee Management Dashboard

The React application provides an interface for viewing and managing employee records.

### Features

- **Dashboard Summary:** Displays total employees, IT department employees, and average monthly salary.
- **Employee Listing:** Displays employee names, email addresses, departments, and salaries.
- **Search:** Searches employees by name or email.
- **Department Filter:** Filters employees by IT, HR, Finance, or Marketing.
- **Sorting:** Sorts employees alphabetically or by salary from low to high and high to low.
- **Add Employee:** Adds a new employee after collecting and validating details.
- **Edit Employee:** Updates an employee's name and salary.
- **Delete Employee:** Deletes an employee after confirmation.
- **Local Storage:** Saves employee records in the browser so changes remain after refreshing the page.
- **Responsive Design:** Provides a layout that adapts to different screen sizes.

### How Data Is Stored

The dashboard uses browser `localStorage` with the key:

```text
employeeDashboardData
```

The current dashboard starts with sample employee records. Changes are stored locally in the browser.

**Note:** The current dashboard version uses sample data and local storage; it does not yet fetch employee records from an external API.

### Run the React Application

Open a terminal in the `react-app` folder:

```bash
cd react-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

Keep the development server running while using the application.

## Learning Outcomes

By completing Day 6, I practised:

- Understanding TypeScript types and interfaces.
- Compiling TypeScript into JavaScript.
- Building a user interface using React and TypeScript.
- Managing application state with React hooks.
- Handling forms, search, filtering, and sorting.
- Implementing basic CRUD operations.
- Saving data using browser local storage.
- Styling a responsive web application.

## Conclusion

Day 6 helped me practise TypeScript fundamentals and apply React concepts by developing an Employee Management Dashboard. The project improved my understanding of typed data, component-based development, state management, and basic employee record management.
