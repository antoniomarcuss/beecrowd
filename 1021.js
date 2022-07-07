var input = require('fs').readFileSync("stdin",'utf8');
var valor = parseFloat(input.split('\n'));

var notas = [100, 50, 20, 10, 5, 2]
var moedas = [1, 0.50, 0.25, 0.10, 0.05 ,0.01]
console.log('NOTAS:')
for(var nota of notas) {
    qtdNota = parseInt(valor / nota)
    console.log(`${qtdNota} nota(s) de R$ ${nota.toFixed(2)}`)
    valor = valor % nota
}
console.log('MOEDAS:')
for(var moeda of moedas) {
    qtdMoeda = parseInt(valor / moeda)
    console.log(`${qtdMoeda} moeda(s) de R$ ${moeda.toFixed(2)}`)
    valor = valor % moeda + 0.00001
}


