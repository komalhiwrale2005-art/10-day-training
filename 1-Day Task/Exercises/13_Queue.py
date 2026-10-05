queue = []

def enqueue():
    value = input("Enter value: ")
    queue.append(value)
    print("Added:", value)

def dequeue():
    if not queue:
        print("Queue is empty")
    else:
        print("Removed:", queue.pop(0))

def display():
    if not queue:
        print("Queue is empty")
    else:
        print("Queue:", *queue)


while True:
    print("\n1. Enqueue")
    print("2. Dequeue")
    print("3. Display")
    print("4. Exit")

    choice = int(input("Enter choice: "))

    if choice == 1:
        enqueue()
    elif choice == 2:
        dequeue()
    elif choice == 3:
        display()
    elif choice == 4:
        break
    else:
        print("Invalid choice")