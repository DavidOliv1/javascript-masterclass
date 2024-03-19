// É possível declarar variáveis de diferentes formas, utilizando var, let e const

// O ciclo de vida de uma variável compreende a declaração, inicialização e atribuição

// Declaração: O nome da variável é registrado no contexto de execução, também conhecido como escopo, da função

// Inicialização: A variável é inicializada com o valor undefined

// Atribuição: Um valor é atribuído para a variável

// Ao utilizar let, a variável é declarada no escopo da função mas só é inicilizada posteriormente, respeitando bloco e permitindo reatribuição mas não a redeclaração.

// Variável com let tendo seu valor reatribuído:

let pi = 3.141592;
console.log(pi);
pi = 3;
console.log(pi);
