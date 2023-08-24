let info = ['fernando romero', 'fernando', 'romero', '@animewars'];

let [nomeCompleto, , , instagran] = info;

console.log(nomeCompleto, instagran)


let [nome, sobrenome, idade = 37] = ['fernando', 'romero']

console.log(nome,sobrenome, idade)

function criar(){
    return [1,2,3]
}

let [a,b,c] = criar();

console.log(a,b,c)