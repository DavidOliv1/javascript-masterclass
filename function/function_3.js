/* A function declaration sofre um processo de hoisting, de modo que eu posso invoca-lá no código antes mesmo de defini-lá, enquanto
que na funcion expression, em que eu atribuo a função a uma variável, não posso acessa-lá antes de declarar e inicializar a variável, 
por isso incorre em erro. */

// Function expression

console.log(sum1(2, 2));

const sum1 = function(a, b) {
    return a + b;
}