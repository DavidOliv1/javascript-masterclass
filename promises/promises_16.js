// As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta

// Para criar uma promise, basta instanciá-la, executando a função resolve em caso de sucesso, sendo tratado por meio de then

// Também podemos executar várias promises ao mesmo tempo, retornando após a primeira ter sucesso usando Promice.race

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (!a || !b) return reject("Invalid input");
    setTimeout(() => {
      resolve(a + b);
    }, Math.random() * 1000);
  });
}

console.time("performance");
Promise.race([sum(2, 2), sum(4, 4)])
  .then(value => {
    return sum(value, value).then(function (result) {
      console.log(result);
      console.timeEnd("performance");
    });
  })
  .catch(e => {
    console.log(e);
  });
