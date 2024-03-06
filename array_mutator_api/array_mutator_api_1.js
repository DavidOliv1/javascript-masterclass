// Os mutator methods quando invocadoss modificam o array original

// push - adiciona um elemento no final
// pop - remove um elemento do final
// unshift - adiciona um elemento no início
// shift - remove um elemento do início
// splice - remove, substitui ou adiciona um ou mais elementos em uma determinada posição
// sort - ordena os elementos de acordo com a função de ordenação
// reverse - inverte a ordem dos elementos
// fill - preenche os elementos de acordo com a posição de início e fim

// O método push, do array mutator api, retorna o novo length do array após a inserção do elemento passado como parâmetro

// Já o método pop, retorna o elemento que foi removido do array

const languages = ["Python", "C", "Java"];
console.log(languages);
console.log(languages.push("Ruby"));
console.log(languages.push("Go"));
console.log(languages);
console.log(languages.pop());
console.log(languages);
