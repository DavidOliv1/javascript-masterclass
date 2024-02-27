/* 'this' é uma variável implícita que faz referência ao objeto responsável por sua invocação. */

const rectangle = {
    x: 10,
    y: 2,
    calculateArea: function() {
        return this.x * this.y;
    }
};

console.log(rectangle.calculateArea());