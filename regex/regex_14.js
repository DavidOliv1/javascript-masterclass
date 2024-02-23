// METACARACTERES

// \w - [a-zA-Z0-9_]
// \W - [^a-zA-Z0-9_]
// \d - [0-9]
// \D - [^0-9]
// \s - espaço em branco
// \S - um não espaço em branco
// \n - quebra de linha
// \t - tab

let regExp = /^\w+@\w+(\.\w{2,3})+$/;
// Agora funciona pois o quantificador estabelece um limite mínimo de 2 caracteres
console.log(regExp.exec('mary@hotmail.io'));
console.log(regExp.exec('mary@hotmail.com.br'));