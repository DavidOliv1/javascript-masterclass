// Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa

// Perceba que, no exemplo abaixo, a função today nunca seria executada, uma vez que o while é sempre true e a função forever não iria desalocar o event loop.

function forever() {
  let value = 1;
  while (true) {
    console.log(value++);
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

forever();
today();
