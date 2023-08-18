function trocarImagem(filename,animalname){
    document.querySelector('.imagem').setAttribute('src','assets/imagens/'+ filename);
    document.querySelector('.imagem').setAttribute('data-animal',animalname);
    
}

function pegarAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert('o personagem é: '+ animal)
}