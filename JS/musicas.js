var musica, musicaluta, musicago;

function carregarMusicas(){
    musica = new Audio();
    musica.src = 'SOM/ms1.mp3';
    musica.load();
    musica.volume = 0.8;
    musica.loop = true;

    musicaluta = new Audio();
    musicaluta.src = 'SOM/ms2.mp3';
    musicaluta.load();
    musicaluta.volume = 0.8;
    musicaluta.loop = true;

    musicago = new Audio();
    musicago.src = 'SOM/ms3.mp3';
    musicago.load();
    musicago.volume = 0.8;
 };