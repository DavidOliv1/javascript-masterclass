// WeakSet é um objeto, similar ao Set, que permite apenas valores do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável

// add - adiciona um elemento
// has - retorna true se o elemento existir
// delete - remove um elemento

// O método delete retorna um boolean que indica se o elemento foi removido com sucesso.

const ws1 = new WeakSet();
const obj1 = {};
const obj2 = {};
ws1.add(obj1);
ws1.add(obj2);
console.log(ws1);
console.log(ws1.delete(obj2));
console.log(ws1.has(obj1));
console.log(ws1.has(obj2));
