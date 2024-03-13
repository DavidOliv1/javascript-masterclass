// As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta

// Para criar uma promise, basta instanciá-la, executando a função resolve em caso de sucesso, sendo tratado por meio de then

// Através do console.time ao console.timeEnd, conseguimos medir a performance da nossa aplicação. Perceba que por termos 3 chamadas para a função sum, cada uma com um setTimeout de 1 segundo, teremos aproximadamente 3s para a execução de todo o bloco de código. Entretanto, perceba que a execução da primeira e segunda funções encadeadas são independentes, podendo serem executadas de forma paralela. Podemos fazer isso através do método Promise.All.

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (!a || !b) return reject("Invalid input");
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

console.time("performance");
sum(2, 2)
  .then(function (a) {
    return sum(4, 4).then(function (b) {
      return sum(a, b).then(function (result) {
        console.log(result);
        console.timeEnd("performance");
      });
    });
  })
  .catch(e => {
    console.log(e);
  });
