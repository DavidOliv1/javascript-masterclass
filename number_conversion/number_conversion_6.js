/* O método parseFloat é um pouco mais específico e converte apenas números no sistema de numeração decimal. Perceba que se a string
começar em 0 e trazer algum outro sistema de numeração (hexadecimal, binário etc), o método apenas reconhece o 0 e imprimirá esse
resultado. Porém se começarmos com algum caractere que não faça parte do sistema de numeração decimal, o método imprimirá NaN. */

console.log(parseFloat("10"));
console.log(parseFloat("2.5"));
console.log(parseFloat("0xFF"));
console.log(parseFloat("xFF"));
console.log(parseFloat("0b10"));