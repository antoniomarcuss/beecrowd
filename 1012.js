var input = require('fs').readFileSync('stdin', 'utf8');
var [a,b,c] = input.split(' ');

var pi = 3.14159
var areaTriangulo = a * c / 2
var areaDoCirculo = pi * Math.pow(c, 2)
var trapezio = (parseFloat (a) + parseFloat(b)) * c / 2
var quadrado = b * b
var retangulo = a * b
console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`)
console.log(`CIRCULO: ${areaDoCirculo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)

