
var pais = window.document.getElementById('pais');
var res = window.document.getElementById('res');

function enviar() {
    if(pais === 'brasil') {
        res.innerHTML ='você é brasileiro'
    } else {
        res.innerHTML ='você não é brasileiro'
    }
}  