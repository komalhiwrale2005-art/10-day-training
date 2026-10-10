
import { useEffect, useState } from "react";
import "./index.css";

type Department = "IT" | "HR" | "Finance" | "Marketing";

interface Employee {
  id: number;
  name: string;
  email: string;
  department: Department;
  salary: number;
}

const initialEmployees: Employee[] = [
  { id: 1, name: "Aarav Sharma", email: "aarav@example.com", department: "IT", salary: 45000 },
  { id: 2, name: "Priya Patel", email: "priya@example.com", department: "HR", salary: 35000 },
  { id: 3, name: "Rahul Verma", email: "rahul@example.com", department: "Finance", salary: 40000 },
  { id: 4, name: "Sneha Joshi", email: "sneha@example.com", department: "Marketing", salary: 38000 }
];

const STORAGE_KEY = "employeeDashboardData";

function App() {
  const [employees, setEmployees] = useState<Employee[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) as Employee[] : initialEmployees;
    } catch {
      return initialEmployees;
    }
  });

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sort, setSort] = useState("name");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  const filteredEmployees = employees
    .filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase())
    )
    .filter((employee) =>
      department === "All" || employee.department === department
    )
    .sort((a, b) => {
      if (sort === "salary-low") return a.salary - b.salary;
      if (sort === "salary-high") return b.salary - a.salary;
      return a.name.localeCompare(b.name);
    });

  function addEmployee() {
    const name = prompt("Enter employee name:");
    if (!name?.trim()) return;

    const email = prompt("Enter employee email:");
    if (!email?.trim() || !email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    const dept = prompt("Enter department: IT, HR, Finance, or Marketing");
    if (!["IT", "HR", "Finance", "Marketing"].includes(dept ?? "")) {
      alert("Please enter a valid department.");
      return;
    }

    const salaryInput = prompt("Enter monthly salary:");
    const salary = Number(salaryInput);
    if (!salaryInput?.trim() || !Number.isFinite(salary) || salary <= 0) {
      alert("Please enter a valid salary.");
      return;
    }

    setEmployees((previous) => [
      ...previous,
      {
        id: previous.length ? Math.max(...previous.map((e) => e.id)) + 1 : 1,
        name: name.trim(),
        email: email.trim(),
        department: dept as Department,
        salary
      }
    ]);
  }

  function editEmployee(employee: Employee) {
    const name = prompt("Employee name:", employee.name);
    if (!name?.trim()) return;

    const salaryInput = prompt("Monthly salary:", String(employee.salary));
    if (salaryInput === null) return;

    const salary = Number(salaryInput);
    if (!Number.isFinite(salary) || salary <= 0) {
      alert("Please enter a valid salary.");
      return;
    }

    setEmployees((previous) =>
      previous.map((item) =>
        item.id === employee.id
          ? { ...item, name: name.trim(), salary }
          : item
      )
    );
  }

  function deleteEmployee(id: number) {
    if (confirm("Are you sure you want to delete this employee?")) {
      setEmployees((previous) => previous.filter((e) => e.id !== id));
    }
  }

  const averageSalary = employees.length
    ? Math.round(employees.reduce((sum, e) => sum + e.salary, 0) / employees.length)
    : 0;

  return (
    <main className="dashboard">
      <header className="topbar">
        <div>
          <p className="eyebrow">WORKSPACE / OVERVIEW</p>
          <h1>Employee Dashboard</h1>
          <p className="subtitle">Manage your team in one place.</p>
        </div>
        <button className="primary-button" onClick={addEmployee}>+ Add Employee</button>
      </header>

      <section className="stats">
        <article className="stat-card">
          <span>Total Employees</span>
          <strong>{employees.length}</strong>
          <small>Employees in your directory</small>
        </article>
        <article className="stat-card">
          <span>IT Department</span>
          <strong>{employees.filter((e) => e.department === "IT").length}</strong>
          <small>Employees in IT</small>
        </article>
        <article className="stat-card">
          <span>Average Salary</span>
          <strong>₹{averageSalary.toLocaleString("en-IN")}</strong>
          <small>Monthly average</small>
        </article>
      </section>

      <section className="employee-panel">
        <div className="panel-heading">
          <div>
            <h2>Team Members</h2>
            <p>View and manage employee information.</p>
          </div>
          <span className="count">{filteredEmployees.length} records</span>
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
            <option>All</option>
            <option>IT</option>
            <option>HR</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select>
          <select
            aria-label="Sort employees"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="name">Sort by name</option>
            <option value="salary-low">Salary: low to high</option>
            <option value="salary-high">Salary: high to low</option>
          </select>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>EMPLOYEE</th>
                <th>DEPARTMENT</th>
                <th>MONTHLY SALARY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <strong>{employee.name}</strong>
                    <small className="email">{employee.email}</small>
                  </td>
                  <td><span className="department-tag">{employee.department}</span></td>
                  <td>₹{employee.salary.toLocaleString("en-IN")}</td>
                  <td>
                    <div className="actions">
                      <button className="edit-button" onClick={() => editEmployee(employee)}>Edit</button>
                      <button className="delete-button" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredEmployees.length === 0 && (
                <tr><td colSpan={4} className="empty">No employees found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      <footer>Employee Dashboard · React + TypeScript</footer>
    </main>
  );
}

export default App;
