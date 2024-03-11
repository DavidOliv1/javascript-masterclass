import { PI, pow } from "./math.mjs";

// No ES6, ou ECMAScript 2015, foi especificado na própria linguagem baseado no conceito de importação e exportação

// A palavra chave import faz a importação de qualquer tipo de dado exportado para dentro do módulo. Entretanto, se executarmos o código desse arquivo, um erro é lançado. Isso ocorre porque para utilizar modules no Node.js os arquivos devem ter a extensão .mjs

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
