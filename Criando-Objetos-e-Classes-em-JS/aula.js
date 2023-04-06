
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

function comparePerson(p1,p2) {
    if (p1.age > p2.age) {
        console.log(`${p1.name} is older than ${p2.name}`);
    } else if (p1.age < p2.age) {
        console.log(`${p2.name} is older than ${p1.name}`);   
     } else {
        console.log(`${p2.name} is the same age as ${p1.name}`);  
     }
}

const jaelson = new person('Jaelson', 30);
const thainah = new person ('Thainah', 33);

comparePerson(thainah, jaelson)