
export type Department = "IT" | "HR" | "Finance" | "Marketing";

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: Department;
  salary: number;
}

export type EmployeeInput = Omit<Employee, "id">;

export type SortOption =
  | "name"
  | "salary-low"
  | "salary-high";
