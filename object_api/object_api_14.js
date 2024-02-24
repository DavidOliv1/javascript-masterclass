/* Object.seal() impede a adição de novas propriedades a um objeto e também a exclusão dessas propriedades, 
mas permite que as propriedades sejam modificadas. */

const javascript = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};

Object.seal(javascript);

console.log(Object.isExtensible(javascript));
console.log(Object.isSealed(javascript));

javascript.name = 'ECMAScript';
delete javascript.year;
javascript.author = 'Brendan Eich';

console.log(javascript);
