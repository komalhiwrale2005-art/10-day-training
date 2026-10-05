arr1 = list(map(int, input("Enter first array: ").split()))
arr2 = list(map(int, input("Enter second array: ").split()))

set2 = set(arr2)
common = []

for num in arr1:
    if num in set2 and num not in common:
        common.append(num)

print("Common elements:", *common)