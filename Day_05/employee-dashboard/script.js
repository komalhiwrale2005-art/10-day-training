
let employees = [
    {
        id: 1,
        name: "Komal Hiwrale",
        email: "komal@example.com",
        department: "IT",
        salary: 45000
    },
    {
        id: 2,
        name: "Rahul Sharma",
        email: "rahul@example.com",
        department: "HR",
        salary: 40000
    },
    {
        id: 3,
        name: "Priya Patil",
        email: "priya@example.com",
        department: "IT",
        salary: 55000
    },
    {
        id: 4,
        name: "Amit Verma",
        email: "amit@example.com",
        department: "Finance",
        salary: 50000
    },
    {
        id: 5,
        name: "Sneha Joshi",
        email: "sneha@example.com",
        department: "Marketing",
        salary: 42000
    }
];

const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const sortSelect = document.getElementById("sortSelect");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const employeeTableBody = document.getElementById("employeeTableBody");
const emptyMessage = document.getElementById("emptyMessage");

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

function renderEmployees() {
    const visibleEmployees = getVisibleEmployees();

    employeeTableBody.innerHTML = "";

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
        viewButton.addEventListener("click", () => viewEmployee(employee.id));

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "action-btn edit-btn";
        editButton.addEventListener("click", () => editEmployee(employee.id));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "action-btn delete-btn";
        deleteButton.addEventListener("click", () => deleteEmployee(employee.id));

        actionCell.append(viewButton, editButton, deleteButton);
        row.appendChild(actionCell);

        employeeTableBody.appendChild(row);
    });

    updateSummary();
}

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

function addEmployee() {
    const name = prompt("Enter employee name:");
    if (name === null) return;

    if (!name.trim()) {
        alert("Name cannot be empty.");
        return;
    }

    const email = prompt("Enter employee email:");
    if (email === null) return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        alert("Please enter a valid email address.");
        return;
    }

    if (employees.some(employee =>
        employee.email.toLowerCase() === email.trim().toLowerCase()
    )) {
        alert("This email already exists.");
        return;
    }

    const department = prompt(
        "Enter department: IT, HR, Finance, Marketing"
    );
    if (department === null) return;

    const allowedDepartments = ["IT", "HR", "Finance", "Marketing"];
    const matchedDepartment = allowedDepartments.find(
        item => item.toLowerCase() === department.trim().toLowerCase()
    );

    if (!matchedDepartment) {
        alert("Please enter IT, HR, Finance, or Marketing.");
        return;
    }

    const salaryInput = prompt("Enter employee salary:");
    if (salaryInput === null) return;

    const salary = Number(salaryInput);

    if (salaryInput.trim() === "" || !Number.isFinite(salary) || salary < 0) {
        alert("Please enter a valid non-negative salary.");
        return;
    }

    const newEmployee = {
        id: employees.length
            ? Math.max(...employees.map(employee => employee.id)) + 1
            : 1,
        name: name.trim(),
        email: email.trim(),
        department: matchedDepartment,
        salary: salary
    };

    employees.push(newEmployee);
    renderEmployees();
    alert("Employee added successfully!");
}

function editEmployee(id) {
    const employee = employees.find(item => item.id === id);

    if (!employee) return;

    const name = prompt("Enter employee name:", employee.name);
    if (name === null) return;

    if (!name.trim()) {
        alert("Name cannot be empty.");
        return;
    }

    const email = prompt("Enter employee email:", employee.email);
    if (email === null) return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        alert("Please enter a valid email address.");
        return;
    }

    if (employees.some(item =>
        item.id !== id &&
        item.email.toLowerCase() === email.trim().toLowerCase()
    )) {
        alert("This email already belongs to another employee.");
        return;
    }

    const department = prompt(
        "Enter department: IT, HR, Finance, Marketing",
        employee.department
    );
    if (department === null) return;

    const allowedDepartments = ["IT", "HR", "Finance", "Marketing"];
    const matchedDepartment = allowedDepartments.find(
        item => item.toLowerCase() === department.trim().toLowerCase()
    );

    if (!matchedDepartment) {
        alert("Please enter IT, HR, Finance, or Marketing.");
        return;
    }

    const salaryInput = prompt("Enter employee salary:", employee.salary);
    if (salaryInput === null) return;

    const salary = Number(salaryInput);

    if (salaryInput.trim() === "" || !Number.isFinite(salary) || salary < 0) {
        alert("Please enter a valid non-negative salary.");
        return;
    }

    employee.name = name.trim();
    employee.email = email.trim();
    employee.department = matchedDepartment;
    employee.salary = salary;

    renderEmployees();
    alert("Employee updated successfully!");
}

function deleteEmployee(id) {
    const employee = employees.find(item => item.id === id);

    if (!employee) return;

    const confirmed = confirm(
        "Are you sure you want to delete " + employee.name + "?"
    );

    if (confirmed) {
        employees = employees.filter(item => item.id !== id);
        renderEmployees();
        alert("Employee deleted successfully!");
    }
}

searchInput.addEventListener("input", renderEmployees);
departmentFilter.addEventListener("change", renderEmployees);
sortSelect.addEventListener("change", renderEmployees);
addEmployeeBtn.addEventListener("click", addEmployee);

renderEmployees();
