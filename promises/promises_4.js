// As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta

// Para resolver problemas com funções assíncronas, podemos utilizar callbacks. Entretanto, a medida que diversos callbacks são encadeados, o código fica confuso e com má legibilidade

function sum(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

sum(2, 2, function (a) {
  sum(4, 4, function (b) {
    sum(a, b, function (result) {
      console.log(result);
    });
  });
});
