// No javascript, as funções permitem a utilização de variáveis que não foram declaradas e nem passadas por parâmetro. Esses tipos de variáveis são conhecidas como 'variáveis livres'.

// Porém, como no javascript temos o conceito de função de primeira classe, esse comportamento poderia gerar uma ambiguidade dependendo da situação, o que foi resolvido com o conceito de closure.

// Closure é uma função com um scope chain estático, que é definida no momento em que a função é criada, por isso, todas as funções na linguagem JavaScript são closures

// No exemplo abaixo, o v1 impresso é 10, isso ocorre porque no momento da criação da função fn1, sua cadeia de escopo possui a variável v1 definida como 10.

const v1 = 10;

function fn1() {
  console.log(v1);
}

function fn2(fn1) {
  const v1 = 100;
  fn1();
}

fn2(fn1);
