// Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa

// Podemos criar uma função generator colocando o * ao lado da palavra function.

// Como os generators implementam o protocolo de iteração, é possível utilizá-los com Symbol.iterator de forma simples

// No exemplo abaixo, se formos implementar o protocolo de iteração manualmente, fariamos da forma abaixo, através da propriedade [Symbol.iterator] e do método next.

function createIterable(...array) {
  return {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          if (i < array.length) {
            return {
              value: array[i++],
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
    },
  };
}

const languages = createIterable("Fortran", "Lisp", "COBOL");

for (let language of languages) {
  console.log(language);
}
