// Com 'writable=true'

const javascript =  {};
Object.defineProperty(javascript, 'name', {
    value: 'JavaScript',
    enumerable: true,
    writable: true
});

javascript.name = 'ECMAScript';

console.log(javascript);

