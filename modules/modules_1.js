// No ES6, ou ECMAScript 2015, foi especificado na própria linguagem baseado no conceito de importação e exportação

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const circle = new Circle(10);
console.log(circle);
console.log(circle.area);
