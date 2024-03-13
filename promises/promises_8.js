// As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta

// Para criar uma promise, basta instanciá-la, executando a função resolve em caso de sucesso, sendo tratado por meio de then

// Em caso de fracasso, a função reject deve ser executada, sendo tratada por meio de catch. Perceba que no código abaixo, só estamos tratando o erro da função mais interna do encadeamento. Se removermos os argumentos da segunda função encadeada a aplicação lançará um erro. Portando, precisamos de mais um catch para a respectiva função.

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (!a || !b) return reject("Invalid input");
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

sum(2, 2).then(function (a) {
  sum().then(function (b) {
    sum()
      .then(function (result) {
        console.log(result);
      })
      .catch(e => {
        console.log(e);
      });
  });
});
