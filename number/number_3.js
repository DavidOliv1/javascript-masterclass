// O tipo Number é primitivo, imutável e é representado internamente pelo padrão IEEE 754 de 64 bits, ou seja, os numbers que vemos visualmente são internamente (em memória) convertidos para um binário de 64 bits (8 bytes).

// O JavaScript suporta os sistemas de numeração decimal, hexadecimal, binário e octal

// O sistema de numeração decimal, de base 10, deve iniciar com um número de 1 a 9, seguido por números de 0 a 9 com ou sem ponto, indicando se é inteiro ou decimal

// O sistema de numeração hexadecimal, de base 16, deve iniciar com 0x ou 0X, seguido por números de 0 a 9 e letras de A a F

// O sistema de numeração binário, de base 2, deve iniciar com 0b ou 0B, seguido por números de 0 a 1

// O sistema de numeração octal, de base 8, deve iniciar com 0, 0o ou 0O seguido por números de 0 a 7

// Os métodos toExponential, toFixed e toPrecision podem ser utilizados para mudar a forma como um número é representado

console.log((123.4).toExponential(10));
console.log((1234.5).toExponential(10));
console.log((123.4).toFixed(10));
console.log((10).toFixed(2));
console.log((123.4).toPrecision(10));
