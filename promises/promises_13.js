// As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta

// Para criar uma promise, basta instanciá-la, executando a função resolve em caso de sucesso, sendo tratado por meio de then

// Em caso de fracasso, a função reject deve ser executada, sendo tratada por meio de catch.

// É possível centralizar o tratamento de uma promise encadeando seus retornos. Perceba que, mesmo sem termos os argumentos da segunda função encadeada, o erro é capturado e impresso no console. O mesmo aconteceria caso não tivessemos o argumento da função mais interna do encadeamento.

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (!a || !b) return reject("Invalid input");
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

sum(2, 2)
  .then(function (a) {
    return sum().then(function (b) {
      return sum(a, b).then(function (result) {
        console.log(result);
      });
    });
  })
  .catch(e => {
    console.log(e);
  });
