text = input("Enter a string: ")

frequency = {}

# Count frequency of each character
for char in text:
    frequency[char] = frequency.get(char, 0) + 1

# Find first character with frequency 1
for char in text:
    if frequency[char] == 1:
        print("First non-repeating character:", char)
        break
else:
    print("No non-repeating character found")