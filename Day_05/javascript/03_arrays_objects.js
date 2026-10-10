
console.log("=== Arrays ===");

const employees = ["Komal", "Rahul", "Priya", "Amit"];

console.log("All employees:", employees);
console.log("First employee:", employees[0]);
console.log("Total employees:", employees.length);


console.log("\n=== Objects ===");

const employee = {
    id: 101,
    name: "Komal",
    department: "IT",
    salary: 45000
};

console.log("Employee:", employee);
console.log("Employee name:", employee.name);
console.log("Employee salary:", employee.salary);


console.log("\n=== Array Destructuring ===");

const colors = ["Red", "Blue", "Green"];

const [firstColor, secondColor] = colors;

console.log("First color:", firstColor);
console.log("Second color:", secondColor);


console.log("\n=== Object Destructuring ===");

const { name, department, salary } = employee;

console.log("Name:", name);
console.log("Department:", department);
console.log("Salary:", salary);


console.log("\n=== Spread Operator ===");

const newEmployees = [...employees, "Sneha"];

console.log("Original employees:", employees);
console.log("Updated employees:", newEmployees);


console.log("\n=== Rest Parameters ===");

function calculateTotal(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log("Total:", calculateTotal(10, 20, 30, 40));
