/* Para criar objetos que possuem a mesma estrutura, podemos usar um tipo de função chamado de 'função fábrica', que retorna um objeto
após ser invocada diretamente. Veja, entretanto, que a propriedade getAge se repete nos diferentes objetos que são criados a partir
dessa função. Para isso, podemos definir essa função em um outro objeto que será o protótipo da função createPerson (ver prox exemplo).
*/

const createPerson = function(name, city, year) {
    return {
        name,
        city,
        year,
        getAge() {
            return new Date().getFullYear() - this.year;
        }
    }
};

const person1 = createPerson('Linus Torvalds', 'Helsinki', 1969);
const person2 = createPerson('Bill Gates', 'Seatle', 1955);

console.log(person1);
console.log(person1.getAge());
console.log(person2);
console.log(person2.getAge());