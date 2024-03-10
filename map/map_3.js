// Um Map é um objeto que armazena um conjunto de chaves e valores que podem ser de qualquer tipo de dado

const timeUnits = new Map([
  ["second", 1],
  ["minute", 60],
  ["our", 3600],
]);
console.log(Array.from(timeUnits));
