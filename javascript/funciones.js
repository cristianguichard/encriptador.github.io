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
function validar(texto) {
 
        var texto = texto;
        let letrasValidas = "abcdefgjhijklmnñopqrstuvwxyz¿?¡! ";
    
        for (let letra of texto) {
            if (!letrasValidas.includes(letra)) {
               
                validacion = 1;
                break;
            } else {
                validacion = 0;
            }
        }
        if (validacion == 1) {
            return true;
        } else {
            return false
        }
    }

function encriptar() {
    var input = document.querySelector("input");
    var texto = input.value;
    if(validar(texto)){
        alert("No ingreses Mayusculas ni acentos");
   } else {
           
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
}

function desencriptar() {

    var input = document.querySelector("input");
    var texto = input.value;

    if(validar(texto)){
        alert("No ingreses Mayusculas ni acentos");

        } else {
    
    var textoCifrado = texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

   var textoDesencriptado = textoCifrado;
  
   document.getElementById("mensaje-encriptado").innerHTML = textoDesencriptado;
      mostrar();
      ocultar();
       }   

}
function mostrar(){
         document.getElementById("container__mensaje_encriptado").style.display = "block";
         document.getElementById("copiar").style.display = "block";
}
function ocultar(){
    document.getElementById("muneco").style.display = "none";
    document.getElementById("ningun-mensaje").style.display = "none";
    document.getElementById("ingresa-texto").style.display = "none";
    
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