/* Arrow functions são uma outra forma de escrever funções, que oferece uma sintaxe mais enxuta, mas não necessariamente mais legível, analisar com cautela sua utilização. 

Obs: Na utilização de arrow functions, se as chaves do bloco forem removidas, temos um return implícito. Em funções com muitos blocos aninhados, esse recurso pode atrapalhar a legibilidade do código. Como na escrita da função calculator abaixo. */

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const calculator = (fn) => (a, b) => fn(a, b);

console.log(calculator(sum)(2, 2));
console.log(calculator(subtract)(2, 2));
