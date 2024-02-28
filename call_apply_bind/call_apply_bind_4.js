/* Por meio dos métodos call e apply conseguimos invocar uma função passando o 'this' por parâmetro. */
/* Usando o call, podemos passar como parâmetro o objeto a que o this fará referência, o que fará o código funcionar normalmente. */
/* O apply também pode ser utilizado com a mesma finalidade. Mas com uma pequena diferença. Tanto o call quanto o apply recebem
como primeiro parâmetro o 'this' a que fará referência, e os próximos parâmetros serão os argumentos da função que estão invocando,
entretanto, no apply, os argumentos devem ser fornecidos num array, entre colchetes, sob pena de incorrer em erro. Essa forma de
fornecer os argumentos dentro de um array, permite que possamos passa-los de forma dinâmica. Recomenda-se utilizar o call quando já sou-
bermos os argumentos de antemão, e o apply quando precisarmos decidi-los em tempo de execução. */

const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
}

const circle = {
    radius: 10,
    calculateArea,
};

console.log(calculateArea.call(circle, Math.round));
console.log(calculateArea.apply(circle, [Math.ceil]));