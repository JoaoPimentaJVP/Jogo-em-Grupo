var andando=0;
var animacao=0;

function Andou(){
    if(andando==1&&estado==2&&batalhando==0&&chaveVerde==0){
        var chance=Math.floor(Math.random()*100+1)
        andando=0;
    }
    if(chance<10){
        MonstroVivo=0;
        animacao=1;
        comecar=0;
        vidaInimiga=200;
        vidaSua=200;
        venceu=0;
        morre=0;
        pode=0;
        escolhido=0;
        qual=0;
        xTerra = -40;
        xBoneco= -100;
        xArvore = -200;
        xInimigo = 450;
    }

}

setInterval(Andou,500);

altura=0;

function EntrandoBatalha(){
    //retangulo esquerda
    ctx.beginPath();
    ctx.rect(0,0,canvas.width/2,altura);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
    //retangulo direita
    ctx.beginPath();
    ctx.rect(canvas.width/2,canvas.height-altura,canvas.width/2,altura);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();

}

