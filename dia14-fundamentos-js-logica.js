/*
==================================================
 Día 14 - JavaScript Avanzado
 Autor: José Arturo Romo Hermosillo
 Tema:
 Fundamentos de JavaScript / lógica
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
console.log("               Día 14 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Tema del día: Fundamentos de JavaScript / lógica");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

/*
✨ Mini-reto:

Crear un programa que pida 3 números y muestre cuál es el mayor.
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa el primer número: ", (input1) => {
    const numero1 = parseFloat(input1);

    rl.question("Ingresa el segundo número: ", (input2) => {
        const numero2 = parseFloat(input2);

        rl.question("Ingresa el tercer número: ", (input3) => {
            const numero3 = parseFloat(input3);

            if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
                console.log("Debes ingresar números válidos.");
                rl.close();
                return;
            }

            const mayor = Math.max(numero1, numero2, numero3);
            console.log(`El número mayor es: ${mayor}`);
            console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
            console.log("                    Fin del día 14                        ");
            console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
            rl.close();

        });
    });
});

