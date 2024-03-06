// No JavaScript, o array é um objeto que oferece operações para acessar e manipular suas propriedades

// A propriedade length indica a quantidade de elementos que existem dentro do Array

// Os elementos vazios dentro do Array não são considerados como elementos a menos no Array, eles são computados na contagem. No exemplo abaixo, em que definimos elementos de forma espaçada, perceba que o array terá como length o tamanho 21, tendo em vista o início na posição [0] e o término na posição [20], apesar de apenas 3 dos elementos estarem preenchidos.

const languages = [];

languages[0] = "Python";
languages[10] = "C";
languages[20] = "Java";

console.log(languages);
console.log(languages.length);
