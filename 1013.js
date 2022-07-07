var input = require('fs').readFileSync("stdin",'utf8');
var [a,b,c] = input.split(' ').map(item => Number(item))

var maiorAB = (a + b + Math.abs(a - b)) / 2
var maiorXC = (c + maiorAB + Math.abs(c - maiorAB)) / 2
console.log(`${maiorXC} eh o maior`)

   


