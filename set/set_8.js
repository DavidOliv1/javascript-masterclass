// Um Set é um objeto que armazena elementos únicos, que podem ser de qualquer tipo de dado

// size - retorna a quantidade de elementos
// add - adiciona um elemento
// forEach - itera sobre o set
// has - retorna true se o elemento existir
// delete - remove um elemento
// clear - remove todos os elementos

// O método delete retorna um boolean que indica se o valor foi deletado com sucesso. Caso o valor não exista, false é retornado

const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");
console.log(charsets.delete("ISO-8859-1"));
console.log(charsets.delete("CP-1252"));
console.log(charsets.has("ASCII"));
console.log(charsets.has("ISO-8859-1"));
console.log(charsets.has("CP-1252"));
