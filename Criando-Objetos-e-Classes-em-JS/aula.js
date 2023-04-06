
class person {
    name;
    age;
    yearOfBirth;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.yearOfBirth = 2023 - age;
    }

    toDescribe(){
        console.log(`My name is ${this.name} and my age is ${this.age} years.`);
    }
}


const jaelson = new person('Jaélson', 33);
const catarina = new person('Catarina', 52);

console.log(jaelson);
