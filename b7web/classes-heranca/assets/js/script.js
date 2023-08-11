class Person {

   age = 0;

   constructor (name) {
    this.name = name
   }

   sayHi(){
    console.log(`${this.name} diz oi`)
   }
    
}

class Student extends Person {
    
    
    constructor(name, id) {
        super(name);
        this.id = id
    }

    sayHello() {
        super.sayHi();
    }
}

let p1 = new Student("fernando",2)
p1.age = 37;


p1.sayHello();
