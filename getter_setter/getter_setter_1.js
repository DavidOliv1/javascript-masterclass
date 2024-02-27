/* As funções do tipo getter e setter servem para interceptar o acesso as propriedades de determinado ojeto.
Quando definimos internamente um método get, ele age como uma propriedade ao ser acessada pelo objeto, e 
internamente executa o método associado. */

const rectangle = {
    x: 10,
    y: 2,
    get area() {
        return this.x * this.y;
    }
};

console.log(rectangle.area);