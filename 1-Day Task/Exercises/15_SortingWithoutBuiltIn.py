numbers = list(map(int, input("Enter numbers: ").split()))

def sort_array():
    n = len(numbers)

    for i in range(n):
        for j in range(0, n - i - 1):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]

def display():
    print("Sorted array:", *numbers)

def run():
    sort_array()
    display()

run()