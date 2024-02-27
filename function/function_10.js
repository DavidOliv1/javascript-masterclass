/* Também podemos acessar os parâmetros da função através do rest parameter. */

const sum = function(...numbers) {
    console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);