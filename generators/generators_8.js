// Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa

// Podemos criar uma função generator colocando o * ao lado da palavra function.

// Os generators utilizam o método next para iterar sobre os valores disponíveis durante a execução da função

// Perceba que, ao chamar a função forever, nós apenas obtemos o objeto generator, esse objeto nos permitirá controlar o comportamento da função a partir dos seus métodos. Veja que ao utilizarmos o método next() nesse objeto, a função generator será executada.

// Ao encontrar um yield, a execução da função é pausada até o método next ser invocado novamente

// O retorno do método next é um objeto contendo value e done, seguindo o protocolo de iteração. Perceba que no exemplo abaixo o value vem sempre como undefined, isso ocorre porque nada está sendo retornado da chamada da função.

// Por meio do yield é possível retornar valores de forma similar ao return

// Além disso, também é possível enviar um valor para dentro do generator por meio do método next, que será recebido no yield

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
console.log(foreverGenerator.next(true));
console.log(foreverGenerator.next());
