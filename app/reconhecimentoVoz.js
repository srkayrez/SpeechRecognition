window.SpeechRecognition = window.Speechrecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();
var numeroFalado = document.getElementById('chute') 

recognition.addEventListener('result', onSpeak)
function onSpeak(e){
    var valor = e.results[0][0].transcript
    exibeNumero(valor);
    validator(valor)
} 

function exibeNumero(valor){
    numeroFalado.innerHTML = `
    <div>Você disse:</div>
        <span class="box">${valor}</span>
        <div id="resposta"></div>
        `
}

recognition.addEventListener('end', () => recognition.start())
