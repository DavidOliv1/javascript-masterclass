/* Também podemos usar os setters para definir as propriedades internas de nosso objeto seguindo alguma regra. 
Os setters devem ter obrigatoriamente um único parâmetro definido. Devemos utilizar chaves diferentes para a função
setter e a propriedade do objeto, no exemplo abaixo o this.x chamaria a função set novamente, que ao ser chamada
usaria o this.x para chamar o set novamente, e assim sucessivamente, entrando em loop, o que resultaria no tamanho máximo da 
pilha de execução, resultando em erro. */

const rectangle = {
    set x(x) {
        this.x = x;
    },
    set y(y) {
        this.y = y;
    },
    get area() {
        return this.x * this.y;
    }
};

rectangle.x = 10;
rectangle.y = 2;