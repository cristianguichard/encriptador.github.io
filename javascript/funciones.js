function recorrerVocales(vocal){

        var vocales = ["a", "e", "i", "o", "u"];
        
        for (var posicion = 0; posicion <= vocales.length; posicion++){

            if(vocal == vocales[0]){
                var vocal = vocales[0];
                return vocal;
                break;
            } else if ((vocal == vocales[1])){
                var vocal = vocales[1];
                return vocal;
                break;
            }else if ((vocal == vocales[2])){
                var vocal = vocales[2];
                return vocal;
                break;
            }else if ((vocal == vocales[3])){
                var vocal = vocales[3];
                return vocal;
                break;
            }else if ((vocal == vocales[4])){
                var vocal = vocales[4];
                return vocal;
                break;
            }
    }

}


function encriptar() {


   var input = document.querySelector("input");
   var texto = input.value;
   var largoTexto = texto.length;
   var textoEncriptado = "";
  
    for (var posicion = 0; posicion < largoTexto; posicion++){
     
       if (recorrerVocales(texto[posicion])){

        var vocal = recorrerVocales(texto[posicion]);

            if (vocal == "a"){
                var a = "ai";
                var textoEncriptado = textoEncriptado + a;
            } else if (vocal == "e"){
                var e = "enter";
                var textoEncriptado = textoEncriptado + e;
            } else if (vocal == "i"){
                var i = "imes";
                var textoEncriptado = textoEncriptado + i;
            } else if (vocal == "o"){
                var o = "ober";
                var textoEncriptado = textoEncriptado + o;
            } else if (vocal == "u"){
                var u = "ufat";
                var textoEncriptado = textoEncriptado + u;
            }

       } else {
         var textoEncriptado = textoEncriptado + texto[posicion];
        }

   }  
   document.getElementById("mensaje-encriptado").innerHTML = textoEncriptado;
      mostrar();
      ocultar();
     
    
      
}

function desencriptar() {
    var input = document.querySelector("input");
    var texto = input.value;
    
    var textoCifrado = texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

   var textoDesencriptado = textoCifrado;
  
   document.getElementById("mensaje-encriptado").innerHTML = textoDesencriptado;
      mostrar();
      ocultar();
}
function mostrar(){
    document.getElementById("caja-resultado").style.display ="flex";

}

function ocultar(){

    document.getElementById("texto-inicial").style.display = "none";
}

function copyToClickBoard(){
    var content = document.getElementById('mensaje-encriptado').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        alert("El texto" + " " + content + " " + "ha sido copiado...");
    })
        .catch(err => {
        alert('algo ha pasado', err);
    })
 
}//var button = document.querySelector("button");

//button.onclick = encriptar;