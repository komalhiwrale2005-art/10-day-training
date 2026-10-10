
const employees = [
    { id: 101, name: "Komal", department: "IT", salary: 45000 },
    { id: 102, name: "Rahul", department: "HR", salary: 35000 },
    { id: 103, name: "Priya", department: "IT", salary: 55000 },
    { id: 104, name: "Amit", department: "Finance", salary: 40000 },
    { id: 105, name: "Sneha", department: "HR", salary: 50000 }
];

console.log("=== Original Employees ===");
console.log(employees);


// 1. map() - Get employee names
console.log("\n=== map() ===");

const employeeNames = employees.map(employee => employee.name);
console.log(employeeNames);


// 2. filter() - Employees in IT department
console.log("\n=== filter() ===");

const itEmployees = employees.filter(
    employee => employee.department === "IT"
);
console.log(itEmployees);


// 3. reduce() - Calculate total salary
console.log("\n=== reduce() ===");

const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);
console.log("Total salary:", totalSalary);


// 4. find() - Find an employee by ID
console.log("\n=== find() ===");

const employee = employees.find(employee => employee.id === 103);
console.log(employee);


// 5. some() - Check if any salary exceeds 50000
console.log("\n=== some() ===");

const highSalaryExists = employees.some(
    employee => employee.salary > 50000
);
console.log("Salary above 50000 exists:", highSalaryExists);


// 6. every() - Check if all employees earn at least 30000
console.log("\n=== every() ===");

const allHaveMinimumSalary = employees.every(
    employee => employee.salary >= 30000
);
console.log("All earn at least 30000:", allHaveMinimumSalary);


// 7. sort() - Sort employees by salary (ascending)
console.log("\n=== sort() ===");

const sortedEmployees = [...employees].sort(
    (a, b) => a.salary - b.salary
);

sortedEmployees.forEach(employee => {
    console.log(employee.name + ": " + employee.salary);
});
