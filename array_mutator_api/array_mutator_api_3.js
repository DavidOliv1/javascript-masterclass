// Os mutator methods quando invocadoss modificam o array original

// push - adiciona um elemento no final
// pop - remove um elemento do final
// unshift - adiciona um elemento no início
// shift - remove um elemento do início
// splice - remove, substitui ou adiciona um ou mais elementos em uma determinada posição
// sort - ordena os elementos de acordo com a função de ordenação
// reverse - inverte a ordem dos elementos
// fill - preenche os elementos de acordo com a posição de início e fim

// Conforme mencionado na aula de arrays, não é indicado usar o operador delete para fazer a remoção de elementos do array, para isso, usamos o splice

// O método splice retorna um array contendo os elementos removidos

// Perceba que enquanto o operador delete deixa um elemento com espaço vazio no lugar do elemento removido, o que faz com que o valor do length não seja tão preciso, o splice remove de fato o elemento e o seu 'empty slot', fazendo com que o array tenha de fato o length desejado

const languages = ["Python", "C", "Java"];
console.log(languages);
console.log(languages.splice(1, 1));
console.log(languages);
