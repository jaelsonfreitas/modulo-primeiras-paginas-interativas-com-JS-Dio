/* Faça um programa para calcular o valor de uma viagem.

Voçê terá tres variáveis. Sendo elas:
1- Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3 - Distancia em Km da viagem;

Imprima no console o valor que será gasto de combustível para realizar essa viagem. 
*/

const precoCombustivel = 5.39;
const kmPorLitro = 10;
const distancia = 780;

const litrosConsumidos = distancia/kmPorLitro
const gastoTotal = litrosConsumidos*precoCombustivel

console.log (gastoTotal.toFixed(2))