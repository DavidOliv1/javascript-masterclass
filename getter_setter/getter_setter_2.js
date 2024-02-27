/* Também podemos usar os setters para definir as propriedades internas de nosso objeto seguindo alguma regra. 
Os setters devem ter obrigatoriamente um único parâmetro definido. */

const rectangle = {
    set x() {

    },
    set y() {

    },
    get area() {
        return this.x * this.y;
    }
};

console.log(rectangle.area);