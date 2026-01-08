let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

exibirTextoNaTela ('h1', 'jogo do numero secreto');
exibirTextoNaTela ('p' , 'escolha um numero de 1 a 11');

function verificarChute() {
    let chute = querySelector('input').value

    console.log(chute == numeroSecreto);
    // o uso de um = eh para atribuir um valor enquanto o uso de dois eh para comparação 
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random () *10 + 1);
}
