console.log(" ");
console.log("----------------------------------");
console.log(" ");
console.log("Dia 6 - JavaScript Avanzado");
console.log("De: José Arturo Romo Hermosillo")
console.log(" ");
console.log("----------------------------------");
console.log(" ");


/*
1: Funciones
    arrow functions
    parámetros y return
*/
// Funciones
console.log("Funciones:");

function suma(a, b) {
    return a + b;
}
console.log("Suma de 2 y 3 es:", suma(2, 3));
console.log(" ");

// Arrow Functions
console.log("Arrow Functions:");

const resta = (a, b) => a - b;
console.log("Resta de 5 y 2 es:", resta(5, 2));


console.log(" ");
console.log("----------------------------------");
console.log(" ");


/*
2: Arrays
    map
    filter
    reduce
*/
// Arrays
console.log("Arrays:");
const numeros = [1, 2, 3, 4, 5];
console.log("Array de números:", numeros);
console.log(" ");

// map
console.log("map:");
const cuadrados = numeros.map(num => num * num);
console.log("Cuadrados de los números:", cuadrados);
console.log(" ");

// filter
console.log("filter:");
const pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);
console.log(" ");

// reduce
console.log("reduce:");
const sumaTotal = numeros.reduce((acc, num) => acc + num, 0);
console.log("Suma total de los números:", sumaTotal);


console.log(" ");
console.log("----------------------------------");
console.log(" ");


/*
3: Objetos
    acceder a propiedades
    modificar valores
*/
// Objetos
console.log("Objetos:");
const persona = {
    nombre: "Juan",
    edad: 30
};
console.log("Objeto persona:", persona);
console.log(" ");

// Acceder a propiedades
console.log("Acceder a propiedades:");
console.log("Nombre de la persona:", persona.nombre);
console.log("Edad de la persona:", persona.edad);
console.log(" ");

// Modificar valores
console.log("Modificar valores:");
persona.edad = 31;
console.log("Edad modificada de la persona:", persona.edad);

console.log(" ");
console.log("----------------------------------");
console.log(" ");


/*
🎯 Mini-reto (importante)
Crea en JS:
Un arreglo de objetos tipo:
usuarios = [
 { nombre: "Ana", edad: 22 },
 { nombre: "Luis", edad: 30 }
]
Usa:
map para obtener solo nombres
filter para mayores de 25
una función que calcule el promedio de edades
*/
console.log("Mini-reto:");

usuarios = [
 { nombre: " Ana ", edad: 22 },
 { nombre: " Luis ", edad: 45 },
 { nombre: " José ", edad: 17 },
 { nombre: " Arturo ", edad: 18 },
 { nombre: " Angel ", edad: 29 },
 { nombre: " Leo ", edad: 15 }
]

const nombres = usuarios.map(usuario => usuario.nombre);
console.log("Nombres:", nombres);
console.log(" ");

const mayores = usuarios.filter(usuario => usuario.edad >= 25 );
console.log("Mayores:", mayores);
console.log(" ");

const edades = usuarios.map(usuario => usuario.edad);
const sumaEdades = edades.reduce((acc, edad) => acc + edad, 0);
const promedioEdades = Math.round(sumaEdades / usuarios.length);
console.log("Promedio de edades:", promedioEdades);


console.log(" ");
console.log("----------------------------------");
console.log(" ");
console.log("Fin del día 6");
console.log(" ");
console.log("----------------------------------");
console.log(" ");