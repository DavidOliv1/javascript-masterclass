// É possível declarar variáveis de diferentes formas, utilizando var, let e const

// O ciclo de vida de uma variável compreende a declaração, inicialização e atribuição

// Declaração: O nome da variável é registrado no contexto de execução, também conhecido como escopo, da função

// Inicialização: A variável é inicializada com o valor undefined

// Atribuição: Um valor é atribuído para a variável

// Ao utilizar const, a variável é declarada no escopo da função mas só é inicializada posteriormente, respeitando bloco e não permitindo reatribuição nem redeclaração.

// No código abaixo, temos que a variável pi é declarada antes da execução do arquivo, mas não inicializada, sua inicialização ocorre na linha 18, e caso se tente acessar seu valor antes da inicialização, incorremos em erro.

// Obs: essa área entre a declaração e a inicialização de uma variável é conhecida como deadzone

console.log(pi);
const pi = 3.141592;
