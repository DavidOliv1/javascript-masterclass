// WeakMap é um objeto, similar ao Map, que permite apenas chaves do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável

// set - adicionar um par de chave e valor
// has - retorna true se a chave existir
// get - retorna o valor de uma determinada chave
// delete - remove um par de chave e valor

const wm1 = new WeakMap();
const obj1 = {};
const obj2 = {};
wm1.set(obj1, "obj1");
wm1.set(obj2, "obj1");
console.log(wm1);
console.log(wm1.has(obj1));
console.log(wm1.has(obj2));
