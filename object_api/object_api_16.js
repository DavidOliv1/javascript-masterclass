/* Ao utilizarmos preventExtensions(), seal() ou freeze() da Object API em algum objeto, não conseguimos alterar o seu protótipo, 
que se torna imutável. Isso ocorre porque o objeto se torna inextensível e não pode adquirir novas propriedades de um outro
protótipo. */

const javascript = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};

Object.freeze(javascript);

Object.setPrototypeOf(javascript, {});
