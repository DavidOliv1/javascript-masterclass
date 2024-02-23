// Caractere de início: ^

let regExp = /^john@gmail.com/;
let result = regExp.exec('E-mail: john@gmail.com');
console.log(result);