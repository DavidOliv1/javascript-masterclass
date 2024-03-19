// Os tipos de dados na linguagem JavaScript se dividem em primitivos e objetos

// Os tipos primitivos são imutáveis, ou seja, ao longo do tempo seu valor não é alterado

// Os tipos primitivos no JavaScript sofrem um processo chamado de 'boxing', que funciona como um wrapper ao tipo primitivo, formando-se um objeto em volta deles que fornece métodos da API do protótipo do objeto.

console.log((10).toFixed(2));
console.log("JavaScript".replace("a", 4));
console.log(true.toString());
console.log(Symbol("iterator").toString());
