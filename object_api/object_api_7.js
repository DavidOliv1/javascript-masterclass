/* Podemos definir as propriedades de um objeto através do método defineProperty() da Object API,
esse método espera algumas opções de configuração que por default são false, uma dessas opções
é o enumerable, que torna a propriedade enumerável. No código abaixo, como não definimos um valor true
para essa opção e o default é false, essa propriedade não é enumerada e não conseguimos visualizá-la por padrão,
apesar de podermos acessá-la pela sua referência. */

const javascript =  {};
Object.defineProperty(javascript, 'name', {
    value: 'JavaScript'
});
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));
console.log(javascript.name);

