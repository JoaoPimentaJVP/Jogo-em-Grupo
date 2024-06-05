CaminhoM = new Image();
CaminhoM.src="IMG/estado3.png";

var entrada = new Image();
entrada.src="IMG/entradacastelo.png";

var portaoamarelo = new Image();
portaoamarelo.src = "IMG/travamarela.png";

var portaoverde = new Image();
portaoverde.src= "IMG/trava.png";

var estado4=new Image();
estado4.src="IMG/estado4.png";

var estado6=new Image();
estado6.src="IMG/pos2.png"

var chaveVerde=0;
var chaveAmarela=0;

function final(){
    ctx.drawImage(estado6,0,0);
}

function minotauro(){
    ctx.drawImage(estado4,0,0);
}

function corredor2(){
    ctx.drawImage(entrada,0,0);
}

function corredor1(){
    ctx.drawImage(CaminhoM,0,0);
}

function portao(){
    if(chaveVerde==0){
        ctx.drawImage(portaoverde,0,60);
    }

}

function portaoPrincipal(){
    ctx.drawImage(portaoamarelo,0,0);
}