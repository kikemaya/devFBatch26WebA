class Animal {
  constructor(nombreRecibido, colorRecibido) {
    this.nombre = nombreRecibido;
    this.color = colorRecibido;
  };
  sonidoAnimal() {
    return `Estoy emitiendo el sonido de ${this.nombre}`;
  };
};

class Perro extends Animal {
  constructor(nombre, color, cantidadDePulgas, peludo) {
    super(nombre, color);
    this.cantidadDePulgas = cantidadDePulgas;
    this.peludo = peludo
  };
  ladrar() {
    return "Guau";
  };
};

// RETO. CREAR UNA CLASE "Gato", que herede de la clase "Animal", agregando dos nuevas propiedades y un metodo "maullar"
class Gato extends Animal {
  constructor(nombre, color, muerde, esterilizado) {
    super(nombre, color);
    this.muerde = muerde;
    this.esterilizado = esterilizado;
  };
  maullar() {
    return `miau`;
  }
}

let remedios = new Gato('remedios', 'gris', true, true);
console.log(remedios.maullar())


let leon = new Animal("Leon", "Blanco")
let firulais = new Perro("Firulais", "cafe", "2", false)

console.log(firulais.sonidoAnimal());