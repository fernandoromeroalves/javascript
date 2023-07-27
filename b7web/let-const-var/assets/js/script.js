/*
String e Template String

var nome = "fernando";
var sobrenome = "romero";

//nomecompleto = nome + ' ' + sobrenome;
var nomecompleto = `${nome} ${sobrenome}`

console.log("nome: " +nomecompleto);

var idade = 37;
var idadestring = `idade: ${idade} anos`
console.log(idadestring)*/

/* Condicional If / else

var idade = 10;
if (idade > 17) {
    console.log("você é maior de idade");
}else {
    console.log("você é MENOR de idade")
}
// <
// >
// ==
// >=
// <=
//!=
*/
/* Condicional == e ===
var idade = 20;
if(idade === 20){
    idade = idade + 15;
    console.log("idade adicionada com sucesso")
    console.log(idade)
}
*/

//Multi-condicionais (&& e ||)
// Condicional Dupla (if else)

var idade = 65;

if(idade < 18) {
    console.log("você é uma criança")
} else if(idade >= 18 && idade < 60){
    console.log("você é adulto");
} else if(idade >= 60) {
    console.log("você é um idoso")
}
