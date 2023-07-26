class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  };
  // CREAR EL METODO peek. REGRESA EL ULTIMO VALOR, SIN MODIFICARLO, ES UN METODO DE CONSULTA.
  peek() {
    return this.top;
  };
  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    };
  };
  push(item) {
    const newNode = new Node(item);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const pointer = this.top;
      this.top = newNode;
      pointer.next = newNode;
    }
    this.length++;
    return this;
  };
};

const myStack = new Stack();
myStack.push("Plato 1");
myStack.push("Plato 2");
myStack.push("Plato 3");
myStack.push("Plato 4");
myStack.push("Plato 5");

console.log(myStack.peek());
console.log(myStack.isEmpty());

console.log(myStack);