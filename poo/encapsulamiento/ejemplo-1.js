class Estudiante {
  constructor(nombre, materias, direccion, numeroParaCalcularPrecioDeExamen, nombreDeUsuario) {
    this.nombre = nombre;
    this.materias = materias;
    this._direccion = direccion;
    this._numeroParaCalcularPrecioDeExamen = numeroParaCalcularPrecioDeExamen;
    this._nombreDeUsuario;
  };

  // GETTERS, SE USAN PARA OBTENER EL VALOR DE UNA PROPIEDAD PRIVADA Y APLICAR LOGICA EN ELLA, DE MODO QUE NO LA PRESENTEMOS NUNCA DE FORMA DIRECTA, SI NO, TRANSFORMADA/PROCESADA

  // NO DEBEMOS HACER ESTO
  get obtenerLaDireccion() {
    return this._direccion;
  };


  // TENEMOS QUE HACERLO DE ESTA FORMA
  get obtenerPrecioParaPresentarExamen() {
    const precio = this._numeroParaCalcularPrecioDeExamen * 2.5;
    return `Estimado ${this.nombre}, usted tiene que pagar ${precio} para presentar su examen`;
  };

  // SI QUEREMOS MODIFICAR EL VALOR DE UNA PROPIEDAD PRIVADA, USAMOS SETTERS
  set validarNombreDeUsuario(nuevoNombreDeUsuario) {
    if (nuevoNombreDeUsuario === "usuarioMaldito" || nuevoNombreDeUsuario === "Spiderman") {
      console.error("Nombre de usuario no valido. Introduzca uno apropiado...");
      return;
    } else {
      this._nombreDeUsuario = nuevoNombreDeUsuario;
      console.log("Bienvenido " + nuevoNombreDeUsuario);
      return;
    };
  };
};

const emilio = new Estudiante("Emilio", ["Historia", "Matematicas", "Fisica"], "Moliere, 32", 100);

console.log("Direccion de emilio: " + emilio.obtenerLaDireccion);
console.log(emilio.obtenerPrecioParaPresentarExamen);

emilio.validarNombreDeUsuario = "usuarioBueno";