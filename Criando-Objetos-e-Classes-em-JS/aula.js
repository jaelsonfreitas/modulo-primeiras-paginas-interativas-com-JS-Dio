
class person {
    name;
    age;

    toDescribe(){
        console.log(`My name is ${this.name} and my age is ${this.age} years.`);
    }
}


const jaelson = new person();
jaelson.name = 'Jaelson';
jaelson.age = 33;

const catarina = new person();
catarina.name = 'Catarina';
catarina.age = 52;

console.log(catarina); 