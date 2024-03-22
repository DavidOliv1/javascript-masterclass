// O tipo String é primitivo, imutável e é representado internamente pelo padrão Unicode, codificado em UTF-16

// Alguns tipos de caracteres não são permitidos e precisam ser escapados

/* Se tivermos por exemplo uma string declarada com aspas duplas, para usar aspas dentro dessa string devemos escapá-la com a barra
invertida "\". O mesmo ocorre se declararmos uma string com aspas simples, para poder utilizar aspas simples dentro dessa string 
devemos escapá-la. */

/* O caractere de quebra de linha "\n" (ou \u000A em unicode) é um outro exemplo de caractere que precisa ser escapado. Se usarmos 
o "\n" diretamente na string haverá uma quebra de linha, mas se quisermos imprimir o caractere na string devemos escapá-lo "\\n". */

console.log("Each constructor is a function that has a property named \"prototype\" that is used to implement prototype-based \
inheritance and shared properties.");
console.log('An object\'s prototype chain should have finite \
length.');
console.log(`The proper way to cause a line terminator code point to be part of the String value of a string literal is to use
an escape sequence such as \\n or \\u000A`);