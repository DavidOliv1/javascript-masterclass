// No JavaScript, o array é um objeto que oferece operações para acessar e manipular suas propriedades

// A propriedade length indica a quantidade de elementos que existem dentro do Array

// Os elementos vazios dentro do Array não são considerados como elementos a menos no Array, eles são computados na contagem, veja por exemplo que ao excluir a linguagem 'C', na posição 1 abaixo, o length do array continua sendo 3, apesar de sua posição na 1 estar vazia.

// O operador delete não é recomendado para realizar operações no array, que possui métodos próprios para lidar com remoção de elementos

const languages = [];

languages[0] = "Python";
languages[1] = "C";
languages[2] = "Java";

console.log(languages);
console.log(languages.length);

delete languages[1];

console.log(languages);
console.log(languages.length);
