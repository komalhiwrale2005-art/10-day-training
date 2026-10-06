# Day-02 — Python Development

## Project Information

Day-02 focuses on Python development, data processing, exception handling, file handling, object-oriented programming, and building maintainable Python programs.

## Objectives

* Learn Python syntax and basic programming concepts.
* Understand variables and data types.
* Work with lists, tuples, sets, and dictionaries.
* Use conditions and loops.
* Create and use functions.
* Understand lambda functions and list comprehensions.
* Understand modules and packages.
* Handle exceptions using Python exception handling.
* Read and write files.
* Understand classes, objects, inheritance, and encapsulation.
* Use virtual environments and pip.
* Process CSV data and generate statistics.
* Build a Python management system.

## Project Structure

```text
Day_02/
│
├── python-exercises/
│   ├── 01_variables.py
│   ├── 02_lists_tuples_sets.py
│   ├── 03_conditions_loops.py
│   ├── 04_functions.py
│   ├── 05_lambda_comprehension.py
│   ├── 06_modules.py
│   ├── 07_exceptions.py
│   ├── 08_file_handling.py
│   └── 09_oops.py
│
├── management-system/
│   ├── management_system.py
│   └── employees.json
│
├── csv-analysis/
│   ├── csv_analysis.py
│   └── data.csv
│
└── README.md
```

## Features

### Python Exercises

The `python-exercises` folder contains programs demonstrating basic Python concepts such as variables, lists, tuples, sets, dictionaries, conditions, loops, functions, exception handling, file handling, classes, and objects.

### Management System

The management system is an employee management application that supports:

* Add Employee
* Update Employee
* Delete Employee
* Search Employee
* Filter Employees
* Sort Employees
* Display Statistics
* List All Employees

Employee information is stored in a JSON file.

### CSV Analysis

The CSV analysis program reads employee data from a CSV file and provides:

* Total record count
* Missing value detection
* Duplicate record detection
* Average salary
* Minimum salary
* Maximum salary
* Department-wise statistics

### Exception Handling

Exception handling is implemented to handle errors such as:

* Invalid numeric input
* Missing files
* Invalid JSON data
* File reading and writing errors

## Sample Output

### Management System

```text
============================================================
        EMPLOYEE MANAGEMENT SYSTEM
============================================================

1. Add Employee
2. List Employees
3. Search Employee
4. Update Employee
5. Delete Employee
6. Filter Employees
7. Sort Employees
8. Statistics
9. Exit

Enter your choice: 2

======================================================================
ID   Name                Department          Age     Salary
======================================================================
1    Komal Hiwrale       IT                  21      40000.00
2    Rahul Sharma        HR                  22      55000.00
======================================================================
```

### Add Employee

```text
Enter employee ID: 3
Enter name: Priya Patil
Enter department: Finance
Enter age: 24
Enter salary: 60000

Employee added successfully.
```

### Search Employee

```text
Enter employee ID or name: Komal

Employee Found:
ID: 1
Name: Komal Hiwrale
Department: IT
Age: 21
Salary: 40000.00
```

### Statistics

```text
==================== STATISTICS ====================

Total Employees: 2
Average Salary: 47500.00
Minimum Salary: 40000.00
Maximum Salary: 55000.00

Department-wise Employee Count:
IT: 1
HR: 1
```

### CSV Analysis

```text
==================================================
        CSV DATA ANALYSIS
==================================================

Total Records: 15

Missing Values:
id : 0
name : 0
department : 0
salary : 0

Duplicate IDs:
No duplicates found.

Salary Statistics:
Average Salary: 40533.33
Minimum Salary: 28000.0
Maximum Salary: 55000.0

Department-wise Statistics:
IT -> Employees: 7, Average Salary: 42142.86
HR -> Employees: 3, Average Salary: 34000.0
Finance -> Employees: 3, Average Salary: 50666.67
Sales -> Employees: 2, Average Salary: 30500.0
```

> **Note:** The sample output may change depending on the data stored in `employees.json` and `data.csv`.

## Technologies Used

* Python
* JSON
* CSV
* Git and GitHub
* Virtual Environment

## Learning Outcomes

After completing Day-02, the following Python concepts were practiced:

* Python syntax
* Variables and data types
* Lists
* Tuples
* Sets
* Dictionaries
* Conditions
* Loops
* Functions
* Lambda functions
* List comprehensions
* Exception handling
* File handling
* Classes and objects
* Inheritance
* Encapsulation
* JSON and CSV data processing
* Virtual environments
* Git and GitHub
