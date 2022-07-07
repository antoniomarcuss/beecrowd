var input = require('fs').readFileSync("stdin",'utf8');
var [tempoGasto,veloMedia] = input.split('\n');

qtdLitros = (tempoGasto * veloMedia) / 12
console.log(`${qtdLitros.toFixed(3)}`)