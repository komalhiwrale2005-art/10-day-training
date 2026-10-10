
console.log("=== 1. Callbacks ===");

function getEmployee(name, callback) {
    console.log("Fetching employee details...");

    callback(name);
}

function displayEmployee(name) {
    console.log("Employee Name:", name);
}

getEmployee("Komal", displayEmployee);


console.log("\n=== 2. Promise ===");

function checkEmployee(id) {
    return new Promise((resolve, reject) => {
        if (id > 0) {
            resolve("Employee found with ID: " + id);
        } else {
            reject("Invalid employee ID");
        }
    });
}

checkEmployee(101)
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log("Error:", error);
    });


console.log("\n=== 3. Promise with Error Handling ===");

checkEmployee(-1)
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log("Error:", error);
    });


console.log("\n=== 4. Promise Chaining ===");

Promise.resolve(100)
    .then(salary => {
        console.log("Original Salary:", salary);
        return salary + 5000;
    })
    .then(updatedSalary => {
        console.log("Updated Salary:", updatedSalary);
    })
    .catch(error => {
        console.log("Error:", error);
    });


console.log("\n=== 5. Asynchronous Operation ===");

function fetchEmployee() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 101,
                name: "Komal",
                department: "IT"
            });
        }, 1000);
    });
}

fetchEmployee().then(employee => {
    console.log("Employee Details:", employee);
});

console.log("Fetching request started...");
