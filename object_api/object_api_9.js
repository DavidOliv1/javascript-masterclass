/* Como o default das opções do método defineProperty() é false e não definimos 'writable = true', o que permite modificar
o valor das propriedades do objeto, temos que as alterações nas suas propriedades não surtirão efeito. */

const javascript =  {};
Object.defineProperty(javascript, 'name', {
    value: 'JavaScript',
    enumerable: true
});

javascript.name = 'ECMAScript';

console.log(javascript);

