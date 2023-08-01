


function calcular() {
    var txtv = window.document.getElementById('txtvel');
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>sua velocidade atual é <strong>${vel} km/h</strong></p>`;
    if(vel > 60){
        res.innerHTML += `<p>você está multado por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>dirija sempre com cinto d segurança</p>`;
}