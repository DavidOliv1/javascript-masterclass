// As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta

// No código abaixo, não podemos usar a palavra await, uma vez que seu uso só é permitido dentro de funções assíncronas e no top level dos módulos do ESM, que são carregados de forma assíncrona. Aqui, como estamos em um módulo do CommomJS, o código apresenta erro.

async function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

const result = await sum(2, 2);
console.log(result);
