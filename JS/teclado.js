var SETA_ESQUERDA = 37;
var SETA_CIMA = 38;
var SETA_DIREITA = 39;
var SETA_ABAIXO = 40;
var ESPACO = 32;

var UM = 49;
var DOIS = 50;
var TRES = 51;

function Teclado(elemento){
    this.elemento = elemento;

    //array de teclas pressionadas
    this.pressionadas = [];
    this.anda = false;

    //registrar estado das teclas do array
    var teclado = this;
    elemento.addEventListener('keydown', function(evento){
        var tecla = evento.keyCode;
        teclado.pressionadas[tecla] = true;
    });
    elemento.addEventListener('keyup', function(evento){
        teclado.pressionadas[evento.keyCode] = false;
    });
}

Teclado.prototype = {
    pressionada: function(tecla){
        return this.pressionadas[tecla];
    }
}