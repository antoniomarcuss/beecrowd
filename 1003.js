var input = require('fs').readFileSync("stdin",'utf8');
var lines = input.split('\n');

var A = Number(lines.shift())
var B = Number(lines.shift())
SOMA = A + B 
console.log(`SOMA = ${SOMA}`)
