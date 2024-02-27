/* Podemos acessar os parâmetros da função por meio da variável implícita arguments. */

const sum = function() {
    let total = 0;
    for (let args in arguments) {
        total += arguments[args];
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));