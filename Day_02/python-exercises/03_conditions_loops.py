# Conditions and Loops

# 1. If-Else condition

marks = 75

if marks >= 60:
    print("Result: First Class")
elif marks >= 50:
    print("Result: Second Class")
elif marks >= 40:
    print("Result: Pass")
else:
    print("Result: Fail")


# 2. For Loop

print("\nNumbers from 1 to 5:")

for i in range(1, 6):
    print(i)


# 3. For Loop with List

print("\nStudent Names:")

students = ["Komal", "Riya", "Amit", "Neha"]

for student in students:
    print(student)


# 4. While Loop

print("\nWhile Loop:")

count = 1

while count <= 5:
    print(count)
    count += 1


# 5. Even Numbers

print("\nEven Numbers from 1 to 10:")

for number in range(1, 11):
    if number % 2 == 0:
        print(number)