
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Employee = {
  id: number | string;
  name: string;
  email: string;
  department: string;
  salary: number;
};

type EmployeeApiResponse = {
  success: boolean;
  data?: Employee[] | Employee;
  message?: string;
};

const API_URL = "/api/employees";

export default function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sort, setSort] = useState("name");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // GET: Load employees
  const loadEmployees = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "GET",
        cache: "no-store",
      });

      const result: EmployeeApiResponse = await response.json();

      if (
        !response.ok ||
        !result.success ||
        !Array.isArray(result.data)
      ) {
        throw new Error(
          result.message || "Failed to load employees."
        );
      }

      setEmployees(result.data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not load employees. Check your backend configuration."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadEmployees();
  }, []);

  // Search, filter and sort employees
  const filteredEmployees = employees
    .filter((employee) =>
      `${employee.name} ${employee.email}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter(
      (employee) =>
        department === "All" ||
        employee.department === department
    )
    .sort((a, b) => {
      if (sort === "salary-asc") return a.salary - b.salary;
      if (sort === "salary-desc") return b.salary - a.salary;
      return a.name.localeCompare(b.name);
    });

  // POST: Add employee
  const addEmployee = async () => {
    const name = prompt("Enter employee name:");
    if (!name?.trim()) return;

    const email = prompt("Enter employee email:");
    if (
      !email?.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      alert("Please enter a valid email.");
      return;
    }

    const departmentInput = prompt(
      "Enter department: IT, HR, Finance, or Marketing"
    );
    if (!departmentInput) return;

    const validDepartments = [
      "IT",
      "HR",
      "Finance",
      "Marketing",
    ];

    const selectedDepartment = validDepartments.find(
      (item) =>
        item.toLowerCase() === departmentInput.trim().toLowerCase()
    );

    if (!selectedDepartment) {
      alert("Please enter IT, HR, Finance, or Marketing.");
      return;
    }

    const salaryInput = prompt("Enter salary:");
    if (salaryInput === null || salaryInput.trim() === "") return;

    const salary = Number(salaryInput);

    if (!Number.isFinite(salary) || salary < 0) {
      alert("Please enter a valid salary.");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          department: selectedDepartment,
          salary,
        }),
      });

      const result: EmployeeApiResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Could not add employee.");
      }

      await loadEmployees();
      alert("Employee added successfully!");
    } catch (err) {
      alert(
        err instanceof Error
          ? err.message
          : "Could not add employee. Check the backend API."
      );
    }
  };

  // PUT: Edit employee
  const editEmployee = async (employee: Employee) => {
    const name = prompt("Enter employee name:", employee.name);
    if (!name?.trim()) return;

    const email = prompt("Enter employee email:", employee.email);
    if (
      !email?.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      alert("Please enter a valid email.");
      return;
    }

    const departmentInput = prompt(
      "Enter department: IT, HR, Finance, or Marketing",
      employee.department
    );
    if (!departmentInput?.trim()) return;

    const validDepartments = [
      "IT",
      "HR",
      "Finance",
      "Marketing",
    ];

    const selectedDepartment = validDepartments.find(
      (item) =>
        item.toLowerCase() === departmentInput.trim().toLowerCase()
    );

    if (!selectedDepartment) {
      alert("Please enter IT, HR, Finance, or Marketing.");
      return;
    }

    const salaryInput = prompt(
      "Enter salary:",
      String(employee.salary)
    );
    if (salaryInput === null || salaryInput.trim() === "") return;

    const salary = Number(salaryInput);

    if (!Number.isFinite(salary) || salary < 0) {
      alert("Please enter a valid salary.");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/${encodeURIComponent(String(employee.id))}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            department: selectedDepartment,
            salary,
          }),
        }
      );

      const result: EmployeeApiResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Could not update employee.");
      }

      await loadEmployees();
      alert("Employee updated successfully!");
    } catch (err) {
      alert(
        err instanceof Error
          ? err.message
          : "Could not update employee. Check the backend API."
      );
    }
  };

  // DELETE: Delete employee
  const deleteEmployee = async (id: number | string) => {
    if (!confirm("Are you sure you want to delete this employee?")) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/${encodeURIComponent(String(id))}`,
        {
          method: "DELETE",
        }
      );

      const result: EmployeeApiResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Could not delete employee.");
      }

      await loadEmployees();
      alert("Employee deleted successfully!");
    } catch (err) {
      alert(
        err instanceof Error
          ? err.message
          : "Could not delete employee. Check the backend API."
      );
    }
  };

  // Calculate average salary
  const averageSalary = employees.length
    ? employees.reduce((sum, employee) => sum + employee.salary, 0) /
      employees.length
    : 0;

  return (
    <main className="dashboard">
      <header className="topbar">
        <div>
          <p className="eyebrow">EMPLOYEE MANAGEMENT</p>
          <h1>Employee Dashboard</h1>
          <p className="subtitle">
            Manage your team in one place.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={addEmployee}
          disabled={loading}
        >
          + Add Employee
        </button>
      </header>

      <section className="stats">
        <article className="stat-card">
          <p>Total Employees</p>
          <h2>{employees.length}</h2>
        </article>

        <article className="stat-card">
          <p>IT Department</p>
          <h2>
            {employees.filter(
              (employee) => employee.department === "IT"
            ).length}
          </h2>
        </article>

        <article className="stat-card">
          <p>Average Salary</p>
          <h2>
            ₹{Math.round(averageSalary).toLocaleString("en-IN")}
          </h2>
        </article>
      </section>

      <section className="employee-panel">
        <div className="panel-heading">
          <div>
            <h2>Employees</h2>
            <p>Search, filter, and organize your team.</p>
          </div>

          <span className="count">
            {filteredEmployees.length} records
          </span>
        </div>

        <div className="filters">
          <input
            aria-label="Search employees"
            placeholder="Search by name or email..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <select
            aria-label="Filter by department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option value="All">All Departments</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>

          <select
            aria-label="Sort employees"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="name">Sort by name</option>
            <option value="salary-asc">Salary: Low to High</option>
            <option value="salary-desc">Salary: High to Low</option>
          </select>
        </div>

        {loading ? (
          <p className="message">Loading employees...</p>
        ) : error ? (
          <div className="message error">
            <p>{error}</p>
            <button
              className="primary-button"
              onClick={loadEmployees}
            >
              Try Again
            </button>
          </div>
        ) : filteredEmployees.length === 0 ? (
          <p className="message">No employees found.</p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Employee</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>
                      <Link href={`/employees/${employee.id}`}>
                        #{employee.id}
                      </Link>
                    </td>

                    <td className="employee-name">
                      {employee.name}
                    </td>

                    <td>{employee.email}</td>

                    <td>
                      <span className="department">
                        {employee.department}
                      </span>
                    </td>

                    <td>
                      ₹{employee.salary.toLocaleString("en-IN")}
                    </td>

                    <td>
                      <div className="action-buttons">
                        <button
                          className="primary-button"
                          onClick={() => editEmployee(employee)}
                        >
                          Edit
                        </button>

                        <button
                          className="delete-button"
                          onClick={() => deleteEmployee(employee.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <footer>
        Day 7 Project · Next.js Employee Management Dashboard
      </footer>
    </main>
  );
}
