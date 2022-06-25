var input = require('fs').readFileSync("stdin",'utf8');
var lines = input.split('\n');

nome = lines.shift()
salarioF = parseFloat(lines.shift())
totalV = Number(lines.shift())
comissao = salarioF + (15 * totalV) / 100 
console.log(`TOTAL = R$ ${comissao.toFixed(2)}`)

