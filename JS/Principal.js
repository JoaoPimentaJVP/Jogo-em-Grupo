var QPrincipal = new Image();
QPrincipal.src = "IMG/C3.png";

var quadrante = 1;
var quadrantex=0;
var quadrantey=1;
var quadrado=1;


function fundoPrincipal(){
    if(quadrantex==0){
        if(quadrantey==1){
            quadrado=1;
        } else {
            quadrado=2;
        }
    } else if (quadrantex==1){
        if(quadrantey==0){
            quadrado=3;
        } else {
            quadrado=4;
        }
    }

    ctx.drawImage(QPrincipal,800*quadrantex,500*quadrantey,800,500,0,0,800,500);
}