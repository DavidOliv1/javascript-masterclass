// As arrow functions não possuem as suas próprias variáveis this e arguments. No exemplo abaixo, do método getAge, se utilizarmos a arrow function, o this não fará referência ao objeto que chama a função, mas sim ao objeto global, tendo em vista esse comportamento de não possuir 'this' próprio. Como year não é uma propriedade definida no objeto global, seu retorno será undefined, e o método getAge terá como resultado NaN.

const person = {
  name: "James Gosling",
  city: "Alberta",
  year: 1955,
  getAge: () => {
    console.log(this);
    return new Date().getFullYear() - this.year;
  },
};

console.log(person);
console.log(person.getAge());
