// O execution context é o ambiente onde o código é executado, sendo composto pelo variable object (que contém as variáveis, function declarations, arguments...), scope chain e this.

// Na linguagem javascript temos o conceito de 'pilha'. Assim que um programa é inicializado, temos a criação de um contexto de execução global como primeiro elemento da pilha, e sempre que uma função é executada, há a criação de um novo contexto de execução que vai sendo empilhado na pilha de execuções.

// Não é possível acessar de fora uma variável que foi declarada dentro de uma função. Isso acontece porque o contexto de execução de cada função é isolado.

const v1 = 10;

const fn1 = function () {
  const v1 = 100;
  const fn2 = function () {
    const v1 = 1000;
    console.log(v1);
    const v2 = 1000;
  };
  fn2();
};

fn1();
console.log(v2);
