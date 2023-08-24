let info = {
    nome: 'fernando',
    sobrenome: 'romero',
    idade: 37
}

let novaInfo = {
    ...info,
    pais: 'brasil',
    estado: 'rio grande do sul'
}

console.log(novaInfo)