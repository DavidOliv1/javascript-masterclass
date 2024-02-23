// DEFININDO PROPRIEDADES DOS OBJETOS EM TEMPO DE EXECUÇÃO POR MEIO DE [] E USANDO SUA REFERÊNCIA

const key1 = 'title';
const key2 = 'author';
const key3 = 'number-of-pages';
const key4 = 'language';
const key5 = 'available';

const book = {};

book[key1] = 'Clean Code';
book[key2] = 'Robert C. Martin';
book[key3] = 464;
book[key4] = 'English';
book[key5] = true;


console.log(book);