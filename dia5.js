console.log("----------------------------------");
console.log("Dia 5 - JavaScript Avanzado");
console.log("De: José Arturo Romo Hermosillo")
console.log("----------------------------------");
console.log(" ");

//Bloque 1: else if y lógica
console.log("Bloque 1: else if y logica");
console.log(" ");

let calificacion = 8;

if (calificacion >= 9) {
    console.log("Excelente");
} else if (calificacion >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

console.log(" ");
console.log("----------------------------------");
console.log(" ");
//Bloque 2: Operadores lógicos
console.log("Bloque 2: Operadores lógicos");
console.log(" ");

//Prueba con: && (y)
console.log("prueba con && (y)");
console.log(" ");

let edad = 20;
let tieneINE = true;

if (edad >= 18 && tieneINE) {
    console.log("Puedes votar");
} else {
    console.log("No puedes votar");
}
console.log(" ");

//Prueba con: || (o)
console.log("prueba con || (o)");
console.log(" ");

let edadd = 20;
let tieneINEE = true;

if (edadd >= 18 || tieneINEE) {
    console.log("Puedes votar");
} else {
    console.log("No puedes votar");
}
console.log(" ");

//Prueba con: ! (no)
console.log("prueba con ! (no)");
console.log(" ");

let esMayor = false;
let tieneINEi = true;

if (esMayor && tieneINEi) {
    console.log("No puedes votar");
} else {
    console.log("Puedes votar");
}

console.log(" ");
console.log("----------------------------------");
console.log(" ");
//Bloque 3: Introducción a funciones
console.log("Bloque 3: Introducción a funciones");
console.log(" ");

function saludar(nombre) {
  console.log("Hola " + nombre);
}

saludar("Arturo");


//Luego:
console.log("Luego:");
console.log(" ");

function essMayor(edad) {
  if (edad >= 18) {
    return "Mayor de edad";
  } else {
    return "Menor de edad";
  }
}

console.log(essMayor(17));

console.log(" ");
console.log("----------------------------------");
console.log(" ");
/*

Bloque 4: Reto práctico

Crea una función que:
reciba dos números
regrese:
cuál es mayor
o si son iguales

*/
console.log("Bloque 4: Reto práctico");
console.log(" ");

function DosNumeros(Numero1, Numero2) {
  if (Numero1 > Numero2) {
    return "El número " + Numero1 + " es Mayor";

  } else if (Numero1 < Numero2) {
    return "El número " + Numero2 + " es Mayor";
 
  } 
  else { 
    return "Los numeros son Iguales";  
  }  
}  
console.log(DosNumeros(17, 15));+

console.log(" ");
console.log("----------------------------------");
console.log(" ");
//Fin del día 5
console.log("Fin del día 5");
