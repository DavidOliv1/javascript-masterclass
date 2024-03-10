// Um Set é um objeto que armazena elementos únicos, que podem ser de qualquer tipo de dado

// size - retorna a quantidade de elementos
// add - adiciona um elemento
// forEach - itera sobre o set
// has - retorna true se o elemento existir
// delete - remove um elemento
// clear - remove todos os elementos

// A principal diferença entre um Set e um Array é que o Set não permite elementos duplicados

// Podemos eliminar elementos duplicados de um array usando o set, para isso basta passar o array com elementos duplicados como argumento para a função construtora do Set.

// Depois de remover os elementos duplicados, poderiamos usar o Array.from para converter o set novamente para um array

let array = [10, 10, 10];
console.log(array);
console.log(array.length);

const set = new Set(array);
console.log(set);
console.log(set.size);

array = Array.from(set);
console.log(array);
console.log(array.length);
