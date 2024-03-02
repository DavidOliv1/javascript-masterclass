// As arrow functions não possuem as suas próprias variáveis this e arguments.

// Para retornar um objeto utilizando a sintaxe das arrow functions, devemos envolver o objeto com parênteses logo depois de remover as chaves do bloco e o return.

const createPerson = (name, city, year) => ({ name, city, year });

const person = createPerson("Alan Kay", "Springfield", 1940);

console.log(person);
