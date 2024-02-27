/* 'this' é uma variável implícita que faz referência ao objeto responsável por sua invocação. */

/* Podemos usar duas diferentes sintaxes para criar um método dentro de um objeto, a primeira
seria criando uma propriedade e atribuindo como valor uma função: */

const rectangle = {
    x: 10,
    y: 2,
    calculateArea: function() {
        return this.x * this.y;
    }
};

/* A segunda forma seria definindo o método diretamente: */

const rectangle1 = {
    x: 10,
    y: 2,
    calculateArea() {
        return this.x * this.y;
    }
};

console.log(rectangle.calculateArea());
console.log(rectangle1.calculateArea());