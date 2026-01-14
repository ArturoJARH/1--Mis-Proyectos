
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("               Dia 9 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

/*
🔹 Tema del día
Condicionales + funciones
*/
console.log("Tema del día: Condicionales + funciones");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");


//Resolver 2–3 ejercicios sencillos (lógica, comparaciones, operaciones)

console.log("Resolver 2-3 ejercicios sencillos (lógica, comparaciones, operaciones)\n");



console.log("\n----------------------------------\n");

/*

🧠 Ejercicio 1: Comparación de edades
Una persona tiene 18 años y otra tiene 23 años.

¿Qué debes hacer?
Comparar ambas edades.

Determinar:
Quién es mayor.
Cuántos años de diferencia hay entre ellos.
Decidir si la diferencia es mayor o menor a 5 años.

👉 Lógica involucrada: comparaciones (mayor que, menor que) y resta.

*/
console.log("Ejercicio 1: Comparación de edades\n");

let edadPersona1 = 18;
let edadPersona2 = 23;

if (edadPersona1 > edadPersona2) {
    console.log("La persona 1 es mayor.");
} else if (edadPersona2 > edadPersona1) {
    console.log("La persona 2 es mayor.");
} else {
    console.log("Ambas personas tienen la misma edad.");
}

let diferenciaEdad = Math.abs(edadPersona1 - edadPersona2);
console.log("Diferencia de edad: " + diferenciaEdad + " años.");

if (diferenciaEdad > 5) {
    console.log("La diferencia de edad es mayor a 5 años.");
} else {
    console.log("La diferencia de edad es menor o igual a 5 años.");
}

console.log("\n----------------------------------\n");

/*

🧮 Ejercicio 2: Cálculo de compra

En una tienda:
Compras 3 productos de $120 cada uno.
La tienda da 10% de descuento si el total supera los $300.

¿Qué debes hacer?
Calcular el total sin descuento.
Verificar si aplica el descuento.
Calcular el total final a pagar.

👉 Lógica involucrada: multiplicación, comparación y porcentaje.

*/

console.log("Ejercicio 2: Cálculo de compra\n");

let produto1 = 120;
let produto2 = 120;
let produto3 = 120;

let totalSinDescuento = produto1 + produto2 + produto3;
console.log("Total sin descuento: $" + totalSinDescuento);

if (totalSinDescuento > 300) {
    let descuento = totalSinDescuento * 0.10;
    let totalConDescuento = totalSinDescuento - descuento;
    console.log("Total con descuento: $" + totalConDescuento);
} else {
    console.log("No aplica descuento. Total a pagar: $" + totalSinDescuento);
}


console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

/*
🎯 Mini-reto del día:

Diseña un programa que reciba 2 números y una opción
(1 = sumar, 2 = restar, 3 = multiplicar)
y muestre el resultado según la opción elegida.
(Solo piensa la lógica, no el código si no quieres)
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escribe el primer número: ", (num1) => {
    rl.question("Escribe el segundo número: ", (num2) => {
        rl.question(
            "Elige una opción (1 = sumar, 2 = restar, 3 = multiplicar): ",
            (opcion) => {

                let numero1 = Number(num1);
                let numero2 = Number(num2);
                let resultado;

                if (opcion == 1) {
                    resultado = numero1 + numero2;
                    console.log("Resultado de la suma:", resultado);

                } else if (opcion == 2) {
                    resultado = numero1 - numero2;
                    console.log("Resultado de la resta:", resultado);

                } else if (opcion == 3) {
                    resultado = numero1 * numero2;
                    console.log("Resultado de la multiplicación:", resultado);

                } else {
                    console.log("Opción no válida");
                }

                rl.close();
                console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

                console.log("                    Fin del día 9                         ");

                console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
            }
        );
    });
});








