/*
---------------------------------------
Problema 1: Edad par
---------------------------------------
*/

// Crea una variable que tenga tu edad como valor
const edad = 13;

// Crea una variable booleana con la condicion que revise si la edad es par
// Hint: recuerda que el operador % regresa el residuo 
const esPar = edad % 2 == 0 ;


if (esPar) {
  console.log('La edad es par')
} else {
  console.log('La edad es impar')
}


/*
---------------------------------------
Problema 2: Temperatura
---------------------------------------
*/

// Crea una variable que señale una temperatura
const temperatura = 27;


// Cambia el valor de la variable mensajeTemperatura dependiendo de si está caliente, agradable o frío.
// La temperatura es caliente si es mayor de 25 grados. (25, inf)
// La temperatura es agradable entre 15 y 25 grados. [15, 25]
// La temperatura es fría si es menor de 15 grados. (-inf, 15]

let mensajeTemperatura = '';

// Si es caliente
if (temperatura >= 25 ) {
  mensajeTemperatura = 'caliente';

  // Si es frío
} else if (temperatura <=15) {
  mensajeTemperatura = 'frío';

  // Si es agradable
} else {
  mensajeTemperatura = 'agradable';
}

console.log('La temperatura es', temperatura)
console.log('El día está', mensajeTemperatura);

/*
---------------------------------------
Problema 3: Número grande
---------------------------------------
*/

// Crea tres variables (a, b, c) y ponles cualquier número
const a = 5;
const b = 10;
const c = 15;

// Guarda en la variable numeroGrande el valor más grande entre a, b y c.
let numeroGrande;
//&&
if(c>b && b>a  ){
  numeroGrande = c
}
else if (a>b && b>c){
 numeroGrande=a
 
  
}
else if(b>a && a>c){
 numeroGrande=b
}
/*
Aquí se revisa si los problemas dan el resultado esperado
*/
const pruebas = () => {

  const nombrePrueba = ['edad par', 'temperatura', 'número grande'];

  const tempCheck = {
    ['frío']: temperatura < 15,
    ['caliente']: temperatura > 25,
    ['agradable']: temperatura >= 15 && temperatura <= 25
  }

  const tests = [
    esPar === (edad % 2 == 0),
    tempCheck.hasOwnProperty(mensajeTemperatura) && tempCheck[mensajeTemperatura],
    numeroGrande === Math.max(a, b, c)
  ];

  console.log('\n--------------------------');
  console.log('Pruebas');
  console.log('--------------------------');

  for (let i = 1; i <= tests.length; i++) {
    console.log(`Prueba ${i} (${nombrePrueba[i - 1]}): ${tests[i - 1] ? '✔️' : '❌'}`);
  }
}

pruebas();