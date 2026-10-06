# File Handling in Python

# Write data to a file
with open("student.txt", "w") as file:
    file.write("Name: Komal\n")
    file.write("Branch: Information Technology\n")
    file.write("Year: Final Year\n")

print("Data written successfully.")


# Read data from the file
with open("student.txt", "r") as file:
    content = file.read()

print("\nFile Content:")
print(content)


# Append data to the file
with open("student.txt", "a") as file:
    file.write("Status: Active\n")

print("New data added successfully.")


# Read updated file
with open("student.txt", "r") as file:
    updated_content = file.read()

print("\nUpdated File Content:")
print(updated_content)