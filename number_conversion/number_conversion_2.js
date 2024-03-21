/* Um outro jeito de realizar conversões é por meio dos operadores numéricos. */

// O operador ~~ é diferente do !! (que transforma o operando em um boolean)

/* O operador ~~ em JavaScript é chamado de operador de "bitwise" duplo de negação ou operador de "double tilde". Ele não é usado com 
muita frequência em JavaScript, mas é uma técnica de programação interessante para converter números em inteiros de 32 bits.

Quando aplicado a um número, o operador ~~ executa as seguintes etapas:

Converte para inteiro: O número é convertido implicitamente para um inteiro.
Aplica bitwise NOT: A operação bitwise NOT é aplicada ao inteiro, invertendo todos os bits.
Aplica bitwise NOT novamente: A operação bitwise NOT é aplicada novamente, revertendo os bits de volta ao estado original.

Por exemplo:

let num = 10.567; // Número decimal

console.log(~~num); // 10

Isso funciona porque, internamente, o JavaScript trata todos os números como números de ponto flutuante de 64 bits, mas o operador ~~ 
força o número a ser tratado como um número inteiro de 32 bits, removendo qualquer parte decimal. */

/* O comportamento dos exemplos abaixo é justificado pelo que se chama de coerção de tipos no javascript, em que a linguagem observa 
o tipo de operação que esta sendo executada e converte o operando para que a operação possa ocorrer. */

console.log(~~"10");
console.log(~~"10.35634");
console.log(+"10");
console.log("10" - 0);
console.log("10" * 1);
console.log("10" / 1);