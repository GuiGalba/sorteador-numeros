function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
        sorteados.sort((a,b) => a -b);
    }

    let resultado = document.getElementById("resultado");
    sorteados.length == 1 ? resultado.innerHTML = `<label class="texto__paragrafo">Número sorteado: ${sorteados} </label>` : resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
}

function obterNumeroAleatorio(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}




function reiniciar(){

}