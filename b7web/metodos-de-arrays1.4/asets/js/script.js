let lista = [
    {nome: 'fernando', sobrenome: 'romero'},
    {nome: 'pedro', sobrenome: 'silva'},
    {nome: 'felipe', sobrenome: 'figueiredo'}
]

let lista2 = [];
/*lista2 = lista.map(function(item){
    return item * 2
})
for(let i in lista){
    lista2.push(lista[i] * 2)
}



lista2.filter(function(item){
    if(item < 20){
        return true;
    } else {
        return false;
    }
})

let res = lista2 = lista.every(function(item){
    return (item > 2)? true : false
})*/

lista2 = lista.find(function(item){
    return (item.nome == 'pedro')? true : false
})
let res = lista2

console.log(res)