// Os iteration methods quando invocados iteram sobre os elementos do array

// forEach - executa a função passada por parâmetro para cada elemento
// filter - retorna um novo array contendo somente os elementos que retornaram true na função passada por parâmetro
// find - retorna o primeiro elemento que retornou true na função passada por parâmetro
// some - retorna true se um ou mais elementos retornaram true na função passada por parâmetro
// every - retorna true se todos os elementos retornaram true na função passada por parâmetro
// map - retorna um novo array com base no retorno da função passada por parâmetro
// reduce - retorna um valor com base no retorno da função passada por parâmetro

// Obs: O filter sempre retorna o elemento dentro de um array, enquanto o find retorna somente o elemento

const frameworks = [
  {
    name: "Angular.js",
    contributors: 1548,
  },
  {
    name: "Ember.js",
    contributors: 746,
  },
  {
    name: "Vue.js",
    contributors: 240,
  },
];

const result = frameworks.find(framework => framework.name === "Angular.js");

console.log(result);
