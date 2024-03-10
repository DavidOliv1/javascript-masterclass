// As classes são um tipo especial de função que atuam como um template para a criação de objetos

// As classes funcionam de forma similar as funções construtoras, são consideradas sintatic sugar, pois estão em um nível de abstração maior e implementam as funções construtoras internamente

function Square(side) {
  this.side = side;
}

Square.prototype.calculateArea = function () {
  return Math.pow(this.side, 2);
};

Square.prototype.toString = function () {
  return `side: ${this.side} area: ${this.calculateArea()}`;
};

Square.fromArea = function (area) {
  return new Square(Math.sqrt(area));
};

const square = Square.fromArea(16);
console.log(square);
console.log(square.toString());
console.log(square.calculateArea());
