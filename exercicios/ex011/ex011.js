var idade = 15;
console.log(`sua idade é ${idade}`)
if(idade < 16) {
    console.log('não vota')
} else if(idade < 18 || idade > 65)
    {
    console.log('voto opcional')
} else {
    console.log('voto obrigatorio')
}
