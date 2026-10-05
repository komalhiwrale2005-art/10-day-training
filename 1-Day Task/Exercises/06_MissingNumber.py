numbers = list(map(int, input("Enter numbers: ").split()))

n = len(numbers)

expected_sum = n * (n + 1) // 2
actual_sum = sum(numbers)

missing = expected_sum - actual_sum

print("Missing number:", missing)