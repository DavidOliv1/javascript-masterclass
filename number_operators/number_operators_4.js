// Operadores binários (ou operadores bit a bit)

// |(OR), &(AND), ^(XOR), ~(NOT), <<, >> e >>> (deslocamento ou shift)

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_bit_a_bit

/* Para diferenciar números positivos de negativos utilizamos o bit de sinal que será o bit mais significativo, ou seja, o MSB é aquele que irá informar o sinal do número:

Se este dígito for 0, o número é positivo
Se for 1, o número é negativo 

*/

// Os operadores bit a bit convertem os números para binários de 32 bits e realizam a operação, mas retornam valores númericos padrões do JavaScript.

// Podemos visualizar como essa operação seria feira convertendo o número para binário e adicionando o restante de bits necessários:

console.log((4).toString(2).padStart(32, 0));
console.log((3).toString(2).padStart(32, 0));

console.log(4 | 3);

console.log((3).toString(2).padStart(32, 0));
console.log((1).toString(2).padStart(32, 0));

console.log(3 & 1);

console.log((5).toString(2).padStart(32, 0));
console.log((2).toString(2).padStart(32, 0));

console.log(5 ^ 2);

console.log((2).toString(2).padStart(32, 0));
console.log((-3 >>> 0).toString(2).padStart(32, 0));

// O operador ~(NOT) inverte todos os bits, incluindo o bit de sinal

/* Os números negativos em binário são representados na forma de complemento a 2. 

O complemento a 2 é realizado da seguinte forma:

Invertemos todos os bits do número binário, ou seja, tudo que é 0 vira 1 e vice-versa;
Somamos um (0001) ao valor invertido.
Assim, é preciso entender dois pontos importantes:

Quando trabalhamos com complemento de 2 se o número binário tem dígito 1 no MSB significa que ele é negativo;
Para saber o valor que aquele número representa, precisamos realizar a operação de inverter e depois somar um.

A soma de números binários segue algumas regras:

0 + 0 = 0

0 + 1 = 1

1 + 0 = 1

1 + 1 = 10 (ou seja 0 e vai a um)

*/

console.log(~2);

console.log((4).toString(2).padStart(32, 0));
console.log((16).toString(2).padStart(32, 0));

// No exemplo abaixo, o 4 em representação binária é deslocado 2 bits a esquerda, preenchendo com zeros à direta. Perceba que cada bit que deslocamos a esquerda multiplicamos o valor por 2 e cada bit que deslocamos a direita dividimos o valor por 2.

console.log(4 << 2);

console.log((128).toString(2).padStart(32, 0));
console.log((64).toString(2).padStart(32, 0));

console.log(128 >> 1);

console.log((-2 >>> 0).toString(2).padStart(32, 0));
console.log((2147483647).toString(2).padStart(32, 0));

console.log(-2 >>> 1);

/* Para representar um número negativo no sistema binário usando o complemento de dois, siga estes passos:

Comece com a representação binária do número positivo correspondente.
Inverta todos os bits (troque 0s por 1s e 1s por 0s).
Adicione 1 ao número binário resultante.
Por exemplo, para representar o número -5:

O número positivo correspondente a 5 é 101 em binário (porque 4 + 1 = 5).
Invertendo os bits, obtemos 010.
Adicionando 1 ao número invertido, temos 010 + 1 = 011.
Portanto, -5 é representado como 011 em binário usando o complemento de dois.

*/

console.log((3).toString(2).padStart(32, 0));

// Perceba que o -3 é representado pela inversão de todos os bits do 3 com a adição de um bit.

console.log((-3 >>> 0).toString(2).padStart(32, 0));

// Para saber quanto esse número negativo representa na forma decimal, basta fazermos o complemento de 2, ou seja, inverter todos os bits e adicionar um bit ao resultado.

console.log((-3).toString(2).padStart(32, 0));
