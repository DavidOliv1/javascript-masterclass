// Um proxy é capaz de interceptar diversos tipos de operações em um objeto alvo

function createArray() {
  return {};
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
console.log(languages.length);
