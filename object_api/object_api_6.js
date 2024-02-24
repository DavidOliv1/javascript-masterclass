/* O método Object.is() age como um polyfill, ou uma camada acima
do operador '===', realizando algumas operações nesses tipos de dados,
por isso as duas igualdades retornam valores diferentes. */

console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));