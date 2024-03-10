// Iterables e Iterators são convenções implementadas por Arrays, Maps, Sets e Strings que os tornam iteráveis por meio de um protocolo de iteração

// O for of é um dos usos dos iterables, somente funciona se o objeto sendo iterado seguir a convenção do iterable e iterator

const languages = ["Fortran", "Lisp", "COBOL"];
for (let language of languages) {
  console.log(language);
}
