// Os mutator methods quando invocadoss modificam o array original

// push - adiciona um elemento no final
// pop - remove um elemento do final
// unshift - adiciona um elemento no início
// shift - remove um elemento do início
// splice - remove, substitui ou adiciona um ou mais elementos em uma determinada posição
// sort - ordena os elementos de acordo com a função de ordenação
// reverse - inverte a ordem dos elementos
// fill - preenche os elementos de acordo com a posição de início e fim

// O método splice retorna um array contendo os elementos removidos

// O método splice também permite a adição de elementos no array a partir de uma posição especificada. No exemplo abaixo, decidimos não remover nenhum elemento (o segundo argumento foi 0), e os elementos a partir do terceiro argumento serão adicionados ao array com o primeiro deles ocupando a posição indicada no primeiro argumento e os outros as posições subsequentes

const languages = ["Python", "C", "Java"];
console.log(languages);
console.log(languages.splice(1, 0, "C++", "C#"));
console.log(languages);
