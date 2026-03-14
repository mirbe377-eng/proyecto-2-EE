let username = "";

function getUserInput(question) {
    return prompt(question);
}
let intentos = 6;
const palabrasecreta = "paralelepipedo";
let tablero = Array(palabrasecreta.length).fill("_");
function nombre(nombre){
  alert("Bienvenida " + nombre + " al ahorcado. Tienes 6 intentos. ¡Comencemos!");
  alert("Palabra actual: " + tablero.join(" "));
}

function verificarLetra(letra) {
    let palabra = letra.toLowerCase();

    if (palabrasecreta.includes(palabra) && letra != "") {
        alert("¡Bien! La letra '" + palabra + "' es correcta.");
       
        for (let i = 0; i < palabrasecreta.length; i++) {
            if (palabrasecreta[i] === palabra) {
                tablero[i] = palabra;
            }
        }
       
        alert("Progreso: " + tablero.join(" "));
       
        if (!tablero.includes("_")) {
               alert("¡Ganaste! Adivinaste la palabra: " + palabrasecreta);
        }

    } else if((intentos <= 6 && intentos >= 1) && letra != "") {
        intentos--;
        alert("No es correcta. Te quedan " + intentos + " intentos.");
    }

    if(intentos === 1 && letra != "" ){
        alert("¡Cuidado! Te queda un solo intento.");
    } else if(intentos === 0 && letra != "" ){
        alert("Game Over. La palabra era: " + palabrasecreta);
    }
}

function startGame(){
    username = getUserInput("What is your name?");
   
    if (username) {
        nombre(username);

        while (intentos > 0 && tablero.includes("_")) {
            let letraIngresada = getUserInput("Introduce una letra:");
            if (letraIngresada === null) break;
            verificarLetra(letraIngresada);
        }
    }
}

startGame();




