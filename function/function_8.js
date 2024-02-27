/* Podemos acessar os parâmetros da função por meio da variável implícita arguments. */

const sum = function() {
    console.log(arguments);
}

sum();

const sum1 = function() {
    console.log(arguments);
}

sum1(1, 2, 3, 4, 5, 6, 7, 8, 9);