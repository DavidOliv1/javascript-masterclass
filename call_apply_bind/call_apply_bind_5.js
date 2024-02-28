/* O bind permite encapsular o objeto a que queremos fazer referência (this) dentro da função, retornando essa nova função
com o 'this' encapsulado. */

const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
}

const circle = {
    radius: 10,
    calculateArea,
};

const calculateAreaForCircle = calculateArea.bind(circle);
console.log(calculateAreaForCircle(Math.round));
console.log(calculateAreaForCircle(Math.ceil));