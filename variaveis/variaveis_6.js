// É possível declarar variáveis de diferentes formas, utilizando var, let e const

// O ciclo de vida de uma variável compreende a declaração, inicialização e atribuição

// Declaração: O nome da variável é registrado no contexto de execução, também conhecido como escopo, da função

// Inicialização: A variável é inicializada com o valor undefined

// Atribuição: Um valor é atribuído para a variável

// Ao utilizar var, a variável é declarada e inicializada no escopo da função, não respeitando bloco e permitindo a redeclaração e reatribuição

// O código abaixo funciona porque variáveis definidas com a palavra-chave 'var' são declaradas e inicializadas no escopo da função (no caso abaixo a variável pi está no escopo do módulo do arquivo, por isso conseguimos imprimi-la fora do bloco if).

// Veja que o código abaixo não funciona porque a variavel pi foi declarada dentro do escopo da função anônima, não sendo acessível fora desse escopo.

(function () {
  var pi = 3.141592;
})();

console.log(pi);
