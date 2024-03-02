// As arrow functions não possuem as suas próprias variáveis this e arguments. No exemplo abaixo, o console.log imprime os argumentos da função module do node, o que acontece é que por a função não possuir arguments próprio, o argument impresso foi o herdado da closure.

// Obs: Quando não tivermos parâmetros na arrow function, o uso do parênteses é obrigatório.

const sum = () => {
  console.log(arguments);
  let total = 0;
  for (let argument in arguments) {
    total += arguments[argument];
  }
  return total;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
