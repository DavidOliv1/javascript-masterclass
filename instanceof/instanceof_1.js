/* Por meio do operador instanceof conseguimos verificar se um objeto foi criado por meio de uma determinada função construtora 
analisando sua cadeia de protótipos. */

const date = new Date();

console.log(date instanceof Date);
console.log(date instanceof Object);
console.log(date instanceof Array);
console.log(typeof date);