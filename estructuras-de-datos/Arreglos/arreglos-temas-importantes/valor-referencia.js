"use strict";

// Original
const arr1 = [1, 2, 3, 4, 5];
// Copia a modificar
const arr2 = arr1.map((valor) => {
  console.log(valor);
  return valor;
});

const arr3 = arr1;

arr2[0] = 9;
arr3[0] = 3;
console.log("arr1 ", arr1.sort((a, b) => b + a));
console.log("arr2 ", arr2.sort((a, b) => b + a ));
console.log("arr3 ", arr3.sort((a, b) => b + a ));

// Original
const objetoOriginal = { nombre: "Daniel", apellido: "Silverio" };
// Copia a modificar
const objetoCopia = objetoOriginal;

objetoCopia.nombre = 'Jose';
console.log("objetoOriginal ", objetoOriginal);
console.log("objetoCopia ", objetoCopia);

