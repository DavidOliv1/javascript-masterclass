// No javascript, as funções permitem a utilização de variáveis que não foram declaradas e nem passadas por parâmetro. Esses tipos de variáveis são conhecidas como 'variáveis livres'.

// Porém, como no javascript temos o conceito de função de primeira classe, esse comportamento poderia gerar uma ambiguidade dependendo da situação, o que foi resolvido com o conceito de closure.

// No exemplo abaixo, a função fn1 já foi executada, o que significa que seu execution context já foi desempilhado e seu 'ciclo de vida' finalizou. O closure funciona para manter o acesso a variável v1 por meio da cadeia de escopo, o que significa que mesmo após a execução da fn1, a referência para v1 é mantida.

// Closure é uma função com um scope chain estático, que é definida no momento em que a função é criada, por isso, todas as funções na linguagem JavaScript são closures.

// Perceba que a construção abaixo funciona imprimindo v1 porque a CADEIA de escopos é estática no momento de criação da função. Veja que no scopo da função anônima, v1 não existe, v1 só existe no scopo externo a função anônima, o escopo da função fn1, essa cadeia de escopos (da função anônima e da função fn1) é a cadeia de escopo estático que é criado e a que se tem acesso por meio das closures.

function fn1() {
  const v1 = 10;
  return function () {
    console.log(v1);
  };
}

const fn2 = fn1();
const v1 = 100;
fn2();
