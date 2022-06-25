var input = require('fs').readFileSync("stdin",'utf8');
var lines = input.split('\n');

a = Number(lines.shift())
b = Number(lines.shift())
c = Number(lines.shift())
d = Number(lines.shift())
dif = (a * b - c * d)
console.log(`DIFERENCA = ${dif}`)
