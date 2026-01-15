/*
==================================================
 Día 03 - Condicionales y Bucles
 Autor: José Arturo Romo Hermosillo
 Descripción:
 Uso de condicionales (if / else) y bucles
 (for, while, do while) en JavaScript.
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("               Dia 03 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Condicionales y Bucles");

console.log("\n-----------------------------\n");

// CONDICIONALES (if / else)
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

console.log("\n-----------------------------\n");

// Varias condiciones
console.log("Calificación:");

let calificacion = 7;

if (calificacion >= 9) {
    console.log("Excelente");
} else if (calificacion >= 6) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

console.log("\n-----------------------------\n");

// BUCLES (LOOPS)
console.log("Bucles:");

console.log("\n-----------------------------\n");

// FOR
console.log("Bucle FOR:");

for (let i = 1; i <= 5; i++) {
    console.log("Número:", i);
}

console.log("\n-----------------------------\n");

// WHILE
console.log("Bucle WHILE:");

let i = 1;
while (i <= 3) {
    console.log("Vuelta", i);
    i++;
}

console.log("\n-----------------------------\n");

// DO WHILE
console.log("Bucle DO WHILE:");

let j = 1;
do {
    console.log("Iteración", j);
    j++;
} while (j <= 3);

console.log("\n-----------------------------\n");

// EJERCICIOS

// Ejercicio 1
console.log("Ejercicio 1:");

let numero = 0;

if (numero > 0) {
    console.log("Número positivo");
} else if (numero < 0) {
    console.log("Número negativo");
} else {
    console.log("Es cero");
}

console.log("\n-----------------------------\n");

// Ejercicio 2
console.log("Ejercicio 2:");
console.log("Números del 1 al 10:");

for (let k = 1; k <= 10; k++) {
    console.log(k);
}

console.log("\n-----------------------------\n");

// Ejercicio 3
console.log("Ejercicio 3:");
console.log("Números pares del 1 al 20:");

for (let m = 1; m <= 20; m++) {
    if (m % 2 === 0) {
        console.log(m);
    }
}

console.log("\n-----------------------------\n");

// Ejercicio 4
console.log("Ejercicio 4:");
console.log("Contando del 5 al 1:");

let n = 5;
while (n >= 1) {
    console.log(n);
    n--;
}

console.log("\n-----------------------------\n");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("                    Fin del día 11                         ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
