# Day 5 - JavaScript Training

## Objective

To learn JavaScript fundamentals, understand asynchronous programming and modules, and develop an interactive Employee Dashboard using HTML, CSS, and JavaScript.

## Topics Covered

- Variables and Data Types
- Functions and Arrow Functions
- Arrays and Objects
- Array Methods
- Scope, Hoisting, and Closures
- Callbacks and Promises
- Async/Await
- JavaScript Modules
- Fetch API and API Handling
- DOM Manipulation and Event Handling

---

## Project 1: JavaScript Fundamentals

### Description

This section contains JavaScript programs demonstrating fundamental concepts, modern ES6+ features, asynchronous programming, modules, and API requests.

### Folder Structure

```text
javascript/
├── 01_variables_datatypes.js
├── 02_functions.js
├── 03_arrays_objects.js
├── 04_array_methods.js
├── 05_scope_hoisting_closures.js
├── 06_callbacks_promises.js
├── 07_async_await.js
├── employeeUtils.js
├── 08_modules.js
├── package.json
└── 09_api_fetch.js
```

### Sample Outputs

**1. Variables and Data Types**

```text
Name: Komal
Age: 21
Is Student: true
```

**2. Functions**

```text
Addition: 15
```

**3. Arrays and Objects**

```text
Names: Komal, Rahul, Priya
Employee: Komal
```

**4. Array Methods**

```text
Filtered Values: [20, 30, 40]
Doubled Values: [20, 40, 60, 80]
```

**5. Scope, Hoisting, and Closures**

```text
Closure Result: 15
```

**6. Callbacks and Promises**

```text
Callback executed successfully
Promise resolved successfully
```

**7. Async/Await**

```text
Data fetched successfully
```

**8. JavaScript Modules**

```text
Employee utility functions imported successfully
```

**9. Fetch API**

```text
API data fetched successfully
```

*Note: The outputs above are examples. Actual outputs depend on the code in each file and, for API requests, whether the request succeeds.*

---

## Project 2: Employee Dashboard

### Description

The Employee Dashboard is a web application developed using HTML, CSS, and JavaScript to display and manage employee information through a simple, interactive interface.

### Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- DOM Manipulation
- Event Handling
- Array Methods

### Features

- Display employee records in a table
- Search employees by name, email, department, or ID
- Filter employees by department
- Sort employees by name and salary
- View employee details
- Add new employees
- Edit existing employee information
- Delete employee records
- Display total employees, IT employees, and average salary
- Responsive layout for different screen sizes

### Project Structure

```text
employee-dashboard/
├── index.html
├── style.css
└── script.js
```

### Sample Dashboard Output

```text
Employee Dashboard

Total Employees: 5
IT Employees: 2
Average Salary: ₹46,400

ID  Name           Department  Salary
1   Komal Hiwrale  IT          ₹45,000
2   Rahul Sharma   HR          ₹40,000
3   Priya Patil    IT          ₹55,000
4   Amit Verma     Finance     ₹50,000
5   Sneha Joshi    Marketing   ₹42,000
```

### How to Run the Dashboard

1. Open the `employee-dashboard` folder in VS Code.
2. Open `index.html` using Live Server or a web browser.
3. Use the search, filter, and sorting controls.
4. Test the View, Add, Edit, and Delete actions.

### How to Run JavaScript Exercises

1. Ensure Node.js is installed on your computer.
2. Open the `javascript` folder in VS Code.
3. Open the terminal in that folder.
4. Run a JavaScript file using Node.js:

```bash
node 01_variables_datatypes.js
```

5. Run other exercise files using their respective filenames.

The module files use the ES module configuration in `package.json`. The Fetch API exercise may require an internet connection and a valid API endpoint.

---

## Learning Outcomes

- Understood JavaScript variables, data types, functions, arrays, and objects.
- Practiced array methods, scope, hoisting, and closures.
- Learned asynchronous programming using callbacks, promises, and async/await.
- Practiced importing and exporting JavaScript modules.
- Explored API requests using the Fetch API.
- Applied DOM manipulation and event handling to develop an interactive dashboard.
- Implemented employee search, filtering, sorting, and CRUD operations.

---

## Complete Day 5 Folder Structure

```text
Day_05/
│
├── javascript/
│   ├── 01_variables_datatypes.js
│   ├── 02_functions.js
│   ├── 03_arrays_objects.js
│   ├── 04_array_methods.js
│   ├── 05_scope_hoisting_closures.js
│   ├── 06_callbacks_promises.js
│   ├── 07_async_await.js
│   ├── employeeUtils.js
│   ├── 08_modules.js
│   ├── package.json
│   └── 09_api_fetch.js
│
├── employee-dashboard/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## Conclusion

Day 5 provided practical experience with JavaScript fundamentals, modern JavaScript features, asynchronous programming, modules, and API handling. The Employee Dashboard applied these concepts to build an interactive frontend application for managing employee records and displaying employee statistics.
