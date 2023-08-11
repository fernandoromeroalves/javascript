class Person {

    age = 0;
    steps = 0;

    constructor(name){
        this.name = name;
    }

    takeAStep() {
        this.steps++;
    }
    setAge(newAge){
        if(typeof newAge == 'number'){
            this.age = newAge;
        } else{
            console.log('idade não aceita, somente numeros')
        }
        
    }
}

//CLASSES ACTION



let p1 = new Person("joao", 20);
let p2 = new Person("Maria", 30);
let p3 = new Person("Pedro",40);


p1.takeAStep();
p1.takeAStep();
console.log(`passos de ${p1.name}: ${p1.steps}`);
console.log(`passos de ${p2.name}: ${p2.steps}`);

p1.setAge(37);

console.log(`${p1.name} tem ${p1.age} anos`)