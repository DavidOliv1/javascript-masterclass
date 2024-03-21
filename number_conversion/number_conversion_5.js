/* O método parseInt permite converter uma string para um número. Para isso basta indicar o número e a sua base, que caso não seja
informada será 10. */

console.log(parseInt("10", 10));

// No exemplo abaixo perdemos a parte decimal (0.9) porque o parseInt retorna um número inteiro.
console.log(parseInt("9.9", 10));

// Veja que o exemplo abaixo só funciona porque estamos dizendo que a base é 16. 
console.log(parseInt("A", 16));

/* Se tentarmos converter uma string "A" para um inteiro sem especificar a base 16, teremos o resultado NaN, pois o método parseInt
implicitamente considera a base 10. */
console.log(parseInt("A"));

console.log(parseInt("11", 2));
console.log(parseInt("010", 8));
