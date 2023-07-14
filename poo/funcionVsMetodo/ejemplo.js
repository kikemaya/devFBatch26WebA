// UNA FUNCION SE DECLARA FUERA DE UNA CLASE

// UNA FUNCION, LE PERTENECE AL PROYECTO
function soyUnaFuncion(params) {
  // return code...
}

// LA FUNCION, SE INVOCA POR SU NOMBRE Y ()
soyUnaFuncion()

// UN METODO, SE DECLARA DENTRO DE UNA CLASE, SIN USAR 
// LA PALABRA RESERVADA "function" AL PRINCIPIO

// UN METODO, LE PERTENECE A UNA CLASE
class SoyUnaClase {
  constructor() {

  }

  soyUnMetodo() {
    // return code...   
  }
}

// EL METODO, SE INVOCA A TRAVES DE UN OBJETO CON LA NOTACION DE .
const objeto = new SoyUnaClase()
objeto.soyUnMetodo()


