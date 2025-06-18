let botaoReiniciar = document.getElementById("btn-reiniciar");
let botaoSortear = document.getElementById("btn-sortear")

function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let sorteados = [];
    let numero;

    if(de >= ate){
        alert("Você não inseriu os dados de forma correta. O número mínimo é maior que o número máximo.");
        reiniciar();
        return;
    }

    if(quantidade > (ate - de + 1)){
        alert("A quantidade informada de números a serem sorteados é inválida. Forneça um intervalo maior.")
        reiniciar();
        return;
    }

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

    alterarStatusBotao();
}

function alterarStatusBotao(){
    if(botaoReiniciar.classList.contains("container__botao-desabilitado")){
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
        botaoSortear.classList.remove("container__botao");
        botaoSortear.classList.add("container__botao-desabilitado");
    }else{
        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");
        botaoSortear.classList.remove("container__botao-desabilitado");
        botaoSortear.classList.add("container__botao");
    }
}

function obterNumeroAleatorio(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    alterarStatusBotao();
}