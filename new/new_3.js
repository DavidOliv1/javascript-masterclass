/* Aqui definimos a função getAge em um outro objeto que será o protótipo da função createPerson. Isso garante que os objetos criados
a partir dessa função não tenham a propriedade getAge repetida. */

const personPrototype = {
    getAge() {
        return new Date().getFullYear() - this.year;
    }
};

const createPerson = function(name, city, year) {
    const person = {
        name,
        city,
        year
    };
    Object.setPrototypeOf(person, personPrototype);
    return person;
};

const person1 = createPerson('Linus Torvalds', 'Helsinki', 1969);
const person2 = createPerson('Bill Gates', 'Seatle', 1955);

console.log(person1);
console.log(person1.getAge());
console.log(person2);
console.log(person2.getAge());