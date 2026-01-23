/*
==================================================
 Día 15 - JavaScript Avanzado
 Autor: José Arturo Romo Hermosillo
 Tema:
 Condicionales y bucles
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
console.log("               Día 15 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Tema del día: Condicionales y bucles");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

/*
✨ Mini-reto:

Crear un programa que muestre los números del 1 al 20 y diga cuales son los pares y cuales son los impares.
*/

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} es un número par`);
    } else {
        console.log(`${i} es un número impar`);
    }
}

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
console.log("                    Fin del día 15                        ");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
