/*
---------------------------------------
Problema 1: Suma de 1 a 100
---------------------------------------
*/

// Crea un ciclo que sume todos los números de 1 a 100 [1,100] y guarda la suma en la variable suma
let suma = 0;

// Aquí va tu ciclo


console.log('La suma de 1 a 100 es', suma);

/*
---------------------------------------
Problema 2: Palabra rara
---------------------------------------
*/

const palabraRara = 'auifnerwiufwneufiwnfdskfncsdjfksdnfuwsdinsjdkasndfueaifdnafjks';

// Utiliza un ciclo para revisar cuántas veces sale la letra f en la palabraRara
// Guarda el valor en la variable cuentaRara
let cuentaRara = 0;

// Aquí va tu ciclo



console.log('La letra f sale', cuentaRara, 'veces en palabraRara');

/*
---------------------------------------
Problema 3: Suma de impares
---------------------------------------
*/

const arreglo = [5, 19, 72, 2, 3, 6, 10, 12, 9, 2, 4];

// Suma todos los números impares en el arreglo y guarda la suma en sumaArreglo
let sumaArreglo = 0;

// Aquí va tu ciclo
for (let x of arreglo) {
  sumaArreglo += x % 2 === 1 ? x : 0;
}


console.log('La suma de los impares es', sumaArreglo);

/*
Aquí se revisa si los problemas dan el resultado esperado
*/
const pruebas = () => {

  const nombrePrueba = ['suma de 1 a 100', 'palabra rara', 'suma de impares'];

  const tests = [
    suma === 5050,
    cuentaRara === palabraRara.split('f').length - 1,
    sumaArreglo === arreglo.reduce((acc, curr) => {
      if (curr % 2 === 1) acc += curr;
      return acc;
    })
  ];

  console.log('\n--------------------------');
  console.log('Pruebas');
  console.log('--------------------------');

  for (let i = 1; i <= tests.length; i++) {
    console.log(`Prueba ${i} (${nombrePrueba[i - 1]}): ${tests[i - 1] ? '✔️' : '❌'}`);
  }
}

pruebas();

