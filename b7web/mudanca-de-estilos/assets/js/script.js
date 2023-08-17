function azul(){
    limpar();
    document.querySelector('#titulo').classList.add('azul');
    document.querySelector('#titulo').innerHTML = 'class azul';
}
function vermelho(){
    limpar();
    document.querySelector('#titulo').classList.add('vermelho');
    document.querySelector('#titulo').innerHTML = 'class vermelho';
    
}
function verde(){
    limpar();
    document.querySelector('#titulo').classList.add('verde');
    document.querySelector('#titulo').innerHTML = 'Ola, JavaScript';
    
}


function limpar(){
    document.querySelector('#titulo').classList.remove('azul');
    document.querySelector('#titulo').classList.remove('vermelho');
    document.querySelector('#titulo').classList.remove('verde');
    
}

function mostrarTelefone(elemento){
    elemento.style.display = "none"
    document.querySelector('#telefone').style.display = "block";
}