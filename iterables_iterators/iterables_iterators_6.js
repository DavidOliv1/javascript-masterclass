// Iterables e Iterators são convenções implementadas por Arrays, Maps, Sets e Strings que os tornam iteráveis por meio de um protocolo de iteração

// O spread operator também se baseia em objetos do tipo iterable, permitindo o espalhamento de objetos que seguem essa convenção

const classicLanguages = ["Fortran", "Lisp", "COBOL"];
const modernLanguages = ["Python", "Ruby", "JavaScript"];
const languages = [...classicLanguages, ...modernLanguages];
console.log(languages);
