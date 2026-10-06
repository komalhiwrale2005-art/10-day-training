# Object-Oriented Programming (OOP) in Python

# Class
class Student:

    # Constructor
    def __init__(self, name, age, course):
        self.name = name
        self.age = age
        self.course = course

    # Method
    def display_info(self):
        print("Student Name:", self.name)
        print("Age:", self.age)
        print("Course:", self.course)

    def study(self):
        print(self.name, "is studying Python.")


# Creating objects
student1 = Student("Komal", 21, "Information Technology")
student2 = Student("Rahul", 22, "Computer Science")

# Calling methods
student1.display_info()
student1.study()

print()

student2.display_info()
student2.study()