// É possível declarar variáveis de diferentes formas, utilizando var, let e const

// O ciclo de vida de uma variável compreende a declaração, inicialização e atribuição

// Declaração: O nome da variável é registrado no contexto de execução, também conhecido como escopo, da função

// Inicialização: A variável é inicializada com o valor undefined

// Atribuição: Um valor é atribuído para a variável

// Ao utilizar var, a variável é declarada e inicializada no escopo da função, não respeitando bloco e permitindo a redeclaração e reatribuição

// O código abaixo funciona porque o interpretador javascript, antes de executar o código do módulo, varre todo o arquivo e declara todas as variaveis declaradas com a palavra chave 'var', inicializando seu valor com undefined.

console.log(pi);
var pi = 3.141592;
