// Um proxy é capaz de interceptar diversos tipos de operações em um objeto alvo

// O método set é invocado quando uma propriedade é definida no objeto

// Veja que se o corpo do método set ficar vazio, não teremos propriedades no objeto, uma vez que é a responsabilidade desse método definir o comportamento

function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        console.log(target, key, value);
      },
    }
  );
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
