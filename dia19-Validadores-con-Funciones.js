/*
==================================================
 Día 19 - JavaScript Avanzado
 Autor: José Arturo Romo Hermosillo
 Tema:
 Funciones y validaciones 
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
console.log("               Día 19 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Tema del día: Funciones y validaciones");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

/*
Mini reto de programación :

crea un programa que:
Pida nombre y edad

Valide que:
El nombre no esté vacío
La edad sea un número válido (>0)

Muestre un mensaje personalizado según la edad:
Menor de 18
18–29
30 o más

Extra (opcional): usa funciones para cada validación.
*/

// validador.js - Ejecutar con: node validador.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para validar el nombre
function validarNombre(nombre) {
    if (nombre.trim() === '') {
        return { valido: false, error: 'El nombre no puede estar vacío' };
    }
    return { valido: true };
}

// Función para validar la edad
function validarEdad(edad) {
    const edadNumero = Number(edad);

    if (isNaN(edadNumero)) {
        return { valido: false, error: 'La edad debe ser un número válido' };
    }

    if (edadNumero <= 0) {
        return { valido: false, error: 'La edad debe ser mayor a 0' };
    }

    return { valido: true, valor: edadNumero };
}

// Función para obtener mensaje según la edad
function obtenerMensajePorEdad(nombre, edad) {
    if (edad < 18) {
        return `¡Hola ${nombre}! Eres menor de edad. ¡Disfruta mientras puedas!`;
    } else if (edad >= 18 && edad <= 29) {
        return `¡Hola ${nombre}! Estás en la flor de la vida. ¡No te creas ya estas viejito!`;
    } else {
        return `¡Hola ${nombre}! Tienes más de 30 años. ¡Ya casi te petateas!`;
    }
}

// Programa principal
function iniciarPrograma() {
    console.log('\n=== VALIDADOR DE DATOS ===\n');

    rl.question('Ingresa tu nombre: ', (nombre) => {

        // Validar nombre
        const validacionNombre = validarNombre(nombre);
        if (!validacionNombre.valido) {
            console.log(`\n❌ Error: ${validacionNombre.error}`);
            iniciarPrograma();
            return;
        }

        rl.question('Ingresa tu edad: ', (edad) => {

            // Validar edad
            const validacionEdad = validarEdad(edad);
            if (!validacionEdad.valido) {
                console.log(`\n❌ Error: ${validacionEdad.error}`);
                iniciarPrograma();
                return;
            }

            // Mostrar mensaje personalizado
            const mensaje = obtenerMensajePorEdad(nombre, validacionEdad.valor);
            console.log(`\n✅ ${mensaje}\n`);

            console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
            console.log("                    Fin del día 19                        ");
            console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
            rl.close();
        });
    });
}

// Ejecutar programa
iniciarPrograma();
