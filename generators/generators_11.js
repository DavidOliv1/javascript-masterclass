// Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa

// Podemos criar uma função generator colocando o * ao lado da palavra function.

// O método throw lança uma exceção dentro do generator interrompendo o fluxo de execução caso a exceção não tenha sido tratada adequadamente.

function* forever() {
  let value = 1;
  while (true) {
    const reset = yield value++;
    if (reset) value = 1;
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
today();
console.log(foreverGenerator.throw("error"));
console.log(foreverGenerator.next(true));
console.log(foreverGenerator.next());
