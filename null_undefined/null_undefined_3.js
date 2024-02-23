// NÃO ATRIBUIR NULL OU UNDEFINED A PROPRIEDADES DE OBJETOS QUE NÃO DEVERIAM EXISTIR, USAR OPERADOR DELETE

const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: 'English',
    available: true
};

book.available = undefined;

console.log(book);
console.log('available' in book);