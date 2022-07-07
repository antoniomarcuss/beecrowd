var input = require('fs').readFileSync('stdin', 'utf8');
var [a,b,c] = input.split(' ').map(n => parseFloat(n));

if(a === 0.0 ) {
    console.log('Impossivel calcular')
}else{
    var delta = Math.pow(b,2) - (4 * a * c);
    if(delta < 0.0){
        console.log('Impossivel calcular');
    }else{
        var r1 = (-b + Math.sqrt(delta)) / (2 * a)
        var r2 = (-b - Math.sqrt(delta)) / (2 * a)
        console.log(`R1 = ${r1.toFixed(5)}`)
        console.log(`R2 = ${r2.toFixed(5)}`)
    }
}