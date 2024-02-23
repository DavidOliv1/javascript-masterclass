// QUANTIFICADORES

// {n} quantifica um número específico
// {n,} quantifica um número mínimo
// {n, m} quantifica um número mínimo e um número máximo
// ? zero ou um
// * zero ou mais
// + um ou mais

let regExp = /^[a-z]{3,4}@gmail.com$/;
console.log(regExp.exec('john@gmail.com'));
console.log(regExp.exec('jane@gmail.com'));
// [a-z] só engloba caracteres minusculos
console.log(regExp.exec('MARY@gmail.com'));
// Aqui funciona porque o quantificador específico o número mínimo de 3 caracteres
console.log(regExp.exec('joe@gmail.com'));