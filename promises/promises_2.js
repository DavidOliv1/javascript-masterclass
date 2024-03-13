// As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta

// Veja que aqui, como temos um setTimeout que só executa a função após um segundo, o console.log é executado antes do retorno da função sum, imprimindo undefined.

// O retorno do método setTimeout é um number que representa o id do timer e pode ser utilizado junto a função clearTimeout(id) para cancelar esse timer. Portando, não precisamos adicionar o return antes do método setTimeout, uma vez que não queremos o retorno desse id. O retorno de a + b será feito automaticamente depois que o tempo definido for expirado, uma vez que o sitTimeout executa o que está dentro do corpo da função de callback que lhe foi passada como argumento.

function sum(a, b) {
  setTimeout(() => {
    return a + b;
  }, 1000);
}

const result = sum(2, 2);
console.log(result);
