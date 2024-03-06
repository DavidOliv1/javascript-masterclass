// Por meio do destructuring podemos extrair valores de arrays e objetos de uma forma mais simples e direta.

// Para extrair os valores de um objeto é necessário referenciar a chave de cada uma das propriedades

const language = {
  name: "C",
  author: "Dennis Ritchie",
  year: 1972,
};

const name = language.name;
const author = language.author;
const year = language.year;

console.log(name, author, year);
