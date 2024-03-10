// WeakMap é um objeto, similar ao Map, que permite apenas chaves do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável

// set - adicionar um par de chave e valor
// has - retorna true se a chave existir
// get - retorna o valor de uma determinada chave
// delete - remove um par de chave e valor

// No WeakMap, sem a referência para a chave não é possível acessar o valor do elemento

// Os WeakMaps são estruturas de dados projetadas para evitar memory leaks (ou vazamentos de memória, que acontece quando sua aplicação aloca um espaço na memória e nunca mais o libera). Pode acontecer, por exemplo, de criarmos objetos ou arrays que sejam populados de forma contínua, ocupando cada vez mais espaço na memória, se esses dados não forem removidos depois, a memória não será devolvida para o sistema operacional, causando o que se chama de memory leak. Os weakmaps contornam esse problema por terem o que se chama de 'referência fraca', uma vez que as chaves do seus elementos são referências a objetos. Se a referência ao objeto for perdida, como nos casos em que a chave do objeto é populada com null ou finalize seu ciclo de vida (por meio do encerramento do escopo de execução da função que o criou), o elemento fica elegível para o garbage collector, que o remove da memória.

// Sendo assim, a principal função dos weakmaps é poder implementar coleções com referência fraca para que não haja a preocupação de remover seus elementos de forma manual posteriormente

// No exemplo abaixo, usamos o weakmap como cache para retornar um cálculo de área que já tenha sido realizado anteriormente para aquele objeto, isso evita o uso excessivo de memória para cálculos complexos, evitando a repetição de cálculos anteriormente realizados. Ademais, como a chave do weakmap é a referência do objeto que está realizando o cálculo, caso por algum motivo o objeto deixe de existir, o elemento será removido do weakmap.

const areas = new WeakMap();

const rectangle1 = {
  x: 10,
  y: 2,
};

const rectangle2 = {
  x: 5,
  y: 3,
};

function calculateArea(rectangle) {
  if (areas.has(rectangle)) {
    console.log("Using cache...");
    return areas.get(rectangle);
  }
  const area = rectangle.x * rectangle.y;
  areas.set(rectangle, area);
  return area;
}

console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));
console.log(calculateArea(rectangle2));
