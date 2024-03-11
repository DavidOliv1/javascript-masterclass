// Um proxy é capaz de interceptar diversos tipos de operações em um objeto alvo

// O proxy recebe como segundo argumento na sua função construtora um handler, que define o comportamento do proxy quando uma operação é performada nele

function createArray() {
  return new Proxy({});
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
console.log(languages.length);
