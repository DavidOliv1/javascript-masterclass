/* As funções no javascript são de primeira classe, o que significa que podem ser atribuídas a variáveis, podem ser passadas
como parâmetros de outra função e retornadas. */

const sum = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const calculator = function(fn) {
    return function(a, b) {
        return fn(a, b);
    };
}

console.log(calculator(sum)(2,2));
console.log(calculator(subtract)(2,2));