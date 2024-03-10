// Iterables e Iterators são convenções implementadas por Arrays, Maps, Sets e Strings que os tornam iteráveis por meio de um protocolo de iteração

// Além do Array é possível utilizar o protocolo de iteração dos objetos Map, Set e String

// Todo Iterable tem uma propriedade de chave [Symbol.iterator] que define o protocolo de iteração para o objeto

// Criando um iterator

function createIterator(...params) {
  let i = 0;
  return {
    next() {
      if (i < params.length) {
        return {
          value: params[i++],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
}

const iterator = createIterator("Fortran", "Lisp", "COBOL");

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
