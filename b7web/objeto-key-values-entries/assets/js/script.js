/*
let pessoa = {
    nome: 'fernando',
    sobrenome: 'romero',
    idade: 37
}

console.log(Object.entries(pessoa));

*/

let cartao = '1234123412341234';

let lestDigitos = cartao.slice(-4) //peguei os 4 ultimos digitos

let cartaoMascarado = lestDigitos.padStart(16,'*')

console.log('este é seu cartão? '+cartaoMascarado)