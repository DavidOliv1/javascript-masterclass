// É preciso ter atenção pois nem sempre a conversão funciona da maneira que se possa esperar

/* Veja no exemplo abaixo que o operador "+", quando posto entre uma string e um número, acha que estamos tentando realizar uma 
concatenação. Nesse caso, o segundo operando é convertido para string. */

console.log("10" + 0);