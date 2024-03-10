// Um Map é um objeto que armazena um conjunto de chaves e valores que podem ser de qualquer tipo de dado

// size - retorna a quantidade de elementos
// set - adiciona um par de chave e valor
// forEach - itera sobre o mapa
// has - retorna true se a chave existir
// get - retorna o valor de uma determinada chave
// delete - remove um par de chave e valor
// clear - remove todos os elementos

// A principal diferente entre um Map e um objeto é que no Map as chaves podem ser de qualquer tipo, enquanto no objeto, apenas string e symbol

const obj = {};
obj[10] = "Number";
obj["10"] = "String";
obj[true] = "Boolean";
obj["true"] = "String";
console.log(obj[10]);
console.log(obj["10"]);
console.log(obj[true]);
console.log(obj["true"]);
console.log(obj);

for (key in obj) {
  console.log(typeof key);
}
