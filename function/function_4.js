/* As funções no javascript são de primeira classe, o que significa que podem ser atribuídas a variáveis, podem ser passadas
como parâmetros de outra função e retornadas. */

const sum = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const calculator = function() {
    return function() {
        return 'calculator';
    };
}

console.log(calculator);
console.log(calculator());
console.log(calculator()());