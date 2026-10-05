text = input("Enter a string: ")

frequency = {}

for char in text:
    frequency[char] = frequency.get(char, 0) + 1

for char, count in frequency.items():
    print(char, ":", count)