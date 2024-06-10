var canvas = document.getElementById('meucanvas');
var ctx = canvas.getContext('2d');

var bt= new Image()
bt.src = "IMG/Jogar.png"


var inicio = new Image()
inicio.src = "IMG/inicio.png";

var tocou=0;
var estado=0;
var MonstroVivo=0;
var cliquey = 0;
var cliquex = 0; 
var end=0;

carregarMusicas()

var x = 200;
var y = 0;
var xInimigo=400;


var teclado = new Teclado(document);

var direita = 0;
var esquerda = 0;
var cima = 0;
var baixo = 0;

var bite=0;

canvas.addEventListener("click", (e) => {
    const elRect = e.target.getBoundingClientRect()
    var cliquex = e.clientX - elRect.left
    var cliquey = e.clientY - elRect.top
    
   if(cliquex>500 && cliquex<780 &&
    cliquey>400 && cliquey<480 && transparencia==0){
    estado=1;
    }
})

var transparencia=1;
function trans(){
    if(estado==0 && transparencia>0){
        transparencia-=0.25;
    }
}
setInterval(trans, 1000);




function desenhar(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    if(batalhando==0){
        musicaluta.currentTime = 0.0;
        musicaluta.pause();
            musica.play();
        if(teclado.pressionada(SETA_DIREITA)&&bite==1&&batalhando==0&&animacao==0){
            direita=1;
            andando=1;
           } 
           if (teclado.pressionada(SETA_ESQUERDA)&&bite==1&&batalhando==0&&animacao==0){
            esquerda=1;
            andando=1;
           }
           if (teclado.pressionada(SETA_ABAIXO)&&bite==1&&batalhando==0&&animacao==0){
            baixo=1;
            andando=1;
           } 
            if (teclado.pressionada(SETA_CIMA)&&bite==1&&batalhando==0&&animacao==0){
            cima=1;
            andando=1;
           } 



        if(estado==0){
            ctx.drawImage(inicio,-10,0);
    
            ctx.globalAlpha=transparencia;
            ctx.beginPath();
            ctx.rect(0,0,800,500);
            ctx.fillStyle = "#000000";
            ctx.fill();
            ctx.closePath;
            ctx.globalAlpha=1;
            if(transparencia==0){
                ctx.drawImage (bt, 470,canvas.height-bt.height-100,300,80)
            }
        } else if(estado==1){
            background();
            personagem();
        } else if(estado==2){
            MonstroVivo=0;
            fundoPrincipal();
            personagem();
        } else if(estado==3){
            corredor1();
            if(chaveVerde==0){
                portao();
            }
            personagem();
        } else if (estado==5){
            corredor2();
            if(chaveAmarela==0){
                portaoPrincipal();
            }
            personagem();
        } else if (estado==4){
            xTerra = -40;
            xBoneco= -100;
            xArvore = -200;
            xInimigo = 450;
            vidaInimiga=200;
            MonstroVivo=0;
            vidaSua=200;
            pode=0;
            minotauro();
            personagem();
        } else if(estado==6){
            xTerra = -40;
            xBoneco= -100;
            xArvore = -200;
            xInimigo = 450;
            MonstroVivo=0;
            vidaSua=200;
            pode=0;
            final();
            personagem();
        }
        
        if(animacao==1){
            EntrandoBatalha();
            if(altura>500){
                batalhando=1;
                animacao=0;
                altura=0;
            }
        }
    }

    else if (batalhando==1){

        musicaluta.play();
        musica.pause();
        Cenabatalha();
        if(MonstroVivo==0){
            QualInimigo();
        }

        if(vidaInimiga==0&&tempo>3&&estado==4){
            ctx.drawImage(amarela,0,0);
            if(tempo==5){
                batalhando=0;
            }
        }
        andando=0;
        if(morreu==1&&pode==1){
            musicaluta.pause();
            if(tocou==0){
                musicago.play();
                tocou=1;
            }

            ctx.drawImage(GO,0,0);
        }
    } 

    if(end==1){
        fim();
    }
} 




function bit(){
    if(bite==0){
        bite=1;
    } else {
        bite=0;
    } 

    if(animacao==1&&altura<=canvas.height){
        altura+=30;
    }



//movimento pra direitA
    if(direita==1){

        if(estado==1&&x<750){
            x+=50;
        } else if (estado==1&&x==750){
            estado=2;
            x=0;
        }
        
        if (estado==2){
            //quadrado1
            if(quadrado==1&&x<600){
                x+=50;
            }
            //quadrado2
            if(quadrado==2&&x<750){
                x+=50;
            } else if (quadrado==2&&x==750){
                quadrantex=1;
                x=0;
                y=250;
            }
            //quadrado3
            if(quadrado==3&&x<600){
                x+=50;
            }
            //quadrado4
            if(quadrado==4&&x<750){
                x+=50;
            } else if (quadrado==4&&x==750){
                estado=3;
                x=0;
                y=250;
            }
        }

        if(estado==3){
            if(chaveVerde==0){
                if(x<300){
                    x+=50;
                }
            } else if (chaveVerde==1){
                if(x<750){
                    x+=50;
                } else if(x==750){
                    estado=4;
                    x=0;
                }
            }            
        }

        if(estado==4){
            if(x<300){
                x+=50;
            } else if(x==300&&chaveAmarela==0){
                animacao=1;
            } else if (x<550&&chaveAmarela==1){
                x+=50;
            }
        }

        if(estado==5&&x<550){
            x+=50;
        }

        if(estado==6){
            if(x<550){
                x+=50;
            }
        }

        direita=0;
        linha=0;
    }



//MOVIMENTO PRA ESQUERDA
    if(esquerda==1){
        if(x>200&&estado==1){
            x-=50;
        } 
        
        if (estado==2){
            //quadrado1
            if(quadrado==1&&x>0){
                x-=50;
            }

            //quadrado2
            if(quadrado==2&&x>0){
                x-=50;
            }
            //quadrado3
            if(quadrado==3&&x>0){
                x-=50;
            } else if (quadrado==3&&x==0){
                x=750;
                y=y;
                quadrantex=0;
            }
            //quadrado4
            if(quadrado==4&&x>200){
                x-=50;
            }
        }

        if(estado==3){
            if(x>0){
                x-=50;
            } else if (x==0){
                estado=2;
                x=750;
                y=250;
            }
        }

        if(estado==4){
            if(x>0){
                x-=50;
            } else if(x==0&&chaveAmarela==1){
                estado=3;
                x=750;
            }
        }

        if(estado==5&&x>200){
            x-=50;
        }
        if(estado==6){
            if(x>300){
                x-=50;
            }
        }

        esquerda=0;
        linha=1;
    }


    //movimento pra cima
    if(cima==1){
        if(y>200&&estado==1){
            y-=50;
        } 
        
        if (estado==2){
            //quadrado1
            if(quadrado==1&&y>0){
                y-=50;
            } else if(quadrado==1&&y==0){
                quadrantey=0;
                y=450;
                x=x;
            }
            //quadrado2
            if(quadrado==2&&y>0){
                y-=50;
            } else if (quadrado==2&&y==0){
                estado=5;
                y=450;
                x=400;
            }
            //quadrado3
            if(quadrado==3&&y>150){
                y-=50;
            }
            //quadrado4
            if(quadrado==4&&y>0){
                y-=50;
            } else if (quadrado==4&&y==0){
                quadrantey=0;
                x=400;
                y=450;
            }
        }

        if(estado==3){
            if(y>150){
                y-=50;
            }
        }

        if(estado==4){
            if(y>150){
                y-=50;
            }
        }

        if(estado==5&&chaveAmarela==0){
            if(y>200){
                y-=50;
            }
        } else if(estado==5&&chaveAmarela==1){
            if(y>0){
                y-=50;
            } else if(y==0){
                estado=6;
                y=450;
            }
        }

        if(estado==6){
            if(y>300){
                y-=50;
            } else if(y==300){
                animacao=1;
            }
        }


        cima=0;
    }

    //movimento pra baixo
    if(baixo==1){
        if(y<300&&estado==1){
            y+=50;
        }
        
        if (estado==2){
            //quadrado1
            if(quadrado==1&&y<450){
                y+=50;
            }

            //quadrado2
            if(quadrado==2&&y<450){
                y+=50;
            } else if (quadrado==2&&y==450){
                quadrantey=1;
                y=0;
                x=x;
            }
            //quadrado3
            if(quadrado==3&&y<450){
                y+=50;
            } else if(quadrado==3&&y==450){
                quadrantey=1;
                y=0;
                x=400;
            }
            //quadrado4
            if(quadrado==4&&y<300){
                y+=50;
            }
        }

        if(estado==3){
            if(y<350){
                y+=50;
            }
        }

        if(estado==4){
            if(y<350){
                y+=50;
            }
        }

        if(estado==5&&y<450){
            y+=50;
        } else if (estado==5&&y==450){
            estado=2;
            quadrado=2;
            y=0;
            x=400;
        }

        if(estado==6){
            if(y<450){
                y+=50;
            }
        }

        baixo=0;
    }
}
setInterval(bit,100);



function move(){
    if(coluna==0){
        coluna=1;
    } else{
        coluna=0;
    }


}
setInterval(move,1000);


setInterval(desenhar,10);

