// Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa

// Podemos criar uma função generator colocando o * ao lado da palavra function.

// Os generators utilizam o método next para iterar sobre os valores disponíveis durante a execução da função

// Perceba que, ao chamar a função forever, nós apenas obtemos o objeto generator, esse objeto nos permitirá controlar o comportamento da função a partir dos seus métodos. Veja que ao utilizarmos o método next() nesse objeto, a função generator será executada.

// Ao encontrar um yield, a execução da função é pausada até o método next ser invocado novamente

function* forever() {
  let value = 1;
  while (true) {
    console.log(value++);
    yield;
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

const foreverGenerator = forever();
foreverGenerator.next();
foreverGenerator.next();
foreverGenerator.next();
today();
foreverGenerator.next();
foreverGenerator.next();
