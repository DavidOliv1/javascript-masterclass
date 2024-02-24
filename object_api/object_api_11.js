/* Como o default das opções do método defineProperty() é false e não definimos 'configurable = true', o que permite apagar
as propriedades do objeto, não conseguiremos apagar essas propriedades. */

const javascript =  {};
Object.defineProperty(javascript, 'name', {
    value: 'JavaScript',
    enumerable: true
});

delete javascript.name;

console.log(javascript);

