// As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta

// Para criar uma promise, basta instanciá-la, executando a função resolve em caso de sucesso, sendo tratado por meio de then

function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

sum(2, 2).then(function (a) {
  sum(4, 4).then(function (b) {
    sum(a, b).then(function (result) {
      console.log(result);
    });
  });
});
