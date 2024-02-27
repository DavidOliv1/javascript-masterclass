/* Também podemos acessar os parâmetros da função através do rest parameter. */

const sum = function(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));