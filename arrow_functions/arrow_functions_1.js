/* Arrow functions são uma outra forma de escrever funções, que oferece uma sintaxe mais enxuta, mas não necessariamente mais legível, analisar com cautela sua utilização. */

const sum = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const calculator = (fn) => {
  return (a, b) => {
    return fn(a, b);
  };
};

console.log(calculator(sum)(2, 2));
console.log(calculator(subtract)(2, 2));
