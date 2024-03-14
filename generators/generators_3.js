// Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa

// Podemos criar uma função generator colocando o * ao lado da palavra function.

function* forever() {
  let value = 1;
  while (true) {
    console.log(value++);
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator);
console.log(typeof foreverGenerator);

// O método getOwnPropertyNames permite que tenhamos acesso aos nomes das propriedades do objeto passado como argumento (incluindo as propriedades não enumeráveis).
console.log(Object.getOwnPropertyNames(foreverGenerator.__proto__.__proto__));

// Perceba que o laço abaixo não imprime as propriedades, uma vez que as mesmas não são enumeraveis
for (let key in foreverGenerator.__proto__.__proto__) {
  console.log(key);
}

today();
