
import { useCallback, useEffect, useState } from "react";
import type { Employee, EmployeeInput } from "../types/employee";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const STORAGE_KEY = "employeeDashboardData";

export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEmployees() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved !== null) {
          const parsed: Employee[] = JSON.parse(saved);
          setEmployees(parsed);
        } else {
          const response = await fetch(API_URL);

          if (!response.ok) {
            throw new Error("Failed to load employees.");
          }

          const users: {
            id: number;
            name: string;
            email: string;
          }[] = await response.json();

          const departments = [
            "IT",
            "HR",
            "Finance",
            "Marketing"
          ] as const;

          const initialEmployees: Employee[] = users.map(
            (user, index) => ({
              id: index + 1,
              name: user.name,
              email: user.email,
              department: departments[index % 4],
              salary: 30000 + index * 5000
            })
          );

          setEmployees(initialEmployees);
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(initialEmployees)
          );
        }
      } catch {
        setError(
          "Unable to load employees. Please check your connection."
        );
      } finally {
        setLoading(false);
      }
    }

    loadEmployees();
  }, []);

  const saveEmployees = useCallback((updated: Employee[]) => {
    setEmployees(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }, []);

  function addEmployee(details: EmployeeInput) {
    const newEmployee: Employee = {
      ...details,
      id: employees.length
        ? Math.max(...employees.map((e) => e.id)) + 1
        : 1
    };

    saveEmployees([...employees, newEmployee]);
  }

  function updateEmployee(id: number, details: EmployeeInput) {
    saveEmployees(
      employees.map((employee) =>
        employee.id === id
          ? { ...employee, ...details }
          : employee
      )
    );
  }

  function deleteEmployee(id: number) {
    saveEmployees(employees.filter((e) => e.id !== id));
  }

  return {
    employees,
    loading,
    error,
    addEmployee,
    updateEmployee,
    deleteEmployee
  };
}
