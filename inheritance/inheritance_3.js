const functionalLanguage = {
    paradigm: 'Functional'
}

const scheme = {
    name: 'Scheme',
    year: 1975,
};

Object.setPrototypeOf(scheme, functionalLanguage);

const javascript = {
    name: 'JavaScript',
    year: 1995,
};

Object.setPrototypeOf(javascript, functionalLanguage);

// O for-in percorre as chaves no próprio objeto e também no seu protótipo, por isso o paradigma é impresso no console.log
// O método hasOwnProperty permite descobrir se determinada propriedade pertence ao objeto ou ao seu protótipo

for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}

