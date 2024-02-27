/* A function declaration sofre um processo de hoisting, de modo que eu posso invoca-lá no código antes mesmo de defini-lá, enquanto
que na funcion expression, em que eu atribuo a função a uma variável, não posso invoca-lá antes de declarar a variável, por isso
incorre em erro. */

// Function declaration

function sum(a, b) {
    return a + b;
}

// Function expression

const sum1 = function(a, b) {
    return a + b;
}

console.log(sum(2, 2));
console.log(sum1(2, 2));