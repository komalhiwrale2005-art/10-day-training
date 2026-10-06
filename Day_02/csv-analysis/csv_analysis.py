import csv
from collections import Counter, defaultdict

FILE_NAME = "data.csv"


def read_data():
    try:
        with open(FILE_NAME, "r", newline="") as file:
            reader = csv.DictReader(file)
            return list(reader)

    except FileNotFoundError:
        print("Error: data.csv file not found.")
        return []

    except Exception as e:
        print("Error while reading file:", e)
        return []


def record_count(data):
    print("\nTotal Records:", len(data))


def missing_values(data):
    print("\nMissing Values:")

    if not data:
        return

    for column in data[0].keys():
        count = 0

        for row in data:
            if row[column].strip() == "":
                count += 1

        print(column, ":", count)


def duplicate_records(data):
    ids = [row["id"] for row in data]
    duplicates = [item for item, count in Counter(ids).items() if count > 1]

    print("\nDuplicate IDs:")

    if duplicates:
        print(duplicates)
    else:
        print("No duplicates found.")


def salary_statistics(data):
    salaries = []

    for row in data:
        try:
            salaries.append(float(row["salary"]))
        except ValueError:
            pass

    if salaries:
        average = sum(salaries) / len(salaries)

        print("\nSalary Statistics:")
        print("Average Salary:", round(average, 2))
        print("Minimum Salary:", min(salaries))
        print("Maximum Salary:", max(salaries))


def department_statistics(data):
    departments = defaultdict(list)

    for row in data:
        try:
            salary = float(row["salary"])
            departments[row["department"]].append(salary)
        except ValueError:
            pass

    print("\nDepartment-wise Statistics:")

    for department, salaries in departments.items():
        average = sum(salaries) / len(salaries)

        print(
            department,
            "-> Employees:",
            len(salaries),
            ", Average Salary:",
            round(average, 2)
        )


def main():
    data = read_data()

    if not data:
        return

    print("=" * 50)
    print("        CSV DATA ANALYSIS")
    print("=" * 50)

    record_count(data)
    missing_values(data)
    duplicate_records(data)
    salary_statistics(data)
    department_statistics(data)


if __name__ == "__main__":
    main()