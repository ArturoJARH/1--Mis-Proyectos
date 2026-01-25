/*
==================================================
 Día 20 - JavaScript Avanzado
 Autor: José Arturo Romo Hermosillo
 Tema:
 Funciones con retorno de objetos y control de flujo
==================================================
*/

console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
console.log("               Día 20 - JavaScript Avanzado              ");
console.log("           De: José Arturo Romo Hermosillo              ");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

console.log("Tema del día: Funciones con retorno de objetos y control de flujo");
console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

/*
Mini reto:

Crea una función que:
Reciba nombre y edad
Valide que el nombre no esté vacío y la edad sea un número válido
Regrese un mensaje personalizado según si es menor o mayor de edad

💡 Extra opcional:
Usa return
Usa console.log limpio y ordenado

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para validar el nombre
function validarNombre(nombre) {
    if (nombre.trim() === '') {
        return {
            valido: false,
            error: 'El nombre no puede estar vacío'
        };
    }
    return { valido: true };
}

// Función para validar la edad
function validarEdad(edad) {
    const edadNumero = Number(edad);

    if (isNaN(edadNumero)) {
        return {
            valido: false,
            error: 'La edad debe ser un número válido'
        };
    }

    if (edadNumero <= 0) {
        return {
            valido: false,
            error: 'La edad debe ser mayor a 0'
        };
    }

    return {
        valido: true,
        valor: edadNumero
    };
}

// Función para obtener mensaje según la edad
function obtenerMensajePorEdad(nombre, edad) {
    if (edad < 18) {
        return {
            tipo: "menor",
            mensaje: `¡Hola ${nombre}! Eres menor de edad.`
        };
    } else {
        return {
            tipo: "mayor",
            mensaje: `¡Hola ${nombre}! Eres mayor de edad.`
        };
    }
}


// Función principal para procesar los datos
function procesarDatos(nombre, edad) {
    const validacionNombre = validarNombre(nombre);
    if (!validacionNombre.valido) return validacionNombre;

    const validacionEdad = validarEdad(edad);
    if (!validacionEdad.valido) return validacionEdad;

    const resultado = obtenerMensajePorEdad(nombre, validacionEdad.valor);

    return {
        valido: true,
        resultado
    };
}

// Programa principal
function iniciarPrograma() {
    console.log('\n=== VALIDADOR DE DATOS ===\n');

    rl.question('Ingresa tu nombre: ', (nombre) => {
        rl.question('Ingresa tu edad: ', (edad) => {

            const resultadoFinal = procesarDatos(nombre, edad);

            if (!resultadoFinal.valido) {
                console.log(`\n❌ Error: ${resultadoFinal.error}\n`);
                iniciarPrograma();
                return;
            }

            console.log(`\n✅ ${resultadoFinal.resultado.mensaje}\n`);

            console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");
            console.log("                    Fin del día 20                        ");
            console.log("\n|>>>>>>>>>>>>>>>>>>>>>>>>>>>>·<<<<<<<<<<<<<<<<<<<<<<<<<<<<|\n");

            rl.close();
        });
    });
}
iniciarPrograma();
