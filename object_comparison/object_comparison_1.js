// NÃO COMPARAR OBJETOS PELAS SUAS REFERÊNCIAS, POIS OCUPAM DIFERENTES ENDEREÇOS DE MEMÓRIA

// PARA SABER SE SÃO IGUAIS, DEVEM SER PERCORRIDOS E COMPARADOS SUAS CHAVES E VALORES

const book1 = {
    title: 'Clean Code',
    author: 'Robert C. Martin'
};

const book2 = {
    title: 'Clean Code',
    author: 'Robert C. Martin'
};

console.log(book1 === book2);