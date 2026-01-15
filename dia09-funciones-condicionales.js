/*
==================================================
 Día 09 - JavaScript Avanzado
 Autor: José Arturo Romo Hermosillo
 Tema:
 Funciones + condicionales + números enteros
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("               Dia 09 - JavaScript Avanzado               ");
console.log("           De: José Arturo Romo Hermosillo                ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Tema del día: Funciones + condicionales + números enteros");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

// ==================================================
// Bloque 1 - Práctica
// ==================================================
console.log(
  "Bloque 1 - Práctica:\n" +
  "- if / else\n" +
  "- funciones\n" +
  "- operaciones matemáticas\n"
);

// --------------------------------------------------
// Ejercicio 1: Calculadora de descuento
// --------------------------------------------------
console.log("Ejercicio 1: Calculadora de descuento\n");

function calcularPrecioFinal(precio, esEstudiante) {
    let descuento;

    if (esEstudiante) {
        descuento = precio * 0.20;
    } else {
        descuento = precio * 0.05;
    }

    return precio - descuento;
}

console.log(calcularPrecioFinal(100, true));
console.log(calcularPrecioFinal(100, false));

console.log("\n----------------------------------\n");

// --------------------------------------------------
// Ejercicio 2: Clasificación de edad
// --------------------------------------------------
console.log("Ejercicio 2: Clasificación de edad\n");

function clasificarEdad(edad) {
    if (edad < 18) {
        return "Menor de edad";
    } else if (edad <= 59) {
        return "Adulto";
    } else {
        return "Adulto mayor";
    }
}

console.log(clasificarEdad(18));

console.log("\n----------------------------------\n");

// --------------------------------------------------
// Ejercicio 3: Verificador de número
// --------------------------------------------------
console.log("Ejercicio 3: Verificador de número\n");

function verificarNumero(numero) {
    let tipoNumero;
    let parImpar;

    if (numero > 0) {
        tipoNumero = "Positivo";
    } else if (numero < 0) {
        tipoNumero = "Negativo";
    } else {
        return "El número es 0";
    }

    if (numero % 2 === 0) {
        parImpar = "Par";
    } else {
        parImpar = "Impar";
    }

    return `El número es ${tipoNumero} y ${parImpar}`;
}

console.log(verificarNumero(7));

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

// ==================================================
// Mini reto del día: Calculadora de puntos
// ==================================================
console.log("Mini reto: Calculadora de puntos\n");

function calcularPuntos(num1, num2) {
    let puntos = Math.floor(num1 + num2);

    if (puntos > 0) {
        return "Puntos válidos: " + puntos;
    } else {
        return "Sin puntos";
    }
}

console.log(calcularPuntos(7.1, 3.2));

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("                    Fin del día 09                        ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

