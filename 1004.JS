var input = require('fs').readFileSync("stdin",'utf8');
var lines = input.split('\n');

var n1 = Number(lines.shift())
var n2 = Number(lines.shift())
PROD = n1 * n2
console.log(`PROD = ${PROD}`)