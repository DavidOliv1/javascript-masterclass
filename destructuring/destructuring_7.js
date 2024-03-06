// Por meio do destructuring podemos extrair valores de arrays e objetos de uma forma mais simples e direta.

// Para extrair os valores de um objeto é necessário referenciar a chave de cada uma das propriedades

// É possível definir nomes diferentes para as variáveis em relação as chaves das propriedades do objeto

const language = {
  name: "C",
  author: "Dennis Ritchie",
  year: 1972,
};

const { name: n, author: a, year: y } = language;

console.log(n, a, y);
