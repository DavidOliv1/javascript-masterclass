// As classes são um tipo especial de função que atuam como um template para a criação de objetos

// As classes são formadas por 3 tipos de membros: constructor, prototype methods e static methods

// O constructor é invocado no momento da instanciação de uma classe e serve para inicializar um determinado objeto

// Os prototype methods dependem de uma instância para serem invocados

// Perceba que o método toString não é impresso no console.log do objeto square, isso acontece pois o método está no prototipo do objeto, e não no objeto em si.

class Square {
  constructor(side) {
    this.side = side;
  }

  calculateArea() {
    return Math.pow(this.side, 2);
  }

  toString() {
    return `side: ${this.side} area: ${this.calculateArea()}`;
  }
}

const square = new Square(4);
console.log(square);
console.log(square.toString());
console.log(square.calculateArea());
