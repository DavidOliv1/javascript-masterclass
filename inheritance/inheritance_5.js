/* Definindo o protótipo como null, a cadeia de protótipos é encerrada. Sendo assim, quando da subida na cadeia de protótipos
para encontrar o método 'hasOwnProperty', incorremos em erro por não encontrar o método no último protótipo da cadeia. */

const functionalLanguage = Object.create(null);
functionalLanguage.paradigm = 'Functional';

const scheme = Object.create(functionalLanguage);
scheme.name = 'Scheme';
scheme.year = 1975;


const javascript = Object.create(functionalLanguage);
javascript.name = 'JavaScript';
javascript.year = 1995;

for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}

