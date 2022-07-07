var input = require('fs').readFileSync("stdin",'utf8');
var qtdSegundos = parseInt(input.split('\n'));

qtdHora = parseInt(qtdSegundos / 3600)
qtdSegundos = qtdSegundos % 3600
qtdMinutos = parseInt(qtdSegundos / 60)
qtdSegundos = qtdSegundos % 60


console.log(`${qtdHora}:${qtdMinutos}:${qtdSegundos}`)




