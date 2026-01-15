/*
==================================================
 Día 08 - Funciones y Práctica
 Autor: José Arturo Romo Hermosillo
 Descripción:
 Práctica de funciones, lógica básica,
 ciclos y un mini-reto con promedios.
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("               Dia 08 - JavaScript Avanzado               ");
console.log("           De: José Arturo Romo Hermosillo                ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

// =============================
// Ejercicio 1: Función suma
// =============================
console.log("Ejercicio 1: Función suma\n");

function suma(a, b) {
    return a + b;
}

console.log("Resultado:", suma(3, 5));

console.log("\n---------------------------\n");

// =============================
// Ejercicio 2: Número par o impar
// =============================
console.log("Ejercicio 2: Número par o impar\n");

function esPar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

console.log("Resultado:", esPar(7));

console.log("\n---------------------------\n");

// =============================
// Ejercicio 3: Mayor de dos números
// =============================
console.log("Ejercicio 3: Mayor de dos números\n");

function mayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log("Mayor:", mayor(10, 4));

console.log("\n---------------------------\n");

// =============================
// Ejercicio 4: Saludo personalizado
// =============================
console.log("Ejercicio 4: Saludo personalizado\n");

function saludar(nombre) {
    return "Hola " + nombre;
}

console.log(saludar("Arturo"));

console.log("\n---------------------------\n");

// =============================
// Ejercicio 5: Contar del 1 al N
// =============================
console.log("Ejercicio 5: Contar del 1 al N\n");

function contarHasta(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

contarHasta(5);

console.log("\n---------------------------\n");

// =============================
// Mini-reto
// =============================
console.log("Mini-reto\n");

// Promedio de 4 números
function promediar(a, b, c, d) {
    return Math.round((a + b + c + d) / 4);
}

console.log("Promedio (4 números):", promediar(9, 9, 9, 10));

console.log("\n---------------------------\n");

// Promedio usando arrays y reduce
const materias = [
    { nombre: "Matemáticas", calificacion: 10 },
    { nombre: "Programación", calificacion: 10 },
    { nombre: "Español", calificacion: 9 },
    { nombre: "Artes", calificacion: 9 },
    { nombre: "Geografía", calificacion: 9 }
];

const calificaciones = materias.map(materia => materia.calificacion);
const sumaCal = calificaciones.reduce((acc, cal) => acc + cal, 0);
const promedioCal = Math.round(sumaCal / materias.length);

console.log("Promedio de materias:", promedioCal);

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("                    Fin del día 08                         ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
