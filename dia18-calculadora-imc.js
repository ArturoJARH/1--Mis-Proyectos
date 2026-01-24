/*
==================================================
 Día 18 - JavaScript Avanzado
 Autor: José Arturo Romo Hermosillo
 Tema:
 Condicionales + validación de datos
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
console.log("               Día 18 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Tema del día: Condicionales + validación de datos");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

/*
🔹 Mini reto:

Crea un programa que:
Pida edad, peso y estatura
Calcule el IMC
Muestre si la persona está: bajo peso, normal, sobrepeso u obesidad
Valide que no se ingresen números negativos
*/

// Fórmula del IMC: peso (kg) / estatura (m)^2 

const readline = require("readline"); 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirNumeros() {
    rl.question("Por favor, ingresa tu edad: ", (input) => {
        const edad = parseInt(input.trim());
        if (isNaN(edad) || edad < 0) {
            console.log("Error: Debes ingresar una edad válida (número no negativo).");
            return pedirNumeros();
        }

        rl.question("Por favor, ingresa tu peso (kg): ", (input) => {
            const peso = parseFloat(input.trim());
            if (isNaN(peso) || peso < 0) {
                console.log("Error: Debes ingresar un peso válido (número no negativo).");
                return pedirNumeros();
            }

            rl.question("Por favor, ingresa tu estatura (m): ", (input) => {
                const estatura = parseFloat(input.trim());
                if (isNaN(estatura) || estatura <= 0) {
                    console.log("Error: Debes ingresar una estatura válida mayor que 0.");
                    return pedirNumeros();
                }

                const imc = peso / (estatura ** 2);
                let categoria;

                if (imc < 18.5) {
                    categoria = "Bajo peso";
                } else if (imc < 25) {
                    categoria = "Normal";
                } else if (imc < 30) {
                    categoria = "Sobrepeso";
                } else {
                    categoria = "Obesidad";
                }

                console.log(`\nTu IMC es: ${imc.toFixed(2)} (${categoria})`);
                console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
                console.log("                    Fin del día 19                        ");
                console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
                rl.close();
            });
        });
    });
}



pedirNumeros();
