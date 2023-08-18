let dia = 6;
let diaNome = '';
switch(dia) {
    
    case 6:
    case 7:
        diaNome = 'final de semana';
        break;
    default:
        diaNome = 'dia de semana'
        break
}

document.querySelector('#dia').innerHTML = 'Hoje é: '+diaNome
let carros = ['ferrari', 'fusca', 'palio','corola' ]
let html = '<ul>'
carros.push  = 'lamborguini'

for(let i in carros){
    html+= '<li>' + carros[i] +'</li>'
}


html+='</ul>'
document.querySelector('#demo').innerHTML = html;

let inner = '';

let c = 1;

while(c <= 10){
    inner += 'Numero: '+c+'<br>';
    c++
}

for(let c = 1; c <=10; c++){
    inner += 'Numero: '+c+'<br>';
}

document.querySelector('#demo2').innerHTML = inner;