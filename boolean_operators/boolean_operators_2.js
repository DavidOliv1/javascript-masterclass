console.log(0 == ''); //true
/* obs: para o caso de termos uma comparação entre um número e uma string, 
a coerção de tipos do javascript tentará converter o segundo para o tipo do operando anterior, por isso essa comparação retorna true */
console.log(0 == '0'); //true  
console.log(0 == '1'); //false
console.log(false == undefined); //false
console.log(false == null); //false
console.log(null == undefined); //true
console.log(1 == true); //true
console.log(0 == false); //true
console.log(0 == '\n'); //true