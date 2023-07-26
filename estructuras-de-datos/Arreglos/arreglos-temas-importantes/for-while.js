'use strict'

const numerosA = [10, 5, 7, 8, 6, [], [ [{}] ], 5];

console.log('numerosA[0]', numerosA[100], numerosA[0], '5' - 2, '5' + 2, parseInt('5') + 2);
console.log('ITERACIONES FOR ');
for (let index = 0; index < numerosA.length; index++) {
  const element = numerosA[index];
  
  console.log('Valor actual de contador ', index);
  console.log('valor del arreglo.-      ', element);
}

console.log('ITERACIONES WHILE ');
let contador = 0;
while (contador < numerosA.length) {
  console.log('Valor actual de contador ', contador);
  console.log('valor del arreglo.-      ', numerosA[contador]);
  contador++;
}

console.log('Terminaron los arreglos');

console.log('Comenzaron los objetos');

console.log('Mostramos el valor de un atributo');
