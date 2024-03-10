// Um Map é um objeto que armazena um conjunto de chaves e valores que podem ser de qualquer tipo de dado

// size - retorna a quantidade de elementos
// set - adiciona um par de chave e valor
// forEach - itera sobre o mapa
// has - retorna true se a chave existir
// get - retorna o valor de uma determinada chave
// delete - remove um par de chave e valor
// clear - remove todos os elementos

// O método delete retorna um boolean indicando se o elemento foi removido com sucesso. Se tentarmos remover um elemento inexistente, seu retorno será false

const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
console.log(timeUnits);
console.log(timeUnits.size);
console.log(timeUnits.delete("hour"));
console.log(timeUnits.delete("day"));
console.log(timeUnits);
console.log(timeUnits.size);
