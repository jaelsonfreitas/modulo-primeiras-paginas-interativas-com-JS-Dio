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

const entrada = [ 5, 50, 10, 98, 23];
let  i = 0;

function gets() {
    const value = entrada[i];
    i = i + 1;
    return value;
}

function print(text) {
    console.log(text);
}

module.exports = {gets, print };