numbers = list(map(int, input("Enter numbers: ").split()))

def find_max_sum():
    current_sum = numbers[0]
    max_sum = numbers[0]

    for num in numbers[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)

    return max_sum

def display_result():
    print("Maximum subarray sum:", find_max_sum())

def run():
    display_result()

run()