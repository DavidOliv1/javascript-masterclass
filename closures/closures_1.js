// No javascript, as funções permitem a utilização de variáveis que não foram declaradas e nem passadas por parâmetro. Esses tipos de variáveis são conhecidas como 'variáveis livres'.

// Porém, como no javascript temos o conceito de função de primeira classe, esse comportamento poderia gerar uma ambiguidade dependendo da situação, o que foi resolvido com o conceito de closure.

const v1 = 10;

function fn1() {
  function fn2() {
    console.log(v1);
  }
  fn2();
}

fn1();
