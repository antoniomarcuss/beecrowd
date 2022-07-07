var input = require('fs').readFileSync('stdin', 'utf8');
var dias = parseInt(input.split('\n'));
var qtdAno = parseInt(dias / 365)
dias = dias % 365
var qtdMes = parseInt(dias / 30)
dias = dias % 30  

console.log(`${qtdAno} ano(s)`)
console.log(`${qtdMes} mes(es)`)
console.log(`${dias} dia(s)`)


