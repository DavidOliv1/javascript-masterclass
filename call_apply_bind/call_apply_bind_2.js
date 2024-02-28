/* Por meio dos métodos call e apply conseguimos invocar uma função passando o 'this' por parâmetro. */
/* Usando o call, podemos passar como parâmetro o objeto a que o this fará referência, o que fará o código funcionar normalmente. */

const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
}

const circle = {
    radius: 10,
    calculateArea,
};

console.log(calculateArea.call(circle));