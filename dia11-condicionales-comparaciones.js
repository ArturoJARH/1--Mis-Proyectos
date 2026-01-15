/*
==================================================
 Día 11 - JavaScript Avanzado
 Autor: José Arturo Romo Hermosillo
 Tema:
 Condicionales y comparaciones
==================================================
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("               Dia 11 - JavaScript Avanzado               ");
console.log("           De: José Arturo Romo Hermosillo                ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Tema del día: Condicionales y comparaciones");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Práctica con ejercicios de lógica y decisiones.\n");

// ==================================================
// Mini-reto del día: Comparar dos números
// ==================================================
console.log("Mini-reto del día: Comparar dos números\n");

function esEntero(numero) {
    return Number.isInteger(numero);
}

function compararNumeros(num1, num2, opcion) {

    console.log("\n----------------------------------\n");

    if (opcion === 1) {
        console.log("Comparación usando > y <\n");

        if (num1 > num2) {
            console.log(`${num1} es mayor que ${num2}`);
        } else if (num2 > num1) {
            console.log(`${num2} es mayor que ${num1}`);
        } else {
            console.log("Ambos números son iguales");
        }

        if (num1 < num2) {
            console.log(`${num1} es menor que ${num2}`);
        } else if (num2 < num1) {
            console.log(`${num2} es menor que ${num1}`);
        } else {
            console.log("Ambos números son iguales");
        }

    } else if (opcion === 2) {
        console.log("Comparación usando >= y <=\n");

        console.log(
            num1 >= num2
                ? `${num1} es mayor o igual que ${num2}`
                : `${num2} es mayor o igual que ${num1}`
        );

        console.log(
            num1 <= num2
                ? `${num1} es menor o igual que ${num2}`
                : `${num2} es menor o igual que ${num1}`
        );

    } else if (opcion === 3) {
        console.log("Comparación usando == y !=\n");

        if (num1 === num2) {
            console.log("Los números son iguales");
        } else {
            console.log("Los números son diferentes");
        }
    }

    console.log("\n----------------------------------\n");
}

function ejecutarReto() {

    rl.question("Escribe el primer número entero: ", (res1) => {
        rl.question("Escribe el segundo número entero: ", (res2) => {
            rl.question(
                "Opción (1: > < | 2: >= <= | 3: == !=): ",
                (resOp) => {

                    const num1 = Number(res1);
                    const num2 = Number(res2);
                    const opcion = Number(resOp);

                    if (
                        esEntero(num1) &&
                        esEntero(num2) &&
                        [1, 2, 3].includes(opcion)
                    ) {
                        compararNumeros(num1, num2, opcion);

                        console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
                        console.log("                    Fin del día 11                        ");
                        console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

                        rl.close();
                    } else {
                        console.log("❌ Entrada no válida. Usa solo números enteros.");
                        ejecutarReto();
                    }
                }
            );
        });
    });
}

ejecutarReto();
