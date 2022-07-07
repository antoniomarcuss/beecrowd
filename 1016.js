var input = require('fs').readFileSync("stdin",'utf8');
var valores = input.split('\n');

qtdMinutos = (60 * input) / 30
console.log(`${qtdMinutos} minutos`)