/* Também conseguimos adicionar as funções do tipo getter e setter através do método defineProperty() da Object API. */

const rectangle = {};

Object.defineProperty(rectangle, 'x', {
    set(x) {
        if(x > 0) {
            this._x = x;
        } else {
            console.log('Invalid value for x')
        }
    }
})

Object.defineProperty(rectangle, 'y', {
    set(y) {
        if(y > 0) {
            this._y = y;
        } else {
            console.log('Invalid value for y')
        }
    }
})

Object.defineProperty(rectangle, 'area', {
    get() {
        return this._x * this._y;
    }
})

rectangle.x = 10;
rectangle.y = 2;

console.log(rectangle.area)