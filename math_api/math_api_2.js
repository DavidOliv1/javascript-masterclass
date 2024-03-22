// Math é um objeto global que contém constantes matemáticas e métodos para a realização de operações envolvendo números

// abs: Converte o sinal do número para positivo.
// ceil: Arredonda o número para cima.
// floor: Arredonda o número para baixo.
// round: Arredonda o número para cima se a parte decimal for de 5 a 9 e para baixo se for de 0 a 4.
// sign: Retorna 1 se o número for positivo e -1 se for negativo.
// trunc: Elimina a parte decimal do número, tornando-o um inteiro.

console.log(Math.abs(10));
console.log(Math.abs(-10));
console.log(Math.ceil(1.1));
console.log(Math.ceil(-1.1));
console.log(Math.floor(9.9));
console.log(Math.floor(-9.9));
console.log(Math.round(4.5));

/* Para números negativos o round se comporta de maneira diferente. Caso a parte fracionária seja maior que 0 e menor ou igual a 0.5,
o número será arredondado para cima. Se for maior que 0.5, será arredondado para baixo. */
console.log(Math.round(-4.5));
console.log(Math.round(-4.51));
console.log(Math.round(-4.4));
console.log(Math.round(-4.3));
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.trunc(2.3));
console.log(Math.trunc(-2.3));