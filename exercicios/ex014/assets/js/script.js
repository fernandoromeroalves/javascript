function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'assets/imagens/manha.png'
        document.body.style.background = '#428A9F'
    } else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'assets/imagens/tarde.png'
        document.body.style.background = '#A16102'
    } else {
        //boa noite
        img.src = 'assets/imagens/noite.png'
        document.body.style.background = '#3B3050'
    }
}