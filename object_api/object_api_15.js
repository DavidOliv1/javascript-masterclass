/* Object.freeze() impede a adição, exclusão e a modificação das propriedades de um objeto. */

const javascript = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};

Object.freeze(javascript);

console.log(Object.isExtensible(javascript));
console.log(Object.isSealed(javascript));
console.log(Object.isFrozen(javascript));

javascript.name = 'ECMAScript';
delete javascript.year;
javascript.author = 'Brendan Eich';

console.log(javascript);
