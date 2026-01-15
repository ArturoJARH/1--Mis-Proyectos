/*
==================================================
 Día 05 - Lógica, Operadores y Funciones
 Autor: José Arturo Romo Hermosillo
 Descripción:
 Uso de else if, operadores lógicos
 y funciones básicas en JavaScript.
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("               Dia 05 - JavaScript Básico                 ");
console.log("           De: José Arturo Romo Hermosillo                ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

// =============================
// Bloque 1: else if y lógica
// =============================
console.log("Bloque 1: else if y lógica\n");

let calificacion = 8;

if (calificacion >= 9) {
    console.log("Excelente");
} else if (calificacion >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

console.log("\n---------------------------\n");

// =============================
// Bloque 2: Operadores lógicos
// =============================
console.log("Bloque 2: Operadores lógicos\n");

// && (AND)
console.log("Prueba con && (y)");

let edad = 20;
let tieneINE = true;

if (edad >= 18 && tieneINE) {
    console.log("Puedes votar");
} else {
    console.log("No puedes votar");
}

console.log("\n---------------------------\n");

// || (OR)
console.log("Prueba con || (o)");

let edad2 = 20;
let tieneINE2 = true;

if (edad2 >= 18 || tieneINE2) {
    console.log("Puedes votar");
} else {
    console.log("No puedes votar");
}

console.log("\n---------------------------\n");

// ! (NOT)
console.log("Prueba con ! (no)");

let esMayor = false;
let tieneINE3 = true;

if (!esMayor && tieneINE3) {
    console.log("No puedes votar");
} else {
    console.log("Puedes votar");
}

console.log("\n---------------------------\n");

// =============================
// Bloque 3: Introducción a funciones
// =============================
console.log("Bloque 3: Introducción a funciones\n");

function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar("Arturo");

console.log("\n---------------------------\n");

// Función con return
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return "Mayor de edad";
    } else {
        return "Menor de edad";
    }
}

console.log(esMayorDeEdad(17));

console.log("\n---------------------------\n");

// =============================
// Bloque 4: Mini-reto
// =============================
console.log("Bloque 4: Mini-reto\n");

/*
Crea una función que:
- reciba dos números
- regrese cuál es mayor
- o si son iguales
*/

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        return `El número ${num1} es mayor`;
    } else if (num2 > num1) {
        return `El número ${num2} es mayor`;
    } else {
        return "Los números son iguales";
    }
}

console.log(compararNumeros(17, 15));

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("                    Fin del día 05                         ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
