const functionalLanguage = {
    paradigm: 'Functional'
}

const scheme = {
    name: 'Scheme',
    year: 1975,
    __proto__: functionalLanguage
};

const javascript = {
    name: 'JavaScript',
    year: 1995,
    __proto__: functionalLanguage
};

/* O console.log do objeto só imprime suas próprias propriedades, e não as do seu protótipo. Apesar disso, conseguimos acessar as pro-
priedades do protótipo normalmente pela referência do objeto. */

console.log(functionalLanguage);
console.log(scheme);
console.log(javascript);
console.log(scheme.paradigm);
console.log(javascript.paradigm);

