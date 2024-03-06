// Por meio do destructuring podemos extrair valores de arrays e objetos de uma forma mais simples e direta.

const language = "C;Dennis Ritchie;1972".split(";");
const name = language[0];
const author = language[1];
const year = language[2];
console.log(name);
console.log(author);
console.log(year);
