var batalhando=0
var comecar=0;
var escolhido=0;
var vidaSua =200;
var vidaInimiga = 200;
var tempo = 0;
var escolhaInimiga=0;
var morreu=0;
var pode = 0;
var venceu = 0;
var xTerra = -40;
var xBoneco= -100;
var xArvore = -20;

var batalhaF = new Image();
batalhaF.src = "IMG/Bfundo.png";
var BonecoF = new Image();
BonecoF.src = "IMG/boneco.png";
var ArvoreF = new Image();
ArvoreF.src = "IMG/arvo.png";


var pedra = new Image();
var papel = new Image();
var tesoura = new Image();

var duvida = new Image();
var pedraIni = new Image();
var papelIni = new Image();
var tesouraIni = new Image();
var GO = new Image();

var normal = new Image();
var verde = new Image();
var amarela= new Image();

normal.src="IMG/normal.png";
verde.src="IMG/verde.png";
amarela.src="IMG/amarela.png";

GO.src = "IMG/GO.png";

pedra.src = "IMG/pedra.png";
papel.src = "IMG/papel.png";
tesoura.src = "IMG/tesoura.png";

duvida.src = "IMG/duvida.png";
pedraIni.src = "IMG/pedraInimiga.png";
papelIni.src = "IMG/papelInimiga.png";
tesouraIni.src = "IMG/tesouraInimiga.png";

var qualImg=0;
var rodou = 0;
function EscolherInimigo(){
    if(batalhando==1&&rodou==0&&estado==2){
        qualImg=Math.floor(Math.random() * (5) + 1);
        rodou=1;
    } else if(batalhando==1&&estado==4&&rodou==0){
        qualImg=6;
    } else if(batalhando==1&&estado==6&&rodou==0){
        qualImg=0;
    }
}

function Cenabatalha(){
    EscolherInimigo();
    ctx.drawImage(batalhaF,xTerra,0);
    if(morreu==0){
        ctx.drawImage(BonecoF,xBoneco,0);
    }
    ctx.drawImage(ArvoreF,xArvore,0);

    if(xTerra<0){
        xTerra+=0.5;
    }
    if(xBoneco<0){
        xBoneco+=1.7;
    } else if (xBoneco==0.30000000000010063){
        xBoneco=0;
    }
    if(xArvore<0){
        xArvore+=2;
    } else if (xArvore>0.10000000000002435){
        xArvore=0;
    }

    if(xArvore==0&&xBoneco==0&&xTerra==0){
        comecar=1;
    }

    if(comecar==1&&escolhido==0&&morreu==0){
        ctx.drawImage(pedra,0+400,canvas.height-pedra.height-10);
        ctx.drawImage(papel,125+400,canvas.height-pedra.height-10);
        ctx.drawImage(tesoura,250+400,canvas.height-pedra.height-10);
        ctx.drawImage(duvida,300,50);
        Vida();
    }
    if(teclado.pressionada(UM)&&escolhido==0&&morreu==0){
        escolhido=1;
    }
    if(teclado.pressionada(DOIS)&&escolhido==0&&morreu==0){
        escolhido=2;
    }
    if(teclado.pressionada(TRES)&&escolhido==0&&morreu==0){
        escolhido=3;
    }

    if(escolhido==1){
        ctx.drawImage(pedra,0+400,canvas.height-pedra.height-10);
    } else if(escolhido==2){
        ctx.drawImage(papel,125+400,canvas.height-pedra.height-10);
    } else if (escolhido==3){
        ctx.drawImage(tesoura,250+400,canvas.height-pedra.height-10);

    }


    if(escolhaInimiga==1){
        ctx.drawImage(pedraIni,300,50);
    } else if (escolhaInimiga==2){
        ctx.drawImage(papelIni,300,50);
    } else if (escolhaInimiga==3){
        ctx.drawImage(tesouraIni,300,50);
    }
    if(comecar==1&&tempo!=2&&tempo!=3&&tempo!=4&&tempo!=5){
        ctx.drawImage(duvida,300,50);
    }
    if(vidaSua==0){
        morreu=1;
    }
    if(vidaInimiga==0&&estado==2){
        chaveVerde=1;
        venceu=1;
    }
    if(vidaInimiga==0&&estado==4){
       chaveAmarela=1;
    }
    if(vidaInimiga==0&&estado==6&&tempo==5){
        batalhando=0;
        end=1;
    }

    if(morreu==1&&pode==1){
        ctx.drawImage(GO,0,0);
    } 
    if(vidaInimiga==0&&tempo>3&&estado==2){
        if(chaveVerde==1){
            ctx.drawImage(verde,0,0);
        } else{
            ctx.drawImage(normal,0,0);
        }
    }
    if(venceu==1&&pode==1){
        batalhando=0;
        rodou=0;
        venceu=0;
    }
}   



    function AtaqueInimigo(){
            var qual = Math.floor(Math.random()*3+1);
            if(qual==1){
                escolhaInimiga=1;
            } else if (qual==2){
                escolhaInimiga=2;
            } else if (qual==3){
                escolhaInimiga=3;
            }
    }
           


    function Vida(){
        //sua vida
        if(morreu==0){
            ctx.beginPath();
            ctx.rect(60,300,vidaSua,10);
            ctx.fillStyle = "yellow";
            ctx.fill();
            ctx.closePath(); 
        }
        //vida inimiga
        ctx.beginPath();
        ctx.rect(470,posicaoVida,vidaInimiga,10);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }


    function demora(){
        if(escolhido!=0){
            tempo+=1;
        if(tempo==2){
                AtaqueInimigo();
                if(escolhaInimiga==1&&escolhido==3){
                    vidaSua-=50;
                }
                if(escolhaInimiga==2&&escolhido==1){
                    vidaSua-=50;
                }
                if(escolhaInimiga==3&&escolhido==2){
                    vidaSua-=50;
                }

                if(escolhaInimiga==3&&escolhido==1){
                    vidaInimiga-=50;
                }
                if(escolhaInimiga==1&&escolhido==2){
                    vidaInimiga-=50;
                }
                if(escolhaInimiga==2&&escolhido==3){
                    vidaInimiga-=50;
                }
            }
            if(tempo==3){
                if(vidaInimiga==0){
                    MonstroVivo=1;
                }
            }
            if(tempo==6){
                tempo=0;
                escolhido=0;
                qual=0;
                escolhaInimiga=0;
                if(morreu==1){
                    pode=1;
                }
                if(venceu==1){
                    pode=1;
                }
            }
        }
    }
    setInterval(demora,1000);