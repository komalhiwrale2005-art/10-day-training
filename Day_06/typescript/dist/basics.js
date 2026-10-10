"use strict";
/* Day 6 - TypeScript Basics */
// 1. Variables and data types
let studentName = "Komal";
let age = 21;
let isLearning = true;
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Learning TypeScript:", isLearning);
// 2. Array
let marks = [85, 90, 78, 92];
console.log("Marks:", marks);
// 3. Function with types
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(10, 20));
// 4. Function with string parameter
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet(studentName));
// 6. Object using interface
const employee = {
    id: 1,
    name: "Rahul",
    department: "IT",
    salary: 35000
};
console.log("Employee:", employee);
// 7. Array of objects
const employees = [
    employee,
    {
        id: 2,
        name: "Priya",
        department: "HR",
        salary: 30000
    }
];
console.log("All Employees:", employees);
// 8. Union type
let employeeStatus = "Active";
console.log("Employee Status:", employeeStatus);
const student = {
    name: "Amit"
};
console.log("Student:", student);
let department = "IT";
console.log("Department:", department);
