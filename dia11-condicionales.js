// Día 11 - Condicionales y comparaciones en JavaScript

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("               Dia 11 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");



/*
🔹 Tema del día:
Condicionales (if / else)
Comparaciones (> < >= <= == !=)
*/

console.log("Tema del día: Condicionales y comparaciones");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

//🔹 Practica con ejercicios sencillos de lógica (decisiones del día a día).

console.log("Practica con ejercicios sencillos de lógica (decisiones del día a día).\n");

/*
🎯 Mini-reto del día 

Piensa un programa que:
Pida 2 números
Compare cuál es mayor

Muestre un mensaje diciendo:
cuál es mayor
o si son iguales

Si algún número no es válido, mostrar:
“Entrada no válida”
Si son iguales, decirlo claramente
Evitar números decimales (solo enteros)
*/

console.log("Mini-reto del día: Comparar dos números\n");

function ejecutarReto() {

    rl.question("Escribe el primer número: ", (res1) => {
        rl.question("Escribe el segundo número: ", (res2) => {

            rl.question("Escribe que quieres saber de tus numeros (mayor y menor: 1, menor igual y mayor igual: 2, igual o diferente: 3): ", (resop) => {
                // Intentamos convertir a números enteros
                let num1 = Number(res1);
                let num2 = Number(res2);
                let opcion = Number(resop);
                // Verificamos si es un número, si es entero y si no está vacío
                if (Number.isInteger(num1) && Number.isInteger(num2) && (opcion === 1 || opcion === 2 || opcion === 3)) {

                    if (opcion === 1) {

                        console.log("\n----------------------------------\n");

                        console.log("Comparación de los números: con mayor que (>)\n");
                        if (num1 > num2) {
                            console.log("El número " + num1 + " es el mayor");
                        } else if (num2 > num1) {
                            console.log("El número " + num2 + " es el mayor");
                        } else {
                            console.log("Ambos números son iguales");
                        }

                        console.log("\n----------------------------------\n");

                        console.log("Comparación de los números: con menor que (<)\n");
                        if (num1 < num2) {
                            console.log("El número " + num1 + " es el menor");
                        } else if (num2 < num1) {
                            console.log("El número " + num2 + " es el menor");
                        } else {
                            console.log("Ambos números son iguales");
                        }

                        console.log("\n----------------------------------\n");

                        console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

                        console.log("                    Fin del día 11                         ");

                        console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

                        rl.close();

                    } else if (opcion === 2) {

                        console.log("\n----------------------------------\n");

                        console.log("Comparación de los números: con mayor o igual que (>=)\n");
                        if (num1 >= num2) {
                            console.log(`El número ${num1} es mayor o igual que ${num2}`);
                        } else {
                            console.log(`El número ${num2} es mayor o igual que ${num1}`);
                        }

                        console.log("\n----------------------------------\n");

                        if (num1 <= num2) {
                            console.log(`El número ${num1} es menor o igual que ${num2}`);
                        } else {
                            console.log(`El número ${num2} es menor o igual que ${num1}`);
                        }
                        console.log("\n----------------------------------\n");

                        console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

                        console.log("                    Fin del día 11                         ");

                        console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

                        rl.close();

                    } else if (opcion === 3) {

                        console.log("\n----------------------------------\n");

                        console.log("Comparación de los números: con igual que (==)\n");
                        if (num1 === num2) {
                            console.log("Los números son iguales");
                        } else {
                            console.log("Los números son diferentes");
                        }

                        console.log("\n----------------------------------\n");

                        console.log("Comparación de los números: con diferente que (!=)\n");
                        if (num1 !== num2) {
                            console.log("Los números son diferentes");
                        } else {
                            console.log("Los números son iguales");
                        }

                        console.log("\n----------------------------------\n");

                        console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

                        console.log("                    Fin del día 11                         ");

                        console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

                        rl.close();

                    }

                } else {
                    console.log("❌ Error: Por favor, introduce un número válido.");
                    ejecutarReto();
                }
            });
        });
    });
}
ejecutarReto();