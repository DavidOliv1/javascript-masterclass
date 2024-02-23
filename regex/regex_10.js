// GRUPOS

// [abc] - aceita qualquer caractere dentro do grupo: a, b ou c
// [^abc] - não aceita qualquer caractere dentro do grupo: a, b ou c
// [0-9]
// [^0-9]

let regExp = /^[a-z][a-z][a-z][a-z]@gmail.com$/;
console.log(regExp.exec('john@gmail.com'));
console.log(regExp.exec('jane@gmail.com'));
// Precisa ser 4 caracteres
console.log(regExp.exec('joe@gmail.com'));