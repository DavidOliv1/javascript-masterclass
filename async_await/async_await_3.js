// O async/await facilita a interação com chamadas assíncronas, aguardando o retorno de uma determinada promise

// Ver arquivos 17 e 18 da aula de promises

// O await precisa ser utilizado dentro de uma função assíncrona para funcionar

// Para tratar possíveis exceções associadas a chamadas assíncronas é possível utilizar um bloco try/catch

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (!a || !b) return reject("Invalid input");
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

(async function () {
  try {
    const a = await sum(2);
    const b = await sum(4, 4);
    const result = await sum(a, b);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
