console.log(" ");
console.log("----------------------------------");
console.log(" ");
console.log("Dia 7 - JavaScript Avanzado");
console.log("De: José Arturo Romo Hermosillo")
console.log(" ");
console.log("----------------------------------");
console.log(" ");

//🔹 Tema del día: Condicionales + lógica
console.log("Tema del día: Condicionales + lógica");

console.log(" ");
console.log("----------------------------------");
console.log(" ");
/*
if / else
else if
*/
console.log("Condicionales:");
let edad = 20;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

console.log(" ");
console.log("----------------------------------");
console.log(" ");

/*
operadores:
&& (y)
|| (o)
! (no)
*/
console.log("Operadores lógicos:");

let tieneMembresia = true;
let esMayor = edad >= 18;

if (esMayor && tieneMembresia) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}

console.log(" ");
console.log("----------------------------------");
console.log(" ");

/*
🎯 Mini-reto
Crea un programa que:
    tenga un usuario con:
        edad
        si tiene membresía (true / false)
    Muestre:
        “Acceso permitido”
        o “Acceso denegado”
    Ejemplo de lógica:
        mayor de 18 Y membresía → acceso
        si no → denegado
*/
console.log("Mini-reto:");
let usuario = {
    edad: 16,             // si cumple con la edad y la membrecia te deja pasar 
    tieneMembresia: false // pero si solo cumples cun una o ninguna no te deja 
};

if (usuario.edad >= 18 && usuario.tieneMembresia === true) {
    console.log("Acceso permitido");
}  else {
    console.log("Acceso denegado");
}

console.log(" ");
console.log("----------------------------------");
console.log(" ");
console.log("Fin del día 7");
console.log(" ");
console.log("----------------------------------");
console.log(" ");