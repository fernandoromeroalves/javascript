
const input = require('readline-sync')

const numeroSorteado = 5;

let numero = Number(input.question('qual numero você escolhe? '))

console.log(numero, typeof numero)
    
if(numero ===numeroSorteado){
    console.log('você acertou')
} else{
    console.log('você errou')
}