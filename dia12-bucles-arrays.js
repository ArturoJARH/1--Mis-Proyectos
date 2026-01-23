/*
==================================================
 Día 12 - JavaScript Avanzado
 Autor: José Arturo Romo Hermosillo
 Tema:
 Bucles (for, while, do…while) y arrays
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
console.log("               Día 12 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Tema del día: Bucles (for, while, do…while) y arrays.");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

/*
Bucles (for, while, do…while) y arrays
Recorrer listas de datos (arrays) usando distintos tipos de bucles.
Hacer operaciones matemáticas o condiciones dentro de los bucles.
*/
console.log("\n----------------------------------\n");

console.log("Ejemplo 1: Recorrer un array con for\n");
const numeros = [1, 2, 3, 4, 5];
// For recorre cada índice del array
for (let i = 0; i < numeros.length; i++) {
    console.log(`Número en la posición ${i}: ${numeros[i]}`);
}

console.log("\n----------------------------------\n");

console.log("Ejemplo 2: Sumar números pares en un array con for\n");
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        suma += numeros[i];
    }
}
console.log(`La suma de los números pares es: ${suma}`);

console.log("\n----------------------------------\n");

console.log("Ejemplo 3: Usar while para recorrer un array\n");
let index = 0;
while (index < numeros.length) {
    console.log(`Número en la posición ${index}: ${numeros[index]}`);
    index++;
}

console.log("\n----------------------------------\n");

console.log("Ejemplo 4: Usar do...while para sumar números hasta un límite\n");
let total = 0;
let contador = 0;
do {
    total += numeros[contador];
    contador++;
} while (contador < numeros.length && total < 10);
console.log(`La suma total hasta el límite es: ${total}`);

console.log("\n----------------------------------\n");

console.log("Ejemplo 5: Usar for...of para recorrer un array\n");
for (const num of numeros) {
    console.log(`Número: ${num}`);
}

console.log("\n----------------------------------\n");

/*
Mini-reto del día:
Recorrer un array de números y sumar todos los pares.
Contar cuántos números pares hay en el array.
Extra: Mostrar los números que sean mayores a 10.
*/

console.log("Mini-reto del día: Sumar pares y mostrar mayores a 10\n");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Filtrar solo los pares
const pares = array.filter(n => n % 2 === 0);

// Sumar los pares usando reduce
const sumaPares = array.reduce((acumulador, n) => (n % 2 === 0 ? acumulador + n : acumulador), 0);

// Contar pares usando la variable pares ya filtrada
const cantidadPares = pares.length;

// Filtrar números mayores a 10
const mayores_a_10 = array.filter(n => n > 10);

console.log(`Los pares son: ${pares}`);
console.log(`La suma de los pares es: ${sumaPares}`);
console.log(`Cantidad de pares: ${cantidadPares}`);
console.log(`Números mayores a 10: ${mayores_a_10}`);

console.log("\n----------------------------------\n");

/*
Ejercicios extra (opcional)
Recorrer un array de nombres y mostrar solo los que tengan más de 5 letras.
Multiplicar todos los elementos de un array por 2 y mostrarlos en consola.
Combinar condiciones dentro de un bucle (por ejemplo: si el número es par y mayor a 5, haz algo).
*/

console.log("Ejercicios extra (opcional)\n");

const nombres = ["Ana", "Bernardo", "Cecilia", "David", "Elena", "Fernando", "Gabriela"];
const nombres_mas_de_5_letras = nombres.filter(nombre => nombre.length > 5);
console.log(`Nombres con más de 5 letras: ${nombres_mas_de_5_letras}`);

const numeros_multiplicados = numeros.map(n => n * 2);
console.log(`Números multiplicados por 2: ${numeros_multiplicados}`);

console.log("Números pares y mayores a 5:");
for (const num of numeros) {
    if (num % 2 === 0 && num > 5) {
        console.log(num);
    }
}

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
console.log("                    Fin del día 12                        ");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
