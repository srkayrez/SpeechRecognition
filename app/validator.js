function validator(chute){
   const numero =+ chute;
   const alteracao = document.getElementById('resposta');
    if (isNumber(numero)){
        alteracao.innerHTML = '<div>Belas palavras mas eu preciso de um número!</div>'
        return
    }
    if (rangeValue(numero)) {
        alteracao.innerHTML = `<div>Um <strong>baita</strong> número amigo, mas precisa ser algo entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h1>Parabéns! Você acertou!</h1>
        <div class="mensagem">O número secreto é:</div>
        <br>
        <span class="box">${numeroSecreto}</span>
        <button id=btn>Jogar novamente</button>
        `
    }
    else if (numero < numeroSecreto){
        alteracao.innerHTML = `
        <div>O número secreto é maior
        <span class="material-icons">
        arrow_upward
        </span>
    </div>
        `
    }
    else if (numero > numeroSecreto){
        alteracao.innerHTML = `
        <div>O número secreto é menor
        <span class="material-icons">
        arrow_downward
        </span>
    </div>
        `
    }
}

function rangeValue(numero){
    return numero > maiorValor || numero < menorValor

}

function isNumber(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'btn') {
        window.location.reload();
    }
})