// As classes são um tipo especial de função que atuam como um template para a criação de objetos

// As classes não sofrem hoisting, não importando a forma como foram declaradas (class declaration ou class expression)

const square = new Square();
const Square = class {};

console.log(square);
