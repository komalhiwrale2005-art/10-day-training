
const express = require("express");

const {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

// GET all employees
router.get("/", getEmployees);

// POST a new employee
router.post("/", createEmployee);

// PUT: Update an employee by ID
router.put("/:id", updateEmployee);

// DELETE an employee by ID
router.delete("/:id", deleteEmployee);

module.exports = router;
