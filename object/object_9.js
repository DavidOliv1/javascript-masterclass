const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: 'English',
    available: true
};

// ERRADO

/* O código abaixo não funciona pois a 'key' dentro do for-in é definida em tempo de execução, quando o loop está sendo executado,
e no acesso a propriedades de objetos por meio da sua referência, o javascript espera um nome de propriedade pré-definido,
dessa forma, para acessar o valor da variável 'key' devemos usar a notação de colchetes */

for (let key in book) {
    console.log(book.key);
}

// CERTO

for (let key in book) {
    console.log(book[key]);
}

/* No JavaScript, o operador de ponto (.) é usado para acessar propriedades de objetos quando você sabe o nome da propriedade 
em tempo de desenvolvimento. 

No entanto, quando você precisa acessar uma propriedade usando uma variável, como no caso de um loop for-in, você precisa usar a 
notação de colchetes ([]). Isso ocorre porque o operador de ponto espera um nome de propriedade literalmente, enquanto a notação 
de colchetes permite que você use expressões para avaliar o nome da propriedade dinamicamente. Então, quando você escreve book.key, 
JavaScript está tentando acessar uma propriedade chamada "key" em vez do valor da variável key.

Por isso, dentro de um loop for-in, é necessário usar book[key] para acessar dinamicamente o valor associado à chave atualmente 
iterada. */