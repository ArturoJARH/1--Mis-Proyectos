
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("               Dia 9 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

/*
🔹 Tema del día
Funciones + condicionales + números enteros en JavaScript
*/
console.log("Tema del día: Funciones + condicionales + números enteros en JavaScript");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");


/*
🔹 Bloque 1 – Práctica 
Resolver 2–3 ejercicios usando:
if / else
funciones
operaciones matemáticas
*/

console.log("Bloque 1 - Práctica: \n\n Resolver 2-3 ejercicios usando:\n if / else,\n funciones,\n operaciones matemáticas\n");

/*
🧠 Ejercicio 1: Calculadora de descuento

Qué hace:
Una función recibe:
el precio de un producto
si el cliente es estudiante o no
Si es estudiante, aplica 20% de descuento
Si no, aplica 5% de descuento
Devuelve el precio final

Usa:
if / else → para saber si es estudiante
operaciones matemáticas → porcentaje
función → para encapsular el cálculo

*/
console.log("Ejercicio 1: Calculadora de descuento\n");

function Producto(precio, esEstudiante) {

    let descuento;

    if (esEstudiante) {
        descuento = precio * 0.2;
    } else {
        descuento = precio * 0.05;
    }

    return precio - descuento;

}

console.log(Producto(100, true));
console.log(Producto(100, false));

console.log("\n----------------------------------\n");

/*
🧠 Ejercicio 2: Clasificación de edad

Qué hace:
Una función recibe la edad de una persona
Según la edad, devuelve:
“Menor de edad” (menos de 18)
“Adulto” (18 a 59)
“Adulto mayor” (60 o más)

Usa:
if / else if / else
operaciones matemáticas simples (comparaciones)
función que retorne el mensaje

*/

console.log("Ejercicio 2: Clasificación de edad\n");

function clasificarEdad(edad) {

    let clasificado;

    if (edad < 18) {
        clasificado = "Menor de edad";
    } else if (edad >= 18 && edad <= 59) {
        clasificado = "Adulto";
    } else {
        clasificado = "Adulto mayor";
    }

    return clasificado;

}

console.log(clasificarEdad(18));

console.log("\n----------------------------------\n");

/*
🧠 Ejercicio 3: Verificador de número

Qué hace:
Una función recibe un número

Determina:
si es positivo, negativo o cero
y además si es par o impar

Usa:
if / else
operación módulo (%)
función con varios if

*/

console.log("Ejercicio 3: Verificador de número\n");

function Verificador(numero) {

    if (numero > 0) {
        let PARoIMPAR;
        if (numero % 2 === 0) {
            PARoIMPAR = "El numero es Par";
        } else {
            PARoIMPAR = "El numero es Impar";
        }

        return ("El numero es Positivo y " + PARoIMPAR)

    } else if (numero < 0) {
        let PARoIMPAR;
        if (numero % 2 === 0) {
            PARoIMPAR = "El numero es Par";
        } else {
            PARoIMPAR = "El numero es Impar";
        }

        return ("El numero es Negativo y " + PARoIMPAR);

    } else {
        return "El numero es 0"
    }

}

console.log(Verificador(7));

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");


/*
🧠 Mini reto del día 
Mini reto: “Calculadora de puntos”

📌 Instrucciones
Crea una función que:
Reciba dos números
Los sume
NO permita decimales

Regrese:
"Puntos válidos: X" si el resultado es mayor a 0
"Sin puntos" si es 0 o menor

📌 Reglas
Usa Math.floor() o Math.round()
Usa if / else
Debe ser una función

*/

console.log("Mini reto: Calculadora de puntos\n");


function calcularPuntos(num1, num2) {
    let puntos = Math.floor(num1 + num2);
    if (puntos > 0) {
        return "Puntos válidos: " + puntos;
    } else {
        return "Sin puntos";
    }
}

console.log(calcularPuntos(7.1, 3.2));

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("                    Fin del día 9                         ");

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
