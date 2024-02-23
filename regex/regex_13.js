// METACARACTERES

// \w - [a-zA-Z0-9_]
// \W - [^a-zA-Z0-9_]
// \d - [0-9]
// \D - [^0-9]
// \s - espaço em branco
// \S - um não espaço em branco
// \n - quebra de linha
// \t - tab

let regExp = /^\w+@\w+\.\w{3}$/;
console.log(regExp.exec('john@gmail.com'));
console.log(regExp.exec('john@hotmail.com'));
console.log(regExp.exec('mary@hotmail.com'));
// Precisa ser dois caracteres
console.log(regExp.exec('mary@hotmail.io'));