# Day 1 - Programming Fundamentals & Problem Solving

## Objective

To strengthen programming fundamentals, problem-solving skills, and basic Data Structures and Algorithms.

## Topics Covered

* Programming Fundamentals
* Arrays
* Stack
* Queue
* Hash Map / Dictionary
* Set
* Searching and Sorting
* Recursion
* Time and Space Complexity
* Git and GitHub

## Exercises

Completed 15 programming problems:

1. Reverse a String
2. Check Palindrome
3. Find Largest Number
4. Find Second Largest Number
5. Character Frequency
6. Remove Duplicates
7. Find Missing Number
8. Find Duplicate Number
9. First Non-Repeating Character
10. Find Common Elements
11. Merge Sorted Arrays
12. Stack Implementation
13. Queue Implementation
14. Maximum Subarray Sum
15. Sorting Without Built-in Sort

## Outputs

### 1. Reverse a String

```text
Enter a string: hello
Reversed string: olleh
```

### 2. Check Palindrome

```text
Enter a string: madam
Palindrome
```

### 3. Find Largest Number

```text
Enter numbers: 10 25 7 40 15
Largest number: 40
```

### 4. Find Second Largest Number

```text
Enter numbers: 10 25 7 40 15
Second largest number: 25
```

### 5. Character Frequency

```text
Enter a string: hello
h : 1
e : 1
l : 2
o : 1
```

### 6. Remove Duplicates

```text
Enter numbers: 1 2 2 3 4 4 5
Array after removing duplicates: 1 2 3 4 5
```

### 7. Find Missing Number

```text
Enter numbers: 0 1 2 4 5
Missing number: 3
```

### 8. Find Duplicate Number

```text
Enter numbers: 1 2 3 4 2
Duplicate number: 2
```

### 9. First Non-Repeating Character

```text
Enter a string: aabbcde
First non-repeating character: c
```

### 10. Find Common Elements

```text
Enter first array: 1 2 3 4 5
Enter second array: 3 4 5 6 7
Common elements: 3 4 5
```

### 11. Merge Sorted Arrays

```text
Enter first sorted array: 1 3 5
Enter second sorted array: 2 4 6
Merged array: 1 2 3 4 5 6
```

### 12. Stack Implementation

```text
1. Push
2. Pop
3. Display
4. Exit
Enter choice: 1
Enter value: 10
Pushed: 10

1. Push
2. Pop
3. Display
4. Exit
Enter choice: 1
Enter value: 20
Pushed: 20

1. Push
2. Pop
3. Display
4. Exit
Enter choice: 3
Stack: 10 20

1. Push
2. Pop
3. Display
4. Exit
Enter choice: 2
Popped: 20

1. Push
2. Pop
3. Display
4. Exit
Enter choice: 4
```

### 13. Queue Implementation

```text
1. Enqueue
2. Dequeue
3. Display
4. Exit
Enter choice: 1
Enter value: 10
Added: 10

1. Enqueue
2. Dequeue
3. Display
4. Exit
Enter choice: 1
Enter value: 20
Added: 20

1. Enqueue
2. Dequeue
3. Display
4. Exit
Enter choice: 3
Queue: 10 20

1. Enqueue
2. Dequeue
3. Display
4. Exit
Enter choice: 2
Removed: 10

1. Enqueue
2. Dequeue
3. Display
4. Exit
Enter choice: 4
```

### 14. Maximum Subarray Sum

```text
Enter numbers: -2 1 -3 4 -1 2 1 -5 4
Maximum subarray sum: 6
```

### 15. Sorting Without Built-in Sort

```text
Enter numbers: 5 2 8 1 3
Sorted array: 1 2 3 5 8
```

## Practical Assignment

### Employee Management CLI

A command-line Employee Management application was created with the following features:

* Add Employee
* Update Employee
* Delete Employee
* Search Employee
* List Employees
* Highest Salary
* Average Salary
* Department Filter

### Employee Management Output

```text
================================
   Employee Management System
================================
1. Add Employee
2. Update Employee
3. Delete Employee
4. Search Employee
5. List Employees
6. Highest Salary
7. Average Salary
8. Department Filter
9. Exit

Enter your choice: 1

--- Add Employee ---
Enter employee ID: 101
Enter employee name: Komal
Enter salary: 45000
Enter department: IT
Employee added successfully!

Enter your choice: 1

--- Add Employee ---
Enter employee ID: 102
Enter employee name: Rahul
Enter salary: 55000
Enter department: HR
Employee added successfully!

Enter your choice: 5

--- Employee List ---
ID: 101 | Name: Komal | Salary: 45000.0 | Department: IT
ID: 102 | Name: Rahul | Salary: 55000.0 | Department: HR

Enter your choice: 6

--- Highest Salary ---
Employee: Rahul
Salary: 55000.0

Enter your choice: 7

--- Average Salary ---
Average Salary: 50000.0

Enter your choice: 8

--- Department Filter ---
Enter department: IT
ID: 101 | Name: Komal | Salary: 45000.0 | Department: IT

Enter your choice: 4

--- Search Employee ---
Enter employee ID: 102

Employee Found
ID: 102
Name: Rahul
Salary: 55000.0
Department: HR

Enter your choice: 3

--- Delete Employee ---
Enter employee ID to delete: 101
Employee deleted successfully!

Enter your choice: 9

Thank you for using Employee Management System!
```

## Project Structure

```text
1-Day Task/
├── Exercises/
│   ├── 01_ReverseString.py
│   ├── 02_Palindrome.py
│   ├── 03_LargestNumber.py
│   ├── 04_SecondLargest.py
│   ├── 05_RemoveDuplicates.py
│   ├── 06_MissingNumber.py
│   ├── 07_DuplicateNumber.py
│   ├── 08_CharacterFrequency.py
│   ├── 09_FirstNonRepeating.py
│   ├── 10_MergeSortedArrays.py
│   ├── 11_CommonElements.py
│   ├── 12_Stack.py
│   ├── 13_Queue.py
│   ├── 14_MaxSubarraySum.py
│   └── 15_SortingWithoutBuiltIn.py
├── employee-management/
│   └── EmployeeManagement.py
└── README.md
```

## Conclusion

Day 1 helped me strengthen my programming fundamentals and problem-solving skills through practical exercises. I also gained hands-on experience with basic data structures, algorithms, and Git & GitHub. The Employee Management CLI project helped me apply these concepts in a practical application.
