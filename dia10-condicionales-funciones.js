/*
==================================================
 Día 10 - JavaScript Avanzado
 Autor: José Arturo Romo Hermosillo
 Tema:
 Condicionales + funciones
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("               Dia 10 - JavaScript Avanzado               ");
console.log("           De: José Arturo Romo Hermosillo                ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Tema del día: Condicionales + funciones");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Resolver ejercicios de lógica, comparaciones y operaciones\n");

// ==================================================
// Ejercicio 1: Comparación de edades
// ==================================================
console.log("Ejercicio 1: Comparación de edades\n");

function compararEdades(edad1, edad2) {
    if (edad1 > edad2) {
        console.log("La persona 1 es mayor.");
    } else if (edad2 > edad1) {
        console.log("La persona 2 es mayor.");
    } else {
        console.log("Ambas personas tienen la misma edad.");
    }

    const diferencia = Math.abs(edad1 - edad2);
    console.log("Diferencia de edad:", diferencia, "años");

    if (diferencia > 5) {
        console.log("La diferencia es mayor a 5 años.");
    } else {
        console.log("La diferencia es menor o igual a 5 años.");
    }
}

compararEdades(18, 23);

console.log("\n----------------------------------\n");

// ==================================================
// Ejercicio 2: Cálculo de compra
// ==================================================
console.log("Ejercicio 2: Cálculo de compra\n");

function calcularCompra(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    console.log("Total sin descuento: $" + total);

    if (total > 300) {
        const descuento = total * 0.10;
        const totalFinal = total - descuento;
        console.log("Total con descuento: $" + totalFinal);
    } else {
        console.log("No aplica descuento. Total a pagar: $" + total);
    }
}

calcularCompra(120, 3);

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

// ==================================================
// Mini-reto del día: Calculadora básica
// ==================================================
console.log("Mini-reto del día: Calculadora básica\n");

/*
Recibe:
2 números
1 opción:
1 = sumar
2 = restar
3 = multiplicar
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculadora(num1, num2, opcion) {
    if (opcion === 1) return num1 + num2;
    if (opcion === 2) return num1 - num2;
    if (opcion === 3) return num1 * num2;
    return "Opción no válida";
}

rl.question("Escribe el primer número: ", (n1) => {
    rl.question("Escribe el segundo número: ", (n2) => {
        rl.question("Opción (1=sumar, 2=restar, 3=multiplicar): ", (op) => {

            const resultado = calculadora(
                Number(n1),
                Number(n2),
                Number(op)
            );

            console.log("Resultado:", resultado);

            rl.close();

            console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
            console.log("                    Fin del día 10                        ");
            console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
        });
    });
});

