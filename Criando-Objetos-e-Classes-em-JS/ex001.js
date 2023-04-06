/* 
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor , e um gasto médio de combustivel por KM rodado.
Crie um método que dado a quantidade de km e gasto de combustivel e nos forneça o valor gasto para percorrer esse trajeto.*/

class cars {
    brand;
    color;
    averageCostPerKilometer;

    constructor (brand, color, averageCostPerKilometer) {
        this.brand = brand;
        this.color = color;
        this.averageCostPerKilometer = averageCostPerKilometer;
    }

    calculateTravelCost(distance, fuelPrice) {
        return (distance * this.averageCostPerKilometer * fuelPrice).toFixed(2);

    }
}
const uno = new cars('Fiat', 'Red', 1/12);
console.log('Using the Uno, I will spend R$ ', uno.calculateTravelCost(70,5), 'reais.');
const palio = new cars('Fiat', 'Black', 1/9);
console.log('Using the Palio, I will spend R$:', palio.calculateTravelCost(70,5), 'reais.')