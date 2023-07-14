// EL POLIMORFISMO(MUCHAS FORMAS), SE APLICA CUANDO HEREDAMOS LOS METODOS DE UNA SUPER CLASE Y LOS SOBREESCRIBMOS.
// ES LA CAPACIDAD DE HACER LO MISMO DE DIFERENTE FORMA
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  };
  emitirSonido() {
    return "Sonido de animal";
  };
};

class Perro extends Animal {
  constructor(nombre) {
    super(nombre);
  };
  emitirSonido() {
    return "Guau, guau!";
  };
};

let ficha = new Perro("Ficha");
console.log(ficha.emitirSonido());