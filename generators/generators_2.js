// Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa

// Podemos criar uma função generator colocando o * ao lado da palavra function.

function* forever() {
  let value = 1;
  while (true) {
    console.log(value++);
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

// O forever abaixo não é executado pois a sua chamada apenas cria o generator

forever();
today();
