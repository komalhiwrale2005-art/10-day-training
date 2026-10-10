
/* Day 6 - TypeScript Basics */

// 1. Variables and data types
let studentName: string = "Komal";
let age: number = 21;
let isLearning: boolean = true;

console.log("Name:", studentName);
console.log("Age:", age);
console.log("Learning TypeScript:", isLearning);

// 2. Array
let marks: number[] = [85, 90, 78, 92];

console.log("Marks:", marks);

// 3. Function with types
function add(a: number, b: number): number {
  return a + b;
}

console.log("Addition:", add(10, 20));

// 4. Function with string parameter
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet(studentName));

// 5. Interface
interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
}

// 6. Object using interface
const employee: Employee = {
  id: 1,
  name: "Rahul",
  department: "IT",
  salary: 35000
};

console.log("Employee:", employee);

// 7. Array of objects
const employees: Employee[] = [
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
let employeeStatus: "Active" | "Inactive" = "Active";

console.log("Employee Status:", employeeStatus);

// 9. Optional property
interface Student {
  name: string;
  email?: string;
}

const student: Student = {
  name: "Amit"
};

console.log("Student:", student);

// 10. Type alias
type Department = "IT" | "HR" | "Finance" | "Marketing";

let department: Department = "IT";

console.log("Department:", department);
