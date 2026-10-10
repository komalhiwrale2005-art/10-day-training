
const API_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchEmployees() {
    try {
        console.log("=== GET: Fetch Employees ===");

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const employees = await response.json();

        employees.slice(0, 5).forEach(employee => {
            console.log(
                employee.id,
                employee.name,
                employee.email
            );
        });
    } catch (error) {
        console.log("GET Error:", error.message);
    }
}

async function addEmployee() {
    try {
        console.log("\n=== POST: Add Employee ===");

        const newEmployee = {
            name: "Komal Hiwrale",
            email: "komal@example.com"
        };

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        console.log("Created employee:", result);
    } catch (error) {
        console.log("POST Error:", error.message);
    }
}

async function updateEmployee() {
    try {
        console.log("\n=== PUT: Update Employee ===");

        const updatedEmployee = {
            id: 1,
            name: "Komal Hiwrale",
            email: "komal.updated@example.com"
        };

        const response = await fetch(`${API_URL}/1`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEmployee)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        console.log("Updated employee:", await response.json());
    } catch (error) {
        console.log("PUT Error:", error.message);
    }
}

async function deleteEmployee() {
    try {
        console.log("\n=== DELETE: Remove Employee ===");

        const response = await fetch(`${API_URL}/1`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        console.log("Delete request successful:", response.status);
    } catch (error) {
        console.log("DELETE Error:", error.message);
    }
}

async function main() {
    await fetchEmployees();
    await addEmployee();
    await updateEmployee();
    await deleteEmployee();
}

main();
