// Com 'configurable=true'

const javascript =  {};
Object.defineProperty(javascript, 'name', {
    value: 'JavaScript',
    enumerable: true,
    configurable: true
});

delete javascript.name;

console.log(javascript);

