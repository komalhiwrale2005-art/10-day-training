# Lambda Functions and List Comprehensions


# 1. Lambda Function
square = lambda x: x * x

print("Square of 5:", square(5))


# 2. Lambda Function with Two Parameters
add = lambda a, b: a + b

print("Addition:", add(10, 20))


# 3. List Comprehension
numbers = [1, 2, 3, 4, 5]

squares = [number * number for number in numbers]

print("\nNumbers:", numbers)
print("Squares:", squares)


# 4. List Comprehension with Condition
even_numbers = [number for number in numbers if number % 2 == 0]

print("Even Numbers:", even_numbers)


# 5. Convert Names to Uppercase
names = ["komal", "riya", "amit", "neha"]

uppercase_names = [name.upper() for name in names]

print("\nNames:", names)
print("Uppercase Names:", uppercase_names)


# 6. Filter Marks Greater Than 60
marks = [45, 78, 65, 32, 90, 55, 88]

passed_marks = [mark for mark in marks if mark >= 60]

print("\nMarks:", marks)
print("Marks >= 60:", passed_marks)