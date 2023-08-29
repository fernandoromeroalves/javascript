
//codigo sincrono, carrega em ordem
let nome = 'fernando';
let sobrenome = 'romero';
let completo = nome + ' '+sobrenome

// codigo assincrono que não carrega em ordem, o sistema prossegui mesmo sem a respota direta de algum codigo assincrono

let nome = 'fernando';
let sobrenome = 'romero';
let temperatura = Maquinhinha.pegarTemperatura();//assincrona
let completo = nome + ' '+sobrenome