/* 'this' é uma variável implícita que faz referência ao objeto responsável por sua invocação. */

/* Se definissemos a função fora do objeto e tentassemos invoca-lá diretamente, mantendo o this atrelado as propriedades, seu retorno 
seria NaN, uma vez que o this nesse caso faria referência ao objeto global, e x e y não são propriedades definidas nesse objeto, o que 
resultaria numa operação de undefined * undefined. */

/* Para resolvermos esse caso, precisáriamos novamente chamar a função fazendo referência ao seu objeto. */


const calculateArea = function() {
    return this.x * this.y;
}

const rectangle = {
    x: 10,
    y: 2,
    calculateArea 
};

console.log(this)
console.log(calculateArea());
console.log(rectangle.calculateArea());
