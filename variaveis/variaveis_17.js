// É possível declarar variáveis de diferentes formas, utilizando var, let e const

// O ciclo de vida de uma variável compreende a declaração, inicialização e atribuição

// Declaração: O nome da variável é registrado no contexto de execução, também conhecido como escopo, da função

// Inicialização: A variável é inicializada com o valor undefined

// Atribuição: Um valor é atribuído para a variável

// Ao declarar uma variável sem var, let ou const ela é criada no escopo global.

// O código abaixo funciona porque pi foi declarado sem nenhuma palavra chave, então foi criada no escopo global e está acessível externamente ao escopo da função anônima.

(function () {
  pi = 3.141592;
})();

console.log(pi);
