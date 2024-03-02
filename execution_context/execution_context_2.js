// O execution context é o ambiente onde o código é executado, sendo composto pelo variable object (que contém as variáveis, function declarations, arguments...), scope chain e this.

// Na linguagem javascript temos o conceito de 'pilha'. Assim que um programa é inicializado, temos a criação de um contexto de execução global como primeiro elemento da pilha, e sempre que uma função é executada, há a criação de um novo contexto de execução que vai sendo empilhado na pilha de execuções.

// Dentro de uma função, conseguimos acessar variáveis existentes fora dela, por meio da scope chain. No exemplo abaixo, como o v1 não é encontrado dentro do scopo da função fn2, ele vai procurar no scopo herdado, da função imediatamente externa, que seria o escopo da função fn1, que também não possui a variável v1, o que faz com que seja procurado no scopo herdado da função fn1, que seria o scopo global, que por sua vez, possui a variável v1 declarada.

const v1 = 10;

const fn1 = function () {
  const fn2 = function () {
    console.log(v1);
  };
  fn2();
};

fn1();
