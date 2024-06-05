var colunaInimigos = 0;
var tamanho = 42;
var colunasTotais = 5;
var yInimigo=0;
var diferenca=20;
var img = new Image();
var inimigo = [];
var posicaoVida = 250;
var m = 1;


var posicaoX = 500;
var info=null;

inimigo[0] = 'IMG/Bruxo.png';
inimigo[1] = 'IMG/assassino.png';
inimigo[2] = 'IMG/Fantasminha.png';
inimigo[3] = 'IMG/guardiao2.png';
inimigo[4] = 'IMG/Lobinho.png';
inimigo[5] = 'IMG/maguinho.png';
inimigo[6] = 'IMG/Minotauro.png';


function QualInimigo(){
    if(qualImg==0){
        info = {yInimigo: 20, m: 1.9,tamanho:160,colunasTotais:8,posicaoX:400}
        img.src=inimigo[0];
        posicaoVida = 350;

    } else if (qualImg==1){
        info = {yInimigo: 60, m: 1,tamanho:126,colunasTotais:5,posicaoX:500}
        img.src=inimigo[1];
        posicaoVida = 250;

    } else if (qualImg==2){
        info = {yInimigo: 100, m: 1,tamanho:90,colunasTotais:6,posicaoX:500}
        img.src=inimigo[2];
        posicaoVida = 250;

    }else if (qualImg==3){
        info = {yInimigo: 0, m: 1,tamanho:210,colunasTotais:10,posicaoX:470}
        img.src=inimigo[3];
        posicaoVida = 250;

    }else if (qualImg==4){
        info = {yInimigo: 20, m: 1,tamanho:210,colunasTotais:2,posicaoX:450}
        img.src=inimigo[4];
        posicaoVida = 250;

    }else if (qualImg==5){
        info = {yInimigo: 35, m: 1,tamanho:200,colunasTotais:2,posicaoX:430}
        img.src=inimigo[5];
        posicaoVida = 250;

    }else if (qualImg==6){
        info = {yInimigo: 0, m: 1.7,tamanho:180,colunasTotais:6,posicaoX:400}
        img.src=inimigo[6];
        posicaoVida = 350;
    }


ctx.drawImage(img,colunaInimigos*info.tamanho,0,info.tamanho,info.tamanho,
    info.posicaoX,info.yInimigo,info.tamanho*info.m,info.tamanho*info.m);
}


function tempoInimigo(){
    if(batalhando==1){
        if(colunaInimigos<info.colunasTotais-1){
            colunaInimigos+=1;
        } else if (colunaInimigos==info.colunasTotais-1){
            colunaInimigos=0;
        }
    }
}
setInterval(tempoInimigo,700);