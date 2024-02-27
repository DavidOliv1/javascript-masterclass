/* Podemos declarar valores default para os parâmetros da função caso eles não sejam fornecidos quando da chamada da mesma. */

const sum = function(a = 1, b = 1) {
    return a + b;
}

console.log(sum());
console.log(sum(2,2));
console.log(sum(5));