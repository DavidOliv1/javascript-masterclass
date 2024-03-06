// Por meio do destructuring podemos extrair valores de arrays e objetos de uma forma mais simples e direta.

// Para extrair os valores de um objeto é necessário referenciar a chave de cada uma das propriedades

// Também podemos referenciar as propriedades de objetos que estão dentro de outros objetos

const language = {
  name: "C",
  author: "Dennis Ritchie",
  year: 1972,
  company: {
    name: "Bell Labs",
  },
};

const {
  name,
  author,
  year,
  company: { name: companyName },
} = language;

console.log(name, author, year, companyName);
