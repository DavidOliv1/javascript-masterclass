// GRUPOS DE CAPTURA

let regExp = /^(\w+)@(\w+)(\.\w{2,3})+$/;
// Agora funciona pois o quantificador estabelece um limite mínimo de 2 caracteres
console.log(regExp.exec('mary@hotmail.com'));
/* O ".com" não é retornado porque o grupo de captura final encontra duas correspondências válidas: '.com' e '.br', 
e como .br é a última correspondência, é isso que é capturado e retornado. */
console.log(regExp.exec('jane@hotmail.com.br'));