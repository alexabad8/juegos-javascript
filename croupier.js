var croupier ={
    nombre: 'Peter',
    mano:[],
    mezclar: function mezclar(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
    },
    repartirJugador: function(){
        jugador.mano[jugador.mano.length]= baraja[0];
        document.getElementById('jugador').innerHTML='<img src="baraja-svg/'+baraja[0].imagen+'">'
        baraja.splice(0,1);
        
    },
    repartirCroupier: function(){
        croupier.mano[croupier.mano.length]= baraja[0];
        document.getElementById('croupier').innerHTML='<img src="baraja-svg/'+baraja[0].imagen+'">'
        baraja.splice(0,1);
    },
    
    
    compararCartas: function(){
        if(croupier.mano[0].valor>jugador.mano[0].valor){
        document.getElementById('display').innerHTML=('gana croupier');
        }
        if(croupier.mano[0].valor<jugador.mano[0].valor){
        document.getElementById('display').innerHTML=('gana jugador');
        }
        if(croupier.mano[0].valor===jugador.mano[0].valor){
        document.getElementById('display').innerHTML=('empate');
        }
                                
    }
    
}