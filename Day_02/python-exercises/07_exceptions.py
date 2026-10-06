# Exception Handling in Python

try:
    number1 = int(input("Enter first number: "))
    number2 = int(input("Enter second number: "))

    result = number1 / number2

    print("Result:", result)

except ValueError:
    print("Error: Please enter valid numbers.")

except ZeroDivisionError:
    print("Error: Cannot divide by zero.")

except Exception as e:
    print("Unexpected error:", e)

finally:
    print("Program execution completed.")