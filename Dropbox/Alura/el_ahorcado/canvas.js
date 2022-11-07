function dibujar (x1,y1,x2,y2){
    ctx.beginPath();   
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}
function dibujarCanvas(){
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#0A3871";

    ctx.fillRect(0,0, 1280, 620);
    dibujar(550,300,750,300);
}


function dibujarLinea(){

    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = "#F3F5F6";
    ctx.strokeStyle = "#0A3871";

    let anchura = 550/palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++){
        ctx.moveTo(400 + (anchura*i), 420)
        ctx.lineTo(450 + (anchura*i), 420)
    }
    ctx.stroke();
    ctx.closePath();
}

function dibujarAhorcado(cuenta){
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#0A3871";


    if(cuenta < 11) {
//linea arriba
    if(cuenta == 1){
    //poste
    dibujar(600,300,600,50);
    }
    //mastil
    if(cuenta == 2){
    dibujar(600,50,700,50);
    }
    //cuerda
    if(cuenta == 3){
    dibujar(700,50,700,100);
    }
   
   //Cabeza
   if(cuenta == 4){
    ctx.beginPath()
    ctx.arc(700, 124, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
   }
   //Tronco
   if(cuenta==5){ 
    dibujar(700,150,700,200);
   }
    //Brazo izquierdo
    if(cuenta==6){
    dibujar(700,150,660,180);
    }
     //Brazo Derecho
     if(cuenta==7){
     dibujar(700,150,740,180);
     }

    //Pierna izquierda
    if(cuenta==8){
    dibujar(700,200,660,230);
    }
     //Pierna Derecha
     if(cuenta==9){
     dibujar(700,200,740,230);
     }
     if(cuenta==10){
        ctx.clearRect(0,0,1280,620);
        ctx.beginPath();
        ctx.fillText("GAME OVER", 420,300);
        ctx.strokeText("GAME OVER", 420,300); 
     }
} else {
  alert("DEBES INICIAR EL JUEGO");
}
}