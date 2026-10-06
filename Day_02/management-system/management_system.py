import json
import os

FILE_NAME = "employees.json"


# Load employee data from JSON file
def load_data():
    try:
        if not os.path.exists(FILE_NAME):
            return []

        with open(FILE_NAME, "r") as file:
            data = json.load(file)

        if not isinstance(data, list):
            print("Error: JSON data must be a list.")
            return []

        return data

    except json.JSONDecodeError:
        print("Error: employees.json contains invalid JSON data.")
        return []

    except Exception as e:
        print("Error while loading data:", e)
        return []


# Save employee data to JSON file
def save_data(employees):
    try:
        with open(FILE_NAME, "w") as file:
            json.dump(employees, file, indent=4)

        return True

    except Exception as e:
        print("Error while saving data:", e)
        return False


# Add employee
def add_employee():
    employees = load_data()

    try:
        employee_id = int(input("Enter Employee ID: "))

        # Check duplicate ID
        for employee in employees:
            if employee["id"] == employee_id:
                print("Employee ID already exists.")
                return

        name = input("Enter Employee Name: ").strip()
        department = input("Enter Department: ").strip()
        salary = float(input("Enter Salary: "))

        if not name:
            print("Employee name cannot be empty.")
            return

        if not department:
            print("Department cannot be empty.")
            return

        if salary < 0:
            print("Salary cannot be negative.")
            return

        employee = {
            "id": employee_id,
            "name": name,
            "department": department,
            "salary": salary
        }

        employees.append(employee)

        if save_data(employees):
            print("Employee added successfully.")

    except ValueError:
        print("Invalid input. ID must be an integer and salary must be a number.")

    except Exception as e:
        print("Error:", e)


# Display all employees
def list_employees():
    employees = load_data()

    if not employees:
        print("No employees found.")
        return

    print("\n========== Employee List ==========")

    for employee in employees:
        print(
            f"ID: {employee['id']} | "
            f"Name: {employee['name']} | "
            f"Department: {employee['department']} | "
            f"Salary: {employee['salary']:.2f}"
        )


# Search employee by ID or name
def search_employee():
    employees = load_data()

    if not employees:
        print("No employees found.")
        return

    search = input("Enter Employee ID or Name to search: ").strip()

    found = False

    for employee in employees:

        if (
            str(employee["id"]) == search
            or employee["name"].lower() == search.lower()
        ):
            print("\nEmployee Found:")
            print("ID:", employee["id"])
            print("Name:", employee["name"])
            print("Department:", employee["department"])
            print("Salary:", employee["salary"])

            found = True

    if not found:
        print("Employee not found.")


# Update employee
def update_employee():
    employees = load_data()

    if not employees:
        print("No employees found.")
        return

    try:
        employee_id = int(input("Enter Employee ID to update: "))

        for employee in employees:

            if employee["id"] == employee_id:

                print("\nEmployee found.")
                print("Press Enter if you don't want to change a value.")

                name = input(f"Enter Name [{employee['name']}]: ").strip()

                department = input(
                    f"Enter Department [{employee['department']}]: "
                ).strip()

                salary = input(
                    f"Enter Salary [{employee['salary']}]: "
                ).strip()

                if name:
                    employee["name"] = name

                if department:
                    employee["department"] = department

                if salary:
                    new_salary = float(salary)

                    if new_salary < 0:
                        print("Salary cannot be negative.")
                        return

                    employee["salary"] = new_salary

                if save_data(employees):
                    print("Employee updated successfully.")

                return

        print("Employee not found.")

    except ValueError:
        print("Invalid input. Please enter a valid number.")

    except Exception as e:
        print("Error:", e)


# Delete employee
def delete_employee():
    employees = load_data()

    if not employees:
        print("No employees found.")
        return

    try:
        employee_id = int(input("Enter Employee ID to delete: "))

        for employee in employees:

            if employee["id"] == employee_id:

                employees.remove(employee)

                if save_data(employees):
                    print("Employee deleted successfully.")

                return

        print("Employee not found.")

    except ValueError:
        print("Employee ID must be a number.")

    except Exception as e:
        print("Error:", e)


# Filter employees by department
def filter_employees():
    employees = load_data()

    if not employees:
        print("No employees found.")
        return

    department = input("Enter Department to filter: ").strip()

    filtered_employees = []

    for employee in employees:

        if employee["department"].lower() == department.lower():
            filtered_employees.append(employee)

    if not filtered_employees:
        print("No employees found in this department.")
        return

    print(f"\nEmployees in {department}:")

    for employee in filtered_employees:
        print(
            f"ID: {employee['id']} | "
            f"Name: {employee['name']} | "
            f"Department: {employee['department']} | "
            f"Salary: {employee['salary']:.2f}"
        )


# Sort employees
def sort_employees():
    employees = load_data()

    if not employees:
        print("No employees found.")
        return

    print("\nSort Employees By:")
    print("1. Name")
    print("2. Salary")

    choice = input("Enter your choice: ")

    if choice == "1":

        sorted_employees = sorted(
            employees,
            key=lambda employee: employee["name"].lower()
        )

    elif choice == "2":

        sorted_employees = sorted(
            employees,
            key=lambda employee: employee["salary"]
        )

    else:
        print("Invalid choice.")
        return

    print("\n========== Sorted Employees ==========")

    for employee in sorted_employees:
        print(
            f"ID: {employee['id']} | "
            f"Name: {employee['name']} | "
            f"Department: {employee['department']} | "
            f"Salary: {employee['salary']:.2f}"
        )


# Display employee statistics
def statistics():
    employees = load_data()

    if not employees:
        print("No employees found.")
        return

    total_employees = len(employees)

    salaries = [employee["salary"] for employee in employees]

    average_salary = sum(salaries) / total_employees
    minimum_salary = min(salaries)
    maximum_salary = max(salaries)

    print("\n========== Employee Statistics ==========")

    print("Total Employees:", total_employees)
    print(f"Average Salary: {average_salary:.2f}")
    print(f"Minimum Salary: {minimum_salary:.2f}")
    print(f"Maximum Salary: {maximum_salary:.2f}")

    # Department-wise statistics
    departments = {}

    for employee in employees:

        department = employee["department"]

        if department in departments:
            departments[department] += 1
        else:
            departments[department] = 1

    print("\nDepartment-wise Statistics:")

    for department, count in departments.items():
        print(f"{department}: {count} employee(s)")


# Main menu
def main():
    while True:

        print("\n========================================")
        print("       EMPLOYEE MANAGEMENT SYSTEM")
        print("========================================")
        print("1. Add Employee")
        print("2. List Employees")
        print("3. Search Employee")
        print("4. Update Employee")
        print("5. Delete Employee")
        print("6. Filter Employees")
        print("7. Sort Employees")
        print("8. Statistics")
        print("9. Exit")
        print("========================================")

        choice = input("Enter your choice: ")

        if choice == "1":
            add_employee()

        elif choice == "2":
            list_employees()

        elif choice == "3":
            search_employee()

        elif choice == "4":
            update_employee()

        elif choice == "5":
            delete_employee()

        elif choice == "6":
            filter_employees()

        elif choice == "7":
            sort_employees()

        elif choice == "8":
            statistics()

        elif choice == "9":
            print("Thank you for using Employee Management System.")
            break

        else:
            print("Invalid choice. Please enter a number from 1 to 9.")


# Start the program
if __name__ == "__main__":
    main()