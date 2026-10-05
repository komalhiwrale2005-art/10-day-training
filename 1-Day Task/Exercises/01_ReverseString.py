string = input("Enter a string: ")

result = []

for i in range(len(string) - 1, -1, -1):
    result.append(string[i])

reversed_string = "".join(result)

print("Reversed string:", reversed_string)