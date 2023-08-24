let pessoa = {
    nome: 'fernando',
    sobrenome: 'romero',
    idade: 37,
    social:{
        linkedin: 'fernando romero',
        instagran: {
            url: '@animewars',
            seguidores: 200
        }
    },
    
}





function pegarNomeCompleto({nome, sobrenome = 'silva',social:{instagran:{url:instagran}}}){
    return `${nome} ${sobrenome} (siga em ${instagran})`
}

console.log(pegarNomeCompleto(pessoa))