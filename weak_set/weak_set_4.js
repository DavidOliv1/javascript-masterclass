// WeakSet é um objeto, similar ao Set, que permite apenas valores do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável

// add - adiciona um elemento
// has - retorna true se o elemento existir
// delete - remove um elemento

// O weakset tem como principal função a criação de coleções em que não haja a preocupação com memory leaks, tendo em vista a sua 'weak reference'. Como seus valores são referências a objetos, caso essas referências sejam perdidas, o valor estará elegível para remoção da memória pelo garbage collector, de forma semelhante aos weakmaps.

const circles = new WeakSet();

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.calculateArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

const circle1 = new Circle(10);
const circle2 = {
  radius: 5,
};
console.log(circle1.calculateArea());
console.log(circle1.calculateArea.call(circle2));
