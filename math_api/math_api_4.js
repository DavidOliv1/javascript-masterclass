// Math é um objeto global que contém constantes matemáticas e métodos para a realização de operações envolvendo números

// min: Retorna o menor número passado por parâmetro.
// max: Retorna o maior número passado por parâmetro.
// random: Retorna um número randômico entre 0 e 1, não incluindo o 1.

console.log(Math.min(1,2,3,4,5,6));
console.log(Math.max(1,2,3,4,5,6));
console.log(Math.random());

/* O random sempre retorna um número entre 0 e 1, se quisermos um número maior, podemos multiplicar. Multiplicando por exemplo por 1000,
teremos que o valor retornado será um número menor que mil. Tendo em vista que o random não inclui o 1. */
console.log(Math.random() * 1000);
// Se quisermos apenas a parte inteira podemos usar algum método de arredondamento.
console.log(Math.floor(Math.random() * 1000));