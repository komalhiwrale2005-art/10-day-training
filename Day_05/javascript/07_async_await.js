
console.log("=== 1. Async and Await ===");

function fetchEmployee() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 101,
                name: "Komal",
                department: "IT",
                salary: 45000
            });
        }, 1000);
    });
}

async function displayEmployee() {
    console.log("Fetching employee details...");

    const employee = await fetchEmployee();

    console.log("Employee ID:", employee.id);
    console.log("Employee Name:", employee.name);
    console.log("Department:", employee.department);
    console.log("Salary:", employee.salary);
}

displayEmployee();


console.log("\n=== 2. Error Handling ===");

async function getEmployee(id) {
    try {
        if (id <= 0) {
            throw new Error("Invalid employee ID");
        }

        const employee = {
            id: id,
            name: "Rahul",
            department: "HR"
        };

        console.log("Employee found:", employee);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getEmployee(102);
getEmployee(-1);


console.log("\n=== 3. Event Loop ===");

console.log("First");

setTimeout(() => {
    console.log("Second - Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Third - Promise");
});

console.log("Fourth");
