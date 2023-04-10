
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