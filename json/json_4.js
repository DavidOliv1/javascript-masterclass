/* Também podemos clonar um objeto (suas chaves e propriedades) utilizando os métodos da interface JSON. */

const book1 = {
    name: 'Refactoring',
    author: 'Martin Fowler'
};

const book2 = {
    name: 'Refactoring',
    author: 'Martin Fowler'
};

// Aqui, apenas estamos apontando book3 para a referência em memória do book2, é o mesmo objeto.
const book3 = book2;

console.log(book3 === book2);

/* Aqui, ao transformarmos book2 em uma string e em seguida fazer o parse, estamos criando um novo objeto, com as mesmas
propriedades do book2 e atribuindo a variável book4. */
const book4 = JSON.parse(JSON.stringify(book2));

console.log(book2);
console.log(book4);
console.log(book4 === book2);