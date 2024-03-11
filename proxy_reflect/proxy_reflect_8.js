// Um proxy é capaz de interceptar diversos tipos de operações em um objeto alvo

// O método deleteProperty é invocado quando uma propriedade é deletada

function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0;
        target.length++;
        target[key] = value;
      },
      deleteProperty(target, key) {
        if (!target[key]) {
          return;
        }
        delete target[key];
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
