/* O IEEE 754 é um padrão de representação numérica criado em 1985 e adotado por diversas linguagens de programação como o JavaScript,
Ruby, Python e Java. */

/* No JavaScript, o número é armazenado em 64 bits, em que temos 1 bit de sinal, que indica se o número é positivo ou negativo, temos
11 bits de expoente, que indica a ordem de grandeza desse número e 52 bits de fração ou mantissa, onde o número em si é expresso. */

/* Infinity, que pode ser positivo ou negativo, é retornado quando uma operação
ultrapassa os limites do tipo Number. */

console.log(1/0);
console.log(Math.pow(10, 1000));
console.log(Number.MAX_VALUE * 2);
console.log(Math.log(0));
console.log(-Number.MAX_VALUE * 2);