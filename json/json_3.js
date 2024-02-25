/* O método JSON.stringify() também pode ser utilizado para comparar se dois objetos são iguais (possuem as mesmas chaves e valores),
tendo em vista que podemos transformá-los em strings e esse tipo de dado pode ser comparado caractere a caractere. */

const book1 = {
    name: 'Refactoring',
    author: 'Martin Fowler'
};

const book2 = {
    name: 'Refactoring',
    author: 'Martin Fowler'
};

console.log(book1 ===  book2);
console.log(JSON.stringify(book1) === JSON.stringify(book2));