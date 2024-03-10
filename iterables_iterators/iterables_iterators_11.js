// Iterables e Iterators são convenções implementadas por Arrays, Maps, Sets e Strings que os tornam iteráveis por meio de um protocolo de iteração

// Além do Array é possível utilizar o protocolo de iteração dos objetos Map, Set e String

const languages = new Set(["Fortran", "Lisp", "COBOL"]);

console.log(languages);
console.log([...languages]);
