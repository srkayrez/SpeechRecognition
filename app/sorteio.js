
const menorValor = 1
const maiorValor = 100

const numeroSecreto = setRandomNumber()

function setRandomNumber(){
    return parseInt(Math.random()* maiorValor + 1)
}

console.log(numeroSecreto);


const elementoMenor = document.getElementById('menorValor')
elementoMenor.innerHTML = menorValor;

const elementoMaior = document.getElementById('maiorValor')
elementoMaior.innerHTML = maiorValor;