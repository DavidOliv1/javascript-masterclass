// NÃO COMPARAR OBJETOS PELAS SUAS REFERÊNCIAS, POIS OCUPAM DIFERENTES ENDEREÇOS DE MEMÓRIA

// PARA SABER SE SÃO IGUAIS, DEVEM SER PERCORRIDOS E COMPARADOS SUAS CHAVES E VALORES

/* São necessários 2 laços for para comparar totalmente os objetos, uma vez que com apenas um laço iterariamos apenas sobre
as propriedades de um deles, não garantindo sua igualdade. */

const book1 = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
};

const book2 = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
};

let equal = true;

for (let key in book1) {
    if(book1[key] !== book2[key]) {
        equal = false;
    }
}

for (let key in book2) {
    if(book1[key] !== book2[key]) {
        equal = false;
    }
}

console.log(equal);