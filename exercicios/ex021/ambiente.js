/*
let num = [5,6,8,4,6];
console.log(`vetor tem ${num.length} posições`);
num.push(7)
console.log(`agora é ${num}`);
num.sort()
console.log(num)
for(let pos = 0; pos<num.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
*/

let num = [5,6,8,4,6];
num.sort()
for( let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
let pos = num.indexOf(9)
if(pos == -1){
    console.log('o valor não existe')
} else{
console.log(`o valor está na posição ${pos}`)
}