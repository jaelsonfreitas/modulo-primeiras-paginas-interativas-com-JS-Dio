/*
2 - Crie um programa que seja capaz de percorrer uma lista de números e imprimir cada número par encontrado. E imprimir numero é impar ou par, conforme o seu resultado.
*/

const numbers = [ 1,3,5,6,8,15,17,19,33,22,12,43,65,44,66,55,43,22];
for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (number % 2 === 0) {
        console.log(number , ' é Par.');
    } else {
        console.log(number, 'é Impar');
    }
}