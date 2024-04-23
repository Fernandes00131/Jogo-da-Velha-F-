var jogador = "🟣";

function jogar(celula){
    if(celula.innerHTML == ""){
        celula.innerHTML = jogador;

        if(jogador == "🟣"){
            jogador = "⚪";
        } else{
            jogador = "🟣"
        }
    }

}
function reiniciar(){
    window.location.reload();
}