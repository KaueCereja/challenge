// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

var textoDigitado = document.querySelector("#texto-digitado");
var textoExibido = document.querySelector("#texto-exibido");


function criptografarFrase(){
    var texto = textoDigitado.value;
    var resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    document.getElementById('texto-exibido').innerHTML =  resultadoCripto;
}

function descriptografarFrase(){
    var texto = textoDigitado.value;
    var resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('texto-exibido').innerHTML = resultadoDescripto;

}
function copiarFrase(){
    var textoCop = document.getElementById('texto-exibido');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}