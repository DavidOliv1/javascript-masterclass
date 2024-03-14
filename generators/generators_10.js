// Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa

// Podemos criar uma função generator colocando o * ao lado da palavra function.

// O método return encerra o generator, podendo retornar um valor específico, que será o value do objeto retornado. Se nada for passado como argumento para o return, o value será undefined. Perceba que nos exemplos anteriores, o retorno de next sempre continha a propriedade done como false, uma vez que o generator ainda não havia sido encerrado. No exemplo abaixo, ao encerrar o generator através do método return, seu done retorna true e o value undefined.

function* forever() {
  let value = 1;
  while (true) {
    const reset = yield value++;
    if (reset) value = 1;
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
today();
console.log(foreverGenerator.return("end"));
console.log(foreverGenerator.next(true));
console.log(foreverGenerator.next());
