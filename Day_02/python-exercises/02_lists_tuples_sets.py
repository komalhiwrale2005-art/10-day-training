# Lists, Tuples, Sets and Dictionaries

# 1. List
fruits = ["Apple", "Banana", "Mango", "Orange"]

print("List:", fruits)
print("First fruit:", fruits[0])

# Add an item
fruits.append("Grapes")
print("After adding Grapes:", fruits)

# Remove an item
fruits.remove("Banana")
print("After removing Banana:", fruits)


# 2. Tuple
colors = ("Red", "Green", "Blue")

print("\nTuple:", colors)
print("First color:", colors[0])


# 3. Set
numbers = {10, 20, 30, 20, 10}

print("\nSet:", numbers)


# 4. Dictionary
student = {
    "name": "Komal",
    "age": 21,
    "branch": "Information Technology"
}

print("\nDictionary:", student)
print("Student Name:", student["name"])
print("Age:", student["age"])
print("Branch:", student["branch"])