// No javascript, as funções permitem a utilização de variáveis que não foram declaradas e nem passadas por parâmetro. Esses tipos de variáveis são conhecidas como 'variáveis livres'.

// Porém, como no javascript temos o conceito de função de primeira classe, esse comportamento poderia gerar uma ambiguidade dependendo da situação, o que foi resolvido com o conceito de closure.

// Closure é uma função com um scope chain estático, que é definida no momento em que a função é criada, por isso, todas as funções na linguagem JavaScript são closures

// Apesar de estático, o scope chain faz referência para objetos que estão na memória e podem ser compartilhados por mais de uma função.

// No exempo abaixo, o console.log vai imprimir 3, isso ocorre porque o scope chain é compartilhado entre as 3 funções, tendo em vista que elas apontam para a mesma variável v1. No momento da execução dessas funções o laço for já foi executado, a variável já foi incrementada para 3 e não passou na validação do laço, passando pra execução do código abaixo do laço for.

// Uma das formas de resolver esse problema seria criar uma função que recebesse a variável v1 como parâmetro (agora denominada v2) e retornasse uma função fazendo o console.log dessa variável. Com isso, no momento de criação da função anônima, a cadeia de escopo da função anônima levaria em conta o valor recebido como parâmetro para a variável, o que imprimiria o valor desejado em cada chamada.

// Uma outra forma de resolver esse problema seria usando o método bind, que permite associar um determinado objeto especificado como o 'this' da função. No exemplo abaixo, estamos usando como 'this' um objeto que tem uma chave de nome v2 e valor v1. Devemos nos lembrar que o bind funciona de forma semelhante as closures, retornando uma nova função, e que este novo objeto passado por parâmetro fará parte do escopo dessa nova função retornada.

const obj1 = {};
for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = function () {
    console.log(this.v2);
  }.bind({ v2: v1 });
}

obj1[0]();
obj1[1]();
obj1[2]();
