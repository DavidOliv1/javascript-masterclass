// A Reflect API tem os mesmos métodos que existem no Proxy, permitindo a execução de diversos tipos de operações no objeto alvo

// A Reflect não é instanciada como objeto com o operador new, todas as suas propriedades e métodos são estáticos, ela permite que você interaja com objetos sem utilizar o bracket notation (colchetes) ou o operador delete, é uma forma alternativa de se trabalhar com os objetos

function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0;
        target.length++;
        Reflect.set(target, key, value);
      },
      get(target, key) {
        if (typeof key === "string" && key.match(/\d+/)) {
          if (!Reflect.has(target, key)) {
            throw `Property ${key} not found`;
          }
        }
        return Reflect.get(target, key);
      },
      deleteProperty(target, key) {
        if (!Reflect.has(target, key)) {
          return;
        }
        Reflect.deleteProperty(target, key);
        target.length--;
      },
    }
  );
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
console.log(languages.length);
delete languages[1];
delete languages[2];
delete languages[3];
console.log(languages);
console.log(languages.length);
console.log(languages[0]);
