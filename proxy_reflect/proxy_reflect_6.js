// Um proxy é capaz de interceptar diversos tipos de operações em um objeto alvo

// Aqui, estamos deletando as propriedades mencionadas, mas perceba que o length está inalterado. Portanto, essa operação de delete precisa ser refinada para representar o comportamento que queremos. Podemos interceptá-la usando o deleteProperty

function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0;
        target.length++;
        target[key] = value;
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
