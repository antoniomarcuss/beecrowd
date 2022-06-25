var input = require('fs').readFileSync("stdin",'utf8');
var lines = input.split('\n');

var n = Number(lines.shift())
var horaTrab = Number(lines.shift())
var valHoras = Number(lines.shift())
var salario = horaTrab * valHoras
console.log(`NUMBER = ${n}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)
