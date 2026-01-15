/*
==================================================
 Día 07 - Condicionales y Lógica
 Autor: José Arturo Romo Hermosillo
 Descripción:
 Uso de if / else, else if
 y operadores lógicos en JavaScript.
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("               Dia 07 - JavaScript Avanzado               ");
console.log("           De: José Arturo Romo Hermosillo                ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

// =============================
// Tema del día
// =============================
console.log("Tema del día: Condicionales + lógica\n");

// =============================
// Bloque 1: Condicionales
// =============================
console.log("Bloque 1: Condicionales\n");

let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

console.log("\n---------------------------\n");

// =============================
// Bloque 2: Operadores lógicos
// =============================
console.log("Bloque 2: Operadores lógicos\n");

/*
Operadores:
&&  (y)
||  (o)
!   (no)
*/

let tieneMembresia = true;
let esMayor = edad >= 18;

if (esMayor && tieneMembresia) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}

console.log("\n---------------------------\n");

// =============================
// Bloque 3: Mini-reto
// =============================
console.log("Bloque 3: Mini-reto\n");

/*
Crea un programa que:
- tenga un usuario con edad y membresía
- mayor de 18 Y membresía → acceso
- si no → acceso denegado
*/

const usuario = {
    edad: 16,
    tieneMembresia: false
};

if (usuario.edad >= 18 && usuario.tieneMembresia) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("                    Fin del día 07                         ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
