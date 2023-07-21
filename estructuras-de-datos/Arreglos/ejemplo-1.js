class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  };
  // METODO PARA ACCEDER A UN VALOR DE UN ARREGLO, DADA SU POSICION/INDICE
  get(index) {
    if (index >= this.length) {
      return false;
    } else {
      return this.data[index];
    }
  };
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  };
  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  };
  // AÑADIR UN ELEMENTO AL PRINCIPIO
  unshift(item) {
    const lastItem = this.data[this.length - 1];

    for (let i = 0; i <= this.length - 1; i++) {
      this.data[i + 1] = this.data[i];
    };

    this.data[this.length] = lastItem;
    this.data[0] = item;

    this.length++;
    return item;
  };
};

let arreglo = new MyArray();

arreglo.push("palabra");
arreglo.push(665);

arreglo.pop();
arreglo.unshift("comienzo");
console.log(arreglo);