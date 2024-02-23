// GRUPOS DE CAPTURA

let regExp = /^(\w+)@(\w+(\.\w{2,3})+)$/;
// Agora funciona pois o quantificador estabelece um limite mínimo de 2 caracteres
console.log(regExp.exec('mary@hotmail.com'));
console.log(regExp.exec('jane@hotmail.com.br'));