var input = require('fs').readFileSync("stdin",'utf8');
var lines = input.split('\n');

var [cod1, num1,valor1] = lines.shift().split(" ")
var [cod2, num2,valor2] = lines.shift().split(" ")
var valorT = num1 * valor1 + num2 * valor2
console.log(`VALOR A PAGAR: R$ ${valorT.toFixed(2)}`)

