// No ES6, ou ECMAScript 2015, foi especificado na própria linguagem baseado no conceito de importação e exportação

const PI = 3.141592;

function pow(base, exponential) {
  if (exponential === 0) return 1;
  return base * pow(base, exponential - 1);
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return PI * pow(this.radius, 2);
  }
}

const circle = new Circle(10);
console.log(circle);
console.log(circle.area);
