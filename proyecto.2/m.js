const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question + " ", (answer) => {
            resolve(answer);
        });
    });
}

let username = "";
let intentos = 6;
const palabrasecreta = ["paralelepipedo", "periodico", "salon"];
const aligealazar = Math.floor(Math.random() * palabrasecreta.length);
const elegido = palabrasecreta[aligealazar]; 

let tablero = Array(elegido.length).fill("_");

let letrasIngresadas = [];

function mostrarEstado() {
    console.log("\n-----------------------------------");
    console.log("Palabra actual: " + tablero.join(" "));
    console.log("Intentos restantes: " + intentos);
    
   
    let registro = "";
    for (let i = 0; i < letrasIngresadas.length; i++) {
        registro += letrasIngresadas[i] + " ";
    }
    console.log("Letras intentadas: " + registro);
    console.log("-----------------------------------");
}

function verificarLetra(letra) {
    let palabra = letra.toLowerCase();

    
    if (letrasIngresadas.includes(palabra)) {
        console.log("⚠️ Ya intentaste la letra '" + palabra + "'. Prueba con otra.");
        return; 
    }
    
    letrasIngresadas.push(palabra);

    if (elegido.includes(palabra)) {
        console.log("¡Bien! La letra '" + palabra + "' es correcta.");
        for (let i = 0; i < elegido.length; i++) {
            if (elegido[i] === palabra) {
                tablero[i] = palabra;
            }
        }
    } else {
        intentos--;
        console.log("No es correcta. Te quedan " + intentos + " intentos.");
    }

    if (intentos === 1) {
        console.log("¡Cuidado! Te queda un solo intento.");
    }
}

async function startGame() {
    while (true) {
        username = await getUserInput("¿Cuál es tu nombre?");
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(username)) break;
        console.log("❌ Error: Ingresa un nombre válido (solo letras).");
    }

    console.log("\n¡Bienvenida " + username + " al ahorcado! ¡Comencemos!");

    while (intentos > 0 && tablero.includes("_")) {
        mostrarEstado();
        let letraIngresada = await getUserInput("Introduce una letra:");

        if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]$/.test(letraIngresada)) {
            console.log("⚠️ Entrada no válida. Ingresa solo UNA letra.");
            continue;
        }

        verificarLetra(letraIngresada);
    }

    if (!tablero.includes("_")) {
        mostrarEstado();
        console.log("\n¡GANASTE, " + username + "! Adivinaste la palabra: " + elegido);
    } else {
        console.log("\nGAME OVER. La palabra era: " + elegido);
    }

    rl.close();
}

startGame();
