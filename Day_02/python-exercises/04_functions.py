# Functions in Python


# 1. Simple Function
def greet():
    print("Hello, welcome to Python!")


greet()


# 2. Function with Parameters
def greet_student(name):
    print("Hello", name)


greet_student("Komal")


# 3. Function with Multiple Parameters
def add_numbers(a, b):
    return a + b


result = add_numbers(10, 20)
print("Sum:", result)


# 4. Function to Calculate Average
def calculate_average(marks):
    total = sum(marks)
    average = total / len(marks)
    return average


student_marks = [80, 75, 90, 85, 70]

average = calculate_average(student_marks)

print("Marks:", student_marks)
print("Average:", average)


# 5. Function to Check Even or Odd
def check_number(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"


number = 15

print("Number:", number)
print("Result:", check_number(number))# Functions in Python


# 1. Simple Function
def greet():
    print("Hello, welcome to Python!")


greet()


# 2. Function with Parameters
def greet_student(name):
    print("Hello", name)


greet_student("Komal")


# 3. Function with Multiple Parameters
def add_numbers(a, b):
    return a + b


result = add_numbers(10, 20)
print("Sum:", result)


# 4. Function to Calculate Average
def calculate_average(marks):
    total = sum(marks)
    average = total / len(marks)
    return average


student_marks = [80, 75, 90, 85, 70]

average = calculate_average(student_marks)

print("Marks:", student_marks)
print("Average:", average)


# 5. Function to Check Even or Odd
def check_number(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"


number = 15

print("Number:", number)
print("Result:", check_number(number))