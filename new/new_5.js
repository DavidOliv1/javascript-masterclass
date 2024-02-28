/* Também podemos criar vários objetos com a mesma estrutura através da função construtora, invocada por meio do operador new. 
Por convenção (não obrigatoriedade), as funções construtoras não iniciadas com letra maiuscula, com o intuito de lembrar o uso
do operador new. Perceba que a função construtora é uma função como outra qualquer, o que muda é a forma como ela é invocada, através
do new. O operador new cria um novo objeto e associa a suas propriedades a 'this'. As propriedade que forem públicas, ou seja, que 
que devam ser retornadas no objeto, devem ser associadas ao operador 'this'. */

/* Veja que aqui ainda temos o problema da propriedade sendo repetida em vários objetos. O que será resolvido pela propriedade
prototype. */

const Person = function(name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year;
    this.getAge = function() {
        return new Date().getFullYear() - this.year;
    }
}

const person1 = new Person('Linus Torvalds', 'Helsinki', 1969);
const person2 = new Person('Bill Gates', 'Seatle', 1955);

console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(person2);
console.log(person2.__proto__);
console.log(person2.getAge());

/* Aqui, veja que os dois objetos reusam o mesmo objeto protótipo. Tanto qeu a referência na memória é a mesma. */
console.log(person1.__proto__ === person2.__proto__);