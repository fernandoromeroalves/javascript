function aparecerButton(){

let top = window.scrollY
if(top === 0){
    document.querySelector('.scrollbutton').style.display = 'none'
} else {
    document.querySelector('.scrollbutton').style.display = 'block'
}
}

window.addEventListener('scroll', aparecerButton);

aparecerButton()
function subirTela(){
   
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}
