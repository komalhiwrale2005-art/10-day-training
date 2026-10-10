
console.log("=== 1. Scope ===");

let globalMessage = "I am outside the function";

function showMessage() {
    let localMessage = "I am inside the function";

    console.log(globalMessage);
    console.log(localMessage);
}

showMessage();

// globalMessage is accessible here.
// localMessage is only accessible inside showMessage().


console.log("\n=== 2. Block Scope ===");

if (true) {
    let city = "Amravati";
    const country = "India";

    console.log("City:", city);
    console.log("Country:", country);
}

// let and const are block-scoped.


console.log("\n=== 3. Hoisting ===");

greet();

function greet() {
    console.log("Hello! Function declarations are hoisted.");
}

// Function declarations can be called before their definition.


console.log("\n=== 4. var Hoisting ===");

console.log("Value before assignment:", employeeName);

var employeeName = "Komal";

console.log("Value after assignment:", employeeName);

// var is hoisted and initialized with undefined.


console.log("\n=== 5. Closures ===");

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log("Counter:", counter());
console.log("Counter:", counter());
console.log("Counter:", counter());


console.log("\n=== 6. Closure with Employee ID ===");

function createEmployee(id) {
    return function () {
        console.log("Employee ID:", id);
    };
}

const showEmployeeId = createEmployee(101);

showEmployeeId();
