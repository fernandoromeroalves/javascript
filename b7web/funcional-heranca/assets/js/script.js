const defaultUser = {
    name:'pedro',
    email:'padrão',
    level: 1
}

const user1 = {
    ...defaultUser,
    name: 'fernando',
    email: 'romero@gmail.com'
}

console.log(user1)

const adm1 = {
    ...defaultUser,
    name: 'rodrigo',
    level: 2
}

console.log(adm1)