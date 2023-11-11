
const idade = 17;

if(idade >= 18){
    console.log('você é maior de idade e tem '+idade+' anos')
} else{
    console.log('você é menor de idade e tem '+idade+' anos');
}

const nome = 'fernando';
const sobrenome = 'Romero';

if(nome != ''){
    console.log( nome + ' ' + sobrenome);
} else {
    console.log('fulano'+' '+sobrenome)
}

const media = 4;

if(media >= 7){
    console.log('aprovado(a)')
}else if(media >= 5){
    console.log('recuperação')
} else{
    console.log('reprovado')
}