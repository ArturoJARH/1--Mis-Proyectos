/*
==================================================
 Día 17 - JavaScript Avanzado
 Autor: José Arturo Romo Hermosillo
 Tema:
 Arreglos (arrays)
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
console.log("               Día 17 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Tema del día: Arreglos (arrays)");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

/*
✨ Mini-reto:

Crea un arreglo con 5 números y muestra: el mayor, el menor y el promedio.
*/


const readline = require("readline"); const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirNumeros() {
    rl.question("Por favor, ingresa 5 números separados por comas: ", (input) => {
        const numeros = input.split(",").map(num => parseFloat(num.trim()));

        if (numeros.length !== 5 || numeros.some(isNaN)) {
            console.log("Error: Debes ingresar exactamente 5 números válidos.");
            pedirNumeros();
        } else {
            const mayor = Math.max(...numeros);
            const menor = Math.min(...numeros);
            const promedio = (
                numeros.reduce((acc, val) => acc + val, 0) / numeros.length
            ).toFixed(2);

            console.log("Mayor:", mayor);
            console.log("Menor:", menor);
            console.log("Promedio:", promedio);
            rl.close();
            console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
            console.log("                    Fin del día 17                        ");
            console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
        }
    });
}

pedirNumeros();            