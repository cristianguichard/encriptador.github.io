
let palabras = ["casa", "patio", "amanda"];//palabra secreta
let palabraSecreta  = "";
let teclaPresionada = "";
let cuentaPalabras = "";
var pantalla = document.getElementById("canvas");// canvas
var ctx = pantalla.getContext("2d");
let cuenta = "";
let inicioJuego = "";

function ocultarInstrucciones(){
    document.querySelector(".instrucciones").style.display="none"
}

function cancelar(){
    mostraInicio();
    ocultarIngresarPalabra();
    ocultarJuego();
}
function ocultarInicio(){
    document.querySelector("#inicio").style.display="none";
}
function mostraInicio(){
    document.querySelector("#inicio").style.display="flex";
}
function ocultarIngresarPalabra(){
    document.querySelector("#ingrese-palabra").style.display="none";    
}
function mostrarPalabra(){   
    document.querySelector("#ingrese-palabra").style.display="flex";
    ocultarInicio();
}
function ocultarJuego(){
    document.querySelector("#juego").style.display="none";
}
function mostrarJuego(){
    document.querySelector("#juego").style.display="flex";
}
function limpiar(){
    document.querySelector("input").value = "";
}
function palabraAzar() {
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];

    palabraSecreta = palabra;
    cuentaPalabras = palabraSecreta.length;
}
function guardar(){
    var input = document.querySelector("input");
    palabras.push(input.value);
    iniciar();
    ocultarIngresarPalabra();
    limpiar();   
}
// Palabra Azar
// Tecla pulsada 
function iniciar(){
    cuenta = 1;
    mostrarJuego();
    palabraAzar();
    dibujarCanvas();
    dibujarLinea();
    ocultarInstrucciones();
    document.querySelector("#inicio").style.display="none";
    document.querySelector(".container_juego").style.display="flex";
    inicioJuego = true;
}   

document.addEventListener('keydown',(evento)=>{

    if (inicioJuego){ 

  
    let noEncontrada = true;
    teclaPresionada = evento.key;
    

    if (evento.keyCode > 57){  
            let anchura = 550/palabraSecreta.length;
            ctx.beginPath()
            ctx.font="bold 70px arial"

        for (i= 0; i < palabraSecreta.length; i++ ){

            if(teclaPresionada === palabraSecreta[i]){
                    ctx.fillText(palabraSecreta[i].toUpperCase(), 400 + (anchura*i), 400)
                    ctx.strokeText(palabraSecreta[i].toUpperCase(), 400 + (anchura*i), 400)
                    cuentaPalabras--;
                    noEncontrada = false;     
            } 
        }
            if(noEncontrada){
            dibujarAhorcado(cuenta)    
            cuenta++;
            }  

            if(cuentaPalabras==0){
                ctx.clearRect(0,0,1280,620);
                ctx.beginPath();
                ctx.fillText("Ganaste, felicidades!", 300,300);
                ctx.strokeText("Ganaste, felicidades!", 300,300);
                inicioJuego = false; 
                
            }
    };

        if (evento.keyCode < 57) {
            alert("no es una letra")
        }
    } else {
        alert("debes iniciar el juego");
    }      
});



