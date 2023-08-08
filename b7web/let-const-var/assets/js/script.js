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


/* Exercício de funções #4 
function calcPct(n1, n2) {
  var pct = (n2 / n1) * 100;
  return pct
}

var x = 80;
var y = 10;

var pct = calcPct(x, y);

console.log(`${pct}% de ${x} é ${y}`)
*/



/* Exercício de funções #5 



function calcularImovel(metragem, quartos) {
    var m2 = 3000;
    var preco = 0

    switch(quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 *1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }
    return preco
    
}

var metragem = 58;
var quartos = 2;
var preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);



function calcValorImovel(metros, qtdeQuartos) {
    if (qtdeQuartos === 1) {
      return metros * 3000
    } else if (qtdeQuartos === 2) {
      return (metros * 3000) * 1.2
    } else if (qtdeQuartos === 3) {
      return (metros * 3000) * 1.5
    }
  }
  
  let metragem = 58
  let quartos = 2
  console.log(`O imóvel irá custar: R$ ${calcValorImovel(metragem, quartos)}`)

*/


/* Exercício de funções #6 

function validar(usuario, senha) {
    if(usuario === 'pedro'&& senha === 123){
        return true
    } else{
        return false
    }
}

var usuario = 'pedro'
var senha = 123

var validacao = validar(usuario, senha);
if(validacao) {
    console.log('acesso autorizado')
} else {
    console.log('acesso negado')
}
*/



/* Arrow Function 

function somar(x, y){
    return x + y;
}
console.log(somar(10,5))


const somar = (x, y) => {
    return x+ y
}
console.log(somar(10,10))


const somar = (x, y) => x+ y

console.log(somar(10,15))



function sobrenome(sob) {
    return 'fernando ' + sob;
}

console.log(sobrenome('romero'))



const sobrenome = sob => 'fernando ' + sob

console.log(sobrenome('romero'))

*/


/* Variáveis dentro de funções


var caunt = 0;

function add() {
    var caunt = 0;
    caunt++;
}

add();
add();

console.log(caunt);

 */



/* Funções dentro de funções 



function addSquare(a, b){
   // function square(x) {
   //     return x * x;
   // } ou 
    const square =(x) => { return x * x;}

   let sqrA = square(a)
   let sqrB = square(b)
return sqrA + sqrB}

console.log(addSquare(2,3))

*/

/* Introdução a Array 

let colors = ['blue', 'red', 'green'];

console.log(colors);

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

let lista = [
    'bege',
    ['xx', 'yy']
];

console.log(lista[1]);

console.log(lista[1][0])

*/


/* Operações básicas de array 


let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];
ingredientes.shift();

console.log(ingredientes);

console.log(`total de ingredientes: ${ingredientes.length}`);

*/




/* Exercício de array #7 

let carros = ['BMW', 'Ferrari', 'Mercedes'];

let x = 1

console.log('1. '+ carros[x])
carros[1] = 'Audi'
console.log('2. lista com Audi: '+carros)


carros.push('Volvo')
console.log('3. lista com Volvo: '+ carros);


console.log('4. itens no array:' + carros.length)

*/



/* O que são objetos? 


let personagem = {
    nome: 'fernando',
    idade: 90,
    pais: 'Brasil',
    olhos:['preto', 'azul'],
    caracteristicas:{
        forca: 20,
        magia: 5,
        stamina: 15
    }
}

console.log(personagem)
console.log(`${personagem.nome} tem ${personagem.idade} anos`)

console.log(personagem.caracteristicas.forca)
console.log(personagem.olhos[1])





/* Acessando e alterando objetos 

let personagem = {
    nome: 'fernando',
    idade: 90,
    pais: 'Brasil',
    olhos:['preto', 'azul'],
    caracteristicas:{
        forca: 20,
        magia: 5,
        stamina: 15
    }
}

personagem.nome = 'Romero'

console.log(personagem.nome);

personagem.caracteristicas.forca += 5;

console.log(personagem.caracteristicas.forca);

personagem.olhos.push('Verde');

console.log(personagem.olhos);


*/
/*
let personagem = {
    nome: 'fernando',
    idade: 37,
    carros: [
        {modelo: 'fiat', cor: 'preto'},
        {modelo: 'ferrari', cor: 'vermelho'}
    ]
}

console.log(`O ${personagem.nome} tem ${personagem.idade} anos e dirigi uma ${personagem.carros[1].modelo} de cor ${personagem.carros[0].cor}`);


*/


/* Função dentro de objeto 

let pessoa = {
    nome: 'fernando',
    sobrenome: 'romero',
    idade: 37,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto());
*/


/* O loop for */


