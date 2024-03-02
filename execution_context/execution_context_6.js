// O execution context é o ambiente onde o código é executado, sendo composto pelo variable object (que contém as variáveis, function declarations, arguments...), scope chain e this.

// Toda função tem uma variável this que contém a referência para o objeto responsável pela sua invocação.

const obj1 = {
  p1: 10,
  getP1() {
    return this.p1;
  },
};

console.log(obj1.getP1());
