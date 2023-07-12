// SINTAXIS BASICA DE UN PROTOTIPO/ FUNCION CONSTRUCTORA
function Animal(nombre, color) {
  this.nombre = nombre;
  this.color = color;
  this.sonidoAnimal = function sonidoAnimal() {
    return `Hola, estoy emitiendo un sonido generico`;
  };
};

// DEFINICION: UN OBJETO EN JS, PUEDE SER LA INSTANCIA DE UN PROTOTIPO O DE UNA CLASE
const jirafa = new Animal("Jirafa", "Amarillo")
console.log(jirafa);

// CON LA NOTACION DEL PUNTO, ACCEDEMOS A LOS VALORES DE LOS ATRIBUTOS Y LOS METODOS
console.log(jirafa.sonidoAnimal());
