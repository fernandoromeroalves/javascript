class Person {

    _age = 0;
    steps = 0;

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    takeAStep() {
        this.steps++;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
    get age(){
        return this._age;
    }

    set age(x) {
        if(typeof x == 'number'){
        return this._age = x
        }
    }
}

//Classes: Getter e Setter




let p1 = new Person("joao", "Silva");
let p2 = new Person("Maria", "Ribeiro");
let p3 = new Person("Pedro", "Pascal");


p1.age = 20;

console.log(`${p1.fullName} tem ${p1.age} anos`)