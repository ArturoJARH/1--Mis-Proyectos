/*
==================================================
 Día 06 - Funciones, Arrays y Objetos
 Autor: José Arturo Romo Hermosillo
 Descripción:
 Uso de funciones tradicionales y arrow,
 métodos de arrays (map, filter, reduce)
 y objetos en JavaScript.
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("               Dia 06 - JavaScript Avanzado               ");
console.log("           De: José Arturo Romo Hermosillo                ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

// =============================
// Bloque 1: Funciones
// =============================
console.log("Bloque 1: Funciones\n");

// Función tradicional
function suma(a, b) {
    return a + b;
}
console.log("Suma de 2 y 3 es:", suma(2, 3));

console.log("\n---------------------------\n");

// Arrow Function
console.log("Arrow Functions:");

const resta = (a, b) => a - b;
console.log("Resta de 5 y 2 es:", resta(5, 2));

console.log("\n---------------------------\n");

// =============================
// Bloque 2: Arrays
// =============================
console.log("Bloque 2: Arrays\n");

const numeros = [1, 2, 3, 4, 5];
console.log("Array de números:", numeros);

console.log("\n---------------------------\n");

// map
console.log("map:");

const cuadrados = numeros.map(num => num * num);
console.log("Cuadrados:", cuadrados);

console.log("\n---------------------------\n");

// filter
console.log("filter:");

const pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);

console.log("\n---------------------------\n");

// reduce
console.log("reduce:");

const sumaTotal = numeros.reduce((acc, num) => acc + num, 0);
console.log("Suma total:", sumaTotal);

console.log("\n---------------------------\n");

// =============================
// Bloque 3: Objetos
// =============================
console.log("Bloque 3: Objetos\n");

const persona = {
    nombre: "Juan",
    edad: 30
};

console.log("Objeto persona:", persona);

// Acceder a propiedades
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);

// Modificar valores
persona.edad = 31;
console.log("Edad modificada:", persona.edad);

console.log("\n---------------------------\n");

// =============================
// Bloque 4: Mini-reto
// =============================
console.log("Bloque 4: Mini-reto\n");

/*
Crea:
- un arreglo de objetos usuarios
- map para obtener nombres
- filter para mayores de 25
- función que calcule promedio de edades
*/

const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 45 },
    { nombre: "José", edad: 17 },
    { nombre: "Arturo", edad: 18 },
    { nombre: "Angel", edad: 29 },
    { nombre: "Leo", edad: 15 }
];

// map: obtener nombres
const nombres = usuarios.map(usuario => usuario.nombre);
console.log("Nombres:", nombres);

// filter: mayores de 25
const mayores = usuarios.filter(usuario => usuario.edad >= 25);
console.log("Mayores de 25:", mayores);

// promedio de edades
function promedioEdades(lista) {
    const suma = lista.reduce((acc, usuario) => acc + usuario.edad, 0);
    return Math.round(suma / lista.length);
}

console.log("Promedio de edades:", promedioEdades(usuarios));

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("                    Fin del día 06                         ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
