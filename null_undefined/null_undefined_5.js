// NÃO ATRIBUIR NULL OU UNDEFINED A PROPRIEDADES DE OBJETOS QUE NÃO DEVERIAM EXISTIR, USAR OPERADOR DELETE

const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: 'English',
    available: true
};

delete book.available; // ou delete book['available'];

console.log(book);
console.log('available' in book);