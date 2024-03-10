// Um Map é um objeto que armazena um conjunto de chaves e valores que podem ser de qualquer tipo de dado

// size - retorna a quantidade de elementos
// set - adiciona um par de chave e valor
// forEach - itera sobre o mapa
// has - retorna true se a chave existir
// get - retorna o valor de uma determinada chave
// delete - remove um par de chave e valor
// clear - remove todos os elementos

// A principal diferente entre um Map e um objeto é que no Map as chaves podem ser de qualquer tipo, enquanto no objeto, apenas string e symbol. Uma outra diferença é que o objeto faz uso da cadeia de protótipos, enquanto um Map é um tipo de dado por si só e não faz uso de herança.

const obj = {};
console.log("toString" in obj);
console.log("valueOf" in obj);

const map = new Map();
console.log(map.get("toString"));
console.log(map.get("valueOf"));
