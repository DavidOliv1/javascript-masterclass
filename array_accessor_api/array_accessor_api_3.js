// Os accessor methods quando invocados retornam informações específicas sobre o array

// indexOf - retorna a posição do primeiro elemento encontrado
// lastIndexOf - retorna a posição do último elemento encontrado
// includes - retorna true se o elemento existir
// concat - retorna um novo array resultante da concatenação de um ou mais arrays
// slice - retorna partes de um determinado array de acordo com a posição de início e fim
// join - converte o array para uma String, juntando os elementos com base em um separador

// A construção abaixo pode num primeiro momento parecer que as functionalLanguages estão sendo inseridas dentro do array das ooLanguages, mas não é isso que ocorre, o concat não modifica os arrays originais e os mesmos permanecem inalterados. Apesar disso, existe uma outra construção para fazer não parecer que ocorre essa inserção, que é a que segue no exemplo languages1

const ooLanguages = ["Smalltalk", "C++", "Simula"];
const functionalLanguages = ["Haskell", "Scheme"];
const languages = ooLanguages.concat(functionalLanguages);
const languages1 = [].concat(ooLanguages, functionalLanguages);
console.log(languages);
console.log(languages1);
console.log(ooLanguages);
console.log(functionalLanguages);
