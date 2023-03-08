var aluguel = document.getElementById('aluguel');
var agua = document.getElementById('agua');
var energia = document.getElementById('energia');
var educacao = document.getElementById('educacao');
var internet = document.getElementById('internet');
var lixo = document.getElementById('lixo');
var iptu = document.getElementById('iptu');

var alimentacao = document.getElementById('alimentacao');
var transporte = document.getElementById('transporte');
var lazer = document.getElementById('lazer');
var saude = document.getElementById('saude');
var impostos = document.getElementById('impostos');
var cuidados = document.getElementById('cuidados');
var outros = document.getElementById('outros');

const btn = document.getElementById('calcula');
btn.addEventListener('click', calculaSalarioIdeal);

var IsencaoIPTU = document.querySelector('input[name="isencaoIPTU"]:checked');

const res = document.getElementById('res');

function calculaSalarioIdeal(){
    var sal = aluguel.valueAsNumber + agua.valueAsNumber + energia.valueAsNumber + educacao.valueAsNumber + internet.valueAsNumber + alimentacao.valueAsNumber + lixo.valueAsNumber + transporte.valueAsNumber + lazer.valueAsNumber + saude.valueAsNumber + impostos.valueAsNumber + cuidados.valueAsNumber + outros.valueAsNumber;
    if (IsencaoIPTU == 'nao'){
        sal += iptu.valueAsNumber
    }
    sal += sal*0.30;
    if (isNaN(sal)){
        alert('Preencha todos os campos')
    }else{
        res.textContent = `Para viver em Araguaína é necessário ter um salário médio de: R$ ${sal.toFixed(2)}`;
    }
}