/* O rest parameter deve ser sempre o último parâmetro especificado. */

const sum = function(a, b, c, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);