// As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta

// Para resolver problemas com funções assíncronas, podemos utilizar callbacks

function sum(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

sum(2, 2, function (result) {
  console.log(result);
});
