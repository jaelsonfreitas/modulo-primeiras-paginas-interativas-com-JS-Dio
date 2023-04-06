
const person = {
    name: 'Jaélson Freitas',
    age: 33,

    toDescribe : function () {
        console.log(`My name is ${this.name} and my age is ${this.age} years.`)
    }
};

const atribute = 'name'

console.log(person[atribute]);