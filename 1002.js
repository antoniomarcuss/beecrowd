var input = require('fs').readFileSync("stdin",'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines)
var n = 3.14159
var area = n * Math.pow(raio,2) // raiz quadrado
console.log(`A=${area.toFixed(4)}`)