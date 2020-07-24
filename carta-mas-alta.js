var cartaMasAlta ={
    jugar: function(){
//desarrollo del juego 
    croupier.mezclar(baraja);
    croupier.repartirJugador();
    setTimeout(  
        function(){
            croupier.repartirCroupier()
        }
        , 1000);
    setTimeout(
        function(){
            croupier.compararCartas()
        }, 2500);
    
    }
}

//invocamos la funcion aqui, luego lo haremos con un boton u otro mecanismo
//jugar();
//cartaMasAlta.jugar();
document.getElementById('cartaA').onclick=cartaMasAlta.jugar;