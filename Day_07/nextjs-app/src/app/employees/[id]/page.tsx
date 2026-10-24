
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

type Employee = {
  id: number | string;
  name: string;
  email: string;
  department: string;
  salary: number;
};

const API_URL = "https://day-7-node-api.onrender.com/api/employees";

export default function EmployeeDetailsPage() {
  const params = useParams();
  const id = String(params.id);

  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEmployee = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
          },
        });

        const result = await response.json();

        if (!response.ok || !result.success || !Array.isArray(result.data)) {
          throw new Error("Could not load employee details.");
        }

        const found = result.data.find(
          (item: Employee) => String(item.id) === id
        );

        if (!found) {
          setError("Employee not found.");
        } else {
          setEmployee(found);
        }
      } catch {
        setError("Unable to load employee. Check that the backend is running.");
      } finally {
        setLoading(false);
      }
    };

    void loadEmployee();
  }, [id]);

  if (loading) {
    return <main className="dashboard"><p className="message">Loading employee details...</p></main>;
  }

  if (error || !employee) {
    return (
      <main className="dashboard">
        <h1>Employee Details</h1>
        <p className="message error">{error || "Employee not found."}</p>
        <Link href="/" className="primary-button">Back to Dashboard</Link>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <header className="topbar">
        <div>
          <p className="eyebrow">EMPLOYEE MANAGEMENT</p>
          <h1>Employee Details</h1>
          <p className="subtitle">Complete information about this employee.</p>
        </div>
        <Link href="/" className="primary-button">Back to Dashboard</Link>
      </header>

      <section className="employee-panel">
        <h2>{employee.name}</h2>
        <p><strong>Employee ID:</strong> #{employee.id}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Salary:</strong> ₹{employee.salary.toLocaleString("en-IN")}</p>
      </section>
    </main>
  );
}
