var posicaoy=0;
var pulo=0;
var PuloY = 0;


var castelo= new Image();
castelo.src="IMG/castelo3.png";

var ceu = new Image();
ceu.src = "IMG/Final.png";

var cabra, cachorro, homem1, homem2,
menina1, menina2, porco, rei, vaca1;

cabra = new Image();
cabra.src = "IMG/cabra.png";
cachorro = new Image();
cachorro.src="IMG/cachorro.png";
homem1 = new Image();
homem1.src="IMG/homem 01.png";
homem2 = new Image();
homem2.src="IMG/homem 02.png";
menina1 = new Image();
menina1.src="IMG/menina 01.png";
menina2 = new Image();
menina2.src="IMG/menina 02.png";
porco = new Image();
porco.src="IMG/porco.png";
rei = new Image();
rei.src="IMG/rei.png";
vaca1 = new Image();
vaca1.src="IMG/vaca 01.png";




function fim(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(ceu,0,0);
    ctx.drawImage(ceu,0,posicaoy);
    if(posicaoy<-300){
        ctx.drawImage(castelo,0,posicaoy+800);
    }
    if(posicaoy>-1800){
        posicaoy-=0.7;
    }
    ctx.drawImage(rei,canvas.width/2-50,250+PuloY+1800+posicaoy,70,70);
    ctx.drawImage(homem1,canvas.width/2-50,140-PuloY+1800+posicaoy,70,70);
    ctx.drawImage(homem2,canvas.width/2+100,180+PuloY+1800+posicaoy,70,70);
    ctx.drawImage(menina2,canvas.width/2-200,120+PuloY+1800+posicaoy,70,70);
    ctx.drawImage(menina1,canvas.width/2-200,350-PuloY+1800+posicaoy,70,70);
    ctx.drawImage(menina1,canvas.width/2-200,350-PuloY+1800+posicaoy,70,70);
    ctx.drawImage(cachorro,canvas.width/2-300,250-PuloY+1800+posicaoy,50,50);
    ctx.drawImage(cabra,canvas.width/2+200,290+PuloY+1800+posicaoy,50,50);
    ctx.drawImage(vaca1,canvas.width/2+170,90-PuloY+1800+posicaoy,50,50);
    ctx.drawImage(porco,canvas.width/2-270,90-PuloY+1800+posicaoy,50,50);
}



function persoPulando(){
    if(pulo==0){
        PuloY=70;
        pulo+=1;
    } else if (pulo==1){
        PuloY=0;
        pulo=0;
    }
}

setInterval(persoPulando,700);