// O execution context é o ambiente onde o código é executado, sendo composto pelo variable object (que contém as variáveis, function declarations, arguments...), scope chain e this.

// Toda função tem uma variável this que contém a referência para o objeto responsável pela sua invocação. Entretanto, no exemplo abaixo, o console.log retorna undefined. Isso ocorre pois temos uma nova função criada dentro de getP1, que não é chamada por meio de nenhum objeto, mas sim diretamente, o que faz com o que seu 'this' seja o objeto global. Podemos resolver isso pegando a referência de 'this' na função getP1, que é o obj1, e atribuindo a uma nova variável ou utilizando as arrow functions, que não possuem 'this' próprio e utilizam o 'this' mais externo.

const obj1 = {
  p1: 10,
  getP1() {
    const fn1 = () => {
      return this.p1;
    };
    return fn1();
  },
};

console.log(obj1.getP1());
