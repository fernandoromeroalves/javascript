function inicio() {
    let nome = window.prompt('qual é seu nome?')
    let res = window.document.getElementById('resultado')
    res.innerHTML = `olá, <strong>${nome}</strong>! é um grande prazer te conhecer!&#x1F596`
}