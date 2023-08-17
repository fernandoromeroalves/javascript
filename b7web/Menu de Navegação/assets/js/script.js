

function menuToggle(){
    let menuArea = document.querySelector('#menu-area');

    /*if(menuArea.classList.contains('menu-opened') == true){
        menuArea.classList.remove('menu-opened');
        menu
    } else{
        menuArea.classList.add('menu-opened')
    } */

    if(menuArea.style.width == '200px') {
        menuArea.style.width = '0px'
    } else{
        menuArea.style.width = '200px'
    }
}

menuToggle()