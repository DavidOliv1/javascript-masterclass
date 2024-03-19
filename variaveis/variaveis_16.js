// É possível declarar variáveis de diferentes formas, utilizando var, let e const

// O ciclo de vida de uma variável compreende a declaração, inicialização e atribuição

// Declaração: O nome da variável é registrado no contexto de execução, também conhecido como escopo, da função

// Inicialização: A variável é inicializada com o valor undefined

// Atribuição: Um valor é atribuído para a variável

// Ao utilizar const, a variável é declarada no escopo da função mas só é inicializada posteriormente, respeitando bloco e não permitindo reatribuição nem redeclaração.

// O código abaixo não funciona porque apesar de as variáveis com const serem declaradas no escopo da função em que estão inseridas, elas respeitam os blocos internos a esse escopo, portando uma variável que estiver dentro de um bloco interno, ficará inacessível externamente.

if (true) {
  const pi = 3.141592;
}

console.log(pi);
