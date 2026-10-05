numbers = list(map(int, input("Enter numbers: ").split()))

largest = float('-inf')
second_largest = float('-inf')

for num in numbers:
    if num > largest:
        second_largest = largest
        largest = num
    elif largest > num > second_largest:
        second_largest = num

if second_largest == float('-inf'):
    print("Second largest number does not exist")
else:
    print("Second largest number:", second_largest)