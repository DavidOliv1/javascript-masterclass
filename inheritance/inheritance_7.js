/* Se tanto o objeto quanto o seu protótipo tiverem a mesma propriedade, será retornado a propriedade do objeto, esse comportamento
é chamado de 'shadowing', uma vez que a propriedade do objeto faz sombra a propridade do protótipo. */

const functionalLanguage = Object.create({});
functionalLanguage.paradigm = 'Functional';

const scheme = Object.create(functionalLanguage);
scheme.name = 'Scheme';
scheme.year = 1975;


const javascript = Object.create(functionalLanguage);
javascript.name = 'JavaScript';
javascript.year = 1995;
javascript.paradigm = 'OO';

console.log(javascript);
