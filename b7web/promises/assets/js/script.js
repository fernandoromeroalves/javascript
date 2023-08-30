function pegarTemperatura() {
    return new Promise(function(resolve, reject){
        console.log('pegando a temperatura...');

        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000);
    })
}

//usando promise
console.log('codigo antes')

let temp = pegarTemperatura()

console.log('codigo durante')

temp.then(function(resultado){
    console.log('temperatura: '+resultado)
})
temp.catch(function(error){
    console.log('eita deu erro')
})

console.log('codigo depois')