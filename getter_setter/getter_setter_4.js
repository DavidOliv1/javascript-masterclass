/* Também podemos usar os setters para definir as propriedades internas de nosso objeto seguindo alguma regra. 
Os setters devem ter obrigatoriamente um único parâmetro definido. Devemos utilizar chaves diferentes para a função
setter e a propriedade do objeto. */

const rectangle = {
    set x(x) {
        this._x = x;
    },
    set y(y) {
        this._y = y;
    },
    get area() {
        return this._x * this._y;
    }
};

rectangle.x = 10;
rectangle.y = 2;

console.log(rectangle.area)