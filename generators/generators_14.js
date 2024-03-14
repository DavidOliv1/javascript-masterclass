// Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa

// Podemos criar uma função generator colocando o * ao lado da palavra function.

// Como os generators implementam o protocolo de iteração, é possível utilizá-los com Symbol.iterator de forma simples

// Se formos implementar o protocolo de iteração manualmente, fariamos através da propriedade [Symbol.iterator] e do método next. Com os generators, ficaria da forma abaixo:

function createIterable(...array) {
  return {
    *[Symbol.iterator]() {
      let i = 0;
      while (i < array.length) {
        yield array[i++];
      }
    },
  };
}

const languages = createIterable("Fortran", "Lisp", "COBOL");

for (let language of languages) {
  console.log(language);
}
