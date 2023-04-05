/* 



Código Condição de Pagamento:
1 - Á vista Débito, recebe 10% de desconto;
2 - Á vista no dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Ácima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
function applyDiscount(value, discount) {
    return (value - (value* (discount/100)));
}

function applyInterest(value, fees) {
    return (value + (value * (fees / 100)));
}


const stickerPrice = 100;
const formOfPayment = 4;

if (formOfPayment === 1) {
    console.log(applyDiscount(stickerPrice, 10));
} else if (formOfPayment === 2) {
    console.log(applyDiscount(stickerPrice, 15));
} else if (formOfPayment === 3) {
    console.log(stickerPrice - (stickerPrice));
} else {
    console.log(applyInterest(stickerPrice, 10))
} 