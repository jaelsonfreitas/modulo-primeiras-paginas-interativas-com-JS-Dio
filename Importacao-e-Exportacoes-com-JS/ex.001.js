/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada :
    5
    50
    10
    98
    23

    saída:
    98
*/
const {gets, print} = require('./funcoes-auxiliares-ex');

const drawnNumbers = [];

for (let i = 0; i < 5; i++) {
    const drawnNumber = gets();
    drawnNumbers.push(drawnNumber);
}

let highestValue = 0;

for (let index = 0; index < drawnNumbers.length; index++) {
    const drawnNumber = drawnNumbers[index];
    if (drawnNumber > highestValue) {
        highestValue = drawnNumber;
    } 
}

print(highestValue);

