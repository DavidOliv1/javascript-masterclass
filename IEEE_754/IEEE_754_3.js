/* O IEEE 754 é um padrão de representação numérica criado em 1985 e adotado por diversas linguagens de programação como o JavaScript,
Ruby, Python e Java. */

/* No JavaScript, o número é armazenado em 64 bits, em que temos 1 bit de sinal, que indica se o número é positivo ou negativo, temos
11 bits de expoente, que indica a ordem de grandeza desse número e 52 bits de fração ou mantissa, onde o número em si é expresso. */

/* NaN, ou Not a Number, é retornado quando realizamos uma operação numérica
onde não é possível determinar o resultado. */

console.log(10 * "JavaScript");
console.log(0/0);
console.log(Math.sqrt(-9));
console.log(Math.log(-1));
console.log(parseFloat("JavaScript"));

/* O NaN tem algumas peculiaridades. Perceba que se desejamos saber se algum
número ou operação retorna NaN, devemos usar a função isNaN, e não usar o 
operador de estrita igualdade. */
console.log(NaN === NaN);
console.log(isNaN(NaN));