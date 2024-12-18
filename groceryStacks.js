const groceryStack = []; 

function peek() {
  if (groceryStack.length === 0) {
    alert("Stack is empty.");
    return undefined;
  }
  alert("Top item: " + groceryStack[groceryStack.length - 1]);
  return groceryStack[groceryStack.length - 1];
}

function push() {
  const item = prompt("Enter an item to push onto the stack:");
  if (item === null) {
    alert("Push operation cancelled.");
    return;
  }
  if (item.trim()) {
    groceryStack.push(item.trim());
    alert("Pushed: " + item + "\nCurrent Stack: " + groceryStack.join(", "));
  } else {
    alert("No item entered. Nothing was pushed.");
  }
}

function pop() {
  if (groceryStack.length === 0) {
    alert("Stack is empty. Nothing to pop.");
    return;
  }
  const poppedItem = groceryStack.pop();
  alert("Popped: " + poppedItem + "\nCurrent Stack: " + groceryStack.join(", "));
  return poppedItem;
}

function main() {
  let option;
  do {
    option = prompt(
      "Choose an option:\n1. Push item\n2. Pop item\n3. Peek top item\n4. Exit\nEnter the number of your choice:"
    );

    if (option === null) {
      alert("Program cancelled.");
      return;
    }

    switch (option) {
      case "1":
        push();
        break;
      case "2":
        pop();
        break;
      case "3":
        peek();
        break;
      case "4":
        alert("Exiting the program.\nFinal Stack: " + groceryStack.join(", "));
        break;
      default:
        alert("Invalid option. Please enter 1, 2, 3, or 4.");
    }
  } while (option !== "4");
}

main(); 
