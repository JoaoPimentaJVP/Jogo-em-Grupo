var persona = new Image();
persona.src="IMG/guerreiro2.png";
var coluna=0;
var linha=0;

function personagem(){
    ctx.drawImage(persona,52*coluna,52*linha,52,52,x,y,52,52);
}

var caindo=1;
function queda(){
    if(y<250&&estado==1&&caindo==1){
        y+=50;
    } 
    if(y==250){
        caindo=0;
    }
}

setInterval(queda,100);