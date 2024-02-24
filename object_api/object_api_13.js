/* Object.preventExtensions() impede a adição de novas propriedades a um objeto, mas permite as propriedades sejam modificadas ou
apagadas. */

const javascript = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};

Object.preventExtensions(javascript);

console.log(Object.isExtensible(javascript));

javascript.name = 'ECMAScript';
delete javascript.year;
javascript.author = 'Brendan Eich';

console.log(javascript);
