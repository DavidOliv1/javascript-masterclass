// Os accessor methods quando invocados retornam informações específicas sobre o array

// indexOf - retorna a posição do primeiro elemento encontrado
// lastIndexOf - retorna a posição do último elemento encontrado
// includes - retorna true se o elemento existir
// concat - retorna um novo array resultante da concatenação de um ou mais arrays
// slice - retorna partes de um determinado array de acordo com a posição de início e fim
// join - converte o array para uma String, juntando os elementos com base em um separador

// Com os métodos, indexOf e lastIndexOf, se o elemento não existir no array, -1 é retornado

const languages = ["Python", "C", "C", "Java"];
console.log(languages.indexOf("Python"));
console.log(languages.lastIndexOf("C"));
console.log(languages.indexOf("JavaScript"));
