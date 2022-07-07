var input = require('fs').readFileSync("stdin",'utf8');
var [distancia ,combustivel] = input.split('\n')
conMedio = (distancia / combustivel)

console.log(`${conMedio.toFixed(3)} km/l`)