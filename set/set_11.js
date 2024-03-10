// Um Set é um objeto que armazena elementos únicos, que podem ser de qualquer tipo de dado

// size - retorna a quantidade de elementos
// add - adiciona um elemento
// forEach - itera sobre o set
// has - retorna true se o elemento existir
// delete - remove um elemento
// clear - remove todos os elementos

// A principal diferença entre um Set e um Array é que o Set não permite elementos duplicados

// Veja do código abaixo que apesar de fazermos 3 adds com o mesmo valor, temos apenas um elemento no set, que é o valor 10, o que indica que os últimos 2 adds foram ignorados.

const set = new Set();
set.add(10);
set.add(10);
set.add(10);
console.log(set);
console.log(set.size);
