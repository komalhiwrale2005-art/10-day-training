
const {
  getAllEmployees,
  findEmployeeById,
  addEmployee,
  removeEmployee,
} = require("../services/employeeService");

let employees = [
  {
    id: "1",
    name: "Amit Sharma",
    email: "amit@example.com",
    department: "IT",
    salary: 30000,
  },
  {
    id: "2",
    name: "Priya Patil",
    email: "priya@example.com",
    department: "HR",
    salary: 28000,
  },
];

// GET: Get all employees
const getEmployees = (req, res) => {
  res.json({
    success: true,
    data: getAllEmployees(employees),
  });
};

// POST: Add a new employee
const createEmployee = (req, res) => {
  const { name, email, department, salary } = req.body;

  if (
    !name?.trim() ||
    !email?.trim() ||
    !department?.trim() ||
    salary === undefined ||
    salary === null ||
    salary === "" ||
    !Number.isFinite(Number(salary)) ||
    Number(salary) < 0
  ) {
    return res.status(400).json({
      success: false,
      message: "Please provide valid employee details.",
    });
  }

  // Generate a simple sequential ID: 1, 2, 3, 4...
  const highestId = employees.reduce((max, emp) => {
    const currentId = Number(emp.id);
    return Number.isFinite(currentId) ? Math.max(max, currentId) : max;
  }, 0);

  const newEmployee = {
    id: String(highestId + 1),
    name: name.trim(),
    email: email.trim(),
    department: department.trim(),
    salary: Number(salary),
  };

  addEmployee(employees, newEmployee);

  res.status(201).json({
    success: true,
    message: "Employee added successfully.",
    data: newEmployee,
  });
};

// PUT: Update an existing employee
const updateEmployee = (req, res) => {
  const { name, email, department, salary } = req.body;

  const employee = findEmployeeById(employees, req.params.id);

  if (!employee) {
    return res.status(404).json({
      success: false,
      message: "Employee not found.",
    });
  }

  if (
    !name?.trim() ||
    !email?.trim() ||
    !department?.trim() ||
    salary === undefined ||
    salary === null ||
    salary === "" ||
    !Number.isFinite(Number(salary)) ||
    Number(salary) < 0
  ) {
    return res.status(400).json({
      success: false,
      message: "Please provide valid employee details.",
    });
  }

  employee.name = name.trim();
  employee.email = email.trim();
  employee.department = department.trim();
  employee.salary = Number(salary);

  res.json({
    success: true,
    message: "Employee updated successfully.",
    data: employee,
  });
};

// DELETE: Delete an employee
const deleteEmployee = (req, res) => {
  const employee = findEmployeeById(employees, req.params.id);

  if (!employee) {
    return res.status(404).json({
      success: false,
      message: "Employee not found.",
    });
  }

  employees = removeEmployee(employees, req.params.id);

  res.json({
    success: true,
    message: "Employee deleted successfully.",
  });
};

module.exports = {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
