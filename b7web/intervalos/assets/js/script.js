/*let timer;

function comecar(){
   timer = setInterval(showTime, 999) 
}
function parar(){
    clearInterval(timer)
}


function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+ ':'+ m + ':' + s;

    document.querySelector('.demo').innerHTML = txt 

}
*/
let timer
function rodar() {
    timer = setTimeout(function () {
    document.querySelector('.demo').innerHTML = 'rodou!!!!!!!!!!!!!'
}, 2000)
}

function parar(){
    clearTimeout(timer)
}