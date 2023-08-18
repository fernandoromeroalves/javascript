function alterar(titulo){
    document.querySelector('#titulo').innerHTML = titulo;
    document.querySelector('#campo').innerHTML = titulo
}
alterar('titulo de exemplo')

function somar(x,y){
    let total = x * y;
    document.querySelector('#campo').innerHTML = total;
    return total
};

somar(8, 10)

let resultado = somar(10,25)

console.log(resultado)