/*
==================================================
 Día 16 - JavaScript Avanzado
 Autor: José Arturo Romo Hermosillo
 Tema:
 Funciones en JavaScript
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
console.log("               Día 16 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Tema del día: Funciones en JavaScript");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

/*
✨ Mini-reto:

Crea una función que reciba dos números y regrese la suma, resta, multiplicación y división.
*/

function operaciones(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Los valores deben ser números";
    }

    return {
        suma: num1 + num2,
        resta: num1 - num2,
        multiplicacion: num1 * num2,
        division: num2 !== 0 ? num1 / num2 : "No se puede dividir por cero"
    };
}

const resultado = operaciones(10, 5);
console.log("Suma:", resultado.suma);
console.log("Resta:", resultado.resta);
console.log("Multiplicación:", resultado.multiplicacion);
console.log("División:", resultado.division);

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
console.log("                    Fin del día 16                        ");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");