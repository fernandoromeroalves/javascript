function add(...numeros){
    console.log(numeros)
}
add(5,6,4,8,6,9);

let nomes = ['fernando', 'paulo'];

function adicionar(nomes,...novosNomes){
     let novoConjunto = [
        ...nomes,
        ...novosNomes
     ] 
     return novoConjunto
}

let outros = adicionar(nomes,'antonio','maria','jose');

console.log(outros)