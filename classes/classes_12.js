// As classes são um tipo especial de função que atuam como um template para a criação de objetos

// É possível criar uma hierarquia de classes por meio da palavra-chave extends

// Ao declarar um construtor na subclass é necessário invocar o construtor da superclass por meio do super() antes de utilizar a referência a this

class Shape {
  toString() {
    return `area: ${this.calculateArea()}`;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  calculateArea() {
    return Math.pow(this.side, 2);
  }

  toString() {
    return `side: ${this.side} ${super.toString()}}`;
  }

  static fromArea(area) {
    return new Square(Math.sqrt(area));
  }
}

const square = Square.fromArea(16);
console.log(square);
console.log(square.toString());
console.log(square.calculateArea());

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  toString() {
    return `radius: ${this.radius} ${super.toString()}}`;
  }

  static fromArea(area) {
    return new Circle(Math.sqrt(area / Math.PI));
  }
}

const circle = Circle.fromArea(314.1592653589793);
console.log(circle);
console.log(circle.toString());
console.log(circle.calculateArea());
