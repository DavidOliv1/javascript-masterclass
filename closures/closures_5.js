// No javascript, as funções permitem a utilização de variáveis que não foram declaradas e nem passadas por parâmetro. Esses tipos de variáveis são conhecidas como 'variáveis livres'.

// Porém, como no javascript temos o conceito de função de primeira classe, esse comportamento poderia gerar uma ambiguidade dependendo da situação, o que foi resolvido com o conceito de closure.

// Closure é uma função com um scope chain estático, que é definida no momento em que a função é criada, por isso, todas as funções na linguagem JavaScript são closures

// Apesar de estático, o scope chain faz referência para objetos que estão na memória e podem ser compartilhados por mais de uma função.

function fn1() {
  let v1 = 10;
  return {
    m1() {
      console.log(++v1);
    },
    m2() {
      console.log(--v1);
    },
  };
}

const obj1 = fn1();
obj1.m1();
obj1.m2();
