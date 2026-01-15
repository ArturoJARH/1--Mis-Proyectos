/*
==================================================
 Día 04 - Repaso y Condicionales
 Autor: José Arturo Romo Hermosillo
 Descripción:
 Repaso de variables, tipos de datos,
 comparaciones y condicionales en JavaScript.
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("               Dia 04 - JavaScript Básico                 ");
console.log("           De: José Arturo Romo Hermosillo                ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

// =============================
// Bloque 1: Repaso base
// =============================
console.log("Bloque 1: Repaso base\n");

// Variables
console.log("Variables:");
let edad = 18;
const nombre = "Arturo";

console.log("Edad:", edad);
console.log("Nombre:", nombre);

console.log("\n---------------------------\n");

// Tipos de datos
console.log("Tipos de datos:");

let numero = 10;      // number
let texto = "Hola";   // string
let activo = true;    // boolean

console.log(numero);
console.log(texto);
console.log(activo);

console.log("\n---------------------------\n");

// =============================
// Bloque 2: Comparaciones
// =============================
console.log("Bloque 2: Comparaciones");

console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true
console.log(5 !== 3);  // true

console.log("\n---------------------------\n");

// =============================
// Bloque 3: Condicionales
// =============================
console.log("Bloque 3: Condicionales if / else");

let edadPersona = 18;

if (edadPersona >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

console.log("\n---------------------------\n");

// =============================
// Bloque 4: Ejercicios guiados
// =============================
console.log("Bloque 4: Ejercicios guiados\n");

// Ejercicio 1: Par o impar
console.log("Ejercicio 1: Par o impar");

let numeroPar = 7;

if (numeroPar % 2 === 0) {
    console.log("Es par");
} else {
    console.log("Es impar");
}

console.log("\n---------------------------\n");

// Ejercicio 2: Comparar dos números
console.log("Ejercicio 2: Comparar dos números");

let a = 10;
let b = 20;

if (a > b) {
    console.log("a es mayor");
} else {
    console.log("b es mayor");
}

console.log("\n---------------------------\n");

// Ejercicio 3: Edad y mensaje
console.log("Ejercicio 3: Edad y mensaje");

let edadIngreso = 17;

if (edadIngreso >= 18) {
    console.log("Puedes entrar");
} else {
    console.log("No puedes entrar");
}

console.log("\n---------------------------\n");

// =============================
// Bloque 5: Mini-reto
// =============================
console.log("Bloque 5: Mini-reto");

let nombreUsuario = "Arturo";
let edadUsuario = 18;

if (edadUsuario >= 18) {
    console.log(`Hola ${nombreUsuario}, eres mayor de edad`);
} else {
    console.log(`Hola ${nombreUsuario}, eres menor de edad`);
}

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("                    Fin del día 04                         ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
