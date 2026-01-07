//CONDICIONALES (if / else)
    console.log("Condicionales y Bucles");

let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//Varias condiciones
console.log("Calificación:");

let calificacion = 7;

if (calificacion >= 9) {
  console.log("Excelente");
} else if (calificacion >= 6) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

//BUCLES (LOOPS)

console.log("Bucles:");

//FOR (el más usado)

console.log("Bucle FOR:");

for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}

//WHILE
console.log("Bucle WHILE:");
let i = 1;

while (i <= 3) {
  console.log("Vuelta", i);
  i++;
}

//DO WHILE
console.log("Bucle DO WHILE:");
let j = 1;

do {
  console.log("Iteración", j);
    j++;
} while (j <= 3);

/*
4. EJERCICIOS (hazlos tú)
📝 Ejercicio 1

Crea una variable numero

Si es positivo → “Número positivo”

Si es negativo → “Número negativo”

Si es 0 → “Es cero”
*/
console.log("Ejercicio 1:");
let numero = 0;

if (numero > 0) {
    console.log("Número positivo");
} else if (numero < 0) {

    console.log("Número negativo");
} else {
    console.log("Es cero");
}

/*
📝 Ejercicio 2

Usa un for para mostrar los números del 1 al 10
*/
console.log("Ejercicio 2:");
console.log("Números del 1 al 10:");
for (let k = 1; k <= 10; k++) {
    console.log(k);
}
/*
📝 Ejercicio 3

Usa un for para mostrar solo los números pares del 1 al 20*/ 
console.log("Ejercicio 3:");

console.log("Números pares del 1 al 20:");
for (let m = 1; m <= 20; m++) {
    if (m % 2 === 0) {
        console.log(m);
    }
}

/*
📝 Ejercicio 4 

Usa un while para contar del 5 al 1 y mostrarlo así:

5
4
3
2
1
*/
console.log("Ejercicio 4:");
console.log("Contando del 5 al 1:");
let n = 5;
while (n >= 1) {
    console.log(n);
    n--;
}
