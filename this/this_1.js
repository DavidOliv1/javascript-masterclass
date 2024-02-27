/* 'this' é uma variável implícita que faz referência ao objeto responsável por sua invocação. */

/* No caso abaixo, incorreriamos em erro pois dentro do bloco da função as variáveis x e y não foram declaradas. */

/* Para resolvermos esse caso, precisariamos adicionar o 'this' antes da variável, fazendo referência ao objeto do contexto de 
execução e responsável pela sua invocação, no caso, o 'rectangle'. */

const rectangle = {
    x: 10,
    y: 2,
    calculateArea: function() {
        return x * y;
    }
};

console.log(rectangle.calculateArea());