 let intentos = 6;
const palabrasecreta = "paralelepipedo";

function nombre(nombre){
  console.log("Bienvenido "+nombre+" al ahorcado, tienes 6 intentos para completar la palabra !Comencemos!")
}
function verificarLetra(letra) {


    let palabra = letra.toLowerCase();

    if (palabrasecreta.includes(palabra) && letra!= "") {
        console.log("¡Bien! La letra "+palabra+" es correcta.");
       
        if (palabrasecreta === palabra) {
            console.log("¡Ganaste! Adivinaste la palabra completa.");
        }
    } else if((intentos<=6 && intentos>=1)&& letra != "") {
        intentos--;
        console.log("No es correcta. Te quedan "+intentos+" intentos.");
    }
    if(intentos === 1 && letra !="" ){
       alert("!Cuidado te quedan un solo intento!")

    }else if(intentos === 0 && letra != "" ){
        alert("Game Over")
    }
    
}
nombre("Mirbelys")
verificarLetra("p");
verificarLetra("a");
verificarLetra("r");
verificarLetra("a");
verificarLetra("l");
verificarLetra("e");
verificarLetra("l");
verificarLetra("e");
verificarLetra("p");
verificarLetra("i");
verificarLetra("p");
verificarLetra("e");
verificarLetra("d");
verificarLetra("o");

