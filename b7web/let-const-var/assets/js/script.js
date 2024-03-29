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


/* O loop for 


for(let n = 0; n < 15; n++){
    console.log('frase qualquer  '+n)
}

*/


/*Dando loop em arrays


let cores = [
    {nome: 'preto',qtd:10},
    {nome: 'azul',qtd: 5},
    {nome: 'vermelho',qtd:15}
];


for(let n = 0; n < cores.length; n++){
    console.log(cores[n].qtd)
}

for( let i in cores) {
    console.log(cores[i].nome = cores[i].nome.toUpperCase() )
}

for(let cor of cores) {
    console.log(` Nome: ${cor.nome} - ${cor.qtd}`)
}

*/

/* O loop while 

let numero = 0;

while(numero < 10) {
    console.log(`o numero da vez é ${numero}`);
    numero++;
}

for(let numero = 0;numero <=10; numero++){
    console.log(`o numero desta vez é ${numero}`);
}

*/


/* Exercício de loops #8
let frutas = ['maça','uva','banana'];

for(let x in frutas){
    console.log(frutas[x])
}
let num = 1

while(num <=100){
    console.log(`esse é o numero ${num}`);
    num++;
}

 */


/*Funções de array 


let frutas = ['maça','uva','laranja','banana'];

console.log(frutas.join(' & '));

frutas[1] = 'pera'


console.log(frutas.join(' & '));

frutas[frutas.length-1] = 'melão'
console.log(frutas.join(' & '));

*/


/* Ordenação de array 

let frutas = ['maça','uva','laranja','banana'];

frutas.sort(); //colocar em ordem alfabeticae
frutas.reverse();
console.log(frutas) 

let cars = [
    {brand: 'fiat', year: 2022},
    {brand: 'bmw', year: 2018},
    {brand: 'ferrari', year: 2020}
]
cars.sort((a,b)=> a.year - b.year);
console.log(cars);

*/


/* Iteração de array 1 

let frutas = ['maça','uva','laranja','banana'];

let bigFrutas = frutas.filter((item) => {
   return item.length > 4
})

console.log(bigFrutas) 

let frutas = ['maça','uva','laranja','banana'];

let ok = frutas.every((value) => {
    return value.length > 3;
})

if(ok) {
    console.log ('todos maiores que tres')
} else {
    console.log('todos não são maiores que tres')
}
  

let frutas = ['maça','uva','laranja','banana'];

if(frutas.includes('uva')) {
    console.log('tem uva sim')
} else {
    console.log('nada de uva')
}

*/

/* O que é DOM? Manipulando elementos 1 Manipulando atributos 

let botao = document.querySelector('.botao');
botao.addEventListener("click",() => {clicou()} )
//forma de acionar evento gatilho pelo java direto


function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    ul.innerHTML = ul.innerHTML + "<li>item alterado pelo JavaScript</i>"
    ul.children[0].innerHTML = "Item <strong>alterado</strong>"
}
function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    

    let newLi = document.createElement("li");
    newLi.innerText = "item adicionado";
    ul.prepend(newLi)
}

function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    let newUl = document.createElement('ul');
    ul.after(newUl);

    for(let i = 0;i < 5;i++){
        let newLi = document.createElement('li');
        newLi.innerHTML = "item add" + i;
        newUl.append(newLi);

    }
    

    
}

function clicou() {
    const input = document.querySelector('input')
    if(input.hasAttribute('placeholder')) {
        console.log('tem placeholde sim')
    } else {
        console.log('não tem nadinha de placeholder')
    }
}



function clicou() {
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao')
    
    if(input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        botao.innerText = "mostrar senha";
    }else {
        input.setAttribute('type', 'text');
        botao.setAttribute('value', 'ocultar senha')
        botao.innerText = "ocultar senha";
    }
}

function clicou() {
   const li = document.querySelector('li')

   
   if (li.style.backgroundColor === 'red') {
    li.style.backgroundColor = 'blue';
    li.style.fontSize = '25px';
   } else {
    li.style.backgroundColor = 'red';
    li.style.fontSize = '30px';
   }
   
}


function clicou() {
   const button = document.querySelector('button');

    button.classList.add('verde');
   if(button.classList.contains('azul')) {
    button.classList.add('verde')
    button.classList.remove('azul')   
} else {
    button.classList.add('azul')
    button.classList.remove('verde')
}
}


function clicou() {
   const button = document.querySelector('button');

   if(button.classList.contains('azul')){
   button.classList.replace('azul', 'verde')
   } else {
    button.classList.replace('verde', 'azul')
   }
}






function soltou(e){
    console.log('tecla apertada: '+ e.code)
    console.log('SHIFT ?' + e.shiftKey);
    console.log('CTRL?' + e.ctrlKey);
    console.log('--')
}

const input = document.querySelector('input')
input.addEventListener('keyup', soltou)
*/




/*Exercício: Lista de Tarefas Simples 

// elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');
//funções
input.addEventListener('keyup', handleKeyUp);
//eventos
function handleKeyUp(e) { 
    if(e.key === 'Enter' ) {
        //acionar elemento li na lista
       const newLi = document.createElement('li');
       newLi.innerHTML = input.value;
       lista.appendChild(newLi);
        // limpar a campo texto
       input.value = ' ';
    }
}

*/

