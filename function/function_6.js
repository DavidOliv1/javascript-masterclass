/* Ao contrário de linguagens compiladas, o JavaScript permite que você não passe todos os parâmetros quando da chamada da função, 
fazendo com que a função leia aquele parâmetro como undefined e execute a operação com esse valor. Também podemos passar mais parâmetros
que os declarados no corpo da função, que se de alguma forma não forem acessados dentro da função, serão ignorados. */

const sum = function(a, b) {
    return a + b;
}

console.log(sum(2,2));
console.log(sum(5));
console.log(sum(1,2,3));