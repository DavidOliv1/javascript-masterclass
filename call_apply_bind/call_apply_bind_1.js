/* Por meio dos métodos call e apply conseguimos invocar uma função passando o 'this' por parâmetro. */
/* No exemplo abaixo, se chamarmos a função diretamente, o retorno seria NaN, tendo em vista que o this fará referência ao
objeto global e a propriedade radius não está definida para este objeto, retornando undefined. */

const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
}

const circle = {
    radius: 10,
    calculateArea,
};

console.log(calculateArea());