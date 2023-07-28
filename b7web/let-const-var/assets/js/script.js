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

/*Multi-condicionais (&& e ||)
// Condicional Dupla (if else)

var idade = 65;

if(idade < 18) {
    console.log("você é uma criança")
} else if(idade >= 18 && idade < 60){
    console.log("você é adulto");
} else if(idade >= 60) {
    console.log("você é um idoso")
}*/


/* Desmistificando o IF

let idade = 61;
let verificacao = idade > 18
console.log(ver)



let adulto = idade >= 18 && idade < 60;
if (adulto) {
    console.log("é adulto");
} else {
    console.log("Não é adulto");

if(false) {
    console.log("entrou")
}}*/



/*Exercício de condicional #2

let x = 10;
let y = 5;
console.log(x > y); // true

var w = "10";
let z = 10;
console.log(w === z) // false

let a = 10;
var b = 5;
console.log(x != y) // true

let preco = 40.3;

if(preco <= 45) {
    console.log("preço está barato") //aparecerá se variavel for menor que 45
} else {
    console.log("preço está caro") //aparecerá se primeiro quisito não for atendido
}*/



/*Condicional Ternário

let isMenber = false;

let shipping = isMenber ? 2 : 10;

console.log(isMenber ? 'você é membro' : 'você não é membro')
console.log("frete: " + shipping)

let age = 90;
let isAdult = (age >=18 && age <60 ? 'sim' : 'não');
console.log(isAdult); */



/*Switch


let profession = "fiscal"

console.log("profissão: "+profession)
switch(profession) {
    case 'fiscal':
        console.log('sua camisa será VERDE')
    break;
    case 'bombeiro':
        console.log('sua camisa será VERMELHA')
    break;
    case 'policial':
        console.log('sua camisa será ZUL')
    break;
    default:
        console.log('sua camisa será PRETA')
        break;
}  */




/*Introdução a funções


function gravidade() {
    console.log('a gravidade do planeta é:');
    console.log(9.8);
}
console.log('opa tudo bem?')
gravidade();
 */


/*Passando parâmetros em funções


function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log('Resultado:'+resultado);
}

somar(10,15); 

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}
nomeCompleto("fernando", "romero");
nomeCompleto("pedro", "henrique")
nomeCompleto("luiz", "afonso")
*/


/* Retorno da função 

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
    
}

let completo = nomeCompleto("fernando", "romero");
console.log("completo: "+completo) */



/*  Função com retorno condicional 


function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true;
    } else {
        return false;
    }
}
let idade = 15;
let verificacao = maiorDeIdade(idade);

if(verificacao) {
    console.log('é maior de idade')
} else {
    console.log('é menor de idade')
}

 */


/* Exercício de funções #4 */