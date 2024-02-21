console.log("C++".localeCompare("Ruby"));
console.log("Python".localeCompare("Java"));
console.log("JavaScript".localeCompare("JavaScript"));

/* O localeCompare implementa a ordenação levando em consideração já a acentuação.
Ou seja, mesmo que ('á' < 'b') === false, pois 'á' na tabela UTF-16 é 255 e 'b' = 98, uma comparação do tipo 'á'.localeCompare('b') 
retornará -1, ou seja, 'a' sendo menor que 'b'.
*/