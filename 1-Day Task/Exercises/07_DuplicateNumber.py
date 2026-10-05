numbers = list(map(int, input("Enter numbers: ").split()))

seen = set()

for num in numbers:
    if num in seen:
        print("Duplicate number:", num)
        break
    seen.add(num)
else:
    print("No duplicate number found")