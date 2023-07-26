class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

class MyQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  };
  // DEVUELVE EL PRIMER ELEMENTO
  front() {
    return this.first;
  };
  back() {
    // TODO: DEVUELVE EL ULTIMO ELEMENTO
    return this.last;
  };
  enqueue(value) {
    //TODO: ENCOLAR UN ELEMENTO
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  };

  dequeue() {
    // TODO: REMOVER/DESENCOLAR EL PRIMER ELEMENTO
  };

  isEmpty() {
    // TODO: ARROJAR true o false, si la cola esta vacia
  }
};

const myQueue = new MyQueue();
myQueue.enqueue("Jamon");
myQueue.enqueue("Atun");
myQueue.enqueue("Huevo");

console.log(myQueue.front());