// Por meio do destructuring podemos extrair valores de arrays e objetos de uma forma mais simples e direta.

// Podemos aplicar destructuring também nos parâmetros de uma função, tanto com arrays quanto com objetos.

const sum = function ([a, b]) {
  return a + b;
};

console.log(sum([2, 2]));
