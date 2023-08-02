
function verificar() {
   var data = new Date();
   var ano = data.getFullYear();
   var fano = document.getElementById('txtano');
   var res = document.querySelector('div#res');
   if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro] verifique os dados e tente novamento!')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'assets/imagens/bebemenino.png')
            }else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'assets/imagens/jovemmenino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'assets/imagens/homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'assets/imagens/homemidoso.png')
            }
        } else if (fsex[1].checked){ 
            genero = 'Mulher'
            if(idade >=0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'assets/imagens/bebemenina.png')
            }else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'assets/imagens/jovemmenina.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'assets/imagens/mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'assets/imagens/mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
   }
}