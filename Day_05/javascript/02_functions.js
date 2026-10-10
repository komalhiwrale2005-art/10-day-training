
console.log("=== Normal Function ===");

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Komal"));


console.log("\n=== Function with Parameters ===");

function add(a, b) {
    return a + b;
}

console.log("Sum:", add(10, 20));


console.log("\n=== Arrow Function ===");

const multiply = (a, b) => {
    return a * b;
};

console.log("Multiplication:", multiply(5, 4));


console.log("\n=== Short Arrow Function ===");

const square = n => n * n;

console.log("Square:", square(6));


console.log("\n=== Template Literals ===");

const name = "Komal";
const age = 21;

console.log(`My name is ${name} and I am ${age} years old.`);
