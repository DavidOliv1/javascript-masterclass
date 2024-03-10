// Iterables e Iterators são convenções implementadas por Arrays, Maps, Sets e Strings que os tornam iteráveis por meio de um protocolo de iteração

// Além do Array é possível utilizar o protocolo de iteração dos objetos Map, Set e String

// Todo Iterable tem uma propriedade de chave [Symbol.iterator] que define o protocolo de iteração para o objeto

// Perceba que imprimimos o value undefined nas funções abaixo ao chamar iterator1.next(), isso ocorre pelo fato de termos iterado antes por esses valores no laço for of.

const languages = ["Fortran", "Lisp", "COBOL"];
const iterator = languages[Symbol.iterator];
const iterator1 = languages[Symbol.iterator]();

for (let element of iterator1) {
  console.log(element);
}

console.log(iterator);
console.log(iterator1);
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
