/* O método Object.is() determina se dois valores correspondem ao mesmo valor, 
observe que o fato de dois objetos terem as mesmas propriedades de chave e valor
não garantem sua igualdade nesse método, uma vez que suas referências são diferentes. */


const javascript1 = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};

const javascript2 = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};


console.log(Object.is(javascript1, javascript1));
console.log(Object.is(javascript2, javascript2));
console.log(Object.is(javascript1, javascript2));
