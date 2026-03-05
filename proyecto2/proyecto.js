let intentos = 6;
const palabrasecreta = "paralelepipedo";
let tablero = Array(palabrasecreta.length).fill("_");

function nombre(nombre){
  console.log("Bienvenida " + nombre + " al ahorcado. Tienes 6 intentos. ¡Comencemos!");
  console.log("Palabra actual: " + tablero.join(" "));
}

function verificarLetra(letra) {
    let palabra = letra.toLowerCase();

    if (palabrasecreta.includes(palabra) && letra != "") {
        console.log("¡Bien! La letra '" + palabra + "' es correcta.");
        
        for (let i = 0; i < palabrasecreta.length; i++) {
            if (palabrasecreta[i] === palabra) {
                tablero[i] = palabra;
            }
        }
        
        console.log("Progreso: " + tablero.join(" "));
        
        if (!tablero.includes("_")) {
               console.log("¡Ganaste! Adivinaste la palabra: " + palabrasecreta)
        }

    } else if((intentos <= 6 && intentos >= 1) && letra != "") {
        intentos--;
        console.log("No es correcta. Te quedan " + intentos + " intentos.");
    }

    if(intentos === 1 && letra != "" ){
        alert("¡Cuidado! Te queda un solo intento.");
    } else if(intentos === 0 && letra != "" ){
        alert("Game Over. La palabra era: " + palabrasecreta);
    }
}


nombre("");
verificarLetra(""); 
verificarLetra("");
verificarLetra("");
verificarLetra("");
verificarLetra("");
verificarLetra("");
verificarLetra("");
verificarLetra("");


