function createPerson(name, lastName, age) {
    return{
    name,
    lastName,
    age,
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
    }
}

let person1 = createPerson('fernando', 'romero', 37);
let person2 = createPerson('pedro', 'pedreira',20);

console.log(person1.getFullName())