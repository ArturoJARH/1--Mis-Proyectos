console.log(" ");
console.log("----------------------------------");
console.log(" ");
console.log("Dia 8 - JavaScript Avanzado");
console.log("De: José Arturo Romo Hermosillo")
console.log(" ");
console.log("----------------------------------");
console.log(" ");

//🧩 Ejercicio 1: función suma
console.log("Ejercicio 1: función suma");

function suma(a, b) {
  return a + b;
}

console.log(suma(3, 5));

console.log(" ");
console.log("----------------------------------");
console.log(" ");

//🧩 Ejercicio 2: número par o impar
console.log("Ejercicio 2: número par o impar");

function esPar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

console.log(esPar(7));

console.log(" ");
console.log("----------------------------------");
console.log(" ");

//🧩 Ejercicio 3: mayor de dos números
console.log("Ejercicio 3: mayor de dos números");

function mayor(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(mayor(10, 4));

console.log(" ");
console.log("----------------------------------");
console.log(" ");

//🧩 Ejercicio 4: saludo personalizado
console.log("Ejercicio 4: saludo personalizado");

function saludar(nombre) {
  return "Hola " + nombre;
}

console.log(saludar("Arturo"));

console.log(" ");
console.log("----------------------------------");
console.log(" ");

//🧩 Ejercicio 5: contar del 1 al N
console.log("Ejercicio 5: contar del 1 al N");

function contarHasta(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

contarHasta(5); 

console.log(" ");
console.log("----------------------------------");
console.log(" ");

//🧠 3️⃣ Mini-reto (Agrega uno más:)
console.log("Mini-reto (Agrega uno más:)");
console.log(" ");

function Promediar(a, b, c, d) {
  return Math.round((a + b + c +d) / 4);
}

console.log("Promedio:", Promediar(9, 9, 9, 10));

console.log("~~~~~~~~~~~~~~~");

materias = [
 { nombre: " Matematicas ", calificación: 10 },
 { nombre: " Programación", calificación: 10 },
 { nombre: " Español ",     calificación: 9 },
 { nombre: " Artes ",       calificación: 9 },
 { nombre: " geografia ",   calificación: 9 }
]

const calificaciones = materias.map(materias => materias.calificación);
const sumaCal = calificaciones.reduce((acc, calificación) => acc + calificación, 0);
const promedioCal = Math.round(sumaCal / materias.length);

console.log("Promedio:", promedioCal);

console.log(" ");
console.log("----------------------------------");
console.log(" ");
console.log("Fin del día 8");
console.log(" ");
console.log("----------------------------------");
console.log(" ");