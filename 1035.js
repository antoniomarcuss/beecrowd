var input = require('fs').readFileSync("stdin",'utf8');
var valor = [a,b,c,d] = input.split(' ');
var a = parseInt(valor.shift())
var b = parseInt(valor.shift())
var c = parseInt(valor.shift())
var d = parseInt(valor.shift())
somaCD = c + d
somaAB = a + b
somaCD = c + d
if(b > c && d > a && somaCD > somaAB && c > 0 & d > 0 & a % 2 === 0 ) {
    console.log('Valores aceitos')
} else {
    console.log('Valores nao aceitos')
}






