

const nombre = prompt("¿Cuál es tu nombre?");
const edad = Number(prompt("¿Cuántos años tienes?"));

let numero1 = Number(prompt("Elegí un número:"));
let numero2 = Number(prompt("Elegí otro número:"));

// Concatenación de strings

const saludo = "Hola " + nombre + ", arracando esta nueva aventura de JavaScript!";
const informacion = "Mi nombre es " + nombre + " y tengo " + edad + " años.";

// Operaciones matemáticas

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero2 !== 0 ? numero1 / numero2 : "No se puede dividir por cero";

// Mostrar resultados en consola

console.log(saludo);
console.log(informacion);

console.log("Resultado de la suma: " + suma);
console.log("Resultado de la resta: " + resta);
console.log("Resultado de la multiplicación: " + multiplicacion);
console.log("Resultado de la división: " + division);

alert(`
Hola ${nombre}
Tienes ${edad} años.

Resultados matemáticos:
Suma: ${suma}
Resta: ${resta}
Multiplicación: ${multiplicacion}
División: ${division}
`);
