/**
 * CRUD
 * Crear -> Create
 * Leer -> Read
 * Modificar -> Update
 * Eliminar -> Delete
 * Pila -> De manera contextual es EL ÚLTIMO valor EN ENTRAR ES EL PRIMERO EN SALIR o al reves
 * 
 */

'use strict';

const alumnos = [
  {
    id: 1,
    calificaciones: [10, 5, 7, 8, 6],
    grados: {1: 'aprobado', 2: 'reprobado', 3: 'aprobado'},
    status: { conducta: {
      grado1: [''], grado2: ['jajaaja', 'jejej'], grado3: []
    }},
  }, 
  {
    id: 2,
    calificaciones: [5, 4, 7, 8, 6],
    grados: {1: 'aprobado', 2: 'reprobado', 3: ''},
    status: { conducta: {
      grado1: ['jaja'], grado2: ['queja 1', 'queja 2'], grado3: []
    }},
  }
];


for (let index = 0; index < alumnos.length; index++) {
  const alumno = alumnos[index];
  const grados = alumno.status.conducta['grado2']
  console.log(grados);
  for (let index = 0; index < grados.length; index++) {
    const element = grados[index];
    console.log(element);
  }
}

// console.log('Terminaron los objetos');