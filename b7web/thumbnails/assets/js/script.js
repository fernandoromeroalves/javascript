
/*function mostrar() {
    let imagem = document.querySelector('#imagem').files[0];
    
    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200

    document.querySelector('#area').appendChild(img);
}
*/

function mostrar(){
    let reader = new FileReader();
    let imagem = document.querySelector('#imagem').files[0];

    reader.onloadend = () => {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.querySelector('#area').appendChild(img)
    }

    reader.readAsDataURL(imagem);
}