
// Solicitud de datos al usuario
const nombre = prompt("¿Cuál es tu nombre?");
const edad = Number(prompt("¿Cuántos años tienes?"));

// Solicitud de dos números
const numero1 = Number(prompt("Ingresa el primer número:"));
const numero2 = Number(prompt("Ingresa el segundo número:"));

// Concatenación de strings
const saludo = "Hola " + nombre + ", ¡bienvenido a mi primer script interactivo!";

const informacion = "Tu nombre es " + nombre + " y tienes " + edad + " años.";

// Operaciones matemáticas
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero2 !== 0 ? numero1 / numero2 : "No se puede dividir por cero";

// Mostrar resultados en consola
console.log(saludo);
console.log(informacion);

console.log("Primer número: " + numero1);
console.log("Segundo número: " + numero2);

console.log("Resultado de la suma: " + suma);
console.log("Resultado de la resta: " + resta);
console.log("Resultado de la multiplicación: " + multiplicacion);
console.log("Resultado de la división: " + division);

// Mostrar mensaje mediante alert
alert(
    "Hola " + nombre + "!\n" +
    "Tienes " + edad + " años.\n\n" +
    "Resultados matemáticos:\n" +
    "Suma: " + suma + "\n" +
    "Resta: " + resta + "\n" +
    "Multiplicación: " + multiplicacion + "\n" +
    "División: " + division
);
