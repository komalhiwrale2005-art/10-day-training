stack = []

def push():
    value = input("Enter value: ")
    stack.append(value)
    print("Pushed:", value)

def pop():
    if not stack:
        print("Stack is empty")
    else:
        print("Popped:", stack.pop())

def display():
    if not stack:
        print("Stack is empty")
    else:
        print("Stack:", *stack)


while True:
    print("\n1. Push")
    print("2. Pop")
    print("3. Display")
    print("4. Exit")

    choice = int(input("Enter choice: "))

    if choice == 1:
        push()
    elif choice == 2:
        pop()
    elif choice == 3:
        display()
    elif choice == 4:
        break
    else:
        print("Invalid choice")