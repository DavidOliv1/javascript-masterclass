/* O propósito das funções setter são definir regras para a atribuição das propriedades internas do objeto, como segue
no exemplo abaixo. */

const rectangle = {
    set x(x) {
        if(x > 0) {
            this._x = x;
        } else {
            console.log('Invalid value for x');
        }
    },
    set y(y) {
        if(y > 0) {
            this._y = y;
        } else {
            console.log('Invalid value for x');
        }
    },
    get area() {
        return this._x * this._y;
    }
};

rectangle.x = 10;
rectangle.y = 2;

console.log(rectangle.area)