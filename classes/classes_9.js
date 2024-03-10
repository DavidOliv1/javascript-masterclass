// As classes são um tipo especial de função que atuam como um template para a criação de objetos

// As classes são formadas por 3 tipos de membros: constructor, prototype methods e static methods

// O constructor é invocado no momento da instanciação de uma classe e serve para inicializar um determinado objeto

// Os prototype methods dependem de uma instância para serem invocados

// Os static methods não dependem de uma instância para serem invocados

// Nosso método fromArea abaixo funciona de forma semelhante ao método Array.from, que cria um novo array a partir de um iterable.

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

  static fromArea(area) {
    return new Square(Math.sqrt(area));
  }
}

const square = Square.fromArea(16);
console.log(square);
console.log(square.toString());
console.log(square.calculateArea());
