/*
2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos : nome, peso, e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/(altura*altura));
    Instancie uma pessoa chamada Jośe que tenha 70 kg de peso e 1,75 de altura e peça para José dizer o valor do seu IMC.
*/

class persons {
    name;
    weight;
    age;

    constructor(name,weight,age) {
        this.name = name
        this.weight = weight
        this.age = age
    }

     calculateIbm(){
       return this.weight/(this.age * this.age);
     }
     classifyBmi(){
        const imc = this.calculateIbm();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if ( imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        }  else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade grave');
        }
     }
}
const jose = new persons('José', 70, 1.75);
const thainah = new persons('Thainah', 82, 1.69)
console.log(jose.classifyBmi());
console.log(thainah.classifyBmi()); 