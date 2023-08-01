var agora = new Date()
var hora = agora.getHours()
console.log(`agora são aproximadamente ${hora} horas`)
if(hora < 12 && hora > 0) {
    console.log('bom dia')
} else if(hora > 12 && hora < 18) {
    console.log('Boa Tarde')
}else {
    console.log('Boa Noite')
}