// As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta

// Perceba que aqui, por termos um arquivo com módulo do ESM (extensão .mjs), o await pode ser utilizado normalmente, uma vez que esses módulos são carregados de forma assíncrona.

async function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

const result = await sum(2, 2);
console.log(result);
