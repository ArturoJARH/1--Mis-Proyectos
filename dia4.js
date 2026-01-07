console.log("---------------------------");
console.log("Curso de JavaScript - Día 4");
console.log("---------------------------");
//Bloque 1: Repaso base
console.log("Bloque 1: Repaso base");
console.log(" ");
//Variables
console.log("Variables:");
let edads = 18;
const nombres = "Arturo";
console.log(" ");
//Tipos de datos
console.log("Tipos de datos:");
let numeros = 10;        // number
let texto = "Hola";    // string
let activo = true;     // boolean

console.log("---------------------------");

//Bloque 2: Comparaciones
console.log("Bloque 2: Comparaciones");

console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true
console.log(5 !== 3);  // true

console.log("---------------------------");

//Bloque 3: Condicionales if / else
console.log("Bloque 3: Condicionales if / else");

let edade = 18;

if (edade >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

console.log("---------------------------");
//Bloque 4: Ejercicios guiados
console.log("Bloque 4: Ejercicios guiados");
console.log(" ");
//Ejercicio 1: Par o impar
console.log("Ejercicio 1: Par o impar");

let numero = 7;

if (numero % 2 === 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}

console.log(" ");
//Ejercicio 2: Comparar dos números
console.log("Ejercicio 2: Comparar dos números");

let a = 10;
let b = 20;

if (a > b) {
  console.log("a es mayor");
} else {
  console.log("b es mayor");
}

console.log(" ");
//Ejercicio 3: Edad y mensaje
console.log("Ejercicio 3: Edad y mensaje");

let edad = 17;

if (edad >= 18) {
  console.log("Puedes entrar");
} else {
  console.log("No puedes entrar");
}
console.log("---------------------------");

/*
🔹 Bloque 5: Mini-reto

Crea un programa que:

tenga un nombre

tenga una edad

imprima:t

“Hola Arturo, eres mayor de edad”

o “Hola Arturo, eres menor de edad”

💡 Tip: usa variables, no valores directos.
*/
console.log("Bloque 5: Mini-reto");

let nombre = "Arturo";
let edadd = 18;

if (edadd >= 18) {
    console.log(`Hola ${nombre}, eres mayor de edad `);
    } else {
        console.log(`Hola ${nombre}, eres menor de edad`);
    }
console.log("---------------------------");