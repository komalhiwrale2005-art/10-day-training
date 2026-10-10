
const API_URL = "https://jsonplaceholder.typicode.com/users";
const STORAGE_KEY = "employeeDashboardData";

let employees = [];

const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const sortSelect = document.getElementById("sortSelect");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const employeeTableBody = document.getElementById("employeeTableBody");
const emptyMessage = document.getElementById("emptyMessage");

// Load employee data from localStorage or API
async function loadEmployees() {
    try {
        const savedEmployees = localStorage.getItem(STORAGE_KEY);

        if (savedEmployees !== null) {
            employees = JSON.parse(savedEmployees);
        } else {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Failed to load employee data.");
            }

            const users = await response.json();

            employees = users.map((user, index) => ({
                id: index + 1,
                name: user.name,
                email: user.email,
                department: ["IT", "HR", "Finance", "Marketing"][index % 4],
                salary: 30000 + index * 5000
            }));

            saveEmployees();
        }

        renderEmployees();
    } catch (error) {
        console.error("Error loading employees:", error);

        emptyMessage.textContent =
            "Unable to load employee data. Please check your connection.";
        emptyMessage.style.display = "block";
    }
}

// Save employee data locally
function saveEmployees() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}

// Update dashboard summary
function updateSummary() {
    document.getElementById("totalEmployees").textContent =
        employees.length;

    const itCount = employees.filter(
        employee => employee.department === "IT"
    ).length;

    document.getElementById("itEmployees").textContent = itCount;

    const totalSalary = employees.reduce(
        (sum, employee) => sum + employee.salary,
        0
    );

    const averageSalary = employees.length
        ? totalSalary / employees.length
        : 0;

    document.getElementById("averageSalary").textContent =
        "₹" + Math.round(averageSalary).toLocaleString("en-IN");
}

// Search, filter and sort employees
function getVisibleEmployees() {
    let result = [...employees];

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedDepartment = departmentFilter.value;
    const sortValue = sortSelect.value;

    if (searchText) {
        result = result.filter(employee =>
            employee.name.toLowerCase().includes(searchText) ||
            employee.email.toLowerCase().includes(searchText) ||
            employee.department.toLowerCase().includes(searchText) ||
            String(employee.id).includes(searchText)
        );
    }

    if (selectedDepartment !== "all") {
        result = result.filter(
            employee => employee.department === selectedDepartment
        );
    }

    if (sortValue === "name") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === "salary-high") {
        result.sort((a, b) => b.salary - a.salary);
    } else if (sortValue === "salary-low") {
        result.sort((a, b) => a.salary - b.salary);
    }

    return result;
}

// Display employees in the table
function renderEmployees() {
    const visibleEmployees = getVisibleEmployees();

    employeeTableBody.innerHTML = "";

    emptyMessage.textContent = "No employees found.";
    emptyMessage.style.display =
        visibleEmployees.length === 0 ? "block" : "none";

    visibleEmployees.forEach(employee => {
        const row = document.createElement("tr");

        const values = [
            employee.id,
            employee.name,
            employee.email,
            employee.department,
            "₹" + employee.salary.toLocaleString("en-IN")
        ];

        values.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");

        const viewButton = document.createElement("button");
        viewButton.textContent = "View";
        viewButton.className = "action-btn view-btn";
        viewButton.addEventListener("click", () =>
            viewEmployee(employee.id)
        );

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "action-btn edit-btn";
        editButton.addEventListener("click", () =>
            editEmployee(employee.id)
        );

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "action-btn delete-btn";
        deleteButton.addEventListener("click", () =>
            deleteEmployee(employee.id)
        );

        actionCell.append(viewButton, editButton, deleteButton);
        row.appendChild(actionCell);

        employeeTableBody.appendChild(row);
    });

    updateSummary();
}

// View employee details
function viewEmployee(id) {
    const employee = employees.find(item => item.id === id);

    if (!employee) return;

    alert(
        "Employee Details\n\n" +
        "ID: " + employee.id + "\n" +
        "Name: " + employee.name + "\n" +
        "Email: " + employee.email + "\n" +
        "Department: " + employee.department + "\n" +
        "Salary: ₹" + employee.salary.toLocaleString("en-IN")
    );
}

// Validate email address
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// Get and validate employee information
function getEmployeeInput(existingEmployee = null) {
    const name = prompt(
        "Enter employee name:",
        existingEmployee ? existingEmployee.name : ""
    );

    if (name === null) return null;

    if (!name.trim()) {
        alert("Name cannot be empty.");
        return null;
    }

    const email = prompt(
        "Enter employee email:",
        existingEmployee ? existingEmployee.email : ""
    );

    if (email === null) return null;

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return null;
    }

    const duplicateEmail = employees.some(employee =>
        employee.email.toLowerCase() === email.trim().toLowerCase() &&
        (!existingEmployee || employee.id !== existingEmployee.id)
    );

    if (duplicateEmail) {
        alert("This email already exists.");
        return null;
    }

    const department = prompt(
        "Enter department: IT, HR, Finance, Marketing",
        existingEmployee ? existingEmployee.department : ""
    );

    if (department === null) return null;

    const allowedDepartments = ["IT", "HR", "Finance", "Marketing"];

    const matchedDepartment = allowedDepartments.find(
        item => item.toLowerCase() === department.trim().toLowerCase()
    );

    if (!matchedDepartment) {
        alert("Enter IT, HR, Finance, or Marketing.");
        return null;
    }

    const salaryInput = prompt(
        "Enter employee salary:",
        existingEmployee ? String(existingEmployee.salary) : ""
    );

    if (salaryInput === null) return null;

    const salary = Number(salaryInput);

    if (
        salaryInput.trim() === "" ||
        !Number.isFinite(salary) ||
        salary < 0
    ) {
        alert("Enter a valid non-negative salary.");
        return null;
    }

    return {
        name: name.trim(),
        email: email.trim(),
        department: matchedDepartment,
        salary
    };
}

// Add employee
function addEmployee() {
    const details = getEmployeeInput();

    if (!details) return;

    const newEmployee = {
        id: employees.length
            ? Math.max(...employees.map(employee => employee.id)) + 1
            : 1,
        ...details
    };

    employees.push(newEmployee);
    saveEmployees();
    renderEmployees();

    alert("Employee added successfully!");
}

// Edit employee
function editEmployee(id) {
    const employee = employees.find(item => item.id === id);

    if (!employee) return;

    const details = getEmployeeInput(employee);

    if (!details) return;

    Object.assign(employee, details);

    saveEmployees();
    renderEmployees();

    alert("Employee updated successfully!");
}

// Delete employee
function deleteEmployee(id) {
    const employee = employees.find(item => item.id === id);

    if (!employee) return;

    const confirmed = confirm(
        "Are you sure you want to delete " + employee.name + "?"
    );

    if (!confirmed) return;

    employees = employees.filter(item => item.id !== id);

    saveEmployees();
    renderEmployees();

    alert("Employee deleted successfully!");
}

// Event listeners
searchInput.addEventListener("input", renderEmployees);
departmentFilter.addEventListener("change", renderEmployees);
sortSelect.addEventListener("change", renderEmployees);
addEmployeeBtn.addEventListener("click", addEmployee);

// Start dashboard
loadEmployees();
