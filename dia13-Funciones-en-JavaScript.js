/*
==================================================
 Día 13 - JavaScript Avanzado
 Autor: José Arturo Romo Hermosillo
 Tema:
 Funciones en JavaScript
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
console.log("               Día 13 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Tema del día: Funciones en JavaScript");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

/*
Funciones
Parámetros
Retorno de valores
Reutilizar código
*/

console.log("\n----------------------------------\n");
console.log("Ejemplo 1: Función simple\n");

function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

saludar("José Arturo");

console.log("\n----------------------------------\n");
console.log("Ejemplo 2: Función con retorno\n");

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(5, 7);
console.log(`La suma de 5 y 7 es: ${resultado}`);

console.log("\n----------------------------------\n");
console.log("Ejemplo 3: Área de un rectángulo\n");

function areaRectangulo(base, altura) {
    return base * altura;
}

const area = areaRectangulo(4, 6);
console.log(`El área del rectángulo es: ${area}`);

console.log("\n----------------------------------\n");

/*
Mini-reto del día
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularOperacion(num1, num2, opcion) {
    let resultado;

    switch (opcion.trim()) {
        case "1":
            resultado = num1 + num2;
            break;
        case "2":
            resultado = num1 - num2;
            break;
        case "3":
            resultado = num1 * num2;
            break;
        default:
            return "Opción no válida.";
    }

    return Math.abs(resultado);
}

rl.question("Ingresa el primer número: ", (input1) => {
    const numero1 = parseFloat(input1);

    rl.question("Ingresa el segundo número: ", (input2) => {
        const numero2 = parseFloat(input2);

        if (isNaN(numero1) || isNaN(numero2)) {
            console.log("Debes ingresar números válidos.");
            rl.close();
            return;
        }

        rl.question(
            "Elige una opción (1 = suma, 2 = resta, 3 = multiplicación): ",
            (opcion) => {
                const resultadoFinal = calcularOperacion(
                    numero1,
                    numero2,
                    opcion
                );

                if (typeof resultadoFinal === "string") {
                    console.log(resultadoFinal);
                } else {
                    console.log(`El resultado es: ${resultadoFinal}`);
                }

                console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
                console.log("                    Fin del día 13                        ");
                console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

                rl.close();
            }
        );
    });
});
