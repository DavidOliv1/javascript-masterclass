// O execution context é o ambiente onde o código é executado, sendo composto pelo variable object (que contém as variáveis, function declarations, arguments...), scope chain e this.

// Na linguagem javascript temos o conceito de 'pilha'. Assim que um programa é inicializado, temos a criação de um contexto de execução global como primeiro elemento da pilha, e sempre que uma função é executada, há a criação de um novo contexto de execução que vai sendo empilhado na pilha de execuções.

// Dentro de uma função, conseguimos acessar variáveis existentes fora dela, por meio da scope chain. Caso existam variáveis com o mesmo nome em diferentes scopos, será impressa a que primeira for encontrada quando do acesso do escopo herdado.

const v1 = 10;

const fn1 = function () {
  const v1 = 100;
  const fn2 = function () {
    const v1 = 1000;
    console.log(v1);
  };
  fn2();
};

fn1();
