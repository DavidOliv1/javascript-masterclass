// Os mutator methods quando invocadoss modificam o array original

// push - adiciona um elemento no final
// pop - remove um elemento do final
// unshift - adiciona um elemento no início
// shift - remove um elemento do início
// splice - remove, substitui ou adiciona um ou mais elementos em uma determinada posição
// sort - ordena os elementos de acordo com a função de ordenação
// reverse - inverte a ordem dos elementos
// fill - preenche os elementos de acordo com a posição de início e fim

// O método sort ordena o array de acordo com o retorno da função de ordenação passada como argumento do método. Se o retorno da função for igual a 0, a e b ficam inalterados um em relação ao outro. Se o retorno for menor que 0, 'a' é ordenado para um indice anterior a 'b' (a vem antes de b). Se o retorno for maior que 0, ordena 'b' para um indice anterior a 'a' (b vem antes de a).

const languages = [
  {
    name: "Python",
    year: 1991,
  },
  {
    name: "C",
    year: 1972,
  },
  {
    name: "Java",
    year: 1995,
  },
];

languages.sort(function (a, b) {
  return b.year - a.year;
});

console.log(languages);
