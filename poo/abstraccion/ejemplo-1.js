// SINTAXIS BASICA DE UNA CLASE
class Animal {
  // EL METODO CONSTRUCTOR, NOS VA A AYUDAR A CONSTRUIR LAS
  // PROPIEDADES DE LA CLASE
  constructor(name, age, sound, fleas) {
    this.nombre = name;
    this.edad = age;
    this.sonido = sound;
    this.pulgas = fleas;
  };
  // LOS METODOS DE LAS CLASES, LOS AGREGAS FUERA DEL METODO CONSTRUCTOR
  emitirSonido() {
    return `Mi sonido es ${this.sonido}`;
  };

  saludar(nombre) {
    return `Hola, mi nombre es, ${nombre}`;
  };
};

let gato = new Animal("Gato naranja", 3, "Miau", false);
const perro = new Animal("Pitbull", 2, "Guau", true);

console.log(gato.emitirSonido());

console.log(perro.saludar("Laika"));
