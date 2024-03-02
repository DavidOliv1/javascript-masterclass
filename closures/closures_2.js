// No javascript, as funções permitem a utilização de variáveis que não foram declaradas e nem passadas por parâmetro. Esses tipos de variáveis são conhecidas como 'variáveis livres'.

// Porém, como no javascript temos o conceito de função de primeira classe, esse comportamento poderia gerar uma ambiguidade dependendo da situação, o que foi resolvido com o conceito de closure.

// No exemplo abaixo, a função fn1 já foi executada, o que significa que seu execution context já foi desempilhado e seu 'ciclo de vida' finalizou. O closure funciona para manter o acesso a variável v1 por meio da cadeia de escopo, o que significa que mesmo após a execução da fn1, a referência para v1 é mantida.

function fn1() {
  const v1 = 10;
  return function () {
    console.log(v1);
  };
}

const fn2 = fn1();
fn2();
