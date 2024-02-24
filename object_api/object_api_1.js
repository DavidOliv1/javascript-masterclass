/* Object.assign() copia as propriedades de um ou mais objetos para um
objeto alvo e retorna este objeto alvo */

const javascript = Object.create({});
const newObject = Object.assign(javascript, {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
}, {
    author: 'Brendan Eich',
    influencedBy: 'Java, Scheme and Self'
});
console.log(javascript);
console.log(newObject);