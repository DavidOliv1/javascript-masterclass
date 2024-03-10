// WeakSet é um objeto, similar ao Set, que permite apenas valores do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável

// add - adiciona um elemento
// has - retorna true se o elemento existir
// delete - remove um elemento

// O weakset tem como principal função a criação de coleções em que não haja a preocupação com memory leaks, tendo em vista a sua 'weak reference'. Como seus valores são referências a objetos, caso essas referências sejam perdidas, o valor estará elegível para remoção da memória pelo garbage collector, de forma semelhante aos weakmaps.

// No exemplo abaixo, ao criarmos um objeto Circle por meio de sua função construtora, registramos a referência desse objeto ao weakset circles, e ao definir o método calculateArea no prototype da função Circle, utilizamos o weakset para garantir que o objeto que está chamando a função calculateArea tenha sido instanciado através da função construtora, ou seja, que tenha sido registrado, e não criado externamente. Como, em tese, poderiamos criar milhares de objetos do tipo circle e não saber ao certo quanto tempo esses objetos irão durar, o weakset garante que eles sejam removidos quando seu ciclo de vida finalizar e que isso não precise ser feito de forma manual.

const circles = new WeakSet();

function Circle(radius) {
  circles.add(this);
  this.radius = radius;
}

Circle.prototype.calculateArea = function () {
  if (!circles.has(this)) throw "Invalid object";
  return Math.PI * Math.pow(this.radius, 2);
};

const circle1 = new Circle(10);
const circle2 = {
  radius: 5,
};
console.log(circle1.calculateArea());
console.log(circle1.calculateArea.call(circle2));
